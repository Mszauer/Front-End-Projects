// alert('connected');
var numSquares = 6;
var colors = new Array();
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');


init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

resetButton.addEventListener("click",function(){
	reset();
});

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			//remove from previous buttons
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			//add to clicked button
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

			reset();
		});
	}
}
function setUpSquares(){
	for(var i = 0 ; i < squares.length; i++){
		squares[i].addEventListener("click",function(){
			// alert('clicked a square');
			var clickedColor = this.style.background;
			// console.log(clickedColor,pickedColor);
			if (clickedColor === pickedColor){
				// allert('correct!');
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			}else{
				// alert('wrong');
				this.style.background = "#232323";//same as background color
				messageDisplay.textContent = "Try Again!";
			}
		});
	}
}
function changeColors(color){
	//loop through squares
	for(var i = 0 ; i < squares.length; i++){
		//change square color
		squares[i].style.background = color;
	}
}
function pickColor(){

	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	//nmake array
	var result = new Array();
	//add num random colors
	for(var i = 0 ; i < num; i++){
		result.push(randomColor());
	}
	//return said array
	return result;
}

function randomColor(){
	var r = Math.floor(Math.random() * 255 + 1);
	var g = Math.floor(Math.random() * 255 + 1);
	var b = Math.floor(Math.random() * 255 + 1);
	 return `rgb(${r}, ${g}, ${b})`;
}
function reset(){
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick new random color
	pickedColor = pickColor();
	//change color dislay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){//truthy or falsey statement
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";//same as background color
}