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

type Item = {
    title: string;
    rating: number;
};

function filterByRating(items: Item[]): Item[] {

    const output: Item[] = items.filter(item => item.rating >= 4);
    return output;
}

const books: Item[] = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];

