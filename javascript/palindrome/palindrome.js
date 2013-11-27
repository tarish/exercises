module.exports = function Palindrome() {
	return {
		isPalindrome: function(word) {
			var letters = word.toLowerCase().replace(/\s+/g, '').split('');
			var lastIndex = letters.length - 1;
			var halfwayIndex = letters.length / 2;

			for(var i = 0; i < halfwayIndex; i++) {
				if(letters[i] !== letters[lastIndex-i]) { return false; }
			}
			return true;
		}
	}
}