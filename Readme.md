Application To-Do-Lidt
L'application comporte :
- 1 fichier App1.js qui permet de lancer le serveur (get/Post) ainsi que l'appel des fonctions permettant de construire les différentes pages web.
- 1 fichier format_html.js qui sont les fonctions avec les balises HTML appelées dans App1.js
- 1 fichier get_db1.js qui contient les fonctions qui permettent de communiquer avec la base de données SQL.

Les fonctionnalités de l'applications :
L'application permet de saisir et de suivre la liste de To-do.
Elle comporte les pages suivantes :
- Authentification avec Identifiant et mdp. (développement pas complet)
- Page d'accueil (accès au formulaire de saise ou Liste de To-do)
- Formulaire de saisie de tâche
- Liste de To-do-List
Ces quatre pages sont de type Server Side Rendering.

Le fichier Todolist_react.html est Client Side Rendering

Pré-requis :
-Installer Node.js
-Installer npm
-Installer Express
-Installer les utilitaires pour utiliser les bases de données ()

Démarrage :
Lancement node App1.js
Lancer la page web : http//localhost:3000/

Base de données :
1- table Tâches :

CREATE TABLE TASKS(
    ID				 	serial,
    NOM 				VARCHAR(15),
    DESCRIPTION			TEXT,
	dt_echeance			date,
	type_task			char(30),
	ind_priorite        integer,
	Resp_task			char(10),
	top_fait			boolean,
	PRIMARY KEY (ID));

2- tables identification :

CREATE TABLE IDENTIFICATION(
    ID				 	serial,
    Identifiant			CHAR(15) unique,
    mdp					TEXT,
	d_admin			   	boolean,
	PRIMARY KEY (ID));

