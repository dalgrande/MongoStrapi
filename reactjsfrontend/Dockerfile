# pull official base image
FROM node:13.12.0-alpine
USER ${USER}
# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json /usr/src/app/package.json
COPY yarn.lock /usr/src/app/yarn.lock
RUN yarn install --silent
RUN yarn add react-scripts -g --silent

# start app
CMD ["yarn", "start"]