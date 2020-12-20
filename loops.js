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