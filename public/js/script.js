function mainFunction(){
    // console.log("Gotta Catch'em All.")
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
mainFunction()