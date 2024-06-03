// Create a function fizzbuzz that takes one number, 
// n. fizzbuzz should loop through the numbers 1 through n and push 
// each number into the results array using the following rules:
// 1. Push the string "fizz" in place of numbers divisible by 3.
// 2. Push the string "buzz" in place of numbers divisible by 5.
// 3. Push the string "fizzbuzz" in place of numbers divisible by both 3 and 5.



function fizzbuzz(n) {
    const results = [];

    for (let i = 1; i<= n; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            results.push('FizzBuzz');
        } else if (i % 3 === 0) {
            results.push('fizz');
        } else if (i% 5 === 0) {
            results.push('Buzz');
        } else {
            results.push(i);
        }
    }
    return results;
}
console.log( fizzbuzz (16));