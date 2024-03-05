import {Person} from "../../learn-ts/tests-examples/scripts/person";

class Developer extends Person {

    constructor(
        name: string,
        isCool: boolean,
        friends: number,
        age: number
    ){
        // call from Person
        super(name, isCool, friends, age);
    }
}

console.log("start ...")
const dev = new Developer('MarkDev', true, 2, 4)
console.log( dev.sayHello() )
dev.age = 5;
// dev.name = "NN";
console.log( dev.sayHello() )