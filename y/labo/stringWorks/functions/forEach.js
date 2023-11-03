
import {createContainer } from "../createTab.js";

let tableau = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"]

//délcaration d'une variable globale
let somme = 0;
//déclaration d'une array pour stocker des nombre
let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//création d'une fonction qui multiplie son paramètre par deux et l'ajoute à la variable "somme"

let  specific="increment"
let text = "BOUCLE forEach "
//conteneur général
const[_affiche,_container] = createContainer(text,"./images/forEach1.PNG",nombres,delayedLoop,"boucleSimple")

function delayedLoop() {

   let somme = 0;


let i=0;

    function iteration() {
     

        if (i < nombres.length) { // Change the condition as needed

          _affiche.textContent = somme+=(nombres[i]*2);
          _container.children[3].children[i].classList.add("borderGreen")
     if(i >0){

        _container.children[3].children[i-1].classList.remove("borderGreen")
          }
      
        //  graphic[i].classList.add("green")
           
    
  



    
            setTimeout(iteration, 500); // Delay 100
        }
        i++;
    }


    iteration(); // Start the loop
}


