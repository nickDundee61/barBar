//IMPORTATION DES FONCTIONS CRUD (CREATE READ UPDATE DELETE)
import  {caractéristiqueChampsDeSaisie,collectionDeDestination}  from './VG.js';


import {  récupérerListeDesProduitsSurDataBase} from "./functionsRequete.js"

  import{constructeurDeTable,
        constructeurDeChampsDeSaisie,
    constucteurPrincipal,
    constructeurDuBoutonDeValidation,
       constructeurPanneauInfo} from "./constucteurs.js"


//liste des produits initialisée à zéro

const dateActuelle = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
const dateFormatee = dateActuelle.toLocaleDateString('fr-FR', options);

let collectionCourrante = collectionDeDestination[0]
//création d'un tableau d'objet contenant les caractéristiques de chaque champs de saisi
const Pricipal = async () => {

  constucteurPrincipal();
  constructeurPanneauInfo(caractéristiqueChampsDeSaisie)
  constructeurDeChampsDeSaisie(caractéristiqueChampsDeSaisie)
  constructeurDuBoutonDeValidation();
  constructeurDeTable()
  récupérerListeDesProduitsSurDataBase(collectionCourrante);
}



Pricipal()

