let num: number = 12345;    // number
let txt: string = 'TS';     // string
let bol: boolean = true;    // boolean
let xyz: any;               // any type like JS

// array
let arr: number[] = [1,2];  // array
let ar2: any[] = [1,'2'];   // like JS array
let arr3:(string|number)[]; // либо string, либо number
arr3 = ['1', 2, 3, '4']
// спец методы типов без проверки на тип
console.log(arr.forEach(n => n.toFixed(2)));

// tupple - массив только опред числа эл, опред типов
let tup: [number, boolean] = [1, false];
tup[0].toFixed(2);          // спец методы типов

// enum
enum Si {One = 1, Two};     // enum, 1 - custom start number 

class Person {
    private ssn: string;            // private - доступ внутри класса
    public firstName: string;       // по умолчанию все поля/методы public
    protected lastName: string;     // доступен только в классе и сабклассах
    readonly birthDate: Date;       // final field не изменямая
    private _age : number;          // поле для геттера/сеттера

    constructor(ssn: string, firstName: string, lastName: string, birthDate: Date, age: number) {
        this.ssn = ssn;             
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate; // readonly обязательно иниц в конструкторе
        this._age = age;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public get age() {              // getter
        return this._age;
    }

    public set age(ag: number) {    // setter
        if (ag <= 0 || ag >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = ag;
    }
}

class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {

        super('23dcvf', firstName, lastName, new Date(), 10);
    }
}

interface A {
    name: string;
}

interface B {
    age: number;
}

// my types
type myTypeAND = A & B;     // 
type myTypeOR = A | B;

let Igor: myTypeAND = {name: 'Igor', age: 49};
let Inna: myTypeOR = {name: 'Inna'};
let Egor: myTypeOR = {age: 45};
let Lilu: myTypeOR = {name: 'Lilu', age: 19};

// primitive
type xz = string | number;
let myVar1: xz = 12;
let myVar2: xz = '12';

let hui = 'hui';
typeof hui === 'string';
Igor instanceof Employee;

let a = <number><unknown>'12';