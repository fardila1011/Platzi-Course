var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");

boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");


function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xInicial, yInicial);
	lienzo.lineTo(xFinal, yFinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujoPorClick(){
	var lineas = parseInt(texto.value);
	var l = 0;

	while (l < lineas){
		dibujarLinea("#AAF", 0, (300/lineas)*l, (300/lineas)*(l+1), 300);
		console.log("linea " + l);
		l++;
	}

	dibujarLinea("black", 1, 1, 1, 300);
	dibujarLinea("black", 1, 300, 300, 300);
}