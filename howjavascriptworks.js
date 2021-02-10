const name = "Jonas";

const first = () => {
  let a = 1;
  const b = second(7, 9);
  a = a + b;
  return a;
};

function second(x, y) {
  var c = 2;
  return c;
}

const x = first();
console.log(x);
//once code is compiled top level code will start execution.
//first will be global which will be put at the bottom of stack(bottom) so in this case name, first, second, and x
//next first() would be the next to get run in call stack
//then second is called in the execution contex and in call stack
