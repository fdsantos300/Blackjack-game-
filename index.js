


let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.querySelector(".message-el")
let sumEl = document.querySelector(".sum-el")
let cardsEL = document.querySelector(".cards-el")


let player = {
  name: "Bob",
  chips: 200
}
let playerEl = document.querySelector(".player-el");
playerEl.textContent  = player.name + ": $" + player.chips

function getRandomCard(){
  let randomNumber = Math.floor(Math.random()*13) + 1
  if (randomNumber === 1){
    return 11
  } else if (randomNumber > 10){
    return 10
  } else {
    return randomNumber
  }
 }


function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard

  renderGame()
}

function renderGame() {

  cardsEL.textContent = "Cards: "
for ( let i = 0; i < cards.length; i++){
  cardsEL.textContent += cards[i] + " "
}
  if (sum <= 20) {
    message = "DO YOU WANT A NEW CARD?"
  } else if ( sum === 21){
    message = "YOU'VE GOT BLACKJACK!"
    hasBlackJack = true
  } else {
    message = "YOU'RE OUT OF THE GAME!"
    isAlive = false
  }
messageEl.textContent = message
sumEl.textContent = "Sum: " + sum

}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }

}
