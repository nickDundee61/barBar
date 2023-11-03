

function sayHello(){

    alert("hello")
}

let test = document.getElementById("test");

function ecouterElement(element, callback){
element.addEventListener("click",callback)

}


ecouterElement(test,sayHello)