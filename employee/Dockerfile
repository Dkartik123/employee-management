# Build stage
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build application
RUN npm run build-staging

# Production stage
FROM nginx:alpine

# Copy built application
COPY --from=build /app/dist/crud-app/browser /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"] 