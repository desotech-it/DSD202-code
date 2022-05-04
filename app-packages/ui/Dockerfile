FROM r.deso.tech/dockerhub/library/node:16
RUN mkdir /app
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./src /app/src
EXPOSE 3000
CMD node src/server.js