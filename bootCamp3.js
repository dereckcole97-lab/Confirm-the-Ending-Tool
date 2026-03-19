/*
In this lab, you will implement a function that checks if a string ends with the given target string.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function named confirmEnding that takes two parameters: the string to check and the string to check against.
The function should return true if the first string ends with the second string, and false otherwise.
You should not use the .endsWith() method; instead, use one of the JavaScript substring methods to achieve this.
*/

// 1 - create a confirmEnding function
function confirmEnding(check, target) { 
//2 - should take 2 parameters (I chose check and target)
//3 - "Bastian, "n" should return true
  return check.substring(check.length - target.length) === target;
  // substring() extracts the last part of check
  // check.length - target.length finds where the ending part starts
} 

confirmEnding("Bastian", "n");
//"Congratulation", "on" should return true
confirmEnding("Congratulations", "on");
//"Connor", "n" should return false