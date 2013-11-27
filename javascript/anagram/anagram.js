module.exports = function Anagram(word) {
    var keywordLetters = word.toLowerCase().split("").sort();

    function isAnagram(candidate) {
        if(word.length !== candidate.length) { return false; }
        if(word === candidate) { return false; }

        var result = true;
        var candidateLetters = candidate.toLowerCase().split("").sort();
        keywordLetters.forEach(function(letter, index) {
            if(letter !== candidateLetters[index]) { return result = false; }
        });
        return result;
    }

    return {
        match: function(candidates) {
            return candidates.filter(function(candidate) {
                return isAnagram(candidate);
            });
        }
    }
}