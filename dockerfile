# Usa una imagen de base de Node.js
FROM node:16-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo JavaScript al contenedor
COPY fecha.js .

# Comando para ejecutar el script
CMD ["node", "fecha.js"]
