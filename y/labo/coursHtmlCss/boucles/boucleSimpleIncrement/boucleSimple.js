
let img = document.createElement("img");
img.setAttribute("src","boucleSimpleIncrement.PNG")
document.body.appendChild(img)

let H  = document.createElement("h1");
H.textContent = "0"
document.body.appendChild(H)

let buttonRefresh = document.createElement("div");
buttonRefresh.classList.add("refreshButton")
buttonRefresh.textContent = "Recommencer";
buttonRefresh.addEventListener("click",()=>{

    location.reload()
})

document.body.appendChild(buttonRefresh)

const tabOfSquare = document.querySelectorAll(".square");

let i=0;
let inter = setInterval(()=>{

   tabOfSquare[i].style.backgroundColor = "red";
   H.textContent = "i = "+i.toString()
    i+=2;

    if (i>=tabOfSquare.length){

clearInterval(inter)
    }
},1000)

