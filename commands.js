/**
 * -----------------------------------------------------------------------------
 * VERSION
 * -----------------------------------------------------------------------------
 */
const version = newArticle(
	"version",
	"version",
	"Comment connaître la version de git qui est installée sur l'ordinateur ?",
	"git --version",
	"Permet de connaître la version de git qui est installé sur l'ordinateur."
)
section.appendChild( version );	

/**
 * -----------------------------------------------------------------------------
 * CONFIGURATION
 * -----------------------------------------------------------------------------
 */
const configUserName = newArticle(
	"configUserName",
	"config",
	"Comment définir le nom et le prénom pour tous les utilisateurs issu du même ordinateur ?",
	"git config --global user.name 'John Doe'",
	"Permet de définir son nom et son prénom pour tous les utilisateurs de la même machine.",
	"#eee"
)
const configUserEmail = newArticle(
	"configUserEmail",
	"config",
	"Comment définir l'email pour tous les utilisateurs du même ordinateur ?",
	"git config --global user.email 'john-doe@fake-email.fr'",
	"Permet de définir l'email pour tous les utilisateurs de la même machine.",
	"#eee"
)
const configGetUserName = newArticle(
	"configGetUserName",
	"config",
	"Comment afficher le nom d'utilisateur qui a été enregistré dans git ?",
	"git config user.name",
	"Permet d'afficher le nom d'utilisateur pré-enregistré.",
	"#eee"
)
const configGetUserEmail = newArticle(
	"configGetUserEmail",
	"config",
	"Comment afficher l'email qui a été enregistré dans git ?",
	"git config user.email",
	"Permet d'afficher l'email qui a été pré-enregistré.",
	"#eee"
)

section.append(
	// Création
	configUserName, 
	configUserEmail, 
	// Visualisation
	configGetUserName, 
	configGetUserEmail
)

/**
 * -----------------------------------------------------------------------------
 * INITIALISATION
 * -----------------------------------------------------------------------------
 */
const init = newArticle(
	"init",
	"init",
	"Comment initialiser un nouveau répertoire git sur sa machine ?",
	"git init",
	"Permet d'initialiser un répertoire git afin d'avoir accès à d'innombrable commande git qui nous faciliterons grandement la vie."
)
section.append( init );

/**
 * -----------------------------------------------------------------------------
 * INITIALISATION D'UN FICHIER POUR IGNORER DES FICHIERS
 * -----------------------------------------------------------------------------
 */
const ignore = newArticle(
	"ignore",
	".gitignore",
	"Comment éviter de partager des fichiers qui peuvent être senssible ?",
	".gitignore",
	"Permet de créer un fichier caché qui sera interpréter par git afin, selon son contenu d'éviter de propager des données confidentiels ou bien de ne pas suivre des dossiers inutile",
	"#eee"
)

// 
// touch .gitignore

section.append( ignore );

const articleIgnore = document.getElementById("ignore");
const p = document.createElement("p");
const pre = document.createElement("pre");

p.innerHTML = "Information complémentaire pour créer un fichier en ligne de commande : <mark>touch .gitignore</mark>";
p.style.fontSize = "14px";
p.style.color = "crimson"

pre.innerHTML = `<code>
-----------------------------------------------
EXEMPLE D'UN CONTENU D'UN FICHIER .gitignore
-----------------------------------------------
node_modules
unRepertoire/*.txt
unAutreRepertoire/**/*.md
/.bundle 
/log/* 
/tmp
-----------------------------------------------
Explication :
-----------------------------------------------
1 - On ne suivra pas le dossier node_modules
2 - Dans unRepertoire on ne suivra pas les .txt
3 - Dans un dossier et ces sous-dossiers,  
    on ne suivra pas les .md (markdown)
4 - ignore tous les .bundle
5 - ignore tous les fichiers dans le dossier log
6 - ignore le dossier tmp (dossier temporaire)
-----------------------------------------------</code>`;


pre.style.color = "lightslategrey";

articleIgnore.append(p, pre);





















