# Usa una imagen oficial de Node.js (alpine para menos vulnerabilidades)
FROM node:18-alpine

# Crea el directorio de la app
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Expone el puerto (ajusta si usas otro)
EXPOSE 8080 

# Comando para iniciar la app
CMD ["node", "server.js"]
