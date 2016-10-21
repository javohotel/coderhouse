/*
Mejorar el modulo Diario
Crear un formulario que tenga los campos titulo, descripcion y uno donde poder ingresar un link a la imagen.  OK
Este formulario tendra que tener un boton ("agregar"), el cual Debera permitir al modulo Diario agregar una pelicula
Este formulario Debera tener tambien un boton ("mostrar todos"), el cual Debera permitir al modulo Diario mostrar todas las noticias
Incluir otros botones para poder ordenar por AZ ZA e ID y Diario
En caso de encontrarse noticias persistidas tendran que volver a renderizarse
Al renderizar la noticia en el DOM se Debera poder marcar leida y no volver a mostrarse
*/

window.onload = function() {
	//localStorage.clear();
	document.getElementById("btn_agregar").onclick = diario.agregarNoticia;
	document.getElementById("btn_mostrar").onclick = diario.mostrarNoticias;
	document.getElementById("btn_ordenar_asc").onclick = diario.ordenarAsc;
	document.getElementById("btn_ordenar_desc").onclick = diario.ordenarDesc;
	document.getElementById("btn_ordenar_id").onclick = diario.ordenarId;
}