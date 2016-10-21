//declaro arreglo para las noticias.
var noticiasArr = new Array();

//estructura de las instancias de tipo Noticias
var Noticias = function(id,titulo,descripcion,imagen,estado){
	this.id = id;
	this.titulo = titulo;
	this.descripcion = descripcion;
	this.imagen = imagen;
	this.estado = estado;
};

//estructura del modulo
var diario = (function(){
	//ambito privado;
	var _id = 0;
	var _articulo;
	var _titulo;
	var _descripcion;
	var _imagen;
	var _estado;
	var _objNoticia;

	var agregarNoticia = function(){
		_id++; //genera ID
		_titulo = document.getElementById("txt_titulo").value;
		_descripcion = document.getElementById("txt_descripcion").value;
		_imagen = document.getElementById("txt_imagen").value;
		_objNoticia = new Noticias(_id,_titulo,_descripcion,_imagen,true); //noticia no leida = true
		noticiasArr.push(_objNoticia);
		localStorage.setItem("noticiasStorage", JSON.stringify(noticiasArr)); //se guardan datos en storage
		console.log(noticiasArr);
		event.preventDefault();
		limpiarCampos();
	};//cierre agregarNoticias

	var mostrarNoticias = function(){
		document.getElementById("noticias").innerHTML = '';
		var estadoLectura;
		event.preventDefault();
		noticiasArr = JSON.parse(localStorage.getItem("noticiasStorage")); //sobrescribo el contenido del arreglo con lo que hay en el storage.
		for(var x in noticiasArr){
				_articulo = document.createElement("article");
				_articulo.id = "articulo"+x;
				_titulo = document.createElement("h2");
				_titulo.appendChild(document.createTextNode(noticiasArr[x].titulo));

				estadoLectura = document.createElement("span");
				if(noticiasArr[x].estado){
					estadoLectura.setAttribute("class", "noticiaNueva");
					estadoLectura.appendChild(document.createTextNode("(Nueva)"));
				}else{
					estadoLectura.setAttribute("class", "noticiaLeida");
					estadoLectura.appendChild(document.createTextNode("(Leida)"));
				}
				
				_descripcion = document.createElement("h3");
				_descripcion.appendChild(document.createTextNode(noticiasArr[x].descripcion));
				_imagen = document.createElement("img");
				_imagen.src = noticiasArr[x].imagen;

				_articulo.appendChild(estadoLectura);
				_articulo.appendChild(_titulo);
				_articulo.appendChild(_descripcion);
				_articulo.appendChild(_imagen);

				document.getElementById("noticias").appendChild(_articulo);
				noticiasArr[x].estado = false; //el estado cambia a false, para señalar que ya ha sido renderizada/leida la noticia.
				localStorage.setItem("noticiasStorage", JSON.stringify(noticiasArr)); //se guardan datos en storage
			//}//cierre if estado

		}//cierre for
	};//cierre mostrarNoticias

	var ordenarAsc = function(){
		ordenar("titulo","asc");
	};

	var ordenarDesc = function(){
		ordenar("titulo","desc");
	};

	var ordenarId = function(){
		ordenar("id","asc");				
	};

	var ordenar = function(campo,orden){
		//genero un arreglo auxiliar con el contenido del storage.
		var noticiasAuxiliar = JSON.parse(localStorage.getItem("noticiasStorage"));
		
		//reseteo el estado de todas las noticias para mostrarlas ordenadas.
		for(var x in noticiasAuxiliar){
			noticiasAuxiliar[x].estado = false;
		}	

		//dependendiendo el campo, es el código de ordenamiento que usaré en el arreglo auxiliar.
		if(orden == 'asc'){
			noticiasAuxiliar.sort(function (a, b) {
			  	if (a.titulo > b.titulo) {
			    	return 1;
			  	}
			  	
			  	if (a.titulo < b.titulo) {
			    	return -1;
			  	}
			  	// a must be equal to b
			  		return 0;
			});
		}else if(orden == 'desc'){
			noticiasAuxiliar.sort(function (a, b) {
			  	if (a.titulo < b.titulo) {
			    	return 1;
			  	}
			  	
			  	if (a.titulo > b.titulo) {
			    	return -1;
			  	}
			  		return 0;
			});
		}else if(campo == 'id'){
			noticiasAuxiliar.sort(function (a, b) {
			  	if (a.id > b.id) {
			    	return 1;
			  	}
			  	
			  	if (a.titulo < b.titulo) {
			    	return -1;
			  	}
			  	// a must be equal to b
			  		return 0;
			});
		}

		//después de ordenar los datos, sobreescribo el contenido del storage.
		localStorage.setItem("noticiasStorage", JSON.stringify(noticiasAuxiliar)); //se guardan datos en storage
	}; //cierre funcion privada ordenar.

	return {
		agregarNoticia : agregarNoticia,
		mostrarNoticias : mostrarNoticias,
		ordenarAsc : ordenarAsc,
		ordenarDesc : ordenarDesc,
		ordenarId : ordenarId
	};
})();
