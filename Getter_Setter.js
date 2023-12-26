class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    set fullName(name) {
      const parts = name.split(' ');
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  }
  
  // Getter is calling here
  const person = new Person('John', 'Doe');
  console.log(person.fullName); // John Doe
  
  // Setter is calling here
  person.fullName = 'Jane Smith';
  console.log(person.fullName); // Jane Smith
  