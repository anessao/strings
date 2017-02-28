var submitButton = document.getElementById('submit');
var userInput = document.getElementById("letter-input");

function reversal(x) {
	var string = x.split('').reverse().join('');
	return string;
}

function alphabits(x) {
	var string = x.split('').sort().join('');
	return string;
}

function palindrome(x) {
	var string = x.split('').reverse().join('');
	if (x === string) {
		return "Your string is a palindrome!";
	} else {
		return "Your string is not a palindrome!";
	}
}

submitButton.addEventListener("click", function (){
	var userInput = document.getElementById("letter-input").value;
	var results = document.getElementById('results');
	
	var reversedInput = reversal(userInput);
	var alphabitsInput = alphabits(userInput);
	var palindromeInput = palindrome(userInput);

	if (userInput === '') {
		results.innerHTML = "Please enter some letters";
	} else {
		results.innerHTML = "<div><span>Your letters reversed are: " + reversedInput + "</span></div>" + "<div><span>Your letters alphabetized are: " + alphabitsInput + "</span></div>" + "<div><span>" + palindromeInput + "</span></div>";
	}

});


userInput.addEventListener("keydown", function(e){
	if(e.keyCode === 13) {
         submitButton.click();
   }
});



