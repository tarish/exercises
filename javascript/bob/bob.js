module.exports = function Bob() {

	function isSilent(message) {
	    return message.trim().length === 0;
	}

	function isShouting(message) {
	    return message === message.toUpperCase();
	}

	function isAQuestion(message) {
	    return message.slice(-1) === '?';
	}

	return {
		hey: function(message) {
		    if(isSilent(message)) { return 'Fine. Be that way!'; }
		    if(isShouting(message)) { return 'Woah, chill out!'; }
		    if(isAQuestion(message)) { return 'Sure.'; }
		    return 'Whatever.';
		}
	};
};