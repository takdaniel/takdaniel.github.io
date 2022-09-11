const matchEl = document.getElementById("match-el")
const daniPlus = document.getElementById("increase-btn-dani")
const daniMinus = document.getElementById("decrease-btn-dani")
const zsaniPlus = document.getElementById("increase-btn-zsani")
const zsaniMinus = document.getElementById("decrease-btn-zsani")
const winnerEl = document.getElementById("winner-el")
const zsaniPrize = ["valamilyen kaja", "egy masszázs", "egy turizás", "egy üveg kóla", "egy doboz heets", "fejmasszázs", "2 doboz energiaital"]
const daniPrize = ["szopás", "ciciszex", "popószex", "masszázs", "egy doboz cigi", "egy üveg kóla", "footjob", "2 doboz energiaital"]
const resetBtn = document.getElementById("reset-btn")
const ruleInput = document.getElementById("rule-input")
const ruleBtn = document.getElementById("rule-btn")
const ruleEl = document.getElementById("rules-render")
const olEl = document.getElementById("ol-el")
const deleteBtn = document.getElementById("delete-btn")


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

let announcement = ""
if (zsaniPoints === 20) {
    announcement = "Zsani nyert! Nyereménye "
    randomIndex = Math.floor(Math.random() * zsaniPrize.length)
    winnerEl.innerHTML = `${announcement} ${zsaniPrize[randomIndex]}.`
    daniMinus.disabled = true
    daniPlus.disabled = true
    zsaniMinus.disabled = true
    zsaniPlus.disabled = true
    matchEl.innerHTML = "Verseny vége."
} else if (daniPoints === 20) {
    announcement = "Dani nyert! Nyereménye "
    randomIndex = Math.floor(Math.random() * daniPrize.length)
    winnerEl.innerHTML = `${announcement} ${daniPrize[randomIndex]}.`
    daniMinus.disabled = true
    daniPlus.disabled = true
    zsaniMinus.disabled = true
    zsaniPlus.disabled = true
    matchEl.innerHTML = "Verseny vége."
}

resetBtn.addEventListener('click', function(){
    localStorage.removeItem("zsaniPontok")
    localStorage.removeItem("daniPontok")
    window.location.reload()
    matchEl.innerHTML = `Jelenlegi állás: ${daniPoints} - ${zsaniPoints} <br> ${message}`
    daniMinus.disabled = false
    daniPlus.disabled = false
    zsaniMinus.disabled = false
    zsaniPlus.disabled = false
})

/* rules */

let rules = []
let rulesLS = JSON.parse(localStorage.getItem("szabályok"))

if (rulesLS){
    rules = rulesLS
    renderRules()
}

ruleBtn.addEventListener('click', function(){
    rules.push(ruleInput.value)
    localStorage.setItem("szabályok", JSON.stringify(rules))
    ruleInput.value = ""
    renderRules()
} )


function renderRules (){
    let renderableRule = ""
    for (let i = 0; i < rules.length; i++){
        renderableRule += `
        <li>
        ${rules[i]} 
        </li>
        `
    }
    olEl.innerHTML = renderableRule
}

deleteBtn.addEventListener('dblclick', function(){
    localStorage.removeItem("szabályok")
    window.location.reload()
})