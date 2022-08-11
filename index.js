const matchEl = document.getElementById("match-el")
const daniPlus = document.getElementById("increase-btn-dani")
const daniMinus = document.getElementById("decrease-btn-dani")
const zsaniPlus = document.getElementById("increase-btn-zsani")
const zsaniMinus = document.getElementById("decrease-btn-zsani")

let daniPoints = 0
let zsaniPoints = 0


daniPlus.addEventListener('click', function(){
    daniPoints = daniPoints + 1
    localStorage.setItem("daniPontok", JSON.stringify(daniPoints) )
    window.location.reload()
})

daniMinus.addEventListener('click', function(){
    daniPoints = daniPoints - 1 
    localStorage.setItem("daniPontok", JSON.stringify(daniPoints) )
    window.location.reload()
})

daniPoints = JSON.parse(localStorage.getItem("daniPontok") )

zsaniPlus.addEventListener('click', function(){
    zsaniPoints = zsaniPoints + 1 
    localStorage.setItem("zsaniPontok", JSON.stringify(zsaniPoints))
    window.location.reload()
})

zsaniMinus.addEventListener('click', function(){
    zsaniPoints = zsaniPoints - 1
    localStorage.setItem("zsaniPontok", JSON.stringify(zsaniPoints) )
    window.location.reload()
})

zsaniPoints = JSON.parse(localStorage.getItem("zsaniPontok") )

let message = ""
if(zsaniPoints > daniPoints){
    message = "Zsani áll nyerésre!"
} else if(zsaniPoints === daniPoints){
    message = "Jelenleg döntetlen az állás!"
} else{
    message = "Dani áll nyerésre!"
}

matchEl.innerHTML = `Jelenlegi állás: ${daniPoints} - ${zsaniPoints} <br> ${message}`