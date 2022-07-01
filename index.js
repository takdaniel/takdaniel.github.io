let daniPoints = document.getElementById("danipoints")

let zsaniPoints = document.getElementById("zsanipoints")

let pointOfDani = 0

let pointOfZsani = 0


function increaseDaniPoints() {
    pointOfDani = pointOfDani + 1
    daniPoints.innerText = pointOfDani
}

function increaseZsaniPoints() {
    pointOfZsani = pointOfZsani + 1
    zsaniPoints.innerText = pointOfZsani
}

function decreaseDaniPoints() {
    pointOfDani = pointOfDani - 1
    daniPoints.innerText = pointOfDani
}

function decreaseZsaniPoints() {
    pointOfZsani = pointOfZsani - 1
    zsaniPoints.innerText = pointOfZsani
}