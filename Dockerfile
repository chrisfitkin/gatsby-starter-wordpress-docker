FROM node:8.10

# Environment variables
ENV NODE_ENV=docker

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
COPY yarn.lock ./

# node dependencies
# RUN npm install -g node-gyp

# RUN npm install -g gatsby-cli
# RUN yarn install
RUN npm install
# RUN npm install --verbose
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8000
CMD [ "npm", "start" ]