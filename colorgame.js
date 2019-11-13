var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById ("message");
var h1 = document.querySelector ("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");


easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor =colors[i]; 
        }
        else {
            squares[i].style.display = "none";
        } 
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        
            squares[i].style.backgroundColor =colors[i]; 
            squares[i].style.display = "block";
        
    }
});

resetButton.addEventListener("click", function (){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color frm array
    pickedColor = pickColor();
    // change colr display to match new color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors"
    messageDisplay.textContent = "";
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor =colors[i]; 
    }
    h1.style.background = "black";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    // add initial color to squares
    squares[i].style.backgroundColor =colors[i]

    // add click listners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;    
        console.log(clickedColor , pickedColor)
        // compare color to pickedColor
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
            resetButton.textContent = "Play Again"
        }   else {
            this.style.backgroundColor ="black";
            messageDisplay.textContent = "Try Again";
        }

    });
}

function changeColors(color){
    // loop through all squares
    for(var i = 0; i < squares.length; i++){
     // change color to match given color   
        squares[i].style.backgroundColor =color;
    }
    
}

function pickColor(){
   var random =  Math.floor(Math.random() * colors.length);
   return colors[random];

}

function generateRandomColors(num){
    //make an array
    var arr = []
    //add num random colors to array
    for(var i = 0; i < num; i++){   
    arr.push(randomColor())    
    }
    //return that array
    return arr;
}

function randomColor(){
    // pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    // pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

