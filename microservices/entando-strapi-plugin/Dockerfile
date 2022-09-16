FROM strapi/base:14

RUN apt-get update && \
apt-get install -y --no-install-recommends nginx jq curl



WORKDIR /entando-code/strapi-code


ADD --chown=root:root . .




ADD default /etc/nginx/sites-available/default



RUN chmod +x /entando-code/strapi-code/strapi.sh

ENV NODE_ENV=production
EXPOSE 8081
CMD  ["/entando-code/strapi-code/strapi.sh"]

