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
/* harmony export */   adaptNotesDeletedProjects: () => (/* binding */ adaptNotesDeletedProjects),
/* harmony export */   displayFullNote: () => (/* binding */ displayFullNote),
/* harmony export */   displayNotes: () => (/* binding */ displayNotes),
/* harmony export */   displaySmallNote: () => (/* binding */ displaySmallNote),
/* harmony export */   editElementById: () => (/* binding */ editElementById),
/* harmony export */   generateNote: () => (/* binding */ generateNote),
/* harmony export */   removeElementById: () => (/* binding */ removeElementById)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");



let noteCount = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.accessStoredItem)("noteCount", "number") ? (0,_utils__WEBPACK_IMPORTED_MODULE_0__.accessStoredItem)("noteCount", "number") : 0;

//Class generator
const Note = class Note {
  constructor(title, date, status, prio, project, notes, id) {
    Object.assign(this, {title, date, status, prio, project, notes, id});
  };
}

function updateNote(note) {
  note["title"] = document.querySelector("#title-edit").value;
  note["date"] = document.querySelector("#date-edit").value;
  note["status"] = document.querySelector("#status-edit").value;
  note["prio"] = document.querySelector("#priority-edit").value;
  note["notes"] = document.querySelector("#description-edit").value;
  note["project"] = document.querySelector("#project-edit").value;
  return note;

}

//Create a new note object based on values given in the new note form
const generateNote = function () {
  noteCount +=1;
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.storeItem)(noteCount, "noteCount", "number");
  return new Note(document.querySelector("#title-new").value,
                  document.querySelector("#date-new").value,
                  document.querySelector("#status-new").value,
                  document.querySelector("#priority-new").value,
                  document.querySelector("#project-new").value,
                  document.querySelector("#description-new").value,
                  `id-${noteCount}`);
}

//Displays all the notes objects in the DOM, in project containers
const displayNotes = function (notes) {
  removeDisplayedNotes();
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.storeItem)(notes, "notes", "array");
  var notesContainer = document.querySelector(".notes-container");
  var uniqueProjects = [];
  notes.forEach((note) => {uniqueProjects.includes(note["project"]) ? '' : uniqueProjects.push(note["project"])});
  uniqueProjects.forEach(function (project) {
    var projectContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("div", "project-container", "");
    projectContainer.setAttribute("id", `project-${project}`);
    notes.forEach(function (note) {
      if (note["project"] === project) {
        projectContainer.appendChild(createNoteContainer(note))
      }
    })
    notesContainer.appendChild(projectContainer)
  })
};

