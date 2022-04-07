const removeFromArray = function(array, ...args) {
    let newArray = array.filter(function(arr) {return args.indexOf(arr) == -1});
            
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
