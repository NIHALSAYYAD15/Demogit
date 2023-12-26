class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} make a noise.`);
    }
}

var ani = new Animal("Dogs");
ani.speak();