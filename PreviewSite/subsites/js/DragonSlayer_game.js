const terminal = document.getElementById('terminal')
const attackButton = document.getElementById('attackButton')
const runButton = document.getElementById('runButton')
const dragonHealthBar = document.getElementById('dragonHealthBar')
const userHealthBar = document.getElementById('userHealthBar')

var dragonHealth = 5;
var randomAttack = 1;
var randomAttackDamage = 1;
var counter = 0
var userInput;
var run = false;

function appendToTerminal(text, id) {
    id.innerHTML += "<br>" + text;
}

function setRun(bool) {
    run = bool;
}

function randomIntFromInterval() { // min and max included 
    return Math.floor(Math.random() * (5 - 1 + 1) + 1)
}

function setHealtBarInHTML(id, healthValue, name) {
    id.innerHTML = '<div class="w3-green" style="height:24px;width:' + ((healthValue / 5) * 100) + '%">' + name + '</div>'
}

function attack() {
    randomAttack = Math.round(Math.random())
    if (randomAttack == 1) {
        randomAttackDamage = randomIntFromInterval(1, 5);
        randomAttack == 1 ? dragonHealth -= randomAttackDamage : null;
        console.log("Attack damage = " + randomAttackDamage)
        console.log("Dragon health = " + Math.abs(dragonHealth))
        counter++;
        setHealtBarInHTML(dragonHealthBar, Math.abs(dragonHealth), "Dragon healt")
    } else {
        console.log("You missed AAAAAaaaAAAAaaaAAAAaAaaAahhhhhhhhHHH")
        id.innerHTML = "<br>You missed AAAAAaaaAAAAaaaAAAAaAaaAahhhhhhhhHHH"
        attackButton.style.visibility = false;
        runButton.style.visibility = false;
        restartButton.style.visibility = true;
        dragonHealth = 5;
    }
    checkStatus();

}

function checkStatus() {

    if (dragonHealth <= 1) {
        console.log("You killed the dragon with " + counter + " hits!");
        appendToTerminal("You killed the dragon with " + counter + " hits!", terminal)
    }
    else if (dragonHealth > 1 && !run) {
        console.log("You died after " + counter + " hits!");
        appendToTerminal("You died after " + counter + " hits!", terminal)
    }
    else {
        console.log("You coward!")
        appendToTerminal("You coward!", terminal)
    }
}