// variables
let futureValue
let investment
let rate
let years
let i

// collect values from user
investment = parseFloat(prompt('How much do you want to invest? (xxxx.xx)'))

while (investment == isNaN ) {
    alert('please enter a valid investment')
    investment = parseFloat(prompt('How much do you want to invest? (xxxx.xx)'))
    continue
}
rate = parseFloat(prompt('Enter interest rate as xx.xx%'))

while (rate == isNaN || rate > 10 ) {
    alert('please enter a valid rate')
    rate = parseFloat(prompt('Enter interest rate as xx.xx%'))
    continue
}
years = parseInt(prompt('Enter the number of years you want to invest for'))

while (years == isNaN || years < 1 || years > 30) {
    alert('please enter a valid amount of years')
    years = parseInt(prompt('Enter the number of years you want to invest for'))
    continue
}

// calculate future value 
futureValue = investment
for (i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100)
}

// display the result
document.write(`Investment amount: $${investment.toFixed(2)}<br>`)
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`)
document.write(`Years: ${years}<br>`)
document.write(`Future value: $${futureValue.toFixed(2)}`)