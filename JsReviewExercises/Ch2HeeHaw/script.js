/**
 *  Author: Cesar Escalona
 *  SDEV 328 - Full Stack Web Dev
 *  @type {number} - This program will count to 100 and display numbers
 */

// write a program that outputs numbers from 1 to 100
let number = 1;
while(number <= 100) {
    // if number is divisible by 3 and 5(15) print out Hee Haw
    if(number % 15 === 0){
        document.write("\n" + "Hee Haw!"+ "<br>");
        number++;
    }
    // if number is divisible by only 5 print Haw
    else if(number % 5 === 0){
        document.write("\n" + "Haw!"+ "<br>");
        number++;
    }
    // if number divisible by only 3 print Hee
    else if(number % 3 === 0){
        document.write("\n" + "Hee!"+ "<br>");
        number++;
    }
    // all other numbers print regularly
    else {
        document.write("\n" + number +"<br>");
        number++;
    }
}