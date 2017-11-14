/*
Enunciado:
Debera poder ingresar 2 valores
Debera poder ingresar que operacion quiere realizar
Cada operacion tendra que ser una funcion con los 2 paramentros para sumar, restar, multiplicar o dividir;
Debera mostrar el resultado de la operacion en consola
*/


/*
funcion mostrarMenu() que pide los números y valida la operación ingresada con ciclo while.
*/


function mostrarMenu(){
	var op = 0; //para almacenar la operación.
	var num1 = parseInt(prompt("Ingrese el primer número: "));
	var num2 = parseInt(prompt("Ingrese el segundo número: "));
	var op = prompt("Ingrese operación (+ , - , * , /) : ");
	while(op != '+' && op != '-' && op !='*' && op != '/')
	{
		op = prompt("Operación no válida, por favor ingrese +, -, *, / : ");
	}

	while(num2 == 0 && op == '/')
	{
		num2 = parseInt(prompt("No existe la división por cero. Por favor, ingrese el segundo número de nuevo: "));
	}

	switch(op){
		case '+':
			sumar(num1,num2);
		break;
		case '-':
			restar(num1,num2);
		break;
		case '*':
			multiplicar(num1,num2);
		break;
		case '/':
			dividir(num1,num2);
		break;
	}	
}//cierre funcion mostrarMenu()



function sumar(a,b)
{
	document.write("La suma es: "+ (a+b));
}

function restar(a,b)
{
	document.write("La resta es: "+ (a - b));
}

function multiplicar(a,b)
{
	document.write("La multiplicación es: " + (a * b));
}

function dividir(a,b)
{
	document.write("La división es: " + (a / b));
}

mostrarMenu(); //comentar esta linea si se utiliza la función anónima para pedir los números y la operación.


/*
Función anónima que pide los números y valida la opción matemática ingresada con do-while.
Para probar esta funcion, se debe comentar la función mostrarMenu() y su respectiva llamada.




(function(){
	var op = 0; //para almacenar la operación.
	var num1 = parseInt(prompt("Ingrese el primer número: "));
	var num2 = parseInt(prompt("Ingrese el segundo número: "));
	do{
		op = prompt("Ingrese la operación a realizar (+, -, *, /): ");
		if(op != '+' && op != '-' && op !='*' && op != '/')
		{
			alert("La operación ingresada no existe");
		}
	}while(op != '+' && op != '-' && op !='*' && op != '/');

	do{
		if(num2 == 0 && op == '/')
		{
			num2 = prompt("No es posible realizar división por cero. Ingrese el segundo número de nuevo: ");
		}
	}while(num2 == 0 && op == '/');

	switch(op){
		case '+':
			sumar(num1,num2);
		break;
		case '-':
			restar(num1,num2);
		break;
		case '*':
			multiplicar(num1,num2);
		break;
		case '/':
			dividir(num1,num2);
		break;
	}	
})();//cierre funcion anonima()

*/