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