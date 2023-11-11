let listeDesProduits =[];
let collectionDeDestination =["articles"]
let caractéristiqueChampsDeSaisie = [
    { id: "Nom", element: "input", type: "text",destruct:false},
    { id: "Référence",  element: "input", type: "text",destruct:false },
    { id: "Quantité",  element: "input", type: "number", step: "1",destruct:false },
    { id: "Catégorie",element: "input",  type: "text", destruct:true}
  ]
  

export  {listeDesProduits,caractéristiqueChampsDeSaisie, collectionDeDestination}

