var gameData = {
    killed : 0,
    killedperclick: 1,
    killedperclickcost: 10
}

function buykilledperclick() {
    if (gameData.killed >= gameData.killedperclickcost) {
        gameData.killed -= gameData.killedperclickcost
        gameData.killedperclick += 1
        gameData.killedperclickcost *= 1

        document.getElementById("Monsterskilled").innerHTML = gameData.killed + " Monsters killed"
        document.getElementById("perclickUpgrade").innerHTML = "Upgrade Knife (Currently Level " + gameData.killedperclick + ") cost: " + gameData.killedperclickcost + " killed"
    }
}


function killMonster() {
    gameData.killed += gameData.killedperclick
    document.getElementById("Monsterskilled").innerHTML = gameData.killed + " Monsters killed"
}


var mainGameLoop = window.setInterval(function () {
    killMonster()
}, 100)

var saveGameLoop = window.setInterval(function () {
    localStorage.setItem("AmazingAdventureSave", JSON.stringify(gameData))
}, 1500)

var savegame = JSON.parse(localStorage.getItem("AmazingAdventureSave"))
if (savegame !== null) {
    gameData = savegame
}