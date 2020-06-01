# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /home/usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /home/usr/src/app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json home/usr/src/app/package.json
COPY yarn.lock home/usr/src/app/yarn.lock
RUN yarn install --silent
RUN yarn add react-scripts@3.4.1 

COPY . home/usr/src/app/

# start app
CMD ["yarn", "start"]