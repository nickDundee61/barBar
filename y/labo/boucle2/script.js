

let objCont = {

    for: {
        name: "for",
        tab: [ "no-wrap","wrap", "inherit", "wrap-reverse"],
        active: true,
    },
    forIncrement: {
        name: "forIncrement",
        tab: ["flex-start","flex-end","space-around", "space-between", "space-evenly", "center",],
        active: false,
    },
    forContinue: {
        name: "forContinue",
        tab: ["row","row-reverse", "column-reverse",  "column"],
        active: true,
    },
    forBreak :{
        name:"forBreak",
        tab:["stretch","start","end","center","safe","first baseline","baseline"]
    }

}

function creatTab(tabContainer){
    let tab = document.createElement("div")
 tab.classList.add("tab")
        for(let i=0;i<tabContainer.length;i++){
    
            let tile= document.createElement("div");
            tile.classList.add("tile");
            tile.textContent =tabContainer[i]
            tab.appendChild(tile)
    
        }
    
    return tab;
    
    }


let tableauJour = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"]
let tableauNombre = [1,2,3,4,5,6,7]
let loupeForSimple = document.getElementById("loupeForSimple");
let loupeForSimpleGo = document.getElementById("loupeForSimpleGo");
let innerLoupeForSimple =  document.getElementById("innerLoupeForSimple");
let loupeForSimpleIndex =  document.getElementById("loupeForSimpleIndex");
let loupeForSimpleAffiche =document.getElementById("loupeForSimpleAffiche")

loupeForSimple.appendChild(creatTab(tableauJour))

loupeForSimpleGo.addEventListener("click",()=>{
    delayedLoop(tableauJour,loupeForSimpleAffiche,loupeForSimple)

})


function delayedLoop(tabData,affiche,container) {

console.log(container.children)


let i=0;
    function iteration() {

        if (i < tabData.length) { // Change the condition as needed

          affiche.textContent = tabData[i]
          container.children[4].children[i].classList.add("borderGreen")
          if(i >0){

            container.children[4].children[i-1].classList.remove("borderGreen")
          }
      
        //  graphic[i].classList.add("green")
           
    
  



    
            setTimeout(iteration, 500); // Delay 100
        }
        i++;
    }


    iteration(); // Start the loop
}




