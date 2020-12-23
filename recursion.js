// function processDoll(doll){
//     //1. make a base case statement
//     if(we've found the chocolate piece)
//     return 'yum yum'
//     //you can also add elsif statements too so if you have a doll with no choclate but doesnt have anymore russian dolls inside of itself
//     else if (there are no more dolls)
//     return "No choclate here"
//     //2. recrusive call to itself
//     else
//     processDoll(the smaller doll)
//     //keeps going and going and going till base case is met.
// }

function factorial(n) {
  if ((n == 1) | (n == 0)) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(4));
//the solution gets bubbled up
// 4 * factorial(3)
// 3 * factorial(2)
// 2 * factorial(1)

// 4 * factorial(3) = 24 (6 gets bubbled up and is the answer to factorial(3) so 4 * 6 = 24 so factorial(4) = 24)
// 3 * factorial(2) = 6 (2 gets bubbled up and is the answer for factorial(2) so 3 * 2 = 6)
// 2 * factorial(1) = 2 (factorial(1) hits the base case so returns 1)
function getGift(present) {
  if (present.getClass() === "string") {
    return "Finally my Present!";
  }
}
newArray = [[[["present"]]]];
console.log(getGift(newArray));
