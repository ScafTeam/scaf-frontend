FROM node:16.15.0-alpine as build-stage
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
