const getTheTitles = function(array) {
    let newArray = [];
    array.forEach(e => {
        newArray.push(e.title);
    });
    return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
