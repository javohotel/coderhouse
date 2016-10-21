// function validarCamposVacios(){
// 	event.preventDefault();
// 	var titulo = document.getElementById("txt_titulo").value;
// 	var descripcion = document.getElementById("txt_descripcion").value;
// 	var imagen = document.getElementById("txt_imagen").value;
	
// 	if((!titulo) || titulo.length == 0 || titulo == " "){
// 		alert("Faltan datos por llenar, no puede guardar la noticia.");
// 	}else if((!descripcion) || descripcion.length == 0 || descripcion == " "){
// 		alert("Faltan datos por llenar, no puede guardar la noticia");
// 	}else if((!imagen) || imagen.length == 0 || imagen == " "){
// 		alert("Faltan datos por llenar, no puede guardar la noticia");
// 	}
// }

function limpiarCampos(){
	event.preventDefault();
	document.getElementById("txt_titulo").value = "";
	document.getElementById("txt_descripcion").value = "";
	document.getElementById("txt_imagen").value = "";
}