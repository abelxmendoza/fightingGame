/* 
🌟 APP: Fighting Game

Create an updateGame() function that will update the DOM with the state of the game 👇
========================================

- updateGame()

These are the 2 classes you must create and their methods 👇
========================================

class Player {
  - strike()
  - heal()
}

class Game {
  - play()
  - checkIsOver()
  - declareWinner()
  - reset()
}

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'play' = Button to run simulation
#2 ID 👉 'result' = Div that holds the winner of the match
#3 ID 👉 'p1Name' = Div that holds player 1's Name
#4 ID 👉 'p2Name' = Div that holds player 2's Name
#5 ID 👉 'p1Health' = Div that holds player 1's health
#6 ID 👉 'p2Health' = Div that holds player 2's health
*/

// ** Grabs elements from the DOM and stores them into variables **
let playButton = document.getElementById('play')
let resultDiv = document.getElementById('result')
let p1NameDiv = document.getElementById('p1Name')
let p2NameDiv = document.getElementById('p2Name')
let p1HealthDiv = document.getElementById('p1Health')
let p2HealthDiv = document.getElementById('p2Health')


//let p1H = Number(p1HealthDiv.innerText)
let p1Name = p1NameDiv.innerText

//let p2H = Number(p2HealthDiv.innerText)
let p2Name = p2NameDiv.innerText

function getInputValue() {
  p1Name = document.getElementById("p1nameInput").value;
  console.log(p1Name)
  p1NameDiv.innerText = p1Name
  //p1Name = p1NameDiv.innerText

  p2Name = document.getElementById("p2nameInput").value;
  console.log(p2Name)
  p2NameDiv.innerText = p2Name
  // p2Name = p2NameDiv.innerText



}


// ** Check if either players health is  0 and if it is, then update isOver to true **
const updateGame = (p1, p2, gameState) => {
  // Update the DOM with the names and the latest health of players

  p1NameDiv.innerText = p1Name
  p2NameDiv.innerText = p2Name

  p1HealthDiv.innerText = p1.health
  p2HealthDiv.innerText = p2.health


  // Condition IF either player health is <= 0 then set isOver to true and declareWinner

  if (p1.health <= 0 || p2.health <= 0) {

    //set isOver = true
    gameState.isOver = true
    resultDiv.innerText = game.declareWinner(game.isOver, p1, p2);
    return gameState

  }
  else {
    gameState.isOver = false
  }

}

//updateGame(p1Name, p2NameDiv.innerText, true)

// ** Create the Player class which can create a player with all it's attributes and methods **
// qazi = new Player('Qazi', 100, 7)
// qazi.name 👉 'Qazi'
// qazi.health 👉 100
// qazi.attackDmg 👉 7
class Player {
  constructor(name, health, attackDamage) {
    this.name = name;
    this.health = health;
    this.attackDmg = attackDamage;
  }
  // ** Attack an enemy with a random number from 0 to YOUR attackDmg bonus **
  strike(player, enemy, attackDmg) {

    // Get random number between 1 - 10 and that is damageAmount
    let damageAmount = Math.ceil(Math.random() * attackDmg)

    // Subtract the enemy health with the damageAmount
    enemy.health = enemy.health - damageAmount

    console.log(enemy.health)

    //  Update the game and DOM with updateGame()
    updateGame(p1, p2, gameState)
    //  Return a message of 'player name attacks enemy name for damageAmount'




    resultDiv.innerText = `${player.name} attacks ${enemy.name} for ${damageAmount} Damage`


  }
  // ** Heal the player for random number from  1 to 5 **
  heal(player) {

    // Get random number between 1 - 5 and store that in hpAmount
    let hpAmount = Math.ceil(Math.random() * 5)
    // Add hpAmount to players health
    player.health = player.health + hpAmount
    //  Update the game and DOM with updateGame()
    updateGame(p1, p2, gameState)
    //  Return a message of 'player name heals for hpAmount HP'
    resultDiv.innerText = `${player.name} heals for ${hpAmount} life points`
  }
}

