FROM node:21-alpine AS base

FROM base AS install_dependencies

WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

FROM base AS build
WORKDIR /app
COPY --from=install_dependencies /app/node_modules ./node_modules
COPY . .
RUN chmod +x wait-for-postgres.sh
