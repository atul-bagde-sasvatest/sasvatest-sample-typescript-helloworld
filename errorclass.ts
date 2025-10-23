export class Person {
    name: string;
    age: number;

    constructor(age: number) {
        this.age = age
    }

    getAge(): number {
        return this.age;
    }

    setAge(newAge: string): void {
        if (newAge < 0) {
            console.log("Age cannot be negative");
        } else {
            this.age = newAge;
        }
    }
}
