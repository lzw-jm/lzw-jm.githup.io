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

/***/ "./src/exam/exam.js":
/*!**************************!*\
  !*** ./src/exam/exam.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ellipsis)\n/* harmony export */ });\nclass Ellipsis {\n  constructor(props) {\n    this.el = props.el;\n    this.oldtext = this.el.innerHTML;\n    this.text = this.oldtext;\n    this.textCount = props.textCount;\n    this.findAllButtonText = props.findAllButtonText; //查看所有\n\n    this.showFindAllButton = props.showFindAllButton; //所有按钮\n\n    this.flag;\n  }\n\n  subText() {\n    this.text = this.text.substring(0, this.textCount) + '...';\n    this.el.innerHTML = this.text;\n  } //生成按钮\n\n\n  addButton() {\n    let a = document.createElement('a');\n\n    let _this = this;\n\n    a.innerText = '查看';\n    a.style.cssText = 'color:blue;cursor:pointer;';\n    this.el.appendChild(a);\n\n    a.onclick = function () {\n      _this.flag = !_this.flag;\n      _this.el.childNodes[0].textContent = _this.flag ? _this.oldtext : _this.text;\n      this.textContent = _this.flag ? '收起内容' : _this.findAllButtonText;\n    };\n  }\n\n  exec() {\n    this.subText();\n\n    if (this.showFindAllButton) {\n      this.addButton();\n      this.el.querySelector('a').innerHTML = this.findAllButtonText ? this.findAllButtonText : '查看';\n    }\n  }\n\n} // let ellipsis = new Ellipsis({\n//     el: document.querySelector('.exam'),\n//     textCount: 30,\n//     findAllButtonText: \"查看内容\",\n//     showFindAllButton: true\n// })\n// class Ellipsis{\n//     constructor(props){\n//         this.el = props.el;\n//         this.text = this.el.innerHTML;\n//         this.textCount = props.textCount;\n//         this.findAllButtonText = props.findAllButtonText || '查看全文';\n//         this.ellipsisButtonText = props.ellipsisButtonText || '收起';\n//         this.showFindAllButton = props.showFindAllButton || false;\n//         this.flag = true; //判断是否显示查看全部按钮的显示状态；\n//     }\n//     get buttonText(){\n//         return this.flag ? this.findAllButtonText : this.ellipsisButtonText;\n//     }\n//     exec(){\n//         if(!this.text) throw new Errow('文本内容不能为空');\n//         // 把文本切割成50个长度；\n//         this.el.innerHTML = this.format(this.text,this.textCount);\n//         //如果 需要展示查看全部的那个按钮\n//         if(this.showFindAllButton){\n//             //增加a标签；\n//             this.addButton();\n//         }\n//     }\n//     addButton(){\n//         var a = document.createElement('a');\n//         a.textContent = this.findAllButtonText;\n//         a.style.cssText = `\n//             color:blue;\n//             cursor: pointer;\n//         `\n//         var _this = this;\n//         a.addEventListener('click',function(){\n//             _this.flag = !_this.flag;\n//             // true = !true //false;\n//             // false = !false //true;\n//             this.textContent = _this.buttonText;\n//             console.log(_this.el.childNodes[0].textContent)\n//             _this.el.childNodes[0].textContent = _this.flag ? _this.format(_this.text,_this.textCount): _this.text;\n//         })\n//         this.el.appendChild(a,this.el.childNodes[0])\n//     }\n//     format(str,num){\n//         return str.length < num ?  str : (str.substring(0,num) + '...');\n//     }\n// }\n// let ellipsis = new Ellipsis({\n//     el:document.querySelector('.exam'),\n//     textCount:30,\n//     findAllButtonText:\"查看\",\n//     showFindAllButton:true\n// })\n// ellipsis.exec();\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/exam/exam.js?");

/***/ }),

