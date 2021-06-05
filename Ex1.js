let personas={
	nombres:["Kevin","Gary", "Jeremias"],
	apellidos:["Hernández D.", "Gutierres G.","Serrano T."],
	cuentas:["55447878", "99335656", "00338855"]
}

const espacio=10;


for(let i=0; i<3; i++) {
	let dif= espacio - personas.nombres[i].length;
	console.log(`${personas.nombres[i]} tu cuenta es: ${" ".repeat(dif)} | ${personas.cuentas[i]}`);
}