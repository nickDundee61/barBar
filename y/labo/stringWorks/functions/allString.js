let tableStrng = ["length", "slice()", "substring()", "substr()", "replace()",
  "replaceAll()", "toUpperCase()", "toLowerCase()", "concat()", "trim()",
   "charAt()", "split()"
];

const flowerNames = [
  "Rose", "Tulip", "Daisy", "Sunflower", "Lily", "Orchid", "Daffodil", "Hibiscus", "Lavender", "Violet",
  "Peony", "Marigold", "Chrysanthemum", "Hyacinth", "Poppy", "Aster", "Bluebell", "Carnation", "Dandelion", "Freesia",
  "Geranium", "Iris", "Jasmine", "Kalanchoe", "Lantana", "Magnolia", "Narcissus", "Oleander", "Pansy", "Quince",
  "Rhododendron", "Snowdrop", "Tansy", "Verbena", "Wisteria", "Xeranthemum", "Yarrow", "Zinnia",
  "Chèvrefeuille", "Pivoine", "Muguet", "Tournesol", "Edelweiss", "Dahlia", "Bleuet", "Pensée", "Anémone", "Géranium"
];

const keyboardCharacters = [
  ...'abcdefghijklmnopqrstuvwxyz',
  ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ...'0123456789',
  ...'!@#$%^&*()_+-=[]{}|;:\'",.<>?/',
  ...'\\`~',
  ...'éèçà',
  ...'üöä',
  ...'ß',
  ...'®©™',
  ...'ÁÉÍÓÚÑ',
  ...'áéíóúñ',
];

const caracteristics  ={
length:{

}

}

let containerPrime = document.createElement("div");
containerPrime.classList.add("container");
document.body.appendChild(containerPrime);

let stringContainer = document.createElement("div");
stringContainer.classList.add("stringContainer");

let StringOne = document.createElement("div");
StringOne.id = "stringOne";
let StringTwo = document.createElement("div");

stringContainer.appendChild(StringOne);
stringContainer.appendChild(StringTwo);

let containerOne = document.createElement("div");

containerOne.classList.add("secondaryContainer");
let containerInfo = document.createElement("div");
containerInfo.classList.add("containerInfo");

let infoStringOne = document.createElement("div")
//infoStringOne.classList.add("stringContainer")

let infoStringTwo = document.createElement("div")
//infoStringTwo.classList.add("stringContainer")

let infoStringThree = document.createElement("div")
//infoStringThree.classList.add("stringContainer")

let infoStringFour = document.createElement("div")
containerInfo.appendChild(infoStringOne)
containerInfo.appendChild(infoStringTwo)
containerInfo.appendChild(infoStringThree)
containerInfo.appendChild(infoStringFour)

containerPrime.appendChild(stringContainer);
containerPrime.appendChild(containerOne);
containerPrime.appendChild(containerInfo);

for (let c = 0; c < tableStrng.length; c++) {
  let el = document.createElement("div");
  el.classList.add("tile");
  el.textContent = tableStrng[c];
  el.id = tableStrng[c].slice(0, -2);
  el.addEventListener("click", () => {
 
    initContainer(stringContainer,containerInfo)
    let string = pickAWordAndDisplayIt(flowerNames, stringContainer);
    printInfo(string, el.id, stringContainer, containerInfo);
  });
  containerOne.appendChild(el);
}

const pickAWordAndDisplayIt = (tab, container) => {
  refreshTab(stringContainer)
  const rand = Math.floor(Math.random() * tab.length);
  const string = tab[rand];
 container.children[0].textContent = string;
 container.children[0].style.border = "solid 2px black"
  return string;
};

