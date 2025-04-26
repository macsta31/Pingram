
# Dockerfile

FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Generate prisma client
RUN npx prisma generate

# Build TS project
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