// ** Create the Game class with all it's attributes and methods to run a match **
// game = new Game()
// game.isOver 👉 false
class Game {
  constructor() {
    this.isOver = false;
  }

  // ** If the game is over and a player has 0 health declare the winner! **
  declareWinner(isOver, p1, p2) {

    // Create a message variable that will hold a message based on the condition
    let victoryMsg;
    // If isOver is true AND p1 health is <= 0 then update message variable  to 'p1 WINS!'

    if (isOver == true && p1.health <= 0) {
      victoryMsg = `${p1.name} is the winner!`;
    }
    // Else if isOver is true AND p2 health is <= 0 then update message variable  to 'p2 WINS!'

    else if (isOver == true && p2.health <= 0) {
      victoryMsg = `${p2.name} is the winner!`;
    }


    // Play victory sound

    //document.getElementById("victory").play()

    // Return message variable 
    return victoryMsg;

  }

  // ** Reset the players health back to it's original state and isOver to FALSE **
  reset(p1, p2) {
    // set p1 health and p2 health back to 100 and isOver back to false and clear resultDiv.innerText and don't forget to updateGame()

    p1.health = 100;
    p2.health = 100;

    this.isOver = false

    p1HealthDiv.innerText = p1.health
    p2HealthDiv.innerText = p2.health
    resultDiv.innerText = ""
    updateGame(p1, p2, this.isOver)
  }

  // ** Simulates the whole match untill one player runs out of health **
  play(p1, p2) {
    // Reset to make sure player health is back to full before starting
        p1.health = 100
        p2.health = 100

    console.log(p1.health)
    // Make sure the players take turns untill isOver is TRUE
    while (!this.isOver) {
      //Make sure both players get strike() and heal() once each loop
    }
    // Once isOver is TRUE run the declareWinner() method 

  }

}

// ** Create 2 players using the player class **

let player1 = new Player(p1Name, 100, 10)
let player2 = new Player(p2Name, 100, 10)

console.log(player1)


// ** Save original Player Data into a variable in order to reset **
let p1 = player1;
let p2 = player2;

// ** Create the game object from the Game class **

let fight = new Game()

// ** Intialize the game by calling updateGame() **

updateGame(player1, player2, fight)
// ** Save intial isOver from the game object inside this variable **
let gameState = fight.isOver

console.log(gameState)


// ** Add a click listener to the simulate button that runs the play() method on click and pass in the players **


function simulate() {

  fight.play(player1, player2)

}


// Add functionality where players can press a button to attack OR heal

// ** Player 1 Controls **
document.addEventListener('keydown', function(e) {
  // if you press Q AND the enemy health is greater than 0 AND isOver is still false then strike()

  if (e.key == "q" && player2.health > 0 && fight.isOver == false) {

    player1.strike(player1, player2, player1.attackDmg)
    document.getElementById('p1attack').play()

  }

  // After striking then play attack sound

});

document.addEventListener('keydown', function(e) {

  // if you press a AND the player health is greater than 0 AND isOver is still false then strike()

  if (e.key == "a" && player1.health > 0 && fight.isOver == false) {

    player1.heal(player1)
    document.getElementById('p1heal').play()

  }

  // After healing then play heal sound
  //document.getElementById('p1heal').play()

});

// ** Player 2 Controls **
document.addEventListener('keydown', function(e) {

  // if you press p AND enemy health is greater than 0 AND isOver is still false then stike()

  if (e.key == "p" && player1.health > 0 && fight.isOver == false) {

    player2.strike(player2, player1, player2.attackDmg)
    document.getElementById('p2attack').play()

  }
  // After striking then play attack sound

});

document.addEventListener('keydown', function(e) {
  // if you press l AND the player health is greater than 0 AND isOver is still false then heal()

  if (e.key == "l" && player2.health > 0 && fight.isOver == false) {

    player2.heal(player2)
    document.getElementById('p2heal').play()


  }

  // After healing then play heal sound

});




