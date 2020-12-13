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

