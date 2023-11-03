
import {createContainer } from "../createTab.js";

let tableau = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"]



let  specific="increment"
let text = "BOUCLE FOR OF "
//conteneur général
const[_affiche,_container] = createContainer(text,"./images/forOf.PNG",tableau,delayedLoop,"boucleSimple")

function delayedLoop() {

    for(let i of _container.children[3].childNodes){
  
       i.innerHTML =i.innerHTML.toLowerCase()
          /*  let word =  ( _container.children[3].children[i].innerHTML).toLowerCase()
                _container.children[3].children[i].textContent = word*/
            }



let i=0;
_affiche.setAttribute("style","width :20%")
    function iteration() {


        if (i < tableau.length) { // Change the condition as needed


          _affiche.textContent ="i= "+tableau[i].toString().toUpperCase()
          _container.children[3].children[i].classList.add("borderGreen")
          let toUp =  _container.children[3].children[i].textContent.toUpperCase()
          _container.children[3].children[i].textContent =toUp;
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


