/*
Crear el modulo Diario
 
- El objeto noticia debera contener un id, un titulo, una descripcion y una imagen
- El modulo Debera validar que la noticia no fue ingresada previamente
- El modulo Debera tener la posibilidad de eliminar una noticia por ID
- El modulo Debera tener la posibilidad de ordernar sus noticias
- El modulo debera persistir las noticias creadas en session o local storage,
por lo tanto cuando recargue deberan volver a aparecer.
 
http://www.w3schools.com/html/html5_webstorage.asp
 
*/

var diarioModulo = function{ 

//Creamos objeto noticia

	function noticia(id, titulo, descripcion, imagen) {
		this.id = id;
		this.titulo = titulo;
		this.descripcion = descripcion;
		this.imagen = imagen;

		this.setId = function(){

		}

		this.settitulo = function(){
			
		}

		this.setdescripcion = function(){
			
		}

		this.setimagen = function(){
			
		}

		this.getId = function(){

		}

		this.gettitulo = function(){
			
		}

		this.getdescripcion = function(){
			
		}

		this.getimagen = function(){
			
		}
	}:

	var diarioNoticias = []:
	var buscarNoticia = function(criTitulo){

	};

	var ordernarNoticias = function(){

	};

	return {
		agregarNoticia: function(){

			buscarNoticia();
		};
		eliminarNoticia: function(id){

		}

	};

}();

diarioModulo.agregarNoticia("Titulo", "Descripcion", "pic1.jpg")

