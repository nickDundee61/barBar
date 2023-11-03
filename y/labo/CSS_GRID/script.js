const addRowButton = document.getElementById("add-row-button");
const gridContainer = document.querySelector('.grid');

addRowButton.addEventListener('click', () => {
  const newRow = document.createElement('div');
newRow.classList.add("testInlineBlock")
  newRow.textContent = 'New Item'; // You can set any content you want for the new row.

  gridContainer.appendChild(newRow);
});

let tab=[3,10,17];

let test = tab.filter((e)=>{
return e > 5;
})




























/*fetch("API_URL")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    // Handle the data here
    console.log(data);
  })
  .catch(error => {
    // Handle errors here
    console.error("There was a problem with the fetch operation:", error);
  });

  */