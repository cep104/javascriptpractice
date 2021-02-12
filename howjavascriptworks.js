`use strict`;
// const name = "Jonas";

// const first = () => {
//   let a = 1;
//   const b = second(7, 9);
//   a = a + b;
//   return a;
// };

// function second(x, y) {
//   var c = 2;
//   return c;
// }

// const x = first();
// console.log(x);
//once code is compiled top level code will start execution.
//first will be global which will be put at the bottom of stack(bottom) so in this case name, first, second, and x
//next first() would be the next to get run in call stack
//then second is called in the execution contex and in call stack

// const myName = "Jonas";
// function first() {
//   const age = 30;
//   if (age >= 30) {
//     const decade = 3;
//     var millenial = true;
//   }
//   function second() {
//     const job = "teacher";
//     console.log(`${myName} is a ${age}-old ${job}`);
//   }
//   second();
// }

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);
  function printAge() {
    const output = `You are ${age}, born in ${birthYear}.`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const string = `Oh, and you're a millenial, ${firstName}!`;
      console.log(string);
    }
    console.log(millenial);
  }
  printAge();
  return age;
}
const firstName = "Jonas";
calcAge(1991);
