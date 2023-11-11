//IMPORTATION DES FONCTIONS CRUD (CREATE READ UPDATE DELETE)

import {
    ajouterUnObjet,
    ajouterUnObjetAvecIdSpécifique,
    obtenirTouteLaCollection,
    trouverDocumentsAvecValeur,
    mettreAJourUnDocument,
    supprimerUnDocument,
    supprimerTousLesDocumentsDeLaCollection,
    mettreAJourDocumentsAvecValeurParticulière,
    telDocumentExiste,
    deleteCollection


} from './firebase.js';


let questionObject = [{
    question: "Parmi les expressions suivantes, quelle est ou quelles sont celles qui sont valides pour modifier la couleur de fond d'une div HTML ?",
    type: "qcm",
    response: ["let myDiv = document.getElementById('changeColor:red')",
        'let myDiv = document.getElementById("myDiv");myDiv.style.backgroundColor =red;',
        'let myDiv = document.getElementById("myDiv");myDiv.style.backgroundColor = "red";',
        'let myDiv = document.getElementById("myDiv");myDiv.setAttribute("style","background-color:red);',
        'let myDiv = document.getElementById("myDiv");myDiv.setAttribute("style","background =red");']
},
{
    question: "Laquelle ou lesquelles de ces fonctions ne renvoient pas de tableau d'éléments HTML?",
    type: "qcm",
    response: ["querySelector", "setAttribute", "querySelectorAll", "createElement"],
},
{
    question: "Soit l'élément HTML 'const myDiv', qu'aura pour conséquence l'expression suivante : myDiv.remove()",
    type: "radio",
    response: ["myDiv sera rendue invisible sur la page HTML", "myDiv sera déplacée en bas de la page", "myDiv sera supprimée de la page"],
},
{
    question: "En admettant que le document contienne une div dont l'id est 'myDiv', écrivez le code qui permet de changer son texte en 'NouveauTexte' ?",
    type: "QO",

},
{
    question: "Sélectionnez le ou les codes justes",
    type: "IMG",
    response: [
        "./images/boucles/boucle1.PNG",
        "./images/boucles/boucle2.PNG",
        "./images/boucles/boucle3.PNG",
        "./images/boucles/boucle4.PNG"

    ]
},
{
    question: "Interprétez en Javascript la phrase suivante en déclarant tout ce qui est nécessaire : 'Si A est strictement supérieur à B OU C est inférieur ou egal à D ALORS : E est égal à 20'",
    type: "QO",

},
{
    question: "Sélectionnez la ou les expressions valides pour créer un champs de saisie",
    type: "qcm",
    response: ["let myDiv = createInput('type','text')",
        'let myDiv = document.createInput("type = text")',
        'let myDiv = document.createElement("input");myDiv.type ="text"'
    ]
},
{
    question: "L'expression suivante est t-elle valide ? : let monText = document.createElement('textarea');monText.chiwawa = true;",
    type: "radio",
    response: ["VRAI", "FAUX"],
},

{
    question: "Soit le tableau de nombres suivant : const unTableau = [20,7,37,88,12,53,990], écrivez au moins une façon de parcourir ce tableau et d'afficher son contenu dans la console",
    type: "QO",

}, {
    question: "Soit l'expression suivante : let unTableau = ['lundi','mardi','mercredi'];unTableau.pop(); Que vaut unTableau à la suite de cette expression ?",
    type: "radio",
    response: ["[]", "['lundi','mardi']", "['mardi','mercredi']", "['mercredi','lundi','mardi']"],
},

{
    question: "Soit l'expression suivante : let unTableau = ['lundi','mardi','mercredi'];unTableau.push('dimanche'); Que vaut unTableau à la suite de cette expression ?",
    type: "radio",
    response: ["['dimanche']", "['dimanche','lundi','mardi']", "['mardi','mercredi']", "['mercredi','lundi','mardi','dimanche']", "['lundi','mardi','mercredi','dimanche']"],
},


{
    question: "Sélectionnez le ou les codes valides ET fonctionnels",
    type: "IMG",
    response: [
        "./images/listener/listener1.PNG",
        "./images/listener/listener2.PNG",
        "./images/listener/listener3.PNG",
        "./images/listener/listener4.PNG"

    ]
},

{
    question: "Ecrivez une fonction qui renvoie l'addition de 2 nombres passés en paramètres",
    type: "QO",

},
{
    question: "Ecrivez une fonction qui permet de reproduire au mieux le résulat affiché ci-dessous en déclarant tout ce qui est nécessaire ",
    type: "QO",
    image: "./images/create/create1.PNG"

},
{
    question: "Soit un tableau d'objet à gauche et une fonction à droite, inscrivez ligne par ligne ce que va afficher la console lorsque la fonction parcourera le tableau",
    type: "QO",
    image: "./images/create/create2.PNG"

},




]
let container = null
let _collection

