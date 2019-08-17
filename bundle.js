"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
/* Desestruturação */

var usuarioDes = {
  nome: 'Danilo',
  idade: 25,
  endereco: {
    cidade: 'Sao Paulo',
    estado: 'Sao Paulo'
  }
};
console.log('DESESTRUTURAÇÃO', usuarioDes);
var nome = usuarioDes.nome,
    idade = usuarioDes.idade,
    cidade = usuarioDes.endereco.cidade;
console.log('DESESTRUTURAÇÃO - nome', nome);
console.log('DESESTRUTURAÇÃO - idade', idade);
console.log('DESESTRUTURAÇÃO - cidade', cidade);
/* DESESTRUTURAÇÃO COM FUNCTION */

function mostraNome(_ref) {
  var nome = _ref.nome;
  console.log('MOSTRA NOME', nome);
}

mostraNome(usuarioDes);
/* Operadores REST/SPREAD */
// REST - pega o resto das propriedades

var client = {
  name: 'Danilo',
  age: 25,
  company: 'Dan-tech'
};

var name = client.name,
    resto = _objectWithoutProperties(client, ["name"]);

console.log('REST - SPREAD', name);
console.log('REST - SPREAD - resto', resto);
var restArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var b = restArr[0],
    c = restArr.slice(1);
console.log('REST - SPREAD - array - b', b);
console.log('REST - SPREAD - array - c', c); // Essa variavel ficou com o resto dos valores restantes

function sumRest() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log('REST - SPREAD - sumRest', sumRest(2, 5, 6));
/* SPREAD - Propagador, repassa as informações de um objeto ou array para outra estrutura de dados */

var arr001 = [1, 2, 3, 4, 5];
var arr002 = [6, 7, 8, 9, 10];
var arr003 = [].concat(arr001, arr002);
console.log('SPREAD', arr003);
var dog = {
  name: 'max',
  age: 4,
  weight: 14
};

var dog2 = _objectSpread({}, dog, {
  name: 'Tody'
});

console.log('SPREAD - Object', dog2);
/* Template Literals */

var nameTemplate = 'Diego';
var idadeTemplate = 23;
console.log('TEMPLATE LITERALS', "Meu nome \xE9 ".concat(nameTemplate, " e tenho ").concat(idadeTemplate));
/* Object Short Syntax */

var nameOSS = 'Danilo';
var idadeOSS = 25;
/*  Quando o nome da variavel é igual ao nome da propriedade que será passada não é 
    necessário defini-la, basta deixar uma delas no objeto
*/

var usuarioOSS = {
  nameOSS: nameOSS,
  idadeOSS: idadeOSS,
  company: 'Rocketseat'
};
console.log('Object Short Syntax', usuarioOSS);
