var numSquares = 6;
var squares = document.querySelectorAll(".square");
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var massageDisplay = document.getElementById("massage");
var reset = document.querySelector("#reset");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});
hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i<squares.length; i++){
      squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});
reset.addEventListener("click", function(){
  //generateRandomColors querySelectorAll
  colors = generateRandomColors(numSquares);
  //picked a random color from the array
  pickedColor = pickColor();
  //Change colorDisplay to match picked colors
  massageDisplay.textContent= "";
  this.textContent="New Color";
  colorDisplay.textContent = pickedColor;
  //change colors of the squares
  for(var i = 0; i<squares.length ; i++)
  {
    squares[i].style.background = colors[i];

  }
  h1.style.background = "#232323";

});

for(var i=0; i < squares.length; i++)
{
  //Add intial color that we had
  squares[i].style.backgroundColor = colors[i];
  //Add event listerer to the selected colors
  squares[i].addEventListener("click",function(){

     var clickedColor = this.style.backgroundColor;
     console.log(clickedColor, pickedColor)
     if(clickedColor === pickedColor){
       massageDisplay.textContent="correct!";
       changeColors(clickedColor);
       reset.textContent = "Play Again?";
       h1.style.background = clickedColor;
     }
     else{
       this.style.backgroundColor = "#232323";
       massageDisplay.textContent="Try again!";
     }
  });
}
function changeColors(color){
  //Loop through all squares
  for(var  i = 0; i<squares.length; i++)
  {
    //Change each colors to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random()*colors.length);
  return colors[random];
}
function generateRandomColors(num){
  //make an array
  var arr = []
  //ADD NUM RANDOM COLORS TO ARRAY
  for( var i=0; i< num; i++)
  {
    //get random color and push it on the ARRAY
    arr.push(randomColor());
  }
  //return that array
  return arr;
}
function randomColor(){
  //pick a red from to 255
  var r = Math.floor(Math.random() * 256)
  //pick a green from to 255
  var g = Math.floor(Math.random() * 256)
  //pick a blue from to 255
  var b = Math.floor(Math.random() * 256)
  "rgb(r, g, b)"
  return "rgb("+ r + ", " + g + ", " + b + ")";
}
