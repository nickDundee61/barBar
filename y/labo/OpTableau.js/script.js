let values = [];
let arrayFunction =[]

const returnMulti = (value)=>{
    let randFactor = Math.floor(Math.random()*5)
    value = value.map(e =>e*randFactor)
    let text = `let nouveauTableau = tableauOrignal.map(e => e * ${randFactor})`
    return [value,text,randFactor]
 }
 arrayFunction.push(returnMulti)
 
 const returnPlus = (value)=>{
    let randFactor = Math.floor(Math.random()*5)
    value = value.map(e =>e+randFactor)
    let text = `let nouveauTableau = tableauOrignal.map(e => e + ${randFactor})`
    return [value,text,randFactor]
 }
 arrayFunction.push(returnPlus)

 const returnMinus = (value)=>{
    let randFactor = Math.floor(Math.random()*5)
    value = value.map(e =>e-randFactor)
    let text = `let nouveauTableau = tableauOrignal.map(e => e - ${randFactor})`
    return [value,text,randFactor]
 }
 arrayFunction.push(returnMinus)

 const returnSup = (value)=>{
    let rand = Math.floor(Math.random()* value.length)
    let randFactor = value[rand]
    let text = `let nouveauTableau = tableauOrignal.map(e => e > ${randFactor})`
    value = value.map(e =>e>randFactor)

    return [value,text,randFactor]
 }
 arrayFunction.push(returnSup)

 const returnfilter = (value)=>{
    let rand = Math.floor(Math.random()* value.length)
    let randFactor = value[rand]
    let text = `let nouveauTableau = tableauOrignal.filter(e => e > ${randFactor})`
    value = value.filter(e =>e>randFactor)

    return [value,text,randFactor]
 }
 arrayFunction.push(returnfilter)

 const returnSort = (value)=>{

    let randFactor = ""
    let text = `let nouveauTableau = tableauOrignal.sort((a, b) => a - b)`
    value =value.sort((a, b) => a - b);

    return [value,text,randFactor]
 }
 arrayFunction.push(returnSort)

 const returnSortReverse = (value)=>{

    let randFactor = ""
    let text = `let nouveauTableau = tableauOrignal.sort((a, b) => b-a) ; tableauOriginal.reverse()`
  value =value.sort((a, b) => b - a);

    return [value,text,randFactor]
 }
 arrayFunction.push(returnSortReverse)

 const returnInclude = (value)=>{
    let randArray=[]
    let rand = Math.floor(Math.random()* value.length)
randArray.push(value[rand])

    let randFactor = value[rand]+5
    randArray.push(randFactor)
    
    let sortRand = Math.floor(Math.random()* randArray.length)
    let text = `let nouveauTableau = tableauOrignal.include(${randArray[sortRand]})`
    value = value.includes(randArray[sortRand])
   

    return [value,text,randArray[sortRand]]
 }
 arrayFunction.push(returnInclude)

const originalContainer = document.createElement("div");
originalContainer.id = "original-container";

const mappedContainer = document.createElement("div");
mappedContainer.id = "mapped-container"

const formula = document.createElement("div")
formula.classList.add("formula")
const parameter = document.createElement("div")


const tableauOrignal =document.createElement("h3")
tableauOrignal.textContent = "Tableau original"

const nouveauTableau =document.createElement("h3")
nouveauTableau.textContent = "Nouveau tableau"


const goButton = document.createElement("div");
goButton.id = "go-button"
goButton.textContent = "Go"
goButton.classList.add("goButton")
goButton.addEventListener("click", generateSquares);

document.body.appendChild(tableauOrignal)
document.body.appendChild(originalContainer)
document.body.appendChild(nouveauTableau)
document.body.appendChild(mappedContainer)
document.body.appendChild(goButton)
document.body.appendChild(parameter)
document.body.appendChild(formula)

// Function to generate squares based on an array of values
function generateSquares() {
    deleteContainer(originalContainer, mappedContainer)
    let rand = Math.floor(Math.random() * 10 )+3

    for (let i = 0; i < rand; i++) {
        let newRand = Math.floor(Math.random() * 100)
        values.push(newRand)
    }


    // Clear the existing squares in both containers
    originalContainer.innerHTML = "";
    mappedContainer.innerHTML = "";

    // Create and display squares for the original array

    values.forEach(value => {
        const originalSquare = document.createElement("div");
        originalSquare.classList.add("square");
        originalSquare.textContent = value;
        originalContainer.appendChild(originalSquare);
    });
    // Apply the map function to double the values
    let randFormula = Math.floor(Math.random()* arrayFunction.length)

    const [newValues,text,rd] = arrayFunction[randFormula](values)
if(typeof newValues !=="boolean"){

  // Create and display new squares based on the mapped values
  newValues.forEach(value => {
    const mappedSquare = document.createElement("div");
    mappedSquare.classList.add("square");
    mappedSquare.textContent = value;
    mappedContainer.appendChild(mappedSquare);
});

// Update the values array
values = newValues;
parameter.textContent = "PARAMETRE : "+rd.toString();
}else{

    parameter.textContent =newValues;
}
  
    formula.textContent = text
  


}

// Add a click event listener to the "Go" button
const deleteContainer = (container, containerTwo) => {

    if (container.children.length > 0) {
        for (let i of container.children) {

            i.remove()

        }

    }

    if (containerTwo.children.length > 0) {
        for (let i of containerTwo.children) {

            i.remove()
        }

    }
    values =[]
}

generateSquares()

