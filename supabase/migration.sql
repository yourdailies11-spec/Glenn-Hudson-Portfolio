-- Glenn Hudson Portfolio — Supabase Migration
-- Run this in your Supabase SQL editor (Database > SQL Editor > New query)

-- ============================================================
-- PORTFOLIO ITEMS
-- ============================================================
create table portfolio_items (
  id            uuid primary key default gen_random_uuid(),
  title         text not null,
  category      text not null,
  description   text,
  tags          text[]  default '{}',
  year          int,
  image_url     text,            -- Supabase Storage public URL
  featured      boolean default false,
  order_index   int     default 0,   -- lower = appears first
  published     boolean default true, -- false = hidden from site
  created_at    timestamptz default now()
);

-- ============================================================
-- VIDEOS
-- ============================================================
create table videos (
  id            uuid primary key default gen_random_uuid(),
  video_id      text not null,   -- YouTube video ID (from ?v=...)
  title         text not null,
  description   text,
  duration      text,            -- e.g. "4:32" — fill in manually
  featured      boolean default false,
  order_index   int     default 0,
  published     boolean default true,
  created_at    timestamptz default now()
);

-- ============================================================
-- CONTACT SUBMISSIONS
-- ============================================================
create table contact_submissions (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  email         text not null,
  project_type  text,
  message       text not null,
  read          boolean default false, -- mark as read in dashboard
  created_at    timestamptz default now()
);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
alter table portfolio_items    enable row level security;
alter table videos             enable row level security;
alter table contact_submissions enable row level security;

-- Public can read published portfolio items
create policy "public_read_portfolio" on portfolio_items
  for select using (published = true);

-- Public can read published videos
create policy "public_read_videos" on videos
  for select using (published = true);

-- Contact submissions are insert-only from the public
-- (reads and updates happen via service role key in the API route)
create policy "public_insert_contact" on contact_submissions
  for insert with check (true);
