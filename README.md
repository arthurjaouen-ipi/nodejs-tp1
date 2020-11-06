#Instructions

#Checklist API
##Sport
* Créé un sport : POST /api/sports
* Supprimer un sport : DELETE /api/sports/{sportId}
* Modifier un sport : UPDATE /api/sports/{sportId}
* Récupérer tous les sports : GET /api/sports
* Récupérer un sport : GET /api/sports/{sportId}
* Récupérer les athlètes liés à un sport : GET /api/sports/{sportId}/athletes
* Ajouter un athlète à un sport : POST /api/sports/{sportId}/athletes/{athleteId}
* Supprimé un athlète d'un sport : DELETE /api/sports/{sportId}/athletes/{athleteId}

#Athlete
* Créé un athlète : POST /api/athletes
* Supprimer un athlète : DELETE /api/athletes/{athleteId}
* Modifier un athlète : UPDATE /api/athletes/{athleteId}
* Récupérer tous les athlètes : GET /api/athletes
* Récupérer un athlète : GET /api/athletes/{athleteId}
* Récupérer les sports liés à un athlète : GET /api/athletes/{athleteId}/sports
* Récupérer les athlètes appartenants à un pays : GET /api/country/{countryCode}/athletes

#Admin
* Créé un utilisateur admin : POST /api/users
* Supprimer un utilisateur admin : DELETE /api/users/{userId}
* Modifier un utilisateur admin : UPDATE /api/users/{userId}
* Récupérer tous les utilisateurs admins : GET /api/users
* Récupérer un utilisateur admin : GET /api/users/{userId}

#Checklist fonctionnalités Web