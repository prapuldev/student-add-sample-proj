# Use official Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Expose port (change if your app uses a different port)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
