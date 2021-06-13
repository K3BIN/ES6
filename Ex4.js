
//-----------------------------------------Jugador-----------------------------------------
let P1={
	Nom: prompt(`Nuevo Jugador`, "VIPER"),
	Class: prompt(`Clase`, "Hada")	//"Milicia, Caballero, Mago o Hada"
}

function CrearJugador(nick, {clase,hp,pm,nv} = {clase:"brujo"}){	//Parámetro(s) por defecto
	console.log(`Jugador Creado:${" ".repeat(5)}| ${nick}\nVida:${" ".repeat(14)} | ${hp}hp\nPoder Mágico:${" ".repeat(6)} | ${pm}pm\nClase:${" ".repeat(13)} | ${clase}\nNivel:${" ".repeat(13)} | nv${nv}`);
}

CrearJugador(P1.Nom ,{clase:P1.Class, hp:700, pm:900, nv:6}/**,{hp:500,pm:1000,clase:"milicia"}*/);
//-----------------------------------------Jugador-----------------------------------------

//-----------------------------------------Enemigo-----------------------------------------
let Enemy={
	CLASE:["Ogro","Espiritu", "Muerto",["demonio","angel"]],
	HP:[850,350,500,[1100,1300]],
	PM:[0,1000,400,[1500,1500]],
	NV:[5,6,5,[2,2]]
};
let Mov={
	Normal(){At:40},
	Especial(){Es:100}
};
let oponent={o,e,m,...legendarios} = Enemy;

NewEnemy(Mov,oponent);
function NewEnemy( ataque,...enemigo){
	console.log(enemigo);
}

