let sport = 'Sport';
console.log( sport.toLowerCase() );
console.log( sport );
let sp = sport.toLowerCase();
console.log( sp );

let isPositive : boolean;

let id: number = 5;
let firstname: string = 'Mark';
let unit: number;

let idt = 5;
let firstnameType = 'danny';
let hasDogType = true;

let age: string | number; // mixed variable
age = 26;
age = '26';

let lastName = String('Piret');

let ids: number[] = [1, 2, 3, 4, 5]; // numbers only

let names: string[] = ['Den', 'Emm', 'Nik']; // strings only

let books: object[] = [
    { name: 'Alice', author: 'LK' },
    { name: 'Idiot', author: 'FD' },
]; // objects


let person: {
    name: string;
    location: string;
    isProgrammer: boolean;
};

// objects
person = {
    name: 'Den',
    location: 'EE',
    isProgrammer: true,
};

function circle(diam: number): string {
    return 'circle length: ' + Math.PI * diam;
}

const circleArrowStyle = (diam: number): string => {
    return 'circle length: ' + Math.PI * diam;
}

console.log(circle(10));

const logMessage = (msg: string): void => {
    console.log('Logs:: ' + msg);
};

logMessage("a new log");
