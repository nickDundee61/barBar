
//Objet pour construire les boutons radio qui affecteront la disposition flex du container
let objCont = {

    wrap: {
        name: "flex-wrap",
        tab: [ "no-wrap","wrap", "inherit", "wrap-reverse"],
        active: true,
    },
    justfyContent: {
        name: "justify-content",
        tab: ["flex-start","flex-end","space-around", "space-between", "space-evenly", "center",],
        active: false,
    },
    flexDirection: {
        name: "flex-direction",
        tab: ["row","row-reverse", "column-reverse",  "column"],
        active: true,
    },
    alignItem :{
        name:"align-items",
        tab:["stretch","start","end","center","safe","first baseline","baseline"]
    }

}

//Objet pour construire les boutons radio qui affecteront la disposition flex du contenu
let objObj = {
//les options de flex-wrap
    wrap: {
        name: "flex-wrap",
        tab: [ "no-wrap","wrap", "inherit", "wrap-reverse"],
        active: true,
    },
    //option de justify-content etc....
    justfyContent: {
        name: "justify-content",
        tab: ["flex-start","flex-end","space-around", "space-between", "space-evenly", "center",],
        active: false,
    },
    flexDirection: {
        name: "flex-direction",
        tab: ["row","row-reverse", "column-reverse",  "column"],
        active: true,
    },flexGrow:{
        name:"flex-grow",
        tab:["0","1","2","3"]
    }
    ,flexShrink:{
        name:"flex-shrink",
        tab:["0","1","2","3"]
    },
    alignItem :{
        name:"align-items",
        tab:["stretch","start","end","center","safe","first baseline","baseline"]
    }
}
//référencement du conteneur principal
let mainContainer = document.getElementById("mainContainer")
//référencement du conteneur de gauche
let leftContainer = document.getElementById("leftContainer")
//référencement du conteneur central (Flex en action)
let container = document.getElementById("container")
//référencement du conteneur de droite
let rightContainer = document.getElementById("righContainer")

//référencement de la contrainte qui permet d'avoir le conteneur en vrai flex ou contraint à 500px
let contrainte = document.getElementById("contrainte")
//référencement du sélecteur du nombre total d'objets à afficher
let objectNumberSelector =document.getElementById("objectNumberSelector")
let objetContainer =document.getElementById("objetContainer")

let shapeSelector = document.getElementById("shapeSelector")
//nombre d'objets par défaut
let nubmerOfObjects = 4;
//mode par défaut (Flex)
let form ="reakFlex";

let containerSize =""
//tableau pour changer la forme des div représentée
let tab=["carre","rond","tile","mixed","reakFlex"]
//constructeur du panneau de gauche
const containerControler =(flexObj)=>{
    let id = "container";
    for (let f in flexObj) {
        let choice = document.createElement("div");
        choice.textContent = flexObj[f].name;
        choice.classList.add("menuClass");
    
        leftContainer.appendChild(choice);
    let index =0;
        for (let t of flexObj[f].tab) {
            let containDiv = document.createElement("div");
            containDiv.classList.add("innerChoice")
            let radio = document.createElement("input");
          
            radio.type = "radio";
            radio.name = f+id;
       
            radio.id = t+id;
      
            let label = document.createElement("label");
            label.setAttribute("for", t+id);
            label.textContent = t;
    
            containDiv.appendChild(label);
            containDiv.appendChild(radio);
            choice.appendChild(containDiv);
            //sélectionne la propriété flex par défaut (mise en premier dans l'objet de représentation)
            if( index===0){
    
                radio.checked = true;
               
            }else{
                radio.checked = false;
    
            }
         //écouteur d'événement sur les boutons radio
            radio.addEventListener("click", (event) => {
             
    //nettoyage du conteneur avant affichage
                clearContainer(container);
                //récupération de la propriété voulue
                property = flexObj[f].name;
                option = t;
                //construction de l'instruction css si elle n'existe pas 
                if (cssString === "") {
                    cssString += `${property}:${option};`;
                   // ou si elle existe alors il faut retirer la première propriété en doublon (fonction removeOldest)
                } else {
           
        cssString = removeOldestProperty(cssString, property);
        cssString += `${property}:${option};`; 
                 
                }
                //affichage en différé des div
                delayedLoop();
            
            });
    
            leftContainer.appendChild(choice);
            index++;
        }
    }


  }
