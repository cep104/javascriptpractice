//calling a function inside of a function

document.addEventListener('DOMContentLoaded', (event) => {
    fruitProcessor()
    yearsUntilRetirement()

});

function cutFruitPieces(fruit){
    return fruit * 4
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges. `
    return juice
}

const calcAge = function(birthYear){
    return 2037 - birthYear
}



const yearsUntilRetirement = function(birthYear, firstName = 'person'){
    const age = calcAge(birthYear)
    const retirement = 65 - age; 
    const body = document.querySelector("body")
    const div = document.createElement("div")
    body.appendChild(div)
    if(retirement > 0){
    div.innerHTML = `${firstName} retires in ${retirement} years`;
    }else{
        div.innerHTML = `${firstName} has already retired`;
        //return -1 to show they have already retired 
    }
}
// objects 
const jonasArray = [
    'Jonas', 
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']


];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037-1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}
//
console.log(jonas.lastName)
console.log(jonas['firstName'])
const nameKey = 'Name';
console.log(jonas['first' + nameKey])
//you can put any expression in the square bracket 
 const interesedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends')

 if(jonas[interesedIn]){
 console.log(jonas[interesedIn]);
 }else{
     console.log('this value does not exist. Choose between firstName, lastName, age, job, and friends')
 }
 //prompts used to put an expression in. use bracket notation to get this result. Bracket notation can take expressons and get evaluated where . notiaton won't 

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasscmedtman';
console.log(jonas)

//with bracket notation you can put any expression. 

//"Jonas has three friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)


