//The apply() method is similar to the call() method
//With the apply() method, you can write a method that can be used on different objects.

//The apply() method takes arguments as an array.

const person = {
  fullName: function(city, country) {
    console.log(this.firstName + " " + this.lastName + ", " + city + ", " + country);
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.apply(person1, ["Kolahpur", "India"]);