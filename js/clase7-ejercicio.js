/* Mejorar el modulo Diario

- Crear un formulario que tenga los campos titulo, descripcion y uno donde poder ingresar un link a la imagen.
- Este formulario tendra que tener un boton ("agregar"), el cual Debera permitir al modulo Diario agregar una pelicula
- Este formulario Debera tener tambien un boton ("mostrar todos"), el cual Debera permitir al modulo Diario mostrar todas las noticias
- Incluir otros botones para poder ordenar por AZ ZA e ID y Diario
- En caso de encontrarse noticias persistidas tendran que volver a renderizarse (cuando se recargue el navegador) local storage
- Al renderizar la noticia en el DOM se Debera poder marcar leida y no volver a mostrarse
*/

var diario = (function(){

	var agregarNoticia = function(){
		var titulo = document.getElementById("titulo").value;
		var descripcion = document.getElementById("descripcion").value;
		var linkimg = document.getElementById("linkimg").value;
		var noticias = document.getElementById("noticias");

		var tituloPrint = document.createElement("h1");
		var tituloText = document.createTextNode(titulo);
		tituloPrint.appendChild(tituloText);

		var descripcionPrint = document.createElement("h3");
		var descripcionText = document.createTextNode(descripcion);
		descripcionPrint.appendChild(descripcionText);

		var linkimgPrint = document.createElement("img");
		linkimgPrint.src = linkimg;

		noticias.appendChild(tituloPrint);
		noticias.appendChild(descripcionPrint);
		noticias.appendChild(linkimgPrint);


	};
	return {
		mostrar : agregarNoticia
	};
})(); // cierre funcion anonima

