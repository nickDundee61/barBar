


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

//déclaration d'un tableau 
let tableau = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"]
//ici i vaut LA VALEUR DU TABLEAU et non l'index en cours
for(let i of tableau){
    //mise en majuscule de i
    i=i.toUpperCase()
console.log(i.toUpperCase())
}