/*



Note personnel des cours suivis sur Dyma et ailleurs (plus bas)



--------------------------------------------------------------------------------COMMAND DE BASE
--------------------------------------------------------------------------------
git status						conna�tre le statut du d�p�t

git add nomDuFichier.sonExtenssion			ajouter les fichiers pour que git les track
git add .						ajoute tous les fichiers

git diff test.html					Voir les changements qui ont �t� apport� 								pour seulement un fichier 
							(exemple ici avec test.html)

git commit						Ouvre une interface (nano) dans le terminal
							ctrl + x pour enregistrer
							y pour valider
							enter pour quitter

git commit -m "votre message entre double quotes"	mettre un commentaire sur tous les fichiers 								qui sont tracker (Titre uniquement)

git commit -am "Un autre message pr�cis"		avec l'option -a on �vite de refaire un add 								nom des fichiers sachant que git les 								connait d�j�. (Titre uniquement)


git commit -m "Un titre d'un message" -m "le corps du message"

--------------------------------------------------------------------------------
CONNAITRE L'EMPLACEMENT DES FICHIERS QUI NE SONT PAS ENCORE COMMIT
--------------------------------------------------------------------------------
git ls-files --stage					Permet d'obtenir des informations sur les fichiers contenu dans les r�pertoire local 								ou d�p�t local suivi par Git.

							En passant l'option stage, nous obtenons 								les informations sur les fichiers qui sont 								dans la zone de transit.

							Ces informations se trouvent en faite dans 								le fichier .git/index mais en binaire.

							Cette commande nous permmet donc de les 							rendre lisible.









voir tous les commits qui ont �t� fait
	git log
Revenir � un ancien commit en annulant toutes les modifications apr�s le commit X
	git reset --hard idDuCommit
Revenir � un ancien commit en gardant toutes les modifications apport� apr�s.
	git reset --soft idDuCommit
Ajouter une modification � notre pr�c�dent commit.
	git commit --amend
	/!\ il faudra enregistrer avec CTRL + O et quitter avec CTRL + X sur NANO
Ajouter une modification � notre pr�c�dent commit sans r�-�crire le text du commit
	git commit --amend --no-edit
Voir les modifications d'un commit
	git show idDuCommit

voir l'ensemble des branches existante
	git branch
Changer de branche et s'y rendre
	git checkout -b nomDeLaBranche
Allez dans une autre branche
	git checkout nomDeLaBranche
Fusioner une branche (se rendre sur la branche master)
	git merge leNomDeLaBrancheAFusioner
Supprimer une branche
	git branch -d nomDeLaBranche
Supprimer une branche qui n'a pas �t� fusionner
	git branch -D nomDeLaBrancheQuiEstPasFusionner
Voir toutes les branches ainsi que les derniers commit qui ont �t� appliqu�
	git branch -v
---------------------------------------------------------------------------
concevoir des alias
	git status
	git config --global alias.s status
	r�sultat => git s

 	git log
	git config --global alias.l log
	r�sultat => git l
Supprimer un alias
	git config --global --unset alias.s
---------------------------------------------------------------------------
Afficher qu'une ligne pour mes commits
	git log --oneline
Afficher graphiquement nos commits
	git log --graph
Voir graphiquement nos commit sur une seule ligne
	git log --oneline --graph
---------------------------------------------------------------------------


Bitbucket
	Payant si on travail avec 5 collaborateurs, par contre on peut cr�er autant de projet priv�e que l'on souhaite
Github
	Gratuit mais payant pour les projets priv�es.

1 / G�n�rer une cl� ssh lors de nos envoies
sur google : g�n�rer une cl� ssh windows
2 / Cr�er son repository 
3 / Suivre les indications pour envoyer les informations

Envoyer les informations sur la branch master
	git push -u origin master
	apr�s on peut simplement faire :
	git push

Cloner un projet distant
	git clone adresseDuDepot
Donner un autre nom � notre clone
	git clone adresseDuDepot nouveauNomDuProjet










rm -rf nom du fichier











*/