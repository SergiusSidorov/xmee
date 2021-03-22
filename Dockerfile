### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:alpine as builder

COPY package.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
RUN npm run build:ssr


### STAGE 2: Setup ###
FROM node:12.13-alpine

EXPOSE 4000

# Create app directory
ENV APP_HOME /usr/share/app
WORKDIR $APP_HOME


## From 'builder' stage copy over the artifacts in app folder
COPY /dist ./dist

CMD ["node", "server/main.js"]

# Create app directory

## From 'builder' stage copy over the artifacts in app folder
# copy application to workdir
COPY --from=builder /ng-app/dist/xmee .