/***/ "./src/main/main.js":
/*!**************************!*\
  !*** ./src/main/main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exam_exam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exam/exam */ \"./src/exam/exam.js\");\n\nlet ellipsis = new _exam_exam__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  el: document.querySelector('.content'),\n  textCount: 140,\n  findAllButtonText: \"查看内容\",\n  showFindAllButton: true\n});\nellipsis.exec();\n\ndocument.querySelector('.index-content h2').onclick = function () {\n  console.log(this.dataset.id);\n  window.location.href = `fristpage.html?id=${this.dataset.id}`;\n};\n\nlet elements = document.querySelectorAll('.center-top_left span');\nlet blocks = document.querySelectorAll('.center-mid div');\n\nfor (let i = 0; i < elements.length; i++) {\n  elements[i].index = i;\n\n  elements[i].onclick = function () {\n    for (let j = 0; j < blocks.length; j++) {\n      blocks[j].style.display = 'none';\n      elements[j].classList.remove('border-bottom');\n    }\n\n    ;\n    blocks[this.index].style.display = 'block';\n    this.classList.add('border-bottom');\n  };\n}\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/main/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/main/main.less":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/main/main.less ***!
  \***************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  padding: 0;\\n  background-color: #f6f6f6;\\n}\\n:root {\\n  --h: 50px;\\n}\\nheader {\\n  border: 1px solid #ececec;\\n  background-color: #ffffff;\\n}\\nheader .header-top {\\n  width: 80%;\\n  margin: 0 auto;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  height: var(--h);\\n  line-height: var(--h);\\n}\\nheader #header-title {\\n  font-size: 35px;\\n  color: #0066ff;\\n}\\nheader .input-box {\\n  position: relative;\\n  width: 400px;\\n  margin-right: 400px;\\n}\\nheader .input {\\n  width: 400px;\\n  height: 30px;\\n  outline: none;\\n  border-radius: 10px;\\n  border: 1px solid #cccc;\\n  background-color: #f6f6f6;\\n}\\nheader .header-text {\\n  width: 300px;\\n  display: flex;\\n  justify-content: space-evenly;\\n  font-size: 14px;\\n  min-width: 400px;\\n}\\nheader .select-img {\\n  width: 20px;\\n  height: 20px;\\n  position: absolute;\\n  right: 0px;\\n  top: 15px;\\n}\\nheader .select-img:hover {\\n  cursor: pointer;\\n}\\nsection {\\n  height: calc(100vh - var(--h));\\n  width: 70%;\\n  margin: 0 auto;\\n  display: flex;\\n  flex-flow: row;\\n  justify-content: space-between;\\n  padding: 10px;\\n}\\nsection .section-leftbox {\\n  width: 70%;\\n  display: flex;\\n  height: 100%;\\n  min-width: 740px;\\n  flex-flow: column;\\n}\\nsection .section-top {\\n  height: 20%;\\n  background-color: #ffffff;\\n  display: flex;\\n  align-items: center;\\n  padding: 20px;\\n  min-height: 150px;\\n}\\nsection .section-left {\\n  width: 20%;\\n  height: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  flex-direction: column;\\n  color: white;\\n  min-width: 150px;\\n}\\nsection .left-top {\\n  height: 100px;\\n  width: 100px;\\n  background-color: #0061f2;\\n  text-align: center;\\n  line-height: 100px;\\n  font-size: 40px;\\n  border-radius: 5px;\\n}\\nsection .left-bottom {\\n  width: 100px;\\n  height: 30px;\\n  line-height: 30px;\\n  text-align: center;\\n  background-color: #0061f2;\\n  border-radius: 5px;\\n  color: white;\\n  cursor: pointer;\\n}\\nsection .section-right {\\n  width: 80%;\\n  display: flex;\\n  flex-direction: column;\\n  height: 100%;\\n  justify-content: space-between;\\n}\\nsection .right-title {\\n  font-weight: bolder;\\n  font-size: 21px;\\n  margin: 0;\\n}\\nsection .right-text {\\n  display: inline-block;\\n  font-size: 14px;\\n  margin: 10px 0;\\n}\\nsection .right-gray {\\n  display: inline-block;\\n  color: gray;\\n  cursor: pointer;\\n}\\nsection .right-bottom {\\n  color: gray;\\n}\\nsection .right-bottom span {\\n  display: inline-block;\\n  width: 60px;\\n}\\nsection .sidebar {\\n  width: 28%;\\n  margin-left: 5px;\\n  min-width: 180px;\\n}\\nsection .sidebar-top {\\n  width: 100%;\\n  display: flex;\\n  height: 80px;\\n  justify-content: space-evenly;\\n  text-align: center;\\n  background-color: #ffffff;\\n  min-width: 180px;\\n}\\nsection .sidebar-top div {\\n  height: 80px;\\n  display: flex;\\n  flex-direction: column;\\n  padding: 15px;\\n  font-size: 100%;\\n}\\nsection .sidebar-center {\\n  width: 100%;\\n  height: calc(100vh - 100px);\\n  background-color: #ffffff;\\n  margin-top: 10px;\\n  min-height: 400px;\\n}\\nsection .sidebarcenter-top {\\n  width: 100%;\\n  padding: 5px;\\n  height: 30%;\\n  min-height: 160px;\\n  min-width: 210px;\\n}\\nsection .sidebarcenter-top span {\\n  font-size: 50%;\\n  height: 20%;\\n  display: inline-block;\\n  background-color: #e5efff;\\n  padding: 5px;\\n  color: #947bff;\\n  border-radius: 10px;\\n  margin: 10px;\\n  cursor: pointer;\\n}\\nsection .sidebarcenter-top span:hover {\\n  background-color: blue;\\n  color: white;\\n}\\nsection .section-center {\\n  height: calc(100vh - 80px);\\n  background-color: #ffffff;\\n  margin-top: 10px;\\n  min-height: 550px;\\n}\\nsection .sidebarcenter-bottom span {\\n  font-size: 50%;\\n  height: 20%;\\n  display: inline-block;\\n  background-color: #e5efff;\\n  padding: 5px;\\n  color: #947bff;\\n  border-radius: 10px;\\n  margin: 10px;\\n  cursor: pointer;\\n}\\nsection .sidebarcenter-bottom span:hover {\\n  background-color: blue;\\n  color: white;\\n}\\nsection .center-top {\\n  height: 40px;\\n  border-bottom: 1px #cccc solid;\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 10px;\\n  line-height: 40px;\\n}\\nsection .center-top_left {\\n  width: 50%;\\n  display: flex;\\n  padding-left: 5px;\\n  justify-content: space-around;\\n}\\nsection .center-top_left span {\\n  display: inline-block;\\n}\\nsection .center-mid {\\n  padding: 5px 30px;\\n}\\nsection .intro-content {\\n  display: none;\\n}\\nsection .cream-content {\\n  display: none;\\n}\\nsection .talk-content {\\n  display: none;\\n}\\nsection .answer-content {\\n  display: none;\\n}\\nsection .index-content {\\n  margin: 0 auto;\\n  border-bottom: 1px solid #cccc;\\n  min-height: 200px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n}\\nsection .index-content > h2 {\\n  font-size: 19px;\\n  cursor: pointer;\\n}\\nsection .index-content > nav > img {\\n  width: 20px;\\n  height: 20px;\\n  vertical-align: middle;\\n}\\nsection .index-content > nav > span {\\n  display: inline-block;\\n  margin-left: 5px;\\n  font-weight: 700;\\n  color: #797777;\\n}\\n.border-bottom {\\n  border-bottom: 2px blue solid;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/main/main.less?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./src/main/main.less":
/*!****************************!*\
  !*** ./src/main/main.less ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./main.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/main/main.less\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/main/main.less?");

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
/******/ 	__webpack_require__("./src/main/main.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main/main.less");
/******/ 	
/******/ })()
;