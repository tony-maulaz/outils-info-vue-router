# Installation
## VSCode
- Installer l'extension Volar

# Développement

## Démarrer le serveur (A faire à chaque fois)
- Démarrer le conteneur Docker : `docker-compose up -d`
- Stopper le conteneur Docker : `docker-compose down -v`
- Pour les logs : `docker-compose logs -f -n20`

> Il faut utiliser l'option `-v` pour supprimer les volumes

## Pour développer le graphique avec Vue
- Ouvrir un terminal
- Se connecter au conteneur web : `docker exec -it <container name> bash`
- Une fois dans le conteneur web
- Aller dans le dossier du projet : `cd <nom_du_projet>`
- Initialiser le projet : `npm install`
- Démarrer le serveur avec le mode de watch : `npm run dev` ou `npm run start`
- Accéder au site : `http://localhost:8000/`
