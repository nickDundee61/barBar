import  {listeDesProduits, caractéristiqueChampsDeSaisie,collectionDeDestination}  from './VG.js';

import { inscrireProduitSurDataBase,récupérerListeDesProduitsSurDataBase,
  afficherListeDesProduits} from "./functionsRequete.js";
import {
  ajouterUnObjet,
  obtenirTouteLaCollection,
  trouverDocumentsAvecValeur,
  mettreAJourUnDocument,
  supprimerUnDocument,
  supprimerTousLesDocumentsDeLaCollection,
  mettreAJourDocumentsAvecValeurParticulière,
 
} from './firebase.js';
let collectionCourrante = collectionDeDestination[0]
//création du conteneur principal
let containerPrincipal = null;

//création du containerDeSaisie
let containerDeSaisie = null;
let tableEtTete = null;


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


constructeurDeDivPremierNiveau(panneauAdministration,"ADMINISTRATION","space-between",800,true)
constructeurDuBoutonToutEffacer(panneauAdministration)
constructeurAjoutDeChampsAdministration(panneauAdministration,caractéristiqueChampsDeSaisie);

document.body.appendChild(panneauAdministration)


  //création du containerDeSaisie
  containerDeSaisie = document.createElement("div")
  containerDeSaisie.classList.add("containerChampsDeSaisie");
  containerPrincipal.appendChild(containerDeSaisie)

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
       let info = document.getElementById("constructeurPanneauInfo");
       info.setInfo(object)
       //rendre le panneau visible
       info.style.visibility = "visible"
   
   console.log(object)
     })
   
     for (const obj of caractéristiqueChampsDeSaisie) {
   
       let dt = document.createElement("td")
       dt.textContent = `${object[obj.id]}`;
       tr.appendChild(dt)
   
     }
     tableEtTete.appendChild(tr)
   }


   const constructeurDeDivPremierNiveau =(_containerParent,text,flex,_length,destruct=true)=>{
    const innerContainer = document.createElement("div");
    innerContainer.setAttribute("style",`display:flex;flex-direction:row;justify-content:${flex};text-align:center;align-items:center;padding:0.5rem;width:${_length}px`)
    
    const containerText = document.createElement("div")
    containerText.textContent = text;
    
 
      innerContainer.appendChild(containerText)
      if(destruct){
        const imageClose = document.createElement("img")
        imageClose.src = "./images/x-mark.png"
        imageClose.classList.add("imageClose")
        imageClose.addEventListener("click",()=>{
      
          _containerParent.style.visibility ="hidden"
        })
         innerContainer.appendChild(imageClose); 
      }
    
      _containerParent.appendChild(innerContainer)
    
    
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
        champDeSaisi.classList.add("champDeSaisi")
        champDeSaisi.placeholder = objet.id;
        champDeSaisi.id = objet.id;
    
        CLH_divInput.appendChild(champDeSaisi);
        containerDeSaisie.appendChild(CLH_divInput)
      }
    
    }
    const constructeurDuBoutonToutEffacer = (_containerParent) => {
      //création du bouton de validation
      const boutonEffecer = document.createElement("div");
      boutonEffecer.classList.add("boutonEffecer");
      boutonEffecer.textContent = "Effacer la collection"
      _containerParent.appendChild(boutonEffecer)
    
    
        boutonEffecer.addEventListener("click", async () => {
      
        if(tableEtTete){
          viderLeContainer(tableEtTete)
    
        }
    
       
        await supprimerTousLesDocumentsDeLaCollection(collectionCourrante)
    
    
    
    _containerParent.style.visibility = "hidden"
      })
      
    
    }
    const constructeurAjoutDeChampsAdministration =(_containerParent,tableau)=>{

      const containerListeChamp = document.createElement("div");
      containerListeChamp.classList.add("containerAjoutChamp");
    
      for(let o of tableau){
    
        const champsActuel = document.createElement("div");
        champsActuel.setAttribute("style","border:solid 2px white;padding:0.25rem;margin:0.25rem;border-radius:0.25rem")
      
      
       // champsActuel.setAttribute("style","display:flex;flex-direction:row")
       /* const nom = document.createElement("div");
        nom.textContent =o.id;*/
        
       // champsActuel.appendChild(nom)
        constructeurDeDivPremierNiveau(champsActuel,o.id,"space-between",150,o.destruct)
        containerListeChamp.appendChild(champsActuel)
      }
    
      _containerParent.appendChild(containerListeChamp)
   // constructeurDeNouveauChampEnAdministration
   
    
    
    
    
    
    }
    const constructeurDeNouveauChampEnAdministration = ()=>{
let tab=[];
constructeurDeChampsDeSaisie(tab)


    }
    
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
    
      
      inscrireProduitSurDataBase(objet,collectionCourrante)
      })
    }
    const viderLeContainer = (HTML_objet) => {
      // Get the first child of the container
      const firstChild = HTML_objet.firstElementChild;
    
      // Loop through all children except the first one and remove them
      for (let child = HTML_objet.lastElementChild; child !== firstChild; child = HTML_objet.lastElementChild) {
        HTML_objet.removeChild(child);
      }
    };

    const constructeurPanneauInfo = () => {
      let elementProperties = []
      let incomingProperties = [];
      let incomingObject = null;
      //fonction pour recevoir les paramètres
      const setInfo = (obj) => {
        incomingObject =obj
        //vide le tableau des propriétés précédentes
        incomingProperties.length =0;
      
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
    if(o !=="id"){

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
  
    
    
    
        }
        constructeurPanneauInfo.appendChild(propsDivContainer)
    
      }
    
      //création du panneau principal
      const constructeurPanneauInfo = document.createElement("div");
      //ajout de classe
      constructeurPanneauInfo.classList.add("info")
      //ajout id
      constructeurPanneauInfo.id = "constructeurPanneauInfo"
    
      constructeurPanneauInfo.setInfo = setInfo;
      //création du conteneur image
     constructeurDeDivPremierNiveau(constructeurPanneauInfo,"Ajout/Modification","space-between",500,true)
    
    
      const boutonContainer = document.createElement("div");
      boutonContainer.setAttribute("style", "display:flex;flex-direction:row;justify-content:space-around;padding:1rem;")
    
      const modifierBouton = document.createElement("div");
      modifierBouton.classList.add("modifierBouton")
      modifierBouton.textContent = "Modifier"
      modifierBouton.addEventListener("click", async ()  => {
        let objetAmodifier = {}

        for (let props of incomingProperties) {
    if(props !=="id")
          objetAmodifier[props] = document.getElementById("input" + props).value
    
        }
    
     await mettreAJourUnDocument(collectionCourrante, incomingObject.id, objetAmodifier)
     récupérerListeDesProduitsSurDataBase(collectionCourrante);
        for (let ob of listeDesProduits) {
    
          if (ob.id === incomingObject.id) {
            ob = objetAmodifier;
          }
        }
    
        miseAjourListe()
    constructeurPanneauInfo.style.visibility="hidden"
      })
      const effacerBouton = document.createElement("div");
      effacerBouton.classList.add("modifierBouton")
      effacerBouton.textContent = "Effacer"
      effacerBouton.addEventListener("click",async () => {
    await supprimerUnDocument(collectionCourrante,incomingObject.id)
    récupérerListeDesProduitsSurDataBase(collectionCourrante);
    for (let ob of listeDesProduits) {
    
      if (ob.id === incomingObject.id) {
        ob = objetAmodifier;
      }
    }
    
    miseAjourListe();
    constructeurPanneauInfo.style.visibility="hidden";
      })
    
      boutonContainer.appendChild(modifierBouton)
      boutonContainer.appendChild(effacerBouton)
    
      constructeurPanneauInfo.appendChild(boutonContainer)
      document.body.appendChild(constructeurPanneauInfo);
    }
    
    const miseAjourListe = () => {
    
     
      const rows = tableEtTete.getElementsByTagName("tr");
    
      // Loop through and remove all rows except the first one
      for (let i = rows.length - 1; i > 0; i--) {
        tableEtTete.removeChild(rows[i]);
      }
    
      afficherListeDesProduits();
    
    }
    
   export{constructeurDeTable,
    constructeurDeDivPremierNiveau,
    constructeurDeChampsDeSaisie,
    constucteurPrincipal,
    constructeurAjoutDeChampsAdministration,
    constructeurDuBoutonDeValidation,
    viderLeContainer,
    constructeurPanneauInfo
    }