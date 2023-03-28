let num: number = 12345;    // number
let txt: string = 'TS';     // string
let bol: boolean = true;    // boolean
let xyz: any;               // any type like JS

// array
let arr: number[] = [1,2];  // array
let ar2: any[] = [1,'2'];   // like JS array
// спец методы типов без проверки на тип
console.log(arr.forEach(n => n.toFixed(2)));

// tupple - массив только опред числа эл, опред типов
let tup: [number, boolean] = [1, false];
tup[0].toFixed(2);          // спец методы типов

// enum
enum Si {One = 1, Two};     // enum, 1 - custom start number 