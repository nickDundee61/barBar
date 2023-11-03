
//récupération de la div "affichage" 
let affichage = document.getElementById("affichage")
//boucle simple d'itération
//tableauMois.length = 12
//récupération de tous les éléments possedant la classe "moisClass"
let tableauMois = document.querySelectorAll(".moisClass");
//déclaration d'un index à incrémenter 

let index =0;
//passage dans tableauMois à la recherche des éléments possedant la classe "violet"
//tant que l'élément posséde la classe violet et que son texte est différent de Novembre.
while(tableauMois[index].classList.contains(".violet") && tableauMois[index].innerHTML !=="Novembre"){
//ajout de la classe red qui colore la bordure en rouge
    tableauMois[index].add("red")
    //ajout d'une classe pour un fond jaune
    tableauMois[index].classList.add("addFondJaune")
    //récupération du texte de la div, stockage dans la variable textEnMajuscule et conversion en capitale
    let textEnMajuscule =  tableauMois[index].innerHTML.toUpperCase();
    //assignation de la variable textEnMajuscule à la propriété texte (innerHTML) de l'élément
    tableauMois[index].innerHTML = textEnMajuscule

}

//récupération des éléments du DOM dotés de la classe "jour" et stockage dans un tableau (Array)
let jours = document.querySelectorAll(".jours")
//Itération du tableau dans le sens inverse, arrêt lorsque l'index vaut zéro
for (let index=jours.length;index>=0;index--){
//déclaration d'une variable pour stocker le texte de l'élément et mise en minuscule
    let text= jours[index].innerHTML.toLowerCase();
    //changement du texte de l'élément, nouvelle valeur : text;
    jours[index].innerHTML = text;
}

