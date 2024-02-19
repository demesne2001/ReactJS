From node:alphine
RUN mkdir '/Reactjs'
WORKDIR '/Reactjs'

COPY . /Reactjs
COPY package.json .
RUN npm install
COPY . .
EXPOSE 2021
CMD [ "npm","start" ]