# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --silent
RUN yarn add react-scripts@3.4.1 

# add app
COPY . ./

# start app
CMD ["yarn", "start"]