const a: number = 345;
console.log(a);

const numberArr: number[] = [1,2,3];
const numberArr2: Array<number> = [1,2,3,4];
console.log(numberArr);
console.log(numberArr2);

const strArr : string[] = ['1','2','3.3'];
console.log(strArr);

const contact: [string, number] = ['Den', 1232];
const contact2: Array<string | number> = ['Den2', 2222];
console.log(contact);
console.log(contact2);


let anyVariable: any = 45;
anyVariable = [];
console.log(anyVariable);

function sayName(name: string): void {
    console.log(name);
}
sayName('lol');

// Type

type Id = string | number;

const id: Id = 34;
