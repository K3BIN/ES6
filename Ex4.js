
//------------------------------------------Personajes------------------------------------------
const rnd=Math.floor(Math.random() * (5 - 0)) + 0;
var eaccion=Math.floor(Math.random() * (2 - 0)) + 0;
let Pturn=true, Eturn=false;
let Enemy={	//Configuración de Enemigo
	CLASE:["Ogro","Espiritu", "Muerto","demonio","angel"],
	HP:[850,350,500,1100,1300],
	PM:[1000,2000,1400,2500,2500],
	NV:[5,6,5,2,2],
	EAT:[80,30,50,100,120], //Enemy atack (normal)
	EES:[90,70,90,200,250]
};
let {CLASE:C,HP,PM,NV, EAT, EES} = Enemy;

let P={	//configuración de personaje
	clase:["Milicia", "Caballero", "Mago", "Hada", "Verdugo"],
	hp:[300,800,500,700,1500],
	pm:[1000,1350,1900,1800,1900],	//magic power
	nv:[1,7,7,7,5],
	pat:[40,80,60,70,120],	//Player atack (normal)
	pes:[100,180,200,200,350]	//Payer atack (especial)
};
let {clase:c,hp,pm,nv,pat,pes}=P;
//------------------------------------------Personajes------------------------------------------
//-------------------------------------------Enemigo--------------------------------------------
function NewEnemy(){
	console.log(`Enemigo:${" ".repeat(11)} | ${C[rnd]}\nVida:${" ".repeat(14)} | ${HP[rnd]}hp\nPoder Mágico:${" ".repeat(6)} | ${PM[rnd]}PM\nNivel:${" ".repeat(13)} | nv${NV[rnd]}`);
}
//-------------------------------------------Enemigo--------------------------------------------
//-------------------------------------------Jugador--------------------------------------------
let P1={
	Nom: prompt(`Nuevo Jugador`, "VIPER"),
	getNom(){
		return this.Nom
	}
}
function NewPlayer(nick, {clase,hp,pm,nv}){	//Parámetro(s) por defecto
	console.log(`${"_".repeat(45)}`);
	console.log(`Jugador Creado:${" ".repeat(5)}| ${nick}\nVida:${" ".repeat(14)} | ${hp[rnd]}hp\nPoder Mágico:${" ".repeat(6)} | ${pm[rnd]}pm\nClase:${" ".repeat(13)} | ${c[rnd]}\nNivel:${" ".repeat(13)} | nv${nv[rnd]}`);
	console.log(`0.Ataq\t1.Mov.Especial ${"_".repeat(90)}`);
}
NewPlayer(P1.getNom() ,{clase:c[rnd], hp, pm, nv});

//-------------------------------------------Jugador--------------------------------------------
//------------------------------------------Acciones--------------------------------------------
function PAccion(NoAcc){	//Acciones Jugador 
	if(Object.is(NoAcc, "0")){HP[rnd]-=pat[rnd];console.log(`Daño infligido: ${pat[rnd]}`)}
	if(Object.is(NoAcc, "1")){HP[rnd]-=pes[rnd];pm[rnd]-=50;console.log(`Daño infligido: ${pes[rnd]}`)}
}
function EAccion(accRND){	//Acciones Enemigo
	if(Object.is(accRND, 0)){hp[rnd]-=EAT[rnd];console.log(`Daño infligido: ${EAT[rnd]}`)}
	if(Object.is(accRND, 1)){hp[rnd]-=EES[rnd]; PM[rnd]-=100;console.log(`Daño infligido: ${EES[rnd]}`)}
}
//------------------------------------------Acciones--------------------------------------------

//-----------------------------------------Movimientos------------------------------------------
let xmov={
	movx:["Ataque normal","Ataque Especial"]
}
let {movx}=xmov;
//-----------------------------------------Movimientos------------------------------------------
//------------------------------------------Turnos--------------------------------------------
function Duel(Pturn,Eturn,movements){
	if(Pturn && hp[rnd]>0){
		console.log("Turno Jugador");
		let NoAcc=prompt("Número de Acción","ej. 1");
		PAccion(NoAcc);
		console.log(`${movements[NoAcc]}`);
		console.log(`${"_".repeat(45)}\n${"_".repeat(45)}`);
		NewEnemy();
		NewPlayer(P1.getNom(),{clase:c[rnd], hp, pm, nv});
		Pturn=false; Eturn = true;
	}
	if(Eturn && HP[rnd]>0){
		console.log("Turno Enemigo");
		EAccion(eaccion);
		console.log(`${movements[eaccion]}`);
		console.log(`${"_".repeat(45)}\n${"_".repeat(45)}`);
		NewEnemy();
		NewPlayer(P1.getNom(),{clase:c[rnd], hp, pm, nv});
		Pturn=true; Eturn = false;
	}
}
//------------------------------------------Turnos--------------------------------------------
console.log(`${"_".repeat(45)}`);
NewEnemy();
console.log(`${"_".repeat(45)}\n${"_".repeat(45)}`);
do{
	Duel(Pturn,Eturn,movx);
}
while(hp[rnd]>0 && HP[rnd]>0)
if(hp[rnd]>0) console.log("****GANASTE****");
if(HP[rnd]>0) console.log("****PERDISTE****");

