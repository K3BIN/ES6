// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then( Response => Response.json())
// .then(JSON => console.log(JSON))
// .catch(e => console.log(e))

const obtenerusuario = async() =>{
    try{
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const datos = await respuesta.json();
        console.log(datos);
    }
    catch(e)
    {
        console.log(e);
    }
}
obtenerusuario();