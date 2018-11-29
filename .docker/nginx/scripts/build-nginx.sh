#!/bin/bash

for template in /etc/nginx/templates/*.template; do
    envsubst < $template > "/etc/nginx/sites-available/"$(basename $template)".conf"
done
