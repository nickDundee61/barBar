
document.addEventListener("DOMContentLoaded", () => {
  const sign = document.getElementById("sign");
  const interuptor = document.getElementById("interuptor");
  const interuptorCloseSign = document.getElementById("interuptorCloseSign");

  
  let isStopped = true;
  let isClosedSign =true;
  let intervalId; // Define intervalId outside of the event listener
//on click l'enseigne clignote ou s'arrête
  interuptor.addEventListener("click", () => {
    if (isStopped) {
        interuptor.innerText ="X"
      isStopped = false;
      intervalId = setInterval(() => {
        sign.classList.toggle("image-active");
      }, 1000);
    } else {
      clearInterval(intervalId);
      isStopped = true;
      interuptor.innerText ="O"
    }
  });

  //intervertit l'image de l'enseigne

  interuptorCloseSign.addEventListener("click", () => {
    if (isClosedSign) {
        interuptorCloseSign.innerText ="X"
        sign.src ="../../closed.PNG"
        isClosedSign = false;
    
        
   
    } else {
    
        isClosedSign = true;
        interuptorCloseSign.innerText ="O"
        sign.src ="../../open_sign.PNG"
    }
  });

});