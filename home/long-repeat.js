"use strict";

function longRepeat(line) {
    // length the longest substring that consists of the same char
    let answer = 1;
    let temp = 1;
    const lineArr = line.split('');
    if (line) {
        lineArr.forEach((element, i) => {
            if (element === line[i + 1]) {
                temp += 1;
            } else {
                if (temp != 1 && temp > answer) {
                    answer = temp
                } else {
                    temp = 1;
                }
            }
        })
    } else {
        answer = 0;
    }

    // your code here
    //console.log(temp, answer);
    return answer;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(longRepeat('sdsffffse'), 4, "First")
    assert.equal(longRepeat('ddvvrwwwrggg'), 3, "Second")
    console.log('"Run" is good. How is "Check"?');
}