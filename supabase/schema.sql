-- TechAimz contact / enquiry form schema.
-- Run this in: Supabase dashboard > SQL Editor > New query > Run.

-- 1. Table that stores each enquiry submitted through the website form.
create table if not exists public.contact_submissions (
  id          uuid primary key default gen_random_uuid(),
  name        text        not null,
  email       text        not null,
  message     text        not null,
  created_at  timestamptz not null default now()
);

-- 2. Turn on Row Level Security so the public anon key can't read or change data
--    unless a policy explicitly allows it.
alter table public.contact_submissions enable row level security;

-- 3. Allow anyone (the website visitor, using the anon key) to INSERT a submission.
--    No SELECT/UPDATE/DELETE policy exists, so the anon key cannot read or modify
--    submissions. You view them in the dashboard (Table Editor) or via the service role.
drop policy if exists "Anyone can submit the contact form" on public.contact_submissions;

create policy "Anyone can submit the contact form"
  on public.contact_submissions
  for insert
  to anon
  with check (true);
