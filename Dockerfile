FROM chrishiestand/nginx-kube-cert-manager:1.13

USER root

COPY webroot /www/kistek.consulting
RUN ln -s /www/kistek.consulting /www/www.kistek.consulting

USER guest
