/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/translate.js":
/*!********************************!*\
  !*** ./assets/js/translate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Translate),\n/* harmony export */   \"Animata\": () => (/* binding */ Animata)\n/* harmony export */ });\nclass Translate {\n  // constructor(targets) {\n  // this.el = targets.el;\n  // }\n  // change() {\n  //     this.el.classList.add('ani')\n  // }\n  // load(el) {\n  //     el.classList.add('ani');\n  // }\n  // mount(el) {\n  //     el.classList.add('ani')\n  // }\n  constructor(ani) {\n    let {\n      targets,\n      count\n    } = ani;\n    this.newTargets = targets;\n  }\n\n  change() {\n    if (!this.newTargets.length) return;\n    let target = this.newTargets.shift();\n\n    let _this = this;\n\n    target.el.classList.add(target.animationClassName);\n\n    function startAni() {\n      setTimeout(() => {\n        target.el.classList.add(target.animationClassName);\n        target.el.removeEventListener('animationstart', startAni);\n\n        _this.change();\n      });\n    }\n\n    target.el.addEventListener('animationstart', startAni);\n  }\n\n} // class Opacity {\n//     constructor() {\n//     }\n//     load(el) {\n//         console.log(el);\n//         el.classList.add('opacity');\n//     }\n// }\n\nclass Animata {\n  constructor(ani) {\n    this.ani = ani; // this.type = ani.type;\n    // this.el = ani.el;\n    // console.log(this.el);\n    // this.model = ani.model;\n    // this.el = ani.el;\n    // this.type = ani.type;\n    // this.load();\n  }\n\n  run() {}\n\n  static create() {\n    return new Animata();\n  }\n\n  use(Translate) {\n    try {\n      this.model = Translate.install;\n    } catch (e) {\n      this.model = Translate;\n    } //函数不返回值是undefined undefined.mount() \n\n\n    return this;\n  }\n\n  static el;\n\n  mount(el) {\n    Animata.el = el;\n    this.model().change();\n  }\n\n  change() {\n    this.ani.change(); //   new Translate(this.newTargets)\n  } // load() {\n  //     this.model.load()\n  // if (this.type == 'translate') {\n  //     this.model = new Translate();\n  //     this.model.load(this.el)\n  // } else if (this.type == 'opacity') {\n  //     this.model = new Opacity();\n  //     this.model.load(this.el)\n  // }\n  // }\n\n\n} // let animate = Animata.create().use(Translate).mount(document.querySelector('div')\n/// 继承\n// export default class Translate extends Animata {\n//     constructor() {\n//         super()\n//     }\n//     change() {\n//         // this.el.classList.add('ani');\n//         this.el.addEventListener('animationstart',function(e){\n//             e.target.classList.remove('ani-translate');\n//         })  \n//     }\n//     static install() {\n//         return new Translate()\n//     }\n// }\n///http://127.0.0.1:8080/\n// js中万物都是对象\n// 对象就有key 和 value \n// 如果value是属性,静态属性\n//如果value是方法,静态方法\n\n//# sourceURL=webpack://webpack-multpart-framework/./assets/js/translate.js?");

/***/ }),