const canditadutre = async () => {
    let candidatDiv = document.createElement("div");
    candidatDiv.classList.add("candidatDiv")

    const name = document.createElement("input")
    name.type = "text"
    name.id = "name"
    name.style.marginRight = "1rem"

    const _label = document.createElement("label");
    _label.for = "name"
    _label.textContent = "Nom :"

    const surname = document.createElement("input")
    surname.type = "text"
    surname.id = "surname"

    const _label_prenom = document.createElement("label");
    _label_prenom.for = "surname"
    _label_prenom.textContent = "Prénom :"

    candidatDiv.appendChild(_label)

    candidatDiv.appendChild(name)
    candidatDiv.appendChild(_label_prenom)
    candidatDiv.appendChild(surname)

    const validCandidat = document.createElement("div")
    validCandidat.textContent = "Valider"
    validCandidat.classList.add("bouton")
    candidatDiv.appendChild(validCandidat)

    validCandidat.addEventListener("click", async () => {
        _collection = name.value + surname.value
        let candidatObject = {
            nom: name.value,
            prenom: surname.value

        }
          await ajouterUnObjet(candidatObject, _collection)

        Secondaire()
        //effacer div
        validCandidat.remove()
    })
    candidatDiv.appendChild(validCandidat)

    document.body.appendChild(candidatDiv)

}
const containerPrincipal = () => {

    container = document.createElement("div")
    container.id = "container"
    container.classList.add("container")
    document.body.appendChild(container)

}

const AfficheurDeQuestion = (_question) => {

    const question = document.createElement("div");
    question.classList.add("question")
    question.id = _question.question;
    question.textContent = _question.question
    container.appendChild(question)

    afficheurDeReponse(_question, question)



}


const Principal = async () => {


     canditadutre()
  
}

const Secondaire = () => {

    containerPrincipal();

    for (let q of questionObject) {
        AfficheurDeQuestion(q)


    }

}

const afficheurDeReponse = (_question, ctn) => {
    const responseContainer = document.createElement("div")
    responseContainer.id = "res" + _question.question
    if (_question.type === "qcm") {

        construireCheckBox(_question, responseContainer)

        ctn.appendChild(responseContainer)
    } else if (_question.type === "radio") {

        construireRadio(_question, responseContainer)
        ctn.appendChild(responseContainer)

    } else if (_question.type === "QO") {

        if (_question.image) {

            constructeurQuestionOuverte(_question, responseContainer, _question.image)
        } else {
            constructeurQuestionOuverte(_question, responseContainer)

        }

        ctn.appendChild(responseContainer)
    } else if (_question.type === "IMG") {

        construireQuestionImage(_question, responseContainer)
        ctn.appendChild(responseContainer)

    }


}

