FROM node:lts-alpine3.16

ENV STAGE=production
ENV NODE_ENV=production

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# RUN npm install

# Bundle app source
COPY . .

# RUN npm run build

EXPOSE 5000
# CMD ["node", "dist", "index.js"]
CMD["node", "test.js"]
