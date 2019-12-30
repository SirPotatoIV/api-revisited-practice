function mainFunction(){
    // console.log("Gotta Catch'em All.")
    
    function search(){
        const searchBtnEl = document.getElementById("searchBtn")
        const searchInputEl = document.getElementById("searchInput")
        // console.log(searchBtnEl)
        searchBtnEl.addEventListener("click", function(){
            event.preventDefault();
            const searchText = searchInputEl.value;
            requestApiSearch(searchText);
        })
    }
    search()

    function getRandomPokemon(){
        const randomId = Math.floor(Math.random()*150)
        // console.log(randomId)
             // https://pokeapi.co/
             axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
             .then(function ({data}) {
                // handle success
                // console.log(data);
                // displaySearchPokemon(data.sprites.front_default)
                const pokePicEl = document.getElementById("mysteryPokePicDiv");
                pokePicEl.innerHTML= `<img id="mysteryPokemon" src="${data.sprites.front_default}"/>`
             })
             .catch(function (error) {
                 // handle error
                 console.log(error);
             })
    }
    getRandomPokemon()

    function requestApiSearch(searchText){
        // https://pokeapi.co/
        axios.get(`https://pokeapi.co/api/v2/pokemon/${searchText}`)
            .then(function ({data}) {
                // handle success
                // console.log(data);
                displaySearchPokemon(data.sprites.front_default)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    function displaySearchPokemon(pokemonImage){
        const pokePicEl = document.getElementById("pokePic");
        pokePicEl.innerHTML= `<img src="${pokemonImage}"/>`
    }

}
mainFunction()