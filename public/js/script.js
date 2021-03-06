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
            pokePicEl.innerHTML= `<img class="mysteryPokemon" id="${pokemonGuessNames[0]}" src="${data.sprites.front_default}"/>`
            renderGuessButtons(pokemonGuessNames);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    function renderGuessButtons(pokemonGuessNames){
        const correctPokemon = pokemonGuessNames[0];
        const pokeArray = pokemonGuessNames;
        const guessBtnEl = document.getElementById("guessBtnDiv");
        
        // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
        for (let i = pokeArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pokeArray[i], pokeArray[j]] = [pokeArray[j], pokeArray[i]];
        }
        // console.log(pokeArray)
        guessBtnEl.innerHTML = `
            <button class="pokeGuess" id="${pokemonGuessNames[0]}">${pokemonGuessNames[0]}</button>
            <button class="pokeGuess" id="${pokemonGuessNames[1]}">${pokemonGuessNames[1]}</button>
            <button class="pokeGuess" id="${pokemonGuessNames[2]}">${pokemonGuessNames[2]}</button>
            <button class="pokeGuess" id="${pokemonGuessNames[3]}">${pokemonGuessNames[3]}</button>
        `
        const guessBtnEls = document.querySelectorAll(".pokeGuess")
        // console.log(guessBtnEls)
        // console.log(guessBtnEl)
        for(let i = 0; i < guessBtnEls.length; i++){
            guessBtnEls[i].addEventListener("click", function(){
                const userGuess = event.target.innerText;
                checkGuess(correctPokemon, userGuess);
                // console.log(event.target.innerText)
            })
        }
    }
    // renderGuessButtons()

    function checkGuess(correctPokemon, userGuess){
        if(correctPokemon === userGuess){
            // console.log("correct")
            displayOutcome("correct")
        }else{
            // console.log("incorrect")
            displayOutcome("incorrect")
        }
    }

    function displayOutcome(outcome){
        const outcomeMessageEl = document.getElementById("outcomeMessage");
        outcomeMessageEl.innerHTML = `<h1>${outcome}</h1>`;
    }

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