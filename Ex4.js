
//-----------------------------------------Jugador-----------------------------------------
let P1={
	Nom: prompt(`Nuevo Jugador`, "VIPER"),
	Class: prompt(`Clase`, "Hada")	//"Milicia, Caballero, Mago o Hada"
}

function NewPlayer(nick, {clase,hp,pm,nv} = {clase:"brujo"}){	//Parámetro(s) por defecto
	console.log(`Jugador Creado:${" ".repeat(5)}| ${nick}\nVida:${" ".repeat(14)} | ${hp}hp\nPoder Mágico:${" ".repeat(6)} | ${pm}pm\nClase:${" ".repeat(13)} | ${clase}\nNivel:${" ".repeat(13)} | nv${nv}`);
	console.log(`${"_".repeat(45)}`);
}

NewPlayer(P1.Nom ,{clase:P1.Class, hp:700, pm:900, nv:6}/**,{hp:500,pm:1000,clase:"milicia"}*/);
//-----------------------------------------Jugador-----------------------------------------
console.log("zzz");
//-----------------------------------------Enemigo-----------------------------------------
let Enemy={
	CLASE:["Ogro","Espiritu", "Muerto","demonio","angel"],
	HP:[850,350,500,1100,1300],
	PM:[0,1000,400,1500,1500],
	NV:[5,6,5,2,2]
};
let Mov={
	Normal(daño){let Atack=daño; /** console.log(Atack);*/},
	Especial(){Es:100}
};
let {CLASE:C,HP,PM,NV} = Enemy;
let num=Math.floor(Math.random() * (5 - 0)) + 0;
console.log(num);
NewEnemy(Mov);
function NewEnemy( ataque,...enemigo){
	//Mov.Normal(40);
	console.log(`${"_".repeat(45)}`);
	console.log(`Enemigo: ${C[num]}`);
}
