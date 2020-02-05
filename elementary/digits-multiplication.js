"use strict";

function digitsMultip(data) {
    var dataArray = data.toString().split("");
    var array = dataArray.map(element => parseInt(element));
    var sum = 1;
    array.forEach(element => {
        if(element > 0) {
            sum = sum * element;
        }  
    })
    return sum;
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(digitsMultip(123405))
    
    assert.equal(digitsMultip(123405), 120, "1st");
    assert.equal(digitsMultip(999), 729, "2nd");
    assert.equal(digitsMultip(1000), 1, "3rd");
    assert.equal(digitsMultip(1111), 1, "4th");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
