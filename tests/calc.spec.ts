import {expect, test} from "@playwright/test";
import {Calculator} from "../feature/calc";

test('Calculator - addition',  () => {
    const result = Calculator.add(1, 2);
    expect(result).toBe(3);
});

test('Calculator - subtraction',() => {
    const result = Calculator.subtract(4, 2);
    expect(result).toBe(2);
});

const testData = [
    { x: 1, y: 2, expected: 3 },
    { x: 4, y: 2, expected: 6 },
    { x: 3, y: 2, expected: 5 },
];

for (const data of testData) {
    test(`Calculator - addition (${data.x} + ${data.y} = ${data.expected})`, async () => {
        const result = Calculator.add(data.x, data.y);
        expect(result).toBe(data.expected);
    });
}