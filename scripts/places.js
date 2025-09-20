var tempC = 5; 
var speed = 20; 


function calculateWindChill(tempC, speed) {
    if (tempC > 10 || speed < 4.8) {
        return "N/A";
    } else {
        let windChill = 13.12 + 0.6215 * tempC - 11.37 * Math.pow(speed, 0.16) + 0.3965 * tempC * Math.pow(speed, 0.16);
        return windChill.toFixed(2) + " °C";
    }
}

document.getElementById("temperature").textContent = tempC;
document.getElementById("conditions").textContent = "Cloudy";
document.getElementById("windSpeed").textContent = speed;
document.getElementById("windChill").textContent = calculateWindChill(tempC, speed);
