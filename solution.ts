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

type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
    const output: User[] = users.filter(user => user.isActive);
    return output;
}

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): void {
    const availability = book.isAvailable ? "Yes" : "No";
    const output = `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
    console.log(output);
}

function getUniqueValues(array1: (number | string)[], array2: (number | string)[]): (number | string)[] {
    const output : (number | string)[] = [];
    const combineBothArrays : (number | string)[] = [...array1, ...array2];

    function exists(input: number | string, arr: (number | string)[]): boolean {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === input) return true;
        }
        return false;
    }

    for (let i = 0; i < combineBothArrays.length; i++) {
        if (!exists(combineBothArrays[i], output)) {
            output.push(combineBothArrays[i]);
        }
    }

    return output;
}

type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

function calculateTotalPrice(products: Product[]): number {

    if (products.length === 0) return 0;

    const output: number =  products.reduce((acc, product) => {
        const total = product.price * product.quantity;
        const discount = product.discount ? (product.discount / 100) * total : 0;
        return acc + (total - discount);
    }, 0);

    return output;

}
