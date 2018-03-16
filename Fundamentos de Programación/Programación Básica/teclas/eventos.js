var teclas = {
	LEFT: 37,
	UP: 38,
	RIGTH: 39,
	DOWN: 40
};

console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("red", x-1, x-1, x+1, x+1, papel);

function dibujarTeclado(evento){
	colorsito = "blue";
	movimiento = 1;
	switch (evento.keyCode){
		case teclas.LEFT:
			dibujarLinea(colorsito, x, y, x-movimiento, y, papel);
			x = x-movimiento;
		break;
		case teclas.UP:
			dibujarLinea(colorsito, x, y, x, y-movimiento, papel);
			y = y-movimiento;
		break;
		case teclas.DOWN:
			dibujarLinea(colorsito, x, y, x, y+movimiento, papel);
			y = y+movimiento;
		break;
		case teclas.RIGTH:
			dibujarLinea(colorsito, x, y, x+movimiento, y, papel);
			x = x+movimiento;
		break;
	}
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = 3;
	lienzo.moveTo(xInicial, yInicial);
	lienzo.lineTo(xFinal, yFinal);
	lienzo.stroke();
	lienzo.closePath();
}