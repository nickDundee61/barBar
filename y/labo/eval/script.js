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
const caractéristiqueChampsDeSaisie = [
  { id: "Nom", placeholder: "nom", nom: "nom", element: "input", type: "text", classe: "champDeSaisi" },
  { id: "Référence", placeholder: "référence", nom: "reference", element: "input", type: "text", classe: "champDeSaisi" },
  { id: "Quantité", placeholder: "quantité", element: "input", nom: "quantite", type: "number", step: "0.01", classe: "champDeSaisi" },
  { id: "Catégorie", placeholder: "categorie ", element: "input", nom: "categorie", type: "text", classe: "champDeSaisi" }
]

const constucteurPrincipal = () => {

  containerPrincipal = document.createElement("div")
  containerPrincipal.classList.add("containerPrincipal");

  document.body.appendChild(containerPrincipal)
//création du bouton d'administration

const containerAdminsitration = document.createElement("div");
containerAdminsitration.textContent = "ADMINISTRATION"
containerAdminsitration.classList.add("administration")


containerAdminsitration.addEventListener("click",()=>{

  panneauAdministration.style.visibility="visible"
})
containerPrincipal.appendChild(containerAdminsitration)

//création du panneau d'administration
const panneauAdministration = document.createElement("div")
panneauAdministration.classList.add("panneauAdministration")


constructeurDeBoutonClose(panneauAdministration,"ADMINISTRATION","space-between")
constructeurDuBoutonToutEffacer(panneauAdministration)
constructeurAjoutDeChampsAdministration(panneauAdministration,caractéristiqueChampsDeSaisie);

document.body.appendChild(panneauAdministration)


  //création du containerDeSaisie
  containerDeSaisie = document.createElement("div")
  containerDeSaisie.classList.add("containerChampsDeSaisie");
  containerPrincipal.appendChild(containerDeSaisie)

}

const constructeurDeBoutonClose =(_containerParent,text,flex)=>{
const imageDiv = document.createElement("div")
imageDiv.setAttribute("style",`display:flex;flex-direction:row;justify-content:${flex};align-items:center;padding:0.5rem`)
imageDiv.textContent = text;
  const imageClose = document.createElement("img")
  imageClose.src = "./images/x-mark.png"
  imageClose.classList.add("imageClose")
  imageClose.addEventListener("click",()=>{

    _containerParent.style.visibility ="hidden"
  })
  imageDiv.appendChild(imageClose)
  _containerParent.appendChild(imageDiv)

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

const constructeurAjoutDeChampsAdministration =(_containerParent,tableau)=>{

  const containerAjoutChamp = document.createElement("div");
  containerAjoutChamp.classList.add("containerAjoutChamp");

  for(let o of tableau){

    const champsActuel = document.createElement("div");
   // champsActuel.setAttribute("style","display:flex;flex-direction:row")
   /* const nom = document.createElement("div");
    nom.textContent =o.id;*/
    
   // champsActuel.appendChild(nom)
    constructeurDeBoutonClose(champsActuel,o.id,"flex-start")
    containerAjoutChamp.appendChild(champsActuel)
  }

  _containerParent.appendChild(containerAjoutChamp)






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

    inscrireProduitSurDataBase(objet)
  })
}
const constructeurDuBoutonToutEffacer = (_containerParent) => {
  //création du bouton de validation
  const boutonEffecer = document.createElement("div");
  boutonEffecer.classList.add("boutonEffecer");
  boutonEffecer.textContent = "Vider"
  _containerParent.appendChild(boutonEffecer)


    boutonEffecer.addEventListener("click", async () => {
    listeDesProduits = []
    if(tableEtTete){
      viderLeContainer(tableEtTete)

    }

   
    await supprimerTousLesDocumentsDeLaCollection("fleurs")



_containerParent.style.visibility = "hidden"
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

const récupérerListeDesProduitsSurDataBase = async () => {
  listeDesProduits = []
  //une fois que la liste est téléchargée, afficher la liste
  listeDesProduits = await obtenirTouteLaCollection("fleurs")
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

  constructeurDeChampsDeSaisie(caractéristiqueChampsDeSaisie)
  constructeurDuBoutonDeValidation();
  constructeurDeTable()

  récupérerListeDesProduitsSurDataBase();




}
const constructeurDeTable = (object=null) => {

  if (!document.getElementById("tableTete")) {


    tableEtTete = document.createElement("table");
    tableEtTete.id="tableTete"
    let tr = document.createElement("tr")
    for (const property of caractéristiqueChampsDeSaisie) {

      let th = document.createElement("th")
      th.textContent = `${property.id}`
      tr.appendChild(th)
    }
    tableEtTete.appendChild(tr)
    containerPrincipal.appendChild(tableEtTete);
if(!object){
  return;
}
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
    propsDivContainer.setAttribute("style", "display:grid;grid-template-columns: 25% 75%;text-align: left;margin:1rem")

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
 constructeurDeBoutonClose(infoPanel,"Ajout/Modification")


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
infoPanel.style.visibility="hidden"
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

miseAjourListe();
infoPanel.style.visibility="hidden";
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