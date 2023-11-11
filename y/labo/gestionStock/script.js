//IMPORTATION DES FONCTIONS CRUD (CREATE READ UPDATE DELETE)

import {
  ajouterUnObjet,
  obtenirTouteLaCollection,
  trouverDocumentsAvecValeur,
  mettreAJourUnDocument,
  supprimerUnDocument,
  supprimerTousLesDocumentsDeLaCollection,
  mettreAJourDocumentsAvecValeurParticulière
} from './firebase.js';
//liste des produits initialisée à zéro
let listeDesProduits = []
const dateActuelle = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
const dateFormatee = dateActuelle.toLocaleDateString('fr-FR', options);

//création du conteneur principal
let containerPrincipal = null;

//création du containerDeSaisie
let containerDeSaisie = null;
let tableEtTete = null;
//création d'un tableau d'objet contenant les caractéristiques de chaque champs de saisie




const constucteurPrincipal = () => {

  containerPrincipal = document.createElement("div")
  containerPrincipal.classList.add("containerPrincipal");
  containerPrincipal.textContent = "containerDeSaisie"
  document.body.appendChild(containerPrincipal)

  //création du containerDeSaisie
  containerDeSaisie = document.createElement("div")
  containerDeSaisie.classList.add("containerChampsDeSaisie");
  containerPrincipal.appendChild(containerDeSaisie)

}

//fonction permettant de construire des champs de saisie à partir d'un tableau (tableau d'objet)
const constructeurDeChampsDeSaisie = (CPA_tableau) => {


  for (let objet of CPA_tableau) {

    //construction d'une div pour y placer un champs de saisie
    const CLH_divInput = document.createElement("div");


    const champDeSaisi = document.createElement(objet.element);
    if (objet.type === "number") {

      champDeSaisi.step = objet.step;
    }
    champDeSaisi.type = objet.type;
    champDeSaisi.classList.add(objet.classe)
    champDeSaisi.placeholder = objet.id;
    champDeSaisi.id = objet.id;

    CLH_divInput.appendChild(champDeSaisi);
    containerDeSaisie.appendChild(CLH_divInput)
  }

}


const viderLeContainer = (HTML_objet) => {
  // Get the first child of the container
  const firstChild = HTML_objet.firstElementChild;

  // Loop through all children except the first one and remove them
  for (let child = HTML_objet.lastElementChild; child !== firstChild; child = HTML_objet.lastElementChild) {
    HTML_objet.removeChild(child);
  }
};



const constructeurDuBoutonDeValidation = () => {
  //création du bouton de validation
  const boutonValidation = document.createElement("div");
  boutonValidation.classList.add("boutonValidation");
  boutonValidation.textContent = "Valider"
  containerDeSaisie.appendChild(boutonValidation)


  boutonValidation.addEventListener("click", () => {
let objet ={}
    for (let obj of caractéristiqueChampsDeSaisie){
objet[obj.id] =document.getElementById(obj.id).value

    }

    inscrireProduitSurDataBase(objet,coll)
  })
}
const constructeurDuBoutonToutEffacer = () => {
  //création du bouton de validation
  const boutonEffecer = document.createElement("div");
  boutonEffecer.classList.add("boutonEffecer");
  boutonEffecer.textContent = "Vider"
  containerDeSaisie.appendChild(boutonEffecer)


    boutonEffecer.addEventListener("click", async () => {
    listeDesProduits = []
    viderLeContainer(containerPrincipal)
    tableEtTete = null;
    await supprimerTousLesDocumentsDeLaCollection("fleurs")




  })

}


const inscrireProduitSurDataBase = async (objet) => {
  //une fois que l'écriture en base de donnée à été confirmer, 
  //ajouter le produit à la liste et ajouter le nouvel élément à la table. 
  let result = await ajouterUnObjet(objet, "fleurs")
  console.log(result)
  listeDesProduits.push(result)


  constructeurDeTable(result)




}
//supprimerTousLesDocumentsDeLaCollection('fleurs')

const récupérerListeDesProduitsSurDataBase = async (_collection) => {
  listeDesProduits = []
  //une fois que la liste est téléchargée, afficher la liste
  listeDesProduits = await obtenirTouteLaCollection(_collection)
  afficherListeDesProduits();
}

const afficherListeDesProduits = () => {

  for (let objetProduit of listeDesProduits) {

    constructeurDeTable(objetProduit)
  }

}