//construction du panneau de gauche (pour les options flex du contenu d'un conteneur flex)
//très similaire à la construction du panneau de gauche
  const containerControler2 =(flexObj)=>{
    let id = "objet";
    for (let f in flexObj) {
        let choice = document.createElement("div");
        choice.textContent = flexObj[f].name;
        choice.classList.add("menuClass");
    
        let containDivCheck = document.createElement("div");
      
        containDivCheck.classList.add("innerMenuClass")
        choice.appendChild(containDivCheck);
    let index =0;
        for (let t of flexObj[f].tab) {
            let containDiv = document.createElement("div");
            containDiv.classList.add("innerChoice")
            let radio = document.createElement("input");
          
            radio.type = "radio";
            radio.name = f+id;
       
            radio.id = t+id;
         //   radio.classList.add("track-item")
            let label = document.createElement("label");
            label.setAttribute("for", t+id);
            label.textContent = t;
    //label.classList.add("track-label")
            containDiv.appendChild(label);
            containDiv.appendChild(radio);
            choice.appendChild(containDiv);
            if( index===0){
    
                radio.checked = true;
               
            }else{
                radio.checked = false;
    
            }
         
            radio.addEventListener("click", (event) => {
             
                clearContainer(container);
                property = flexObj[f].name;
                option = t;
                if (cssString === "") {
                    cssString += `${property}:${option};`;
                } else {
        
                    cssStringElement = removeOldestProperty(cssStringElement, property);
                    cssStringElement += `${property}:${option};`;
    
                }
                delayedLoop();
              
            });
    
            rightContainer.appendChild(choice);
            index++;
        }
    }


  }


//options supplémentaires (nombres d'objet, type de conteneur, forme des objets etc...)
const moreOptions = ()=>{

    objectNumberSelector.addEventListener("change",(e)=>{

nubmerOfObjects = parseInt(e.target.value);
clearContainer(container);
delayedLoop();
    })

    shapeSelector.addEventListener("change",(e)=>{
   if(e.target.value ==="mixed"){
    let rand = Math.floor(Math.random()*tab.length)
    form=tab[rand]

   }else {

    form=e.target.value 
 
   }

clearContainer(container);
delayedLoop();
    })

    contrainte.addEventListener("change",(e)=>{
        containerSize =e.target.value;
        if(containerSize ==="px"){
             
            container.classList.add("px"); 
        



        } else{

            container.classList.remove("px");  
        }
        clearContainer(container);
        delayedLoop();

    })
}




let property = "";
let option = "";

let cssString = "flex-direction:row;"
let cssStringElement="flex-direction:row;"

delayedLoop();
moreOptions();
containerControler(objCont);
containerControler2(objObj)

const clearContainer = (cont) => {
    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }
};


 function delayedLoop() {
  
    let i = 0;

    container.setAttribute("style", cssString)
    function iteration() {

        if (i <=nubmerOfObjects) { 
            let element = document.createElement("div");
     
            element.classList.add(form);
          
            element.setAttribute("style",cssStringElement)
    
            element.textContent = i.toString()
            //création de 10 objets dans chaque div
            for(let x =0;x<10;x++){

                let el = document.createElement("div");
                el.textContent = x.toString()
                el.classList.add("reakFlex")
                element.appendChild(el)
            }
            container.appendChild(element)



            i++;
            setTimeout(iteration, 100); // Delay 100
        }
    }

    iteration(); // Start the loop
}

const removeOldestProperty = (cssString, property) => {
    const properties = cssString.split(";");
    //capture d'une expression réguilière (Regular expression)
    const propertyPattern = new RegExp(`^${property}:`);
    let propertyIndexToRemove = -1;
  
    for (let i = 0; i < properties.length; i++) {
      if (propertyPattern.test(properties[i])) {
        propertyIndexToRemove = i;
        break;
      }
    }
  
    if (propertyIndexToRemove !== -1) {
      properties.splice(propertyIndexToRemove, 1);
      cssString = properties.join(";");
    }
  
    return cssString;
  };
  





