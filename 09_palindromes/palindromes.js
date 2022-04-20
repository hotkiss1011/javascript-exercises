const palindromes = function (string) {
    //clean up string: remove special characters and make lowercase
    let cleanString = string.replace(/[^a-zA-Z]/g, "");
    cleanString = cleanString.toLowerCase();
    //make another string that is the given string spelled backwards
    let backwards = cleanString.split("").reverse().join('')
    //check if backwards string is the same as the given string and return true/false
    return cleanString == backwards;
};

// Do not edit below this line
module.exports = palindromes;
