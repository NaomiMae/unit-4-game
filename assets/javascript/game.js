$(document).ready(function() { 
var purpleCrystal = $("#purple");
var greenCrystal = $("#green");
var pinkCrystal = $("#pink");
var yellowCrystal = $("#yellow");
var randomNumber = $("#randomNumber");
var totalWins = $("#totalWins");
var totalLoses = $("#totalLoses");
var totalScore = $("#totalScore");


var addingNumbers = 0;
var crystalNumber =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var wins = 0;
var loses = 0;


var randomNumberGenerated = randomRange(19, 120);
randomNumber.text(randomNumberGenerated);
$("#randomNumber").text('Target Score: ' + randomNumberGenerated);
$("#totalScore").text('Your Total Score is: ' + "0") 



function setGame (){
    purpleNumbers = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
    greenNumbers = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
    pinkNumbers = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
    yellowNumbers = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
    randomNumberGenerated = randomRange(19, 120);
    function randomRange (myMin, myMax){
        return Math.floor(Math.random() * (myMax - myMin +1)) + myMin ;
    }
    $("#randomNumber").text('Target Score: ' + randomNumberGenerated);
    addingNumbers = 0; 
    $("#totalScore").text('Your Total Score is: ' + "0") 
}

var purpleNumbers = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
var greenNumbers = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
var pinkNumbers = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
var yellowNumbers = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];

// calling out the random number and sizing it

function randomRange (myMin, myMax){
    return Math.floor(Math.random() * (myMax - myMin +1)) + myMin ;
    // console.log
}

// Giving the crystals their numbers

purpleCrystal.on("click", function() {
    addingNumbers += purpleNumbers;
    console.log(addingNumbers);
    $("#totalScore").text('Your Total Score is: ' + addingNumbers);
    checkWin();
});

greenCrystal.on ("click", function() {
    addingNumbers += greenNumbers;
    console.log(addingNumbers);
    $("#totalScore").text('Your Total Score is: ' + addingNumbers);
    checkWin();
});

pinkCrystal.on ("click" , function() {
    addingNumbers += pinkNumbers;
    $("#totalScore").text('Your Total Score is: ' + addingNumbers);
    checkWin();

});
yellowCrystal.on ("click" , function() {
    addingNumbers += yellowNumbers;
    $("#totalScore").text('Your Total Score is: ' + addingNumbers);
    checkWin();

});

// checking to see if you win or lose

function checkWin (){

    if (addingNumbers === randomNumberGenerated){
        wins ++;
        totalWins.text ("Wins:" + wins);
        setGame();
    }
    else if (addingNumbers > randomNumberGenerated){
        loses ++;
        totalLoses.text ("Loses: " + loses); 
        setGame();   
    }
    
}

});