# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy client package files
COPY client/package*.json ./client/
WORKDIR /app/client
RUN npm install

# Copy client source and build
COPY client/ ./
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy server package files and install
COPY server/package*.json ./server/
WORKDIR /app/server
RUN npm install --production

# Copy server source
COPY server/ ./

# Copy built client files
COPY --from=builder /app/client/dist /app/client/dist

# Set production environment
ENV NODE_ENV=production

EXPOSE 5000

CMD ["node", "server.js"]
