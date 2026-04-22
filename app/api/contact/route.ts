import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createAdminClient } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    const supabaseAdmin = createAdminClient();

    const { error: dbError } = await supabaseAdmin
      .from("contact_submissions")
      .insert({ name, email, project_type: projectType, message });

    if (dbError) {
      console.error("Supabase insert error:", dbError.message);
      return NextResponse.json(
        { error: "Failed to save submission" },
        { status: 500 },
      );
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL ?? "hello@glennhudson.com",
      subject: `New enquiry from ${name} — ${projectType}`,
      html: `
        <h2 style="margin-bottom:16px">New Portfolio Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p style="margin-top:16px"><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${message}</p>
      `,
    });

    return NextResponse.json(
      { message: "Thank you for your message. I'll be in touch soon." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process contact form" },
      { status: 500 },
    );
  }
}
