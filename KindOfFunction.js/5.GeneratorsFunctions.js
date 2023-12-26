//5.Generators Functions

function* idGenerator(){
    let id=0;
    while(true){
        yield id++;
    }
}

const gen = idGenerator();

console.log(gen.next().value); //0
console.log(gen.next().value); //1
console.log(gen.next().value); //2
console.log(gen.next().value); //3