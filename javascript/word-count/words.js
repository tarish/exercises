module.exports = function Words(phrase) {
    var wordCount = {};

    countWords(phrase);

    function countWords(phrase) {
        var wordsFoundInPhrase = phrase.toLowerCase().match(/\b\S+\b/g);

        wordsFoundInPhrase.forEach(function(word) {
    		wordCount[word] = wordCount[word] + 1 || 1;
        });
    }

    return { count: wordCount };
};