/***/ "./assets/js/until.js":
/*!****************************!*\
  !*** ./assets/js/until.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Webpack),\n/* harmony export */   \"Url\": () => (/* binding */ Url),\n/* harmony export */   \"Markdown\": () => (/* binding */ Markdown)\n/* harmony export */ });\nclass Webpack {\n  constructor(hello) {\n    console.log(typeof hello.entry);\n\n    if (typeof hello.entry !== \"object\") {\n      //解构的写法\n      let {\n        entry,\n        output\n      } = hello;\n      let {\n        filename,\n        path\n      } = output;\n      let [before, after] = filename.split('/');\n      console.log(`将${entry}中的代码打包到${path}/${before}/文件夹中,文件名称叫${after}`); // this.text = hello.entry;\n      // this.subbefore = hello.output.filename.split('/')[1];\n      // this.path = hello.output.path;\n      // this.subafter = hello.output.filename.split('/')[2];\n      // console.log('将' + this.text + '中的代码打包到'\n      //     + this.path + '/' + this.subbefore + '文件夹中' + ','\n      //     + '文件名称叫' + this.subafter)\n    } else {\n      // 解构的写法\n      let {\n        entry,\n        output\n      } = hello;\n      let {\n        filename,\n        path\n      } = output;\n      let [file, dir, num] = filename.split('.');\n\n      for (const key in entry) {\n        file = entry[key];\n        dir = key;\n        let content = parseInt(Math.random() * 899999999999 + 100000000000);\n        console.log(`将${file}中的代码打包到/${path}/${dir}/文件夹中，文件名称叫${dir}.${content}.${num}`);\n      } // this.name = hello.output.filename.split('.')[0];\n      // this.content = hello.output.filename.split('.')[1];\n      // this.path = hello.output.path;\n      // this.js = hello.output.filename.split('.')[2];\n      // for (const key in hello.entry) {\n      //     let content = parseInt(Math.random() * 899999999999 + 100000000000);\n      //     this.name = hello.entry[key]\n      //     this.index = key\n      //     console.log(`将${this.name}中的代码打包到${this.path}/${this.index}文件夹中，文件名称叫${this.index}.${content}.${this.js}`)\n      // }\n\n    }\n  }\n\n}\nclass Url {\n  constructor(props) {\n    this.content = props;\n    this.obj = {};\n    this.searchParams = this.content.split('?')[1];\n    this.params = this.getParam();\n  }\n\n  getParam() {\n    this.searchParams.split('&').forEach(param => {\n      param = param.split('=');\n      this.obj[param[0]] = param[1];\n    });\n    return this.obj;\n  }\n\n  get(pro) {\n    if (!String) return '参数传入错误';\n    return this.params[pro];\n  }\n\n  parse() {\n    let arr = [];\n\n    for (const key in this.content) {\n      arr.push(key + '=' + this.content[key]);\n    }\n\n    return arr.join('&');\n  }\n\n} // 把html里面的#转换成h标签\n// export class Markdown {\n//     constructor(props) {\n//         this.el = props.el;\n//         //innerText拿到的文本没有换行\n//         this.content = props.el.textContent;\n//     }\n//     parse() {\n//         return this.parseHtml(this.content);\n//     }\n//     parseHtml(text) {\n//         let flag = false;\n//         let reg = /(#+)\\s+([^\\n]+)/;\n//         //只拿带#号的\n//         let res = text.replace(reg, function (item) {\n//         //每次都拿一行出来,次改之后#键不在就会把后面有#的取出来去修改\n//                 flag = true;\n//                 if (RegExp.$1.length) {\n//                     let n = RegExp.$1.length > 6 ? 6 : RegExp.$1.length;\n//                     let content = RegExp.$2;\n//                     return `<h${n}>${content}</h${n}>`;\n//                 } else {\n//                     let content = RegExp.$2;\n//                     return `<p>${content}</p>`;\n//                 }\n//         })\n//         if (flag) {\n//             res = this.parseHtml(res);\n//         }\n//         return res;\n//     }\n// }\n// //磊哥\n\nclass Markdown {\n  static TITLE_REG = /(#+)\\s+([^\\n]+)/;\n\n  constructor(props) {\n    this.text = props.text;\n  }\n\n  parse() {\n    return this.text.replace(/.+/g, item => {\n      if (Markdown.isTitle(item)) {\n        return this.parseTitle(item);\n      } else {\n        return this.parseParagraph(item);\n      }\n    });\n  }\n\n  parseParagraph(text) {\n    return text.trim().length ? `<p>${text.trim()}</p>` : '';\n  }\n\n  parseTitle(text) {\n    return text.replace(Markdown.TITLE_REG, function (item) {\n      let n = RegExp.$1.length > 6 ? 6 : RegExp.$1.length; // 1-6个#号；\n\n      let textConent = RegExp.$2;\n      return `<h${n}>${textConent}</h${n}>`;\n    });\n  }\n\n  static isTitle(val) {\n    return Markdown.TITLE_REG.test(val);\n  }\n\n} //作业一：\n// var url = new Url('localhost:8080?type=2&id=1&name=xiaoming');\n// url.get('type') // 2；\n// url.get('id') // 1；\n// url.get('name') // xiaoming;\n// console.log(url.get('type'));\n// // //作业二\n// var params = {\n//     type:'1',\n//     id:1,\n//     name:'xiaoming'\n// }\n// var url2 = new Url(params);\n// url2.parse() //  type=2&id=1&name=xiaoming;\n// console.log(url2.parse());\n\n//# sourceURL=webpack://webpack-multpart-framework/./assets/js/until.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-multpart-framework/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-multpart-framework/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _html_fristtext_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/fristtext.html */ \"./src/html/fristtext.html\");\n/* harmony import */ var _html_sectext_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html/sectext.html */ \"./src/html/sectext.html\");\n/* harmony import */ var _html_thrtext_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html/thrtext.html */ \"./src/html/thrtext.html\");\n/* harmony import */ var _html_fourtext_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html/fourtext.html */ \"./src/html/fourtext.html\");\n/* harmony import */ var _html_fivetext_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html/fivetext.html */ \"./src/html/fivetext.html\");\n\n\n\n\n\n\nfunction parseHTML(text) {\n  let oDiv = document.createElement('div');\n  oDiv.innerHTML = text;\n  let newText = '';\n  newText = oDiv.childNodes[0].innerHTML;\n  return newText;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  id: 1,\n  article: parseHTML(_html_fristtext_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n}, {\n  id: 2,\n  article: parseHTML(_html_sectext_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n}, {\n  id: 3,\n  article: parseHTML(_html_thrtext_html__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n}, {\n  id: 4,\n  article: parseHTML(_html_fourtext_html__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n}, {\n  id: 5,\n  article: parseHTML(_html_fivetext_html__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n}]);\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/content.js?");

