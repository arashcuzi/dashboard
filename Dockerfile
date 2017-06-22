FROM node:6-alpine
WORKDIR /app
COPY package.json /app
RUN npm install --global --silent yarn serve && yarn
COPY ./ /app
RUN yarn build
CMD serve -s build
