/* Realizar un ToDo List, debera tener las siguientes funcionalidades:

- Crear el modulo ToDoList
- El modulo debera tener los metodos necesarios para Agregar, Editar, Mostrar Todos, Buscar y Eliminar.
- Una tarea contiene las siguientes propiedades: id, titulo, descripcion y completado
- Se tiene que poder editar titulo y descripcion de una tarea
- Cambiar a estado completado y descompletado(?) una tarea
- Eliminar una tarea o todas las tareas
- Ordernar por A-Z y Z-A las tareas ya sea por titulo como por ID
- Las tareas Deberan quedar persistidas mediante localstorage y poder mostrarse en caso de recargar el browser

*/

///declaro arreglo para los items.
var itemsArr = new Array();

//estructura de las instancias de tipo items
var Items = function(id,titulo,descripcion,estado){
	this.id = id;
	this.titulo = titulo;
	this.descripcion = descripcion;
};

//estructura del modulo todo list
var todoList = (function(){
	//ambito privado;
	var _id = 0;
	var _articulo;
	var _titulo;
	var _descripcion;
	var _objItem;

	var addItem = function(){
		_id++; //genera ID
		_titulo = document.getElementById("titulo_txt").value;
		_descripcion = document.getElementById("descripcion_txt").value;
		_objItem = new Items(_id,_titulo,_descripcion); 
		itemsArr.push(_objItem);
		localStorage.setItem("itemStorage", JSON.stringify(itemsArr)); //se guardan datos en storage
		console.log(itemsArr);
		event.preventDefault();
		//limpiarCampos();
	};//cierre addItem

	var mostrarItems = function(){
		document.getElementById("items").innerHTML = '';
		var estadoLectura;
		event.preventDefault();
		itemsArr = JSON.parse(localStorage.getItem("itemStorage")); //sobrescribo el contenido del arreglo con lo que hay en el storage.
		for(var x in itemsArr){
				_articulo = document.createElement("article");
				_articulo.id = "articulo-"+x;

				_titulo = document.createElement("h3");
				_titulo.appendChild(document.createTextNode(itemsArr[x].titulo));
				
				_descripcion = document.createElement("p");
				_descripcion.appendChild(document.createTextNode(itemsArr[x].descripcion));

				var check = document.createElement('input');
				check.type = "checkbox";
				check.id = "estadocheck";

				var borrar = document.createElement('span');
				borrar.className = "glyphicon glyphicon-trash";
				borrar.id = "borrarItem";

				_articulo.appendChild(_titulo);
				_articulo.appendChild(_descripcion);
				_articulo.appendChild(check);
				_articulo.appendChild(borrar);

				document.getElementById("items").appendChild(_articulo);
				localStorage.setItem("itemStorage", JSON.stringify(itemsArr)); //se guardan datos en storage

		}//cierre for
	};//cierre mostrarItems

	var borrarItems = function(){

	};

	var borrarTodos = function(){
		var itemsBorrar = document.getElementById("items");
		var arti = document.getElementsByTagName("article");
		for(var i in itemsArr) {
			itemsBorrar.removeChild(arti[i]);
		}
	};

	return {
		addItem : addItem,
		mostrarItems : mostrarItems,
		borrarTodos : borrarTodos,
	};
})();
