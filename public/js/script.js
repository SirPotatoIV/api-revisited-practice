function mainFunction(){
    // console.log("Gotta Catch'em All.")
    
    function search(){
        const searchBtnEl = document.getElementById("searchBtn")
        const searchInputEl = document.getElementById("searchInput")
        // console.log(searchBtnEl)
        searchBtnEl.addEventListener("click", function(){
            event.preventDefault();
            const searchText = searchInputEl.value;
            requestApi(searchText);
            // console.log(searchInputEl.value)

        })
    }
    search()

    function requestApi(searchText){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${searchText}`)
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