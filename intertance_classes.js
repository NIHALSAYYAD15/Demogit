class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} make a noise.`);
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);  //call the super class constructor and pass in name parameters
    }

    braks(){
        console.log(`${this.name} barks.`);
    }
}

var d = new Dog("Pug");
d.speak();
d.braks();