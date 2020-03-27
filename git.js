"use-strict"

// Sélection du main regroupant toutes mes futures sections.
const main = document.getElementById("main");

/**
 * FR : Création d'une fonction qui me permet de créer une nouvelle section
 * @param { String } identifiantSection 
 * @param { String } titre 
 */
const newSection = ( identifiantSection, titre ) => {

	const section = document.createElement("section");
	const h2 = document.createElement("h2");

	section.classList.add("section__container");
	section.setAttribute("id", "section__" + identifiantSection);

	h2.innerText = titre;

	section.appendChild( h2 );
	main.appendChild( section );

	return section;
}

/**
 * FR : Vous permet de créer un article sur le DOM
 * @param { String } identifiantSection
 * @param { Number } identifiantArticle
 * @param { String } legende 
 * @param { String } terme 
 * @param { String } definition
 */
const newArticle = ( 
	identifiantSection, identifiantArticle, legende, terme, definition 
) => {

	const sectionID = document.getElementById(identifiantSection);
	const article = document.createElement("article");
	const fieldset = document.createElement("fieldset");
	const legend = document.createElement("legend");
	const dl = document.createElement("dl");
	const dt = document.createElement("dt");
	const dd = document.createElement("dd");
	
	article.classList.add("article__container");
	article.setAttribute(
		"id", "article__" + identifiantArticle + "__" + identifiantSection
	);

	fieldset.setAttribute(
		"id", "article__" + identifiantArticle + "__fieldset"
	)

	legend.innerText = legende;
	dt.innerText = terme;
	dd.innerHTML = definition;

	article.appendChild( fieldset);
	fieldset.append(legend, dl);
	dl.append(dt, dd);	
	
	sectionID.append(article);

	return article;
}