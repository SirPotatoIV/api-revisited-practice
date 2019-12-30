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

    function getGuessNames(randomIds){
        const pokemonNamesList = [];
        const pokemonGuessNames = [];
        // const randomPokemon 
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=150`)
        .then(function ({data}) {
            // handle success
            // store all pokemon names
            for(let i=0; i < data.results.length; i++){
                pokemonNamesList.push(data.results[i].name)
            }
            // get random names for guessing
            for(let i=0; i < 4; i++){
                const randomId = Math.floor(Math.random()*150);
                const pokemonName = pokemonNamesList[randomId];
                pokemonGuessNames.push(pokemonName)
            }
            // get pokemon to guess image
            getRandomPokemon(pokemonGuessNames)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
    getGuessNames()
    
    function getRandomPokemon(pokemonGuessNames){
        // https://pokeapi.co/
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonGuessNames[0]}`)
        .then(function ({data}) {
            // handle success
            const pokePicEl = document.getElementById("mysteryPokePicDiv");
            pokePicEl.innerHTML= `<img id="mysteryPokemon" src="${data.sprites.front_default}"/>`
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
    // getRandomPokemon()

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