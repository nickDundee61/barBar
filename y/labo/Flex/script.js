
//CONTAINER
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

//OBJET
let objObj = {

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

let mainContainer = document.getElementById("mainContainer")
let leftContainer = document.getElementById("leftContainer")
let container = document.getElementById("container")
let rightContainer = document.getElementById("righContainer")
let contrainte = document.getElementById("contrainte")

let objectNumberSelector =document.getElementById("objectNumberSelector")
let objetContainer =document.getElementById("objetContainer")

let shapeSelector = document.getElementById("shapeSelector")

let nubmerOfObjects = 4;
let form ="reakFlex";
let containerSize =""

let tab=["carre","rond","tile","mixed","reakFlex"]

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
           
    
        cssString = removeOldestProperty(cssString, property);
        cssString += `${property}:${option};`;
    
    
                  
                 
                }
                delayedLoop();
            
            });
    
            leftContainer.appendChild(choice);
            index++;
        }
    }


  }

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

        if (i <=nubmerOfObjects) { // Change the condition as needed
            let element = document.createElement("div");
     
            element.classList.add(form);
          
            element.setAttribute("style",cssStringElement)
    
            element.textContent = i.toString()
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
  





