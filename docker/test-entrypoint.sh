#!/bin/sh
set -e

echo "➡️ Waiting for Postgres..."
until nc -z postgres 5432; do
  sleep 0.1
done

sleep 2

echo "➡️ Running Prisma migrations..."
npx prisma migrate deploy --schema=./prisma/schema.prisma

echo "➡️ Running tests against raw src/"
npm run test:only

