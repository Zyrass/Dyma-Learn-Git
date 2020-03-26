// TEST AVEC UN OBJET

const git = {
	config: [
		{
			command: "git config --list",
			definition: "Permet de lister la configuration actuel"
		},
		{
			command: "git config --global user.name 'John Doe'",
			definition: "Permet de définir son nom et prénom globalement"
		}
	],
}

console.log( "git.config", git.config );

for ( const result of git.config ) {
	
	for ( let [key, value] of Object.entries( result ) ) {

		console.log( `${key} : ${value}`);
	}
}


