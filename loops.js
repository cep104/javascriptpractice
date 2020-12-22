for(let rep = 1; rep <= 10;rep++){
    console.log(`lifting weights repetition ${rep}`);
}
//for loop keeps running while condition is true

const jonasArray = [
    'Jonas',
    'Newport',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]
const types = [];
for(let i = 0; i < jonasArray.length; i++){
  types.push(jonasArray[i], typeof jonasArray[i])
}

console.log(types)

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++){
   ages.push(2037 - years[i])
}
console.log(ages)


//continue and break 
console.log('-----ONLY STRINGS')
for(let i = 0; i < jonasArray.length; i++){
 if(typeof jonasArray[i] !== 'string') continue;
 console.log(jonasArray[i], typeof jonasArray[i])
}
/// continue will only produce what happens if the if statement is met. Skips everything else.


console.log('-----BREAK WITH NUMBER')
for(let i = 0; i < jonasArray.length; i++){
 if(typeof jonasArray[i] === 'number') break;
 console.log(jonasArray[i], typeof jonasArray[i])
}
///as soon as it finds the first number break and terminate the loop

console.log('-----BACKWARDS')
for(let i = jonasArray.length - 1 ; i >= 0; i--){
    ///for counting down you make the counter the length -1 so it starts at zero 
    ///
    console.log(i,jonasArray[i])
}

for(let exercise = 1; exercise <=3; exercise++){
    console.log(`---------Starting exercise ${exercise}`)


    for(let rep=1; rep <= 5; rep++){
        console.log(`Excercise ${exercise} Lifting weight repetition ${rep}`)
        //loop inside of a loop
    }
}
//repeating the same loop multiple times 



// for(let rep = 1; rep <= 10;rep++){
//     console.log(`lifting weights repetition ${rep}`);
// }

//while loop
let rep = 1;
//define counter outside of loop
while(rep <= 10){ //condition 
    console.log(`lifting weights repetition ${rep}`);
    rep++ //increase it in loop
}
//use while loops when you don't need a counter
let dice = Math.trunc(Math.random() * 6) + 1
//dice equals a random number between 1 and 6
while(dice !== 6){
    //run loop till number is 6 
    //while number is not 6 keep running
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1
    //generate a new number each time through till you get a 6
    if(dice === 6){
       console.log(`loop is about to end...`) 
    }
    //if the number is a six log this statement
    
}






