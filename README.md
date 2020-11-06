# Instructions



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

## Utilisateurs
* Créer un utilisateur admin : `POST /api/users` :x:
* Supprimer un utilisateur admin : `DELETE /api/users/{userId}` :x:
* Modifier un utilisateur admin : `UPDATE /api/users/{userId}` :x:
* Récupérer tous les utilisateurs admins : `GET /api/users` :x:
* Récupérer un utilisateur admin : `GET /api/users/{userId}` :x:



# Checklist fonctionnalités Web