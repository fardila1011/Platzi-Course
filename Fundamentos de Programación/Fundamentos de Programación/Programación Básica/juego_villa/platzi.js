var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
	url: "tile.png",
	cargaOK: false
};

var vaca = {
	url: "vaca.png",
	cargaOK: false
};

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

function cargarFondo(){
	fondo.carrgaOK = true;
	dibujar();
}

function cargarVacas(){
	vaca.carrgaOK = true;
	dibujar();
}

function dibujar(){
	if (fondo.carrgaOK){
		papel.drawImage(fondo.objeto, 0,0);
	}
	if (vaca.carrgaOK){
		var cantidad = aleatorio(5, 25);
		console.log(cantidad);
		for (var v = 0; v<cantidad; v++) {
			var x = aleatorio(0,420);
			var y = aleatorio(0,420);
			papel.drawImage(vaca.objeto, x,y);	
		}
	}
}

function dibujarVacas(){
	papel.drawImage(vaca.objeto, 10, 10);
}

function aleatorio(min, max){
	var resultado = Math.floor(Math.random()*(max-min+1))+min;
	return resultado;
}