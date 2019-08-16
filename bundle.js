"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log('add', this.data);
    }
  }]);

  return List;
}();

var TodoList =
/*#__PURE__*/
function (_List) {
  _inherits(TodoList, _List);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this)); // chama o construtor da classe pai

    _this.usuario = 'Danilo';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log('usuario', this.usuario);
    }
  }]);

  return TodoList;
}(List); // class TodoList {
//   constructor() {
//     this.todos = [];
//   }
//   addTodo() {
//     this.todos.push('Novo todo');
//     console.log('todos', this.todos);
//   }
// }


var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('Novo todo');
};

MinhaLista.mostraUsuario();

var Matematica =
/*#__PURE__*/
function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      console.log('soma', a + b);
      return a + b;
    }
  }]);

  return Matematica;
}();

Matematica.soma(25, 25);
/* Const & Let */

var a = 1; // Não podemos reatribuir um valor a uma variavel

var usuario = {
  nome: 'Danilo'
};
usuario.nome = 'Ricardo'; // Essa mutação é valida

console.log('Usuario - Const & Let', usuario);
/* Operações em Vetores */

var arr = [1, 3, 4, 5, 8, 9];
var newArr = arr.map(function (item, index) {
  return item * index;
});
console.log('Vetor - arr', newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log('REDUCE', sum);
/* Fazendo um 'FILTER' no Javascript */

var filter = arr.filter(function (item) {
  // Retorna o número do vetor se uma condição for verdadeira
  return item % 2 === 0;
});
/* 'FIND' verificar se existe alguma informação dentro do array */

var find = arr.find(function (item) {
  return item === 4;
});
console.log('FIND', find);
/* Trabalhando com Arrow Functions */

var myArrFun = [1, 2, 3, 4, 5, 6, 7, 8];
var testArr = myArrFun.map(function (item) {
  return item * 2;
});
console.log('ARROW FUNCTION', testArr);

var teste = function teste() {
  return 'teste';
};

var test2 = function test2() {
  return {
    name: 'Vitrine'
  };
};

console.log('ARROW FUNCTION - TEST', teste, test2);
/* Valores Padrão */

var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  return a + b;
}; // Soma em forma de Arrow Function


console.log('VALORES PADRAO - PART 1', soma(1));
console.log('VALORES PADRAO - PART 2', soma());
