Application To-Do-Lidt
L'application comporte :
- 1 fichier App1.js qui permet de lancer le serveur (get/Post) ainsi que l'appel des fonctions permettant de construire les différentes pages web.
- 1 fichier format_html.js qui sont les fonctions avec les balises HTML appelées dans App1.js
- 1 fichier get_db1.js qui contient les fonctions qui permettent de communiquer avec la base de données SQL.
- 1 fichier test.js, on y trouve 3 tests unitaires
- 1 fichier HTML ToDoList_react

Les fonctionnalités de l'applications :
L'application permet de saisir et de suivre la liste de To-do.
Elle comporte les pages suivantes :
- Authentification avec Identifiant et mdp. 
- Page d'accueil
- Formulaire de saisie de tâches
- Liste de To-do
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


 CREATE TABLE TASKS_NEW(
    ID				 	SERIAL,
    NOM 				VARCHAR(15),
    DESCRIPTION			TEXT,
	DT_ECHEANCE			DATE,
	TYPE_TASK			CHAR(30),
	IND_PRIORITE        INTEGER,
	RESP_TASK			char(10),
	CREATEUR_TASK		char(10),
	DT_PREVUE			DATE,
	top_fait			boolean,
	PRIMARY KEY (ID));

2- tables identification :

CREATE TABLE IDENTIFICATION(
    ID				 	serial,
    Identifiant			CHAR(15) unique,
    mdp					TEXT,
	d_admin			   	boolean,
	PRIMARY KEY (ID));

