
const fetchApi = async () => {
    const url = "https://trouve-mot.fr/api/random/2" //'https://random-word-api.p.rapidapi.com/get_word';
    //option pour l'api random-word

    //bloc try catch  = essayer l'opération, attrapper l'erreur si échec
    try {
        //attente du résultat
        const response = await fetch(url);
        console.log(response, "**** response")
        //attente de la mise au format json
        const result = await response.json();
        console.log(result, "***result")
        //l'api renvoit 2 mots à la fois dans un tableau, nous prenons la valeur de la propriété "name" de la première cellule
        return result[0].name;
        //"attrappe" l'erreur et affichage dans la console.
    } catch (error) {
        console.error(error);
    }

}





const fetchApiRapidApi =async ()=>{
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=alencon';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9743f1ca22mshe797688c5fda211p1dbb81jsnf6773c1d19b2',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
}

//fetchApiRapidApi()



//Variables dans l'index
let character = document.getElementById("character");
let namecharacter = document.getElementById("namecharacter");
let citation = document.getElementById("citation");
let newcitation = document.getElementById("newcitation");
let newsound = document.getElementById("newsound");
//const kaamelott = async () => {
    //let randomNumber = Math.ceil(Math.random() * 764) + 1; //Entre 1 et 765.
    async function fetchCall() {
        try {
            const response = await fetch("https://cors-anywhere.herokuapp.com/https://kaamelott.chaudie.re/api/random", {
              method: "GET",
            });
        
            if (response.ok) {
              const data = await response.json();
              console.log(data); // Log the response data to the console
            } else {
              console.error("Request failed with status: " + response.status);
            }
          } catch (error) {
            console.error("An error occurred:", error);
          }
        }
      
      
      // Add an event listener to trigger the function when a button is clicked.
     // document.getElementById("yourButtonId").addEventListener("click", fetchCall);
      

    fetchCall()