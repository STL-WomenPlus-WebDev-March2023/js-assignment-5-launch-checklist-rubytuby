// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let div = document.getElementById("missionTarget");
    div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `;
}

function validateInput(testInput) {
    let validateOutput = ""
    if (testInput === "") {
        validateOutput = "Empty"
    }else if (isNaN(testInput)) {
        validateOutput = "Not a Number"
    }else {
        validateOutput = "Is a Number"
    }; 
    return validateOutput;
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let launchStatus = document.getElementById("launchStatus");
    
    let numArr = [fuelLevel, cargoLevel]
    for (let i = 0; i < numArr.length; i++){
        if (validateInput(numArr[i]) === "Is a Number") {
            numArr.splice([i], 1, Number(numArr[i]))
        }
    };
    
    list.style.visibility = "visible";
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready to launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready to launch`;
    
    if (numArr[0] < 10000 && numArr[1] > 10000) {
        launchStatus.style.color = "#C7254E";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
    } else if (numArr[0] < 10000) {
        launchStatus.style.color = "#C7254E"
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
    } else if (numArr[1] > 10000) {
        launchStatus.style.color = "#C7254E";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
    } else {
        launchStatus.style.color = "#419F6A";
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
    };
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            
           if (response.status >= 400) {
            throw new Error ("Bad Response");
           } else {
            return response.json();
           }

        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let selection = Math.floor(Math.random()*planets.length);
    return planets[selection];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
