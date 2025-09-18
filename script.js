// mi primer api de consulta
async function get_pokemon(nombre) {
    // se realiza el intento 
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

        // si la respusta no fue exsitoas
        if (!response.ok) {
            throw new Error("No se encontró el Pokémon");
        }
        // caso contrario 
        const data = await response.json(); // en este caso la respuesta la convertimos a notacion json
        console.log(`⚡ Pokémon: ${data.name}`);
        console.log("Altura:", data.height);
        console.log("Peso:", data.weight);
    } catch (error) {
        console.log("❌", error.message);
    }
}

//llamamos a la funcion 
get_pokemon("pikachu");