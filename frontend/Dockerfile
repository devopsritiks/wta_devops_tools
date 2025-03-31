FROM nginx:alpine

# Copy source files
COPY src/ /usr/share/nginx/html/

# Substitute BACKEND_URL at build time
ARG BACKEND_URL=http://localhost:5000
RUN sed -i "s|BACKEND_URL_PLACEHOLDER|$BACKEND_URL|g" /usr/share/nginx/html/app.js

# Copy Nginx config (assuming it exists)
COPY src/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
