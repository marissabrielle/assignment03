// Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
// Create a do while loop.
// Within the do while loop assign a randomly generated number to You will have to use the same Math formula that you used in the previous assignment to get this number.
// Use a conditional statement to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window.
// Set the condition of the do while loop to end once the coinFlip becomes “Tails”.

let coinFlip 

do {
 coinFlip = Math.floor(Math.random() * 2)
//  console.log(coinFlip)
    
 if (coinFlip === 0) {
    console.log('Heads')
    break
 } 
 
 else {
    console.log('The result was tails, the program has been terminated.')
 }

} 
while (coinFlip === 0) 