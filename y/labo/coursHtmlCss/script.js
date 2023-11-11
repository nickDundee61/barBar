 async function fetchWeather(value) {
        
        
           
         
            const options = {
                method: 'GET',
                url: 'https://weatherapi-com.p.rapidapi.com/current.json',
                params: { q: value, },
                headers: {
                    'X-RapidAPI-Key': '9743f1ca22mshe797688c5fda211p1dbb81jsnf6773c1d19b2',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                console.log(response)
         

                let doc = document.createElement("div");
                let temp = response.data.current.feelslike_c + " C°"
                doc.textContent = response.data.location.name+ " "+temp;
      
                let img = document.createElement("img");
                img.setAttribute("src",response.data.current.condition.icon)
                document.body.appendChild(img)
                document.body.appendChild(doc)
               
            } catch (error) {
                console.error(error);
            }
        }
        let goButton = document.getElementById("but");
        let cityName = document.getElementById("city");
        goButton.addEventListener("click", (e)=>{
e.preventDefault()

value = cityName.value;
fetchWeather(value)

})
const timeDiv = document.createElement("div");
timeDiv.id = 'timer';
document.body.appendChild(timeDiv)

// Set the countdown time in seconds (30 minutes)
let countdownTime = 30 * 60;

// Get the timer element
const timerElement = document.getElementById('timer');

// Update the countdown timer
function updateTimer() {
  const minutes = Math.floor(countdownTime / 60);
  const seconds = countdownTime % 60;

  // Display the timer in the format MM:SS
  timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  // Check if the countdown has reached zero
  if (countdownTime <= 0) {
    clearInterval(timerInterval); // Stop the timer
    timerElement.textContent = 'Countdown Complete!';
  } else {
    countdownTime--; // Decrement the countdown time
  }
}


// Update the timer every second (1000 milliseconds)
const timerInterval = setInterval(updateTimer, 1000);

// You can stop the countdown manually if needed:
// clearInterval(timerInterval);