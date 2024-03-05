import { Calculator } from '../../learn-ts/tests-examples/scripts/calculator';

class MathOperations {
    static add(x: number, y: number): number {
        return x + y;
    }

    static subtract(x: number, y: number): number {
        return x - y;
    }
}

console.log(MathOperations.add(5111, 3));
console.log(MathOperations.subtract(10, 4));

let sum = Calculator.add(5100, 3);
console.log("Sum:", sum);
