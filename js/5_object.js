console.clear();

// Object

var personInfo = {
  firstName: "anshul",
  lastName: "choursiya",
  age: 18,
  eyeColor: "red",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(personInfo);
console.table(personInfo);
console.log(personInfo.fullName());
