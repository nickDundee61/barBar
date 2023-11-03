
import {createContainer } from "../createTab.js";

let tableau = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"]
let tab = ["LUNDI","MARDI","MERCREDI","JEUDI","VENDREDI","SAMEDI","DIMANCHE"]
let  specific="increment"
let text = "BOUCLE INVERSE "
//conteneur général
const[_affiche,_container] = createContainer(text,"./images/boucleInverse.PNG",tab,delayedLoop,"boucleInverse")

function delayedLoop() {




let i=6;

    function iteration() {


        if (i < tab.length) { // Change the condition as needed

          _affiche.textContent = tab[i]
          _container.children[3].children[i].classList.add("borderGreen")
          let text = _container.children[3].children[i].innerHTML.toLowerCase()
          _container.children[3].children[i].innerHTML = text;
     if(i <6){

        _container.children[3].children[i+1].classList.remove("borderGreen")
          }
          if(i===0){

            return
          }
      
        //  graphic[i].classList.add("green")
           
    
  



    
            setTimeout(iteration, 500); // Delay 100
        }
        i--;
    }


    iteration(); // Start the loop
}


