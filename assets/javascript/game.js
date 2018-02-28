// Massive function to hold all of my script
$( document ).ready(function(){
// Global variables
    var userNumber = 0;
    var wins = 0;
    var losses = 0;
    // Random number between 19-120 for win condition
    var randomNumber = Math.floor(Math.random()*101+19);
    console.log(randomNumber);
    // Random numbers between 1-12 for gems
    gemOne = Math.floor(Math.random()*11+1);
    console.log(gemOne);
    gemTwo = Math.floor(Math.random()*11+1);
    console.log(gemTwo);
    gemThree = Math.floor(Math.random()*11+1);
    console.log(gemThree);
    gemFour = Math.floor(Math.random()*11+1);
    console.log(gemFour);
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
        losses++;
        $('#totalLosses').text(losses);
        alert("DEFEAT!");
        reset();
    }
    // Click functions for gems that append #userNumber html span and check win / loss conditions
    $("#gemOne").click(function(){
        userNumber = userNumber + gemOne;
        $('#userNumber').text(userNumber);
        if(userNumber === randomNumber) {
            victory();
        }
        else if(userNumber > randomNumber) {
            defeat();
        }
    })
    $("#gemTwo").click(function(){
        userNumber = userNumber + gemTwo;
        $('#userNumber').text(userNumber);
        if(userNumber === randomNumber) {
            victory();
        }
        else if(userNumber > randomNumber) {
            defeat();
        }
    })
    $("#gemThree").click(function(){
        userNumber = userNumber + gemThree;
        $('#userNumber').text(userNumber);
        if(userNumber === randomNumber) {
            victory();
        }
        else if(userNumber > randomNumber) {
            defeat();
        }
    })
    $("#gemFour").click(function(){
        userNumber = userNumber + gemFour;
        $('#userNumber').text(userNumber);
        if(userNumber === randomNumber) {
            victory();
        }
        else if(userNumber > randomNumber) {
            defeat();
        }
    })
});