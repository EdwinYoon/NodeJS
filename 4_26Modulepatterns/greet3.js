// function Greetr() {
//     this.greeting = "Hello world!!";
//     this.greet = function() {
//         console.log(this.greeting);
//     }
// }

// module.exports = new Greetr();

function Greetr() {
    this.greeting = "Hello world!!";
    this.greet = function() {
        console.log(this.greeting);
        console.log(this)
    }
}

module.exports = new Greetr();