/***/ }),

/***/ "./src/fristpage/fristpage.js":
/*!************************************!*\
  !*** ./src/fristpage/fristpage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_js_translate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/js/translate */ \"./assets/js/translate.js\");\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content */ \"./src/content.js\");\n/* harmony import */ var _assets_js_until__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/js/until */ \"./assets/js/until.js\");\n\n\n\n\n\nlet leftPage = new _assets_js_translate__WEBPACK_IMPORTED_MODULE_0__.Animata(new _assets_js_translate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  targets: [{\n    el: document.querySelector('.mleft-top'),\n    animationClassName: 'ani'\n  }, {\n    el: document.querySelector('.mleft-bot'),\n    animationClassName: 'ani'\n  }, {\n    el: document.querySelector('.section-left'),\n    animationClassName: 'ani'\n  }]\n}));\nleftPage.change();\nlet rightpage = new _assets_js_translate__WEBPACK_IMPORTED_MODULE_0__.Animata(new _assets_js_translate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  targets: [{\n    el: document.querySelector('.header-mright'),\n    animationClassName: 'rightmove'\n  }, {\n    el: document.querySelector('.sright-frist'),\n    animationClassName: 'rightmove'\n  }, {\n    el: document.querySelector('.sright-second'),\n    animationClassName: 'rightmove'\n  }, {\n    el: document.querySelector('.sright-three'),\n    animationClassName: 'rightmove'\n  }, {\n    el: document.querySelector('.sright-four'),\n    animationClassName: 'rightmove'\n  }]\n}));\nrightpage.change();\nvar cloneDiv = document.querySelector('template');\nvar clonePar = document.querySelector('.section-left');\n\nString.prototype.ellipsis = function (num) {\n  let str = this;\n\n  if (num < this.length) {\n    str = this.substring(0, num) + '...';\n  }\n\n  return str;\n};\n\nlet url = new _assets_js_until__WEBPACK_IMPORTED_MODULE_2__.Url(window.location.href);\nlet textId = url.get('id');\n_content__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forEach(article => {\n  if (article.id == textId) {\n    let newDiv = cloneDiv.content.cloneNode(true);\n    newDiv.querySelector('.title-text').innerHTML = article.article;\n    clonePar.appendChild(newDiv);\n  }\n});\nlet res = new _assets_js_until__WEBPACK_IMPORTED_MODULE_2__.Markdown({\n  text: document.querySelector('article').textContent\n});\nres = res.parse();\ndocument.querySelector('article').innerHTML = res;\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/fristpage/fristpage.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/fristpage/fristpage.less":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/fristpage/fristpage.less ***!
  \*************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  padding: 0;\\n}\\n:root {\\n  --h: 150px;\\n}\\n.header-bg {\\n  background-color: #327ed0;\\n  height: var(--h);\\n  color: white;\\n}\\n.header-mid {\\n  width: 60%;\\n  height: 150px;\\n  margin: 0 auto;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.mleft-top {\\n  font-size: 4em;\\n}\\n.mleft-bot {\\n  font-size: 1em;\\n}\\n.header-mleft {\\n  display: flex;\\n  height: 100%;\\n  flex-flow: column;\\n  justify-content: flex-start;\\n  margin-top: 23px;\\n}\\n.header-mright {\\n  width: 150px;\\n  height: 70px;\\n  border: 1px solid white;\\n  margin-top: 40px;\\n  border-radius: 20px;\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  margin-right: 100px;\\n  padding: 5px;\\n}\\n.mright-img img {\\n  width: 30px;\\n  height: 40px;\\n  vertical-align: middle;\\n}\\n.mright-toptext {\\n  font-size: 10px;\\n}\\n.mright-text {\\n  display: flex;\\n  flex-flow: column;\\n  padding: 5px;\\n}\\n.section-box {\\n  width: 60%;\\n  height: calc(100vh --h);\\n  margin: 0 auto;\\n  display: flex;\\n  flex-flow: nowrap;\\n}\\n.section-left {\\n  width: 70%;\\n  height: 100%;\\n  margin-right: 10px;\\n}\\n.htitle {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  font-weight: 500;\\n}\\n.title-text,\\n.last-text {\\n  display: inline-block;\\n  text-indent: 2em;\\n  font-size: 14px;\\n}\\n.section-frist {\\n  position: relative;\\n}\\n.openall {\\n  color: #999999;\\n  cursor: pointer;\\n}\\n.section-text {\\n  overflow: hidden;\\n  display: inline-block;\\n  margin-left: 70px;\\n  border-left: 5px solid #cccc;\\n  text-overflow: ellipsis;\\n  display: -webkit-box;\\n  -webkit-line-clamp: 3;\\n  -webkit-box-orient: vertical;\\n  padding-left: 30px;\\n}\\n.section-right div {\\n  width: 60%;\\n  height: 80px;\\n  color: white;\\n  margin-top: 20px;\\n  background-color: #327ed0;\\n  text-align: center;\\n  line-height: 80px;\\n  cursor: pointer;\\n  border-radius: 20px;\\n  margin-left: 10px;\\n}\\n.section-right {\\n  width: 30%;\\n  display: flex;\\n  justify-content: flex-start;\\n  flex-direction: column;\\n  border-left: 3px solid #cccc;\\n}\\n.ani {\\n  animation: move 1s forwards;\\n}\\n@keyframes move {\\n  from {\\n    transform: translateX(-800px);\\n  }\\n  to {\\n    transform: translateX(0px);\\n  }\\n}\\n.rightmove {\\n  animation: rmove 1s forwards;\\n}\\n@keyframes rmove {\\n  from {\\n    transform: translateX(1300px);\\n  }\\n  to {\\n    transform: translateX(0);\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/fristpage/fristpage.less?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./src/html/fivetext.html":
/*!********************************!*\
  !*** ./src/html/fivetext.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<template>\\r\\n    <h1>10-17-10-22第二周周记</h1>\\r\\n<article>\\r\\n1. 正则表达式的作用是匹配符合规则的字符串,只对字符有用\\r\\n2. 默认赋值,形参可以赋值,方法的入参必传项参数放前面,非必填项放后面\\r\\n3. 数据中的id是标识,用来和服务端交互的不是指向客户端\\r\\n4. 如果需要flag开关可以考虑把flag放在一个闭包里面,避免全局变量的污染\\r\\n5. settimeout setinterval 可以解决同步执行的问题\\r\\n6. 重绘和回流,只要改变一个dom元素,页面就会重新渲染,重绘和回流只会同时发生,文档碎片(fragment)减少了重绘和回流,提高了性能\\r\\n7. template模板不会渲染到页面,专门用来克隆的模板;获取template里面的元素用content\\r\\n8. DOM.remove()不会把变量的值删掉\\r\\n9. promise 回调地狱  成功时调用resolve接着会走到then方法 失败时调用reject接着会走到catch方法  async和await同时出现\\r\\n   1. ````javascript\\r\\n      function getUserInfo(){\\r\\n          return new promise((resolve,reject)=>{\\r\\n              setTimeout(funciton(){\\r\\n                  let res = ['xiaoming',18]\\r\\n                  resolve(res)\\r\\n              },2000)\\r\\n          })\\r\\n      }\\r\\n      funciton getOrderList(){\\r\\n          return new promise((resolve,reject)=>{\\r\\n              setTimeout(function(){\\r\\n                  let res = ['order1','order2'];\\r\\n                  resolve(res);\\r\\n              })\\r\\n          })\\r\\n      }\\r\\n      (async function(){\\r\\n          let res = await getUserInfo();\\r\\n          console.log('用户信息:');\\r\\n          console.log(res);\\r\\n          let orderList = await getOrderList();\\r\\n          console.log('订单信息:');\\r\\n          console.log(orderList);\\r\\n      })();\\r\\n      ````\\r\\n10. el.style.cssText js修改页面样式时使用,可以减少重绘和回流\\r\\n    1. ```javascript\\r\\n       el.style.cssText = 'color:white;fontSize:18px'\\r\\n       ```\\r\\n11. 类里面的get方法,底层用的是Object.defineProperty,当我们调用这个属性的时候就会直接走到这个方法里面\\r\\n12. innerHTML.innerText,textContent 优先级最高的是textContent 下来是innerText 最后是innerHTML;\\r\\n13. data-()自定义属性,需要拿到这个属性的值用dataset.().<!--考虑兼容性用后面这个-->还有setAttribute(data-());\\r\\n14. target 是目标 props 参数 options 选项,类当中constructor的参数可以用这几个\\r\\n15. forEach中不能用break;因为他还是会把所有元素都遍历一遍,最好用for循环\\r\\n16. 字面量字符var a = \\\"hello world\\\" 和 var a = new String('hello world')\\r\\n17. new出来的都是对象;\\r\\n</article>\\r\\n</template>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/html/fivetext.html?");

/***/ }),

