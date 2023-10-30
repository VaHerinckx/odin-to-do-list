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

.projects-container {
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 10px;
  padding: 5px;
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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,4CAA+B;AACjC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT,YAAY;AACd;;AAEA;EACE,aAAa;EACb,SAAS;EACT,YAAY;EACZ,cAAc;EACd,uBAAuB;EACvB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,SAAS;EACT,YAAY;EACZ,uBAAuB;AACzB;;;AAGA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,uBAAuB;AACzB;;;AAGA;EACE,aAAa;EACb,uBAAuB;EACvB,0BAA0B;AAC5B;;AAEA;EACE,YAAY;AACd","sourcesContent":["@font-face {\n  font-family: \"wotfard\";\n  src: url(\"Wotfard-Regular.otf\");\n}\n\n:root {\n  font-family: \"wotfard\";\n}\n\n.projects-container {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  gap: 10px;\n  padding: 5px;\n}\n\n.project-container {\n  display: flex;\n  gap: 10px;\n  padding: 5px;\n  flex-shrink: 0;\n  border: 1px solid black;\n  justify-content: space-evenly;\n}\n\n.project-container > * {\n  display: flex;\n  gap: 10px;\n  padding: 5px;\n  border: 1px solid black;\n}\n\n\n.note-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 5px;\n  border: 1px solid black;\n  border-radius: 10%;\n}\n\n.note-container div {\n  display: flex;\n  gap: 10px;\n  border: 1px solid black;\n}\n\n.note-container div *{\n  width: 50%;\n  border: 1px solid black;\n}\n\n\n.note-container div *:first-child {\n  display: flex;\n  justify-content: center;\n  text-transform: capitalize;\n}\n\ndialog div option {\n  width: 400px;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   handleEditOperation: () => (/* binding */ handleEditOperation)
/* harmony export */ });
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note */ "./src/note.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/form.js");



const handleCreateOperation = function (noteCount, notes) {
  document.querySelector(".newNoteDialog").addEventListener("click", (event) => {
    if (event.target.classList.contains("close-new-note-dialog")) {
      event.preventDefault()
      var newNotedialog = document.querySelector(".newNoteDialog")
      var note = (0,_note__WEBPACK_IMPORTED_MODULE_0__.generateNote)(noteCount);
      var newNotes = notes;
      newNotedialog.close();
      newNotes.push(note);
      (0,_note__WEBPACK_IMPORTED_MODULE_0__.displayNotes)(newNotes);
      return newNotes;
    };
  });
};

