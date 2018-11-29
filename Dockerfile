FROM node:8.12.0 as base
WORKDIR /opt/app

FROM base as build
ENV NODE_ENV = $ENV
COPY ./ ./
RUN npm install
RUN npm run server:build
RUN npm run client:build

FROM base
COPY .npmrc package*.json yarn.* process.yml start.sh ./
COPY --from=build /opt/app/build ./build
RUN chmod +x start.sh
RUN npm install -g pm2
RUN npm install --production
EXPOSE 5000
ENTRYPOINT ["./start.sh"]
