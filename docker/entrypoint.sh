
#!/bin/sh
set -e

# Run migrations (only if necessary — remove this for more control)
echo "🔁 Running Prisma migrations..."
npx prisma migrate dev --name init || true

# Start dev server with ts-node-dev (auto reload)
echo "🚀 Starting dev server..."
npx ts-node-dev --respawn --transpile-only src/server.ts