const printInfo = (string, id, stringContainer, containerInfo) => {
  const rand = Math.floor(Math.random() * keyboardCharacters.length);
  const randTwo = Math.floor(Math.random() * flowerNames.length);
  const StringTwo = flowerNames[randTwo];


  if (id === "leng") {
    containerInfo.children[0].textContent = `La longueur de ${string} est ${string.length}`;
 
  } else if (id === "toUpperCase") {

    containerInfo.children[0].textContent = `${string} en MAJUSCULE vaut : ${string.toUpperCase()} `;
    containerInfo.children[1].textContent = `Syntaxe : maChaîneEnMajuscule = ${string}.toUpperCase();`;
  } else if (id === "toLowerCase") {
    stringContainer.children[0].textContent = string.toUpperCase()
    
    containerInfo.children[0].textContent = `${string.toUpperCase()} en minuscule vaut : ${string.toLowerCase()} `;
    containerInfo.children[1].textContent = `Syntaxe : maChaîneEnMinuscule = ${string}.toLowerCase();`;
  } else if (id === "concat") {
  
    stringContainer.children[1].textContent = StringTwo;
    containerInfo.children[0].textContent =`RESULTAT : ${string + StringTwo}`; 
    containerInfo.children[1].textContent =`Syntaxe : let maConcaténation  = concat(${string},${StringTwo})`; 
  
  }else if(id==="trim"){
    stringContainer.children[0].textContent = string;
    stringContainer.children[0].style.padding ="0 1rem 0 1rem" 

    containerInfo.children[0].textContent = `"    ${string}   " ajusté vaut: "${string}"`;
   
    containerInfo.children[1].textContent = `Syntaxe : let maChaîneTrimée = ${string}.trim();`;

  }else if(id==="slice"){

let firstParam =0 ;
let secondParam = 0;
let ok =false


while(ok===false){

  firstParam = Math.floor(Math.random()*string.length)
   secondParam = Math.floor(Math.random()*string.length)
   if(firstParam < secondParam){
    console.log(firstParam,secondParam)
    ok = true
   }
}
stringContainer.appendChild(document.createElement("div"))
stringContainer.children[1].appendChild(splitString(string,firstParam,secondParam))
containerInfo.children[0].textContent = `RESULTAT : ${string} "tranché" de ${firstParam} inclu à ${secondParam} exclu vaut : "${string.slice(firstParam,secondParam)}"`
containerInfo.children[1].textContent = "Premier paramétre :"+firstParam.toString()
containerInfo.children[2].textContent = "Deuxième paramétre :"+secondParam.toString()
containerInfo.children[3].textContent = `Synthaxe : let monSplit = ${string}.split(${firstParam},${secondParam})`



  }else if(id==="replace"){

setTimeout(()=>{
  console.log(containerOne.children[rand].innerHTML)
  let tS = containerOne.children[rand].innerHTML;
  containerOne.children[rand].innerHTML = string;
  stringContainer.children[1].textContent = StringTwo;
  containerInfo.children[0].textContent =`RESULTAT : remplace ${tS} par ${string}`; 
  containerInfo.children[1].textContent =`let text = document.getElementById("demo").innerHTML; 
  document.getElementById("demo").innerHTML = text.replace("${tS}", "${string}")`
},250)
let rand = Math.floor(Math.random()* containerOne.children.length)
; 
}else if (id==="split"){

let arry = string.split('')

for(let el in arry){
  let cell = document.createElement("div")
  cell.id=el;

  cell.classList.add("secondaryContainer")
  cell.textContent =arry[el]
  cell.id = el;

  stringContainer.appendChild(cell)

}

  
containerInfo.children[0].textContent =`RESULTAT : transforme ${string} en tableau dont chaque cellule contient une lettre`; 
containerInfo.children[1].textContent =`Syntaxe : let tab = ${string}.split('')`

}

}

const initContainer = (containerOne,containerTwo)=>{

    for(let i of containerOne.children){
        i.style.border = "2 px green"
    }

    for(let i of containerTwo.children){
        i.style.border = "none"
        i.textContent =""
    }


}


const splitString =(string,f,s) =>{
 let tableauDiv = document.createElement("div")
 tableauDiv.setAttribute("style","diplay:grid;grid-template-rows :10px;justify-content:left")
 let tab =string.split('')

    let tableau = document.createElement("div")

    let tableauNombre = document.createElement("div")
    tableauNombre.setAttribute("style","display:flex;flex-direction:row");
    tableau.setAttribute("style","display:flex;flex-direction:row");
let color =["red","lime","black"]
    for(let i in tab){

        let el = document.createElement("div");
        el.textContent = tab[i];
        if(i==f){
            el.setAttribute("style",`border:2px solid ${color[1]};margin:5%;padding:5%`)
        }else if (i==s){

            el.setAttribute("style",`border:2px solid ${color[0]};margin:5%;padding:5%`)
        }else{
            el.setAttribute("style",`border:2px solid ${color[2]};margin:5%;padding:5%`)

        }
        let num = document.createElement("div")
        num.setAttribute("style",`border:2px solid ${color[2]};margin:5%;padding:5%`)
        num.textContent=i.toString()
        tableauNombre.appendChild(num)


     
        tableau.appendChild(el)
    }
    tableauDiv.appendChild(tableauNombre)
    tableauDiv.appendChild(tableau)

return tableauDiv
}


const refreshTab =(container)=>{

  const nodesToRemove = [];

  for (let el of container.childNodes) {
      if (el.id !== "stringOne") {
          nodesToRemove.push(el);
      }
  }
  
  // Remove the nodes after the loop
  for (let el of nodesToRemove) {
    container.removeChild(el);
  }
  container.appendChild(document.createElement("div"))
}