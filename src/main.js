import { somaFunc, subFunc, div as dvision } from './funcoes';
import somaExemplo from './soma';
import * as funcoes from './funcoes';
class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log('add', this.data);
  }
}

class TodoList extends List {
 constructor() {
   super(); // chama o construtor da classe pai

   this.usuario = 'Danilo';
 }

 mostraUsuario() {
   console.log('usuario', this.usuario);
 }
}

// class TodoList {
//   constructor() {
//     this.todos = [];
//   }

//   addTodo() {
//     this.todos.push('Novo todo');
//     console.log('todos', this.todos);
//   }
// }

let MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();

class Matematica {
  static soma(a, b) {
    console.log('soma', a + b);
    return a + b;
  }
}

Matematica.soma(25, 25);

/* Const & Let */
const a = 1; // Não podemos reatribuir um valor a uma variavel

const usuario = { nome: 'Danilo'};

usuario.nome = 'Ricardo'; // Essa mutação é valida

console.log('Usuario - Const & Let', usuario);


/* Operações em Vetores */
const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item, index) {
  return item * index;
});

console.log('Vetor - arr', newArr);

const sum = arr.reduce(function(total, next){
  return total + next;
});

console.log('REDUCE', sum);

/* Fazendo um 'FILTER' no Javascript */
const filter = arr.filter(function(item) {
  // Retorna o número do vetor se uma condição for verdadeira
  return item % 2 === 0;
});

/* 'FIND' verificar se existe alguma informação dentro do array */
const find = arr.find(function(item){
  return item === 4;
});

console.log('FIND', find);

/* Trabalhando com Arrow Functions */
const myArrFun = [1, 2, 3, 4, 5, 6, 7, 8];

const testArr = myArrFun.map(item => item * 2);

console.log('ARROW FUNCTION', testArr);

const teste = () => {
  return 'teste';
};

const test2 = () => ({ name: 'Vitrine' });

console.log('ARROW FUNCTION - TEST', teste, test2);

/* Valores Padrão */
const soma = (a = 2, b = 3) => a + b; // Soma em forma de Arrow Function

console.log('VALORES PADRAO - PART 1', soma(1));
console.log('VALORES PADRAO - PART 2',soma());

/* Desestruturação */
const usuarioDes = {
  nome: 'Danilo',
  idade: 25,
  endereco: {
    cidade: 'Sao Paulo',
    estado: 'Sao Paulo'
  }
};

console.log('DESESTRUTURAÇÃO', usuarioDes);

const { nome, idade, endereco: { cidade } } = usuarioDes;
console.log('DESESTRUTURAÇÃO - nome', nome);
console.log('DESESTRUTURAÇÃO - idade', idade);
console.log('DESESTRUTURAÇÃO - cidade', cidade);

/* DESESTRUTURAÇÃO COM FUNCTION */
function mostraNome({ nome }){
  console.log('MOSTRA NOME', nome);
}

mostraNome(usuarioDes);

/* Operadores REST/SPREAD */

// REST - pega o resto das propriedades

const client = {
  name: 'Danilo',
  age: 25,
  company: 'Dan-tech'
};

const { name, ...resto } = client;
console.log('REST - SPREAD', name);
console.log('REST - SPREAD - resto', resto);

const restArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [ b, ...c ] = restArr;

console.log('REST - SPREAD - array - b', b);
console.log('REST - SPREAD - array - c', c); // Essa variavel ficou com o resto dos valores restantes

function sumRest(...params) {
  return params.reduce((total, next) => total + next);
}

console.log('REST - SPREAD - sumRest', sumRest(2, 5, 6));

/* SPREAD - Propagador, repassa as informações de um objeto ou array para outra estrutura de dados */
const arr001 = [1, 2, 3, 4, 5];
const arr002 = [6, 7, 8, 9, 10];

const arr003 = [ ...arr001, ...arr002 ];

console.log('SPREAD', arr003);

const dog = {
  name: 'max',
  age: 4,
  weight: 14
}

const dog2 = { ...dog, name: 'Tody' }

console.log('SPREAD - Object', dog2);

/* Template Literals */
const nameTemplate = 'Diego';
const idadeTemplate = 23;

console.log('TEMPLATE LITERALS', `Meu nome é ${nameTemplate} e tenho ${idadeTemplate}`);

/* Object Short Syntax */
const nameOSS = 'Danilo';
const idadeOSS = 25;

/*  Quando o nome da variavel é igual ao nome da propriedade que será passada não é 
    necessário defini-la, basta deixar uma delas no objeto
*/
const usuarioOSS = {
  nameOSS,
  idadeOSS,
  company: 'Rocketseat'
};

console.log('Object Short Syntax', usuarioOSS);

/* WEBPACK */
console.log('WEBPACK - PART 1', somaFunc(2, 3));

/* IMPORT/EXPORT */
console.log('WEBPACK - PART 1', subFunc(6, 3));

console.log('WEBPACK - PART 2 - somaExemplo', somaExemplo(6, 3));

console.log('WEBPACK - PART 2 - dvision', dvision(6, 3));

console.log('WEBPACK - PART 2 - funcoes', funcoes);

/* Webpack dev server */
alert('Opa!');