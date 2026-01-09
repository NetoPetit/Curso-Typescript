/*eslint-disable*/

//Tipos básicos
let nome: string = 'Luiz';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
//let big: bigint = 10n;

//Arrays
let arrayDeNumeros: Array<number> = [1,2,3];
let arrayDeNumeros2: number[] = [1,2,3];
let arrayDeString: Array<string> = ['a', 'b'];
let arrayDeString2: string[] = ['a', 'b'];

//Objetos
let pessoa: {nome:string, idade:number, adulto?:boolean} = {
  nome: 'Neto',
  idade: 37
}

//Funções
function soma(x: number, y: number): number{
  return x + y;
}

const soma2: (x:number, y:number) => number = (x, y) => x + y;
