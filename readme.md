---

# 📬 Pingram — Reminders as a Service

---

## 🚀 Why We Built Pingram

In many platforms, user engagement depends on **sending timed reminders** across **email** and **SMS** — for onboarding flows, abandoned cart sequences, subscription renewals, and more.

Instead of hardcoding these flows into each app, **Pingram** provides a **generalized, scalable platform** where reminders can be scheduled, customized, and managed independently.

**Key design goals:**
- Flexible support for multi-channel messaging (email, SMS, etc).
- Time-based sequences (with customizable delays).
- Production-grade queue management (BullMQ + Redis).
- Clean developer ergonomics: API-first, easily extendable.
- Dockerized for easy deployment anywhere.

---

## 🏛️ Core Entities

| Entity | Purpose |
|:---|:---|
| **Account** | Represents a client company using Pingram. |
| **Customer** | Represents an end-user to whom reminders are sent. |
| **Template** | A pre-built message (SMS text, email body, etc.). |
| **SequenceTemplate** | Defines the flow: series of steps with delays. |
| **SequenceStep** | A single action (delay, channel, template) inside a SequenceTemplate. |
| **Sequence** | A *live* instance of a SequenceTemplate for a specific customer. |
| **Reminder** | A scheduled, queued notification to be sent at a future time. |

---

## 🛠️ How We Built It

| Part | Technology |
|:---|:---|
| **Backend** | Node.js + Express + TypeScript |
| **Database** | PostgreSQL (managed in dev via Docker, in prod via Railway) |
| **ORM** | Prisma |
| **Queue** | BullMQ + Redis |
| **Job Dashboard** | BullBoard |
| **Email/SMS Providers** | SendGrid, Twilio (integrations ready but not yet wired) |
| **Docker** | Full containerized local setup (Postgres, Redis, API) |
| **Deployment** | Railway.app |

---

## 📦 Setting Up the Project Locally

#### 1. Clone the repo
```bash
git clone https://github.com/macsta31/Pingram
cd pingram
```

#### 2. Setup environment variables
Create a `.env` file with:
```dotenv
DATABASE_URL=postgresql://postgres:postgres@postgres:5432/reminders
REDIS_URL=redis://redis:6379
PORT=3000
```

_(In production, Railway will inject its own Postgres/Redis URLs.)_

---

## 🐳 Running Locally with Docker Compose

```bash
docker-compose -f docker-compose.dev.yml up --build
```

This will:
- Spin up **Postgres**, **Redis**, and **your API** containers.
- Mount your code into the container for hot reloading.

#### Common Commands:
| Command | Purpose |
|:---|:---|
| `docker-compose -f docker-compose.dev.yml up --build` | Rebuild and run everything |
| `docker-compose down` | Tear down everything |
| `docker-compose exec api bash` | Open a shell inside the API container |

---

## 🧹 Prisma and Database Commands

When your Prisma schema changes:

```bash
npx prisma migrate dev --name some_migration_name
```
> This will apply changes **and** generate the updated Prisma Client automatically.

To regenerate Prisma Client manually:
```bash
npx prisma generate
```

To inspect database locally:
```bash
npx prisma studio
```

---

## 🛫 Deployment (Railway)

1. Push your repo to GitHub.
2. Connect Railway to the GitHub repo.
3. Railway will **build your Dockerfile** automatically.
4. Set environment variables inside Railway dashboard:
   - `DATABASE_URL`
   - `REDIS_URL`
   - `PORT=3000`
5. Railway provisions managed Postgres + Redis for you.

---

## 🧠 Architecture Overview

```plaintext
Account
 └─> Customers
      └─> Sequences (Live flows)
            └─> Reminders (Actual scheduled jobs)

Templates define messages.
SequenceTemplates define the series of steps (delays, channels, templates).
```

### How Reminder Delivery Works
1. A Reminder is created with a future `sendAt`.
2. Reminder is queued into **BullMQ** (with delay).
3. **Worker** picks up the job at the right time.
4. Worker fetches **Account**, **Customer**, **Reminder**, and **Template/Step** info.
5. Worker sends the notification (TODO: integrate SendGrid / Twilio).

---

## 📚 Tech Stack At a Glance

| Layer | Tool |
|:---|:---|
| API | Express + TypeScript |
| ORM | Prisma |
| Queue | BullMQ |
| Cache Broker | Redis |
| DB | Postgres |
| Deployment | Railway |
| Local Dev | Docker Compose |

---

## 🌲Code tree

pingram/
├── docker-compose.yml
├── Dockerfile
├── prisma/
│   └── schema.prisma
├── src/
│   ├── api/
│   │   ├── index.ts
│   │   ├── accounts.ts
│   │   ├── customers.ts
│   │   ├── reminders.ts
│   │   ├── sequences.ts
│   │   └── templates.ts
│   ├── generated/
│   │   └── prisma/      # Auto-generated Prisma Client (ignored in Git)
│   ├── lib/
│   │   ├── db/
│   │   │   ├── accounts.ts
│   │   │   ├── customers.ts
│   │   │   ├── prisma.ts
│   │   │   ├── reminders.ts
│   │   │   ├── sequences.ts
│   │   │   └── sequenceSteps.ts
│   │   ├── logs/
│   │   │   └── logger.ts
│   │   ├── queue/
│   │   │   ├── connection.ts
│   │   │   ├── producers/
│   │   │   │   └── reminderProducer.ts
│   │   │   └── workers/
│   │   │       └── reminderWorker.ts
│   │   └── services/
│   │       ├── accountService.ts
│   │       ├── customerService.ts
│   │       ├── reminderService.ts
│   │       ├── sequenceService.ts
│   │       ├── sequenceStepService.ts
│   │       └── templateService.ts
│   └── server.ts
├── package.json
├── tsconfig.json
├── README.md
└── .env

---

## ✨ Future Work

- [ ] Integrate SendGrid email sending.
- [ ] Integrate Twilio SMS sending.
- [ ] Build webhooks for event-based reminder cancellation (eg. "unsubscribe" events).
- [ ] Add admin dashboard for accounts to manage sequences.

---

## 👏 Acknowledgements

Pingram was built with 💪 by Mackenzie Stathis — carefully crafted for real-world scalability, developer sanity, and pure backend excellence.

---

