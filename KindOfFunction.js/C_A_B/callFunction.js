//The call() method is a predefined JavaScript method.
//It can be used to invoke (call) a method with an owner object as an argument (parameter).

//The call() method takes arguments separately.

const person = {
    fullName: function() {
      console.log(this.firstName + " " + this.lastName);
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "John Doe":
  person.fullName.call(person1);

  // This will return "Mary Doe":
  person.fullName.call(person2);