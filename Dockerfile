## STAGE 1: BUILD ANGULAR APPLICATION
FROM node:12-alpine as  builder

COPY hearx-shop ./hearx-shop

WORKDIR /hearx-shop

RUN npm install
RUN $(npm bin)/ng build --prod --build-optimizer


## STAGE 2: RUN NGINX TO SERVE APPLICATION ##
FROM nginx

COPY --from=builder ./hearx-shop/dist/* /usr/share/nginx/html/

EXPOSE 80
