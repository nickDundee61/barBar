

let brSize = 4;
let _affiche;
let _container;
function creatTab(tabContainer) {
    let tab = document.createElement("div")
    tab.classList.add("tab")
    for (let i = 0; i < tabContainer.length; i++) {

        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.textContent = tabContainer[i]
        tab.appendChild(tile)

    }

    return tab;

}

let eraseColor = (cont) => {

    for (let c = 0; c < cont.length; c++) {

        cont.children[i].classList.add("black")
    }


}

const createContainer = (titreText,imageSource,tableau,callback,id="")=>{

     _container = document.createElement("div")
     _container.id = "container"+id;

//titre
let title = document.createElement("div");
title.textContent = titreText
title.classList.add("title")




//bouton
let goButton = document.createElement("div");
goButton.classList.add("goButton")
goButton.textContent = "Go";
goButton.id = "but"+id;
//affichage
let image = document.createElement("img");
image.src = imageSource
 _affiche = document.createElement("div");
 _affiche.id = "affiche"+id;
_affiche.classList.add("affichage")

let loop = document.createElement("div");

loop.id = "loop"+id;

_container.appendChild(title)
_container.appendChild(image)
let brContainer = document.createElement("div")
for(let b =0;b<brSize;b++){
    let br = document.createElement("br")
    brContainer.appendChild(br)

}




_container.appendChild(_affiche);
//tableau affiché
_container.appendChild(creatTab(tableau))
_container.appendChild(loop)

goButton.addEventListener("click",()=>{
   
    callback()
  

})

_container.appendChild(goButton)

document.body.appendChild(_container)
document.body.appendChild(brContainer)

return[_affiche,_container]
}

const createContainerTwo = (titreText,imageSource,tableau,callback,id="")=>{

    _container = document.createElement("div")
    _container.id = "container"+id;

//titre
let title = document.createElement("div");
title.textContent = titreText
title.classList.add("title")




//bouton
let goButton = document.createElement("div");
goButton.classList.add("goButton")
goButton.textContent = "Go";
goButton.id = "but"+id;
//affichage
let image = document.createElement("img");
image.src = imageSource
_affiche = document.createElement("div");
_affiche.id = "affiche"+id;
_affiche.classList.add("affichage")

let loop = document.createElement("div");

loop.id = "loop"+id;

_container.appendChild(title)
_container.appendChild(image)
let brContainer = document.createElement("div")
for(let b =0;b<brSize;b++){
   let br = document.createElement("br")
   brContainer.appendChild(br)

}




_container.appendChild(_affiche);
//tableau affiché
_container.appendChild(creatTab(tableau))
_container.appendChild(loop)

goButton.addEventListener("click",()=>{
  
   callback()
 

})

_container.appendChild(goButton)

document.body.appendChild(_container)
document.body.appendChild(brContainer)

return[_affiche,_container]
}

export { creatTab, eraseColor,createContainer,createContainerTwo}