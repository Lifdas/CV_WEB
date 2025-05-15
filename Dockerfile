# Étape 1 : Utiliser une image Nginx officielle
FROM nginx:alpine

# Étape 2 : Copier les fichiers HTML/CSS/JS dans le répertoire de Nginx
COPY . /usr/share/nginx/html

# Exposer le port 80 (par défaut pour Nginx)
EXPOSE 80
