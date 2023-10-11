// Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window.
// Sample Output:
// "0 is even"
// "1 is odd"
// "2 is even"

for (i=0; i<=15; i++) {
    
    //if the number is 0 or the remainder is equal to 0, it's even
    if (i === 0 || i % 2 === 0) {
            console.log(`${i} is even`);
    } 
 
    else {
            console.log(`${i} is odd`);
    }
}
