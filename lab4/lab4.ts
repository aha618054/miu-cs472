//------------------1-----------------------
class University {
    name: string;
    dept: string;

    constructor(name: string, dept: string) {
        this.name = name;
        this.dept = dept;
    }

    graduation(year: number) {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}
let miu: University = new University("MIU", "MSD");
console.log('------------------1-----------------------');
miu.graduation(2021);

//------------------2-----------------------
type BankAccount = {
    money: number;
    deposit: (value: number) => void;
};

type Person = {
    name: string;
    bankAccount: BankAccount;
    hobbies: string[];
};

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
let myself: Person = {
    name: "John",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log('------------------2-----------------------');
console.log(myself);

//------------------3-----------------------
interface IPerson {
    name: string;
    age: number;
    isStudent: boolean;
}
function describePerson(person: IPerson): string {
    const studentStatus = person.isStudent ? "a student" : "not a student";
    return `${person.name} is ${person.age} years old and is ${studentStatus}.`
}
const person: IPerson = { name: "Alice", age: 25, isStudent: true };
console.log('------------------3-----------------------');
console.log(describePerson(person));