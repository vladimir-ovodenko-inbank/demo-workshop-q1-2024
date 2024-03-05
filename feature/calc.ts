export class Calculator {
    static add(x: number, y: number): number {
        return x + y;
    }

    static subtract(x: number, y: number): number {
        return x - y;
    }

    static multiply(x: number, y: number): number {
        return x * y;
    }

    static divide(x: number, y: number): number {
        if (y === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return x / y;
    }
}