const Pricipal = async () => {


  constucteurPrincipal();

  infoPanel(caractéristiqueChampsDeSaisie)
  constructeurDuBoutonToutEffacer()
  constructeurDeChampsDeSaisie(caractéristiqueChampsDeSaisie)
  constructeurDuBoutonDeValidation();
  récupérerListeDesProduitsSurDataBase();




}
const constructeurDeTable = (object) => {

  if (!tableEtTete) {


    tableEtTete = document.createElement("table");
    let tr = document.createElement("tr")
    for (const property of caractéristiqueChampsDeSaisie) {

      let th = document.createElement("th")
      th.textContent = `${property.id}`
      tr.appendChild(th)
    }
    tableEtTete.appendChild(tr)
    containerPrincipal.appendChild(tableEtTete);

  }

  let tr = document.createElement("tr");
  //tr.id = object.id;

  tr.addEventListener("click", () => {
    //référencement du panneau d'info
    let info = document.getElementById("infoPanel");
    info.setInfo(object)
    //rendre le panneau visible
    info.style.visibility = "visible"


  })

  for (const obj of caractéristiqueChampsDeSaisie) {

    let dt = document.createElement("td")
    dt.textContent = `${object[obj.id]}`;
    tr.appendChild(dt)

  }
  tableEtTete.appendChild(tr)
}


const infoPanel = () => {
  let elementProperties = []
  let incomingProperties = [];
  let incomingObject = null;
  //fonction pour recevoir les paramètres
  const setInfo = (obj) => {
    //vide le tableau des propriétés précédentes
    incomingProperties = [];
    incomingObject = obj;
    for (let el in obj) {
      //pousse les proprétés dans le tableau
      incomingProperties.push(el)
    }
    for (let obj of elementProperties) {

      if (obj) {
        obj.remove()
      }
    }
    let propsDivContainer = document.createElement("div")
    propsDivContainer.setAttribute("style", "display:grid;grid-template-columns: 1fr 1fr;text-align: left;margin:1rem")

    elementProperties.push(propsDivContainer)

    for (let o of incomingProperties) {

      let propsDiv = document.createElement("div")
      propsDiv.setAttribute("style", "display:flex;flex-direction:row;justify-content:space-between")

      let label = document.createElement("label")
      label.for = "input" + o;
      label.textContent = (o).charAt(0).toUpperCase() + o.slice(1)
      propsDivContainer.appendChild(label)

      let input = document.createElement("input")
      input.id = "input" + o;
      input.value = obj[o]
      propsDivContainer.appendChild(input)



    }
    infoPanel.appendChild(propsDivContainer)

  }

  //création du panneau principal
  const infoPanel = document.createElement("div");
  //ajout de classe
  infoPanel.classList.add("info")
  //ajout id
  infoPanel.id = "infoPanel"

  infoPanel.setInfo = setInfo;
  //création du conteneur image
  let containerImage = document.createElement("div");
  containerImage.setAttribute("style", "display:flex;flex-direction:row;justify-content:flex-end");
  //création div image
  const closeImage = document.createElement("img")
  closeImage.src = "./images/boutonClose.jpg"
  closeImage.classList.add("imageClose")
  closeImage.addEventListener("click", () => {

    infoPanel.style.visibility = "hidden";
  })
  containerImage.appendChild(closeImage);
  infoPanel.appendChild(containerImage)


  const boutonContainer = document.createElement("div");
  boutonContainer.setAttribute("style", "display:flex;flex-direction:row;justify-content:space-around;padding:1rem;")

  const modifierBouton = document.createElement("div");
  modifierBouton.classList.add("modifierBouton")
  modifierBouton.textContent = "Modifier"
  modifierBouton.addEventListener("click", async ()  => {
    let objetAmodifier = {}

    for (let props of incomingProperties) {

      objetAmodifier[props] = document.getElementById("input" + props).value

    }

 await mettreAJourUnDocument("fleurs", incomingObject.id, objetAmodifier)
 récupérerListeDesProduitsSurDataBase();
    for (let ob of listeDesProduits) {

      if (ob.id === incomingObject.id) {
        ob = objetAmodifier;
      }
    }

    miseAjourListe()

  })
  const effacerBouton = document.createElement("div");
  effacerBouton.classList.add("modifierBouton")
  effacerBouton.textContent = "Effacer"
  effacerBouton.addEventListener("click",async () => {
await supprimerUnDocument("fleurs",incomingObject.id)
récupérerListeDesProduitsSurDataBase();
for (let ob of listeDesProduits) {

  if (ob.id === incomingObject.id) {
    ob = objetAmodifier;
  }
}

miseAjourListe()
  })

  boutonContainer.appendChild(modifierBouton)
  boutonContainer.appendChild(effacerBouton)

  infoPanel.appendChild(boutonContainer)

  document.body.appendChild(infoPanel);




}

const miseAjourListe = () => {

 
  const rows = tableEtTete.getElementsByTagName("tr");

  // Loop through and remove all rows except the first one
  for (let i = rows.length - 1; i > 0; i--) {
    tableEtTete.removeChild(rows[i]);
  }

  afficherListeDesProduits();

}

Pricipal()