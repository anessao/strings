// var userInput = document.getElementById("letter-input");
// var results = document.getElementById('results');
// var submitButton = document.getElementbyId('submit');



function reversal(x) {
	var string = x.split('').reverse().join('');
	console.log(string);
}

function alphabits(x) {
	var string = x.split('').sort().join('');
	console.log(string);
}

function palindrome(x) {
	var string = x.split('').reverse().join('');
	if (x === string) {
		console.log("Your string is a palindrome!")
	} else {
		console.log("Your string is not a palindrome!");
	}
}

var testString = "aba";
reversal(testString);
alphabits(testString);
palindrome(testString);



// submitButton.addEventListener("click", function myKeyPress(){

// };