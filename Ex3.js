
let ciclo = "ciclo";
var Nomciclo = {
	["primer" + ciclo]: "Lavado",
	["segundo" + ciclo]: "Enjuague",
	["tercer" + ciclo]: "Centrifugado",
	["cuarto" + ciclo]: "Ciclo Completo",
}; 

let main = ((tiempo)=>{
	console.log(`1-${Nomciclo["primer" + ciclo]}\n2-${Nomciclo["segundo" + ciclo]}\n3-${Nomciclo["tercer" + ciclo]}\n4-${Nomciclo["cuarto" + ciclo]}`);
	setTimeout(function()
	{
		let noCiclo = window.prompt(`Digita el número de ciclo por ejecutar`, "Ej. 1");

		if(Object.is(noCiclo, "1")){Lavado(color,1500);}
		if(Object.is(noCiclo, "2")){Enjuague(color,1500);}
		if(Object.is(noCiclo, "3")){Centrifugado(color,1500);}
		if(Object.is(noCiclo, "4")){CC(color,1500);}
	}, tiempo);		
})(500);

let peso={
	Peso: prompt(`Peso de la carga (kg)`, "Máx 20kg"),
	get Pezo(){
		return this.Peso;
	},
	getPeso(){
		console.log(`Carga de: ${this.Peso}kg`);
	}
}
//Object.assign(ciclo, peso);
//console.log(Object.assign(ciclo, peso));
//console.log(Object.getOwnPropertyNames(ciclo).join(","));
compP(peso);

function compP(Datos){
	if(peso.Peso<=0 || peso.Peso>=21){
		do{
			console.error("Capacidad de carga no permitida");
			var Peso= prompt(`Peso de la carga (kg)`, "Máx 20kg");
		}
		while(Peso<=0 || Peso>=21)
	}
	if((peso.Peso>0 || peso.Peso<21) || (Peso>0 || Peso<21)) console.log("Recopilando datos..");
}

let color;
do {
	color = prompt("Ropa de color o blanca");
}while(!compC(color));
console.log("Datos Cargados");
function compC(Datos2){
	if(!(Datos2=="blanca" || Datos2=="color" || Datos2=="Blanca" || Datos2=="Color")) {
		console.error("Color de ropa no permitido");
		return false;
	} else return true;
}

function Lavado(getColor, tiempo){
	peso.getPeso();
	if(!(color=="color")){
		console.log("Duración 15min");
		setTimeout(function()
		{
			console.log("Han pasado 15min");
		}, tiempo);
	}
	else{
		tiempo= tiempo + tiempo;
		console.log("Duración 30min");
		setTimeout(function()
		{
			console.log("Han pasado 30min");
		},tiempo);
	}	
}

function Enjuague(){
	//algo
}

function Centrifugado(){
	//algo	
}

function CC(){
	//algo
}


