# Use Node
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy backend code
COPY . .

# Expose backend port
EXPOSE 5000

# Run server
CMD ["node", "server/server.js"]
