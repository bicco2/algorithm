var colorBlack = document.getElementById("black");
var colorRed = document.getElementById("red");
var colorGreen = document.getElementById("green");
var colorBlue = document.getElementById("blue");
var colorWhite = document.getElementById("white");

var label1 = document.querySelector("label[for=black");
var label2 = document.querySelector("label[for=red");
var label3 = document.querySelector("label[for=green");
var label4 = document.querySelector("label[for=blue");
var label5 = document.querySelector("label[for=white");



colorBlack.addEventListener('click', function(){
    label1.style.backgroundColor = 'black';
});


colorRed.addEventListener('click', function(){
    label2.style.backgroundColor = 'red';
});
colorGreen.addEventListener('click', function(){
    label3.style.backgroundColor = 'green';
});
colorBlue.addEventListener('click', function(){
    label4.style.backgroundColor = 'blue';
});
colorWhite.addEventListener('click', function(){
    label5.style.backgroundColor = 'white';
});
