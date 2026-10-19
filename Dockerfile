FROM node:20-alpine

WORKDIR /app

# Dependências nativas e utilitários úteis
RUN apk add --no-cache libc6-compat

# Copia manifestos de dependência
COPY package.json package-lock.json* ./

# Instala todas as dependências
RUN npm install

# Copia o código-fonte
COPY . .

# Expõe a porta padrão do Next.js
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Comando padrão em desenvolvimento
CMD ["npm", "run", "dev"]
