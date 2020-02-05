"use strict";

function correctSentence(text) {
    return text.slice(-1) === "." ? text.charAt(0).toUpperCase() + text.slice(1) : text.charAt(0).toUpperCase() + text.slice(1) + '.';
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(correctSentence("greetings, friends"))

    // These "asserts" using for self-checking and not for auto-testing
    assert.equal(correctSentence("greetings, friends"), "Greetings, friends.")
    assert.equal(correctSentence("Greetings, friends"), "Greetings, friends.")
    assert.equal(correctSentence("Greetings, friends."), "Greetings, friends.")
    assert.equal(correctSentence("hi"), "Hi.")
    assert.equal(correctSentence("welcome to New York"), "Welcome to New York.")
    
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}