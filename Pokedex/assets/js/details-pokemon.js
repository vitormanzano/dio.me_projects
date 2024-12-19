const pokemonDetails = document.getElementById('pokemon-details')

function loadPokemonDetails() {
    pokeApi.getPokemonDetail().then((pokemon) => {
        console.log(pokemon);
        const newHtml = `
        <h1>${pokemon.name}Teste </h1>
        `.join('')
        pokemonDetails.innerHTML += newHtml
    })
}