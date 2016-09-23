//Esta es la forma literal de declarar obejtos, es mas usada porque se comunica mejor con JSON

//Se declar como variable, en realdidad es una variable con varios atributos asignados con un :

var auto = {
	marca: "kia",
	modelo: "morning",
	color: "azul",
	velocidad: 160,
}

//Creo un nuevo objeto y se trae los parametros
var auto1 = Object.create(auto);
auto1.modelo = "rio" //le asigno un nuevo valor a algun atributo
auto.peso = 56; // le agrego un nuevo valor de atributo a la estructura del objeto

document.write(auto.modelo + "<br>"); //Imprimo el original
document.write(auto1.modelo); //imprimo el nuevo valor
