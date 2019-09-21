/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
* 2. Implicit Binding
* 3. New Binding
* 4. Explicit
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function sayHello(){
    console.log(this.hi);
}
const hi = "Oh Hello there!";
sayHello();


// Principle 2
// code example for Implicit Binding
let car = {
    make: 'Honda',
    model: 'Civic',
    year: '2015',
    color: 'silver',
    present: function() {
        console.log(`This ${this.year} ${this.make} ${this.model} is available in ${this.color}`);
    }
}
car.present();


// Principle 3
// code example for New Binding
function shoutColor(color){
    this.shout = color;
}

let newShoutColor = new shoutColor('BLUE!');

console.log(newShoutColor.shout);


// Principle 4
// code example for Explicit Binding
function addTwenty(){
    return this.numberOne + 20;
}

let numberSet = {
    numberOne: 5,
    numberTwo: 10,
    numberThree: 15,
    numberFour: 20,
    numberFive: 25
}

console.log(addTwenty.call(numberSet));