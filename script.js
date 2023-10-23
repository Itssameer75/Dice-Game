const diceEl = document.querySelector(".dice")
const PlayGame = document.querySelector(".play-game")
const rollHistory = document.querySelector(".roll-history")
const historyList = []

function updateRollHistory(){
    rollHistory.innerHTML = ""
    for (let i = 0; i < historyList.length; i++) {
        const listItems = document.createElement("li")
        listItems.innerHTML = `Role ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`
        rollHistory.appendChild(listItems)
        
    }

}

function getDiceFace(rollResult){
    switch (rollResult) {
        case 1:
            return "&#9856"
        
        case 2:
            return "&#9857"
         
        case 3:
            return "&#9858"
       
        case 4:
            return "&#9859"
          
        case 5:
            return "&#9860"
         
        case 6:
            return "&#9861"

        default:
            return ""
           
    }
}

function getDiceRoll(){
    const rollResult = Math.floor((Math.random() * 6) + 1)
    const diceFace = getDiceFace(rollResult)
    diceEl.innerHTML = diceFace
    historyList.push(rollResult)
    updateRollHistory()

}

PlayGame.addEventListener("click", function(){
    diceEl.classList.add("roll-animation")
    setTimeout(() => {
        diceEl.classList.remove("roll-animation")
        getDiceRoll()
    }, 1000);
})