const handleEditOperation = function (id, notes) {
  console.log("about to adapt the values in the form")
  ;(0,_form__WEBPACK_IMPORTED_MODULE_1__.adaptEditFormValues)(id, notes)
  console.log("values adapted")
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

const generateNewNoteForm = function() {
  var dialog = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("dialog", "newNoteDialog", "");
  var formContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("form", "form-container", "");
  var formObjective = "new"
  formContainer.setAttribute("action", "");
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(formContainer, [generateTitleContainer(formObjective),
                                 generateDateContainer(formObjective),
                                 generateDescContainer(formObjective),
                                 generatePriorityContainer(formObjective),
                                 generateStatusContainer(formObjective),
                                 generateProjectContainer(formObjective),
                                 generateCloseButton(formObjective)]);
  dialog.appendChild(formContainer);
  return dialog
}

const generateEditNoteForm = function() {
  var dialog = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("dialog", "editNoteDialog", "");
  var formContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("form", "form-container", "");
  var formObjective = "edit"
  formContainer.setAttribute("action", "");
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(formContainer, [generateTitleContainer(formObjective),
                                 generateDateContainer(formObjective),
                                 generateDescContainer(formObjective),
                                 generatePriorityContainer(formObjective),
                                 generateStatusContainer(formObjective),
                                 generateProjectContainer(formObjective),
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

function generateProjectContainer (formObjective) {
  let projectContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("div", "project-container", "");
  let projectLabel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("label", "project", "Project: ");
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(projectLabel, {"for" : "project"});
  let projectInput = generateOptionElements("project", ["General", "Study"], formObjective, "General")
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
function generateOptionElements (inputClass, optionValues, formObjective, defaultValue) {
  var inputElement = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("select", inputClass, "");
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(inputElement, {"id" : `${inputClass}-${formObjective}`,
                               "value": defaultValue});
  optionValues.forEach((option) => inputElement.appendChild(createOptionElement(option, defaultValue)));
  return inputElement;
}

function createOptionElement(value, defaultValue) {
  var option = document.createElement("option");
  option.setAttribute("value", value);
  option.innerText = value;
  if (value === defaultValue) {
    option.selected = true;
  }
  return option;
}


// Input the values of original note when edit is selected

const adaptEditFormValues = function (id, notes) {
  const condition = note => note["id"] === id;
  var note = notes.filter(condition)[0];
  console.log(note)
  document.querySelector("#title-edit").value = note["title"];
  document.querySelector("#date-edit").value = note["date"];
  document.querySelector("#status-edit").value = note["status"];
  document.querySelector("#priority-edit").value = note["prio"];
  document.querySelector("#description-edit").value = note["notes"];
  document.querySelector("#project-edit").value = note["project"];
}

// Reset the values when new note form is generated

const resetNewFormValues = function () {
  document.querySelector("#title-new").value = "";
  document.querySelector("#date-new").value = "";
  document.querySelector("#status-new").value = "Not started";
  document.querySelector("#priority-new").value = "Very important";
  document.querySelector("#description-new").value = "";
  document.querySelector("#project-new").value = "None";
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



const generateBaseElements = function () {
  var content = document.querySelector(".content")
  var newNoteDialog = (0,_form__WEBPACK_IMPORTED_MODULE_1__.generateNewNoteForm)();
  var editNoteDialog = (0,_form__WEBPACK_IMPORTED_MODULE_1__.generateEditNoteForm)();
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
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(noteContainer, [createNoteSection("project", note["project"]),
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
;(0,_interface__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_project__WEBPACK_IMPORTED_MODULE_5__.displayProjects)(projects); //Generate all the base elements for the DOM

document.addEventListener("click", (event) => {
  //Projects logic
  if (event.target.classList.contains("new-project")) { // If user clicks on new note
    var newProjectdialog = document.querySelector(".newProjectDialog")
    newProjectdialog.showModal();
  }
  if (event.target.classList.contains("close-new-project-dialog")) { // If user finishes update
    event.preventDefault()
    var newProjectdialog = document.querySelector(".newProjectDialog")
    projectCount +=1;
    var project = (0,_project__WEBPACK_IMPORTED_MODULE_5__.generateProject)(projectCount);
    newProjectdialog.close();
    projects.push(project);
    (0,_project__WEBPACK_IMPORTED_MODULE_5__.displayProjects)(projects);
  }
  if (event.target.classList.contains("delete-project-button")) { // User removes a project
    var id = event.target.parentNode.dataset.id;
    console.log("delete clicked")
    console.log(id)
    projects = (0,_note__WEBPACK_IMPORTED_MODULE_2__.removeElementById)(id, projects);
    console.log(projects)
    ;(0,_project__WEBPACK_IMPORTED_MODULE_5__.displayProjects)(projects);
  }



  //Notes logic
  if (event.target.classList.contains("new-item")) { // If user clicks on new note
    var newNotedialog = document.querySelector(".newNoteDialog")
    ;(0,_form__WEBPACK_IMPORTED_MODULE_4__.resetNewFormValues)();
    newNotedialog.showModal();
  }
  if (event.target.classList.contains("close-new-note-dialog")) { // If user finishes update
    event.preventDefault()
    var newNotedialog = document.querySelector(".newNoteDialog")
    noteCount +=1;
    var note = (0,_note__WEBPACK_IMPORTED_MODULE_2__.generateNote)(noteCount);
    newNotedialog.close();
    notes.push(note);
    (0,_note__WEBPACK_IMPORTED_MODULE_2__.displayNotes)(notes);
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
    (0,_dom__WEBPACK_IMPORTED_MODULE_3__.handleEditOperation)(id, notes);
  }
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFEQUFxRDtBQUNyRDtBQUNBLElBQUksMERBQWtCO0FBQ3RCO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtREFBWTtBQUMzQjtBQUNBO0FBQ0EsSUFBSSxtREFBWTtBQUNoQjtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBLFlBQVksd0RBQWlCO0FBQzdCLElBQUksbURBQVk7QUFDaEI7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBbUI7QUFDdkI7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL25vdGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJXb3RmYXJkLVJlZ3VsYXIub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwid290ZmFyZFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuOnJvb3Qge1xuICBmb250LWZhbWlseTogXCJ3b3RmYXJkXCI7XG59XG5cbi5wcm9qZWN0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNTAlO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciA+ICoge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cblxuLm5vdGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbi5ub3RlLWNvbnRhaW5lciBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ubm90ZS1jb250YWluZXIgZGl2ICp7XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG5cbi5ub3RlLWNvbnRhaW5lciBkaXYgKjpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuZGlhbG9nIGRpdiBvcHRpb24ge1xuICB3aWR0aDogNDAwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUErQjtBQUNqQzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULFlBQVk7RUFDWixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QjtBQUN6Qjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwid290ZmFyZFxcXCI7XFxuICBzcmM6IHVybChcXFwiV290ZmFyZC1SZWd1bGFyLm90ZlxcXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LWZhbWlseTogXFxcIndvdGZhcmRcXFwiO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciA+ICoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5cXG4ubm90ZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG59XFxuXFxuLm5vdGUtY29udGFpbmVyIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ub3RlLWNvbnRhaW5lciBkaXYgKntcXG4gIHdpZHRoOiA1MCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXFxuLm5vdGUtY29udGFpbmVyIGRpdiAqOmZpcnN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG5kaWFsb2cgZGl2IG9wdGlvbiB7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge05vdGUsIGdlbmVyYXRlTm90ZSwgZGlzcGxheU5vdGVzLCByZW1vdmVFbGVtZW50QnlJZCwgZWRpdEVsZW1lbnRCeUlkLCB9IGZyb20gJy4vbm90ZSc7XG5pbXBvcnQgeyBhZGFwdEVkaXRGb3JtVmFsdWVzIH0gZnJvbSAnLi9mb3JtJztcblxuY29uc3QgaGFuZGxlQ3JlYXRlT3BlcmF0aW9uID0gZnVuY3Rpb24gKG5vdGVDb3VudCwgbm90ZXMpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdOb3RlRGlhbG9nXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNsb3NlLW5ldy1ub3RlLWRpYWxvZ1wiKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgdmFyIG5ld05vdGVkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld05vdGVEaWFsb2dcIilcbiAgICAgIHZhciBub3RlID0gZ2VuZXJhdGVOb3RlKG5vdGVDb3VudCk7XG4gICAgICB2YXIgbmV3Tm90ZXMgPSBub3RlcztcbiAgICAgIG5ld05vdGVkaWFsb2cuY2xvc2UoKTtcbiAgICAgIG5ld05vdGVzLnB1c2gobm90ZSk7XG4gICAgICBkaXNwbGF5Tm90ZXMobmV3Tm90ZXMpO1xuICAgICAgcmV0dXJuIG5ld05vdGVzO1xuICAgIH07XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlRWRpdE9wZXJhdGlvbiA9IGZ1bmN0aW9uIChpZCwgbm90ZXMpIHtcbiAgY29uc29sZS5sb2coXCJhYm91dCB0byBhZGFwdCB0aGUgdmFsdWVzIGluIHRoZSBmb3JtXCIpXG4gIGFkYXB0RWRpdEZvcm1WYWx1ZXMoaWQsIG5vdGVzKVxuICBjb25zb2xlLmxvZyhcInZhbHVlcyBhZGFwdGVkXCIpXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG9zZS1lZGl0LW5vdGUtZGlhbG9nXCIpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHZhciBlZGl0Tm90ZURpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdE5vdGVEaWFsb2dcIik7XG4gICAgbm90ZXMgPSBlZGl0RWxlbWVudEJ5SWQoaWQsIG5vdGVzKVxuICAgIGVkaXROb3RlRGlhbG9nLmNsb3NlKCk7XG4gICAgZGlzcGxheU5vdGVzKG5vdGVzKTtcbiAgfTtcbn0pO1xufVxuXG5cbmV4cG9ydCB7aGFuZGxlQ3JlYXRlT3BlcmF0aW9uLCBoYW5kbGVFZGl0T3BlcmF0aW9ufVxuIiwiaW1wb3J0IHtzZXRBdHRyaWJ1dGVzLCBhcHBlbmRDaGlsZHJlbiwgY3JlYXRlRWxlbWVudENsYXNzfSBmcm9tICcuL3V0aWxzJ1xuXG5cbi8vIEFnZ3JlZ2F0ZSB0aGUgZm9ybSBlbGVtZW50cyB0byBjcmVhdGUgdGhlIHR3byBmb3JtcyAobmV3IG5vdGUgYW5kIGVkaXQgbm90ZSlcblxuY29uc3QgZ2VuZXJhdGVOZXdOb3RlRm9ybSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZGlhbG9nID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGlhbG9nXCIsIFwibmV3Tm90ZURpYWxvZ1wiLCBcIlwiKTtcbiAgdmFyIGZvcm1Db250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJmb3JtXCIsIFwiZm9ybS1jb250YWluZXJcIiwgXCJcIik7XG4gIHZhciBmb3JtT2JqZWN0aXZlID0gXCJuZXdcIlxuICBmb3JtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIlwiKTtcbiAgYXBwZW5kQ2hpbGRyZW4oZm9ybUNvbnRhaW5lciwgW2dlbmVyYXRlVGl0bGVDb250YWluZXIoZm9ybU9iamVjdGl2ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZURhdGVDb250YWluZXIoZm9ybU9iamVjdGl2ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZURlc2NDb250YWluZXIoZm9ybU9iamVjdGl2ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZVByaW9yaXR5Q29udGFpbmVyKGZvcm1PYmplY3RpdmUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVTdGF0dXNDb250YWluZXIoZm9ybU9iamVjdGl2ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZVByb2plY3RDb250YWluZXIoZm9ybU9iamVjdGl2ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUNsb3NlQnV0dG9uKGZvcm1PYmplY3RpdmUpXSk7XG4gIGRpYWxvZy5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgcmV0dXJuIGRpYWxvZ1xufVxuXG5jb25zdCBnZW5lcmF0ZUVkaXROb3RlRm9ybSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZGlhbG9nID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGlhbG9nXCIsIFwiZWRpdE5vdGVEaWFsb2dcIiwgXCJcIik7XG4gIHZhciBmb3JtQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZm9ybVwiLCBcImZvcm0tY29udGFpbmVyXCIsIFwiXCIpO1xuICB2YXIgZm9ybU9iamVjdGl2ZSA9IFwiZWRpdFwiXG4gIGZvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiXCIpO1xuICBhcHBlbmRDaGlsZHJlbihmb3JtQ29udGFpbmVyLCBbZ2VuZXJhdGVUaXRsZUNvbnRhaW5lcihmb3JtT2JqZWN0aXZlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGF0ZUNvbnRhaW5lcihmb3JtT2JqZWN0aXZlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGVzY0NvbnRhaW5lcihmb3JtT2JqZWN0aXZlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlUHJpb3JpdHlDb250YWluZXIoZm9ybU9iamVjdGl2ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZVN0YXR1c0NvbnRhaW5lcihmb3JtT2JqZWN0aXZlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlUHJvamVjdENvbnRhaW5lcihmb3JtT2JqZWN0aXZlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlQ2xvc2VCdXR0b24oZm9ybU9iamVjdGl2ZSldKTtcbiAgZGlhbG9nLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuICByZXR1cm4gZGlhbG9nXG59XG5cbmNvbnN0IGdlbmVyYXRlTmV3UHJvamVjdEZvcm0gPSBmdW5jdGlvbigpIHtcbiAgdmFyIGRpYWxvZyA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpYWxvZ1wiLCBcIm5ld1Byb2plY3REaWFsb2dcIiwgXCJcIik7XG4gIHZhciBmb3JtQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZm9ybVwiLCBcImZvcm0tY29udGFpbmVyXCIsIFwiXCIpO1xuICB2YXIgZm9ybU9iamVjdGl2ZSA9IFwibmV3LXByb2plY3RcIlxuICBmb3JtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIlwiKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZU5ld1Byb2plY3RDb250YWluZXIoKSk7XG4gIGRpYWxvZy5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgcmV0dXJuIGRpYWxvZ1xufVxuXG5cblxuLy8gR2VuZXJhdGUgaW5kaXZpZHVhbGx5IHRoZSBkaWZmZXJlbnQgZWxlbWVudHMgb2YgdGhlIGZvcm1zXG5cbmZ1bmN0aW9uIGdlbmVyYXRlVGl0bGVDb250YWluZXIgKGZvcm1PYmplY3RpdmUpIHtcbiAgbGV0IHRpdGxlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGl2XCIsIFwidGl0bGUtY29udGFpbmVyXCIsIFwiXCIpO1xuICBsZXQgdGl0bGVMYWJlbCA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImxhYmVsXCIsIFwidGl0bGVcIiwgXCJUaXRsZTogXCIpO1xuICBzZXRBdHRyaWJ1dGVzKHRpdGxlTGFiZWwsIHtcImZvclwiIDogXCJ0aXRsZVwifSk7XG4gIGxldCB0aXRsZUlucHV0ID0gY3JlYXRlRWxlbWVudENsYXNzKFwiaW5wdXRcIiwgXCJ0aXRsZVwiLCBcIlwiKTtcbiAgc2V0QXR0cmlidXRlcyh0aXRsZUlucHV0LCB7XCJpZFwiIDogYHRpdGxlLSR7Zm9ybU9iamVjdGl2ZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIiA6IFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCIgOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiIDogXCJEbyBsYXVuZHJ5XCJ9KTtcbiAgYXBwZW5kQ2hpbGRyZW4odGl0bGVDb250YWluZXIsIFt0aXRsZUxhYmVsLCB0aXRsZUlucHV0XSk7XG4gIHJldHVybiB0aXRsZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVEZXNjQ29udGFpbmVyIChmb3JtT2JqZWN0aXZlKSB7XG4gIGxldCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpdlwiLCBcImRlc2NyaXB0aW9uLWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgbGV0IGRlc2NyaXB0aW9uTGFiZWwgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJsYWJlbFwiLCBcImRlc2NyaXB0aW9uXCIsIFwiRGVzY3JpcHRpb246IFwiKTtcbiAgc2V0QXR0cmlidXRlcyhkZXNjcmlwdGlvbkxhYmVsLCB7XCJmb3JcIiA6IFwiZGVzY3JpcHRpb25cIn0pO1xuICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcInRleHRhcmVhXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJcIik7XG4gIHNldEF0dHJpYnV0ZXMoZGVzY3JpcHRpb25JbnB1dCwge1wiaWRcIiA6IGBkZXNjcmlwdGlvbi0ke2Zvcm1PYmplY3RpdmV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCIgOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sc1wiIDogXCIzMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvd3NcIiA6IFwiN1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsYWNlaG9sZGVyXCIgOiBcIldhc2ggYWxsIGJsYWNrIGNsb3RoZXNcIn0pO1xuICBhcHBlbmRDaGlsZHJlbihkZXNjcmlwdGlvbkNvbnRhaW5lciwgW2Rlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXRdKTtcbiAgcmV0dXJuIGRlc2NyaXB0aW9uQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZURhdGVDb250YWluZXIgKGZvcm1PYmplY3RpdmUpIHtcbiAgbGV0IGRhdGVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJkaXZcIiwgXCJkYXRlLWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgbGV0IGRhdGVMYWJlbCA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImxhYmVsXCIsIFwiZGF0ZVwiLCBcIkR1ZSBkYXRlOiBcIik7XG4gIHNldEF0dHJpYnV0ZXMoZGF0ZUxhYmVsLCB7XCJmb3JcIiA6IFwiZGF0ZVwifSk7XG4gIGxldCBkYXRlSW5wdXQgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJpbnB1dFwiLCBcImRhdGVcIiwgXCJcIik7XG4gIHNldEF0dHJpYnV0ZXMoZGF0ZUlucHV0LCB7XCJpZFwiIDogYGRhdGUtJHtmb3JtT2JqZWN0aXZlfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiIDogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiIDogXCJkYXRlXCJ9KTtcbiAgYXBwZW5kQ2hpbGRyZW4oZGF0ZUNvbnRhaW5lciwgW2RhdGVMYWJlbCwgZGF0ZUlucHV0XSk7XG4gIHJldHVybiBkYXRlQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVByaW9yaXR5Q29udGFpbmVyIChmb3JtT2JqZWN0aXZlKSB7XG4gIGxldCBwcmlvcml0eUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpdlwiLCBcInByaW9yaXR5LWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgbGV0IHByaW9yaXR5TGFiZWwgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJsYWJlbFwiLCBcInByaW9yaXR5XCIsIFwiUHJpb3JpdHk6IFwiKTtcbiAgc2V0QXR0cmlidXRlcyhwcmlvcml0eUxhYmVsLCB7XCJmb3JcIiA6IFwicHJpb3JpdHlcIn0pO1xuICBsZXQgcHJpb3JpdHlJbnB1dCA9IGdlbmVyYXRlT3B0aW9uRWxlbWVudHMoXCJwcmlvcml0eVwiLCBbXCJWZXJ5IGltcG9ydGFudFwiLCBcIkltcG9ydGFudFwiLCBcIk5vcm1hbFwiLCBcIk5vdCBpbXBvcnRhbnRcIl0sIGZvcm1PYmplY3RpdmUsIFwiTm9ybWFsXCIpXG4gIGFwcGVuZENoaWxkcmVuKHByaW9yaXR5Q29udGFpbmVyLCBbcHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlJbnB1dF0pO1xuICByZXR1cm4gcHJpb3JpdHlDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU3RhdHVzQ29udGFpbmVyIChmb3JtT2JqZWN0aXZlKSB7XG4gIGxldCBzdGF0dXNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJkaXZcIiwgXCJzdGF0dXMtY29udGFpbmVyXCIsIFwiXCIpO1xuICBsZXQgc3RhdHVzTGFiZWwgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJsYWJlbFwiLCBcInN0YXR1c1wiLCBcIlN0YXR1czogXCIpO1xuICBzZXRBdHRyaWJ1dGVzKHN0YXR1c0xhYmVsLCB7XCJmb3JcIiA6IFwic3RhdHVzXCJ9KTtcbiAgbGV0IHN0YXR1c0lucHV0ID0gZ2VuZXJhdGVPcHRpb25FbGVtZW50cyhcInN0YXR1c1wiLCBbXCJOb3Qgc3RhcnRlZFwiLCBcIkRvaW5nXCIsIFwiRG9uZVwiXSwgZm9ybU9iamVjdGl2ZSwgXCJEb2luZ1wiKVxuICBhcHBlbmRDaGlsZHJlbihzdGF0dXNDb250YWluZXIsIFtzdGF0dXNMYWJlbCwgc3RhdHVzSW5wdXRdKTtcbiAgcmV0dXJuIHN0YXR1c0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0Q29udGFpbmVyIChmb3JtT2JqZWN0aXZlKSB7XG4gIGxldCBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGl2XCIsIFwicHJvamVjdC1jb250YWluZXJcIiwgXCJcIik7XG4gIGxldCBwcm9qZWN0TGFiZWwgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJsYWJlbFwiLCBcInByb2plY3RcIiwgXCJQcm9qZWN0OiBcIik7XG4gIHNldEF0dHJpYnV0ZXMocHJvamVjdExhYmVsLCB7XCJmb3JcIiA6IFwicHJvamVjdFwifSk7XG4gIGxldCBwcm9qZWN0SW5wdXQgPSBnZW5lcmF0ZU9wdGlvbkVsZW1lbnRzKFwicHJvamVjdFwiLCBbXCJHZW5lcmFsXCIsIFwiU3R1ZHlcIl0sIGZvcm1PYmplY3RpdmUsIFwiR2VuZXJhbFwiKVxuICBhcHBlbmRDaGlsZHJlbihwcm9qZWN0Q29udGFpbmVyLCBbcHJvamVjdExhYmVsLCBwcm9qZWN0SW5wdXRdKTtcbiAgcmV0dXJuIHByb2plY3RDb250YWluZXI7XG59XG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVDbG9zZUJ1dHRvbiAoZm9ybU9iamVjdGl2ZSkge1xuICBsZXQgYnV0dG9uID0gY3JlYXRlRWxlbWVudENsYXNzKFwiYnV0dG9uXCIsIGBjbG9zZS0ke2Zvcm1PYmplY3RpdmV9LW5vdGUtZGlhbG9nYCwgYCR7Zm9ybU9iamVjdGl2ZX0gbm90ZWApXG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgY2xvc2Uke2Zvcm1PYmplY3RpdmV9Tm90ZURpYWxvZ2ApXG4gIHJldHVybiBidXR0b25cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVOZXdQcm9qZWN0Q29udGFpbmVyICgpIHtcbiAgbGV0IG5ld1Byb2plY3RDb250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJkaXZcIiwgXCJuZXctcHJvamVjdC1jb250YWluZXJcIiwgXCJcIik7XG4gIGxldCBuZXdQcm9qZWN0TGFiZWwgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJsYWJlbFwiLCBcIm5ldy1wcm9qZWN0XCIsIFwiTmV3IFByb2plY3Q6IFwiKTtcbiAgc2V0QXR0cmlidXRlcyhuZXdQcm9qZWN0TGFiZWwsIHtcImZvclwiIDogXCJuZXctcHJvamVjdFwifSk7XG4gIGxldCBuZXdQcm9qZWN0SW5wdXQgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJpbnB1dFwiLCBcIm5ldy1wcm9qZWN0XCIsIFwiXCIpO1xuICBzZXRBdHRyaWJ1dGVzKG5ld1Byb2plY3RJbnB1dCwge1wiaWRcIiA6IFwibmV3LXByb2plY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCIgOiBcIm5ldy1wcm9qZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiIDogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGxhY2Vob2xkZXJcIiA6IFwiU3BvcnRcIn0pO1xuICB2YXIgYnV0dG9uID0gY3JlYXRlRWxlbWVudENsYXNzKFwiYnV0dG9uXCIsIGBjbG9zZS1uZXctcHJvamVjdC1kaWFsb2dgLCBgYWRkIG5ldyBwcm9qZWN0YClcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGBjbG9zZU5ld1Byb2plY3REaWFsb2dgKVxuICBhcHBlbmRDaGlsZHJlbihuZXdQcm9qZWN0Q29udGFpbmVyLCBbbmV3UHJvamVjdExhYmVsLCBuZXdQcm9qZWN0SW5wdXQsIGJ1dHRvbl0pO1xuICByZXR1cm4gbmV3UHJvamVjdENvbnRhaW5lcjtcbn1cblxuXG4vLyBGdW5jdGlvbnMgdG8gYXZvaWQgcmVkdW5kYW50IGNvZGVcbmZ1bmN0aW9uIGdlbmVyYXRlT3B0aW9uRWxlbWVudHMgKGlucHV0Q2xhc3MsIG9wdGlvblZhbHVlcywgZm9ybU9iamVjdGl2ZSwgZGVmYXVsdFZhbHVlKSB7XG4gIHZhciBpbnB1dEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJzZWxlY3RcIiwgaW5wdXRDbGFzcywgXCJcIik7XG4gIHNldEF0dHJpYnV0ZXMoaW5wdXRFbGVtZW50LCB7XCJpZFwiIDogYCR7aW5wdXRDbGFzc30tJHtmb3JtT2JqZWN0aXZlfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBkZWZhdWx0VmFsdWV9KTtcbiAgb3B0aW9uVmFsdWVzLmZvckVhY2goKG9wdGlvbikgPT4gaW5wdXRFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbkVsZW1lbnQob3B0aW9uLCBkZWZhdWx0VmFsdWUpKSk7XG4gIHJldHVybiBpbnB1dEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbkVsZW1lbnQodmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHZhbHVlKTtcbiAgb3B0aW9uLmlubmVyVGV4dCA9IHZhbHVlO1xuICBpZiAodmFsdWUgPT09IGRlZmF1bHRWYWx1ZSkge1xuICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIG9wdGlvbjtcbn1cblxuXG4vLyBJbnB1dCB0aGUgdmFsdWVzIG9mIG9yaWdpbmFsIG5vdGUgd2hlbiBlZGl0IGlzIHNlbGVjdGVkXG5cbmNvbnN0IGFkYXB0RWRpdEZvcm1WYWx1ZXMgPSBmdW5jdGlvbiAoaWQsIG5vdGVzKSB7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IG5vdGUgPT4gbm90ZVtcImlkXCJdID09PSBpZDtcbiAgdmFyIG5vdGUgPSBub3Rlcy5maWx0ZXIoY29uZGl0aW9uKVswXTtcbiAgY29uc29sZS5sb2cobm90ZSlcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZS1lZGl0XCIpLnZhbHVlID0gbm90ZVtcInRpdGxlXCJdO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGUtZWRpdFwiKS52YWx1ZSA9IG5vdGVbXCJkYXRlXCJdO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXR1cy1lZGl0XCIpLnZhbHVlID0gbm90ZVtcInN0YXR1c1wiXTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eS1lZGl0XCIpLnZhbHVlID0gbm90ZVtcInByaW9cIl07XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb24tZWRpdFwiKS52YWx1ZSA9IG5vdGVbXCJub3Rlc1wiXTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWVkaXRcIikudmFsdWUgPSBub3RlW1wicHJvamVjdFwiXTtcbn1cblxuLy8gUmVzZXQgdGhlIHZhbHVlcyB3aGVuIG5ldyBub3RlIGZvcm0gaXMgZ2VuZXJhdGVkXG5cbmNvbnN0IHJlc2V0TmV3Rm9ybVZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZS1uZXdcIikudmFsdWUgPSBcIlwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGUtbmV3XCIpLnZhbHVlID0gXCJcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGF0dXMtbmV3XCIpLnZhbHVlID0gXCJOb3Qgc3RhcnRlZFwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5LW5ld1wiKS52YWx1ZSA9IFwiVmVyeSBpbXBvcnRhbnRcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvbi1uZXdcIikudmFsdWUgPSBcIlwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmV3XCIpLnZhbHVlID0gXCJOb25lXCI7XG59XG5cbmV4cG9ydCB7Z2VuZXJhdGVOZXdOb3RlRm9ybSwgZ2VuZXJhdGVFZGl0Tm90ZUZvcm0sIGdlbmVyYXRlTmV3UHJvamVjdEZvcm0sIGFkYXB0RWRpdEZvcm1WYWx1ZXMsIHJlc2V0TmV3Rm9ybVZhbHVlc307XG4iLCJpbXBvcnQge3NldEF0dHJpYnV0ZXMsIGFwcGVuZENoaWxkcmVuLCBjcmVhdGVFbGVtZW50Q2xhc3N9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQge2dlbmVyYXRlTmV3Tm90ZUZvcm0sIGdlbmVyYXRlRWRpdE5vdGVGb3JtLCBnZW5lcmF0ZU5ld1Byb2plY3RGb3JtfSBmcm9tICcuL2Zvcm0nO1xuXG5jb25zdCBnZW5lcmF0ZUJhc2VFbGVtZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIilcbiAgdmFyIG5ld05vdGVEaWFsb2cgPSBnZW5lcmF0ZU5ld05vdGVGb3JtKCk7XG4gIHZhciBlZGl0Tm90ZURpYWxvZyA9IGdlbmVyYXRlRWRpdE5vdGVGb3JtKCk7XG4gIHZhciBuZXdQcm9qZWN0RGlhbG9nID0gZ2VuZXJhdGVOZXdQcm9qZWN0Rm9ybSgpO1xuICBnZW5lcmF0ZUJhc2VJbnRlcmZhY2UoKTtcbiAgYXBwZW5kQ2hpbGRyZW4oY29udGVudCwgW25ld05vdGVEaWFsb2csIGVkaXROb3RlRGlhbG9nLCBuZXdQcm9qZWN0RGlhbG9nXSk7XG4gIC8vIGduUHJvamVjdHNFbGVtZW50cyhwcm9qZWN0cyk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQmFzZUludGVyZmFjZSAoKSB7XG4gIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gIHZhciBpbnRlcmZhY2VDb250YWluZXIgPSBnbkludGVyZmFjZUNvbnRhaW5lcigpO1xuICB2YXIgcGFnZVRpdGxlID0gZ25QYWdlVGl0bGUoKTtcbiAgdmFyIG5ld0l0ZW1CdXR0b24gPSBnbk5ld0l0ZW1CdXR0b24oKTtcbiAgdmFyIG5ld1Byb2plY3RCdXR0b24gPSBnbk5ld1Byb2plY3RCdXR0b24oKTtcbiAgdmFyIHByb2plY3RzQ29udGFpbmVyID0gZ25Qcm9qZWN0c0NvbnRhaW5lcigpO1xuICB2YXIgbm90ZXNDb250YWluZXIgPSBnbk5vdGVzQ29udGFpbmVyKCk7XG4gIGFwcGVuZENoaWxkcmVuKGludGVyZmFjZUNvbnRhaW5lciwgW3BhZ2VUaXRsZSwgbmV3SXRlbUJ1dHRvbiwgbmV3UHJvamVjdEJ1dHRvbl0pO1xuICBhcHBlbmRDaGlsZHJlbihjb250YWluZXIsIFtpbnRlcmZhY2VDb250YWluZXIsIHByb2plY3RzQ29udGFpbmVyLCBub3Rlc0NvbnRhaW5lcl0pO1xufVxuXG5mdW5jdGlvbiBnbkludGVyZmFjZUNvbnRhaW5lcigpIHtcbiAgdmFyIGludGVyZmFjZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpdlwiLCBcImludGVyZmFjZS1jb250YWluZXJcIiwgXCJcIik7XG4gIHJldHVybiBpbnRlcmZhY2VDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGduUGFnZVRpdGxlKCkge1xuICB2YXIgcGFnZVRpdGxlID0gY3JlYXRlRWxlbWVudENsYXNzKFwiaDFcIiwgXCJwYWdlLXRpdGxlXCIsIFwiT2RpbiB0by1kby1saXN0IHRvb2xcIik7XG4gIHJldHVybiBwYWdlVGl0bGU7XG59XG5cbmZ1bmN0aW9uIGduTmV3SXRlbUJ1dHRvbigpIHtcbiAgdmFyIG5ld0l0ZW1CdXR0b24gPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJidXR0b25cIiwgXCJuZXctaXRlbVwiLCBcIk5ldyBJdGVtXCIpO1xuICByZXR1cm4gbmV3SXRlbUJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gZ25OZXdQcm9qZWN0QnV0dG9uKCkge1xuICB2YXIgbmV3SXRlbUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImJ1dHRvblwiLCBcIm5ldy1wcm9qZWN0XCIsIFwiTmV3IFByb2plY3RcIik7XG4gIHJldHVybiBuZXdJdGVtQnV0dG9uO1xufVxuXG5mdW5jdGlvbiBnblByb2plY3RzQ29udGFpbmVyKCkge1xuICB2YXIgcHJvamVjdHNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJkaXZcIiwgXCJwcm9qZWN0cy1jb250YWluZXJcIiwgXCJcIik7XG4gIHJldHVybiBwcm9qZWN0c0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ25Ob3Rlc0NvbnRhaW5lcigpIHtcbiAgdmFyIG5vdGVzQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGl2XCIsIFwibm90ZXMtY29udGFpbmVyXCIsIFwiXCIpO1xuICByZXR1cm4gbm90ZXNDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGduUHJvamVjdHNFbGVtZW50cyhwcm9qZWN0cykge1xuICB2YXIgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWNvbnRhaW5lclwiKTtcbiAgd2hpbGUgKHByb2plY3RzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0c0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfTtcbiAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGduUHJvamVjdEVsZW1lbnQocHJvamVjdCkpKTtcbn1cblxuZnVuY3Rpb24gZ25Qcm9qZWN0RWxlbWVudChwcm9qZWN0KSB7XG4gIHZhciBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGl2XCIsIFwicHJvamVjdC1jb250YWluZXJcIiwgXCJcIik7XG4gIHZhciBwcm9qZWN0VGl0bGUgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJzcGFuXCIsIFwicHJvamVjdC10aXRsZVwiLCBwcm9qZWN0KTtcbiAgdmFyIGRlbGV0ZVByb2plY3RCdXR0b24gPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJidXR0b25cIiwgXCJkZWxldGUtcHJvamVjdC1idXR0b25cIiwgXCJEZWxldGUgcHJvamVjdFwiKVxuICBhcHBlbmRDaGlsZHJlbihwcm9qZWN0Q29udGFpbmVyLCBbcHJvamVjdFRpdGxlLCBkZWxldGVQcm9qZWN0QnV0dG9uXSk7XG4gIHJldHVybiBwcm9qZWN0Q29udGFpbmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQmFzZUVsZW1lbnRzO1xuIiwiaW1wb3J0IHtzZXRBdHRyaWJ1dGVzLCBhcHBlbmRDaGlsZHJlbiwgY3JlYXRlRWxlbWVudENsYXNzfSBmcm9tICcuL3V0aWxzJ1xuXG5cbi8vQ2xhc3MgZ2VuZXJhdG9yXG5jb25zdCBOb3RlID0gY2xhc3MgTm90ZSB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkYXRlLCBzdGF0dXMsIHByaW8sIHByb2plY3QsIG5vdGVzLCBpZCkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywge3RpdGxlLCBkYXRlLCBzdGF0dXMsIHByaW8sIHByb2plY3QsIG5vdGVzLCBpZH0pO1xuICB9O1xuICB1cGRhdGVOb3RlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpc1tcInRpdGxlXCJdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZS1lZGl0XCIpLnZhbHVlO1xuICAgIHRoaXNbXCJkYXRlXCJdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlLWVkaXRcIikudmFsdWU7XG4gICAgdGhpc1tcInN0YXR1c1wiXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhdHVzLWVkaXRcIikudmFsdWU7XG4gICAgdGhpc1tcInByaW9cIl0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5LWVkaXRcIikudmFsdWU7XG4gICAgdGhpc1tcIm5vdGVzXCJdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvbi1lZGl0XCIpLnZhbHVlO1xuICAgIHRoaXNbXCJwcm9qZWN0XCJdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWVkaXRcIikudmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG59XG5cbi8vQ3JlYXRlIGEgbmV3IG5vdGUgb2JqZWN0IGJhc2VkIG9uIHZhbHVlcyBnaXZlbiBpbiB0aGUgbmV3IG5vdGUgZm9ybVxuY29uc3QgZ2VuZXJhdGVOb3RlID0gZnVuY3Rpb24gKG5vdGVDb3VudCkge1xuICByZXR1cm4gbmV3IE5vdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZS1uZXdcIikudmFsdWUsXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGUtbmV3XCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGF0dXMtbmV3XCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eS1uZXdcIikudmFsdWUsXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmV3XCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvbi1uZXdcIikudmFsdWUsXG4gICAgICAgICAgICAgICAgICBgaWQtJHtub3RlQ291bnR9YCk7XG59XG5cbi8vRGlzcGxheXMgYWxsIHRoZSBub3RlcyBvYmplY3RzIGluIHRoZSBET01cbmNvbnN0IGRpc3BsYXlOb3RlcyA9IGZ1bmN0aW9uIChub3Rlcykge1xuICByZW1vdmVEaXNwbGF5ZWROb3RlcygpO1xuICB2YXIgbm90ZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVzLWNvbnRhaW5lclwiKTtcbiAgbm90ZXMuZm9yRWFjaChub3RlID0+IHtub3Rlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5Tm90ZShub3RlKSl9KTtcbn07XG5cbi8vSW5kaXZpZHVhbGx5IGNyZWF0ZSB0aGUgY29udGFpbmVyIHdpdGggYWxsIHRoZSBET00gZWxlbWVudHMgZm9yIGEgbm90ZSBvYmplY3RcbmZ1bmN0aW9uIGRpc3BsYXlOb3RlIChub3RlKSB7XG4gIGxldCBub3RlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGl2XCIsIFwibm90ZS1jb250YWluZXJcIiwgXCJcIilcbiAgbm90ZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIG5vdGVbXCJpZFwiXSk7XG4gIGFwcGVuZENoaWxkcmVuKG5vdGVDb250YWluZXIsIFtjcmVhdGVOb3RlU2VjdGlvbihcInByb2plY3RcIiwgbm90ZVtcInByb2plY3RcIl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTm90ZVNlY3Rpb24oXCJ0aXRsZVwiLCBub3RlW1widGl0bGVcIl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTm90ZVNlY3Rpb24oXCJkYXRlXCIsIG5vdGVbXCJkYXRlXCJdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5vdGVTZWN0aW9uKFwic3RhdHVzXCIsIG5vdGVbXCJzdGF0dXNcIl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTm90ZVNlY3Rpb24oXCJwcmlvXCIsIG5vdGVbXCJwcmlvXCJdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5vdGVTZWN0aW9uKFwibm90ZXNcIiwgbm90ZVtcIm5vdGVzXCJdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5vdGVCdXR0b25zKCldKTtcbiAgcmV0dXJuIG5vdGVDb250YWluZXI7XG59XG5cbi8vQ3JlYXRlcyBvbmUgdGV4dCBzZWN0aW9uIG9mIHRoZSBET00gb2YgdGhlIG5vdGVcbmZ1bmN0aW9uIGNyZWF0ZU5vdGVTZWN0aW9uIChzZWN0aW9uTmFtZSwgdGV4dCkge1xuICB2YXIgZWxlbWVudENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpdlwiLCBgJHtzZWN0aW9uTmFtZX0tY29udGFpbmVyYCwgXCJcIik7XG4gIHZhciBjb250ZW50VGl0bGUgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJzcGFuXCIsIGAke3NlY3Rpb25OYW1lfS1oZWFkZXJgLCBgJHtzZWN0aW9uTmFtZX1gKTtcbiAgdmFyIGNvbnRlbnRWYWx1ZSA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcInNwYW5cIiwgYCR7c2VjdGlvbk5hbWV9LXZhbHVlYCwgdGV4dCk7XG4gIGFwcGVuZENoaWxkcmVuKGVsZW1lbnRDb250YWluZXIsIFtjb250ZW50VGl0bGUsIGNvbnRlbnRWYWx1ZV0pO1xuICByZXR1cm4gZWxlbWVudENvbnRhaW5lclxufVxuXG4vL0NyZWF0ZXMgdGhlIGJ1dHRvbnMgZm9yIHRoZSBET00gb2YgdGhlIG5vdGVcbmZ1bmN0aW9uIGNyZWF0ZU5vdGVCdXR0b25zICgpIHtcbiAgdmFyIGVsZW1lbnRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJkaXZcIiwgXCJidXR0b24tY29udGFpbmVyXCIsIFwiXCIpO1xuICB2YXIgZWRpdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImJ1dHRvblwiLCBcImVkaXQtYnV0dG9uXCIsIFwiRWRpdFwiKTtcbiAgdmFyIGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImJ1dHRvblwiLCBcImRlbGV0ZS1idXR0b25cIiwgXCJEZWxldGVcIik7XG4gIGFwcGVuZENoaWxkcmVuKGVsZW1lbnRDb250YWluZXIsIFtlZGl0QnV0dG9uLCBkZWxldGVCdXR0b25dKTtcbiAgcmV0dXJuIGVsZW1lbnRDb250YWluZXJcbn1cblxuLy9SZW1vdmVzIGFsbCB0aGUgbm90ZXMgY3VycmVudGx5IGRpc3BsYXllZCBpbiB0aGUgRE9NXG5mdW5jdGlvbiByZW1vdmVEaXNwbGF5ZWROb3RlcyAoKSB7XG4gIHZhciBub3Rlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZXMtY29udGFpbmVyXCIpO1xuICB3aGlsZSAobm90ZXNDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgbm90ZXNDb250YWluZXIucmVtb3ZlQ2hpbGQobm90ZXNDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfTtcbn1cblxuLy9SZW1vdmVzIHRoZSBkZWxldGVkIG5vdGUgb2JqZWN0IGZyb20gdGhlIGFycmF5XG5jb25zdCByZW1vdmVFbGVtZW50QnlJZCA9IGZ1bmN0aW9uIChpZCwgbm90ZXMpIHtcbiAgY29uc3QgY29uZGl0aW9uID0gbm90ZSA9PiBub3RlW1wiaWRcIl0gIT09IGlkO1xuICByZXR1cm4gbm90ZXMuZmlsdGVyKGNvbmRpdGlvbik7XG59XG5cbi8vVXBkYXRlcyB0aGUgdmFsdWVzIG9mIHRoZSBlZGl0ZWQgbm90ZSBvYmplY3QgYW5kIHJldHVybnMgdGhlIHVwZGF0ZWQgYXJyYXlcbmNvbnN0IGVkaXRFbGVtZW50QnlJZCA9IGZ1bmN0aW9uIChpZCwgbm90ZXMpIHtcbiAgdmFyIG5ld05vdGVzID0gW107XG4gIG5vdGVzLmZvckVhY2gobm90ZSA9PiB7bm90ZVtcImlkXCJdID09PSBpZCA/IG5ld05vdGVzLnB1c2gobm90ZS51cGRhdGVOb3RlKCkpIDogbmV3Tm90ZXMucHVzaChub3RlKX0pO1xuICByZXR1cm4gbmV3Tm90ZXM7XG59XG5cblxuZXhwb3J0IHtOb3RlLFxuICAgICAgICBnZW5lcmF0ZU5vdGUsXG4gICAgICAgIGRpc3BsYXlOb3RlcyxcbiAgICAgICAgcmVtb3ZlRWxlbWVudEJ5SWQsXG4gICAgICAgIGVkaXRFbGVtZW50QnlJZH07XG4iLCJpbXBvcnQge3NldEF0dHJpYnV0ZXMsIGFwcGVuZENoaWxkcmVuLCBjcmVhdGVFbGVtZW50Q2xhc3N9IGZyb20gJy4vdXRpbHMnXG5cbmNvbnN0IFByb2plY3QgPSBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGlkKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7dGl0bGUsIGlkfSk7XG4gIH07XG59XG5cbmNvbnN0IGdlbmVyYXRlUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0Q291bnQpIHtcbiAgcmV0dXJuIG5ldyBQcm9qZWN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3RcIikudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICBgaWQtJHtwcm9qZWN0Q291bnR9YCk7XG59XG5cbmNvbnN0IGdlbmVyYXRlUHJvamVjdHNMaXN0ID0gZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gIHZhciBwcm9qZWN0TGlzdCA9IFtdO1xuICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdExpc3QucHVzaChwcm9qZWN0LnRpdGxlKSk7XG4gIHJldHVybiBwcm9qZWN0TGlzdDtcbn1cblxuY29uc3QgZGlzcGxheVByb2plY3RzPSBmdW5jdGlvbiAocHJvamVjdHMpIHtcbiAgcmVtb3ZlRGlzcGxheWVkUHJvamVjdHMoKTtcbiAgdmFyIHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1jb250YWluZXJcIik7XG4gIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7cHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdFNlY3Rpb24ocHJvamVjdCkpfSk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0U2VjdGlvbihwcm9qZWN0KSB7XG4gIHZhciBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGl2XCIsIFwicHJvamVjdC1jb250YWluZXJcIiwgXCJcIik7XG4gIHByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBwcm9qZWN0W1wiaWRcIl0pO1xuICB2YXIgcHJvamVjdFRpdGxlID0gY3JlYXRlRWxlbWVudENsYXNzKFwic3BhblwiLCBcInByb2plY3QtdGl0bGVcIiwgcHJvamVjdC50aXRsZSk7XG4gIHZhciBkZWxldGVQcm9qZWN0QnV0dG9uID0gY3JlYXRlRWxlbWVudENsYXNzKFwiYnV0dG9uXCIsIFwiZGVsZXRlLXByb2plY3QtYnV0dG9uXCIsIFwiRGVsZXRlIHByb2plY3RcIilcbiAgYXBwZW5kQ2hpbGRyZW4ocHJvamVjdENvbnRhaW5lciwgW3Byb2plY3RUaXRsZSwgZGVsZXRlUHJvamVjdEJ1dHRvbl0pO1xuICByZXR1cm4gcHJvamVjdENvbnRhaW5lclxufVxuXG5mdW5jdGlvbiByZW1vdmVEaXNwbGF5ZWRQcm9qZWN0cyAoKSB7XG4gIHZhciBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udGFpbmVyXCIpO1xuICB3aGlsZSAocHJvamVjdHNDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgcHJvamVjdHNDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdHNDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfTtcbn1cblxuZXhwb3J0IHtQcm9qZWN0LCBnZW5lcmF0ZVByb2plY3QsIGdlbmVyYXRlUHJvamVjdHNMaXN0LCBkaXNwbGF5UHJvamVjdHN9XG4iLCIvL0Z1bmN0aW9ucyB1c2VkIHRvIHF1aWNrbHkgY3JlYXRlIGVsZW1lbnRzIGluIEpTIGFuZCBhZGQgYXR0cmlidXRlc1xuY29uc3Qgc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uIChlbGVtZW50cywgYXR0cmlidXRlcykge1xuICBlbGVtZW50cyA9IEFycmF5LmlzQXJyYXkoZWxlbWVudHMpID8gZWxlbWVudHMgOiBbZWxlbWVudHNdO1xuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHIgPT4ge1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyaWJ1dGVzW2F0dHJdKTtcbiAgICB9KVxufSk7XG59XG5cbmNvbnN0IGFwcGVuZENoaWxkcmVuID0gZnVuY3Rpb24gKGVsZW1lbnQsIGNoaWxkcmVuKSB7XG4gIGNoaWxkcmVuID0gQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbiA6IFtjaGlsZHJlbl07XG4gIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH0pO1xufVxuXG5jb25zdCBjcmVhdGVFbGVtZW50Q2xhc3MgPSBmdW5jdGlvbihlbGVtZW50VHlwZSwgY2xhc3NOYW1lLCBpbm5lclRleHQpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcbiAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIG5ld0VsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJUZXh0O1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZXhwb3J0IHtcbiAgc2V0QXR0cmlidXRlcyxcbiAgYXBwZW5kQ2hpbGRyZW4sXG4gIGNyZWF0ZUVsZW1lbnRDbGFzc1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IGdlbmVyYXRlQmFzZUVsZW1lbnRzIGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7Tm90ZSwgZ2VuZXJhdGVOb3RlLCBkaXNwbGF5Tm90ZXMsIHJlbW92ZUVsZW1lbnRCeUlkfSBmcm9tICcuL25vdGUnO1xuaW1wb3J0IHtoYW5kbGVDcmVhdGVPcGVyYXRpb24sIGhhbmRsZUVkaXRPcGVyYXRpb259IGZyb20gJy4vZG9tJztcbmltcG9ydCB7IHJlc2V0TmV3Rm9ybVZhbHVlcyB9IGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgeyBQcm9qZWN0LCBnZW5lcmF0ZVByb2plY3QsIGdlbmVyYXRlUHJvamVjdHNMaXN0LCBkaXNwbGF5UHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3QnO1xuXG5sZXQgbm90ZUNvdW50ID0gMDtcbmxldCBwcm9qZWN0Q291bnQgPSAzO1xubGV0IG5vdGVzID0gW107XG5sZXQgcHJvamVjdHMgPSBbbmV3IFByb2plY3QoXCJHZW5lcmFsXCIsIFwiaWQtMVwiKSwgbmV3IFByb2plY3QoXCJTdHVkeVwiLCBcImlkLTJcIiksIG5ldyBQcm9qZWN0KFwiQ2hvcmVzXCIsIFwiaWQtM1wiKV07XG5sZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKVxuZ2VuZXJhdGVCYXNlRWxlbWVudHMoKTtcbmRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0cyk7IC8vR2VuZXJhdGUgYWxsIHRoZSBiYXNlIGVsZW1lbnRzIGZvciB0aGUgRE9NXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgLy9Qcm9qZWN0cyBsb2dpY1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm5ldy1wcm9qZWN0XCIpKSB7IC8vIElmIHVzZXIgY2xpY2tzIG9uIG5ldyBub3RlXG4gICAgdmFyIG5ld1Byb2plY3RkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1Byb2plY3REaWFsb2dcIilcbiAgICBuZXdQcm9qZWN0ZGlhbG9nLnNob3dNb2RhbCgpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2UtbmV3LXByb2plY3QtZGlhbG9nXCIpKSB7IC8vIElmIHVzZXIgZmluaXNoZXMgdXBkYXRlXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHZhciBuZXdQcm9qZWN0ZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdQcm9qZWN0RGlhbG9nXCIpXG4gICAgcHJvamVjdENvdW50ICs9MTtcbiAgICB2YXIgcHJvamVjdCA9IGdlbmVyYXRlUHJvamVjdChwcm9qZWN0Q291bnQpO1xuICAgIG5ld1Byb2plY3RkaWFsb2cuY2xvc2UoKTtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIGRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0cyk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtcHJvamVjdC1idXR0b25cIikpIHsgLy8gVXNlciByZW1vdmVzIGEgcHJvamVjdFxuICAgIHZhciBpZCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuaWQ7XG4gICAgY29uc29sZS5sb2coXCJkZWxldGUgY2xpY2tlZFwiKVxuICAgIGNvbnNvbGUubG9nKGlkKVxuICAgIHByb2plY3RzID0gcmVtb3ZlRWxlbWVudEJ5SWQoaWQsIHByb2plY3RzKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcbiAgICBkaXNwbGF5UHJvamVjdHMocHJvamVjdHMpO1xuICB9XG5cblxuXG4gIC8vTm90ZXMgbG9naWNcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJuZXctaXRlbVwiKSkgeyAvLyBJZiB1c2VyIGNsaWNrcyBvbiBuZXcgbm90ZVxuICAgIHZhciBuZXdOb3RlZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdOb3RlRGlhbG9nXCIpXG4gICAgcmVzZXROZXdGb3JtVmFsdWVzKCk7XG4gICAgbmV3Tm90ZWRpYWxvZy5zaG93TW9kYWwoKTtcbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNsb3NlLW5ldy1ub3RlLWRpYWxvZ1wiKSkgeyAvLyBJZiB1c2VyIGZpbmlzaGVzIHVwZGF0ZVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB2YXIgbmV3Tm90ZWRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3Tm90ZURpYWxvZ1wiKVxuICAgIG5vdGVDb3VudCArPTE7XG4gICAgdmFyIG5vdGUgPSBnZW5lcmF0ZU5vdGUobm90ZUNvdW50KTtcbiAgICBuZXdOb3RlZGlhbG9nLmNsb3NlKCk7XG4gICAgbm90ZXMucHVzaChub3RlKTtcbiAgICBkaXNwbGF5Tm90ZXMobm90ZXMpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlLWJ1dHRvblwiKSkgeyAvLyBVc2VyIHJlbW92ZXMgYSBub3RlXG4gICAgdmFyIGlkID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmlkO1xuICAgIG5vdGVzID0gcmVtb3ZlRWxlbWVudEJ5SWQoaWQsIG5vdGVzKTtcbiAgICBkaXNwbGF5Tm90ZXMobm90ZXMpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWRpdC1idXR0b25cIikpIHsgLy8gVXNlciB1cGRhdGVzIGEgbm90ZVxuICAgIHZhciBlZGl0Tm90ZURpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdE5vdGVEaWFsb2dcIik7XG4gICAgaWQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaWQ7XG4gICAgZWRpdE5vdGVEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgaGFuZGxlRWRpdE9wZXJhdGlvbihpZCwgbm90ZXMpO1xuICB9XG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9