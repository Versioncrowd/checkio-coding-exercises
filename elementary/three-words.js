"use strict";

function threeWords(data) {
    var dataArr = data.split(" ");
    var count = 0;
    dataArr.forEach(element => {
        if (count === 3) {
            return;
        } 
        
        if (!parseInt(element)) {
            count += 1;
        } 

        if (parseInt(element) && count != 0) {
            count = 0;
        }   
    }) 
    
    console.log(count)
    return count === 3 ? true : false; 
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(threeWords("Hello World hello"), true, "1st example");
    assert.equal(threeWords("He is 123 man"), false, "2nd example");
    assert.equal(threeWords("1 2 3 4"), false, "3rd example");
    assert.equal(threeWords("bla bla bla bla"), true, "4th example");
    assert.equal(threeWords("Hi"), false, "Letters");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
