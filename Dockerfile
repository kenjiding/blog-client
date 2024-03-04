# Use the official Node.js 16 image as the base image
FROM node:20 AS builder

# Set the working directory
WORKDIR /usr/src/app
COPY . .

# Expose port 3000
EXPOSE 3000

CMD ["node", "./.next/standalone/server.js"]
