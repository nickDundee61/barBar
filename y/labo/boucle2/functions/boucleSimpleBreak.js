
import { creatTab,createContainer} from "../createTab.js";

let tableau = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"]

let  specific="BOUCLE SIMPLE AVEC L'INSTRUCTION BREAK"
//conteneur général
const[_affiche,_container] =createContainer(specific,"./images/boucleSimpleBreak.PNG",tableau,delayedLoop,"boucleSimpleBreak")



function delayedLoop() {




let i=0;

    function iteration() {


        if (i < tableau.length) { // Change the condition as needed
if(tableau[i]==="Septembre"){
    _container.children[3].children[i].classList.add("red")
   return;
    
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



