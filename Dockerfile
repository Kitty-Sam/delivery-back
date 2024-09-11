# Use Node.js 20.11.1 base image
FROM node:latest

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm cache clean --force
RUN npm ci

# Copy the rest of the application code
COPY . .

# Generate Prisma Client code
RUN npx prisma generate

EXPOSE 5000

# Command to run the app
CMD [  "npm", "run", "start:migrate:prod" ]