# Hall & Associates

An editorial, historical-concept website inspired by Edward Marshall Hall (1858–1927). It is fictional, is not
affiliated with a practising law firm or historical estate, and does not provide legal services or legal advice.

## Requirements

- Node.js 20.9 or later
- npm

## Run locally (PowerShell)

```powershell
npm install
Copy-Item .env.example .env
npm run db:migrate -- --name init
npm run db:generate
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Set `DATABASE_URL` in `.env` to a SQLite connection string;
the example uses `file:./dev.db`.

The concept form validates submissions with Zod on the server and stores them in SQLite. Do not enter real personal,
confidential or sensitive information. Submissions are not monitored, do not reach a legal professional, and do not
create a lawyer–client relationship. See the site's [privacy notice](/privacy) and [terms of use](/terms).

## Validation and production

```powershell
npm run typecheck
npm run lint
npm run build
npm run db:deploy
npm run start
```

Apply committed migrations with `npm run db:deploy` in a deployment environment. SQLite storage is intended for local
demonstration; configure persistent storage and an appropriate database strategy before deploying a real service.
