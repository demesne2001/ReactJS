From node:alphine
WORKDIR '/app'

COPY package.json .
RUN npm install
COPY . .
EXPOSE 2021
CMD [ "npm","start" ]