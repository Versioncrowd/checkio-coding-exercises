"use strict";

function numberRadix(str_number, radix) {
    var nums = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".substr(0, radix)
    var re = new RegExp("^[" + nums + "]+$", "i")
    if (!re.test(str_number)) {
        return -1
    } else {
        return parseInt(str_number, radix);
    }
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(numberRadix("AF", 16), 175, "Hex");
    assert.equal(numberRadix("101", 2), 5, "Bin");
    assert.equal(numberRadix("101", 5), 26, "5 base");
    assert.equal(numberRadix("Z", 36), 35, "Z base");
    assert.equal(numberRadix("AB", 10), -1, "B > A > 10");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
