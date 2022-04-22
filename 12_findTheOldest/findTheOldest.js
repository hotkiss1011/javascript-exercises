const findTheOldest = function(array) {
    let death = 0;
    let ages = [];
    array.forEach(e => {
        if (e.yearOfDeath) {
            death = e.yearOfDeath;
        } else {
            today = new Date();
            death = today.getFullYear();
        }
        ages.push(death - e.yearOfBirth);
    });

    let oldest = ages.indexOf(Math.max(...ages));
    return array[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
