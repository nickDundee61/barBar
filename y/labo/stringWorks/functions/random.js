
import {createContainer,eraseColor } from "../createTab.js";

let tableau = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"]
let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let  specific="increment"
let text = "Nombre aléatoire, la fonction Math.floor et Math.random "
//conteneur général
const[_affiche,_container] = createContainer(text,"./images/random1.PNG",nombres,delayedLoop,"boucleSimple")

eraseColor(_container)
function delayedLoop() {




let i=0;
   let prevRandom= 0;
    function iteration() {
     
let random = Math.floor(Math.random()*nombres.length)

        if (i < 15) { // Change the condition as needed
            if(i >0){

                _container.children[3].children[prevRandom].classList.remove("borderGreen")
                  }
          _affiche.textContent = (random+1).toString();
          prevRandom = random;
          _container.children[3].children[random].classList.add("borderGreen")

      
        //  graphic[i].classList.add("green")
           
    
  



    
            setTimeout(iteration, 500); // Delay 100
        }else{

            return;
        }
        i++;
    }


    iteration(); // Start the loop
}


