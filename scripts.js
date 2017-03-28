document.write("JavaScript is awesome!<br>");

var result = document.getElementById('result');
var add = document.getElementById('add');
var subtract = document.getElementById('subtract');
var buttons = document.getElementsByTagName("button");

for(var i = 0; i < buttons.length; i++){
	// this block of code is executed "buttons.length" times.
	var button = buttons[i];
	button.addEventListener("click", function() {
		console.log(this.innerHTML);
	    var change = parseInt(this.innerHTML); //  will either be a '-#' or '+#'
    	console.log(change);
    	var currentResult = parseInt(result.innerHTML); // current result as integer
		console.log(currentResult);
    	// this either adding negative # or adding positive #
    	var newResult = currentResult + change;
    	console.log(newResult);
    	result.innerHTML = newResult; // set the innerHTML of result to newResult
    
		result.className = "changing-left";
		setTimeout(function(){
		setTimeout(function(){
	   		// This block of code is executed after 100 milliseconds
	   		setTimeout(function(){
	   			// This block of code is executed after 200 milliseconds
	   			result.className = "";
			}, 50);
	   		result.className = "changing-down";
		}, 600);
		result.className = "changing-right";
		}, 400);
	});
}

// for(var i = 0; i < buttons.length; i++){
//     // this block of code is executed "buttons.length" times.
//     var button = buttons[i];
//     button.addEventListener('click', function() {
//     	var operation = this.innerHTML; //  will either be a '-' or '+' string.
// 	    // use a conditional statement
// 	    if (operation === "+") {
// 	        result.innerHTML++;
// 	    }
// 	    else if (operation === "-") {
// 	        result.innerHTML--;
// 	    }
// 	    else if (operation === "-5") {
// 	    	result.innerHTML = this.parseInt(result.innerHTML)-=5;
// 	    }
// 	    else {
// 	    	result.innerHTML+=5;
// 	    }
// 	    result.className = "changing";
// 		setTimeout(function(){
// 	    // This block of code is executed after 200 milliseconds
// 	    	result.className = "";
// 		}, 600);
// 		});
// }


// for(var i = 0; i < buttons.length; i++){
//     // this block of code is executed "buttons.length" times.
//     console.log(buttons[i]);
//     var button = buttons[i];
//     button.addEventListener('click', function() {
//     	console.log('test');
//     	var operation = this.innerHTML; //  will either be a '-' or '+' string.
// 	    var currentResult = parseInt(result.innerHTML); // current result as integer
// 	    var newResult; // declare newResult so we can set it later

// 	    // use a conditional statement
// 	    if (operation === "+") {
// 	        newResult = currentResult + 1;
// 	    }
// 	    else {
// 	        newResult = currentResult - 1;
// 	    }
// 	    console.log(newResult);
// 	    result.innerHTML = newResult; // set the innerHTML of result to newResult
// 	    result.className = "changing";
// 		setTimeout(function(){
// 	    // This block of code is executed after 200 milliseconds
// 	    console.log('timeout happened after 200ms')
// 	    result.className = "";
// 		}, 600);
// 		});
// }

// add.addEventListener('click', function() {
// 	console.log("Hello world from the add click event!");
// 	var currentResult = result.innerHTML;
// 	var newResult = parseInt(currentResult) + 1;
// 	console.log(newResult);
// 	result.innerHTML = newResult;
// 	result.className = "changing";
// 	setTimeout(function(){
//     // This block of code is executed after 200 milliseconds
//     console.log('timeout happened after 200ms')
//     result.className = "";
// 	}, 600);
// });

// subtract.addEventListener('click', function() {
// 	console.log("Hello world from the subtract click event!");
// 	result.innerHTML--;
// });

