FROM node:alpine

WORKDIR /app

COPY ./package.json ./

RUN npm i

COPY ./ ./

# added sleep 5 for waiting while postgress is run than start node server
CMD ["/bin/sh", "-ecx", "sleep 5 && npm start"]