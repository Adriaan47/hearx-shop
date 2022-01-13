FROM nginx:latest as builder

COPY ./dist/hearx-shop/* /usr/share/nginx/html/

WORKDIR /hearx-shop

RUN npm install
RUN $(npm bin)/ng build --prod --build-optimizer


FROM nginx

COPY --from=builder ./hearx-shop/dist/* /usr/share/nginx/html/

EXPOSE 80
