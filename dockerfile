# Build stage
FROM oven/bun:1 AS build

WORKDIR /app

COPY . .
# Copier les fichiers de dépendances
COPY package.json bun.lock* ./

# Installer les dépendances
RUN bun install --frozen-lockfile

# Copier le code source

# Construire l'application
RUN bun run build

# Production stage - Nginx avec votre config
FROM nginx:alpine

# Copier les fichiers buildés directement dans /var/www/html
COPY --from=build /app/dist /var/www/html

# Copier votre configuration nginx existante
COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]