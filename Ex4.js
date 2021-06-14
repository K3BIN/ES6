
//------------------------------------------Personajes------------------------------------------
const rnd=Math.floor(Math.random() * (5 - 0)) + 0;
let Pturn=true, Eturn=false;
let Enemy={	//Configuración de Enemigo
	CLASE:["Ogro","Espiritu", "Muerto","demonio","angel"],
	HP:[850,350,500,1100,1300],
	PM:[0,1000,400,1500,1500],
	NV:[5,6,5,2,2]
};
let {CLASE:C,HP,PM,NV} = Enemy;

let P={	//configuración de personaje
	clase:["Milicia", "Caballero", "Mago", "Hada", "Verdugo"],
	hp:[300,800,500,700,1500],
	pm:[100,350,900,800,900],	//magic power
	nv:[1,7,7,7,5],
	pat:[40,80,60,70,120],	//Player atack (normal)
	pes:[100,180,200,200,350]	//Payer atack (especial)
};
let {clase:c,hp,pm,nv,pat,pes}=P;
//------------------------------------------Personajes------------------------------------------
//-------------------------------------------Enemigo--------------------------------------------
let Mov={
	Normal(at,es){let Atack=at; HP[rnd]=HP[rnd]-Atack; console.log(`Vida después de ataque ${HP[rnd]}`);},
	Especial(){let Esp=es; PM[rnd]=PM[rnd]-Esp;}
};
let mov= Object.create(Mov);
Object.setPrototypeOf( mov, Mov);
function NewEnemy(ataque){
	console.log(`Enemigo:${" ".repeat(11)} | ${C[rnd]}\nVida:${" ".repeat(14)} | ${HP[rnd]}hp\nPoder Mágico:${" ".repeat(6)} | ${PM[rnd]}PM\nNivel:${" ".repeat(13)} | nv${NV[rnd]}`);
	if(!(!(Eturn)) && HP[rnd]>0){
		console.log(`Vida original ${HP[rnd]}`);
		mov.Normal(70,180);
	}
}
//-------------------------------------------Enemigo--------------------------------------------
//-------------------------------------------Jugador--------------------------------------------
let P1={
	Nom: prompt(`Nuevo Jugador`, "VIPER"),
	getNom(){
		return this.Nom
	}
}
function PAccion(NoAcc){
	if(Object.is(NoAcc, "1")){HP[rnd]-=pes[rnd]; console.log(`Daño infligido: ${pes[rnd]}`)}
}
function NewPlayer(nick, {clase,hp,pm,nv} = {clase:"brujo"}){	//Parámetro(s) por defecto
	console.log(`Jugador Creado:${" ".repeat(5)}| ${nick}\nVida:${" ".repeat(14)} | ${hp[rnd]}hp\nPoder Mágico:${" ".repeat(6)} | ${pm[rnd]}pm\nClase:${" ".repeat(13)} | ${c[rnd]}\nNivel:${" ".repeat(13)} | nv${nv[rnd]}`);
	console.log(`0.Ataq\t1.Mov.Especial\t2.Defensa ${"_".repeat(45)}`);
}
NewPlayer(P1.getNom() ,{clase:c[rnd], hp, pm, nv}/**,{hp:500,pm:1000,clase:"milicia"}*/);
//-------------------------------------------Jugador--------------------------------------------
//-----------------------------------------Movimientos--------------------------------------------
let xmov={
	movx:["Ataque normal","Ataque Especial","Bloqueo"]
}
let {movx}=xmov;
//-----------------------------------------Movimientos--------------------------------------------
//------------------------------------------Acciones--------------------------------------------

function Duel(Pturn,Eturn,movements){
	if(Pturn && hp[rnd]>0){
		console.log("Turno Jugador");
		let NoAcc=prompt("Número de Acción","ej. 1");
		PAccion(NoAcc);
		console.log(`${movements[NoAcc]}`);
		console.log(`${"_".repeat(45)}\n${"_".repeat(45)}`);
		NewEnemy(Mov);
	}
}
//-----------------------------------------Acciones----------------------------------------
console.log(`${"_".repeat(45)}`);
NewEnemy(Mov);
console.log(`${"_".repeat(45)}\n${"_".repeat(45)}`);
Duel(Pturn,Eturn,movx);