/***/ "./src/html/fourtext.html":
/*!********************************!*\
  !*** ./src/html/fourtext.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<template>\\r\\n    <h1>如何看待知乎上的男拳</h1>\\r\\n<article>\\r\\n    作者：异端之月\\r\\n    链接：https://www.zhihu.com/question/458218535/answer/2175684102\\r\\n    来源：知乎\\r\\n    著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。\\r\\n    第一，知乎男权地图炮所有女性的次数，按比例来说并不算多，\\r\\n    论声势更是远远不如当年杨笠“普信男”“男的，垃圾”下的各种女性评论；\\r\\n    第二，知乎男权与其说是男权不如说是反女权，这群人的目的就是反女权，\\r\\n    如果有的时候不慎地图炮或者误伤了别人的话，\\r\\n    【主要原因是女权太过可恶抹黑了全体女性而已】\\r\\n    ——就像【如果有个工人在抗战时候说日本人都是垃圾，\\r\\n    主要不是因为他素质太低骂了日本群众，而是因为日本军国主义发动了侵略战争】，\\r\\n    他的这个地图炮话语需要由日本军国主义来负责，同理，【不慎误伤一般女性的责任，\\r\\n    应该主要由女权主义来负，因为女权主义已经这样群体性羞辱一般男性好多年了】第三，\\r\\n    你想做正常网民可以，少参与性别话题就是了，如果你主动参与性别话题，\\r\\n    【就像一个人非要跑到双方激烈交战的战场中央那样，交战双方没有为你生命负责的义务——简而言之，\\r\\n    你被打死属于自找的】第四，知乎上的女权主义，起码在15年之前是非常常见而且是主流，\\r\\n    当时反女权还根本寥寥无几，而且被普遍认为是魔怔，\\r\\n    也就是说当时女权主义是天然正确的一方——比如我当时也认为女权主义是正确的。\\r\\n    所以，在女权主义占据天然正义的高地，大部分知乎人赞成女权主义这种大优势局面之后，\\r\\n    是怎么被反女权反推的？无他，【不要看女权主义说了什么，而要看女权主义做了什么】综上，\\r\\n    知乎反女权属于正义的自卫反击，虽然会有打错人的情况，但这是属于没有办法，而且比例并不高，\\r\\n    你想避免也很容易——不参与性别话题就是，你不站在战场中间，自然不会被双方集火。\\r\\n</article>\\r\\n</template>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/html/fourtext.html?");

/***/ }),

