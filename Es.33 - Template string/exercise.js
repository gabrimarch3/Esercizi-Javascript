class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const developer = new Person("Mario", "Rossi");
console.log(`Mi chiamo ${developer.firstName} ${developer.lastName}`);
