import type { Metadata } from "next";
import { Crimson_Text, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site-content";
import { getSiteSettings } from "@/lib/db";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const displayFont = Crimson_Text({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL("https://glennhudson.com"),
  alternates: { canonical: "https://glennhudson.com" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://glennhudson.com",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: `${siteConfig.name} - ${siteConfig.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.seo.ogImage],
    creator: siteConfig.seo.twitterHandle,
  },
  robots: { index: true, follow: true, nocache: false },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const settings = await getSiteSettings();

  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}>
      <head>
        <meta name="theme-color" content="#1A1815" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.name,
              description: siteConfig.description,
              image: siteConfig.seo.ogImage,
              jobTitle: siteConfig.tagline,
              url: "https://glennhudson.com",
              sameAs: [
                settings.social_instagram || siteConfig.social.instagram,
                settings.social_youtube || siteConfig.social.youtube,
              ],
              location: { "@type": "City", name: siteConfig.location },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
        <Navbar />
        {children}
        <Footer settings={settings} />
      </body>
    </html>
  );
}
