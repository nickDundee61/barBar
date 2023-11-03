

let reader = document.getElementById("reader");
let valider = document.getElementById("valider");
let listeTache = document.getElementById("listeTaches");

reader.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {
        addTache();
    }
})

valider.addEventListener("click", () => {

    addTache();
})

const elementsWithListeners = [];

function addEventListenerAndTrack(element, eventType, listener) {
  element.addEventListener(eventType, listener);
  // Track the element and its event listener
  elementsWithListeners.push({ element, eventType, listener });
}

console.log(elementsWithListeners)
const addTache = () => {
   
    //si le reader est vide, alerter, sortir
    if (reader.value === "") {

        alert("Ajoutez une tâche !");
        return;
    }
    //création du conteneur pour acceuillir le texte
    let tache = document.createElement("div");
    tache.textContent = reader.value;

     //création du conteneur de tâche principal
    let nouvelleTache = document.createElement("div");
    nouvelleTache.classList.add("tacheContainer");

//création du conteneur pour l'image

    let imageContainer = document.createElement("div");
    imageContainer.classList.add("valider");
    imageContainer.style.backgroundColor = "white"
//création de l'image
    let image = document.createElement("img");
    image.setAttribute("src", "./poubelle.PNG");
    image.classList.add("poubelleIcone")

    //ajoute un écouteur d'événement sur le conteneur de l'image poubelle pour effacer la div parent
    imageContainer.addEventListener("click", () => {

        imageContainer.parentElement.remove()
    })
    //ajoute la poubelle et la tâche à la div principale de contenu
    imageContainer.appendChild(image)
    nouvelleTache.appendChild(tache);
    nouvelleTache.appendChild(imageContainer);
    //remet le reader à zéro
    reader.value = "";

    //ajoute la tâche à la liste de tâche
    listeTache.appendChild(nouvelleTache);


}