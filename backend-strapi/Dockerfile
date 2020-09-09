FROM strapi/base:10-alpine

WORKDIR /strapi-dashboard

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=production

RUN npm run build

#Suggested into Docker container and then with NGINX listen 3000 
EXPOSE 1337

CMD ["yarn", "start"]
#sudo docker run -d -p 1337:1337 --name backend-strapi NAME_OF_YOUR_CONTAINER