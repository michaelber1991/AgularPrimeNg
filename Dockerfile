# Etapa 1: Construir la aplicación Angular
FROM node:20.17.0-alpine as build

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Establece el directorio de trabajo
WORKDIR /app

# Copia el código fuente de la aplicación
COPY . .

# Instala las dependencias usando pnpm
RUN pnpm install

# Construir la aplicación para producción
RUN pnpm run build

# Etapa 2: Configurar Nginx para servir la aplicación Angular
FROM nginx:alpine

# Copiar la aplicación construida desde la etapa anterior
COPY --from=build /app/dist/AppName/browser /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando por defecto para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]