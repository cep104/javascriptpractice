const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    // calcAge: function (birthYear){
    //    return 2037-birthYear;
    // }
    // calcAge: function (){
    //     // console.log(this)
    //     //returns the whole jonas object
    //     return 2037-this.birthYear;
    //  }
     //this represents jonas in this case

     calcAge: function() {
      this.age = 2037 - this.birthYear;
      return this.age;
     },

     getSummary: function(){
            return   `${this.firstName} is a ${this.calcAge()}-year old teacher, and ${this.hasDriversLicense ? `has a`:`doesn't have a`} driver's licence`
         
     }

};
//any object that is attached to an object is called a method. 


// console.log(jonas.calcAge(1991));
// console.log(jonas['calcAge'](1991));
//access the property using brackets in string then call function with parameter. 
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary())



