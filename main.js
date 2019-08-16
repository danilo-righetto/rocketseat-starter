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