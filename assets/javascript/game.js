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
    // Append initial target and score values to their respective html spans
    $('#userNumber').text(userNumber);
    $('#randomNumber').text(randomNumber);
    $('#totalWins').text(wins);
    $('#totalLosses').text(losses);
    // Function to reset the game on start, after win, or after a loss
    function reset() {
        userNumber = 0;
        randomNumber = Math.floor(Math.random()*101+19);
        gemOne = Math.floor(Math.random()*11+1);
        gemTwo = Math.floor(Math.random()*11+1);
        gemThree = Math.floor(Math.random()*11+1);
        gemFour = Math.floor(Math.random()*11+1);
        $('#userNumber').text(userNumber);
        $('#randomNumber').text(randomNumber);      
    }
    // Victory function to update total wins, alert the user, and reset the game
    function victory() {
        wins++;
        $('#totalWins').text(wins);
        alert("VICTORY!");
        reset();
    }
    // Defeat function to update total losses, alert the user, and reset the game
    function defeat() {
        wins++;
        $('#totalLosses').text(losses);
        alert("DEFEAT!");
        reset();
    }
});