const palindromes = function (word) {
    word = word.replaceAll(",", "").replaceAll(' ', '').replaceAll(".", "").replaceAll("!", "").replaceAll("?", "").toLowerCase();
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] != word[word.length - 1 - i]) {
            console.log(`${i} ${word[i].toLowerCase()} ${word[word.length - 1 - i].toLowerCase()} ${word}`);
            console.log();
            return false;
        }
    }

    return true;

};

// Do not edit below this line
module.exports = palindromes;
