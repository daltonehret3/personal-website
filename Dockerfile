# pull official base image
FROM node:17.6.0-alpine as builder
EXPOSE 3000

# set working directory
WORKDIR /app

# add `app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY ./package.json ./
COPY ./package-lock.json ./

#RUN npm i

# add app
COPY . ./

#EXPOSE 3000

# start app 
# USER node
# CMD ["node", "--experimental-modules", "--es-module-specifier-resolution=node", "index.js"]
CMD ["npm", "start"]
