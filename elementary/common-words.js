"use strict";

function commonWords(first, second) {
    var firstString = first.split(',');
    var secondString = second.split(',');
    var newArray = [];
    firstString.forEach(word => {
        secondString.forEach(element => {
            if (word === element) {
                newArray.push(word);
            }
        })
    })
    newArray.sort((a, b) => a.localeCompare(b))
    var finalString = "";
    newArray.forEach((word, i) => {
        if (i === 0) {
            finalString += word;
        } else {
            finalString += ',' + word;
        }
    })
    return finalString;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(commonWords("hello,world", "hello,earth"), "hello", "Hello");
    assert.equal(commonWords("one,two,three", "four,five,six"), "", "Too different");
    assert.equal(commonWords("one,two,three", "four,five,one,two,six,three"), "one,three,two", "1 2 3");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}