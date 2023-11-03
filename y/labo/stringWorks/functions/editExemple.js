


//déclaration d'une array pour stocker des nombre
let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//déclaration de l'index
let index = 0;
//Tant que index est strictement inférieur à zéro
while(index <15){
/*déclaration d'une variable pour stocker un nombre aléatoire compris entre zéro et
la longueur du tableau nombres. */
let nombreAleatoire = Math.floor(Math.random()*nombres.length);
/*
La formule suivante permet d'obtenir des nombres entiers qui correspondent à l'un des indexes du tableau
La fonction Math.floor(floor=sol)arrondit le nombre obtenu à son entier 
La fonction Math.random() produit un nombre entre 0 inclu et 1 exclu
On multiplie ce nombre par la longueur du tableu
*/

console.log(nombreAleatoire)
//incrémentation de index pour sortir de la boucle while!!!
index++;
}

//déclaration d'un tableau vide auquel seront ajoutés des éléments dynamiquement
let tableau =[]
//déclaration d'un tableau pour des couleurs
let color =["blue","red","yellow"]
//création d'un bouton et de son écouteur d'évément (sur clique)
let bouton  = document.createElement("div");
bouton.addEventListener("click",()=>{
    //déclaration d'une variable pour stocker un nombre aléatoire basé sur la longueur du tableau color
    let rand = Math.floor(Math.random()*color.length)
    //création d'une div à ajouter au 
    let mydiv = document.createElement("div");
    let text = "test"
    //ajout du texte à la div
    mydiv.textContent =test;
    //changement de couleur dynamique avec la technique du "dollar"
    mydiv.setAttribute("style",`color:${color[rand]}`)
    //ajout de la div au document
    document.body.appendChild(mydiv)
    //utilisation de la méthode push pour ajouter un élément à tableau
    tableau.push(text)
    //vérification du contenu du tableau à la console
    console.log(tableau)

})

