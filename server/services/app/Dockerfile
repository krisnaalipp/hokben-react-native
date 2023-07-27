FROM node:16.17.1
ENV PORT=4002
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
RUN npm install -g nodemon
COPY . .
CMD [ "npm","run","start" ]
