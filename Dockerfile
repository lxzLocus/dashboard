FROM node:alpine3.19

WORKDIR /app

COPY package*.json .

# Install npm package
RUN npm install -g next@14.2.4

RUN npm install @radix-ui/themes
RUN npm install @radix-ui/react-icons
RUN npm install fs cheerio
RUN npm install axios@1.7.2 dotenv@16.4.5


COPY . .