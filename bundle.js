/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! exports provided: somaFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"somaFunc\", function() { return somaFunc; });\nfunction somaFunc(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./funcoes.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _funcoes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcoes */ \"./funcoes.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar List =\n/*#__PURE__*/\nfunction () {\n  function List() {\n    _classCallCheck(this, List);\n\n    this.data = [];\n  }\n\n  _createClass(List, [{\n    key: \"add\",\n    value: function add(data) {\n      this.data.push(data);\n      console.log('add', this.data);\n    }\n  }]);\n\n  return List;\n}();\n\nvar TodoList =\n/*#__PURE__*/\nfunction (_List) {\n  _inherits(TodoList, _List);\n\n  function TodoList() {\n    var _this;\n\n    _classCallCheck(this, TodoList);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this)); // chama o construtor da classe pai\n\n    _this.usuario = 'Danilo';\n    return _this;\n  }\n\n  _createClass(TodoList, [{\n    key: \"mostraUsuario\",\n    value: function mostraUsuario() {\n      console.log('usuario', this.usuario);\n    }\n  }]);\n\n  return TodoList;\n}(List); // class TodoList {\n//   constructor() {\n//     this.todos = [];\n//   }\n//   addTodo() {\n//     this.todos.push('Novo todo');\n//     console.log('todos', this.todos);\n//   }\n// }\n\n\nvar MinhaLista = new TodoList();\n\ndocument.getElementById('novotodo').onclick = function () {\n  MinhaLista.add('Novo todo');\n};\n\nMinhaLista.mostraUsuario();\n\nvar Matematica =\n/*#__PURE__*/\nfunction () {\n  function Matematica() {\n    _classCallCheck(this, Matematica);\n  }\n\n  _createClass(Matematica, null, [{\n    key: \"soma\",\n    value: function soma(a, b) {\n      console.log('soma', a + b);\n      return a + b;\n    }\n  }]);\n\n  return Matematica;\n}();\n\nMatematica.soma(25, 25);\n/* Const & Let */\n\nvar a = 1; // Não podemos reatribuir um valor a uma variavel\n\nvar usuario = {\n  nome: 'Danilo'\n};\nusuario.nome = 'Ricardo'; // Essa mutação é valida\n\nconsole.log('Usuario - Const & Let', usuario);\n/* Operações em Vetores */\n\nvar arr = [1, 3, 4, 5, 8, 9];\nvar newArr = arr.map(function (item, index) {\n  return item * index;\n});\nconsole.log('Vetor - arr', newArr);\nvar sum = arr.reduce(function (total, next) {\n  return total + next;\n});\nconsole.log('REDUCE', sum);\n/* Fazendo um 'FILTER' no Javascript */\n\nvar filter = arr.filter(function (item) {\n  // Retorna o número do vetor se uma condição for verdadeira\n  return item % 2 === 0;\n});\n/* 'FIND' verificar se existe alguma informação dentro do array */\n\nvar find = arr.find(function (item) {\n  return item === 4;\n});\nconsole.log('FIND', find);\n/* Trabalhando com Arrow Functions */\n\nvar myArrFun = [1, 2, 3, 4, 5, 6, 7, 8];\nvar testArr = myArrFun.map(function (item) {\n  return item * 2;\n});\nconsole.log('ARROW FUNCTION', testArr);\n\nvar teste = function teste() {\n  return 'teste';\n};\n\nvar test2 = function test2() {\n  return {\n    name: 'Vitrine'\n  };\n};\n\nconsole.log('ARROW FUNCTION - TEST', teste, test2);\n/* Valores Padrão */\n\nvar soma = function soma() {\n  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;\n  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;\n  return a + b;\n}; // Soma em forma de Arrow Function\n\n\nconsole.log('VALORES PADRAO - PART 1', soma(1));\nconsole.log('VALORES PADRAO - PART 2', soma());\n/* Desestruturação */\n\nvar usuarioDes = {\n  nome: 'Danilo',\n  idade: 25,\n  endereco: {\n    cidade: 'Sao Paulo',\n    estado: 'Sao Paulo'\n  }\n};\nconsole.log('DESESTRUTURAÇÃO', usuarioDes);\nvar nome = usuarioDes.nome,\n    idade = usuarioDes.idade,\n    cidade = usuarioDes.endereco.cidade;\nconsole.log('DESESTRUTURAÇÃO - nome', nome);\nconsole.log('DESESTRUTURAÇÃO - idade', idade);\nconsole.log('DESESTRUTURAÇÃO - cidade', cidade);\n/* DESESTRUTURAÇÃO COM FUNCTION */\n\nfunction mostraNome(_ref) {\n  var nome = _ref.nome;\n  console.log('MOSTRA NOME', nome);\n}\n\nmostraNome(usuarioDes);\n/* Operadores REST/SPREAD */\n// REST - pega o resto das propriedades\n\nvar client = {\n  name: 'Danilo',\n  age: 25,\n  company: 'Dan-tech'\n};\n\nvar name = client.name,\n    resto = _objectWithoutProperties(client, [\"name\"]);\n\nconsole.log('REST - SPREAD', name);\nconsole.log('REST - SPREAD - resto', resto);\nvar restArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];\nvar b = restArr[0],\n    c = restArr.slice(1);\nconsole.log('REST - SPREAD - array - b', b);\nconsole.log('REST - SPREAD - array - c', c); // Essa variavel ficou com o resto dos valores restantes\n\nfunction sumRest() {\n  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {\n    params[_key] = arguments[_key];\n  }\n\n  return params.reduce(function (total, next) {\n    return total + next;\n  });\n}\n\nconsole.log('REST - SPREAD - sumRest', sumRest(2, 5, 6));\n/* SPREAD - Propagador, repassa as informações de um objeto ou array para outra estrutura de dados */\n\nvar arr001 = [1, 2, 3, 4, 5];\nvar arr002 = [6, 7, 8, 9, 10];\nvar arr003 = [].concat(arr001, arr002);\nconsole.log('SPREAD', arr003);\nvar dog = {\n  name: 'max',\n  age: 4,\n  weight: 14\n};\n\nvar dog2 = _objectSpread({}, dog, {\n  name: 'Tody'\n});\n\nconsole.log('SPREAD - Object', dog2);\n/* Template Literals */\n\nvar nameTemplate = 'Diego';\nvar idadeTemplate = 23;\nconsole.log('TEMPLATE LITERALS', \"Meu nome \\xE9 \".concat(nameTemplate, \" e tenho \").concat(idadeTemplate));\n/* Object Short Syntax */\n\nvar nameOSS = 'Danilo';\nvar idadeOSS = 25;\n/*  Quando o nome da variavel é igual ao nome da propriedade que será passada não é \n    necessário defini-la, basta deixar uma delas no objeto\n*/\n\nvar usuarioOSS = {\n  nameOSS: nameOSS,\n  idadeOSS: idadeOSS,\n  company: 'Rocketseat'\n};\nconsole.log('Object Short Syntax', usuarioOSS);\n/* WEBPACK */\n\nconsole.log('WEBPACK - PART 1', Object(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"somaFunc\"])(2, 3));\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });