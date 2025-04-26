

FROM node:18

WORKDIR /app

# Copy package files and install dependencies (without running postinstall yet)
COPY package*.json ./

# Temporarily disable postinstall
RUN npm install --ignore-scripts

# Copy everything else (this includes your prisma/ folder)
COPY . .

# Now run prisma generate *after* schema is present
RUN npm run postinstall

EXPOSE 3000

CMD ["npm", "run", "dev"]

