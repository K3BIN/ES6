
var manejador={
	id: "123",

	init: function(){ //init es un estandar para decir que es una función que se puede ejecutar cuando el objeto es creado

		document.addEventListener("click",
			event => this.clickEnPagina(event.type));

	},

	clickEnPagina: function(type){
		console.log(`Manejando ${type} para el id ${this.id}`);
	}
}

manejador.init();








