// Write your JavaScript code here!
window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let pilotInput = document.querySelector("input[name=pilotName]");
        let copilotInput = document.querySelector("input[name=copilotName]");
        let fuelInput = document.querySelector("input[name=fuelLevel]");
        let cargoInput = document.querySelector("input[name=cargoMass]")
        if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
            alert("All fields are required.")
            event.preventDefault();
        };
        if (Number.isNaN(pilotInput.value) || Number.isNaN(copilotInput.value) || isNaN(fuelInput.value) || isNaN(cargoInput)) {
            alert("All fields must have the required input type.")
            event.preventDefault()
        };
    })
})