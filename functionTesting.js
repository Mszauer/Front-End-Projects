// alert('CONNECTED');
function isEven(num){
	return ((num%2) === 0);
}

function factorial(num){
	var result = 1;
	for (i = 1 ; i <= num; i++){
		result *= i;
	}
	return result;
}

function kebabToSnake(string){
	return string.replace(/-/g,"_");
}

var todo = new Array();
var answer = prompt('What would you like to do? \n "new" - Add a Todo \n "list" - View all Todo \n "delete" - specify the index that you want to remove \n "quit" - Quit');
while (answer !== "quit"){
	if (answer === 'new'){
		var add = prompt('What would you like to add to the list?');
		todo.push(add);
		console.log("Added item todo: "+add);
	}
	else if(answer === 'list'){
		console.log('********');
		todo.forEach(item => console.log(item));
		console.log('********');
	}
	if (answer === 'delete'){
		var index = prompt('Enter index of todo to delete');
		todo.splice(index,1);
	}
	var answer = prompt('What would you like to do? \n "new" - Add a Todo \n "list" - View all Todo \n "delete" - specify the index that you want to remove \n "quit" - Quit');
}

function printReverse(array){
	for(i = array.length-1 ; i>=0; i--){
		console.log(array[i]);
	}
}
function isUniform(array){
	var start = array[0];
	for(i=1; i < array.length; i++){
		if (array[i] !== start) {
			return false
		}
	}
	return true;
}
function sumArray(array){
	var counter = array[0];
	array.forEach(item => counter+=item);
	return counter;
}
function max(array){
	var max = array[0];
	array.forEach(item => if(item > max){ 
		max=item;
	});
}