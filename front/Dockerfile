FROM node:16.16.0 AS builder

WORKDIR /app

COPY ./app .

RUN npm ci

RUN npm run build

FROM nginx:1.21.6

WORKDIR /app/

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

COPY --from=builder ./app/dist/ .
