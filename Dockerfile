FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --omit=dev

# Bundle app source
COPY . .

ENV FORWARD_TO="http://localhost"
ENV LATENCY_MIN=0
ENV LATENCY_MAX=1000
ENV PROBABILITY=100
ENV PORT=3000

EXPOSE 3000

CMD [ "node", "index.js" ]