/***/ "./src/html/fristtext.html":
/*!*********************************!*\
  !*** ./src/html/fristtext.html ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<template>\\r\\n    <h1>如何看待知乎上的男拳</h1>\\r\\n    <article>\\r\\n        1.注册知乎是在百度上提个问题，系统给推荐了一个来自知乎的答案，\\r\\n        而想看到完整答案，需要注册，为此我成为了知乎用户。\\r\\n        2.最开始的阶段是在知乎上看别人的文章与问答，觉得这里有很人性的温暖在里面，\\r\\n        有很多问答都很精彩，有些问得认真，回答得也很认真。在看的过程中，也感受到久违的“真诚”在其中。\\r\\n        平时生活中不想和人说的话，或者想了解的答案，在这里大部分找到解析的线索，\\r\\n        你会觉得内心里多了可以安放情感与心绪的地方。\\r\\n        3.知乎的很多回答很专业，在非专业人眼中有了解自己不知事物的窗口。\\r\\n        4.看得多了，也随之开启写作的热情。有时也会回答问题，倾注很多个人的经验与感悟在里边，\\r\\n        如果有人受益，那是一种很开心的，助人也自助的方式。\\r\\n        5.知乎的升级系统，也比较吸引人，一篇300字以上图文，每天可增加65分，\\r\\n        这是很有趣的一件事情。很期待能升级到下一个级别，以至于再下一个级别。\\r\\n        6.我个人比较喜欢在平常的生活中感悟一些对自己有用的东西，\\r\\n        知乎这个平台可以让自己的某些感悟分享给别人，这是一种很充实的幸福感。\\r\\n        赠人玫瑰，手有余香！\\r\\n    </article>\\r\\n</template>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/html/fristtext.html?");

/***/ }),

