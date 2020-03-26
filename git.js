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

const newArticle = (
	identifiant,
	titre,
	legende,
	terme,
	definition,
	backgroundColor = "#333"
) => {
	
	const article = document.createElement("article");
	const h2 = document.createElement("h2");
	const fieldset = document.createElement("fieldset");
	const legend = document.createElement("legend");
	const dl = document.createElement("dl");
	const dt = document.createElement("dt");
	const dd = document.createElement("dd");

	article.setAttribute("id", identifiant);
	article.style.backgroundColor = backgroundColor;

	h2.innerText = titre;
	h2.style.position = "absolute";
	h2.style.fontSize = "25px";
	h2.style.right = "-10px";
	h2.style.top = "50px";
	h2.style.transform = "rotate(90deg)";
	h2.style.fontWeight = "700";
	h2.style.color = "tan";

	legend.innerText = legende;
	legend.style.color = "darkgoldenrod";
	legend.style.padding = "0 20px";
	legend.style.letterSpacing = "2px";

	dt.innerText = terme;
	dt.style.fontSize = "18px"
	dt.style.fontWeight = "300";
	dt.style.color = "teal";

	dd.innerText = definition;
	dd.style.fontSize = "15px";
	dd.style.fontWeight = "300";
	dd.style.color = "lightslategrey";

	article.append(h2, fieldset);
	fieldset.append(legend, dl);
	dl.append(dt, dd);

	return article;
}

