//# Crear un array de peliculas
//- Crear una funcion que agrege una pelicula al array de peliculas
//- La pelicula debera tener un ID y un Titulo
//- Crear una funcion que evalue antes de agregar que la pelicula no fue ingresada previamente
//- Crear una funcion que ordene las peliculas por Titulo y por ID
//- Crear una funcion que elimine una pelicula por su ID.


var peliculas = ["Matrix", "El señor de los anillos", "Fight Club"];



function comparador(cri){
	if(peliculas.indexOf(cri) == -1){
		function addPelicula(cri) {
			peliculas.push(cri)
		}
	}
	else{
		return "la pelicula ya existe";
	}
}

