const bouton = document.getElementById("bouton");
const inputUser = document.getElementById("userType");
const contain = document.getElementById("mainContainer");

let index = 0;
bouton.addEventListener("click", () => {
    let container = document.createElement("div");
    container.classList.add("innerDiv");

    let destroy = document.createElement("div");
    destroy.textContent = "X";
    destroy.addEventListener("click",()=>{

destroy.parentElement.remove()
    })
    container.appendChild(destroy);

    let content = document.createElement("div");
    content.textContent = inputUser.value;
    container.appendChild(content);

    contain.appendChild(container);
});

const EcouterUnElement = (element)=>{
element.addEventListener("click",()=>{

    
})

}

//modification du texte de l'élément d'id = affichage. 




