# But

Ce projet est un code exemple pour montrer comment utiliser Vue 3 avec le router.

Ce projet permet de monter comment utiliser les paramètrees de route ainsi que les routes dynamiques.

# Comparatif : Paramètres de Route Dynamiques vs Paramètres Query dans Vue Router

Lorsqu'on utilise `vue-router` dans une application Vue, deux méthodes principales permettent de passer des informations dans l'URL : **les paramètres de route dynamiques** et **les paramètres query**. Chacune de ces méthodes a des avantages et des inconvénients selon le contexte d'utilisation.

## Vue d'ensemble

| Critère                   | Paramètres de Route Dynamiques                      | Paramètres Query                               |
|---------------------------|-----------------------------------------------------|------------------------------------------------|
| **Syntaxe**               | Définis dans le chemin (`/user/:id`)                | Ajoutés après `?` dans l’URL (`/user?id=123`)  |
| **Accessibilité**         | Accès par `$route.params`                           | Accès par `$route.query`                       |
| **Utilisation commune**   | Identifiants uniques, ressources spécifiques        | Filtres, recherche, options de pagination      |
| **Lisibilité**            | Plus lisible, surtout pour des ressources claires   | Moins lisible pour de nombreux paramètres      |
| **SEO et Indexabilité**   | Bien adapté pour le SEO                             | Moins pertinent pour des pages uniques         |
| **Flexibilité**           | Moins flexible pour des routes optionnelles         | Très flexible, pas lié à la structure de route |
| **Gestion des erreurs**   | Complexité pour vérifier l'existence du paramètre   | Plus simple à gérer, peut être laissé vide     |

## Comparaison en Détail

### 1. **Syntaxe et Structure**

   - **Paramètres de Route Dynamiques** : sont intégrés dans la structure de la route, par exemple `/user/:id`. Cela donne une hiérarchie URL claire et explicite.
   - **Paramètres Query** : sont ajoutés en fin d’URL après un `?`, par exemple `/user?id=123`. Plusieurs paramètres peuvent être ajoutés sans affecter la structure de la route, ce qui est utile pour les filtres ou options additionnelles.

### 2. **Utilisation Commune**

   - **Paramètres de Route Dynamiques** : Utilisés pour capturer des valeurs importantes, généralement des identifiants uniques ou des éléments précis (ex. ID utilisateur, ID produit). Par exemple, `/user/:id` pour afficher un profil d’utilisateur particulier.
   - **Paramètres Query** : Idéals pour des filtres, des recherches, ou la pagination. Par exemple, `/search?query=vue&sort=asc` est courant pour une recherche ou des options de tri.

### 3. **Lisibilité**

   - **Paramètres de Route Dynamiques** : Plus lisibles et intuitifs, surtout lorsqu’ils décrivent des ressources spécifiques. Par exemple, `/product/123` est clair et montre directement que `123` représente un produit spécifique.
   - **Paramètres Query** : Moins lisibles si on a beaucoup de paramètres, car ils s’empilent après le `?`, ce qui peut rendre l’URL longue et difficile à interpréter.

### 4. **SEO (Search Engine Optimization) et Indexabilité**

   - **Paramètres de Route Dynamiques** : Meilleures performances en SEO, car ils sont interprétés comme des pages distinctes par les moteurs de recherche. Chaque URL dynamique (`/user/123`) représente une ressource unique et bien définie.
   - **Paramètres Query** : Moins SEO-friendly, surtout si les pages ne sont pas uniques. Les moteurs de recherche peuvent ignorer des variations de la même URL avec différents paramètres query (`/products?sort=asc`) si elles ne représentent pas des pages uniques et précieuses.

### 5. **Flexibilité**

   - **Paramètres de Route Dynamiques** : Moins flexibles, car la structure de la route doit inclure tous les segments. Par exemple, une route définie avec `/user/:id` ne pourra pas être appelée simplement avec `/user` sans un ID, sauf si le paramètre est défini comme optionnel (`/user/:id?`).
   - **Paramètres Query** : Très flexibles, car aucun paramètre n’est obligatoire. On peut ajouter ou retirer des paramètres sans changer la structure de la route, ce qui est utile pour les filtres complexes ou les options facultatives.

### 6. **Gestion des Erreurs**

   - **Paramètres de Route Dynamiques** : Plus complexe, car il est nécessaire de vérifier si le paramètre est bien présent et valide. Par exemple, si un utilisateur essaie d'accéder à `/user/xyz` et que `xyz` n’est pas un ID valide, il faudra gérer l’erreur.
   - **Paramètres Query** : Plus simples à gérer, car les paramètres peuvent être optionnels ou vides sans casser la logique de routage. Par exemple, `/products?sort=asc` peut fonctionner même si `sort` n'est pas fourni, car il s'agit d'une simple option.

## Conclusion

Les **paramètres de route dynamiques** sont plus adaptés pour des ressources uniques et identifiables comme des pages de profil, des détails de produit ou des articles. Ils sont plus lisibles et bénéficient d’un bon SEO. Cependant, ils sont moins flexibles et nécessitent une gestion plus attentive des erreurs.

Les **paramètres query**, en revanche, offrent une flexibilité élevée et conviennent bien aux filtres, à la pagination, ou aux options de recherche. Ils permettent d'ajouter facilement des options supplémentaires, mais leur structure est moins optimisée pour le SEO et leur lisibilité diminue avec le nombre de paramètres.

### En résumé :

- **Utilise les paramètres de route dynamiques** pour les pages spécifiques, comme les profils d'utilisateurs ou les détails de produit.
- **Privilégie les paramètres query** pour les options de recherche, les filtres, ou les paramètres de configuration qui n’altèrent pas le contenu principal de la page.




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
