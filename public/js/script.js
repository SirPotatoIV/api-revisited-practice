function mainFunction(){
    // console.log("Gotta Catch'em All.")
    
    function search(){
        const searchBtnEl = document.getElementById("searchBtn")
        const searchInputEl = document.getElementById("searchInput")
        // console.log(searchBtnEl)
        searchBtnEl.addEventListener("click", function(){
            event.preventDefault();
            console.log(searchInputEl.value)
        })
    }
    search()

    function requestApi(){
        axios.get('https://pokeapi.co/api/v2/pokemon/squirtle')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    // requestApi()

}
mainFunction()