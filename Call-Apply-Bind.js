/*var car = {
    registrationNumber: "FT1234",
    brand: "Benz",

    displayDetails: function(){
        console.log(this.registrationNumber+" "+this.brand);
    }

}*/

//car.displayDetails();    //FT1234 Benz

//But what if we want to we want to borrow a method?
// var myCarDetails() = ca.displayDetails;
//myCarDetails

// well, this won't work as the 'this' will be now assigned to the global context with doesn't have neither the registrations

//var myCarDetails = car.displayDetails.bind(car);
//myCarDetails();   //FT1234 Benz


// // Let me rewrite the car object:
/*
var car = {
    registrationNumber: "FT1234",
    brand: "Benz",

    displayDetails: function(ownerName){
        console.log(ownerName +", this is your car: "+this.registrationNumber+ " "+ this.brand);
}
}

// Example of passing arguments with bind():

var myCarDetails = car.displayDetails.bind(car, "Abdullah"); //Abdullah, this is your car: FT1234 Benz
myCarDetails();

*/

// // call() and apply() methods

// // this time there is a car object without the displayDetails function, which is located in the global context.

var car = {
    registrationNumber: "FT1234",
    brand: "Benz",
}

function displayDetails(ownerName){
    console.log(ownerName +", this is your car: "+this.registrationNumber+ " "+ this.brand);
}

// we can use the apply() function:

displayDetails.apply(car, ["Nihal"]);   // Nihal, this is your car: FT1234 Benz

// or 

displayDetails.call(car, "NIHAL");      // Nihal, this is your car: FT1234 Benz