const ajouteOuMetAjour = async (_question, stamp) => {
    let exist = await telDocumentExiste(_collection, "question", _question.question);

    if (exist) {
        await mettreAJourDocumentsAvecValeurParticulière(_collection, stamp, "question", _question.question)

    } else {
        console.log(stamp)
        await ajouterUnObjetAvecIdSpécifique(stamp, _collection, _question.question)
    }

}
const construireCheckBox = (_question, mainContainer) => {
    for (let rep of _question.response) {
        let reponseSingle = document.createElement("div");
        reponseSingle.style.margin = "0.25rem"

        let _checkBox = document.createElement("input")
        _checkBox.id = rep;
        _checkBox.type = "checkbox"

        _checkBox.addEventListener("click", async () => {
            changerCouleurBordure(_question.question)
            let stamp = {};

            stamp.question = _question.question;
            for (let d of mainContainer.children) {
                stamp[d.textContent] = d.children[1].checked;
            }
            ajouteOuMetAjour(_question, stamp)
        })
        let _label = document.createElement("label")
        _label.for = rep;
        _label.textContent = rep;

        reponseSingle.appendChild(_label)
        reponseSingle.appendChild(_checkBox)
        mainContainer.appendChild(reponseSingle)
    }

}

const construireRadio = (_question, mainContainer) => {
    for (let rep of _question.response) {
        let reponseSingle = document.createElement("div");

        let _radio = document.createElement("input")
        _radio.id = rep;
        _radio.name = "name" + _question.question
        _radio.type = "radio"

        _radio.addEventListener("click", async () => {
            changerCouleurBordure(_question.question)
            let stamp = {};

            stamp.question = _question.question;
            for (let d of mainContainer.children) {
                stamp[d.textContent] = d.children[1].checked;
            }
            ajouteOuMetAjour(_question, stamp)
        })
        let _label = document.createElement("label")
        _label.for = rep;
        _label.textContent = rep;

        reponseSingle.appendChild(_label)
        reponseSingle.appendChild(_radio)
        mainContainer.appendChild(reponseSingle)
    }
}

const constructeurQuestionOuverte = (_question, mainContainer, image = null) => {
let _extraContainer;
    if (image) {

        const _image = document.createElement("img");
        _image.src = image;
        _image.style.marginBottom ="1rem"
        _image.style.borderRadius ="10px"

        _extraContainer = document.createElement("div")
        _extraContainer.setAttribute("style","display:flex;flex-direction:column;justify-content:center")
        _extraContainer.appendChild(_image)
        mainContainer.appendChild(_extraContainer)

    }
    const textArea = document.createElement("textarea");
    textArea.rows = 10;
    textArea.cols = 50
    textArea.spellcheck = false;

    const boutonValider = document.createElement("div")
    boutonValider.textContent = "Valider"
    boutonValider.classList.add("bouton")
    boutonValider.addEventListener("click", async () => {

        changerCouleurBordure(_question.question)
        let stamp = {};
     
        stamp.question = _question.question;
        stamp.reponse = textArea.value;
        await ajouteOuMetAjour(_question, stamp)


    })
if(_extraContainer){
    _extraContainer.appendChild(textArea)
    _extraContainer.appendChild(boutonValider)
    mainContainer.appendChild(boutonValider)

}else{
    mainContainer.appendChild(textArea)
    mainContainer.appendChild(boutonValider)

}




}


const construireQuestionImage = (_question, mainContainer) => {
    const extraContainer = document.createElement("div")
    extraContainer.setAttribute("style", "display:flex;flex-direction:row;flex-wrap:wrap")

    for (let rep of _question.response) {

        let reponseSingle = document.createElement("div");

        let _checkBox = document.createElement("input")
        _checkBox.id = rep;
        _checkBox.type = "checkbox"

        _checkBox.addEventListener("click", async () => {
            changerCouleurBordure(_question.question)
            let index = 0;
            let stamp = {};

            stamp.question = _question.question;
            for (let d of extraContainer.children) {
                stamp[index.toString()] = d.children[1].checked;
                index++;
            }

            ajouteOuMetAjour(_question, stamp)

        })
        let _img = document.createElement("img")
        _img.classList.add("image")
        _img.src = rep;


        reponseSingle.appendChild(_img)
        reponseSingle.appendChild(_checkBox)
        extraContainer.appendChild(reponseSingle)
        mainContainer.appendChild(extraContainer)
    }

}


const changerCouleurBordure = (_id) => {
    let test = document.getElementById(_id)
    test.setAttribute("style", "border-color:lime")

}


Principal()

