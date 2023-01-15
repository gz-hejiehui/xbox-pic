# Use an official Node.js image as the base image
FROM node:18

# Create a directory for the app and set it as the working directory
RUN mkdir -p /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the dependencies
RUN npm ci

# Copy the rest of the app's files to the container
COPY . .

# Build the app for production
RUN npm run build

# Use a lightweight web server to serve the app
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose the port that the web server is listening on
EXPOSE 80

# Start the web server
CMD ["nginx", "-g", "daemon off;"]
