# Build stage
FROM node:18-alpine AS build

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm install --only=production

# Copy built application from build stage
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/.env.example ./.env

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "run", "start:prod"] 