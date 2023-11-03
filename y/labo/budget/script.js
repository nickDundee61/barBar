let gainText = document.getElementById("gain")
let gainMontant = document.getElementById("gainMontant")
let depenseText = document.getElementById("depense");
let depenseMontant = document.getElementById("depenseMontant");
let listGain = document.getElementById("listGain");
let listDepense = document.getElementById("listDepense")
let gainNumber = document.getElementById("gainNumber")
let depenseNumber = document.getElementById("depenseNumber")
let grandTotal = document.getElementById("grandTotal")

//variable globale.0
let subGain = 0;
let subDepense = 0;
let GrandTotal = 0;

//tableau pour enregistrer les entrées utilisateur
let entryFieldGain = [];
let entryFieldDepense = [];







document.addEventListener("DOMContentLoaded", function () {
    let currentField = null;
    //focus par défaut sur le texte de gain
    gainText.focus();
    //focalise sur les entrées de gain

    listenerEvent(gainText, gainMontant, entryFieldGain, listGain)
    listenerEvent(depenseText, depenseMontant, entryFieldDepense, listDepense)


    //ajoute un écouteur de touche pressée sur le document entier  
    document.addEventListener("keydown", (e) => {
        //si la touche pressée est &, les entrées sont focalisées sur les gain
        if (e.key === "&") {
       
            gainText.focus();
            e.preventDefault();
            currentField = "gain";
            reinitializeCurrentField(depenseText, depenseMontant, entryFieldDepense)
            reinitializeCurrentField(gainText, gainMontant, entryFieldGain)
            // si la touche pressée est é, les entrées sont focalisées sur les dépense
        } if (e.key === "é") {

            depenseText.focus();
            e.preventDefault();
            currentField = "depense"
            reinitializeCurrentField(depenseText, depenseMontant, entryFieldDepense)
            reinitializeCurrentField(gainText, gainMontant, entryFieldGain)

        }

    })

    //écouteur de touche pressées sur le champs text gain



});
const listenerEvent = (_currentText, _currentMontant, _currentTab, _currentList) => {

    _currentText.addEventListener("keydown", (e) => {

        //si la touche pressée est Tab est que la longeur du texte est > 3, le gain texte est poussé
        if (verifyTextLength(e, _currentText, "Tab")) {
            _currentTab.push(_currentText.value)
          
        }
    })
//Si l'utilisateur accède au champs Montant avec le click de la souris
    _currentMontant.addEventListener("click",()=>{

        if(_currentTab.length===0){

            _currentTab.push(_currentText.value)
        }
    })
    _currentMontant.addEventListener("keydown", (e) => {


        if (verifyTextLength(e, _currentMontant, "Enter")) {


            _currentTab.push(_currentMontant.value)


        }
        if (e.key === "Enter") {
            genererDivEntry(_currentTab, _currentList, _currentText);
          reinitializeCurrentField(_currentText, _currentMontant, _currentTab)


        }



    })


}

const verifyTextLength = (e, current, _key) => {
    if (e.key === _key || e.key==="click") {

        if (current.value.length < 1 || current.value == "" || current.value == 0) {

            e.preventDefault()
            current.focus();


        } else {

            return true
        }
    }

    return false;
}

const genererDivEntry = (tableauCourrant, listCourrante, _currtText) => {

    if (tableauCourrant.length < 1) {
        return;
    }
    let enregistrement = document.createElement("div");
    enregistrement.classList.add("enregistrement");

    let _currentText = document.createElement("div")
    let _currentMontant = document.createElement("div");
    let annulerDiv = document.createElement("div")
    let imageAnnuler = document.createElement("img")

    imageAnnuler.src = "./poubelle.PNG";
    annulerDiv.appendChild(imageAnnuler)
    annulerDiv.classList.add("annulerDiv")

    annulerDiv.addEventListener("click", () => {
        if (listCourrante.id === "listGain") {

let test = annulerDiv.parentElement.children;

 subGain -= parseFloat(annulerDiv.parentElement.childNodes[1].innerHTML);
            gainNumber.textContent = subGain.toString();
            grandTotal.textContent = (parseFloat(subGain) - parseFloat(subDepense)).toString()
        } else if (listCourrante.id === "listDepense") {


            subDepense -= parseFloat(annulerDiv.parentElement.childNodes[1].innerHTML);
            depenseNumber.textContent = subDepense.toString();
            grandTotal.textContent = (parseFloat(subGain) - parseFloat(subDepense)).toString()
        }
        annulerDiv.parentElement.remove()
    })

    _currentText.textContent = tableauCourrant[0];
    _currentMontant.textContent = tableauCourrant[1];



    enregistrement.appendChild(_currentText);
    enregistrement.appendChild(_currentMontant)
    enregistrement.appendChild(annulerDiv);

    listCourrante.appendChild(enregistrement)



    if (listCourrante.id === "listGain") {
        subGain += parseFloat(tableauCourrant[1]);
        gainNumber.textContent = subGain.toString();


    } else if (listCourrante.id === "listDepense") {

        subDepense += parseFloat(tableauCourrant[1]);
        depenseNumber.textContent = subDepense.toString();

    }
    grandTotal.textContent = (parseFloat(subGain) - parseFloat(subDepense)).toString()
}


const reinitializeCurrentField = (_currentText, _currentMontant, _currentTable) => {

    _currentText.focus();
    _currentTable.length = 0;
    _currentText.value = ""
    _currentMontant.value = ""


}


