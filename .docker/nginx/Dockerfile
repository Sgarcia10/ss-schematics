FROM nginx:1.11

RUN mkdir /etc/nginx/sites-available && rm /etc/nginx/conf.d/default.conf
ADD nginx.conf /etc/nginx/

COPY scripts /root/scripts/

COPY sites /etc/nginx/templates

ENTRYPOINT /bin/bash /root/scripts/build-nginx.sh && nginx
