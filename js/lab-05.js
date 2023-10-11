let miles
let gallons
let mpg
let again = 'y'

//execute while the condition is equal to 'y'
do {
    miles = parseFloat(prompt('Enter the miles driven.'))
    gallons = parseFloat(prompt('Enter the number of gallons fuel thank holds.'))
    
    //check to mkae sure miles & gallons are numbers and greater than zero
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0 ) {
        mpg = miles / gallons
        console.log(`Your car gets ${mpg.toFixed(2)} miles to the gallon.`)
     } else {
        alert('One or both enteries is invalid.')
     }

     again = prompt('Run application again? (y/n)', 'y')    

     while (again !== 'y' || again !== 'n') {
        again = prompt('Please enter y or n')

        if (again === 'n' || again === 'y' ) {
            break
        }
      }

} while (again === 'y' )

console.log('The program has been terminated.')


    