let currentLight = 0;
const lights = document.querySelectorAll(".light");
let intervalId;

function changeLight() {
    lights.forEach((light, index) => {
        if (index === currentLight) {
            light.classList.add("active");
        } else {
            light.classList.remove("active");
        }
    });
    
    currentLight = (currentLight + 1) % lights.length;
}

function startTrafficLight() {
    intervalId = setInterval(changeLight, 1000); // Start the light cycle
    document.getElementById("startButton").disabled = true; // Disable the Start button
    document.getElementById("stopButton").disabled = false; // Enable the Stop button
}

function stopTrafficLight() {
    clearInterval(intervalId); // Stop the light cycle
    document.getElementById("startButton").disabled = false; // Enable the Start button
    document.getElementById("stopButton").disabled = true; // Disable the Stop button
}
