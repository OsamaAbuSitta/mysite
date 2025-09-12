# ---------- build stage ----------
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies with npm
COPY package.json package-lock.json ./
RUN npm ci

# Build Vite app
COPY . .
RUN npm run build

# ---------- runtime ----------
FROM nginx:1.27-alpine

# Replace default site config
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy Vite build output
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1/ || exit 1
