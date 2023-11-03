//constantes globales
const paveNumerique = [".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
//inverser paveNumerique
paveNumerique.reverse()
const paveOperation = ["+", "-", "*", "/", "=", "C"]

//variables globales

let memoryOneControl = true;
let memoryTwoControl = false;
let operation = "";
//tableau pour stocker l'action de l'utilisateur
let historiqueDesOpérations = [];//let tab =["12","+","14","-","15"]

//mémoire numérique
let memoryOne = null;
let memoryTwo = null;

//mémoire de caractère
let memoryOneChaine = "";
let memoryTwoChaine = "";

//création du conteneur principal 
const calculatrice = document.createElement("div")
calculatrice.classList.add("calculatrice")

document.body.appendChild(calculatrice)
//création de l'affichage

const affichage = document.createElement("div")
affichage.classList.add("pad")
calculatrice.appendChild(affichage)
//création du pad numérique

const pad = document.createElement("div")
pad.classList.add("pad");

//fonction dédiée au calcul
const calculerNombre = () => {
    //vérification que les nombres et l'opérateur sont différents de null ou vide, si c'est le cas
    // la fonction rend le contrôle au processus principal (return)
let result =0;
let nombre =[];//[10,20]
let operateur=""

result = calculateExpression(historiqueDesOpérations)
    affichage.textContent = result.toString();
    console.log(historiqueDesOpérations)

    historiqueDesOpérations=[]

 /*   historiqueDesOpérations=[];
    nombre=[]
    console.log(historiqueDesOpérations)*/

  /* 
    if (memoryOne === null || memoryTwo === null || operation === "") {
        console.log(memoryOne, memoryTwo, operation)
        return;
    }
    //l'opérateur switch exécute le code suivant la valeur de operation
 switch (operation) {
        case "+": affichage.textContent = (memoryOne + memoryTwo).toString();
            break;
        case "-": affichage.textContent = (memoryOne - memoryTwo).toString();
            break;
        case "*": affichage.textContent = (memoryOne * memoryTwo).toString();
            break;
        case "/": affichage.textContent = (memoryOne / memoryTwo).toString()
            break;


        default: "ERROR !!"
    }
*/

}

//création dynamique des touches et ajout au pad
for (let i of paveNumerique) {
    //création d'une div pour chaque cellule du tableau paveNumerique
    let touche = document.createElement("div");
    //ajout de la valeur de la cellule en cours à la div
    touche.textContent = i;
    //ajout d'une id à la div
    touche.id = i;
    //ajout d'une classe à la div
    touche.classList.add("padTouch")
    //ajout d'un écouteur d'événement sur la div en cours de création
    touche.addEventListener("click", (e) => {
        //déclaration d'une variable pour stocker le text de la touche cliquée (ex : "0","1" etc..)
        let text = e.target.id;

            //if(memoryOneControl){}
            memoryOneChaine += text;
            //assignation de la valeur de memoryOneChaine à la propriété textContent de l'élément affichage
            affichage.textContent = memoryOneChaine;
     

       
        

    })
    //ajout de la div à l'élément parent pad
    pad.appendChild(touche)
}
//ajout du pad à la div calculatrice
calculatrice.appendChild(pad)


//création du controleur
const controleur = document.createElement("div")
controleur.classList.add("pad")
calculatrice.appendChild(controleur)

for (let i of paveOperation) {
    //créaton d'une div
    let touche = document.createElement("div")
    //ajout de la valeur de i à la div
    touche.textContent = i;
    //ajout d'une id à la div
    touche.id = i;
    //ajout d'une classe
    touche.classList.add("padTouch");
    //ajout d'un écouteur d'événement

    if (touche.id === "C") {
        touche.addEventListener("click", () => {
            console.log("init")
            reinitialiser();
        })

    } else {
        touche.addEventListener("click", (e) => {

            //récupération du type d'opération 
            let _operation = e.target.id;
            //assignation d'_operation à la variable globale operation si opération est différent de =
            if (_operation !== "=") {
                operation = _operation;

            }
            //déclaration d'une variable pour stocker le nombre en cours
            let nombre = 0;

            //stockage de la valeur memoryOneChaine convertie en numérique dans la variable nombre
            nombre = parseFloat(memoryOneChaine)
            memoryOneChaine =""
        

            //ajout du texte à une nouvelle cellule du tableau historiqueDesOpérations 
            historiqueDesOpérations.push(nombre);
            //ajout de l'opérateur
            historiqueDesOpérations.push(_operation);






            //si _opération vaut = 
            if (_operation === "=") {
                calculerNombre();
                historiqueDesOpérations.pop();
                console.log(historiqueDesOpérations)

            }else{
                affichage.textContent = ""

            }
         
        }

        )
    }
    //ajout de la div au controleur
    controleur.appendChild(touche)

}
//réinitialisation de toute les variables globales
const reinitialiser = () => {
    affichage.textContent = ""
    memoryOneControl = true;
    memoryTwoControl = false;
    operation = "";
    memoryOne = 0;
    memoryTwo = 0;
    memoryOneChaine = "";
    memoryTwoChaine = "";
}

function calculateExpression(expression) {
    let stack = [];
    let operators = [];
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2
    };

    for (let token of expression) {
        if (!isNaN(token)) {
            stack.push(parseFloat(token));
        } else if (token in precedence) {
            while (
                operators.length &&
                precedence[operators[operators.length - 1]] >= precedence[token]
            ) {
                let operator = operators.pop();
                let operand2 = stack.pop();
                let operand1 = stack.pop();
                if (operator === '+') {
                    stack.push(operand1 + operand2);
                } else if (operator === '-') {
                    stack.push(operand1 - operand2);
                } else if (operator === '*') {
                    stack.push(operand1 * operand2);
                } else if (operator === '/') {
                    if (operand2 !== 0) {
                        stack.push(operand1 / operand2);
                    } else {
                        console.error('Division by zero!');
                        return null;
                    }
                }
            }
            operators.push(token);
        }
    }

    while (operators.length) {
        let operator = operators.pop();
        let operand2 = stack.pop();
        let operand1 = stack.pop();
        if (operator === '+') {
            stack.push(operand1 + operand2);
        } else if (operator === '-') {
            stack.push(operand1 - operand2);
        } else if (operator === '*') {
            stack.push(operand1 * operand2);
        } else if (operator === '/') {
            if (operand2 !== 0) {
                stack.push(operand1 / operand2);
            } else {
                console.error('Division by zero!');
                return null;
            }
        }
    }

    if (stack.length === 1) {
        return stack[0];
    } else {
        console.error('Invalid expression');
        return null;
    }
}






