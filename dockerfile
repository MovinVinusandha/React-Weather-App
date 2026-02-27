FROM node:20-alpine AS builder

WORKDIR /app

ARG VITE_WEATHER_API_KEY
ENV VITE_WEATHER_API_KEY=$VITE_WEATHER_API_KEY

COPY package*.json ./
RUN npm ci

COPY . ./
RUN npm run build




FROM nginx:alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]