let progression = 0;


let arborescence = {

}


 
let affichage = document.getElementById("affichage");


let imageExemple = document.getElementById("imageExemple");


let text = document.getElementById("text")

//récupére TOUTES les <div> et les stocke dans un tableau. 
let toutesLesDiv = document.querySelectorAll("div");
//itération du tableau et changement de la couleur de fond pour toutes les <div>



function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function createContainer(content, backgroundColor) {
    let container = document.createElement("div");
    container.classList.add("container");
    container.setAttribute("style", `background-color: ${backgroundColor}`);
    container.textContent = content;
    return container;
}

function createInsideDiv(content, backgroundColor) {
    let insideDiv = document.createElement("div");
    insideDiv.classList.add("insideDiv");
    insideDiv.setAttribute("style", `background-color: ${backgroundColor}`);
    insideDiv.textContent = content;
    insideDiv.id = content;
    return insideDiv;
}

function clearContainers() {
    while (containerStack.length > 0) {
        let container = containerStack.pop();
        grid.removeChild(container);
    }
}
function clearContainersUpTo(targetContainer) {
    while (containerStack.length > 0 && containerStack[containerStack.length - 1] !== targetContainer) {
        let container = containerStack.pop();
        grid.removeChild(container);
    }
}



const setImageAndText = (prop, obj, innerDiv) => {

    if (prop === "exemple") {

        innerDiv.remove()
        for (let i of obj[prop]) {

            let img = document.createElement("img");
            img.setAttribute("src", i);
            affichage.appendChild(img)
        }

    }

    if (prop === "topo") {
      
        innerDiv.remove()

        for (let i of obj[prop]) {

            let text = document.createElement("div");
            text.textContent = i
            affichage.appendChild(text)
            let br = document.createElement("br");
            affichage.appendChild(br)
        }



    }
    if(prop==="link"){

        innerDiv.remove()
        for (let i of obj[prop]) {
let link = document.createElement("div");
link.textContent = "INFO";
link.classList.add("infoStyle");
link.addEventListener("click",()=>{
    window.open(i)

})
affichage.appendChild(link)
        }
     
    }


}
const clearContent = () => {

    while (affichage.firstChild) {
        affichage.removeChild(affichage.firstChild);
    }
}
let containerStack = [];







document.addEventListener("DOMContentLoaded", () => {


    let window = createContainer("window", "#C573D3");
    grid.appendChild(window);
    containerStack.push(window);

    for (let i in arborescence) {
        for (let j in arborescence[i]) {
            let element = createInsideDiv(j, "#737AD3");
            window.appendChild(element);

            element.addEventListener("click", () => {
                clearContent();

                clearContainersUpTo(window);

                element.style.border = "2px solid green";

                let doc = createContainer(j, "#73D3D0");
                grid.appendChild(doc);
                containerStack.push(doc);

                for (let k in arborescence[i][j]) {
                    let elDoc = createInsideDiv(k, "#39D035");

                    setImageAndText(k, arborescence[i][j], elDoc)
                    doc.appendChild(elDoc);

                    elDoc.addEventListener("click", () => {
                        // Clear containers beyond this point
                  
                        clearContent()
                        clearContainersUpTo(doc);

                        elDoc.style.border = "2px solid green";

                        let content3 = createContainer(k, "#E3E61E");
                        grid.appendChild(content3);
                        containerStack.push(content3);

                        for (let l in arborescence[i][j][k]) {
                            let elContent3 = createInsideDiv(l, "#F0B27A");

                        
                            content3.appendChild(elContent3);
                            setImageAndText(l, arborescence[i][j][k], elContent3)
                            elContent3.addEventListener("click", () => {
                                // Clear containers beyond this point
                                clearContent()
                                clearContainersUpTo(content3);

                                elContent3.style.border = "2px solid green";

                                let content4 = createContainer(l, "#E46B2A");
                                grid.appendChild(content4);
                                containerStack.push(content4);

                                for (let m in arborescence[i][j][k][l]) {
                                    let elContent4 = createInsideDiv(m, "#F0B27A");
                                    content4.appendChild(elContent4);

                                    setImageAndText(m, arborescence[i][j][k][l], elContent4)

                                    elContent4.addEventListener("click", () => {
                                        clearContent()
                                        // Clear containers beyond this point



                                        clearContainersUpTo(content4);

                                        elContent4.style.border = "2px solid green";

                                        let content5 = createContainer(m, "#EC7063");
                                        grid.appendChild(content5);
                                        containerStack.push(content5);

                                        for (let n in arborescence[i][j][k][l][m]) {
                                            let elContent5 = createInsideDiv(n, "#F0B27A");
                                            content5.appendChild(elContent5);
                                            setImageAndText(n, arborescence[i][j][k][l][m], elContent5)
                                            elContent5.addEventListener("click", () => {
                                                clearContent()
                                                // Clear containers beyond this point

                                                clearContainersUpTo(content5);

                                                elContent5.style.border = "2px solid green";

                                                let content6 = createContainer(n, "#EC7063");
                                                grid.appendChild(content6);
                                                containerStack.push(content6);

                                                for (let o in arborescence[i][j][k][l][m][n]) {
                                                    let elContent6 = createInsideDiv(o, "#F0B27A");
                                                    content6.appendChild(elContent6);
                                                    setImageAndText(o, arborescence[i][j][k][l][m][n], elContent6)
                                                    elContent6.addEventListener("click", () => {
                                                        clearContent()
                                                        clearContainersUpTo(content6);
                                                        elContent6.style.border = "2px solid green";

                                                        let content7 = createContainer(n, "#EC7063");
                                                        grid.appendChild(content7);
                                                        containerStack.push(content7);

                                                        for (let p in arborescence[i][j][k][l][m][n][o]) {


                                                            let elContent7 = createInsideDiv(p, "#F0B27A");
                                                            content7.appendChild(elContent7);
                                                            setImageAndText(p, arborescence[i][j][k][l][m][n][o], elContent7)

                                                            elContent7.addEventListener("click", () => {
                                                                clearContent()
                                                                // Clear containers beyond this point
                                                                clearContainersUpTo(content7);
                                                                elContent7.style.border = "2px solid green";

                                                                let content8 = createContainer(p, "##B01EE2");
                                                                grid.appendChild(content8);
                                                                containerStack.push(content8);

                                                                for (let q in arborescence[i][j][k][l][m][n][o][p]) {
                                                                    let elContent8 = createInsideDiv(q, "#YOUR_COLOR");
                                                                    content8.appendChild(elContent8);


                                                                 
                                                                }
                                                            });
                                                        }

                                                    })
                                                  
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    }
});






