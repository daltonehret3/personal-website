# pull official base image
FROM node:18.2.0-slim
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

# start app
CMD ["npm", "start"]
