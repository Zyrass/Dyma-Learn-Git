/**
 * -----------------------------------------------------------------------------
 * VERSION
 * -----------------------------------------------------------------------------
 */
const sectionVersion = newSection("version", "git --version");
const articleVersion = newArticle(
	"section__version",
	1,
	"Comment connaître la version de git qui est installée sur l'ordinateur ?",
	"git --version",
	"Permet de connaître la version de git qui est installé sur l'ordinateur."
);
sectionVersion.append(articleVersion);
main.appendChild( sectionVersion );	

/**
 * -----------------------------------------------------------------------------
 * CONFIGURATION
 * -----------------------------------------------------------------------------
 */
const sectionConfig = newSection("config", "git config ...");

const articleConfigUserName = newArticle(
	"section__config",
	2,
	"Définir le nom et le prénom pour tous les utilisateurs issu du même ordinateur ?",
	"git config --global user.name 'John Doe'",
	"Permet de définir son nom et son prénom pour tous les utilisateurs de la même machine."
);
const articleConfigUserEmail = newArticle(
	"section__config",
	3,
	"Définir l'email pour tous les utilisateurs du même ordinateur ?",
	"git config --global user.email 'john-doe@fake-email.fr'",
	"Permet de définir l'email pour tous les utilisateurs de la même machine.",
); 
const articleConfigShowUserName = newArticle(
	"section__config",
	4,
	"Afficher le nom d'utilisateur qui a été enregistré dans git ?",
	"git config user.name",
	"Permet d'afficher le nom d'utilisateur pré-enregistré.",
);

const articleConfigShowUserEmail = newArticle(
	"section__config",
	5,
	"Afficher l'email qui a été enregistré dans git ?",
	"git config user.email",
	"Permet d'afficher l'email qui a été pré-enregistré.",
);

sectionConfig.append( 
	articleConfigUserName, 
	articleConfigUserEmail, 
	articleConfigShowUserName, 
	articleConfigShowUserEmail
);
main.append(sectionConfig);

/**
 * -----------------------------------------------------------------------------
 * INITIALISATION
 * -----------------------------------------------------------------------------
 */
const sectionInit = newSection( "init", "git init" );
const articleInit = newArticle(
	"section__init",
	6,
	"Comment initialiser un nouveau répertoire git sur sa machine ?",
	"git init",
	"Permet d'initialiser un répertoire git afin d'avoir accès à d'innombrable commande git qui nous faciliterons grandement la vie."
);
sectionInit.appendChild( articleInit );
main.appendChild( sectionInit );

/**
 * -----------------------------------------------------------------------------
 * INITIALISATION D'UN FICHIER POUR IGNORER DES FICHIERS
 * -----------------------------------------------------------------------------
 */
const sectionIgnore = newSection( "ignore", ".gitignore" );
const articleIgnore = newArticle(
	"section__ignore",
	7,
	"Comment éviter de partager des fichiers qui peuvent être senssible ?",
	".gitignore",
	"Permet de créer un fichier caché qui sera interpréter par git afin, selon son contenu d'éviter de propager des données confidentiels ou bien de ne pas suivre des dossiers inutile"
);
const exempleContentGitIgnore = document.getElementById(
	"article__7__fieldset"
);
const h3 = document.createElement( "h3" );
const dl = document.createElement("dl");

h3.innerText = "Exemple d'un contenu d'un fichier .gitignore";
dl.innerHTML = `<dt>node_modules</dt>
		<dd>On ne suivra pas le dossier node_modules</dd>
	<dt>unRepertoire/*.txt</dt>
		<dd>Dans unRepertoire on ne suivra pas les .txt</dd>
	<dt>unAutreRepertoire/**/*.md</dt>
		<dd>Dans un dossier et ces sous-dossiers, on ne suivra pas les .md (markdown)</dd>
	<dt>/.bundle</dt>
		<dd>ignore tous les .bundle</dd>
	<dt>/log/*</dt>
		<dd>ignore tous les fichiers dans le dossier log</dd>
	<dt>/tmp</dt>
		<dd>ignore le dossier tmp (dossier temporaire)</dd>`
exempleContentGitIgnore.append(h3, dl);

articleIgnore.appendChild(exempleContentGitIgnore);
main.appendChild( sectionIgnore );


/**
 * -----------------------------------------------------------------------------
 * COMMAND DE BASE
 * -----------------------------------------------------------------------------
 */
const sectionGitBase = newSection( "base", "Commande de base" );
const articleGitStatus = newArticle(
	"section__base",
	8,
	"Connaître l'état même d'un repository",
	"git status",
	"Cette commande permet de savoir l'état de notre répertoire de travail.<br />Si le résultat est affiché en rouge, c'est qu'il faut ajouter les fichiers en s'assurant qu'il n'entrave en rien l'application.<br />Si c'est en vert c'est que les fichiers ont été ajouté et qu'il faut tout simplement ajouter un commentaire de préférence le plus précis possible. (Commit)"
);

const articleGitAdd = newArticle(
	"section__base",
	9,
	"Ajouter des fichier dans la zone appelé 'Stagging Area'",
	"git add nom_du_fichier.extenssion",
	"Cette commande permet d'ajouter des fichiers pour que git les track.<br />Une option existe avec le <mark>' . '</mark> à la fin en lieu et place du nom du fichier soit : <mark>git add .</mark><br />Le point nous permets d'ajouter tous les fichiers tracké directement (Ceux qui apparaissent en rouge même si ils sont supprimé)"
);

const articleGitDiff = newArticle(
	"section__base",
	10,
	"Connaître la différence qu'il y a entre un fichier modifié son original",
	"git diff exemple.html",
	"Cette commande permet de voir les changements apporté au notre fichier exemple.html en le comparant au même fichier qu'on avait au départ.<br /> Ahhh le versionning c'est trop pratique !!"
)

sectionGitBase.append( articleGitStatus, articleGitAdd, articleGitDiff );
main.appendChild( sectionGitBase );



/*



Note personnel des cours suivis sur Dyma et ailleurs (plus bas)



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