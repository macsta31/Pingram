FROM node:18

WORKDIR /app


COPY . .

COPY package*.json ./
RUN npm install


RUN npx prisma generate

RUN npm run build

EXPOSE 3000


CMD [ "npm", "run", "dev" ]
