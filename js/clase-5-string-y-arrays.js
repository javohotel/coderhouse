var mensaje = "Soy un String";

//Length
//document.write("Su mensaje es:" + mensaje + " longitud " + mensaje.length);

//IndexOf

var str = "World, Welcome to the ";
var str2 = "Universe.";
//var n = str.indexOf("oso");

//document.write(n);
function buscar(cri,str){
	if(str.indexOf(cri) != -1){
		return "Se encontro el criterio";
	}
	else{
		return "No se encontro.";
	}
}


//document.write(buscar("Hola","Hola mundo"));

// CharAt
//document.write(str.charAt(1));

//Substring
//document.write(str.substring(7,14));

//toLowerCase
//document.write(str + "<br/>");
//document.write(str.toLowerCase() + "<br/>");
//document.write(str.toUpperCase() + "<br/>");

//Concat
var str3 = str + str2;
str3 = str3.toUpperCase();
//document.write(str.concat(str2) + "<br/>");

var arr = str3.split(" ");
for(i in arr){
	//document.write(arr[i] + "<br/>");
}

//toString

//document.write(arr.toString());

//Push
arr.push("my ","friend");;

for(i in arr){
	//document.write(arr[i] + "<br/>");
}

//document.write(arr.join(" = "));
//document.write(arr.sort());

// pop

document.write(arr.pop() + "<br/>");
for(i in arr){
	//document.write(arr[i] + "<br/>");
}

// Reverse

var arr2 = arr.reverse();

for(i in arr2){
	//document.write(arr2[i] + "<br/>");
}

// concat array
var arreglo1 = ["Cecilie", "Lone"];
var arreglo2 = ["Emil", "Tobias", "Linus"];
var arreglofinal = arreglo1.concat(arreglo2);

for(i in arreglofinal){
	document.write(arreglofinal[i] + "<br/>");
}

var arrtmp = arreglofinal.splice(2,2, "uno", "dos");

document.write("Splice <br/>");

for(i in arrtmp){
	document.write(arrtmp[i] + "<br/>");
}
