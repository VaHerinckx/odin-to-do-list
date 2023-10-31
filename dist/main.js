/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Wotfard-Regular.otf */ "./src/Wotfard-Regular.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "wotfard";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

:root {
  font-family: "wotfard";
}

.project-value {
  text-align: center;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 400px));
  gap: 20px;
  justify-content: space-around;
}

.project-container {
  display: flex;
  gap: 10px;
  padding: 5px;
  flex-shrink: 0;
  border: 1px solid black;
  justify-content: space-evenly;
}

.project-container > * {
  display: flex;
  gap: 10px;
  padding: 5px;
  border: 1px solid black;
}

.notes-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 400px));
  gap: 20px;
  justify-content: space-around;
}


.note-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 10%;
}

.note-container div {
  display: flex;
  gap: 10px;
  border: 1px solid black;
}

.note-container div *{
  width: 50%;
  border: 1px solid black;
}


.note-container div *:first-child {
  display: flex;
  justify-content: center;
  text-transform: capitalize;
}

dialog div option {
  width: 400px;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,4CAA+B;AACjC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,6DAA6D;EAC7D,SAAS;EACT,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,SAAS;EACT,YAAY;EACZ,cAAc;EACd,uBAAuB;EACvB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,SAAS;EACT,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8DAA8D;EAC9D,SAAS;EACT,6BAA6B;AAC/B;;;AAGA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,uBAAuB;AACzB;;;AAGA;EACE,aAAa;EACb,uBAAuB;EACvB,0BAA0B;AAC5B;;AAEA;EACE,YAAY;AACd","sourcesContent":["@font-face {\n  font-family: \"wotfard\";\n  src: url(\"Wotfard-Regular.otf\");\n}\n\n:root {\n  font-family: \"wotfard\";\n}\n\n.project-value {\n  text-align: center;\n}\n\n.projects-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 400px));\n  gap: 20px;\n  justify-content: space-around;\n}\n\n.project-container {\n  display: flex;\n  gap: 10px;\n  padding: 5px;\n  flex-shrink: 0;\n  border: 1px solid black;\n  justify-content: space-evenly;\n}\n\n.project-container > * {\n  display: flex;\n  gap: 10px;\n  padding: 5px;\n  border: 1px solid black;\n}\n\n.notes-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 400px));\n  gap: 20px;\n  justify-content: space-around;\n}\n\n\n.note-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 5px;\n  border: 1px solid black;\n  border-radius: 10%;\n}\n\n.note-container div {\n  display: flex;\n  gap: 10px;\n  border: 1px solid black;\n}\n\n.note-container div *{\n  width: 50%;\n  border: 1px solid black;\n}\n\n\n.note-container div *:first-child {\n  display: flex;\n  justify-content: center;\n  text-transform: capitalize;\n}\n\ndialog div option {\n  width: 400px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleCreateOperation: () => (/* binding */ handleCreateOperation),
/* harmony export */   handleCreateProjectOperation: () => (/* binding */ handleCreateProjectOperation),
/* harmony export */   handleEditOperation: () => (/* binding */ handleEditOperation)
/* harmony export */ });
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note */ "./src/note.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/form.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");




const handleCreateOperation = function (noteCount, notes, projects) {
  var newNotedialog = document.querySelector(".newNoteDialog")
  ;(0,_form__WEBPACK_IMPORTED_MODULE_1__.resetNewFormValues)(projects);
  newNotedialog.showModal();
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("close-new-note-dialog")) {
      event.preventDefault()
      var newNotedialog = document.querySelector(".newNoteDialog")
      var note = (0,_note__WEBPACK_IMPORTED_MODULE_0__.generateNote)(noteCount);
      newNotedialog.close();
      notes.push(note);
      (0,_note__WEBPACK_IMPORTED_MODULE_0__.displayNotes)(notes);
    }
  })
};

const handleEditOperation = function (id, notes, projects) {
  (0,_form__WEBPACK_IMPORTED_MODULE_1__.adaptEditFormValues)(id, notes, projects)
  document.addEventListener("click", (event) => {
  if (event.target.classList.contains("close-edit-note-dialog")) {
    event.preventDefault()
    var editNoteDialog = document.querySelector(".editNoteDialog");
    notes = (0,_note__WEBPACK_IMPORTED_MODULE_0__.editElementById)(id, notes)
    editNoteDialog.close();
    (0,_note__WEBPACK_IMPORTED_MODULE_0__.displayNotes)(notes);
  };
});
}


const handleCreateProjectOperation = function (projects, projectCount) {
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("close-new-project-dialog")) {
      event.preventDefault()
      var newProjectdialog = document.querySelector(".newProjectDialog")
      var project = (0,_project__WEBPACK_IMPORTED_MODULE_2__.generateProject)(projectCount);
      newProjectdialog.close();
      projects.push(project);
      (0,_project__WEBPACK_IMPORTED_MODULE_2__.displayProjects)(projects);
    }
  })
};






/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adaptEditFormValues: () => (/* binding */ adaptEditFormValues),
/* harmony export */   generateEditNoteForm: () => (/* binding */ generateEditNoteForm),
/* harmony export */   generateNewNoteForm: () => (/* binding */ generateNewNoteForm),
/* harmony export */   generateNewProjectForm: () => (/* binding */ generateNewProjectForm),
/* harmony export */   resetNewFormValues: () => (/* binding */ resetNewFormValues)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");



// Aggregate the form elements to create the two forms (new note and edit note)

const generateNewNoteForm = function(projects) {
  var dialog = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("dialog", "newNoteDialog", "");
  var formContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("form", "form-container", "");
  var formObjective = "new"
  formContainer.setAttribute("action", "");
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(formContainer, [generateTitleContainer(formObjective),
                                 generateDateContainer(formObjective),
                                 generateDescContainer(formObjective),
                                 generatePriorityContainer(formObjective),
                                 generateStatusContainer(formObjective),
                                 generateProjectContainer(formObjective, projects),
                                 generateCloseButton(formObjective)]);
  dialog.appendChild(formContainer);
  return dialog
}

const generateEditNoteForm = function(projects) {
  var dialog = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("dialog", "editNoteDialog", "");
  var formContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("form", "form-container", "");
  var formObjective = "edit"
  formContainer.setAttribute("action", "");
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(formContainer, [generateTitleContainer(formObjective),
                                 generateDateContainer(formObjective),
                                 generateDescContainer(formObjective),
                                 generatePriorityContainer(formObjective),
                                 generateStatusContainer(formObjective),
                                 generateProjectContainer(formObjective, projects),
                                 generateCloseButton(formObjective)]);
  dialog.appendChild(formContainer);
  return dialog
}

const generateNewProjectForm = function() {
  var dialog = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("dialog", "newProjectDialog", "");
  var formContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("form", "form-container", "");
  var formObjective = "new-project"
  formContainer.setAttribute("action", "");
  formContainer.appendChild(generateNewProjectContainer());
  dialog.appendChild(formContainer);
  return dialog
}



// Generate individually the different elements of the forms

function generateTitleContainer (formObjective) {
  let titleContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("div", "title-container", "");
  let titleLabel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("label", "title", "Title: ");
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(titleLabel, {"for" : "title"});
  let titleInput = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("input", "title", "");
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(titleInput, {"id" : `title-${formObjective}`,
                             "name" : "title",
                             "type" : "text",
                             "placeholder" : "Do laundry"});
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(titleContainer, [titleLabel, titleInput]);
  return titleContainer;
}

function generateDescContainer (formObjective) {
  let descriptionContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("div", "description-container", "");
  let descriptionLabel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("label", "description", "Description: ");
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(descriptionLabel, {"for" : "description"});
  let descriptionInput = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("textarea", "description", "");
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(descriptionInput, {"id" : `description-${formObjective}`,
                                   "name" : "description",
                                   "cols" : "30",
                                   "rows" : "7",
                                   "placeholder" : "Wash all black clothes"});
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(descriptionContainer, [descriptionLabel, descriptionInput]);
  return descriptionContainer;
}

function generateDateContainer (formObjective) {
  let dateContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("div", "date-container", "");
  let dateLabel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("label", "date", "Due date: ");
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(dateLabel, {"for" : "date"});
  let dateInput = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("input", "date", "");
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(dateInput, {"id" : `date-${formObjective}`,
                             "name" : "date",
                             "type" : "date"});
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(dateContainer, [dateLabel, dateInput]);
  return dateContainer;
}

