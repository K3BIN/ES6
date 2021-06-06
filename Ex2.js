
function Calificación(tiempo, Estudiante, Grupo, ...Calificaciones){
	setTimeout(function()
	{
		if(typeof Estudiante != "object"){
			console.error('No es un objeto');
			return;
		}

		if(typeof Grupo != "function"){
			console.error('No es una función');
			return;
		}
		
		Grupo(); 
		console.log(`Estudiante:${A}\nGrupo:${G}\nProfesor: ${"Pedro Carrillo Jiménez"}\n`);

		const espacio=20;
		nombreTabla="Materias";
		let dif= espacio - nombreTabla.length;
		console.log(`${nombreTabla}${" ".repeat(dif)} | Calificaciones`);
		for(i in estudiante.Materias){
			let dif= espacio - estudiante.Materias[i].length;
			console.log(`${estudiante.Materias[i]}${" ".repeat(dif)} | ${Calificaciones}`);
		}
	}, tiempo);
}

let estudiante={
	nombre: "Kevin",
	Apellido: "Hernández",
	Nivel: "1",
	Carrera: "I",	//Informática
	Turno: "M",		//Matutino
	Semestre: "2",
	Materias:["Matemáticas","Lógica de Progra.","Arq. de Comp."],
	Regular: true
}

function grupo(datos){
	A=`${estudiante.nombre}`;
	G=`${estudiante.Nivel}${estudiante.Carrera}${estudiante.Turno}${estudiante.Semestre}`;
}
grupo(estudiante);
Calificación(1500,estudiante, grupo,9,8,7);








