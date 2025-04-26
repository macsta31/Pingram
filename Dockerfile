
FROM node:18

WORKDIR /app

# Copy everything first
COPY . .

# Install dependencies
RUN npm install

# Generate Prisma Client
RUN npx prisma generate

# Build your project
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]