/***/ "./src/html/sectext.html":
/*!*******************************!*\
  !*** ./src/html/sectext.html ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<template>\\r\\n    <h1>如何看待知乎上的男拳</h1>\\r\\n    <article>\\r\\n        作者：游子离\\r\\n        链接：https://www.zhihu.com/question/490763912/answer/2161431049\\r\\n        来源：知乎\\r\\n        著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。\\r\\n        \\r\\n        鄙人几乎没有出彩礼。但实际上鄙人破防是另外的事件。\\r\\n        她爹妈给我八万（实际上是我给的储蓄卡）。然后我给了前妻八万。\\r\\n        最后这八万给老婆保管。作为夫妻共同财产。就是一张卡传来传去就把婚结了。\\r\\n        不过婚后每个月二万多的纯收入都给前妻保管。她们也知道我家家境与我爱她。\\r\\n        因此彩礼没有计较。～知乎有个答案吧，就是说个规则。夫妻当然是人类最美好的感情之一。\\r\\n        所谓君臣，父子，夫妻，朋友，亲戚。此谓之五伦。人就是五伦总和。但是五伦也不是绝对。\\r\\n        君臣大义亦有陈胜吴广。而司马迁为陈吴立世家。列为诸侯。反贼为诸侯，这是古代中国一个创举。\\r\\n        所谓帝王将相宁有种乎。只要你反抗暴政，你就是帝王将相。亦有孔子舍鲁君，卫君而投外国。\\r\\n        亦有周天子不振，而亚圣孟夫子说于魏齐。国家无道，虽然是圣人投于外国亦是正举。\\r\\n        生意上的伙伴，比如某些豪商，相约落水也是救一次。你不能无限压榨别人。\\r\\n        即使父母，绝交别居的也很多。唯独夫妻之间，委屈求全的太多。因此要求也不是不可以提。\\r\\n        但是得看看这个要求是不是奔着把对方掏空来的。男女之间，人伦所谓不爱的标志就是：\\r\\n        不考虑你的感受，你的承受能力，你日后日子怎么过，只想着怎么掏空你。\\r\\n        这种人，是老板，就是暴君，反他丫的。是君主，那就是横征暴敛，民不聊生。\\r\\n        你应该当陈胜吴广，而不是印度人。这种子女，呵呵。最好还是有所防备。\\r\\n        是合作的伙伴，朋友，建议还是换一个。唯独是夫妻，因为涉及到后代繁衍的问题，\\r\\n        特别是穷人，所以就很多时候忍气吞声。～其实这种吧。建议还是换个老实本分的。\\r\\n        真的。还没有进门就算计这个，多半也不是冲着过日子来的。到时候榨干了，你还能拿什么留她。\\r\\n        或者即使能留住，你的日子过得好么？而且啥都不惦记，就惦记家里这点财产，\\r\\n        这种人，内卷严重，兔子还不吃窝边草。每天算计这些，她能有多大出息。\\r\\n        你给了，她以后还会怪你跟了你浪费人生。娶妻娶德。不然起码让你倒退n年\\r\\n    </article>\\r\\n</template>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/html/sectext.html?");

/***/ }),

