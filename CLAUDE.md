@AGENTS.md

# 東海大學第三十八屆學生議會官網

Next.js (App Router) + Tailwind CSS v4 site. "European literary" (歐洲文青) design:
cream/ivory background, wine/forest/gold accents, Noto Serif TC + EB Garamond fonts
— see `src/app/globals.css` for the color/font tokens.

## Editing content

All editable content lives in `src/data/*.ts` as plain TypeScript objects (no CMS):

- `site.ts` — council name, contact info, nav
- `news.ts` — 最新消息
- `members.ts` — 學生議員
- `organization.ts` — 議長團/秘書處/常設委員會
- `minutes.ts` — 議事紀錄
- `regulations.ts` — 法規彙編

Edit the relevant file, then `git add -A && git commit -m "..." && git push`.

## Deployment

- GitHub: https://github.com/rick930922/thu-council
- Live: https://thu-council.vercel.app
- Vercel project is git-connected — pushing to `main` auto-deploys. No manual
  `vercel --prod` needed.