//Individually create the container with all the DOM elements for a note object
function createNoteContainer (note) {
  let noteContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("div", "note-container", "")
  noteContainer.setAttribute("data-id", note["id"]);
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(noteContainer, [(0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("span", `project-value`, note["project"]),
                                 createNoteSection("title", note["title"]),
                                 createNoteSection("date", note["date"]),
                                 createNoteButtons(),
                                 (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("button", "show-more-button", "Details")]);
  return noteContainer;
}

const displayFullNote = function (id, notes) {
  const noteContainer = document.querySelector(`div[data-id="${id}"]`);
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren)(noteContainer);
  const note = selectElementById(id, notes)
  ;(0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(noteContainer, [(0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("button", "show-less-button", "X"),
                                 (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("span", `project-value`, note["project"]),
                                 createNoteSection("title", note["title"]),
                                 createNoteSection("date", note["date"]),
                                 createNoteSection("status", note["status"]),
                                 createNoteSection("prio", note["prio"]),
                                 createNoteSection("notes", note["notes"]),
                                 createNoteButtons()]);
}


const displaySmallNote = function (id, notes) {
  const noteContainer = document.querySelector(`div[data-id="${id}"]`);
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren)(noteContainer);
  const note = selectElementById(id, notes)
  ;(0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(noteContainer, [(0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("span", `project-value`, note["project"]),
                                 createNoteSection("title", note["title"]),
                                 createNoteSection("date", note["date"]),
                                 createNoteButtons(),
                                 (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("button", "show-more-button", "Details")]);
};



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
  notes.forEach(note => {note["id"] === id ? newNotes.push(updateNote(note)) : newNotes.push(note)});
  return newNotes;
}

const selectElementById = function (id, notes) {
  let newNote = "";
  notes.forEach(function (note) {
    if (note["id"] === id) {
      newNote = note;
    }
  });
  return newNote
};

const adaptNotesDeletedProjects = function (projects, notes) {
  var projectList = [];
  projects.forEach(project => projectList.push(project.title));
  console.log(projectList)
  var newNotes = [];
  notes.forEach(function (note) {
    if (projectList.includes(note.project)) {
      newNotes.push(note);
      console.log(note)
    }
    else {
      note.project = "";
      console.log(note)
      newNotes.push(note);
    }
  });
  displayNotes(newNotes);
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


let projectCount = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.accessStoredItem)("projectCount", "number") ? (0,_utils__WEBPACK_IMPORTED_MODULE_0__.accessStoredItem)("projectCount", "number") : 3;

const Project = class Project {
  constructor(title, id) {
    Object.assign(this, {title, id});
  };
}

const generateProject = function () {
  projectCount += 1
  ;(0,_utils__WEBPACK_IMPORTED_MODULE_0__.storeItem)(projectCount, "projectCount", "number");
  return new Project(document.querySelector("#new-project").value,
                     `id-${projectCount}`);
}

const generateProjectsList = function (projects) {
  var projectList = [];
  projects.forEach(project => projectList.push(project.title));
  return projectList;
}

const displayProjects = function (projects) {
  removeDisplayedProjects();
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.storeItem)(projects, "projects", "array");
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
/* harmony export */   accessStoredItem: () => (/* binding */ accessStoredItem),
/* harmony export */   appendChildren: () => (/* binding */ appendChildren),
/* harmony export */   createElementClass: () => (/* binding */ createElementClass),
/* harmony export */   removeAllChildren: () => (/* binding */ removeAllChildren),
/* harmony export */   setAttributes: () => (/* binding */ setAttributes),
/* harmony export */   storeItem: () => (/* binding */ storeItem)
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

const storeItem = function (item, storedItemName, type) {
  if (type === "array") {
  var serializedArray = JSON.stringify(item);
  localStorage.setItem(storedItemName, serializedArray);
  }
  if (type === "number") {
  let valueAsString = item.toString();
  localStorage.setItem(storedItemName, valueAsString);
  }
}

const accessStoredItem = function (storedItemName, type) {
  if (type === "array") {
    var storedArray = localStorage.getItem(storedItemName);
    var deserializedObject = JSON.parse(storedArray);
    return deserializedObject;
  }
  if (type === "number") {
    let storedValueAsString = localStorage.getItem(storedItemName);
    let retrievedValue = parseInt(storedValueAsString);
    return retrievedValue;
  }
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
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ "./src/form.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/utils.js");



// import {handleCreateNoteOperation, handleEditNoteOperation, handleDeleteNoteOperation, handleCreateProjectOperation, handleDeleteProjectOperation} from './dom';





let notes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.accessStoredItem)("notes", "array") ? (0,_utils__WEBPACK_IMPORTED_MODULE_5__.accessStoredItem)("notes", "array") : [];
let projects = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.accessStoredItem)("projects", "array") ? (0,_utils__WEBPACK_IMPORTED_MODULE_5__.accessStoredItem)("projects", "array") : [new _project__WEBPACK_IMPORTED_MODULE_4__.Project("General", "id-1"), new _project__WEBPACK_IMPORTED_MODULE_4__.Project("Study", "id-2"), new _project__WEBPACK_IMPORTED_MODULE_4__.Project("Chores", "id-3")];
let id = "";
(0,_interface__WEBPACK_IMPORTED_MODULE_1__["default"])(projects);
(0,_note__WEBPACK_IMPORTED_MODULE_2__.displayNotes)(notes)
;(0,_project__WEBPACK_IMPORTED_MODULE_4__.displayProjects)(projects); //Generate all the base elements for the DOM


//Projects logic
document.addEventListener("click", (event) => {
  //New project code
  if (event.target.classList.contains("new-project")) {
    var newProjectdialog = document.querySelector(".newProjectDialog")
    newProjectdialog.showModal();
  }
  if (event.target.classList.contains("close-new-project-dialog")) {
    handleCreateProjectOperation(event)
  }

  //Delete project code
  if (event.target.classList.contains("delete-project-button")) {
    projects = handleDeleteProjectOperation(event, projects);
  }
});

//Notes logic
document.addEventListener("click", (event) => {
  //New note project
  if (event.target.classList.contains("new-item")) {
    var newNotedialog = document.querySelector(".newNoteDialog")
    ;(0,_form__WEBPACK_IMPORTED_MODULE_3__.resetNewFormValues)(projects);
    newNotedialog.showModal();
  };
  if (event.target.classList.contains("close-new-note-dialog")) {
    handleCreateNoteOperation(event);
  };

  //Delete note code
  if (event.target.classList.contains("delete-button")) {
    handleDeleteNoteOperation(event)
  }

  //Edit note code
  if (event.target.classList.contains("edit-button")) {
    var editNoteDialog = document.querySelector(".editNoteDialog");
    id = event.target.parentNode.parentNode.dataset.id;
    console.log(id)
    editNoteDialog.showModal();
    (0,_form__WEBPACK_IMPORTED_MODULE_3__.adaptEditFormValues)(id, notes, projects)
  }
  if (event.target.classList.contains("close-edit-note-dialog")) {
    handleEditNoteOperation(event);
  }
});

//Show less/more note elements logic
document.addEventListener("click", (event) => {
  //Show full note
  if (event.target.classList.contains("show-more-button")) {
    id = event.target.parentNode.dataset.id;
    (0,_note__WEBPACK_IMPORTED_MODULE_2__.displayFullNote)(id, notes);
  }
  //Show small note
  if (event.target.classList.contains("show-less-button")) {
    id = event.target.parentNode.dataset.id;
    (0,_note__WEBPACK_IMPORTED_MODULE_2__.displaySmallNote)(id, notes);
  };
});



//Notes DOM functions
function handleCreateNoteOperation (event) {
  event.preventDefault()
  var newNotedialog = document.querySelector(".newNoteDialog")
  var note = (0,_note__WEBPACK_IMPORTED_MODULE_2__.generateNote)();
  newNotedialog.close();
  notes.push(note);
  (0,_note__WEBPACK_IMPORTED_MODULE_2__.displayNotes)(notes);
}
function handleEditNoteOperation (event) {
  event.preventDefault()
  var editNoteDialog = document.querySelector(".editNoteDialog");
  notes = (0,_note__WEBPACK_IMPORTED_MODULE_2__.editElementById)(id, notes)
  editNoteDialog.close();
  (0,_note__WEBPACK_IMPORTED_MODULE_2__.displayNotes)(notes);
};
function handleDeleteNoteOperation (event) {
  var id = event.target.parentNode.parentNode.dataset.id;
  notes = (0,_note__WEBPACK_IMPORTED_MODULE_2__.removeElementById)(id, notes);
  (0,_note__WEBPACK_IMPORTED_MODULE_2__.displayNotes)(notes);
};

//Project DOM functions
function handleCreateProjectOperation (event) {
  event.preventDefault()
  var project = (0,_project__WEBPACK_IMPORTED_MODULE_4__.generateProject)();
  var newProjectdialog = document.querySelector(".newProjectDialog")
  newProjectdialog.close();
  projects.push(project);
  (0,_project__WEBPACK_IMPORTED_MODULE_4__.displayProjects)(projects);
};
function  handleDeleteProjectOperation (event) {
  var id = event.target.parentNode.dataset.id;
  projects = (0,_note__WEBPACK_IMPORTED_MODULE_2__.removeElementById)(id, projects);
  (0,_project__WEBPACK_IMPORTED_MODULE_4__.displayProjects)(projects);
  (0,_note__WEBPACK_IMPORTED_MODULE_2__.adaptNotesDeletedProjects)(projects, notes);
  return projects
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQWdCO0FBQ3BCO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtREFBWTtBQUN6QjtBQUNBO0FBQ0EsRUFBRSxtREFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxzREFBZTtBQUN6QjtBQUNBLEVBQUUsbURBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQSxVQUFVLHdEQUFpQjtBQUMzQixFQUFFLG1EQUFZO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlEQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLEVBQUUseURBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYSx3REFBaUI7QUFDOUIsRUFBRSx5REFBZTtBQUNqQixFQUFFLGdFQUF5QjtBQUMzQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9ub3RlLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiV290ZmFyZC1SZWd1bGFyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIndvdGZhcmRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbjpyb290IHtcbiAgZm9udC1mYW1pbHk6IFwid290ZmFyZFwiO1xufVxuXG4ucHJvamVjdC12YWx1ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDQwMHB4KSk7XG4gIGdhcDogMjBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBmbGV4LXNocmluazogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4ucHJvamVjdC1jb250YWluZXIgPiAqIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ubm90ZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDQwMHB4KSk7XG4gIGdhcDogMjBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cblxuLm5vdGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbi5ub3RlLWNvbnRhaW5lciBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ubm90ZS1jb250YWluZXIgZGl2ICp7XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG5cbi5ub3RlLWNvbnRhaW5lciBkaXYgKjpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuZGlhbG9nIGRpdiBvcHRpb24ge1xuICB3aWR0aDogNDAwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUErQjtBQUNqQzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2REFBNkQ7RUFDN0QsU0FBUztFQUNULDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsWUFBWTtFQUNaLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhEQUE4RDtFQUM5RCxTQUFTO0VBQ1QsNkJBQTZCO0FBQy9COzs7QUFHQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ3b3RmYXJkXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJXb3RmYXJkLVJlZ3VsYXIub3RmXFxcIik7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwid290ZmFyZFxcXCI7XFxufVxcblxcbi5wcm9qZWN0LXZhbHVlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgNDAwcHgpKTtcXG4gIGdhcDogMjBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyID4gKiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ub3Rlcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCA0MDBweCkpO1xcbiAgZ2FwOiAyMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcblxcbi5ub3RlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xcbn1cXG5cXG4ubm90ZS1jb250YWluZXIgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm5vdGUtY29udGFpbmVyIGRpdiAqe1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5cXG4ubm90ZS1jb250YWluZXIgZGl2ICo6Zmlyc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbmRpYWxvZyBkaXYgb3B0aW9uIHtcXG4gIHdpZHRoOiA0MDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7c2V0QXR0cmlidXRlcywgYXBwZW5kQ2hpbGRyZW4sIGNyZWF0ZUVsZW1lbnRDbGFzcywgcmVtb3ZlQWxsQ2hpbGRyZW59IGZyb20gJy4vdXRpbHMnXG5cblxuLy8gQWdncmVnYXRlIHRoZSBmb3JtIGVsZW1lbnRzIHRvIGNyZWF0ZSB0aGUgdHdvIGZvcm1zIChuZXcgbm90ZSBhbmQgZWRpdCBub3RlKVxuXG5jb25zdCBnZW5lcmF0ZU5ld05vdGVGb3JtID0gZnVuY3Rpb24ocHJvamVjdHMpIHtcbiAgdmFyIGRpYWxvZyA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpYWxvZ1wiLCBcIm5ld05vdGVEaWFsb2dcIiwgXCJcIik7XG4gIHZhciBmb3JtQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZm9ybVwiLCBcImZvcm0tY29udGFpbmVyXCIsIFwiXCIpO1xuICB2YXIgZm9ybU9iamVjdGl2ZSA9IFwibmV3XCJcbiAgZm9ybUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJcIik7XG4gIGFwcGVuZENoaWxkcmVuKGZvcm1Db250YWluZXIsIFtnZW5lcmF0ZVRpdGxlQ29udGFpbmVyKGZvcm1PYmplY3RpdmUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVEYXRlQ29udGFpbmVyKGZvcm1PYmplY3RpdmUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVEZXNjQ29udGFpbmVyKGZvcm1PYmplY3RpdmUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVQcmlvcml0eUNvbnRhaW5lcihmb3JtT2JqZWN0aXZlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlU3RhdHVzQ29udGFpbmVyKGZvcm1PYmplY3RpdmUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVQcm9qZWN0Q29udGFpbmVyKGZvcm1PYmplY3RpdmUsIHByb2plY3RzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlQ2xvc2VCdXR0b24oZm9ybU9iamVjdGl2ZSldKTtcbiAgZGlhbG9nLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuICByZXR1cm4gZGlhbG9nXG59XG5cbmNvbnN0IGdlbmVyYXRlRWRpdE5vdGVGb3JtID0gZnVuY3Rpb24ocHJvamVjdHMpIHtcbiAgdmFyIGRpYWxvZyA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpYWxvZ1wiLCBcImVkaXROb3RlRGlhbG9nXCIsIFwiXCIpO1xuICB2YXIgZm9ybUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImZvcm1cIiwgXCJmb3JtLWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgdmFyIGZvcm1PYmplY3RpdmUgPSBcImVkaXRcIlxuICBmb3JtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIlwiKTtcbiAgYXBwZW5kQ2hpbGRyZW4oZm9ybUNvbnRhaW5lciwgW2dlbmVyYXRlVGl0bGVDb250YWluZXIoZm9ybU9iamVjdGl2ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZURhdGVDb250YWluZXIoZm9ybU9iamVjdGl2ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZURlc2NDb250YWluZXIoZm9ybU9iamVjdGl2ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZVByaW9yaXR5Q29udGFpbmVyKGZvcm1PYmplY3RpdmUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVTdGF0dXNDb250YWluZXIoZm9ybU9iamVjdGl2ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZVByb2plY3RDb250YWluZXIoZm9ybU9iamVjdGl2ZSwgcHJvamVjdHMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVDbG9zZUJ1dHRvbihmb3JtT2JqZWN0aXZlKV0pO1xuICBkaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gIHJldHVybiBkaWFsb2dcbn1cblxuY29uc3QgZ2VuZXJhdGVOZXdQcm9qZWN0Rm9ybSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZGlhbG9nID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGlhbG9nXCIsIFwibmV3UHJvamVjdERpYWxvZ1wiLCBcIlwiKTtcbiAgdmFyIGZvcm1Db250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJmb3JtXCIsIFwiZm9ybS1jb250YWluZXJcIiwgXCJcIik7XG4gIHZhciBmb3JtT2JqZWN0aXZlID0gXCJuZXctcHJvamVjdFwiXG4gIGZvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiXCIpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlTmV3UHJvamVjdENvbnRhaW5lcigpKTtcbiAgZGlhbG9nLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuICByZXR1cm4gZGlhbG9nXG59XG5cblxuXG4vLyBHZW5lcmF0ZSBpbmRpdmlkdWFsbHkgdGhlIGRpZmZlcmVudCBlbGVtZW50cyBvZiB0aGUgZm9ybXNcblxuZnVuY3Rpb24gZ2VuZXJhdGVUaXRsZUNvbnRhaW5lciAoZm9ybU9iamVjdGl2ZSkge1xuICBsZXQgdGl0bGVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJkaXZcIiwgXCJ0aXRsZS1jb250YWluZXJcIiwgXCJcIik7XG4gIGxldCB0aXRsZUxhYmVsID0gY3JlYXRlRWxlbWVudENsYXNzKFwibGFiZWxcIiwgXCJ0aXRsZVwiLCBcIlRpdGxlOiBcIik7XG4gIHNldEF0dHJpYnV0ZXModGl0bGVMYWJlbCwge1wiZm9yXCIgOiBcInRpdGxlXCJ9KTtcbiAgbGV0IHRpdGxlSW5wdXQgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJpbnB1dFwiLCBcInRpdGxlXCIsIFwiXCIpO1xuICBzZXRBdHRyaWJ1dGVzKHRpdGxlSW5wdXQsIHtcImlkXCIgOiBgdGl0bGUtJHtmb3JtT2JqZWN0aXZlfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiIDogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIiA6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsYWNlaG9sZGVyXCIgOiBcIkRvIGxhdW5kcnlcIn0pO1xuICBhcHBlbmRDaGlsZHJlbih0aXRsZUNvbnRhaW5lciwgW3RpdGxlTGFiZWwsIHRpdGxlSW5wdXRdKTtcbiAgcmV0dXJuIHRpdGxlQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZURlc2NDb250YWluZXIgKGZvcm1PYmplY3RpdmUpIHtcbiAgbGV0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGl2XCIsIFwiZGVzY3JpcHRpb24tY29udGFpbmVyXCIsIFwiXCIpO1xuICBsZXQgZGVzY3JpcHRpb25MYWJlbCA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImxhYmVsXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJEZXNjcmlwdGlvbjogXCIpO1xuICBzZXRBdHRyaWJ1dGVzKGRlc2NyaXB0aW9uTGFiZWwsIHtcImZvclwiIDogXCJkZXNjcmlwdGlvblwifSk7XG4gIGxldCBkZXNjcmlwdGlvbklucHV0ID0gY3JlYXRlRWxlbWVudENsYXNzKFwidGV4dGFyZWFcIiwgXCJkZXNjcmlwdGlvblwiLCBcIlwiKTtcbiAgc2V0QXR0cmlidXRlcyhkZXNjcmlwdGlvbklucHV0LCB7XCJpZFwiIDogYGRlc2NyaXB0aW9uLSR7Zm9ybU9iamVjdGl2ZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIiA6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xzXCIgOiBcIjMwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93c1wiIDogXCI3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGxhY2Vob2xkZXJcIiA6IFwiV2FzaCBhbGwgYmxhY2sgY2xvdGhlc1wifSk7XG4gIGFwcGVuZENoaWxkcmVuKGRlc2NyaXB0aW9uQ29udGFpbmVyLCBbZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dF0pO1xuICByZXR1cm4gZGVzY3JpcHRpb25Db250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRGF0ZUNvbnRhaW5lciAoZm9ybU9iamVjdGl2ZSkge1xuICBsZXQgZGF0ZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpdlwiLCBcImRhdGUtY29udGFpbmVyXCIsIFwiXCIpO1xuICBsZXQgZGF0ZUxhYmVsID0gY3JlYXRlRWxlbWVudENsYXNzKFwibGFiZWxcIiwgXCJkYXRlXCIsIFwiRHVlIGRhdGU6IFwiKTtcbiAgc2V0QXR0cmlidXRlcyhkYXRlTGFiZWwsIHtcImZvclwiIDogXCJkYXRlXCJ9KTtcbiAgbGV0IGRhdGVJbnB1dCA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImlucHV0XCIsIFwiZGF0ZVwiLCBcIlwiKTtcbiAgc2V0QXR0cmlidXRlcyhkYXRlSW5wdXQsIHtcImlkXCIgOiBgZGF0ZS0ke2Zvcm1PYmplY3RpdmV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCIgOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImRhdGVcIn0pO1xuICBhcHBlbmRDaGlsZHJlbihkYXRlQ29udGFpbmVyLCBbZGF0ZUxhYmVsLCBkYXRlSW5wdXRdKTtcbiAgcmV0dXJuIGRhdGVDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJpb3JpdHlDb250YWluZXIgKGZvcm1PYmplY3RpdmUpIHtcbiAgbGV0IHByaW9yaXR5Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGl2XCIsIFwicHJpb3JpdHktY29udGFpbmVyXCIsIFwiXCIpO1xuICBsZXQgcHJpb3JpdHlMYWJlbCA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImxhYmVsXCIsIFwicHJpb3JpdHlcIiwgXCJQcmlvcml0eTogXCIpO1xuICBzZXRBdHRyaWJ1dGVzKHByaW9yaXR5TGFiZWwsIHtcImZvclwiIDogXCJwcmlvcml0eVwifSk7XG4gIGxldCBwcmlvcml0eUlucHV0ID0gZ2VuZXJhdGVPcHRpb25FbGVtZW50cyhcInByaW9yaXR5XCIsIFtcIlZlcnkgaW1wb3J0YW50XCIsIFwiSW1wb3J0YW50XCIsIFwiTm9ybWFsXCIsIFwiTm90IGltcG9ydGFudFwiXSwgZm9ybU9iamVjdGl2ZSwgXCJOb3JtYWxcIilcbiAgYXBwZW5kQ2hpbGRyZW4ocHJpb3JpdHlDb250YWluZXIsIFtwcmlvcml0eUxhYmVsLCBwcmlvcml0eUlucHV0XSk7XG4gIHJldHVybiBwcmlvcml0eUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVTdGF0dXNDb250YWluZXIgKGZvcm1PYmplY3RpdmUpIHtcbiAgbGV0IHN0YXR1c0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpdlwiLCBcInN0YXR1cy1jb250YWluZXJcIiwgXCJcIik7XG4gIGxldCBzdGF0dXNMYWJlbCA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImxhYmVsXCIsIFwic3RhdHVzXCIsIFwiU3RhdHVzOiBcIik7XG4gIHNldEF0dHJpYnV0ZXMoc3RhdHVzTGFiZWwsIHtcImZvclwiIDogXCJzdGF0dXNcIn0pO1xuICBsZXQgc3RhdHVzSW5wdXQgPSBnZW5lcmF0ZU9wdGlvbkVsZW1lbnRzKFwic3RhdHVzXCIsIFtcIk5vdCBzdGFydGVkXCIsIFwiRG9pbmdcIiwgXCJEb25lXCJdLCBmb3JtT2JqZWN0aXZlLCBcIkRvaW5nXCIpXG4gIGFwcGVuZENoaWxkcmVuKHN0YXR1c0NvbnRhaW5lciwgW3N0YXR1c0xhYmVsLCBzdGF0dXNJbnB1dF0pO1xuICByZXR1cm4gc3RhdHVzQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RDb250YWluZXIgKGZvcm1PYmplY3RpdmUsIHByb2plY3RzKSB7XG4gIGxldCBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGl2XCIsIFwicHJvamVjdC1jb250YWluZXJcIiwgXCJcIik7XG4gIGxldCBwcm9qZWN0TGFiZWwgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJsYWJlbFwiLCBcInByb2plY3RcIiwgXCJQcm9qZWN0OiBcIik7XG4gIHNldEF0dHJpYnV0ZXMocHJvamVjdExhYmVsLCB7XCJmb3JcIiA6IFwicHJvamVjdFwifSk7XG4gIHZhciBwcm9qZWN0TGlzdCA9IFtdO1xuICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdExpc3QucHVzaChwcm9qZWN0LnRpdGxlKSk7XG4gIGxldCBwcm9qZWN0SW5wdXQgPSBnZW5lcmF0ZU9wdGlvbkVsZW1lbnRzKFwicHJvamVjdFwiLCBwcm9qZWN0TGlzdCwgZm9ybU9iamVjdGl2ZSwgXCJHZW5lcmFsXCIpXG4gIGFwcGVuZENoaWxkcmVuKHByb2plY3RDb250YWluZXIsIFtwcm9qZWN0TGFiZWwsIHByb2plY3RJbnB1dF0pO1xuICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcbn1cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNsb3NlQnV0dG9uIChmb3JtT2JqZWN0aXZlKSB7XG4gIGxldCBidXR0b24gPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJidXR0b25cIiwgYGNsb3NlLSR7Zm9ybU9iamVjdGl2ZX0tbm90ZS1kaWFsb2dgLCBgJHtmb3JtT2JqZWN0aXZlfSBub3RlYClcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGBjbG9zZSR7Zm9ybU9iamVjdGl2ZX1Ob3RlRGlhbG9nYClcbiAgcmV0dXJuIGJ1dHRvblxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZU5ld1Byb2plY3RDb250YWluZXIgKCkge1xuICBsZXQgbmV3UHJvamVjdENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpdlwiLCBcIm5ldy1wcm9qZWN0LWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgbGV0IG5ld1Byb2plY3RMYWJlbCA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImxhYmVsXCIsIFwibmV3LXByb2plY3RcIiwgXCJOZXcgUHJvamVjdDogXCIpO1xuICBzZXRBdHRyaWJ1dGVzKG5ld1Byb2plY3RMYWJlbCwge1wiZm9yXCIgOiBcIm5ldy1wcm9qZWN0XCJ9KTtcbiAgbGV0IG5ld1Byb2plY3RJbnB1dCA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImlucHV0XCIsIFwibmV3LXByb2plY3RcIiwgXCJcIik7XG4gIHNldEF0dHJpYnV0ZXMobmV3UHJvamVjdElucHV0LCB7XCJpZFwiIDogXCJuZXctcHJvamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIiA6IFwibmV3LXByb2plY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCIgOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiIDogXCJTcG9ydFwifSk7XG4gIHZhciBidXR0b24gPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJidXR0b25cIiwgYGNsb3NlLW5ldy1wcm9qZWN0LWRpYWxvZ2AsIGBhZGQgbmV3IHByb2plY3RgKVxuICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGNsb3NlTmV3UHJvamVjdERpYWxvZ2ApXG4gIGFwcGVuZENoaWxkcmVuKG5ld1Byb2plY3RDb250YWluZXIsIFtuZXdQcm9qZWN0TGFiZWwsIG5ld1Byb2plY3RJbnB1dCwgYnV0dG9uXSk7XG4gIHJldHVybiBuZXdQcm9qZWN0Q29udGFpbmVyO1xufVxuXG5cbi8vIEZ1bmN0aW9ucyB0byBhdm9pZCByZWR1bmRhbnQgY29kZVxuZnVuY3Rpb24gZ2VuZXJhdGVPcHRpb25FbGVtZW50cyAoaW5wdXRDbGFzcywgb3B0aW9uVmFsdWVzLCBmb3JtT2JqZWN0aXZlKSB7XG4gIHZhciBpbnB1dEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJzZWxlY3RcIiwgaW5wdXRDbGFzcywgXCJcIik7XG4gIHNldEF0dHJpYnV0ZXMoaW5wdXRFbGVtZW50LCB7XCJpZFwiIDogYCR7aW5wdXRDbGFzc30tJHtmb3JtT2JqZWN0aXZlfWB9KTtcbiAgb3B0aW9uVmFsdWVzLmZvckVhY2goKG9wdGlvbikgPT4gaW5wdXRFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbkVsZW1lbnQob3B0aW9uKSkpO1xuICByZXR1cm4gaW5wdXRFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPcHRpb25FbGVtZW50KHZhbHVlKSB7XG4gIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdmFsdWUpO1xuICBvcHRpb24uaW5uZXJUZXh0ID0gdmFsdWU7XG4gIHJldHVybiBvcHRpb247XG59XG5cblxuLy8gSW5wdXQgdGhlIHZhbHVlcyBvZiBvcmlnaW5hbCBub3RlIHdoZW4gZWRpdCBpcyBzZWxlY3RlZFxuXG5jb25zdCBhZGFwdEVkaXRGb3JtVmFsdWVzID0gZnVuY3Rpb24gKGlkLCBub3RlcywgcHJvamVjdHMpIHtcbiAgY29uc3QgY29uZGl0aW9uID0gbm90ZSA9PiBub3RlW1wiaWRcIl0gPT09IGlkO1xuICB2YXIgbm90ZSA9IG5vdGVzLmZpbHRlcihjb25kaXRpb24pWzBdO1xuICBjb25zb2xlLmxvZyhub3RlKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlLWVkaXRcIikudmFsdWUgPSBub3RlW1widGl0bGVcIl07XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZS1lZGl0XCIpLnZhbHVlID0gbm90ZVtcImRhdGVcIl07XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhdHVzLWVkaXRcIikudmFsdWUgPSBub3RlW1wic3RhdHVzXCJdO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5LWVkaXRcIikudmFsdWUgPSBub3RlW1wicHJpb1wiXTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvbi1lZGl0XCIpLnZhbHVlID0gbm90ZVtcIm5vdGVzXCJdO1xuICBhZGFwdFByb2plY3RPcHRpb25zKFwiI3Byb2plY3QtZWRpdFwiLCBwcm9qZWN0cyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1lZGl0XCIpLnZhbHVlID0gbm90ZVtcInByb2plY3RcIl07XG59XG5cbi8vIFJlc2V0IHRoZSB2YWx1ZXMgd2hlbiBuZXcgbm90ZSBmb3JtIGlzIGdlbmVyYXRlZFxuXG5jb25zdCByZXNldE5ld0Zvcm1WYWx1ZXMgPSBmdW5jdGlvbiAocHJvamVjdHMpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZS1uZXdcIikudmFsdWUgPSBcIlwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGUtbmV3XCIpLnZhbHVlID0gXCJcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGF0dXMtbmV3XCIpLnZhbHVlID0gXCJcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eS1uZXdcIikudmFsdWUgPSBcIlwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uLW5ld1wiKS52YWx1ZSA9IFwiXCI7XG4gIGFkYXB0UHJvamVjdE9wdGlvbnMoXCIjcHJvamVjdC1uZXdcIiwgcHJvamVjdHMpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uZXdcIikudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBhZGFwdFByb2plY3RPcHRpb25zIChwcm9qZWN0Q29udGFpbmVySUQsIHByb2plY3RzKSB7XG4gIGxldCBwcm9qZWN0T3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvamVjdENvbnRhaW5lcklEKTtcbiAgcmVtb3ZlQWxsQ2hpbGRyZW4ocHJvamVjdE9wdGlvbnNDb250YWluZXIpO1xuICB2YXIgcHJvamVjdExpc3QgPSBbXTtcbiAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3RMaXN0LnB1c2gocHJvamVjdC50aXRsZSkpO1xuICBwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiBwcm9qZWN0T3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVPcHRpb25FbGVtZW50KHByb2plY3QpKSk7XG59XG5cbmV4cG9ydCB7Z2VuZXJhdGVOZXdOb3RlRm9ybSwgZ2VuZXJhdGVFZGl0Tm90ZUZvcm0sIGdlbmVyYXRlTmV3UHJvamVjdEZvcm0sIGFkYXB0RWRpdEZvcm1WYWx1ZXMsIHJlc2V0TmV3Rm9ybVZhbHVlc307XG4iLCJpbXBvcnQge3NldEF0dHJpYnV0ZXMsIGFwcGVuZENoaWxkcmVuLCBjcmVhdGVFbGVtZW50Q2xhc3N9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQge2dlbmVyYXRlTmV3Tm90ZUZvcm0sIGdlbmVyYXRlRWRpdE5vdGVGb3JtLCBnZW5lcmF0ZU5ld1Byb2plY3RGb3JtfSBmcm9tICcuL2Zvcm0nO1xuXG5jb25zdCBnZW5lcmF0ZUJhc2VFbGVtZW50cyA9IGZ1bmN0aW9uIChwcm9qZWN0cykge1xuICB2YXIgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKVxuICB2YXIgbmV3Tm90ZURpYWxvZyA9IGdlbmVyYXRlTmV3Tm90ZUZvcm0ocHJvamVjdHMpO1xuICB2YXIgZWRpdE5vdGVEaWFsb2cgPSBnZW5lcmF0ZUVkaXROb3RlRm9ybShwcm9qZWN0cyk7XG4gIHZhciBuZXdQcm9qZWN0RGlhbG9nID0gZ2VuZXJhdGVOZXdQcm9qZWN0Rm9ybSgpO1xuICBnZW5lcmF0ZUJhc2VJbnRlcmZhY2UoKTtcbiAgYXBwZW5kQ2hpbGRyZW4oY29udGVudCwgW25ld05vdGVEaWFsb2csIGVkaXROb3RlRGlhbG9nLCBuZXdQcm9qZWN0RGlhbG9nXSk7XG4gIC8vIGduUHJvamVjdHNFbGVtZW50cyhwcm9qZWN0cyk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQmFzZUludGVyZmFjZSAoKSB7XG4gIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gIHZhciBpbnRlcmZhY2VDb250YWluZXIgPSBnbkludGVyZmFjZUNvbnRhaW5lcigpO1xuICB2YXIgcGFnZVRpdGxlID0gZ25QYWdlVGl0bGUoKTtcbiAgdmFyIG5ld0l0ZW1CdXR0b24gPSBnbk5ld0l0ZW1CdXR0b24oKTtcbiAgdmFyIG5ld1Byb2plY3RCdXR0b24gPSBnbk5ld1Byb2plY3RCdXR0b24oKTtcbiAgdmFyIHByb2plY3RzQ29udGFpbmVyID0gZ25Qcm9qZWN0c0NvbnRhaW5lcigpO1xuICB2YXIgbm90ZXNDb250YWluZXIgPSBnbk5vdGVzQ29udGFpbmVyKCk7XG4gIGFwcGVuZENoaWxkcmVuKGludGVyZmFjZUNvbnRhaW5lciwgW3BhZ2VUaXRsZSwgbmV3SXRlbUJ1dHRvbiwgbmV3UHJvamVjdEJ1dHRvbl0pO1xuICBhcHBlbmRDaGlsZHJlbihjb250YWluZXIsIFtpbnRlcmZhY2VDb250YWluZXIsIHByb2plY3RzQ29udGFpbmVyLCBub3Rlc0NvbnRhaW5lcl0pO1xufVxuXG5mdW5jdGlvbiBnbkludGVyZmFjZUNvbnRhaW5lcigpIHtcbiAgdmFyIGludGVyZmFjZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpdlwiLCBcImludGVyZmFjZS1jb250YWluZXJcIiwgXCJcIik7XG4gIHJldHVybiBpbnRlcmZhY2VDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGduUGFnZVRpdGxlKCkge1xuICB2YXIgcGFnZVRpdGxlID0gY3JlYXRlRWxlbWVudENsYXNzKFwiaDFcIiwgXCJwYWdlLXRpdGxlXCIsIFwiT2RpbiB0by1kby1saXN0IHRvb2xcIik7XG4gIHJldHVybiBwYWdlVGl0bGU7XG59XG5cbmZ1bmN0aW9uIGduTmV3SXRlbUJ1dHRvbigpIHtcbiAgdmFyIG5ld0l0ZW1CdXR0b24gPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJidXR0b25cIiwgXCJuZXctaXRlbVwiLCBcIk5ldyBJdGVtXCIpO1xuICByZXR1cm4gbmV3SXRlbUJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gZ25OZXdQcm9qZWN0QnV0dG9uKCkge1xuICB2YXIgbmV3SXRlbUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImJ1dHRvblwiLCBcIm5ldy1wcm9qZWN0XCIsIFwiTmV3IFByb2plY3RcIik7XG4gIHJldHVybiBuZXdJdGVtQnV0dG9uO1xufVxuXG5mdW5jdGlvbiBnblByb2plY3RzQ29udGFpbmVyKCkge1xuICB2YXIgcHJvamVjdHNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJkaXZcIiwgXCJwcm9qZWN0cy1jb250YWluZXJcIiwgXCJcIik7XG4gIHJldHVybiBwcm9qZWN0c0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ25Ob3Rlc0NvbnRhaW5lcigpIHtcbiAgdmFyIG5vdGVzQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGl2XCIsIFwibm90ZXMtY29udGFpbmVyXCIsIFwiXCIpO1xuICByZXR1cm4gbm90ZXNDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGduUHJvamVjdHNFbGVtZW50cyhwcm9qZWN0cykge1xuICB2YXIgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWNvbnRhaW5lclwiKTtcbiAgd2hpbGUgKHByb2plY3RzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0c0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfTtcbiAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGduUHJvamVjdEVsZW1lbnQocHJvamVjdCkpKTtcbn1cblxuZnVuY3Rpb24gZ25Qcm9qZWN0RWxlbWVudChwcm9qZWN0KSB7XG4gIHZhciBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGl2XCIsIFwicHJvamVjdC1jb250YWluZXJcIiwgXCJcIik7XG4gIHZhciBwcm9qZWN0VGl0bGUgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJzcGFuXCIsIFwicHJvamVjdC10aXRsZVwiLCBwcm9qZWN0KTtcbiAgdmFyIGRlbGV0ZVByb2plY3RCdXR0b24gPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJidXR0b25cIiwgXCJkZWxldGUtcHJvamVjdC1idXR0b25cIiwgXCJEZWxldGUgcHJvamVjdFwiKVxuICBhcHBlbmRDaGlsZHJlbihwcm9qZWN0Q29udGFpbmVyLCBbcHJvamVjdFRpdGxlLCBkZWxldGVQcm9qZWN0QnV0dG9uXSk7XG4gIHJldHVybiBwcm9qZWN0Q29udGFpbmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQmFzZUVsZW1lbnRzO1xuIiwiaW1wb3J0IHthcHBlbmRDaGlsZHJlbiwgY3JlYXRlRWxlbWVudENsYXNzLCBzdG9yZUl0ZW0sIGFjY2Vzc1N0b3JlZEl0ZW0sIHJlbW92ZUFsbENoaWxkcmVufSBmcm9tICcuL3V0aWxzJ1xuXG5cbmxldCBub3RlQ291bnQgPSBhY2Nlc3NTdG9yZWRJdGVtKFwibm90ZUNvdW50XCIsIFwibnVtYmVyXCIpID8gYWNjZXNzU3RvcmVkSXRlbShcIm5vdGVDb3VudFwiLCBcIm51bWJlclwiKSA6IDA7XG5cbi8vQ2xhc3MgZ2VuZXJhdG9yXG5jb25zdCBOb3RlID0gY2xhc3MgTm90ZSB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkYXRlLCBzdGF0dXMsIHByaW8sIHByb2plY3QsIG5vdGVzLCBpZCkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywge3RpdGxlLCBkYXRlLCBzdGF0dXMsIHByaW8sIHByb2plY3QsIG5vdGVzLCBpZH0pO1xuICB9O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVOb3RlKG5vdGUpIHtcbiAgbm90ZVtcInRpdGxlXCJdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZS1lZGl0XCIpLnZhbHVlO1xuICBub3RlW1wiZGF0ZVwiXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZS1lZGl0XCIpLnZhbHVlO1xuICBub3RlW1wic3RhdHVzXCJdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGF0dXMtZWRpdFwiKS52YWx1ZTtcbiAgbm90ZVtcInByaW9cIl0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5LWVkaXRcIikudmFsdWU7XG4gIG5vdGVbXCJub3Rlc1wiXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb24tZWRpdFwiKS52YWx1ZTtcbiAgbm90ZVtcInByb2plY3RcIl0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZWRpdFwiKS52YWx1ZTtcbiAgcmV0dXJuIG5vdGU7XG5cbn1cblxuLy9DcmVhdGUgYSBuZXcgbm90ZSBvYmplY3QgYmFzZWQgb24gdmFsdWVzIGdpdmVuIGluIHRoZSBuZXcgbm90ZSBmb3JtXG5jb25zdCBnZW5lcmF0ZU5vdGUgPSBmdW5jdGlvbiAoKSB7XG4gIG5vdGVDb3VudCArPTE7XG4gIHN0b3JlSXRlbShub3RlQ291bnQsIFwibm90ZUNvdW50XCIsIFwibnVtYmVyXCIpO1xuICByZXR1cm4gbmV3IE5vdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZS1uZXdcIikudmFsdWUsXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGUtbmV3XCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGF0dXMtbmV3XCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eS1uZXdcIikudmFsdWUsXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmV3XCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvbi1uZXdcIikudmFsdWUsXG4gICAgICAgICAgICAgICAgICBgaWQtJHtub3RlQ291bnR9YCk7XG59XG5cbi8vRGlzcGxheXMgYWxsIHRoZSBub3RlcyBvYmplY3RzIGluIHRoZSBET00sIGluIHByb2plY3QgY29udGFpbmVyc1xuY29uc3QgZGlzcGxheU5vdGVzID0gZnVuY3Rpb24gKG5vdGVzKSB7XG4gIHJlbW92ZURpc3BsYXllZE5vdGVzKCk7XG4gIHN0b3JlSXRlbShub3RlcywgXCJub3Rlc1wiLCBcImFycmF5XCIpO1xuICB2YXIgbm90ZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVzLWNvbnRhaW5lclwiKTtcbiAgdmFyIHVuaXF1ZVByb2plY3RzID0gW107XG4gIG5vdGVzLmZvckVhY2goKG5vdGUpID0+IHt1bmlxdWVQcm9qZWN0cy5pbmNsdWRlcyhub3RlW1wicHJvamVjdFwiXSkgPyAnJyA6IHVuaXF1ZVByb2plY3RzLnB1c2gobm90ZVtcInByb2plY3RcIl0pfSk7XG4gIHVuaXF1ZVByb2plY3RzLmZvckVhY2goZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICB2YXIgcHJvamVjdENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpdlwiLCBcInByb2plY3QtY29udGFpbmVyXCIsIFwiXCIpO1xuICAgIHByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHByb2plY3QtJHtwcm9qZWN0fWApO1xuICAgIG5vdGVzLmZvckVhY2goZnVuY3Rpb24gKG5vdGUpIHtcbiAgICAgIGlmIChub3RlW1wicHJvamVjdFwiXSA9PT0gcHJvamVjdCkge1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU5vdGVDb250YWluZXIobm90ZSkpXG4gICAgICB9XG4gICAgfSlcbiAgICBub3Rlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKVxuICB9KVxufTtcblxuLy9JbmRpdmlkdWFsbHkgY3JlYXRlIHRoZSBjb250YWluZXIgd2l0aCBhbGwgdGhlIERPTSBlbGVtZW50cyBmb3IgYSBub3RlIG9iamVjdFxuZnVuY3Rpb24gY3JlYXRlTm90ZUNvbnRhaW5lciAobm90ZSkge1xuICBsZXQgbm90ZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpdlwiLCBcIm5vdGUtY29udGFpbmVyXCIsIFwiXCIpXG4gIG5vdGVDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBub3RlW1wiaWRcIl0pO1xuICBhcHBlbmRDaGlsZHJlbihub3RlQ29udGFpbmVyLCBbY3JlYXRlRWxlbWVudENsYXNzKFwic3BhblwiLCBgcHJvamVjdC12YWx1ZWAsIG5vdGVbXCJwcm9qZWN0XCJdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5vdGVTZWN0aW9uKFwidGl0bGVcIiwgbm90ZVtcInRpdGxlXCJdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5vdGVTZWN0aW9uKFwiZGF0ZVwiLCBub3RlW1wiZGF0ZVwiXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOb3RlQnV0dG9ucygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudENsYXNzKFwiYnV0dG9uXCIsIFwic2hvdy1tb3JlLWJ1dHRvblwiLCBcIkRldGFpbHNcIildKTtcbiAgcmV0dXJuIG5vdGVDb250YWluZXI7XG59XG5cbmNvbnN0IGRpc3BsYXlGdWxsTm90ZSA9IGZ1bmN0aW9uIChpZCwgbm90ZXMpIHtcbiAgY29uc3Qgbm90ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLWlkPVwiJHtpZH1cIl1gKTtcbiAgcmVtb3ZlQWxsQ2hpbGRyZW4obm90ZUNvbnRhaW5lcik7XG4gIGNvbnN0IG5vdGUgPSBzZWxlY3RFbGVtZW50QnlJZChpZCwgbm90ZXMpXG4gIGFwcGVuZENoaWxkcmVuKG5vdGVDb250YWluZXIsIFtjcmVhdGVFbGVtZW50Q2xhc3MoXCJidXR0b25cIiwgXCJzaG93LWxlc3MtYnV0dG9uXCIsIFwiWFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnRDbGFzcyhcInNwYW5cIiwgYHByb2plY3QtdmFsdWVgLCBub3RlW1wicHJvamVjdFwiXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOb3RlU2VjdGlvbihcInRpdGxlXCIsIG5vdGVbXCJ0aXRsZVwiXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOb3RlU2VjdGlvbihcImRhdGVcIiwgbm90ZVtcImRhdGVcIl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTm90ZVNlY3Rpb24oXCJzdGF0dXNcIiwgbm90ZVtcInN0YXR1c1wiXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOb3RlU2VjdGlvbihcInByaW9cIiwgbm90ZVtcInByaW9cIl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTm90ZVNlY3Rpb24oXCJub3Rlc1wiLCBub3RlW1wibm90ZXNcIl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTm90ZUJ1dHRvbnMoKV0pO1xufVxuXG5cbmNvbnN0IGRpc3BsYXlTbWFsbE5vdGUgPSBmdW5jdGlvbiAoaWQsIG5vdGVzKSB7XG4gIGNvbnN0IG5vdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS1pZD1cIiR7aWR9XCJdYCk7XG4gIHJlbW92ZUFsbENoaWxkcmVuKG5vdGVDb250YWluZXIpO1xuICBjb25zdCBub3RlID0gc2VsZWN0RWxlbWVudEJ5SWQoaWQsIG5vdGVzKVxuICBhcHBlbmRDaGlsZHJlbihub3RlQ29udGFpbmVyLCBbY3JlYXRlRWxlbWVudENsYXNzKFwic3BhblwiLCBgcHJvamVjdC12YWx1ZWAsIG5vdGVbXCJwcm9qZWN0XCJdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5vdGVTZWN0aW9uKFwidGl0bGVcIiwgbm90ZVtcInRpdGxlXCJdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5vdGVTZWN0aW9uKFwiZGF0ZVwiLCBub3RlW1wiZGF0ZVwiXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOb3RlQnV0dG9ucygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudENsYXNzKFwiYnV0dG9uXCIsIFwic2hvdy1tb3JlLWJ1dHRvblwiLCBcIkRldGFpbHNcIildKTtcbn07XG5cblxuXG4vL0NyZWF0ZXMgb25lIHRleHQgc2VjdGlvbiBvZiB0aGUgRE9NIG9mIHRoZSBub3RlXG5mdW5jdGlvbiBjcmVhdGVOb3RlU2VjdGlvbiAoc2VjdGlvbk5hbWUsIHRleHQpIHtcbiAgdmFyIGVsZW1lbnRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJkaXZcIiwgYCR7c2VjdGlvbk5hbWV9LWNvbnRhaW5lcmAsIFwiXCIpO1xuICB2YXIgY29udGVudFRpdGxlID0gY3JlYXRlRWxlbWVudENsYXNzKFwic3BhblwiLCBgJHtzZWN0aW9uTmFtZX0taGVhZGVyYCwgYCR7c2VjdGlvbk5hbWV9YCk7XG4gIHZhciBjb250ZW50VmFsdWUgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJzcGFuXCIsIGAke3NlY3Rpb25OYW1lfS12YWx1ZWAsIHRleHQpO1xuICBhcHBlbmRDaGlsZHJlbihlbGVtZW50Q29udGFpbmVyLCBbY29udGVudFRpdGxlLCBjb250ZW50VmFsdWVdKTtcbiAgcmV0dXJuIGVsZW1lbnRDb250YWluZXJcbn1cblxuLy9DcmVhdGVzIHRoZSBidXR0b25zIGZvciB0aGUgRE9NIG9mIHRoZSBub3RlXG5mdW5jdGlvbiBjcmVhdGVOb3RlQnV0dG9ucyAoKSB7XG4gIHZhciBlbGVtZW50Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGl2XCIsIFwiYnV0dG9uLWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgdmFyIGVkaXRCdXR0b24gPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJidXR0b25cIiwgXCJlZGl0LWJ1dHRvblwiLCBcIkVkaXRcIik7XG4gIHZhciBkZWxldGVCdXR0b24gPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJidXR0b25cIiwgXCJkZWxldGUtYnV0dG9uXCIsIFwiRGVsZXRlXCIpO1xuICBhcHBlbmRDaGlsZHJlbihlbGVtZW50Q29udGFpbmVyLCBbZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uXSk7XG4gIHJldHVybiBlbGVtZW50Q29udGFpbmVyXG59XG5cbi8vUmVtb3ZlcyBhbGwgdGhlIG5vdGVzIGN1cnJlbnRseSBkaXNwbGF5ZWQgaW4gdGhlIERPTVxuZnVuY3Rpb24gcmVtb3ZlRGlzcGxheWVkTm90ZXMgKCkge1xuICB2YXIgbm90ZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVzLWNvbnRhaW5lclwiKTtcbiAgd2hpbGUgKG5vdGVzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIG5vdGVzQ29udGFpbmVyLnJlbW92ZUNoaWxkKG5vdGVzQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH07XG59XG5cbi8vUmVtb3ZlcyB0aGUgZGVsZXRlZCBub3RlIG9iamVjdCBmcm9tIHRoZSBhcnJheVxuY29uc3QgcmVtb3ZlRWxlbWVudEJ5SWQgPSBmdW5jdGlvbiAoaWQsIG5vdGVzKSB7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IG5vdGUgPT4gbm90ZVtcImlkXCJdICE9PSBpZDtcbiAgcmV0dXJuIG5vdGVzLmZpbHRlcihjb25kaXRpb24pO1xufVxuXG4vL1VwZGF0ZXMgdGhlIHZhbHVlcyBvZiB0aGUgZWRpdGVkIG5vdGUgb2JqZWN0IGFuZCByZXR1cm5zIHRoZSB1cGRhdGVkIGFycmF5XG5jb25zdCBlZGl0RWxlbWVudEJ5SWQgPSBmdW5jdGlvbiAoaWQsIG5vdGVzKSB7XG4gIHZhciBuZXdOb3RlcyA9IFtdO1xuICBub3Rlcy5mb3JFYWNoKG5vdGUgPT4ge25vdGVbXCJpZFwiXSA9PT0gaWQgPyBuZXdOb3Rlcy5wdXNoKHVwZGF0ZU5vdGUobm90ZSkpIDogbmV3Tm90ZXMucHVzaChub3RlKX0pO1xuICByZXR1cm4gbmV3Tm90ZXM7XG59XG5cbmNvbnN0IHNlbGVjdEVsZW1lbnRCeUlkID0gZnVuY3Rpb24gKGlkLCBub3Rlcykge1xuICBsZXQgbmV3Tm90ZSA9IFwiXCI7XG4gIG5vdGVzLmZvckVhY2goZnVuY3Rpb24gKG5vdGUpIHtcbiAgICBpZiAobm90ZVtcImlkXCJdID09PSBpZCkge1xuICAgICAgbmV3Tm90ZSA9IG5vdGU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG5ld05vdGVcbn07XG5cbmNvbnN0IGFkYXB0Tm90ZXNEZWxldGVkUHJvamVjdHMgPSBmdW5jdGlvbiAocHJvamVjdHMsIG5vdGVzKSB7XG4gIHZhciBwcm9qZWN0TGlzdCA9IFtdO1xuICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdExpc3QucHVzaChwcm9qZWN0LnRpdGxlKSk7XG4gIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KVxuICB2YXIgbmV3Tm90ZXMgPSBbXTtcbiAgbm90ZXMuZm9yRWFjaChmdW5jdGlvbiAobm90ZSkge1xuICAgIGlmIChwcm9qZWN0TGlzdC5pbmNsdWRlcyhub3RlLnByb2plY3QpKSB7XG4gICAgICBuZXdOb3Rlcy5wdXNoKG5vdGUpO1xuICAgICAgY29uc29sZS5sb2cobm90ZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBub3RlLnByb2plY3QgPSBcIlwiO1xuICAgICAgY29uc29sZS5sb2cobm90ZSlcbiAgICAgIG5ld05vdGVzLnB1c2gobm90ZSk7XG4gICAgfVxuICB9KTtcbiAgZGlzcGxheU5vdGVzKG5ld05vdGVzKTtcbn1cblxuXG5leHBvcnQge05vdGUsXG4gICAgICAgIGdlbmVyYXRlTm90ZSxcbiAgICAgICAgZGlzcGxheU5vdGVzLFxuICAgICAgICBhZGFwdE5vdGVzRGVsZXRlZFByb2plY3RzLFxuICAgICAgICByZW1vdmVFbGVtZW50QnlJZCxcbiAgICAgICAgZWRpdEVsZW1lbnRCeUlkLFxuICAgICAgICBkaXNwbGF5RnVsbE5vdGUsXG4gICAgICAgIGRpc3BsYXlTbWFsbE5vdGV9O1xuIiwiaW1wb3J0IHthcHBlbmRDaGlsZHJlbiwgY3JlYXRlRWxlbWVudENsYXNzLCBzdG9yZUl0ZW0sIGFjY2Vzc1N0b3JlZEl0ZW19IGZyb20gJy4vdXRpbHMnXG5cbmxldCBwcm9qZWN0Q291bnQgPSBhY2Nlc3NTdG9yZWRJdGVtKFwicHJvamVjdENvdW50XCIsIFwibnVtYmVyXCIpID8gYWNjZXNzU3RvcmVkSXRlbShcInByb2plY3RDb3VudFwiLCBcIm51bWJlclwiKSA6IDM7XG5cbmNvbnN0IFByb2plY3QgPSBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGlkKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7dGl0bGUsIGlkfSk7XG4gIH07XG59XG5cbmNvbnN0IGdlbmVyYXRlUHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgcHJvamVjdENvdW50ICs9IDFcbiAgc3RvcmVJdGVtKHByb2plY3RDb3VudCwgXCJwcm9qZWN0Q291bnRcIiwgXCJudW1iZXJcIik7XG4gIHJldHVybiBuZXcgUHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1wcm9qZWN0XCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgYGlkLSR7cHJvamVjdENvdW50fWApO1xufVxuXG5jb25zdCBnZW5lcmF0ZVByb2plY3RzTGlzdCA9IGZ1bmN0aW9uIChwcm9qZWN0cykge1xuICB2YXIgcHJvamVjdExpc3QgPSBbXTtcbiAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3RMaXN0LnB1c2gocHJvamVjdC50aXRsZSkpO1xuICByZXR1cm4gcHJvamVjdExpc3Q7XG59XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9IGZ1bmN0aW9uIChwcm9qZWN0cykge1xuICByZW1vdmVEaXNwbGF5ZWRQcm9qZWN0cygpO1xuICBzdG9yZUl0ZW0ocHJvamVjdHMsIFwicHJvamVjdHNcIiwgXCJhcnJheVwiKTtcbiAgdmFyIHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1jb250YWluZXJcIik7XG4gIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7cHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdFNlY3Rpb24ocHJvamVjdCkpfSk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0U2VjdGlvbihwcm9qZWN0KSB7XG4gIHZhciBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGl2XCIsIFwicHJvamVjdC1jb250YWluZXJcIiwgXCJcIik7XG4gIHByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBwcm9qZWN0W1wiaWRcIl0pO1xuICB2YXIgcHJvamVjdFRpdGxlID0gY3JlYXRlRWxlbWVudENsYXNzKFwic3BhblwiLCBcInByb2plY3QtdGl0bGVcIiwgcHJvamVjdC50aXRsZSk7XG4gIHZhciBkZWxldGVQcm9qZWN0QnV0dG9uID0gY3JlYXRlRWxlbWVudENsYXNzKFwiYnV0dG9uXCIsIFwiZGVsZXRlLXByb2plY3QtYnV0dG9uXCIsIFwiRGVsZXRlIHByb2plY3RcIilcbiAgYXBwZW5kQ2hpbGRyZW4ocHJvamVjdENvbnRhaW5lciwgW3Byb2plY3RUaXRsZSwgZGVsZXRlUHJvamVjdEJ1dHRvbl0pO1xuICByZXR1cm4gcHJvamVjdENvbnRhaW5lclxufVxuXG5mdW5jdGlvbiByZW1vdmVEaXNwbGF5ZWRQcm9qZWN0cyAoKSB7XG4gIHZhciBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udGFpbmVyXCIpO1xuICB3aGlsZSAocHJvamVjdHNDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgcHJvamVjdHNDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdHNDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfTtcbn1cblxuZXhwb3J0IHtQcm9qZWN0LCBnZW5lcmF0ZVByb2plY3QsIGdlbmVyYXRlUHJvamVjdHNMaXN0LCBkaXNwbGF5UHJvamVjdHN9XG4iLCIvL0Z1bmN0aW9ucyB1c2VkIHRvIHF1aWNrbHkgY3JlYXRlIGVsZW1lbnRzIGluIEpTIGFuZCBhZGQgYXR0cmlidXRlc1xuY29uc3Qgc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uIChlbGVtZW50cywgYXR0cmlidXRlcykge1xuICBlbGVtZW50cyA9IEFycmF5LmlzQXJyYXkoZWxlbWVudHMpID8gZWxlbWVudHMgOiBbZWxlbWVudHNdO1xuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHIgPT4ge1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyaWJ1dGVzW2F0dHJdKTtcbiAgICB9KVxufSk7XG59XG5cbmNvbnN0IGFwcGVuZENoaWxkcmVuID0gZnVuY3Rpb24gKGVsZW1lbnQsIGNoaWxkcmVuKSB7XG4gIGNoaWxkcmVuID0gQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbiA6IFtjaGlsZHJlbl07XG4gIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH0pO1xufVxuXG5jb25zdCBjcmVhdGVFbGVtZW50Q2xhc3MgPSBmdW5jdGlvbihlbGVtZW50VHlwZSwgY2xhc3NOYW1lLCBpbm5lclRleHQpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcbiAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIG5ld0VsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJUZXh0O1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuY29uc3QgcmVtb3ZlQWxsQ2hpbGRyZW4gPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gIHdoaWxlIChjb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH07XG59XG5cbmNvbnN0IHN0b3JlSXRlbSA9IGZ1bmN0aW9uIChpdGVtLCBzdG9yZWRJdGVtTmFtZSwgdHlwZSkge1xuICBpZiAodHlwZSA9PT0gXCJhcnJheVwiKSB7XG4gIHZhciBzZXJpYWxpemVkQXJyYXkgPSBKU09OLnN0cmluZ2lmeShpdGVtKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmVkSXRlbU5hbWUsIHNlcmlhbGl6ZWRBcnJheSk7XG4gIH1cbiAgaWYgKHR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgbGV0IHZhbHVlQXNTdHJpbmcgPSBpdGVtLnRvU3RyaW5nKCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JlZEl0ZW1OYW1lLCB2YWx1ZUFzU3RyaW5nKTtcbiAgfVxufVxuXG5jb25zdCBhY2Nlc3NTdG9yZWRJdGVtID0gZnVuY3Rpb24gKHN0b3JlZEl0ZW1OYW1lLCB0eXBlKSB7XG4gIGlmICh0eXBlID09PSBcImFycmF5XCIpIHtcbiAgICB2YXIgc3RvcmVkQXJyYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yZWRJdGVtTmFtZSk7XG4gICAgdmFyIGRlc2VyaWFsaXplZE9iamVjdCA9IEpTT04ucGFyc2Uoc3RvcmVkQXJyYXkpO1xuICAgIHJldHVybiBkZXNlcmlhbGl6ZWRPYmplY3Q7XG4gIH1cbiAgaWYgKHR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICBsZXQgc3RvcmVkVmFsdWVBc1N0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JlZEl0ZW1OYW1lKTtcbiAgICBsZXQgcmV0cmlldmVkVmFsdWUgPSBwYXJzZUludChzdG9yZWRWYWx1ZUFzU3RyaW5nKTtcbiAgICByZXR1cm4gcmV0cmlldmVkVmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgc2V0QXR0cmlidXRlcyxcbiAgYXBwZW5kQ2hpbGRyZW4sXG4gIGNyZWF0ZUVsZW1lbnRDbGFzcyxcbiAgcmVtb3ZlQWxsQ2hpbGRyZW4sXG4gIHN0b3JlSXRlbSxcbiAgYWNjZXNzU3RvcmVkSXRlbVxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IGdlbmVyYXRlQmFzZUVsZW1lbnRzIGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7Tm90ZSwgZ2VuZXJhdGVOb3RlLCBkaXNwbGF5Tm90ZXMsIHJlbW92ZUVsZW1lbnRCeUlkLCBlZGl0RWxlbWVudEJ5SWQsIGFkYXB0Tm90ZXNEZWxldGVkUHJvamVjdHMsIGRpc3BsYXlGdWxsTm90ZSwgZGlzcGxheVNtYWxsTm90ZX0gZnJvbSAnLi9ub3RlJztcbi8vIGltcG9ydCB7aGFuZGxlQ3JlYXRlTm90ZU9wZXJhdGlvbiwgaGFuZGxlRWRpdE5vdGVPcGVyYXRpb24sIGhhbmRsZURlbGV0ZU5vdGVPcGVyYXRpb24sIGhhbmRsZUNyZWF0ZVByb2plY3RPcGVyYXRpb24sIGhhbmRsZURlbGV0ZVByb2plY3RPcGVyYXRpb259IGZyb20gJy4vZG9tJztcbmltcG9ydCB7IGFkYXB0RWRpdEZvcm1WYWx1ZXMsIHJlc2V0TmV3Rm9ybVZhbHVlcyB9IGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgeyBnZW5lcmF0ZVByb2plY3QsIGRpc3BsYXlQcm9qZWN0cywgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyBhY2Nlc3NTdG9yZWRJdGVtIH0gZnJvbSAnLi91dGlscyc7XG5cblxubGV0IG5vdGVzID0gYWNjZXNzU3RvcmVkSXRlbShcIm5vdGVzXCIsIFwiYXJyYXlcIikgPyBhY2Nlc3NTdG9yZWRJdGVtKFwibm90ZXNcIiwgXCJhcnJheVwiKSA6IFtdO1xubGV0IHByb2plY3RzID0gYWNjZXNzU3RvcmVkSXRlbShcInByb2plY3RzXCIsIFwiYXJyYXlcIikgPyBhY2Nlc3NTdG9yZWRJdGVtKFwicHJvamVjdHNcIiwgXCJhcnJheVwiKSA6IFtuZXcgUHJvamVjdChcIkdlbmVyYWxcIiwgXCJpZC0xXCIpLCBuZXcgUHJvamVjdChcIlN0dWR5XCIsIFwiaWQtMlwiKSwgbmV3IFByb2plY3QoXCJDaG9yZXNcIiwgXCJpZC0zXCIpXTtcbmxldCBpZCA9IFwiXCI7XG5nZW5lcmF0ZUJhc2VFbGVtZW50cyhwcm9qZWN0cyk7XG5kaXNwbGF5Tm90ZXMobm90ZXMpXG5kaXNwbGF5UHJvamVjdHMocHJvamVjdHMpOyAvL0dlbmVyYXRlIGFsbCB0aGUgYmFzZSBlbGVtZW50cyBmb3IgdGhlIERPTVxuXG5cbi8vUHJvamVjdHMgbG9naWNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgLy9OZXcgcHJvamVjdCBjb2RlXG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmV3LXByb2plY3RcIikpIHtcbiAgICB2YXIgbmV3UHJvamVjdGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3UHJvamVjdERpYWxvZ1wiKVxuICAgIG5ld1Byb2plY3RkaWFsb2cuc2hvd01vZGFsKCk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG9zZS1uZXctcHJvamVjdC1kaWFsb2dcIikpIHtcbiAgICBoYW5kbGVDcmVhdGVQcm9qZWN0T3BlcmF0aW9uKGV2ZW50KVxuICB9XG5cbiAgLy9EZWxldGUgcHJvamVjdCBjb2RlXG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlLXByb2plY3QtYnV0dG9uXCIpKSB7XG4gICAgcHJvamVjdHMgPSBoYW5kbGVEZWxldGVQcm9qZWN0T3BlcmF0aW9uKGV2ZW50LCBwcm9qZWN0cyk7XG4gIH1cbn0pO1xuXG4vL05vdGVzIGxvZ2ljXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIC8vTmV3IG5vdGUgcHJvamVjdFxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm5ldy1pdGVtXCIpKSB7XG4gICAgdmFyIG5ld05vdGVkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld05vdGVEaWFsb2dcIilcbiAgICByZXNldE5ld0Zvcm1WYWx1ZXMocHJvamVjdHMpO1xuICAgIG5ld05vdGVkaWFsb2cuc2hvd01vZGFsKCk7XG4gIH07XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2UtbmV3LW5vdGUtZGlhbG9nXCIpKSB7XG4gICAgaGFuZGxlQ3JlYXRlTm90ZU9wZXJhdGlvbihldmVudCk7XG4gIH07XG5cbiAgLy9EZWxldGUgbm90ZSBjb2RlXG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlLWJ1dHRvblwiKSkge1xuICAgIGhhbmRsZURlbGV0ZU5vdGVPcGVyYXRpb24oZXZlbnQpXG4gIH1cblxuICAvL0VkaXQgbm90ZSBjb2RlXG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWRpdC1idXR0b25cIikpIHtcbiAgICB2YXIgZWRpdE5vdGVEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXROb3RlRGlhbG9nXCIpO1xuICAgIGlkID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmlkO1xuICAgIGNvbnNvbGUubG9nKGlkKVxuICAgIGVkaXROb3RlRGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIGFkYXB0RWRpdEZvcm1WYWx1ZXMoaWQsIG5vdGVzLCBwcm9qZWN0cylcbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNsb3NlLWVkaXQtbm90ZS1kaWFsb2dcIikpIHtcbiAgICBoYW5kbGVFZGl0Tm90ZU9wZXJhdGlvbihldmVudCk7XG4gIH1cbn0pO1xuXG4vL1Nob3cgbGVzcy9tb3JlIG5vdGUgZWxlbWVudHMgbG9naWNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgLy9TaG93IGZ1bGwgbm90ZVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNob3ctbW9yZS1idXR0b25cIikpIHtcbiAgICBpZCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuaWQ7XG4gICAgZGlzcGxheUZ1bGxOb3RlKGlkLCBub3Rlcyk7XG4gIH1cbiAgLy9TaG93IHNtYWxsIG5vdGVcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93LWxlc3MtYnV0dG9uXCIpKSB7XG4gICAgaWQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LmlkO1xuICAgIGRpc3BsYXlTbWFsbE5vdGUoaWQsIG5vdGVzKTtcbiAgfTtcbn0pO1xuXG5cblxuLy9Ob3RlcyBET00gZnVuY3Rpb25zXG5mdW5jdGlvbiBoYW5kbGVDcmVhdGVOb3RlT3BlcmF0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIHZhciBuZXdOb3RlZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdOb3RlRGlhbG9nXCIpXG4gIHZhciBub3RlID0gZ2VuZXJhdGVOb3RlKCk7XG4gIG5ld05vdGVkaWFsb2cuY2xvc2UoKTtcbiAgbm90ZXMucHVzaChub3RlKTtcbiAgZGlzcGxheU5vdGVzKG5vdGVzKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZUVkaXROb3RlT3BlcmF0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIHZhciBlZGl0Tm90ZURpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdE5vdGVEaWFsb2dcIik7XG4gIG5vdGVzID0gZWRpdEVsZW1lbnRCeUlkKGlkLCBub3RlcylcbiAgZWRpdE5vdGVEaWFsb2cuY2xvc2UoKTtcbiAgZGlzcGxheU5vdGVzKG5vdGVzKTtcbn07XG5mdW5jdGlvbiBoYW5kbGVEZWxldGVOb3RlT3BlcmF0aW9uIChldmVudCkge1xuICB2YXIgaWQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaWQ7XG4gIG5vdGVzID0gcmVtb3ZlRWxlbWVudEJ5SWQoaWQsIG5vdGVzKTtcbiAgZGlzcGxheU5vdGVzKG5vdGVzKTtcbn07XG5cbi8vUHJvamVjdCBET00gZnVuY3Rpb25zXG5mdW5jdGlvbiBoYW5kbGVDcmVhdGVQcm9qZWN0T3BlcmF0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIHZhciBwcm9qZWN0ID0gZ2VuZXJhdGVQcm9qZWN0KCk7XG4gIHZhciBuZXdQcm9qZWN0ZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdQcm9qZWN0RGlhbG9nXCIpXG4gIG5ld1Byb2plY3RkaWFsb2cuY2xvc2UoKTtcbiAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgZGlzcGxheVByb2plY3RzKHByb2plY3RzKTtcbn07XG5mdW5jdGlvbiAgaGFuZGxlRGVsZXRlUHJvamVjdE9wZXJhdGlvbiAoZXZlbnQpIHtcbiAgdmFyIGlkID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pZDtcbiAgcHJvamVjdHMgPSByZW1vdmVFbGVtZW50QnlJZChpZCwgcHJvamVjdHMpO1xuICBkaXNwbGF5UHJvamVjdHMocHJvamVjdHMpO1xuICBhZGFwdE5vdGVzRGVsZXRlZFByb2plY3RzKHByb2plY3RzLCBub3Rlcyk7XG4gIHJldHVybiBwcm9qZWN0c1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==