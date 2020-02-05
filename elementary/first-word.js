"use strict";

function firstWord(a, b) {
    // returns the first word in a given text.
    var arrOfWords = a.split(/[\s,.]+/);
    var arrOfWords1 = arrOfWords.filter(word => word != '' && word != '...')
    var firstWord = arrOfWords1[0]
    return firstWord
    // your code here
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(firstWord("Hello world"))

    // These "asserts" using for self-checking and not for auto-testing
    assert.equal(firstWord("Hello world"), "Hello")
    assert.equal(firstWord(" a word "), "a")
    assert.equal(firstWord("don't touch it"), "don't")
    assert.equal(firstWord("greetings, friends"), "greetings")
    assert.equal(firstWord("... and so on ..."), "and")
    assert.equal(firstWord("hi"), "hi")
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}