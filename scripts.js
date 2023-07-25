// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {

/* CREATE OBJECTS */
let altitute = 0
let rocketPosX = 0;
let rocketPosY = 0;

// Object needed for TODO #1
const takeOff = document.getElementById("takeoff");

// Object needed for TODO #2
const land = document.getElementById("landing");

// Object needed for TODO #3
const abortMission = document.getElementById("missionAbort");

// Object needed for TODO #4
const rocket = document.getElementById("rocket")




/* EVENT LISTENERS */

takeOff.addEventListener("click", function() {
    let response = confirm("Confirm that the shuttle is ready for takeoff.");
    if (response === true) {
    document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
    document.getElementById("shuttleBackground").style.backgroundColor = "blue";
    altitute = 10000
    document.getElementById("spaceShuttleHeight").innerHTML = altitute;
    
    }
});

land.addEventListener("click", function() {
    alert("The shuttle is landing. Landing gear engaged.");
    document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
    document.getElementById("shuttleBackground").style.backgroundColor = "";
    altitute = 0
    document.getElementById("spaceShuttleHeight").innerHTML = altitute;
});

abortMission.addEventListener("click", function() {
    let abort = confirm("Confirm that you want to abort the mission.");
    if (abort === true) {
        document.getElementById("flightStatus").innerHTML = "Mission aborted.";
        document.getElementById("shuttleBackground").style.backgroundColor = "";
        altitute = 0;
        document.getElementById("spaceShuttleHeight").innerHTML = altitute;   
    }
});

document.addEventListener("click", function(event) {
    if (event.target.id === "left") {
        rocketPosX -= 10;
        rocket.style.marginLeft = rocketPosX + 'px'
    }
    if (event.target.id === "right") {
        rocketPosX += 10;
        rocket.style.marginLeft = rocketPosX + 'px'
    }
    if (event.target.id === "up") {
        rocketPosY += 10;
        rocket.style.marginBottom = rocketPosY + 'px'
        altitute += 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = altitute
    }
    if (event.target.id === "down") {
        rocketPosY -= 10;
        rocket.style.marginBottom = rocketPosY + 'px'
        altitute -= 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = altitute
    }
})


// BONUS MISSION: If you are done with the above and have some time left during class, there are a few problems that you can tackle for a bonus mission.

// Keep the rocket from flying off of the background.
// Return the rocket to its original position on the background when it has been landed or the mission was aborted.

});
