
import {createContainer} from "../createTab.js";

let tableau = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"]

let  specific="increment"
//conteneur général

let text = "BOUCLE SIMPLE A INCREMENT"
const [_affiche,_container] = createContainer(text,"./images/boucleSimpleIncrement.PNG",tableau,delayedLoop,"boucleIncrement")

function delayedLoop() {




let i=0;
let change =2;
    function iteration() {


        if (i < tableau.length) { // Change the condition as needed

          _affiche.textContent = tableau[i]
          _container.children[3].children[i].classList.add("borderGreen")
     if(i >0){

        _container.children[3].children[i-change].classList.remove("borderGreen")
          }
      
        //  graphic[i].classList.add("green")
           
    
  



    
            setTimeout(iteration, 500); // Delay 100
        }
        i+=change;
    }


    iteration(); // Start the loop
}


