FROM node:6-alpine
WORKDIR /app
COPY package.json /app
RUN npm install --silent && npm i -g serve
COPY ./ /app
RUN npm run build
EXPOSE 5000
CMD serve -s build
