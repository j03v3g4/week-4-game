// Massive function to hold all of my script
$( document ).ready(function(){
// Global variables
    var userNumber = 0;
    var wins = 0;
    var losses = 0;
    // Random number between 19-120 for win condition
    var randomNumber = Math.floor(Math.random()*101+19);
    // Random numbers between 1-12 for gems
    gemOne = Math.floor(Math.random()*11+1);
    gemTwo = Math.floor(Math.random()*11+1);
    gemThree = Math.floor(Math.random()*11+1);
    gemFour = Math.floor(Math.random()*11+1);
});