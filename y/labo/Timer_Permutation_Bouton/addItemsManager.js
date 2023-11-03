document.addEventListener("DOMContentLoaded", () => {
    let grandTotalResult = 0;

    const addButton = document.getElementById("addButton");
    const productName = document.getElementById("productName");
    const productPrice = document.getElementById("productPrice");
    const carte = document.getElementById("carte");
    const total = document.getElementById("total");
    const grandTotal = document.getElementById("grandTotal");
    const valider = document.getElementById("valider")

 

    addButton.addEventListener("click", ()=> {
        const newProduct = document.createElement("div");
        newProduct.classList.add("carteItem");
        const prodName = document.createElement("div");
        const prodPrice = document.createElement("div");
        const deleteItemButton = document.createElement("button");

        deleteItemButton.textContent = "X";
        deleteItemButton.classList.add("deleteButton");

        prodName.textContent = productName.value;
        prodPrice.textContent = productPrice.value.toString();

        newProduct.appendChild(prodName);
        newProduct.appendChild(prodPrice);
        newProduct.appendChild(deleteItemButton);

        newProduct.addEventListener("click", (event) => {
            const name = prodName.textContent;
            const price = parseInt(prodPrice.textContent);



            let subTotal = document.createElement("div");
            subTotal.classList.add("carteItem")
            let order = { name: name, price: price };

            grandTotalResult += price
            grandTotal.textContent = "TOTAL:" + grandTotalResult.toString()


            subTotal.textContent = name + " " + price;
            subTotal.classList.add("total");

            const deleteItemButton = document.createElement("button");

            deleteItemButton.textContent = "X";
            deleteItemButton.classList.add("deleteButton");
            subTotal.appendChild(deleteItemButton)
            subTotal.addEventListener("click", (event) => {

                event.stopPropagation();

                const parentDiv = event.target.parentElement;
                grandTotalResult -= price;

                grandTotal.textContent = "TOTAL" + grandTotalResult.toString()
                parentDiv.remove();
            });

            
            total.appendChild(subTotal);
        });

       
        deleteItemButton.addEventListener("click", (event) => {
    
            event.stopPropagation();

            const parentDiv = event.target.parentElement;
            parentDiv.remove();



        });

        carte.appendChild(newProduct);
        productName.value = "";
        productPrice.value = "";
    });

    
 const A = document.getElementById("A");
 const B = document.getElementById("B");
 const C = document.getElementById("C");


 A.addEventListener("click",()=>{

    

 })



});

