# Level 1 Task 2 · Database / Environment

This document records the Level 1 Architecture Prototype Task 2 database and environment setup.

## Scope

Task 2 prepares local PostgreSQL development configuration and environment variable examples for the future Payload CMS integration.

This task does not install Payload, does not configure Payload, does not create collections, does not create business models, and does not connect a production database.

## Local PostgreSQL

The local database is defined in `docker-compose.yml`.

Service:

```text
postgres
```

Container:

```text
ink-east-postgres
```

Database:

```text
ink_east_dev
```

User:

```text
ink_east
```

Local development password:

```text
ink_east_dev_password
```

Local connection string:

```text
postgresql://ink_east:ink_east_dev_password@localhost:5432/ink_east_dev
```

## Environment Variables

Copy `.env.example` to a local environment file before running future tasks:

```bash
cp .env.example .env.local
```

Current Level 1 variables:

```text
DATABASE_URI=postgresql://ink_east:ink_east_dev_password@localhost:5432/ink_east_dev
PAYLOAD_SECRET=replace-with-a-local-development-secret
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Do not commit real secrets.

Reserved future variables are present as comments only:

```text
S3_ENDPOINT
S3_BUCKET
EMAIL_PROVIDER_API_KEY
STRIPE_SECRET_KEY
```

These are not enabled in Task 2.

## Commands

Validate the compose file:

```bash
docker compose config
```

Start local PostgreSQL:

```bash
docker compose up -d postgres
```

Stop local PostgreSQL:

```bash
docker compose down
```

Stop and remove local database volume only when intentionally resetting local data:

```bash
docker compose down -v
```

## Task 2 Boundaries

Completed in this task:

- Added local PostgreSQL compose configuration.
- Updated `.env.example` with safe local development placeholders.
- Documented the database environment setup.

Explicitly out of scope:

- No Payload installation.
- No `payload.config.ts`.
- No Payload collections.
- No database schema or migrations.
- No database client dependency installation.
- No production database connection.
- No real secrets.
- No Stripe, email, S3/R2, shop, membership, community, or service workflow.
- No changes to `preview/`.
- No Task 3 work.
