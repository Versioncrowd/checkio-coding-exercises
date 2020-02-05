"use strict";

function nonUniqueElements(data) {
        var dataCopy = data;
        var resultArray = [];
        data.forEach((element, i) => {
            var moreThanOne = false;
            dataCopy.forEach((copyElement, j) => {
                if(element === copyElement && i != j) {
                    moreThanOne = true;
                }
            })  
            
            if(moreThanOne) {
                resultArray.push(element);
            }
        })
        
        return resultArray;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
    assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [], "2nd example");
    assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
    assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
