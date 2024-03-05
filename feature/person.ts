export class Person {
    readonly name: string;
    private isCool: boolean;
    protected friends: number;
    public age: number; // access modifier by default

    constructor(name: string, cool: boolean, friends: number, age: number) {
        this.name = name;
        this.isCool = cool;
        this.friends = friends;
        this.age = age;
    }

    sayHello() {
        return `Hi, my name is ${this.name}, I have ${this.friends} friends and my age is ${this.age}`;
    }
}

console.log('person class ...')
const person1 = new Person('Dn', false, 10, 20);
console.log(person1.sayHello());

