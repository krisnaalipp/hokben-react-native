FROM node:16.17.1
WORKDIR /users
ENV PORT = 4001
COPY ["package.json","package-lock.json","./"]
RUN npm install
RUN npm install -g nodemon
COPY . .
CMD ["nodemon","app.js"]