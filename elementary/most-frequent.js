"use strict";

function mostFrequent(data) {
    // returns the most frequenly occuring string in the given array
    return data.reduce((a,b,i,arr) => (arr.filter(v=>v===a).length>=arr.filter(v=>v===b).length?a:b), null)
    // your code here
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(mostFrequent([
        'a', 'b', 'c', 
        'a', 'b',
        'a'
    ]))
    
    assert.equal(mostFrequent([
        'a', 'b', 'c', 
        'a', 'b',
        'a'
    ]), 'a')
    assert.equal(mostFrequent(['a', 'a', 'bi', 'bi', 'bi']), 'bi')
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}