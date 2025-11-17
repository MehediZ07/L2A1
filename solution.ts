function formatValue (value: string | number | boolean): string | number | boolean {
    if (typeof value === "string") {
        return value.toUpperCase();
    } 
    if (typeof value === "number") {
        return value * 10;
    } if (typeof value === "boolean") {
    return !value;
    }
    throw new Error("Input must be a string, number, or boolean");
}

function getLength(value: string | any[]): number {
    if (typeof value === "string") {
        return value.length;
    } 
    if (Array.isArray(value)) {
        return value.length;
    }
    throw new Error("Input must be a string or an array");
}

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        const output = `'Name: ${this.name}, Age: ${this.age}'`;
        return output;
    }
}



