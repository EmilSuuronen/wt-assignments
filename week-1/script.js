'use strict';
const _ = require('lodash');

console.log('This is JavaScript');

let output = 'Foo Bar';
console.log(output);
output = _.camelCase(output);
console.log(output);