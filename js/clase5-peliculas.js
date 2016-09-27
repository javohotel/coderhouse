/*
EJERCICIO CODERHOUSE CON OBJETOS.

1.- Crear una funcion que agregue objetos peliculas.
2.-El objeto pelicula Debera tener ID, titulo, descripcion, año, duracion, actores, director
3.- Debera tener metodos para editar todas sus propiedades, menos su ID, y para los actores tendra que ir agregando uno a uno */

    // Creo el objeto con los metodos get y set.

function Pelicula (id, titulo, descripcion, duracion, year, director, actores){

  //Metodos set.

  this.id = id;
  this.titulo = titulo;
  this.descripcion = descripcion;
  this.duracion = duracion;
  this.year = year;
  this.director = director;
  this.actores = actores;

  //Metodos get.

  this.getId = function(){
    return this.id;
  }

  this.getTitulo = function(){
    return this.titulo;
  }
  this.getDescripcion = function(){
    return this.descripcion;
  }
  this.getDuracion = function(){
    return this.duracion;
  }
  this.getYear = function(){
    return this.year;
  }
  this.getDirector = function(){
    return this.director;
  }
  this.getActores = function(){
    return this.actores;
  }
  // Metodo para obtener actores.
  // Problema en resultado final de la iteracion.
  // Hace uso de variable global arr.

  this.setTitulo = function(tit) {
    this.titulo = tit;
  }

  this.setDescripcion = function(desc) {
    this.descripcion = desc;
  }

  this.setDuracion = function(dur) {
    this.duracion = dur;
  }

  this.setYear = function(year) {
    this.year = year;
  }

  this.setDirector = function(dir) {
    this.director = dir;
  }

  this.setActores = function(arreglo) {
    this.actores = arreglo;
  }

  this.addActor = function(nomActor) {
    this.actores.push(nomActor); // Push agrega datos a un array, se escribe el nombre de la variable.push (la variable tiene que ser array)
  }

}

var unaPelicula = new Pelicula(1, "Duro de matar", "Pelicula de acción", 120, 1988, "Jon McClein", ["Bruce Willis", "Alan Rickman", "Bonnie"]);

unaPelicula.addActor("jack black");

var actores = unaPelicula.getActores();

// for in 

for(i in actores) {
  document.write(actores[i] + "<br>")
}

for(i = 0; i < 2; i++) {
  document.write(actores[i] + "<br>");
}