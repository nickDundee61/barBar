


//récupére la grille 
let grid = document.getElementById("grid")
//tableau d'enregistrement des cases 
let board;

let userTurn = true;
let computerTurn = false;
let boardRecord = [];

let sign = "X";
let winner=""
document.addEventListener("DOMContentLoaded", () => {

    setBoardRecord();
    drawGrid();
    const startingPlayer = chooseStartingPlayer();
if (startingPlayer === 0) {
    userTurn = true;
    console.log("Le joueur commence.");
} else {
    userTurn = false;
    computerMove(); // Computer starts the game.
    console.log("Computer commence.");
}

//ajoute la fonction qui écoute les éléments pour le joueur
    eventListener();



})


const setBoardRecord = () => {



    for (let i = 0; i < 3; i++) {


        for (let j = 0; j < 3; j++) {
            let obj = {
                move: "",
                position: ""
            }
            obj.position = i.toString() + j.toString()

            boardRecord.push(obj)
        }
    }

}


const drawGrid = () => {

    for (let i = 0; i < 3; i++) {


        for (let j = 0; j < 3; j++) {
            let caseMorpion = document.createElement("div");
            caseMorpion.classList.add("case");
            caseMorpion.id = i.toString() + j.toString();
            grid.appendChild(caseMorpion)

        }

    }
    board = document.querySelectorAll(".case");
    

}




const eventListener = () => {
    //parcours la grille 
    for (let i of board) {
     //ajoute un écouteur d'événement à chaque élément de la grille
        i.addEventListener("click", () => {
            //s'il y a un gagnant, le tableau ne peut plus être cliqué
            if(winner!==""){
                return;
            }
            //si le joueur clique sur une case déjà occupée, le jeu ne peut pas continuer
            if (boardRecord.find(square => square.position === i.id && square.move !== "")) {
                return; // If the square is already occupied, return early
            }
            //si c'est le tour du joueur
            if (userTurn) {
                //ajoute la lettre "X"
                i.textContent = sign;
                //enregistre la case choisie
                recordMove(i.id, "player");
                //vérifie s'il y a un gagnant
                if (checkForWin("player")) {
                 return;
                 //match nul? 
                } else if (checkForDraw()) {
          return;
          //sinon tour du computer
                } else {
                    userTurn = false;
                    computerMove();
                }
            }
        });
    }
};


const recordMove = (position, player) => {
    // Find the corresponding object in boardRecord
    const square = boardRecord.find((square) => square.position === position);

    // Check if the square exists and is empty
    
        square.move = player;
    
};



const computerMove = () => {
if(winner!==""){
    return;
}
 //construit un tableau avec les éléments de boarRecord dont la propriété move est vide
        const emptySquares = boardRecord.filter((square) => square.move === '');
        if (emptySquares.length > 0) {
            //génère un nombre aléatoire entier compris dans la longeur du tableau d'empty
            const randomSquare = emptySquares[Math.floor(Math.random() * emptySquares.length)];
            //obtient l'élément par son id
            const squareElement = document.getElementById(randomSquare.position);
            //ajout "0" à la case
            squareElement.textContent = "O";
            //enregistre le mouvement
            recordMove(randomSquare.position, "computer");
            userTurn = true;
        }
        if (checkForWin("computer")) {
           return;

        } else if (checkForDraw()) {
            return;
        }
    
};

const checkForWin = (player) => {
    //combinaisons gagnantes possible
    const winningCombinations = [
        // Rows
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Columns
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonals
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        //destructuration de "combinaison"
        const [a, b, c] = combination;
        //exemple : POUR LA PREMIERE COMBI : si  boardRecord[0].move ==="player" ET boardRecord[1].move ==="player" ET boardRecord[2].move ==="player"  PLAYER GAGNE
        if (
            boardRecord[a].move === player &&
            boardRecord[b].move === player &&
            boardRecord[c].move === player
        ) {
            console.log(player, " Wins")
            winner=player;
       // Player has won
        }
    }

    return false; // No winner yet
};

const checkForDraw = () => {
    // Dès que la boucle trouvera un square.move ==="", cela voudra dire qu'il reste des cases à jouer, la fonction renvoie immédiatement false
    for (const square of boardRecord) {
        if (square.move === '') {
            return false; 
        }
    }
if(winner ===""){

    console.log("MATCH NUL")
}
    
      return true; // All squares are filled, and there's no winner

  
};

const chooseStartingPlayer = () => {
    return Math.floor(Math.random() * 2);
};

// Determine the starting player
