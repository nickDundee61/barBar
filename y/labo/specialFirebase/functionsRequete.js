import {
    ajouterUnObjet,
    obtenirTouteLaCollection,
    trouverDocumentsAvecValeur,
    mettreAJourUnDocument,
    supprimerUnDocument,
    supprimerTousLesDocumentsDeLaCollection,
    mettreAJourDocumentsAvecValeurParticulière
  } from './firebase.js';

  import  {listeDesProduits, caractéristiqueChampsDeSaisie,collectionDeDestination}  from './VG.js';
import { constructeurDeTable } from './constucteurs.js';




const inscrireProduitSurDataBase = async (objet,_collection) => {
    //une fois que l'écriture en base de donnée à été confirmer, 
    //ajouter le produit à la liste et ajouter le nouvel élément à la table. 
    let result = await ajouterUnObjet(objet,_collection)
  
    listeDesProduits.push(result)
    constructeurDeTable(result)
  
  }
  //supprimerTousLesDocumentsDeLaCollection('fleurs')
  
  const récupérerListeDesProduitsSurDataBase = async (_collection) => {

    listeDesProduits.length = 0
    //une fois que la liste est téléchargée, afficher la liste
    const products = await obtenirTouteLaCollection(_collection)
    listeDesProduits.push(...products)
    afficherListeDesProduits();
  }
  
  const afficherListeDesProduits = () => {
  
    for (let objetProduit of listeDesProduits) {
  
      constructeurDeTable(objetProduit)
    }
  
  }

  export {inscrireProduitSurDataBase,récupérerListeDesProduitsSurDataBase,
    afficherListeDesProduits}