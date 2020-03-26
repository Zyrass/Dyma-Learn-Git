// MES NOTES

/*
------------------------------------------------------------------------------------------------------------
INITIALISATION D'UN PROJET
------------------------------------------------------------------------------------------------------------
git init						Initialis� un d�p�t git

------------------------------------------------------------------------------------------------------------
INITIALISATION D'UN FICHIER POUR SAUTER DES FICHIERS
------------------------------------------------------------------------------------------------------------
touch .gitignore					/!\ Fichier cach� - Utiliser un .gitignore afin de ne pas tracker des fichiers

**************************************************************************************************************************************************************************************************************
EXEMPLE D'UN CONTENU D'UN .gitignore
--------------------------------------
node_modules						On ne suivra pas le dossiers node_modules*/
// unRepertoire/*.txt					Dans unRepertoire on ne suivra pas les .txt
// unAutreRepertoire/**/*.md				Dans unRepertoire et ces sous r�pertoires
// 							on ne suivra aucun .md
//  /.bundle 						ignore tous les .bundle
//  /log/*							ignore tous les fichiers dans le dossier log
//  /tmp							ignore le dossier temporaire tmp

/*
------------------------------------------------------------------------------------------------------------
COMMAND DE BASE
------------------------------------------------------------------------------------------------------------
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

------------------------------------------------------------------------------------------------------------
CONNAITRE L'EMPLACEMENT DES FICHIERS QUI NE SONT PAS ENCORE COMMIT
------------------------------------------------------------------------------------------------------------
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