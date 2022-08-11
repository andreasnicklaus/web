#
# Vue / npm run build
#
FROM node:15-alpine as build-site
WORKDIR /usr/src/app

RUN apk update && apk add python2 g++ make && rm -rf /var/cache/apk/*

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

#
# NGINX SERVER
#
FROM nginx:alpine as build-server
COPY --from=build-site /usr/src/app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/templates/

EXPOSE 80
#CMD echo "Listening on http://localhost:80" && nginx -g "daemon off;"
CMD ["/bin/sh" , "-c" , "sleep 10 && envsubst '${API_HOST} ${API_PORT}' < /etc/nginx/templates/nginx.conf > /etc/nginx/conf.d/nginx.conf && exec nginx -g 'daemon off;'"]
