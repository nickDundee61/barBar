
import {createContainer} from "../createTab.js";

let tableau = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"]

let  specific="increment"
//conteneur général
let text = "BOUCLE SIMPLE AVEC 'continue'"
const [_affiche,_container]=createContainer(text,"./images/boucleSimpleContinue.PNG",tableau,delayedLoop)
function delayedLoop() {




let i=0;

    function iteration() {


        if (i < tableau.length) { // Change the condition as needed
if(tableau[i]==="Juin"){

    i++;
    
}
          _affiche.textContent = tableau[i]
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


