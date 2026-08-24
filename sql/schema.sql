-- 學生陳情處資料表
-- 使用方式：登入 Vercel 專案 → Storage → 你的資料庫 → Query（或 Neon/Supabase 的 SQL Editor），
-- 貼上以下整段內容並執行一次即可。

create table if not exists petitions (
  id bigserial primary key,
  name text not null,
  email text not null,
  phone text,
  content text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create index if not exists petitions_created_at_idx on petitions (created_at desc);
