[Sujet](https://smichalet.github.io/cours-nodejs/cours/rendu1.html#introduction-et-presentation)

# Instructions
1. Clonez le répertoire
2. Installez les dépendances du projet
3. Démarrez le serveur (src/app.js)
4. Le serveur est accessible [ici](http://localhost:8080/)

* Collections :
    * Sports : `sports{_id, name, athletes}`
    * Athlètes : `athletes{_id, firstName, lastName, gender, country}`
    * Utilisateurs admin : `admins{_id, username, password}`

* Le site est composé de 3 pages :
    * Liste des sports
    * Liste des athlètes
    * Liste des pays

-----------

# Checklist API
## Sports
* Créer un sport : `POST /api/sports` :white_check_mark:
* Supprimer un sport : `DELETE /api/sports/{sportId}` :white_check_mark:
* Modifier un sport : `UPDATE /api/sports/{sportId}` :white_check_mark:
* Récupérer tous les sports : `GET /api/sports` :white_check_mark:
* Récupérer un sport : `GET /api/sports/{sportId}` :white_check_mark:
* Récupérer les athlètes liés à un sport : `GET /api/sports/{sportId}/athletes` :white_check_mark:
* Ajouter un athlète à un sport : `POST /api/sports/{sportId}/athletes/{athleteId}` :white_check_mark:
* Supprimer un athlète d'un sport : `DELETE /api/sports/{sportId}/athletes/{athleteId}` :white_check_mark:

## Athlètes
* Créer un athlète : `POST /api/athletes` :white_check_mark:
* Supprimer un athlète : `DELETE /api/athletes/{athleteId}` :white_check_mark:
* Modifier un athlète : `UPDATE /api/athletes/{athleteId}` :white_check_mark:
* Récupérer tous les athlètes : `GET /api/athletes` :white_check_mark:
* Récupérer un athlète : `GET /api/athletes/{athleteId}` :white_check_mark:
* Récupérer les sports liés à un athlète : `GET /api/athletes/{athleteId}/sports` :white_check_mark:
* Récupérer les athlètes appartenants à un pays : `GET /api/country/{countryCode}/athletes` :white_check_mark:

## Utilisateurs admin
* Créer un utilisateur admin : `POST /api/users` :white_check_mark:
* Supprimer un utilisateur admin : `DELETE /api/users/{userId}` :white_check_mark:
* Modifier un utilisateur admin : `UPDATE /api/users/{userId}` :white_check_mark:
* Récupérer tous les utilisateurs admins : `GET /api/users` :white_check_mark:
* Récupérer un utilisateur admin : `GET /api/users/{userId}` :white_check_mark:

-----------

# Checklist fonctionnalités Web
## Sports
* Lister les sports :white_check_mark:
* Ajouter un sport :white_check_mark:
* Modifier un sport (nom) :white_check_mark:
* Supprimer un sport :white_check_mark:
* Lister les athlètes d'un sport :white_check_mark: 
* Supprimer un athlète d'un sport :white_check_mark:

## Athlètes
* Lister les athlètes :white_check_mark:
* Ajouter un athlète :white_check_mark:
* Modifier un athlète :white_check_mark:
* Supprimer un athlète :white_check_mark:
* Lister les sports d'un athlète :x:
* Ajouter un athlète à un sport :white_check_mark:

## Pays
* Lister les athlètes par pays :white_check_mark:

## Utilisateurs admin

* Lister les utilisateurs admins :white_check_mark:
* Ajouter un utilisateur admin :white_check_mark:
* Modifier un utilisateur admin (nom) :white_check_mark:
* Supprimer un utilisateur admin :white_check_mark:
* Authentification / Sécurisation :x: