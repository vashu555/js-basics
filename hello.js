var oneLinerJoke = require('one-liner-joke');

var getRandomJoke = oneLinerJoke.getRandomJoke();



var cowsay = require("cowsay");

console.log(cowsay.say({
    text : getRandomJoke.body,
    e : "oO",
    T : "U "
}));
