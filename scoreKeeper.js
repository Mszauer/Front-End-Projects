// alert('connected');
var p1Button = document.getElementById("p1");
var p1Display = document.querySelector('#p1Display');
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var scoreLimit = document.querySelector('input');
var scoreDisplay = document.querySelector("#scoreLimit");

var p1Score = 0;
var p2Score = 0;
var maxScore = 5;
var gameOver = false;

p1Button.addEventListener("click",function(){
	if (!gameOver){
		p1Score++;
		if(p1Score >= maxScore){
			console.log('p1 wins');
			gameOver = true;
			p1Display.classList.toggle("winner");
		}
		p1Display.textContent = p1Score;
	}	
});

p2Button.addEventListener("click",function(){
	if (!gameOver){
		p2Score++;
		if(p2Score >= maxScore){
			console.log('p1 wins');
			gameOver = true;
			p2Display.classList.toggle("winner");
		}
		p2Display.textContent = p2Score;
	}	
});

resetButton.addEventListener("click",function(){
	gameOver = false;
	p1Score = 0;
	p1Display.textContent = p1Score;
	p2Score = 0;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
});

scoreLimit.addEventListener("change",function(){
	maxScore = Number(this.value);
	scoreDisplay.textContent = maxScore;
});