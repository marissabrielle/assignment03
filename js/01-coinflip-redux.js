// Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
// Create a for loop that loops a certain amount of times. The amount of times that the for loop executes will be collected from the user via a prompt.
// Within the for loop assign a randomly generated number to You will have to use the same Math formula that you used in the previous assignment to get this number.
// Use a conditional statement to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window.

let coinFlip
let userNum = prompt("Choose a random number")

for (i = 0; i < userNum; i++) {
    coinFlip = Math.floor(Math.random() * 2)

    // console.log(`coinflip = ${coinFlip}`)
    // console.log(`userNum = ${userNum}`)

    if (coinFlip === 0) {
        console.log('Heads')
     } 
     
     else {
        console.log('Tails')
     }
}


