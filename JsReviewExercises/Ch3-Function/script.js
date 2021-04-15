/**
 * Author: Cesar Escalona
 * SDEV 328 - Full stack Web Dev
 * @type {heeHaw} this function will take a user inputted number and display the numbers from
 * 1 - that number displaying similarly to what we did in Ch2
 */

// write a hee haw function that takes a number as an input and prints the numbers
// from 1 to that number, similarly like the Ch2 example
document.getElementById("button").onclick = heeHaw;

let number = 1;

function heeHaw() {
    // grab the value entered
    let num = document.getElementById("myNumber").value;
    // if the number is negative
    if(num < 0){
        document.write("You are required to enter a positive integer");
    }
    // if the number is not a number(String)
    else if(isNaN(num)) {
        document.write("You are required to enter a valid integer");
    }
    // if the user doesn't type a number or if the number is 0
    else if (num == 0){
        document.write("You must choose a positive integer greater than 0");
    }
    // if the number is a number then execute
    else if (!isNaN(num)){
        document.write("The number you chose was " + num + "<br>");
        while (number <= num) {
            // if number is divisible by 3 and 5(15) print out Hee Haw
            if (number % 15 === 0) {
                document.write("\n" + "Hee Haw!" + "<br>");
                number++;
            }
            // if number is divisible by only 5 print Haw
            else if (number % 5 === 0) {
                document.write("\n" + "Haw!" + "<br>");
                number++;
            }
            // if number divisible by only 3 print Hee
            else if (number % 3 === 0) {
                document.write("\n" + "Hee!" + "<br>");
                number++;
            }
            // all other numbers print regularly
            else {
                document.write("\n" + number + "<br>");
                number++;
            }
        }
    }
}