function generatePriorityContainer (formObjective) {
  let priorityContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("div", "priority-container", "");
  let priorityLabel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("label", "priority", "Priority: ");
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(priorityLabel, {"for" : "priority"});
  let priorityInput = generateOptionElements("priority", ["Very important", "Important", "Normal", "Not important"], formObjective, "Normal")
  ;(0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(priorityContainer, [priorityLabel, priorityInput]);
  return priorityContainer;
}

function generateStatusContainer (formObjective) {
  let statusContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("div", "status-container", "");
  let statusLabel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("label", "status", "Status: ");
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(statusLabel, {"for" : "status"});
  let statusInput = generateOptionElements("status", ["Not started", "Doing", "Done"], formObjective, "Doing")
  ;(0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(statusContainer, [statusLabel, statusInput]);
  return statusContainer;
}

function generateProjectContainer (formObjective, projects) {
  let projectContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("div", "project-container", "");
  let projectLabel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("label", "project", "Project: ");
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(projectLabel, {"for" : "project"});
  var projectList = [];
  projects.forEach(project => projectList.push(project.title));
  let projectInput = generateOptionElements("project", projectList, formObjective, "General")
  ;(0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(projectContainer, [projectLabel, projectInput]);
  return projectContainer;
}


function generateCloseButton (formObjective) {
  let button = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("button", `close-${formObjective}-note-dialog`, `${formObjective} note`)
  button.setAttribute("id", `close${formObjective}NoteDialog`)
  return button
}

function generateNewProjectContainer () {
  let newProjectContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("div", "new-project-container", "");
  let newProjectLabel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("label", "new-project", "New Project: ");
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(newProjectLabel, {"for" : "new-project"});
  let newProjectInput = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("input", "new-project", "");
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(newProjectInput, {"id" : "new-project",
                             "name" : "new-project",
                             "type" : "text",
                             "placeholder" : "Sport"});
  var button = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("button", `close-new-project-dialog`, `add new project`)
  button.setAttribute("id", `closeNewProjectDialog`)
  ;(0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(newProjectContainer, [newProjectLabel, newProjectInput, button]);
  return newProjectContainer;
}


// Functions to avoid redundant code
function generateOptionElements (inputClass, optionValues, formObjective) {
  var inputElement = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("select", inputClass, "");
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(inputElement, {"id" : `${inputClass}-${formObjective}`});
  optionValues.forEach((option) => inputElement.appendChild(createOptionElement(option)));
  return inputElement;
}

function createOptionElement(value) {
  var option = document.createElement("option");
  option.setAttribute("value", value);
  option.innerText = value;
  return option;
}


// Input the values of original note when edit is selected

const adaptEditFormValues = function (id, notes, projects) {
  const condition = note => note["id"] === id;
  var note = notes.filter(condition)[0];
  console.log(note)
  document.querySelector("#title-edit").value = note["title"];
  document.querySelector("#date-edit").value = note["date"];
  document.querySelector("#status-edit").value = note["status"];
  document.querySelector("#priority-edit").value = note["prio"];
  document.querySelector("#description-edit").value = note["notes"];
  adaptProjectOptions("#project-edit", projects);
  document.querySelector("#project-edit").value = note["project"];
}

// Reset the values when new note form is generated

const resetNewFormValues = function (projects) {
  document.querySelector("#title-new").value = "";
  document.querySelector("#date-new").value = "";
  document.querySelector("#status-new").value = "";
  document.querySelector("#priority-new").value = "";
  document.querySelector("#description-new").value = "";
  adaptProjectOptions("#project-new", projects)
  document.querySelector("#project-new").value = "";
}

function adaptProjectOptions (projectContainerID, projects) {
  let projectOptionsContainer = document.querySelector(projectContainerID);
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren)(projectOptionsContainer);
  var projectList = [];
  projects.forEach(project => projectList.push(project.title));
  projectList.forEach((project) => projectOptionsContainer.appendChild(createOptionElement(project)));
}




/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/form.js");



const generateBaseElements = function (projects) {
  var content = document.querySelector(".content")
  var newNoteDialog = (0,_form__WEBPACK_IMPORTED_MODULE_1__.generateNewNoteForm)(projects);
  var editNoteDialog = (0,_form__WEBPACK_IMPORTED_MODULE_1__.generateEditNoteForm)(projects);
  var newProjectDialog = (0,_form__WEBPACK_IMPORTED_MODULE_1__.generateNewProjectForm)();
  generateBaseInterface();
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(content, [newNoteDialog, editNoteDialog, newProjectDialog]);
  // gnProjectsElements(projects);
}

function generateBaseInterface () {
  var container = document.querySelector(".content");
  var interfaceContainer = gnInterfaceContainer();
  var pageTitle = gnPageTitle();
  var newItemButton = gnNewItemButton();
  var newProjectButton = gnNewProjectButton();
  var projectsContainer = gnProjectsContainer();
  var notesContainer = gnNotesContainer();
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(interfaceContainer, [pageTitle, newItemButton, newProjectButton]);
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(container, [interfaceContainer, projectsContainer, notesContainer]);
}

function gnInterfaceContainer() {
  var interfaceContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("div", "interface-container", "");
  return interfaceContainer;
}

function gnPageTitle() {
  var pageTitle = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("h1", "page-title", "Odin to-do-list tool");
  return pageTitle;
}

function gnNewItemButton() {
  var newItemButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("button", "new-item", "New Item");
  return newItemButton;
}

function gnNewProjectButton() {
  var newItemButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("button", "new-project", "New Project");
  return newItemButton;
}

function gnProjectsContainer() {
  var projectsContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("div", "projects-container", "");
  return projectsContainer;
}

function gnNotesContainer() {
  var notesContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("div", "notes-container", "");
  return notesContainer;
}

function gnProjectsElements(projects) {
  var projectsContainer = document.querySelector(".projects-container");
  while (projectsContainer.firstChild) {
    projectsContainer.removeChild(projectsContainer.firstChild);
  };
  projects.forEach(project => projectsContainer.appendChild(gnProjectElement(project)));
}

function gnProjectElement(project) {
  var projectContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("div", "project-container", "");
  var projectTitle = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("span", "project-title", project);
  var deleteProjectButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("button", "delete-project-button", "Delete project")
  ;(0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(projectContainer, [projectTitle, deleteProjectButton]);
  return projectContainer
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateBaseElements);


/***/ }),

/***/ "./src/note.js":
/*!*********************!*\
  !*** ./src/note.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Note: () => (/* binding */ Note),
/* harmony export */   displayNotes: () => (/* binding */ displayNotes),
/* harmony export */   editElementById: () => (/* binding */ editElementById),
/* harmony export */   generateNote: () => (/* binding */ generateNote),
/* harmony export */   removeElementById: () => (/* binding */ removeElementById)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");



//Class generator
const Note = class Note {
  constructor(title, date, status, prio, project, notes, id) {
    Object.assign(this, {title, date, status, prio, project, notes, id});
  };
  updateNote = function() {
    this["title"] = document.querySelector("#title-edit").value;
    this["date"] = document.querySelector("#date-edit").value;
    this["status"] = document.querySelector("#status-edit").value;
    this["prio"] = document.querySelector("#priority-edit").value;
    this["notes"] = document.querySelector("#description-edit").value;
    this["project"] = document.querySelector("#project-edit").value;
    return this;
  };
}

//Create a new note object based on values given in the new note form
const generateNote = function (noteCount) {
  return new Note(document.querySelector("#title-new").value,
                  document.querySelector("#date-new").value,
                  document.querySelector("#status-new").value,
                  document.querySelector("#priority-new").value,
                  document.querySelector("#project-new").value,
                  document.querySelector("#description-new").value,
                  `id-${noteCount}`);
}

//Displays all the notes objects in the DOM
const displayNotes = function (notes) {
  removeDisplayedNotes();
  var notesContainer = document.querySelector(".notes-container");
  notes.forEach(note => {notesContainer.appendChild(displayNote(note))});
};

//Individually create the container with all the DOM elements for a note object
function displayNote (note) {
  let noteContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("div", "note-container", "")
  noteContainer.setAttribute("data-id", note["id"]);
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(noteContainer, [(0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("span", `project-value`, note["project"]),
                                 createNoteSection("title", note["title"]),
                                 createNoteSection("date", note["date"]),
                                 createNoteSection("status", note["status"]),
                                 createNoteSection("prio", note["prio"]),
                                 createNoteSection("notes", note["notes"]),
                                 createNoteButtons()]);
  return noteContainer;
}

//Creates one text section of the DOM of the note
function createNoteSection (sectionName, text) {
  var elementContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("div", `${sectionName}-container`, "");
  var contentTitle = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("span", `${sectionName}-header`, `${sectionName}`);
  var contentValue = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("span", `${sectionName}-value`, text);
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(elementContainer, [contentTitle, contentValue]);
  return elementContainer
}

//Creates the buttons for the DOM of the note
function createNoteButtons () {
  var elementContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("div", "button-container", "");
  var editButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("button", "edit-button", "Edit");
  var deleteButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("button", "delete-button", "Delete");
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(elementContainer, [editButton, deleteButton]);
  return elementContainer
}

//Removes all the notes currently displayed in the DOM
function removeDisplayedNotes () {
  var notesContainer = document.querySelector(".notes-container");
  while (notesContainer.firstChild) {
      notesContainer.removeChild(notesContainer.firstChild);
    };
}

//Removes the deleted note object from the array
const removeElementById = function (id, notes) {
  const condition = note => note["id"] !== id;
  return notes.filter(condition);
}

//Updates the values of the edited note object and returns the updated array
const editElementById = function (id, notes) {
  var newNotes = [];
  notes.forEach(note => {note["id"] === id ? newNotes.push(note.updateNote()) : newNotes.push(note)});
  return newNotes;
}





/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   displayProjects: () => (/* binding */ displayProjects),
/* harmony export */   generateProject: () => (/* binding */ generateProject),
/* harmony export */   generateProjectsList: () => (/* binding */ generateProjectsList)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");


const Project = class Project {
  constructor(title, id) {
    Object.assign(this, {title, id});
  };
}

const generateProject = function (projectCount) {
  return new Project(document.querySelector("#new-project").value,
                     `id-${projectCount}`);
}

const generateProjectsList = function (projects) {
  var projectList = [];
  projects.forEach(project => projectList.push(project.title));
  return projectList;
}

const displayProjects= function (projects) {
  removeDisplayedProjects();
  var projectsContainer = document.querySelector(".projects-container");
  projects.forEach(project => {projectsContainer.appendChild(createProjectSection(project))});
};

function createProjectSection(project) {
  var projectContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("div", "project-container", "");
  projectContainer.setAttribute("data-id", project["id"]);
  var projectTitle = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("span", "project-title", project.title);
  var deleteProjectButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("button", "delete-project-button", "Delete project")
  ;(0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(projectContainer, [projectTitle, deleteProjectButton]);
  return projectContainer
}

function removeDisplayedProjects () {
  var projectsContainer = document.querySelector(".projects-container");
  while (projectsContainer.firstChild) {
      projectsContainer.removeChild(projectsContainer.firstChild);
    };
}




/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendChildren: () => (/* binding */ appendChildren),
/* harmony export */   createElementClass: () => (/* binding */ createElementClass),
/* harmony export */   removeAllChildren: () => (/* binding */ removeAllChildren),
/* harmony export */   setAttributes: () => (/* binding */ setAttributes)
/* harmony export */ });
//Functions used to quickly create elements in JS and add attributes
const setAttributes = function (elements, attributes) {
  elements = Array.isArray(elements) ? elements : [elements];
  Object.keys(attributes).forEach(attr => {
    elements.forEach(element => {
      element.setAttribute(attr, attributes[attr]);
    })
});
}

const appendChildren = function (element, children) {
  children = Array.isArray(children) ? children : [children];
  children.forEach(child => {
      element.appendChild(child);
  });
}

const createElementClass = function(elementType, className, innerText) {
  var newElement = document.createElement(elementType);
  newElement.classList.add(className);
  newElement.innerHTML = innerText;
  return newElement;
}

const removeAllChildren = function (container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  };
}




