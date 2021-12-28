FROM node:14-buster
WORKDIR /ml-portal
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start" ]
