"use strict";

function biggerPrice(limit, data) {
    // TOP most expensive goods
    var da1 = data.sort((a, b) => {
        if (a.price < b.price) {
            return 1
        }
        if (a.price > b.price) {
            return -1
        }
        return 0
    });

    var result = da1.slice(0, limit);
    return result;
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(biggerPrice(2, [
        { "name": "bread", "price": 100 },
        { "name": "wine", "price": 138 },
        { "name": "meat", "price": 15 },
        { "name": "water", "price": 1 }
    ]))

    assert.deepEqual(biggerPrice(2, [
        { "name": "bread", "price": 100 },
        { "name": "wine", "price": 138 },
        { "name": "meat", "price": 15 },
        { "name": "water", "price": 1 }
    ]), [
            { "name": "wine", "price": 138 },
            { "name": "bread", "price": 100 }
        ])
    assert.deepEqual(biggerPrice(1, [
        { "name": "pen", "price": 5 },
        { "name": "whiteboard", "price": 170 }
    ]), [{ "name": "whiteboard", "price": 170 }])
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
