"use strict";

function betweenMarkers(text, begin, end) {
    // returns substring between two given markers
    // if no markers
    if (text.indexOf(begin) === -1 && text.indexOf(end) === -1) {
        text = text;
    }
    if (text.indexOf(begin) != -1 && text.indexOf(end) != -1) {
        if (text.indexOf(begin) < text.indexOf(end)) {
            text = text.substr(text.indexOf(begin) + begin.length)
            text = text.substr(0, text.indexOf(end))
        } else {
            text = '';
        }
    }

    if (text.indexOf(begin) != -1 && text.indexOf(end) === -1) {
        text = text.substr(text.indexOf(begin) + begin.length)
    }

    if (text.indexOf(end) != -1 && text.indexOf(begin) === -1) {
        text = text.substr(0, text.indexOf(end))
    }

    return text;
    // your code here
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple')

    assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple')
    assert.equal(betweenMarkers("<head><title>My new site</title></head>",
        "<title>", "</title>"), 'My new site')
    assert.equal(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No')
    assert.equal(betweenMarkers('No [b]hi', '[b]', '[/b]'), 'hi')
    assert.equal(betweenMarkers('No hi', '[b]', '[/b]'), 'No hi')
    assert.equal(betweenMarkers('No <hi>', '>', '<'), '')
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
