
import {createContainerTwo } from "../createTab.js";

let tableau = [0]

let  specific="increment"
let text = "LA METHODE PUSH"
let tab=[]
//conteneur général

let color = ["red","yellow","green","blue","white","black"]


const[_affiche,_container] = createContainerTwo(text,"./images/push.PNG",tableau,test,"")

function test(){
    let rand = Math.floor(Math.random()*color.length)
   let newDiv = document.createElement("div");
   newDiv.textContent = color[rand]
   tab.push(color[rand])
   newDiv.classList.add("tile")
   newDiv.setAttribute("style",`color:${color[rand]}`)
   console.log(tab)
_container.children[3].appendChild(newDiv)

}