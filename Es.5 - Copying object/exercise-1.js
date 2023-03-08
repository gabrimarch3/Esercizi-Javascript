const person1 = {
  firstName: "Marco",
  lastName: "Doe",
  age: 25,
};

// const person2 = person1;
// La funzione di cui sopra farebbe si che person2 sia strettamente uguale a person1. Utilizzando Object.assign invece, i due oggetti saranno indipendenti l'uno dall'altro.
const person2 = Object.assign({}, person1);
person2.firstName = "Simon"
// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);
