"use strict";

function findMessage(data) {
    var message = data.match(/[A-Z]/g);
    if(message) {
        return message.join("");
    } else {
        return "";
    }
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."))
    
    assert.equal(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."), "HELLO", "hello");
    assert.equal(findMessage("hello world!"), "", "Nothing");
    assert.equal(findMessage("HELLO WORLD!!!"), "HELLOWORLD", "Capitals");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
