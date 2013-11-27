module.exports = function FizzBuzz() {
	return {
		printNumbers: function() {
			var result = "";
			for(var i = 1; i < 101; i++) {
				if(i % 15 === 0) {
					//INSTEAD OF DUPLICATEY: if(i % 3 === 0 && i % 5 === 0), just check for 15!!!
					//Wow - I even noticed 15 was the FIRST number for both 3 and 5, but didn't put this together until reading about it elsewhere.
					//Also took a stylistic option to keep i % digit === 0 instead of using !(i % digit) for readability sake
					result += "fizzbuzz" + " ";
				} else if(i % 3 === 0) {
					result += "fizz" + " ";
				} else if(i % 5 === 0) {
					result += "buzz" + " ";
				} else {
					result += i + " ";					
				}
			}
			return result.trim();
		}
	}
}