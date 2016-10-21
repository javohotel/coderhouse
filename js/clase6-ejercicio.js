/*
- Crear un arreglo que tenga noticias
- Crear un boton: El titulo Debera ser un H1, la descipcion un P y la imagen un img
- A travez del debera tener la posibilidad de eliminar del DOM la noticia por ID que desee
 
getElementById()
 
Pasos para crear un elemento
 
1. Creación de un nodo de tipo Element.
2. Creación de un nodo de tipo Text.
3. Añadir el nodo Text como nodo hijo del nodo Element.
4. Añadir el nodo Element a la página.
 
REMOVER UN ELEMENTO
 
node.removeChild(node)
*/

var noticias = [""]

function agregarNoticia() {
 
    // Paso 1: Crear nodo de tipo Element
    var titulo = document.createElement("h1");

    // Paso 2: Crear nodo de tipo Text
    var contenidoTitulo = document.createTextNode("Hola Mundo!");

    // Paso 3: Añadir el nodo Text como hijo del nodo Element
    titulo.appendChild(contenidoTitulo);

    // Paso 4: Añadir el nodo Element como hijo de la pagina
    document.body.appendChild(titulo);
}
 
function borrarNoticia(){
 	
 	var elemento = document.getElementsByTagName("h1");
    elemento.parentNode.removeChild(elemento);
 
}

