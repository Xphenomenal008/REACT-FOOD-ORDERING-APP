# Stage 1: Build the React application
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the React application using Nginx
FROM nginx:1.23
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
