FROM chrishiestand/nginx-static-base:1.13

USER root

# Copy snakeoil certs so nginx will start, mount-over proper cert/key in production
COPY etc/snakeoil.crt /opt/tls/kistek.consulting/tls.crt
COPY etc/snakeoil.key /opt/tls/kistek.consulting/tls.key

COPY etc/nginx-vhosts.conf /etc/nginx/nginx-http/vhosts.conf

COPY webroot /www/kistek.consulting

USER guest