/***/ }),

/***/ "./src/Wotfard-Regular.otf":
/*!*********************************!*\
  !*** ./src/Wotfard-Regular.otf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cfcaa3e2674bab4c4c6a.otf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ "./src/interface.js");
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note */ "./src/note.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form */ "./src/form.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project */ "./src/project.js");







let noteCount = 0;
let projectCount = 3;
let notes = [];
let projects = [new _project__WEBPACK_IMPORTED_MODULE_5__.Project("General", "id-1"), new _project__WEBPACK_IMPORTED_MODULE_5__.Project("Study", "id-2"), new _project__WEBPACK_IMPORTED_MODULE_5__.Project("Chores", "id-3")];
let content = document.querySelector(".content")
;(0,_interface__WEBPACK_IMPORTED_MODULE_1__["default"])(projects);
(0,_project__WEBPACK_IMPORTED_MODULE_5__.displayProjects)(projects); //Generate all the base elements for the DOM

document.addEventListener("click", (event) => {
  //Projects logic
  if (event.target.classList.contains("new-project")) { // If user clicks on new note
    var newProjectdialog = document.querySelector(".newProjectDialog")
    newProjectdialog.showModal();
    projectCount +=1;
    (0,_dom__WEBPACK_IMPORTED_MODULE_3__.handleCreateProjectOperation)(projects, projectCount)
  }

  if (event.target.classList.contains("delete-project-button")) { // User removes a project
    var id = event.target.parentNode.dataset.id;
    projects = (0,_note__WEBPACK_IMPORTED_MODULE_2__.removeElementById)(id, projects);
    (0,_project__WEBPACK_IMPORTED_MODULE_5__.displayProjects)(projects);
  }

  //Notes logic
  if (event.target.classList.contains("new-item")) { // If user clicks on new note
    noteCount +=1;
    (0,_dom__WEBPACK_IMPORTED_MODULE_3__.handleCreateOperation)(noteCount, notes, projects);
  }
  if (event.target.classList.contains("delete-button")) { // User removes a note
    var id = event.target.parentNode.parentNode.dataset.id;
    notes = (0,_note__WEBPACK_IMPORTED_MODULE_2__.removeElementById)(id, notes);
    (0,_note__WEBPACK_IMPORTED_MODULE_2__.displayNotes)(notes);
  }
  if (event.target.classList.contains("edit-button")) { // User updates a note
    var editNoteDialog = document.querySelector(".editNoteDialog");
    id = event.target.parentNode.parentNode.dataset.id;
    editNoteDialog.showModal();
    (0,_dom__WEBPACK_IMPORTED_MODULE_3__.handleEditOperation)(id, notes, projects);
  }
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDeUI7QUFDNEI7QUFDb0I7QUFDbkQ7QUFDZ0Q7O0FBRTVGO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw2Q0FBTyx5QkFBeUIsNkNBQU8sdUJBQXVCLDZDQUFPO0FBQ3pGO0FBQ0EsdURBQW9CO0FBQ3BCLHlEQUFlLFlBQVk7O0FBRTNCO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrRUFBNEI7QUFDaEM7O0FBRUEsa0VBQWtFO0FBQ2xFO0FBQ0EsZUFBZSx3REFBaUI7QUFDaEMsSUFBSSx5REFBZTtBQUNuQjs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBLElBQUksMkRBQXFCO0FBQ3pCO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0EsWUFBWSx3REFBaUI7QUFDN0IsSUFBSSxtREFBWTtBQUNoQjtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFtQjtBQUN2QjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbm90ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIldvdGZhcmQtUmVndWxhci5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJ3b3RmYXJkXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG46cm9vdCB7XG4gIGZvbnQtZmFtaWx5OiBcIndvdGZhcmRcIjtcbn1cblxuLnByb2plY3QtdmFsdWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCA0MDBweCkpO1xuICBnYXA6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4ucHJvamVjdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLnByb2plY3QtY29udGFpbmVyID4gKiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLm5vdGVzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCA0MDBweCkpO1xuICBnYXA6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG5cbi5ub3RlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuXG4ubm90ZS1jb250YWluZXIgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLm5vdGUtY29udGFpbmVyIGRpdiAqe1xuICB3aWR0aDogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuXG4ubm90ZS1jb250YWluZXIgZGl2ICo6Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbmRpYWxvZyBkaXYgb3B0aW9uIHtcbiAgd2lkdGg6IDQwMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0Qiw0Q0FBK0I7QUFDakM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkRBQTZEO0VBQzdELFNBQVM7RUFDVCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULFlBQVk7RUFDWixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4REFBOEQ7RUFDOUQsU0FBUztFQUNULDZCQUE2QjtBQUMvQjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QjtBQUN6Qjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwid290ZmFyZFxcXCI7XFxuICBzcmM6IHVybChcXFwiV290ZmFyZC1SZWd1bGFyLm90ZlxcXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LWZhbWlseTogXFxcIndvdGZhcmRcXFwiO1xcbn1cXG5cXG4ucHJvamVjdC12YWx1ZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDQwMHB4KSk7XFxuICBnYXA6IDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciA+ICoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubm90ZXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgNDAwcHgpKTtcXG4gIGdhcDogMjBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG5cXG4ubm90ZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG59XFxuXFxuLm5vdGUtY29udGFpbmVyIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ub3RlLWNvbnRhaW5lciBkaXYgKntcXG4gIHdpZHRoOiA1MCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXFxuLm5vdGUtY29udGFpbmVyIGRpdiAqOmZpcnN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG5kaWFsb2cgZGl2IG9wdGlvbiB7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge05vdGUsIGdlbmVyYXRlTm90ZSwgZGlzcGxheU5vdGVzLCByZW1vdmVFbGVtZW50QnlJZCwgZWRpdEVsZW1lbnRCeUlkLCB9IGZyb20gJy4vbm90ZSc7XG5pbXBvcnQgeyBhZGFwdEVkaXRGb3JtVmFsdWVzLCByZXNldE5ld0Zvcm1WYWx1ZXMgfSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IHsgZ2VuZXJhdGVQcm9qZWN0LCBkaXNwbGF5UHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3QnO1xuXG5jb25zdCBoYW5kbGVDcmVhdGVPcGVyYXRpb24gPSBmdW5jdGlvbiAobm90ZUNvdW50LCBub3RlcywgcHJvamVjdHMpIHtcbiAgdmFyIG5ld05vdGVkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld05vdGVEaWFsb2dcIilcbiAgcmVzZXROZXdGb3JtVmFsdWVzKHByb2plY3RzKTtcbiAgbmV3Tm90ZWRpYWxvZy5zaG93TW9kYWwoKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2UtbmV3LW5vdGUtZGlhbG9nXCIpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB2YXIgbmV3Tm90ZWRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3Tm90ZURpYWxvZ1wiKVxuICAgICAgdmFyIG5vdGUgPSBnZW5lcmF0ZU5vdGUobm90ZUNvdW50KTtcbiAgICAgIG5ld05vdGVkaWFsb2cuY2xvc2UoKTtcbiAgICAgIG5vdGVzLnB1c2gobm90ZSk7XG4gICAgICBkaXNwbGF5Tm90ZXMobm90ZXMpO1xuICAgIH1cbiAgfSlcbn07XG5cbmNvbnN0IGhhbmRsZUVkaXRPcGVyYXRpb24gPSBmdW5jdGlvbiAoaWQsIG5vdGVzLCBwcm9qZWN0cykge1xuICBhZGFwdEVkaXRGb3JtVmFsdWVzKGlkLCBub3RlcywgcHJvamVjdHMpXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG9zZS1lZGl0LW5vdGUtZGlhbG9nXCIpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHZhciBlZGl0Tm90ZURpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdE5vdGVEaWFsb2dcIik7XG4gICAgbm90ZXMgPSBlZGl0RWxlbWVudEJ5SWQoaWQsIG5vdGVzKVxuICAgIGVkaXROb3RlRGlhbG9nLmNsb3NlKCk7XG4gICAgZGlzcGxheU5vdGVzKG5vdGVzKTtcbiAgfTtcbn0pO1xufVxuXG5cbmNvbnN0IGhhbmRsZUNyZWF0ZVByb2plY3RPcGVyYXRpb24gPSBmdW5jdGlvbiAocHJvamVjdHMsIHByb2plY3RDb3VudCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG9zZS1uZXctcHJvamVjdC1kaWFsb2dcIikpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHZhciBuZXdQcm9qZWN0ZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdQcm9qZWN0RGlhbG9nXCIpXG4gICAgICB2YXIgcHJvamVjdCA9IGdlbmVyYXRlUHJvamVjdChwcm9qZWN0Q291bnQpO1xuICAgICAgbmV3UHJvamVjdGRpYWxvZy5jbG9zZSgpO1xuICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICAgIGRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0cyk7XG4gICAgfVxuICB9KVxufTtcblxuXG5cbmV4cG9ydCB7aGFuZGxlQ3JlYXRlT3BlcmF0aW9uLCBoYW5kbGVFZGl0T3BlcmF0aW9uLCBoYW5kbGVDcmVhdGVQcm9qZWN0T3BlcmF0aW9ufVxuIiwiaW1wb3J0IHtzZXRBdHRyaWJ1dGVzLCBhcHBlbmRDaGlsZHJlbiwgY3JlYXRlRWxlbWVudENsYXNzLCByZW1vdmVBbGxDaGlsZHJlbn0gZnJvbSAnLi91dGlscydcblxuXG4vLyBBZ2dyZWdhdGUgdGhlIGZvcm0gZWxlbWVudHMgdG8gY3JlYXRlIHRoZSB0d28gZm9ybXMgKG5ldyBub3RlIGFuZCBlZGl0IG5vdGUpXG5cbmNvbnN0IGdlbmVyYXRlTmV3Tm90ZUZvcm0gPSBmdW5jdGlvbihwcm9qZWN0cykge1xuICB2YXIgZGlhbG9nID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGlhbG9nXCIsIFwibmV3Tm90ZURpYWxvZ1wiLCBcIlwiKTtcbiAgdmFyIGZvcm1Db250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJmb3JtXCIsIFwiZm9ybS1jb250YWluZXJcIiwgXCJcIik7XG4gIHZhciBmb3JtT2JqZWN0aXZlID0gXCJuZXdcIlxuICBmb3JtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIlwiKTtcbiAgYXBwZW5kQ2hpbGRyZW4oZm9ybUNvbnRhaW5lciwgW2dlbmVyYXRlVGl0bGVDb250YWluZXIoZm9ybU9iamVjdGl2ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZURhdGVDb250YWluZXIoZm9ybU9iamVjdGl2ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZURlc2NDb250YWluZXIoZm9ybU9iamVjdGl2ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZVByaW9yaXR5Q29udGFpbmVyKGZvcm1PYmplY3RpdmUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVTdGF0dXNDb250YWluZXIoZm9ybU9iamVjdGl2ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZVByb2plY3RDb250YWluZXIoZm9ybU9iamVjdGl2ZSwgcHJvamVjdHMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVDbG9zZUJ1dHRvbihmb3JtT2JqZWN0aXZlKV0pO1xuICBkaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gIHJldHVybiBkaWFsb2dcbn1cblxuY29uc3QgZ2VuZXJhdGVFZGl0Tm90ZUZvcm0gPSBmdW5jdGlvbihwcm9qZWN0cykge1xuICB2YXIgZGlhbG9nID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGlhbG9nXCIsIFwiZWRpdE5vdGVEaWFsb2dcIiwgXCJcIik7XG4gIHZhciBmb3JtQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZm9ybVwiLCBcImZvcm0tY29udGFpbmVyXCIsIFwiXCIpO1xuICB2YXIgZm9ybU9iamVjdGl2ZSA9IFwiZWRpdFwiXG4gIGZvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiXCIpO1xuICBhcHBlbmRDaGlsZHJlbihmb3JtQ29udGFpbmVyLCBbZ2VuZXJhdGVUaXRsZUNvbnRhaW5lcihmb3JtT2JqZWN0aXZlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGF0ZUNvbnRhaW5lcihmb3JtT2JqZWN0aXZlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGVzY0NvbnRhaW5lcihmb3JtT2JqZWN0aXZlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlUHJpb3JpdHlDb250YWluZXIoZm9ybU9iamVjdGl2ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZVN0YXR1c0NvbnRhaW5lcihmb3JtT2JqZWN0aXZlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlUHJvamVjdENvbnRhaW5lcihmb3JtT2JqZWN0aXZlLCBwcm9qZWN0cyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUNsb3NlQnV0dG9uKGZvcm1PYmplY3RpdmUpXSk7XG4gIGRpYWxvZy5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgcmV0dXJuIGRpYWxvZ1xufVxuXG5jb25zdCBnZW5lcmF0ZU5ld1Byb2plY3RGb3JtID0gZnVuY3Rpb24oKSB7XG4gIHZhciBkaWFsb2cgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJkaWFsb2dcIiwgXCJuZXdQcm9qZWN0RGlhbG9nXCIsIFwiXCIpO1xuICB2YXIgZm9ybUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImZvcm1cIiwgXCJmb3JtLWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgdmFyIGZvcm1PYmplY3RpdmUgPSBcIm5ldy1wcm9qZWN0XCJcbiAgZm9ybUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJcIik7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVOZXdQcm9qZWN0Q29udGFpbmVyKCkpO1xuICBkaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gIHJldHVybiBkaWFsb2dcbn1cblxuXG5cbi8vIEdlbmVyYXRlIGluZGl2aWR1YWxseSB0aGUgZGlmZmVyZW50IGVsZW1lbnRzIG9mIHRoZSBmb3Jtc1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVRpdGxlQ29udGFpbmVyIChmb3JtT2JqZWN0aXZlKSB7XG4gIGxldCB0aXRsZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpdlwiLCBcInRpdGxlLWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgbGV0IHRpdGxlTGFiZWwgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJsYWJlbFwiLCBcInRpdGxlXCIsIFwiVGl0bGU6IFwiKTtcbiAgc2V0QXR0cmlidXRlcyh0aXRsZUxhYmVsLCB7XCJmb3JcIiA6IFwidGl0bGVcIn0pO1xuICBsZXQgdGl0bGVJbnB1dCA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImlucHV0XCIsIFwidGl0bGVcIiwgXCJcIik7XG4gIHNldEF0dHJpYnV0ZXModGl0bGVJbnB1dCwge1wiaWRcIiA6IGB0aXRsZS0ke2Zvcm1PYmplY3RpdmV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCIgOiBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiIDogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGxhY2Vob2xkZXJcIiA6IFwiRG8gbGF1bmRyeVwifSk7XG4gIGFwcGVuZENoaWxkcmVuKHRpdGxlQ29udGFpbmVyLCBbdGl0bGVMYWJlbCwgdGl0bGVJbnB1dF0pO1xuICByZXR1cm4gdGl0bGVDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRGVzY0NvbnRhaW5lciAoZm9ybU9iamVjdGl2ZSkge1xuICBsZXQgZGVzY3JpcHRpb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJkaXZcIiwgXCJkZXNjcmlwdGlvbi1jb250YWluZXJcIiwgXCJcIik7XG4gIGxldCBkZXNjcmlwdGlvbkxhYmVsID0gY3JlYXRlRWxlbWVudENsYXNzKFwibGFiZWxcIiwgXCJkZXNjcmlwdGlvblwiLCBcIkRlc2NyaXB0aW9uOiBcIik7XG4gIHNldEF0dHJpYnV0ZXMoZGVzY3JpcHRpb25MYWJlbCwge1wiZm9yXCIgOiBcImRlc2NyaXB0aW9uXCJ9KTtcbiAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJ0ZXh0YXJlYVwiLCBcImRlc2NyaXB0aW9uXCIsIFwiXCIpO1xuICBzZXRBdHRyaWJ1dGVzKGRlc2NyaXB0aW9uSW5wdXQsIHtcImlkXCIgOiBgZGVzY3JpcHRpb24tJHtmb3JtT2JqZWN0aXZlfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiIDogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbHNcIiA6IFwiMzBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3dzXCIgOiBcIjdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiIDogXCJXYXNoIGFsbCBibGFjayBjbG90aGVzXCJ9KTtcbiAgYXBwZW5kQ2hpbGRyZW4oZGVzY3JpcHRpb25Db250YWluZXIsIFtkZXNjcmlwdGlvbkxhYmVsLCBkZXNjcmlwdGlvbklucHV0XSk7XG4gIHJldHVybiBkZXNjcmlwdGlvbkNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVEYXRlQ29udGFpbmVyIChmb3JtT2JqZWN0aXZlKSB7XG4gIGxldCBkYXRlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGl2XCIsIFwiZGF0ZS1jb250YWluZXJcIiwgXCJcIik7XG4gIGxldCBkYXRlTGFiZWwgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJsYWJlbFwiLCBcImRhdGVcIiwgXCJEdWUgZGF0ZTogXCIpO1xuICBzZXRBdHRyaWJ1dGVzKGRhdGVMYWJlbCwge1wiZm9yXCIgOiBcImRhdGVcIn0pO1xuICBsZXQgZGF0ZUlucHV0ID0gY3JlYXRlRWxlbWVudENsYXNzKFwiaW5wdXRcIiwgXCJkYXRlXCIsIFwiXCIpO1xuICBzZXRBdHRyaWJ1dGVzKGRhdGVJbnB1dCwge1wiaWRcIiA6IGBkYXRlLSR7Zm9ybU9iamVjdGl2ZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIiA6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIiA6IFwiZGF0ZVwifSk7XG4gIGFwcGVuZENoaWxkcmVuKGRhdGVDb250YWluZXIsIFtkYXRlTGFiZWwsIGRhdGVJbnB1dF0pO1xuICByZXR1cm4gZGF0ZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVQcmlvcml0eUNvbnRhaW5lciAoZm9ybU9iamVjdGl2ZSkge1xuICBsZXQgcHJpb3JpdHlDb250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJkaXZcIiwgXCJwcmlvcml0eS1jb250YWluZXJcIiwgXCJcIik7XG4gIGxldCBwcmlvcml0eUxhYmVsID0gY3JlYXRlRWxlbWVudENsYXNzKFwibGFiZWxcIiwgXCJwcmlvcml0eVwiLCBcIlByaW9yaXR5OiBcIik7XG4gIHNldEF0dHJpYnV0ZXMocHJpb3JpdHlMYWJlbCwge1wiZm9yXCIgOiBcInByaW9yaXR5XCJ9KTtcbiAgbGV0IHByaW9yaXR5SW5wdXQgPSBnZW5lcmF0ZU9wdGlvbkVsZW1lbnRzKFwicHJpb3JpdHlcIiwgW1wiVmVyeSBpbXBvcnRhbnRcIiwgXCJJbXBvcnRhbnRcIiwgXCJOb3JtYWxcIiwgXCJOb3QgaW1wb3J0YW50XCJdLCBmb3JtT2JqZWN0aXZlLCBcIk5vcm1hbFwiKVxuICBhcHBlbmRDaGlsZHJlbihwcmlvcml0eUNvbnRhaW5lciwgW3ByaW9yaXR5TGFiZWwsIHByaW9yaXR5SW5wdXRdKTtcbiAgcmV0dXJuIHByaW9yaXR5Q29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVN0YXR1c0NvbnRhaW5lciAoZm9ybU9iamVjdGl2ZSkge1xuICBsZXQgc3RhdHVzQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGl2XCIsIFwic3RhdHVzLWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgbGV0IHN0YXR1c0xhYmVsID0gY3JlYXRlRWxlbWVudENsYXNzKFwibGFiZWxcIiwgXCJzdGF0dXNcIiwgXCJTdGF0dXM6IFwiKTtcbiAgc2V0QXR0cmlidXRlcyhzdGF0dXNMYWJlbCwge1wiZm9yXCIgOiBcInN0YXR1c1wifSk7XG4gIGxldCBzdGF0dXNJbnB1dCA9IGdlbmVyYXRlT3B0aW9uRWxlbWVudHMoXCJzdGF0dXNcIiwgW1wiTm90IHN0YXJ0ZWRcIiwgXCJEb2luZ1wiLCBcIkRvbmVcIl0sIGZvcm1PYmplY3RpdmUsIFwiRG9pbmdcIilcbiAgYXBwZW5kQ2hpbGRyZW4oc3RhdHVzQ29udGFpbmVyLCBbc3RhdHVzTGFiZWwsIHN0YXR1c0lucHV0XSk7XG4gIHJldHVybiBzdGF0dXNDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdENvbnRhaW5lciAoZm9ybU9iamVjdGl2ZSwgcHJvamVjdHMpIHtcbiAgbGV0IHByb2plY3RDb250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJkaXZcIiwgXCJwcm9qZWN0LWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgbGV0IHByb2plY3RMYWJlbCA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImxhYmVsXCIsIFwicHJvamVjdFwiLCBcIlByb2plY3Q6IFwiKTtcbiAgc2V0QXR0cmlidXRlcyhwcm9qZWN0TGFiZWwsIHtcImZvclwiIDogXCJwcm9qZWN0XCJ9KTtcbiAgdmFyIHByb2plY3RMaXN0ID0gW107XG4gIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QudGl0bGUpKTtcbiAgbGV0IHByb2plY3RJbnB1dCA9IGdlbmVyYXRlT3B0aW9uRWxlbWVudHMoXCJwcm9qZWN0XCIsIHByb2plY3RMaXN0LCBmb3JtT2JqZWN0aXZlLCBcIkdlbmVyYWxcIilcbiAgYXBwZW5kQ2hpbGRyZW4ocHJvamVjdENvbnRhaW5lciwgW3Byb2plY3RMYWJlbCwgcHJvamVjdElucHV0XSk7XG4gIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xufVxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ2xvc2VCdXR0b24gKGZvcm1PYmplY3RpdmUpIHtcbiAgbGV0IGJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImJ1dHRvblwiLCBgY2xvc2UtJHtmb3JtT2JqZWN0aXZlfS1ub3RlLWRpYWxvZ2AsIGAke2Zvcm1PYmplY3RpdmV9IG5vdGVgKVxuICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGNsb3NlJHtmb3JtT2JqZWN0aXZlfU5vdGVEaWFsb2dgKVxuICByZXR1cm4gYnV0dG9uXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTmV3UHJvamVjdENvbnRhaW5lciAoKSB7XG4gIGxldCBuZXdQcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGl2XCIsIFwibmV3LXByb2plY3QtY29udGFpbmVyXCIsIFwiXCIpO1xuICBsZXQgbmV3UHJvamVjdExhYmVsID0gY3JlYXRlRWxlbWVudENsYXNzKFwibGFiZWxcIiwgXCJuZXctcHJvamVjdFwiLCBcIk5ldyBQcm9qZWN0OiBcIik7XG4gIHNldEF0dHJpYnV0ZXMobmV3UHJvamVjdExhYmVsLCB7XCJmb3JcIiA6IFwibmV3LXByb2plY3RcIn0pO1xuICBsZXQgbmV3UHJvamVjdElucHV0ID0gY3JlYXRlRWxlbWVudENsYXNzKFwiaW5wdXRcIiwgXCJuZXctcHJvamVjdFwiLCBcIlwiKTtcbiAgc2V0QXR0cmlidXRlcyhuZXdQcm9qZWN0SW5wdXQsIHtcImlkXCIgOiBcIm5ldy1wcm9qZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiIDogXCJuZXctcHJvamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIiA6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsYWNlaG9sZGVyXCIgOiBcIlNwb3J0XCJ9KTtcbiAgdmFyIGJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImJ1dHRvblwiLCBgY2xvc2UtbmV3LXByb2plY3QtZGlhbG9nYCwgYGFkZCBuZXcgcHJvamVjdGApXG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgY2xvc2VOZXdQcm9qZWN0RGlhbG9nYClcbiAgYXBwZW5kQ2hpbGRyZW4obmV3UHJvamVjdENvbnRhaW5lciwgW25ld1Byb2plY3RMYWJlbCwgbmV3UHJvamVjdElucHV0LCBidXR0b25dKTtcbiAgcmV0dXJuIG5ld1Byb2plY3RDb250YWluZXI7XG59XG5cblxuLy8gRnVuY3Rpb25zIHRvIGF2b2lkIHJlZHVuZGFudCBjb2RlXG5mdW5jdGlvbiBnZW5lcmF0ZU9wdGlvbkVsZW1lbnRzIChpbnB1dENsYXNzLCBvcHRpb25WYWx1ZXMsIGZvcm1PYmplY3RpdmUpIHtcbiAgdmFyIGlucHV0RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcInNlbGVjdFwiLCBpbnB1dENsYXNzLCBcIlwiKTtcbiAgc2V0QXR0cmlidXRlcyhpbnB1dEVsZW1lbnQsIHtcImlkXCIgOiBgJHtpbnB1dENsYXNzfS0ke2Zvcm1PYmplY3RpdmV9YH0pO1xuICBvcHRpb25WYWx1ZXMuZm9yRWFjaCgob3B0aW9uKSA9PiBpbnB1dEVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlT3B0aW9uRWxlbWVudChvcHRpb24pKSk7XG4gIHJldHVybiBpbnB1dEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbkVsZW1lbnQodmFsdWUpIHtcbiAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gIG9wdGlvbi5pbm5lclRleHQgPSB2YWx1ZTtcbiAgcmV0dXJuIG9wdGlvbjtcbn1cblxuXG4vLyBJbnB1dCB0aGUgdmFsdWVzIG9mIG9yaWdpbmFsIG5vdGUgd2hlbiBlZGl0IGlzIHNlbGVjdGVkXG5cbmNvbnN0IGFkYXB0RWRpdEZvcm1WYWx1ZXMgPSBmdW5jdGlvbiAoaWQsIG5vdGVzLCBwcm9qZWN0cykge1xuICBjb25zdCBjb25kaXRpb24gPSBub3RlID0+IG5vdGVbXCJpZFwiXSA9PT0gaWQ7XG4gIHZhciBub3RlID0gbm90ZXMuZmlsdGVyKGNvbmRpdGlvbilbMF07XG4gIGNvbnNvbGUubG9nKG5vdGUpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGUtZWRpdFwiKS52YWx1ZSA9IG5vdGVbXCJ0aXRsZVwiXTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlLWVkaXRcIikudmFsdWUgPSBub3RlW1wiZGF0ZVwiXTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGF0dXMtZWRpdFwiKS52YWx1ZSA9IG5vdGVbXCJzdGF0dXNcIl07XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHktZWRpdFwiKS52YWx1ZSA9IG5vdGVbXCJwcmlvXCJdO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uLWVkaXRcIikudmFsdWUgPSBub3RlW1wibm90ZXNcIl07XG4gIGFkYXB0UHJvamVjdE9wdGlvbnMoXCIjcHJvamVjdC1lZGl0XCIsIHByb2plY3RzKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWVkaXRcIikudmFsdWUgPSBub3RlW1wicHJvamVjdFwiXTtcbn1cblxuLy8gUmVzZXQgdGhlIHZhbHVlcyB3aGVuIG5ldyBub3RlIGZvcm0gaXMgZ2VuZXJhdGVkXG5cbmNvbnN0IHJlc2V0TmV3Rm9ybVZhbHVlcyA9IGZ1bmN0aW9uIChwcm9qZWN0cykge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlLW5ld1wiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZS1uZXdcIikudmFsdWUgPSBcIlwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXR1cy1uZXdcIikudmFsdWUgPSBcIlwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5LW5ld1wiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb24tbmV3XCIpLnZhbHVlID0gXCJcIjtcbiAgYWRhcHRQcm9qZWN0T3B0aW9ucyhcIiNwcm9qZWN0LW5ld1wiLCBwcm9qZWN0cylcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LW5ld1wiKS52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGFkYXB0UHJvamVjdE9wdGlvbnMgKHByb2plY3RDb250YWluZXJJRCwgcHJvamVjdHMpIHtcbiAgbGV0IHByb2plY3RPcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9qZWN0Q29udGFpbmVySUQpO1xuICByZW1vdmVBbGxDaGlsZHJlbihwcm9qZWN0T3B0aW9uc0NvbnRhaW5lcik7XG4gIHZhciBwcm9qZWN0TGlzdCA9IFtdO1xuICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdExpc3QucHVzaChwcm9qZWN0LnRpdGxlKSk7XG4gIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHByb2plY3RPcHRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbkVsZW1lbnQocHJvamVjdCkpKTtcbn1cblxuZXhwb3J0IHtnZW5lcmF0ZU5ld05vdGVGb3JtLCBnZW5lcmF0ZUVkaXROb3RlRm9ybSwgZ2VuZXJhdGVOZXdQcm9qZWN0Rm9ybSwgYWRhcHRFZGl0Rm9ybVZhbHVlcywgcmVzZXROZXdGb3JtVmFsdWVzfTtcbiIsImltcG9ydCB7c2V0QXR0cmlidXRlcywgYXBwZW5kQ2hpbGRyZW4sIGNyZWF0ZUVsZW1lbnRDbGFzc30gZnJvbSAnLi91dGlscydcbmltcG9ydCB7Z2VuZXJhdGVOZXdOb3RlRm9ybSwgZ2VuZXJhdGVFZGl0Tm90ZUZvcm0sIGdlbmVyYXRlTmV3UHJvamVjdEZvcm19IGZyb20gJy4vZm9ybSc7XG5cbmNvbnN0IGdlbmVyYXRlQmFzZUVsZW1lbnRzID0gZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gIHZhciBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpXG4gIHZhciBuZXdOb3RlRGlhbG9nID0gZ2VuZXJhdGVOZXdOb3RlRm9ybShwcm9qZWN0cyk7XG4gIHZhciBlZGl0Tm90ZURpYWxvZyA9IGdlbmVyYXRlRWRpdE5vdGVGb3JtKHByb2plY3RzKTtcbiAgdmFyIG5ld1Byb2plY3REaWFsb2cgPSBnZW5lcmF0ZU5ld1Byb2plY3RGb3JtKCk7XG4gIGdlbmVyYXRlQmFzZUludGVyZmFjZSgpO1xuICBhcHBlbmRDaGlsZHJlbihjb250ZW50LCBbbmV3Tm90ZURpYWxvZywgZWRpdE5vdGVEaWFsb2csIG5ld1Byb2plY3REaWFsb2ddKTtcbiAgLy8gZ25Qcm9qZWN0c0VsZW1lbnRzKHByb2plY3RzKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVCYXNlSW50ZXJmYWNlICgpIHtcbiAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgdmFyIGludGVyZmFjZUNvbnRhaW5lciA9IGduSW50ZXJmYWNlQ29udGFpbmVyKCk7XG4gIHZhciBwYWdlVGl0bGUgPSBnblBhZ2VUaXRsZSgpO1xuICB2YXIgbmV3SXRlbUJ1dHRvbiA9IGduTmV3SXRlbUJ1dHRvbigpO1xuICB2YXIgbmV3UHJvamVjdEJ1dHRvbiA9IGduTmV3UHJvamVjdEJ1dHRvbigpO1xuICB2YXIgcHJvamVjdHNDb250YWluZXIgPSBnblByb2plY3RzQ29udGFpbmVyKCk7XG4gIHZhciBub3Rlc0NvbnRhaW5lciA9IGduTm90ZXNDb250YWluZXIoKTtcbiAgYXBwZW5kQ2hpbGRyZW4oaW50ZXJmYWNlQ29udGFpbmVyLCBbcGFnZVRpdGxlLCBuZXdJdGVtQnV0dG9uLCBuZXdQcm9qZWN0QnV0dG9uXSk7XG4gIGFwcGVuZENoaWxkcmVuKGNvbnRhaW5lciwgW2ludGVyZmFjZUNvbnRhaW5lciwgcHJvamVjdHNDb250YWluZXIsIG5vdGVzQ29udGFpbmVyXSk7XG59XG5cbmZ1bmN0aW9uIGduSW50ZXJmYWNlQ29udGFpbmVyKCkge1xuICB2YXIgaW50ZXJmYWNlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGl2XCIsIFwiaW50ZXJmYWNlLWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgcmV0dXJuIGludGVyZmFjZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ25QYWdlVGl0bGUoKSB7XG4gIHZhciBwYWdlVGl0bGUgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJoMVwiLCBcInBhZ2UtdGl0bGVcIiwgXCJPZGluIHRvLWRvLWxpc3QgdG9vbFwiKTtcbiAgcmV0dXJuIHBhZ2VUaXRsZTtcbn1cblxuZnVuY3Rpb24gZ25OZXdJdGVtQnV0dG9uKCkge1xuICB2YXIgbmV3SXRlbUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImJ1dHRvblwiLCBcIm5ldy1pdGVtXCIsIFwiTmV3IEl0ZW1cIik7XG4gIHJldHVybiBuZXdJdGVtQnV0dG9uO1xufVxuXG5mdW5jdGlvbiBnbk5ld1Byb2plY3RCdXR0b24oKSB7XG4gIHZhciBuZXdJdGVtQnV0dG9uID0gY3JlYXRlRWxlbWVudENsYXNzKFwiYnV0dG9uXCIsIFwibmV3LXByb2plY3RcIiwgXCJOZXcgUHJvamVjdFwiKTtcbiAgcmV0dXJuIG5ld0l0ZW1CdXR0b247XG59XG5cbmZ1bmN0aW9uIGduUHJvamVjdHNDb250YWluZXIoKSB7XG4gIHZhciBwcm9qZWN0c0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpdlwiLCBcInByb2plY3RzLWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgcmV0dXJuIHByb2plY3RzQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBnbk5vdGVzQ29udGFpbmVyKCkge1xuICB2YXIgbm90ZXNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJkaXZcIiwgXCJub3Rlcy1jb250YWluZXJcIiwgXCJcIik7XG4gIHJldHVybiBub3Rlc0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ25Qcm9qZWN0c0VsZW1lbnRzKHByb2plY3RzKSB7XG4gIHZhciBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udGFpbmVyXCIpO1xuICB3aGlsZSAocHJvamVjdHNDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIHByb2plY3RzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RzQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9O1xuICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZ25Qcm9qZWN0RWxlbWVudChwcm9qZWN0KSkpO1xufVxuXG5mdW5jdGlvbiBnblByb2plY3RFbGVtZW50KHByb2plY3QpIHtcbiAgdmFyIHByb2plY3RDb250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJkaXZcIiwgXCJwcm9qZWN0LWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgdmFyIHByb2plY3RUaXRsZSA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcInNwYW5cIiwgXCJwcm9qZWN0LXRpdGxlXCIsIHByb2plY3QpO1xuICB2YXIgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImJ1dHRvblwiLCBcImRlbGV0ZS1wcm9qZWN0LWJ1dHRvblwiLCBcIkRlbGV0ZSBwcm9qZWN0XCIpXG4gIGFwcGVuZENoaWxkcmVuKHByb2plY3RDb250YWluZXIsIFtwcm9qZWN0VGl0bGUsIGRlbGV0ZVByb2plY3RCdXR0b25dKTtcbiAgcmV0dXJuIHByb2plY3RDb250YWluZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVCYXNlRWxlbWVudHM7XG4iLCJpbXBvcnQge3NldEF0dHJpYnV0ZXMsIGFwcGVuZENoaWxkcmVuLCBjcmVhdGVFbGVtZW50Q2xhc3N9IGZyb20gJy4vdXRpbHMnXG5cblxuLy9DbGFzcyBnZW5lcmF0b3JcbmNvbnN0IE5vdGUgPSBjbGFzcyBOb3RlIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRhdGUsIHN0YXR1cywgcHJpbywgcHJvamVjdCwgbm90ZXMsIGlkKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7dGl0bGUsIGRhdGUsIHN0YXR1cywgcHJpbywgcHJvamVjdCwgbm90ZXMsIGlkfSk7XG4gIH07XG4gIHVwZGF0ZU5vdGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzW1widGl0bGVcIl0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlLWVkaXRcIikudmFsdWU7XG4gICAgdGhpc1tcImRhdGVcIl0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGUtZWRpdFwiKS52YWx1ZTtcbiAgICB0aGlzW1wic3RhdHVzXCJdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGF0dXMtZWRpdFwiKS52YWx1ZTtcbiAgICB0aGlzW1wicHJpb1wiXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHktZWRpdFwiKS52YWx1ZTtcbiAgICB0aGlzW1wibm90ZXNcIl0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uLWVkaXRcIikudmFsdWU7XG4gICAgdGhpc1tcInByb2plY3RcIl0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZWRpdFwiKS52YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbn1cblxuLy9DcmVhdGUgYSBuZXcgbm90ZSBvYmplY3QgYmFzZWQgb24gdmFsdWVzIGdpdmVuIGluIHRoZSBuZXcgbm90ZSBmb3JtXG5jb25zdCBnZW5lcmF0ZU5vdGUgPSBmdW5jdGlvbiAobm90ZUNvdW50KSB7XG4gIHJldHVybiBuZXcgTm90ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlLW5ld1wiKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZS1uZXdcIikudmFsdWUsXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXR1cy1uZXdcIikudmFsdWUsXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5LW5ld1wiKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uZXdcIikudmFsdWUsXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uLW5ld1wiKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIGBpZC0ke25vdGVDb3VudH1gKTtcbn1cblxuLy9EaXNwbGF5cyBhbGwgdGhlIG5vdGVzIG9iamVjdHMgaW4gdGhlIERPTVxuY29uc3QgZGlzcGxheU5vdGVzID0gZnVuY3Rpb24gKG5vdGVzKSB7XG4gIHJlbW92ZURpc3BsYXllZE5vdGVzKCk7XG4gIHZhciBub3Rlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZXMtY29udGFpbmVyXCIpO1xuICBub3Rlcy5mb3JFYWNoKG5vdGUgPT4ge25vdGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlOb3RlKG5vdGUpKX0pO1xufTtcblxuLy9JbmRpdmlkdWFsbHkgY3JlYXRlIHRoZSBjb250YWluZXIgd2l0aCBhbGwgdGhlIERPTSBlbGVtZW50cyBmb3IgYSBub3RlIG9iamVjdFxuZnVuY3Rpb24gZGlzcGxheU5vdGUgKG5vdGUpIHtcbiAgbGV0IG5vdGVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJkaXZcIiwgXCJub3RlLWNvbnRhaW5lclwiLCBcIlwiKVxuICBub3RlQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgbm90ZVtcImlkXCJdKTtcbiAgYXBwZW5kQ2hpbGRyZW4obm90ZUNvbnRhaW5lciwgW2NyZWF0ZUVsZW1lbnRDbGFzcyhcInNwYW5cIiwgYHByb2plY3QtdmFsdWVgLCBub3RlW1wicHJvamVjdFwiXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOb3RlU2VjdGlvbihcInRpdGxlXCIsIG5vdGVbXCJ0aXRsZVwiXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOb3RlU2VjdGlvbihcImRhdGVcIiwgbm90ZVtcImRhdGVcIl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTm90ZVNlY3Rpb24oXCJzdGF0dXNcIiwgbm90ZVtcInN0YXR1c1wiXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOb3RlU2VjdGlvbihcInByaW9cIiwgbm90ZVtcInByaW9cIl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTm90ZVNlY3Rpb24oXCJub3Rlc1wiLCBub3RlW1wibm90ZXNcIl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTm90ZUJ1dHRvbnMoKV0pO1xuICByZXR1cm4gbm90ZUNvbnRhaW5lcjtcbn1cblxuLy9DcmVhdGVzIG9uZSB0ZXh0IHNlY3Rpb24gb2YgdGhlIERPTSBvZiB0aGUgbm90ZVxuZnVuY3Rpb24gY3JlYXRlTm90ZVNlY3Rpb24gKHNlY3Rpb25OYW1lLCB0ZXh0KSB7XG4gIHZhciBlbGVtZW50Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGl2XCIsIGAke3NlY3Rpb25OYW1lfS1jb250YWluZXJgLCBcIlwiKTtcbiAgdmFyIGNvbnRlbnRUaXRsZSA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcInNwYW5cIiwgYCR7c2VjdGlvbk5hbWV9LWhlYWRlcmAsIGAke3NlY3Rpb25OYW1lfWApO1xuICB2YXIgY29udGVudFZhbHVlID0gY3JlYXRlRWxlbWVudENsYXNzKFwic3BhblwiLCBgJHtzZWN0aW9uTmFtZX0tdmFsdWVgLCB0ZXh0KTtcbiAgYXBwZW5kQ2hpbGRyZW4oZWxlbWVudENvbnRhaW5lciwgW2NvbnRlbnRUaXRsZSwgY29udGVudFZhbHVlXSk7XG4gIHJldHVybiBlbGVtZW50Q29udGFpbmVyXG59XG5cbi8vQ3JlYXRlcyB0aGUgYnV0dG9ucyBmb3IgdGhlIERPTSBvZiB0aGUgbm90ZVxuZnVuY3Rpb24gY3JlYXRlTm90ZUJ1dHRvbnMgKCkge1xuICB2YXIgZWxlbWVudENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpdlwiLCBcImJ1dHRvbi1jb250YWluZXJcIiwgXCJcIik7XG4gIHZhciBlZGl0QnV0dG9uID0gY3JlYXRlRWxlbWVudENsYXNzKFwiYnV0dG9uXCIsIFwiZWRpdC1idXR0b25cIiwgXCJFZGl0XCIpO1xuICB2YXIgZGVsZXRlQnV0dG9uID0gY3JlYXRlRWxlbWVudENsYXNzKFwiYnV0dG9uXCIsIFwiZGVsZXRlLWJ1dHRvblwiLCBcIkRlbGV0ZVwiKTtcbiAgYXBwZW5kQ2hpbGRyZW4oZWxlbWVudENvbnRhaW5lciwgW2VkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbl0pO1xuICByZXR1cm4gZWxlbWVudENvbnRhaW5lclxufVxuXG4vL1JlbW92ZXMgYWxsIHRoZSBub3RlcyBjdXJyZW50bHkgZGlzcGxheWVkIGluIHRoZSBET01cbmZ1bmN0aW9uIHJlbW92ZURpc3BsYXllZE5vdGVzICgpIHtcbiAgdmFyIG5vdGVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3Rlcy1jb250YWluZXJcIik7XG4gIHdoaWxlIChub3Rlc0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICBub3Rlc0NvbnRhaW5lci5yZW1vdmVDaGlsZChub3Rlc0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9O1xufVxuXG4vL1JlbW92ZXMgdGhlIGRlbGV0ZWQgbm90ZSBvYmplY3QgZnJvbSB0aGUgYXJyYXlcbmNvbnN0IHJlbW92ZUVsZW1lbnRCeUlkID0gZnVuY3Rpb24gKGlkLCBub3Rlcykge1xuICBjb25zdCBjb25kaXRpb24gPSBub3RlID0+IG5vdGVbXCJpZFwiXSAhPT0gaWQ7XG4gIHJldHVybiBub3Rlcy5maWx0ZXIoY29uZGl0aW9uKTtcbn1cblxuLy9VcGRhdGVzIHRoZSB2YWx1ZXMgb2YgdGhlIGVkaXRlZCBub3RlIG9iamVjdCBhbmQgcmV0dXJucyB0aGUgdXBkYXRlZCBhcnJheVxuY29uc3QgZWRpdEVsZW1lbnRCeUlkID0gZnVuY3Rpb24gKGlkLCBub3Rlcykge1xuICB2YXIgbmV3Tm90ZXMgPSBbXTtcbiAgbm90ZXMuZm9yRWFjaChub3RlID0+IHtub3RlW1wiaWRcIl0gPT09IGlkID8gbmV3Tm90ZXMucHVzaChub3RlLnVwZGF0ZU5vdGUoKSkgOiBuZXdOb3Rlcy5wdXNoKG5vdGUpfSk7XG4gIHJldHVybiBuZXdOb3Rlcztcbn1cblxuXG5leHBvcnQge05vdGUsXG4gICAgICAgIGdlbmVyYXRlTm90ZSxcbiAgICAgICAgZGlzcGxheU5vdGVzLFxuICAgICAgICByZW1vdmVFbGVtZW50QnlJZCxcbiAgICAgICAgZWRpdEVsZW1lbnRCeUlkfTtcbiIsImltcG9ydCB7c2V0QXR0cmlidXRlcywgYXBwZW5kQ2hpbGRyZW4sIGNyZWF0ZUVsZW1lbnRDbGFzc30gZnJvbSAnLi91dGlscydcblxuY29uc3QgUHJvamVjdCA9IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgaWQpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHt0aXRsZSwgaWR9KTtcbiAgfTtcbn1cblxuY29uc3QgZ2VuZXJhdGVQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3RDb3VudCkge1xuICByZXR1cm4gbmV3IFByb2plY3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdFwiKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgIGBpZC0ke3Byb2plY3RDb3VudH1gKTtcbn1cblxuY29uc3QgZ2VuZXJhdGVQcm9qZWN0c0xpc3QgPSBmdW5jdGlvbiAocHJvamVjdHMpIHtcbiAgdmFyIHByb2plY3RMaXN0ID0gW107XG4gIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QudGl0bGUpKTtcbiAgcmV0dXJuIHByb2plY3RMaXN0O1xufVxuXG5jb25zdCBkaXNwbGF5UHJvamVjdHM9IGZ1bmN0aW9uIChwcm9qZWN0cykge1xuICByZW1vdmVEaXNwbGF5ZWRQcm9qZWN0cygpO1xuICB2YXIgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWNvbnRhaW5lclwiKTtcbiAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0U2VjdGlvbihwcm9qZWN0KSl9KTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RTZWN0aW9uKHByb2plY3QpIHtcbiAgdmFyIHByb2plY3RDb250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJkaXZcIiwgXCJwcm9qZWN0LWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgcHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIHByb2plY3RbXCJpZFwiXSk7XG4gIHZhciBwcm9qZWN0VGl0bGUgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJzcGFuXCIsIFwicHJvamVjdC10aXRsZVwiLCBwcm9qZWN0LnRpdGxlKTtcbiAgdmFyIGRlbGV0ZVByb2plY3RCdXR0b24gPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJidXR0b25cIiwgXCJkZWxldGUtcHJvamVjdC1idXR0b25cIiwgXCJEZWxldGUgcHJvamVjdFwiKVxuICBhcHBlbmRDaGlsZHJlbihwcm9qZWN0Q29udGFpbmVyLCBbcHJvamVjdFRpdGxlLCBkZWxldGVQcm9qZWN0QnV0dG9uXSk7XG4gIHJldHVybiBwcm9qZWN0Q29udGFpbmVyXG59XG5cbmZ1bmN0aW9uIHJlbW92ZURpc3BsYXllZFByb2plY3RzICgpIHtcbiAgdmFyIHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1jb250YWluZXJcIik7XG4gIHdoaWxlIChwcm9qZWN0c0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0c0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9O1xufVxuXG5leHBvcnQge1Byb2plY3QsIGdlbmVyYXRlUHJvamVjdCwgZ2VuZXJhdGVQcm9qZWN0c0xpc3QsIGRpc3BsYXlQcm9qZWN0c31cbiIsIi8vRnVuY3Rpb25zIHVzZWQgdG8gcXVpY2tseSBjcmVhdGUgZWxlbWVudHMgaW4gSlMgYW5kIGFkZCBhdHRyaWJ1dGVzXG5jb25zdCBzZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKGVsZW1lbnRzLCBhdHRyaWJ1dGVzKSB7XG4gIGVsZW1lbnRzID0gQXJyYXkuaXNBcnJheShlbGVtZW50cykgPyBlbGVtZW50cyA6IFtlbGVtZW50c107XG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goYXR0ciA9PiB7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJpYnV0ZXNbYXR0cl0pO1xuICAgIH0pXG59KTtcbn1cblxuY29uc3QgYXBwZW5kQ2hpbGRyZW4gPSBmdW5jdGlvbiAoZWxlbWVudCwgY2hpbGRyZW4pIHtcbiAgY2hpbGRyZW4gPSBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXTtcbiAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgfSk7XG59XG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnRDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnRUeXBlLCBjbGFzc05hbWUsIGlubmVyVGV4dCkge1xuICB2YXIgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgbmV3RWxlbWVudC5pbm5lckhUTUwgPSBpbm5lclRleHQ7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5jb25zdCByZW1vdmVBbGxDaGlsZHJlbiA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfTtcbn1cblxuZXhwb3J0IHtcbiAgc2V0QXR0cmlidXRlcyxcbiAgYXBwZW5kQ2hpbGRyZW4sXG4gIGNyZWF0ZUVsZW1lbnRDbGFzcyxcbiAgcmVtb3ZlQWxsQ2hpbGRyZW5cbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBnZW5lcmF0ZUJhc2VFbGVtZW50cyBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQge05vdGUsIGdlbmVyYXRlTm90ZSwgZGlzcGxheU5vdGVzLCByZW1vdmVFbGVtZW50QnlJZH0gZnJvbSAnLi9ub3RlJztcbmltcG9ydCB7aGFuZGxlQ3JlYXRlT3BlcmF0aW9uLCBoYW5kbGVFZGl0T3BlcmF0aW9uLCBoYW5kbGVDcmVhdGVQcm9qZWN0T3BlcmF0aW9ufSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyByZXNldE5ld0Zvcm1WYWx1ZXMgfSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IHsgUHJvamVjdCwgZ2VuZXJhdGVQcm9qZWN0LCBnZW5lcmF0ZVByb2plY3RzTGlzdCwgZGlzcGxheVByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0JztcblxubGV0IG5vdGVDb3VudCA9IDA7XG5sZXQgcHJvamVjdENvdW50ID0gMztcbmxldCBub3RlcyA9IFtdO1xubGV0IHByb2plY3RzID0gW25ldyBQcm9qZWN0KFwiR2VuZXJhbFwiLCBcImlkLTFcIiksIG5ldyBQcm9qZWN0KFwiU3R1ZHlcIiwgXCJpZC0yXCIpLCBuZXcgUHJvamVjdChcIkNob3Jlc1wiLCBcImlkLTNcIildO1xubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIilcbmdlbmVyYXRlQmFzZUVsZW1lbnRzKHByb2plY3RzKTtcbmRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0cyk7IC8vR2VuZXJhdGUgYWxsIHRoZSBiYXNlIGVsZW1lbnRzIGZvciB0aGUgRE9NXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgLy9Qcm9qZWN0cyBsb2dpY1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm5ldy1wcm9qZWN0XCIpKSB7IC8vIElmIHVzZXIgY2xpY2tzIG9uIG5ldyBub3RlXG4gICAgdmFyIG5ld1Byb2plY3RkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1Byb2plY3REaWFsb2dcIilcbiAgICBuZXdQcm9qZWN0ZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIHByb2plY3RDb3VudCArPTE7XG4gICAgaGFuZGxlQ3JlYXRlUHJvamVjdE9wZXJhdGlvbihwcm9qZWN0cywgcHJvamVjdENvdW50KVxuICB9XG5cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtcHJvamVjdC1idXR0b25cIikpIHsgLy8gVXNlciByZW1vdmVzIGEgcHJvamVjdFxuICAgIHZhciBpZCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuaWQ7XG4gICAgcHJvamVjdHMgPSByZW1vdmVFbGVtZW50QnlJZChpZCwgcHJvamVjdHMpO1xuICAgIGRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0cyk7XG4gIH1cblxuICAvL05vdGVzIGxvZ2ljXG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmV3LWl0ZW1cIikpIHsgLy8gSWYgdXNlciBjbGlja3Mgb24gbmV3IG5vdGVcbiAgICBub3RlQ291bnQgKz0xO1xuICAgIGhhbmRsZUNyZWF0ZU9wZXJhdGlvbihub3RlQ291bnQsIG5vdGVzLCBwcm9qZWN0cyk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtYnV0dG9uXCIpKSB7IC8vIFVzZXIgcmVtb3ZlcyBhIG5vdGVcbiAgICB2YXIgaWQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaWQ7XG4gICAgbm90ZXMgPSByZW1vdmVFbGVtZW50QnlJZChpZCwgbm90ZXMpO1xuICAgIGRpc3BsYXlOb3Rlcyhub3Rlcyk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJlZGl0LWJ1dHRvblwiKSkgeyAvLyBVc2VyIHVwZGF0ZXMgYSBub3RlXG4gICAgdmFyIGVkaXROb3RlRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0Tm90ZURpYWxvZ1wiKTtcbiAgICBpZCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5pZDtcbiAgICBlZGl0Tm90ZURpYWxvZy5zaG93TW9kYWwoKTtcbiAgICBoYW5kbGVFZGl0T3BlcmF0aW9uKGlkLCBub3RlcywgcHJvamVjdHMpO1xuICB9XG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9