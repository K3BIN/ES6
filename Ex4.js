
//-----------------------------------------Jugador-----------------------------------------
let Pturn=true;
let P={
	Nom: prompt(`Nuevo Jugador`, "VIPER"),
	Class: prompt(`Clase`, "Hada")	//"Milicia, Caballero, Mago o Hada"
}

function NewPlayer(nick, {clase,hp,pm,nv} = {clase:"brujo"}){	//Parámetro(s) por defecto
	console.log(`Jugador Creado:${" ".repeat(5)}| ${nick}\nVida:${" ".repeat(14)} | ${hp}hp\nPoder Mágico:${" ".repeat(6)} | ${pm}pm\nClase:${" ".repeat(13)} | ${clase}\nNivel:${" ".repeat(13)} | nv${nv}`);
	console.log(`${"_".repeat(45)}`);
}

NewPlayer(P.Nom ,{clase:P.Class, hp:700, pm:900, nv:6}/**,{hp:500,pm:1000,clase:"milicia"}*/);
//-----------------------------------------Jugador-----------------------------------------
//-----------------------------------------Acciones----------------------------------------

//-----------------------------------------Acciones----------------------------------------
//-----------------------------------------Enemigo-----------------------------------------
console.log(`${"_".repeat(45)}`);
let Eturn=true;
const rnd=Math.floor(Math.random() * (5 - 0)) + 0;
let Enemy={
	CLASE:["Ogro","Espiritu", "Muerto","demonio","angel"],
	HP:[850,350,500,1100,1300],
	PM:[0,1000,400,1500,1500],
	NV:[5,6,5,2,2]
};
let {CLASE:C,HP,PM,NV} = Enemy;

let Mov={
	Normal(at,es){let Atack=at; HP[rnd]=HP[rnd]-Atack; console.log(`Vida después de ataque ${HP[rnd]}`);},
	Especial(){let Esp=es; PM[rnd]=PM[rnd]-Esp;}
};
let mov= Object.create(Mov);
Object.setPrototypeOf( mov, Mov);

NewEnemy(Mov);
function NewEnemy( ataque){
	console.log(`Enemigo:${" ".repeat(11)} | ${C[rnd]}\nVida:${" ".repeat(14)} | ${HP[rnd]}\nPoder Mágico:${" ".repeat(6)} | ${PM[rnd]}\nNivel:${" ".repeat(13)} | nv ${NV[rnd]}`);
	if(!(!(Eturn)) && HP[rnd]>0){
		console.log(`Vida original ${HP[rnd]}`);
		mov.Normal(70,180);
	}
}
//-----------------------------------------Enemigo-----------------------------------------