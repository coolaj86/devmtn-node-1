'use strict';

function greet() {
  console.log('Hello World!');
}

function farewell() {
  console.log('Bye Bye!');
}

// window is a browser thing
// module.exports is a node thing
module.exports.greet = greet;
module.exports.Farewell = farewell;
