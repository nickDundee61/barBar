
import { creatTab,createContainer } from "../createTab.js";

let tableau = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"]

let  specific="increment"
let text = "BOUCLE WHILE "
//conteneur général
const [_affiche,_container] =createContainer(text,"./images/boucleWhile.PNG",tableau,delayedLoop)


function delayedLoop() {




let i=0;

    function iteration() {


        if (i < tableau.length) { // Change the condition as needed

          _affiche.textContent = tableau[i]
          _container.children[3].children[i].classList.add("red")
          _container.children[3].children[i].classList.add("addFondJaune")
          let text =  _container.children[3].children[i].innerHTML.toUpperCase()
          _container.children[3].children[i].innerHTML = text;

          if(_container.children[3].children[i].innerHTML==="OCTOBRE"){
            return;
          }
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



