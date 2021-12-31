# Stage 0 - Build Frontend Assets
FROM node:12.16.3-alpine as Build

WORKDIR /site

COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build

# Stage 1 - Serve Frontend Assets

FROM fholzer/nginxbrotli:v1.12.2
WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /site/build /usr/share/nginx/html
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]