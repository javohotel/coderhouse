
//Definicion de la estructura de un objeto

//Los atributos van asignados como variables, los metodos como variables con funciones (this.metodo = function(){} )

function auto(col,vel,mod,mar){
	this.color = col;
	this.velocidad = vel;
	this.modelo = mod;
	this.marca = mar;

	//Seters
	this.setColor = function(col){
		this.color = col;
	}

	this.setVelocidad = function(vel){
		this.velocidad = vel;
	}

	//Getter
	this.getColor = function(){
		return this.color;
	}

	this.getVelocidad = function(){
		return this.velocidad;
	}

	this.acelerar = function() {
		this.velocidad = this.velocidad + 10;
	}

	this.pintar = function() {
		this.color = " negro ";
	}
}


// Si quiero acceder a un tributo lo escribo solo con un punto (objeto.atributo) y si quiero usar un metodo para asignar o mostrar uso parentesis () objeto.metodo();

//Crear un objeto para moestrar
var auto1 = new auto("verde",140,"morning","hyundai");

document.write("El auto es marca " + auto1.marca + " Modelo " + auto1.modelo + " Es de color " + auto1.color);

//Prototipos: sirven para agregar atributos a la estructura de un objeto
auto.prototype.peso = 45; // agrego el atributo peso a la estructura de auto 

document.write(auto1.peso);

