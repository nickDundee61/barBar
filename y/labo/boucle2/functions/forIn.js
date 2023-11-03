
import {createContainer } from "../createTab.js";

let tableau = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"]

let  specific="increment"
let text = "BOUCLE FOR IN "
//conteneur général
const[_affiche,_container] = createContainer(text,"./images/forIn.PNG",tableau,delayedLoop,"boucleSimple")

function delayedLoop() {




let i=0;

    function iteration() {


        if (i < tableau.length) { // Change the condition as needed
_affiche.setAttribute("style","width :20%")
          _affiche.textContent = "tableau[i] = "+tableau[i]+ " "+" "+ "i= "+i.toString()
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