/***/ "./src/html/thrtext.html":
/*!*******************************!*\
  !*** ./src/html/thrtext.html ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<template>\\r\\n    <h1>如何看待知乎上的男拳</h1>\\r\\n<article>\\r\\n    老师是武音毕业的资深声乐老师，专业过硬，师德好，\\r\\n    教学兢兢业业，从教十几年来，桃李满天下，有不少都成为了专业歌手，\\r\\n    上过中国好声音。不过，老师不喜欢以这些作为宣传。老师还经常参加公益活动，\\r\\n    捐款捐物，如今这样的坚守初心，品德高尚的老师真的不多见了。\\r\\n    如果各位读者有幸成为老师的学生，还请一定珍惜，好好学习，一定能学有所得！\\r\\n    作者：缘分天空\\r\\n    链接：https://www.zhihu.com/question/416914959/answer/2175487242\\r\\n    来源：知乎\\r\\n    著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。\\r\\n</article>\\r\\n</template>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/html/thrtext.html?");

/***/ }),

/***/ "./src/fristpage/fristpage.less":
/*!**************************************!*\
  !*** ./src/fristpage/fristpage.less ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_fristpage_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./fristpage.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/fristpage/fristpage.less\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_fristpage_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_fristpage_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_fristpage_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_fristpage_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/fristpage/fristpage.less?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-multpart-framework/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-multpart-framework/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-multpart-framework/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-multpart-framework/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-multpart-framework/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-multpart-framework/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/fristpage/fristpage.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/fristpage/fristpage.less");
/******/ 	
/******/ })()
;