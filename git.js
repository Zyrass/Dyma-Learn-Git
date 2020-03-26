/**
 * -----------------------------------------------------------------------------
 * Sélection de la section regroupant tous mes futurs articles.
 * -----------------------------------------------------------------------------
 */
const section = document.getElementById("section");

/**
 * -----------------------------------------------------------------------------
 * Création d'une fonction qui me permet de créer un article complet sur le dom.
 * -----------------------------------------------------------------------------
 */

const createArticle = (identifiant, legende, terme, definition ) => {
	
	const article = document.createElement("article");
	const fieldset = document.createElement("fieldset");
	const legend = document.createElement("legend");
	const dl = document.createElement("dl");
	const dt = document.createElement("dt");
	const dd = document.createElement("dd");

	article.setAttribute("id", identifiant);
	legend.innerText = legende;
	dt.innerText = terme;
	dd.innerText = definition;
	
	article.append(fieldset);
	fieldset.append(legend, dl);
	dl.append(dt, dd);

	return article;
}


/**
 * -----------------------------------------------------------------------------
 * VERSION
 * -----------------------------------------------------------------------------
 */
const version = createArticle(
	"version",
	"Quelle version est installée sur ma machine",
	"git --version",
	"Permet de connaître la version de git qui est installé sur l'ordinateur."
)
section.append( version );	

/**
 * -----------------------------------------------------------------------------
 * CONFIGURATION
 * -----------------------------------------------------------------------------
 */
const configUserName = createArticle(
	"configUserName",
	"Définir le nom et le prénom pour tous les utilisateurs",
	"git config --global user.name 'John Doe'",
	"Permet de définir son nom et son prénom pour tous les utilisateurs de la même machine." 
)
section.appendChild( configUserName );


/**
git config --system user.name "Alain Guillon"		Pour d�finir son nom et pr�nom pour tout les users

git config --global user.email "zyrass@outlook.fr"	Pour d�finir son email globalement
git config --global user.email "zyrass@outlook.fr"	Pour d�finir son email pour tous les users

git config user.name					Pour voir le nom enregistr�
git config user.email					Pour voir l'email enregistr� :
*/