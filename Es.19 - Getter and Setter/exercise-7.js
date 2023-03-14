class Person {
  _firstName = "Gabriel";
  _lastName = "Marchegiani";
  _age = 23;

  constructor (firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  //set and get per il parametro _firstName
  get firstName() {
    return this._firstName;
  }
  set firstName(newFirstName) {
    this._firstName = newFirstName;
  }

  //set and get per il parametro _lastName
  get lastName() {
    return this._lastName;
  }
  set lastName(newLastName) {
    this._lastName = newLastName;
  }


  //set and get per il parametro _age
  get age() {
    return this._age;
  }
  set age(newAge) {
    this._age = newAge;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);