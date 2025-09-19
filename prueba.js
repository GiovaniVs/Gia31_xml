async function mi_first_post_api(information) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(information)
        })
        if (!response.ok) {
            throw new Error('no se ha podido crear el post');

        }
        //implica que si se enviaron los datos y el servidor si porceso los datos
        else {
            const data = await response.json();
            console.log('los datos llegaron al servidor, los datos envidos fuerono', data)
        }
    } catch (error) {
        console.log(error.message);
    }
}
const d = {
    title: 'Mi Nuevo Post',
    body: 'Este es el contenido de mi post.',
    userId: 1,
}
async function get_pokemon(name_pokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name_pokemon}`);
        if (!response.ok) {
            throw new Error("el pokemon solicitado no se encontro");
        }
        else {
            const data = await response.json();
            console.log(`Pokemon ${data.name}`);
            console.log(`Altura ${data.height}`);
            console.log(`Peso ${data.weight}`);
        }
    } catch (error) {
        console.log(error.message);
    }

}
//mi_first_post_api(d)
get_pokemon("bulbasaur");
consonle.log("hola mundo"); 