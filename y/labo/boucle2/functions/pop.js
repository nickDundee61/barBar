
import {createContainer } from "../createTab.js";



let  specific="increment"
let text = "LA METHODE POP et la technique 'tableau.length-1"
let tab=[]
//conteneur général
let tableau = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"]

let tableauCopy= ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"]

const[_affiche,_container] = createContainer(text,"./images/pop.PNG",tableau,test,"")

function test(){
    let _length = _container.children[3].children.length;
if(_length===0){
  for(let i=0;i<tableauCopy.length;i++){
    let el = document.createElement("div");
    el.classList.add("tile");
    el.textContent = tableauCopy[i];
tableau.push(tableauCopy[i])
    _container.children[3].appendChild(el)
  }
}else{
    let fragment = tableau[tableau.length-1].split('')
    console.log(fragment)
   tableau.pop();
    console.log(tableau)
    _container.children[3].children[_length-1].remove()

}



}