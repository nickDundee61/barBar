let grid = document.getElementById("grid")

let buttonRefresh = document.createElement("div");
buttonRefresh.classList.add("refreshButton")
buttonRefresh.textContent = "Recommencer";

let indexTrack = document.getElementById("indexTrack");


let iTrack = document.createElement("div");
iTrack.setAttribute("style","color:red")

let jTrack = document.createElement("div");
jTrack.setAttribute("style","color:lime")

indexTrack.appendChild(iTrack);
indexTrack.appendChild(jTrack)
buttonRefresh.addEventListener("click", () => {

    location.reload()
})

document.body.appendChild(buttonRefresh)

let tab = [["A", "0","0"], ["A", "1","0"], ["A", "2","0"], ["B", "0","1"], ["B", "1","1"], ["B", "2","1"], ["C", "0","2"], ["C", "1","2"], ["C", "2","2"]]

let i = 0;
let j ="";
let iString="";

let inter = setInterval(() => {



    if (i > 8) {

        clearInterval(inter)
    } else {
        iTrack.textContent ="index i = "+tab[i][2]
        jTrack.textContent ="index j = "+tab[i][1]
        let content = document.createElement("div");
        content.classList.add("content")

        let squareI = document.createElement("div");
        squareI.classList.add("innerContentX")
        squareI.textContent = tab[i][0]

        let squareJ = document.createElement("div")
        squareJ.classList.add("innerContentY")
        squareJ.textContent = tab[i][1]

        content.appendChild(squareI);
        content.appendChild(squareJ)
        grid.appendChild(content)
        i++;
    }


}, 1000)

let content = document.createElement("div");
content.classList.add("content")






/*let tabI = ["A", "B", "C"];
let tabJ = ["0", "1", "2"]
for (let i = 0; i < 3; i++) {

    let cercleI = document.createElement("div");
    cercleI.classList.add("innerContentX")
    cercleI.textContent = tabI[i]

    for (let j = 0; j < 3; j++) {

        let cercleJ = document.createElement("div")
        cercleJ.classList.add("innerContentY")
        cercleJ.textContent = tabJ[j];

        content.appendChild(cercleI);
        content.appendChild(cercleJ)
        grid.appendChild(content)

    }
}*/
