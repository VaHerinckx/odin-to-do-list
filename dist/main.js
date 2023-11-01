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

body {
  margin: 0;
}

:root {
  font-family: "wotfard";
  --indigo: #8884FF;
  --white: #E3E3E3;
  --onyx: #373E40;
  background-color: var(--white);
}

input, select, textarea {
  padding: 5px 12px;
  font-size: 14px;
  line-height: 20px;
  color: #24292e;
  vertical-align: middle;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  outline: none;
  box-shadow: rgba(225, 228, 232, 0.2) 0px 1px 0px 0px inset;
  :focus{
      border-color: #0366d6;
      outline: none;
      box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  }

}

.content {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 100px 100%;
}


/* GROUP FORMATTING */

.delete-project-button, .edit-button, .delete-button, .show-more-button, .show-less-button, .close-new-note-dialog, .close-new-project-dialog {
  display: inline-block;
  outline: 0;
  cursor: pointer;
  border: none;
  /* padding: 0 56px; */
  /* height: 45px; */
  /* line-height: 45px; */
  border-radius: 7px;
  background-color: var(--indigo);
  color: white;
  font-weight: 400;
  /* font-size: 16px; */
  box-shadow: 0 4px 10px 0 rgb(0 118 255 / 39%);
  transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;
  :hover{
      background: rgba(0,118,255,0.9);
      box-shadow: 0 6px 20px rgb(0 118 255 / 23%);
  }
}


/* SIDE BAR FORMATTING */

.side-bar {
  height: calc(max(100vh, 100%));
  display: flex;
  flex-direction: column;
  background-color: var(--onyx);
  color: var(--white);
  grid-column: 1;
  grid-row: 1 / 3;
}

.new-project {
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: var(--white);
  align-self: center;
  color: var(--onyx);
  outline: 0;
  border: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 4px;
  font-size: 13px;
  height: 30px;
  padding: 0 20px;
  :hover {
      background-color: #0000001a;
  }

}

.project-value {
  text-align: center;
}

.projects-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
}

.project-container {
  display: block;
  position: relative;
  padding: 5px;
  border-radius: 6px;
  width: 80%;
  background-color: var(--white);
  align-self: center;
  color: var(--onyx);
}

.delete-project-button {
  position: absolute;
  top: 0;
  right: 0;
}



/* HEADER FORMATTING */

.header {
  grid-column: 2/3;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
}

.page-title {
  text-align: center;
  color: var(--onyx);
  margin: 0;
  margin-bottom: 5px;
  /* grid-column: 2/3;
  grid-row: 1; */
}

.new-item {
  /* margin-top: 30px;
  margin-bottom: 30px; */
  background-color: var(--onyx);
  align-self: center;
  color: var(--white);
  outline: 0;
  border: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 4px;
  font-size: 13px;
  height: 30px;
  padding: 0 20px;
  :hover {
      background-color: #0000001a;
  }
}


/* NOTES FORMATTING */

.project-group-container {
  background-color: var(--onyx);
  padding: 20px;
  overflow: hidden;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  gap: 10px;
  margin-bottom: 30px;
}

.notes-container {
  margin-top: 30px;
  overflow: hidden;
  display: grid;
  grid-column: 2;
  grid-row: 2;
  grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
  gap: 20px;
  justify-content: space-around;
}

.note-container {
  position: relative;
  overflow: hidden;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 10%;

}


.project-title {
  position: relative;
  text-align: center;
  display: block;
  margin: auto;
  padding: 5px;
}


.show-less-button {
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  padding: 0px;
}

.note-container div {
  display: flex;
  gap: 10px;
}

.note-container div *{
  width: 50%;

}


.note-container div *:first-child {
  display: flex;
  justify-content: center;
  text-transform: capitalize;
}

dialog div option {
  width: 400px;
}




/* Dialog formatting */
.form-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-container > div input,  .form-container > div select{
  width: 200px;
}

.close-new-note-dialog {
  display: inline-block;
  outline: 0;
  cursor: pointer;
  border: none;
  color: var(--white);
  /* padding: 0 56px; */
  /* height: 45px; */
  /* line-height: 45px; */
  border-radius: 7px;
  background-color: var(--indigo);
  color: white;
  font-weight: 400;
  /* font-size: 16px; */
  box-shadow: 0 4px 10px 0 rgb(0 118 255 / 39%);
  transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;
  :hover{
      background: rgba(0,118,255,0.9);
      box-shadow: 0 6px 20px rgb(0 118 255 / 23%);
}
}

.description {
  display: block;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"wotfard\";\n  src: url(\"Wotfard-Regular.otf\");\n}\n\nbody {\n  margin: 0;\n}\n\n:root {\n  font-family: \"wotfard\";\n  --indigo: #8884FF;\n  --white: #E3E3E3;\n  --onyx: #373E40;\n  background-color: var(--white);\n}\n\ninput, select, textarea {\n  padding: 5px 12px;\n  font-size: 14px;\n  line-height: 20px;\n  color: #24292e;\n  vertical-align: middle;\n  background-color: #ffffff;\n  background-repeat: no-repeat;\n  background-position: right 8px center;\n  border: 1px solid #e1e4e8;\n  border-radius: 6px;\n  outline: none;\n  box-shadow: rgba(225, 228, 232, 0.2) 0px 1px 0px 0px inset;\n  :focus{\n      border-color: #0366d6;\n      outline: none;\n      box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;\n  }\n\n}\n\n.content {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 100px 100%;\n}\n\n\n/* GROUP FORMATTING */\n\n.delete-project-button, .edit-button, .delete-button, .show-more-button, .show-less-button, .close-new-note-dialog, .close-new-project-dialog {\n  display: inline-block;\n  outline: 0;\n  cursor: pointer;\n  border: none;\n  /* padding: 0 56px; */\n  /* height: 45px; */\n  /* line-height: 45px; */\n  border-radius: 7px;\n  background-color: var(--indigo);\n  color: white;\n  font-weight: 400;\n  /* font-size: 16px; */\n  box-shadow: 0 4px 10px 0 rgb(0 118 255 / 39%);\n  transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;\n  :hover{\n      background: rgba(0,118,255,0.9);\n      box-shadow: 0 6px 20px rgb(0 118 255 / 23%);\n  }\n}\n\n\n/* SIDE BAR FORMATTING */\n\n.side-bar {\n  height: calc(max(100vh, 100%));\n  display: flex;\n  flex-direction: column;\n  background-color: var(--onyx);\n  color: var(--white);\n  grid-column: 1;\n  grid-row: 1 / 3;\n}\n\n.new-project {\n  margin-top: 30px;\n  margin-bottom: 30px;\n  background-color: var(--white);\n  align-self: center;\n  color: var(--onyx);\n  outline: 0;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n  border-radius: 4px;\n  font-size: 13px;\n  height: 30px;\n  padding: 0 20px;\n  :hover {\n      background-color: #0000001a;\n  }\n\n}\n\n.project-value {\n  text-align: center;\n}\n\n.projects-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  justify-content: flex-start;\n}\n\n.project-container {\n  display: block;\n  position: relative;\n  padding: 5px;\n  border-radius: 6px;\n  width: 80%;\n  background-color: var(--white);\n  align-self: center;\n  color: var(--onyx);\n}\n\n.delete-project-button {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n\n\n/* HEADER FORMATTING */\n\n.header {\n  grid-column: 2/3;\n  grid-row: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid black;\n}\n\n.page-title {\n  text-align: center;\n  color: var(--onyx);\n  margin: 0;\n  margin-bottom: 5px;\n  /* grid-column: 2/3;\n  grid-row: 1; */\n}\n\n.new-item {\n  /* margin-top: 30px;\n  margin-bottom: 30px; */\n  background-color: var(--onyx);\n  align-self: center;\n  color: var(--white);\n  outline: 0;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n  border-radius: 4px;\n  font-size: 13px;\n  height: 30px;\n  padding: 0 20px;\n  :hover {\n      background-color: #0000001a;\n  }\n}\n\n\n/* NOTES FORMATTING */\n\n.project-group-container {\n  background-color: var(--onyx);\n  padding: 20px;\n  overflow: hidden;\n  max-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  border-radius: 6px;\n  gap: 10px;\n  margin-bottom: 30px;\n}\n\n.notes-container {\n  margin-top: 30px;\n  overflow: hidden;\n  display: grid;\n  grid-column: 2;\n  grid-row: 2;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 200px));\n  gap: 20px;\n  justify-content: space-around;\n}\n\n.note-container {\n  position: relative;\n  overflow: hidden;\n  background-color: var(--white);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 5px;\n  border: 1px solid black;\n  border-radius: 10%;\n\n}\n\n\n.project-title {\n  position: relative;\n  text-align: center;\n  display: block;\n  margin: auto;\n  padding: 5px;\n}\n\n\n.show-less-button {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 30px;\n  padding: 0px;\n}\n\n.note-container div {\n  display: flex;\n  gap: 10px;\n}\n\n.note-container div *{\n  width: 50%;\n\n}\n\n\n.note-container div *:first-child {\n  display: flex;\n  justify-content: center;\n  text-transform: capitalize;\n}\n\ndialog div option {\n  width: 400px;\n}\n\n\n\n\n/* Dialog formatting */\n.form-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.form-container > div input,  .form-container > div select{\n  width: 200px;\n}\n\n.close-new-note-dialog {\n  display: inline-block;\n  outline: 0;\n  cursor: pointer;\n  border: none;\n  color: var(--white);\n  /* padding: 0 56px; */\n  /* height: 45px; */\n  /* line-height: 45px; */\n  border-radius: 7px;\n  background-color: var(--indigo);\n  color: white;\n  font-weight: 400;\n  /* font-size: 16px; */\n  box-shadow: 0 4px 10px 0 rgb(0 118 255 / 39%);\n  transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;\n  :hover{\n      background: rgba(0,118,255,0.9);\n      box-shadow: 0 6px 20px rgb(0 118 255 / 23%);\n}\n}\n\n.description {\n  display: block;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   resetNewNoteFormValues: () => (/* binding */ resetNewNoteFormValues),
/* harmony export */   resetNewProjectFormValues: () => (/* binding */ resetNewProjectFormValues)
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
  let projectContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("div", "project-form-container", "");
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
  let newProjectContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("div", "new-project-form-container", "");
  let newProjectLabel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("label", "new-project-form", "New Project: ");
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(newProjectLabel, {"for" : "new-project-form"});
  let newProjectInput = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("input", "new-project-form", "");
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(newProjectInput, {"id" : "new-project-form",
                             "name" : "new-project-form",
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

const resetNewNoteFormValues = function (projects) {
  document.querySelector("#title-new").value = "";
  document.querySelector("#date-new").value = "";
  document.querySelector("#status-new").value = "";
  document.querySelector("#priority-new").value = "";
  document.querySelector("#description-new").value = "";
  adaptProjectOptions("#project-new", projects)
  document.querySelector("#project-new").value = "";
}

const resetNewProjectFormValues = function () {
  document.querySelector("#new-project-form").value = "";
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
  var headerContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("div", "header", "");
  var sideBarContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("div", "side-bar", "");
  var pageTitle = gnPageTitle();
  var newItemButton = gnNewItemButton();
  var newProjectButton = gnNewProjectButton();
  var projectsContainer = gnProjectsContainer();
  var notesContainer = gnNotesContainer();
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(headerContainer, [pageTitle, newItemButton])
  ;(0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(sideBarContainer, [newProjectButton, projectsContainer])
  ;(0,_utils__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(container, [headerContainer, sideBarContainer, notesContainer]);
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
    var projectContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("div", "project-group-container", "");
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
                                 createNoteSection("description", note["notes"]),
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
  return new Project(document.querySelector("#new-project-form").value,
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
  var deleteProjectButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementClass)("button", "delete-project-button", "X")
  projectTitle.appendChild(deleteProjectButton)
  projectContainer.append(projectTitle);
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
    ;(0,_form__WEBPACK_IMPORTED_MODULE_3__.resetNewProjectFormValues)();
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
    ;(0,_form__WEBPACK_IMPORTED_MODULE_3__.resetNewNoteFormValues)(projects);
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
  var id = event.target.parentNode.parentNode.dataset.id;
  projects = (0,_note__WEBPACK_IMPORTED_MODULE_2__.removeElementById)(id, projects);
  (0,_project__WEBPACK_IMPORTED_MODULE_4__.displayProjects)(projects);
  (0,_note__WEBPACK_IMPORTED_MODULE_2__.adaptNotesDeletedProjects)(projects, notes);
  return projects
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxNQUFNLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsS0FBSyxZQUFZLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsUUFBUSxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLE1BQU0sT0FBTyxLQUFLLEtBQUssT0FBTyxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsS0FBSyxZQUFZLE1BQU0sT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGNBQWMsUUFBUSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFNBQVMsWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLFlBQVks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QXFCLHdEQUFnQjtBQUNqRSxlQUFlLHdEQUFnQix3QkFBd0Isd0RBQWdCLDZCQUE2Qiw2Q0FBTyx5QkFBeUIsNkNBQU8sdUJBQXVCLDZDQUFPO0FBQ3pLO0FBQ0Esc0RBQW9CO0FBQ3BCLG1EQUFZO0FBQ1osMERBQWUsWUFBWTs7O0FBRzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUF5QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBc0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFnQjtBQUNwQjtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbURBQVk7QUFDekI7QUFDQTtBQUNBLEVBQUUsbURBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsc0RBQWU7QUFDekI7QUFDQSxFQUFFLG1EQUFZO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsVUFBVSx3REFBaUI7QUFDM0IsRUFBRSxtREFBWTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix5REFBZTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxFQUFFLHlEQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsd0RBQWlCO0FBQzlCLEVBQUUseURBQWU7QUFDakIsRUFBRSxnRUFBeUI7QUFDM0I7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbm90ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIldvdGZhcmQtUmVndWxhci5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJ3b3RmYXJkXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG46cm9vdCB7XG4gIGZvbnQtZmFtaWx5OiBcIndvdGZhcmRcIjtcbiAgLS1pbmRpZ286ICM4ODg0RkY7XG4gIC0td2hpdGU6ICNFM0UzRTM7XG4gIC0tb255eDogIzM3M0U0MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzI0MjkyZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgOHB4IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTRlODtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiByZ2JhKDIyNSwgMjI4LCAyMzIsIDAuMikgMHB4IDFweCAwcHggMHB4IGluc2V0O1xuICA6Zm9jdXN7XG4gICAgICBib3JkZXItY29sb3I6ICMwMzY2ZDY7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogcmdiYSgzLCAxMDIsIDIxNCwgMC4zKSAwcHggMHB4IDBweCAzcHg7XG4gIH1cblxufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxMDAlO1xufVxuXG5cbi8qIEdST1VQIEZPUk1BVFRJTkcgKi9cblxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbiwgLmVkaXQtYnV0dG9uLCAuZGVsZXRlLWJ1dHRvbiwgLnNob3ctbW9yZS1idXR0b24sIC5zaG93LWxlc3MtYnV0dG9uLCAuY2xvc2UtbmV3LW5vdGUtZGlhbG9nLCAuY2xvc2UtbmV3LXByb2plY3QtZGlhbG9nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgLyogcGFkZGluZzogMCA1NnB4OyAqL1xuICAvKiBoZWlnaHQ6IDQ1cHg7ICovXG4gIC8qIGxpbmUtaGVpZ2h0OiA0NXB4OyAqL1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluZGlnbyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLyogZm9udC1zaXplOiAxNnB4OyAqL1xuICBib3gtc2hhZG93OiAwIDRweCAxMHB4IDAgcmdiKDAgMTE4IDI1NSAvIDM5JSk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLGNvbG9yIDAuMnMgZWFzZSxib3gtc2hhZG93IDAuMnMgZWFzZTtcbiAgOmhvdmVye1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDExOCwyNTUsMC45KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiKDAgMTE4IDI1NSAvIDIzJSk7XG4gIH1cbn1cblxuXG4vKiBTSURFIEJBUiBGT1JNQVRUSU5HICovXG5cbi5zaWRlLWJhciB7XG4gIGhlaWdodDogY2FsYyhtYXgoMTAwdmgsIDEwMCUpKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb255eCk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMSAvIDM7XG59XG5cbi5uZXctcHJvamVjdCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tb255eCk7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMWE7XG4gIH1cblxufVxuXG4ucHJvamVjdC12YWx1ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4ucHJvamVjdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgd2lkdGg6IDgwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1vbnl4KTtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbn1cblxuXG5cbi8qIEhFQURFUiBGT1JNQVRUSU5HICovXG5cbi5oZWFkZXIge1xuICBncmlkLWNvbHVtbjogMi8zO1xuICBncmlkLXJvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuLnBhZ2UtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1vbnl4KTtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIC8qIGdyaWQtY29sdW1uOiAyLzM7XG4gIGdyaWQtcm93OiAxOyAqL1xufVxuXG4ubmV3LWl0ZW0ge1xuICAvKiBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4OyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vbnl4KTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBvdXRsaW5lOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGhlaWdodDogMzBweDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICA6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDFhO1xuICB9XG59XG5cblxuLyogTk9URVMgRk9STUFUVElORyAqL1xuXG4ucHJvamVjdC1ncm91cC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vbnl4KTtcbiAgcGFkZGluZzogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ubm90ZXMtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1jb2x1bW46IDI7XG4gIGdyaWQtcm93OiAyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAyMDBweCkpO1xuICBnYXA6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4ubm90ZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG5cbn1cblxuXG4ucHJvamVjdC10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cblxuLnNob3ctbGVzcy1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAzMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5ub3RlLWNvbnRhaW5lciBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG59XG5cbi5ub3RlLWNvbnRhaW5lciBkaXYgKntcbiAgd2lkdGg6IDUwJTtcblxufVxuXG5cbi5ub3RlLWNvbnRhaW5lciBkaXYgKjpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuZGlhbG9nIGRpdiBvcHRpb24ge1xuICB3aWR0aDogNDAwcHg7XG59XG5cblxuXG5cbi8qIERpYWxvZyBmb3JtYXR0aW5nICovXG4uZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG5cbi5mb3JtLWNvbnRhaW5lciA+IGRpdiBpbnB1dCwgIC5mb3JtLWNvbnRhaW5lciA+IGRpdiBzZWxlY3R7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLmNsb3NlLW5ldy1ub3RlLWRpYWxvZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIC8qIHBhZGRpbmc6IDAgNTZweDsgKi9cbiAgLyogaGVpZ2h0OiA0NXB4OyAqL1xuICAvKiBsaW5lLWhlaWdodDogNDVweDsgKi9cbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRpZ28pO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC8qIGZvbnQtc2l6ZTogMTZweDsgKi9cbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCAwIHJnYigwIDExOCAyNTUgLyAzOSUpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZSxjb2xvciAwLjJzIGVhc2UsYm94LXNoYWRvdyAwLjJzIGVhc2U7XG4gIDpob3ZlcntcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwxMTgsMjU1LDAuOSk7XG4gICAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYigwIDExOCAyNTUgLyAyMyUpO1xufVxufVxuXG4uZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQStCO0FBQ2pDOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixxQ0FBcUM7RUFDckMseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsMERBQTBEO0VBQzFEO01BQ0kscUJBQXFCO01BQ3JCLGFBQWE7TUFDYixrREFBa0Q7RUFDdEQ7O0FBRUY7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDhCQUE4QjtBQUNoQzs7O0FBR0EscUJBQXFCOztBQUVyQjtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsZUFBZTtFQUNmLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLDZDQUE2QztFQUM3QyxxRUFBcUU7RUFDckU7TUFDSSwrQkFBK0I7TUFDL0IsMkNBQTJDO0VBQy9DO0FBQ0Y7OztBQUdBLHdCQUF3Qjs7QUFFeEI7RUFDRSw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtFQUNmO01BQ0ksMkJBQTJCO0VBQy9COztBQUVGOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtBQUNWOzs7O0FBSUEsc0JBQXNCOztBQUV0QjtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGtCQUFrQjtFQUNsQjtnQkFDYztBQUNoQjs7QUFFQTtFQUNFO3dCQUNzQjtFQUN0Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtFQUNmO01BQ0ksMkJBQTJCO0VBQy9CO0FBQ0Y7OztBQUdBLHFCQUFxQjs7QUFFckI7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxXQUFXO0VBQ1gsNkRBQTZEO0VBQzdELFNBQVM7RUFDVCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjs7QUFFcEI7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7QUFDZDs7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7O0FBRVo7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7Ozs7O0FBS0Esc0JBQXNCO0FBQ3RCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsNkNBQTZDO0VBQzdDLHFFQUFxRTtFQUNyRTtNQUNJLCtCQUErQjtNQUMvQiwyQ0FBMkM7QUFDakQ7QUFDQTs7QUFFQTtFQUNFLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIndvdGZhcmRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIldvdGZhcmQtUmVndWxhci5vdGZcXFwiKTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwid290ZmFyZFxcXCI7XFxuICAtLWluZGlnbzogIzg4ODRGRjtcXG4gIC0td2hpdGU6ICNFM0UzRTM7XFxuICAtLW9ueXg6ICMzNzNFNDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbmlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDVweCAxMnB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBjb2xvcjogIzI0MjkyZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDhweCBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTFlNGU4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMjI1LCAyMjgsIDIzMiwgMC4yKSAwcHggMXB4IDBweCAwcHggaW5zZXQ7XFxuICA6Zm9jdXN7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjMDM2NmQ2O1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgYm94LXNoYWRvdzogcmdiYSgzLCAxMDIsIDIxNCwgMC4zKSAwcHggMHB4IDBweCAzcHg7XFxuICB9XFxuXFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDEwMCU7XFxufVxcblxcblxcbi8qIEdST1VQIEZPUk1BVFRJTkcgKi9cXG5cXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uLCAuZWRpdC1idXR0b24sIC5kZWxldGUtYnV0dG9uLCAuc2hvdy1tb3JlLWJ1dHRvbiwgLnNob3ctbGVzcy1idXR0b24sIC5jbG9zZS1uZXctbm90ZS1kaWFsb2csIC5jbG9zZS1uZXctcHJvamVjdC1kaWFsb2cge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgb3V0bGluZTogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIC8qIHBhZGRpbmc6IDAgNTZweDsgKi9cXG4gIC8qIGhlaWdodDogNDVweDsgKi9cXG4gIC8qIGxpbmUtaGVpZ2h0OiA0NXB4OyAqL1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAvKiBmb250LXNpemU6IDE2cHg7ICovXFxuICBib3gtc2hhZG93OiAwIDRweCAxMHB4IDAgcmdiKDAgMTE4IDI1NSAvIDM5JSk7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZSxjb2xvciAwLjJzIGVhc2UsYm94LXNoYWRvdyAwLjJzIGVhc2U7XFxuICA6aG92ZXJ7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDExOCwyNTUsMC45KTtcXG4gICAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYigwIDExOCAyNTUgLyAyMyUpO1xcbiAgfVxcbn1cXG5cXG5cXG4vKiBTSURFIEJBUiBGT1JNQVRUSU5HICovXFxuXFxuLnNpZGUtYmFyIHtcXG4gIGhlaWdodDogY2FsYyhtYXgoMTAwdmgsIDEwMCUpKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb255eCk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMSAvIDM7XFxufVxcblxcbi5uZXctcHJvamVjdCB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1vbnl4KTtcXG4gIG91dGxpbmU6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbiAgOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMWE7XFxuICB9XFxuXFxufVxcblxcbi5wcm9qZWN0LXZhbHVlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1vbnl4KTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG59XFxuXFxuXFxuXFxuLyogSEVBREVSIEZPUk1BVFRJTkcgKi9cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucGFnZS10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tb255eCk7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAvKiBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDE7ICovXFxufVxcblxcbi5uZXctaXRlbSB7XFxuICAvKiBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9ueXgpO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIG91dGxpbmU6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbiAgOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMWE7XFxuICB9XFxufVxcblxcblxcbi8qIE5PVEVTIEZPUk1BVFRJTkcgKi9cXG5cXG4ucHJvamVjdC1ncm91cC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb255eCk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4ubm90ZXMtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAyMDBweCkpO1xcbiAgZ2FwOiAyMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5ub3RlLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG5cXG59XFxuXFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcblxcbi5zaG93LWxlc3MtYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi5ub3RlLWNvbnRhaW5lciBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLm5vdGUtY29udGFpbmVyIGRpdiAqe1xcbiAgd2lkdGg6IDUwJTtcXG5cXG59XFxuXFxuXFxuLm5vdGUtY29udGFpbmVyIGRpdiAqOmZpcnN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG5kaWFsb2cgZGl2IG9wdGlvbiB7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcblxcblxcblxcblxcbi8qIERpYWxvZyBmb3JtYXR0aW5nICovXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgPiBkaXYgaW5wdXQsICAuZm9ybS1jb250YWluZXIgPiBkaXYgc2VsZWN0e1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uY2xvc2UtbmV3LW5vdGUtZGlhbG9nIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG91dGxpbmU6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgLyogcGFkZGluZzogMCA1NnB4OyAqL1xcbiAgLyogaGVpZ2h0OiA0NXB4OyAqL1xcbiAgLyogbGluZS1oZWlnaHQ6IDQ1cHg7ICovXFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRpZ28pO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIC8qIGZvbnQtc2l6ZTogMTZweDsgKi9cXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggMCByZ2IoMCAxMTggMjU1IC8gMzklKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLGNvbG9yIDAuMnMgZWFzZSxib3gtc2hhZG93IDAuMnMgZWFzZTtcXG4gIDpob3ZlcntcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMTE4LDI1NSwwLjkpO1xcbiAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiKDAgMTE4IDI1NSAvIDIzJSk7XFxufVxcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge3NldEF0dHJpYnV0ZXMsIGFwcGVuZENoaWxkcmVuLCBjcmVhdGVFbGVtZW50Q2xhc3MsIHJlbW92ZUFsbENoaWxkcmVufSBmcm9tICcuL3V0aWxzJ1xuXG5cbi8vIEFnZ3JlZ2F0ZSB0aGUgZm9ybSBlbGVtZW50cyB0byBjcmVhdGUgdGhlIHR3byBmb3JtcyAobmV3IG5vdGUgYW5kIGVkaXQgbm90ZSlcblxuY29uc3QgZ2VuZXJhdGVOZXdOb3RlRm9ybSA9IGZ1bmN0aW9uKHByb2plY3RzKSB7XG4gIHZhciBkaWFsb2cgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJkaWFsb2dcIiwgXCJuZXdOb3RlRGlhbG9nXCIsIFwiXCIpO1xuICB2YXIgZm9ybUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImZvcm1cIiwgXCJmb3JtLWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgdmFyIGZvcm1PYmplY3RpdmUgPSBcIm5ld1wiXG4gIGZvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiXCIpO1xuICBhcHBlbmRDaGlsZHJlbihmb3JtQ29udGFpbmVyLCBbZ2VuZXJhdGVUaXRsZUNvbnRhaW5lcihmb3JtT2JqZWN0aXZlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGF0ZUNvbnRhaW5lcihmb3JtT2JqZWN0aXZlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGVzY0NvbnRhaW5lcihmb3JtT2JqZWN0aXZlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlUHJpb3JpdHlDb250YWluZXIoZm9ybU9iamVjdGl2ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZVN0YXR1c0NvbnRhaW5lcihmb3JtT2JqZWN0aXZlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlUHJvamVjdENvbnRhaW5lcihmb3JtT2JqZWN0aXZlLCBwcm9qZWN0cyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUNsb3NlQnV0dG9uKGZvcm1PYmplY3RpdmUpXSk7XG4gIGRpYWxvZy5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgcmV0dXJuIGRpYWxvZ1xufVxuXG5jb25zdCBnZW5lcmF0ZUVkaXROb3RlRm9ybSA9IGZ1bmN0aW9uKHByb2plY3RzKSB7XG4gIHZhciBkaWFsb2cgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJkaWFsb2dcIiwgXCJlZGl0Tm90ZURpYWxvZ1wiLCBcIlwiKTtcbiAgdmFyIGZvcm1Db250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJmb3JtXCIsIFwiZm9ybS1jb250YWluZXJcIiwgXCJcIik7XG4gIHZhciBmb3JtT2JqZWN0aXZlID0gXCJlZGl0XCJcbiAgZm9ybUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJcIik7XG4gIGFwcGVuZENoaWxkcmVuKGZvcm1Db250YWluZXIsIFtnZW5lcmF0ZVRpdGxlQ29udGFpbmVyKGZvcm1PYmplY3RpdmUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVEYXRlQ29udGFpbmVyKGZvcm1PYmplY3RpdmUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVEZXNjQ29udGFpbmVyKGZvcm1PYmplY3RpdmUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVQcmlvcml0eUNvbnRhaW5lcihmb3JtT2JqZWN0aXZlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlU3RhdHVzQ29udGFpbmVyKGZvcm1PYmplY3RpdmUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVQcm9qZWN0Q29udGFpbmVyKGZvcm1PYmplY3RpdmUsIHByb2plY3RzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlQ2xvc2VCdXR0b24oZm9ybU9iamVjdGl2ZSldKTtcbiAgZGlhbG9nLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuICByZXR1cm4gZGlhbG9nXG59XG5cbmNvbnN0IGdlbmVyYXRlTmV3UHJvamVjdEZvcm0gPSBmdW5jdGlvbigpIHtcbiAgdmFyIGRpYWxvZyA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpYWxvZ1wiLCBcIm5ld1Byb2plY3REaWFsb2dcIiwgXCJcIik7XG4gIHZhciBmb3JtQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZm9ybVwiLCBcImZvcm0tY29udGFpbmVyXCIsIFwiXCIpO1xuICBmb3JtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIlwiKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZU5ld1Byb2plY3RDb250YWluZXIoKSk7XG4gIGRpYWxvZy5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgcmV0dXJuIGRpYWxvZ1xufVxuXG5cblxuLy8gR2VuZXJhdGUgaW5kaXZpZHVhbGx5IHRoZSBkaWZmZXJlbnQgZWxlbWVudHMgb2YgdGhlIGZvcm1zXG5cbmZ1bmN0aW9uIGdlbmVyYXRlVGl0bGVDb250YWluZXIgKGZvcm1PYmplY3RpdmUpIHtcbiAgbGV0IHRpdGxlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGl2XCIsIFwidGl0bGUtY29udGFpbmVyXCIsIFwiXCIpO1xuICBsZXQgdGl0bGVMYWJlbCA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImxhYmVsXCIsIFwidGl0bGVcIiwgXCJUaXRsZTogXCIpO1xuICBzZXRBdHRyaWJ1dGVzKHRpdGxlTGFiZWwsIHtcImZvclwiIDogXCJ0aXRsZVwifSk7XG4gIGxldCB0aXRsZUlucHV0ID0gY3JlYXRlRWxlbWVudENsYXNzKFwiaW5wdXRcIiwgXCJ0aXRsZVwiLCBcIlwiKTtcbiAgc2V0QXR0cmlidXRlcyh0aXRsZUlucHV0LCB7XCJpZFwiIDogYHRpdGxlLSR7Zm9ybU9iamVjdGl2ZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIiA6IFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCIgOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiIDogXCJEbyBsYXVuZHJ5XCJ9KTtcbiAgYXBwZW5kQ2hpbGRyZW4odGl0bGVDb250YWluZXIsIFt0aXRsZUxhYmVsLCB0aXRsZUlucHV0XSk7XG4gIHJldHVybiB0aXRsZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVEZXNjQ29udGFpbmVyIChmb3JtT2JqZWN0aXZlKSB7XG4gIGxldCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpdlwiLCBcImRlc2NyaXB0aW9uLWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgbGV0IGRlc2NyaXB0aW9uTGFiZWwgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJsYWJlbFwiLCBcImRlc2NyaXB0aW9uXCIsIFwiRGVzY3JpcHRpb246IFwiKTtcbiAgc2V0QXR0cmlidXRlcyhkZXNjcmlwdGlvbkxhYmVsLCB7XCJmb3JcIiA6IFwiZGVzY3JpcHRpb25cIn0pO1xuICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcInRleHRhcmVhXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJcIik7XG4gIHNldEF0dHJpYnV0ZXMoZGVzY3JpcHRpb25JbnB1dCwge1wiaWRcIiA6IGBkZXNjcmlwdGlvbi0ke2Zvcm1PYmplY3RpdmV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCIgOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sc1wiIDogXCIzMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvd3NcIiA6IFwiN1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsYWNlaG9sZGVyXCIgOiBcIldhc2ggYWxsIGJsYWNrIGNsb3RoZXNcIn0pO1xuICBhcHBlbmRDaGlsZHJlbihkZXNjcmlwdGlvbkNvbnRhaW5lciwgW2Rlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXRdKTtcbiAgcmV0dXJuIGRlc2NyaXB0aW9uQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZURhdGVDb250YWluZXIgKGZvcm1PYmplY3RpdmUpIHtcbiAgbGV0IGRhdGVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJkaXZcIiwgXCJkYXRlLWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgbGV0IGRhdGVMYWJlbCA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImxhYmVsXCIsIFwiZGF0ZVwiLCBcIkR1ZSBkYXRlOiBcIik7XG4gIHNldEF0dHJpYnV0ZXMoZGF0ZUxhYmVsLCB7XCJmb3JcIiA6IFwiZGF0ZVwifSk7XG4gIGxldCBkYXRlSW5wdXQgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJpbnB1dFwiLCBcImRhdGVcIiwgXCJcIik7XG4gIHNldEF0dHJpYnV0ZXMoZGF0ZUlucHV0LCB7XCJpZFwiIDogYGRhdGUtJHtmb3JtT2JqZWN0aXZlfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiIDogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiIDogXCJkYXRlXCJ9KTtcbiAgYXBwZW5kQ2hpbGRyZW4oZGF0ZUNvbnRhaW5lciwgW2RhdGVMYWJlbCwgZGF0ZUlucHV0XSk7XG4gIHJldHVybiBkYXRlQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVByaW9yaXR5Q29udGFpbmVyIChmb3JtT2JqZWN0aXZlKSB7XG4gIGxldCBwcmlvcml0eUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpdlwiLCBcInByaW9yaXR5LWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgbGV0IHByaW9yaXR5TGFiZWwgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJsYWJlbFwiLCBcInByaW9yaXR5XCIsIFwiUHJpb3JpdHk6IFwiKTtcbiAgc2V0QXR0cmlidXRlcyhwcmlvcml0eUxhYmVsLCB7XCJmb3JcIiA6IFwicHJpb3JpdHlcIn0pO1xuICBsZXQgcHJpb3JpdHlJbnB1dCA9IGdlbmVyYXRlT3B0aW9uRWxlbWVudHMoXCJwcmlvcml0eVwiLCBbXCJWZXJ5IGltcG9ydGFudFwiLCBcIkltcG9ydGFudFwiLCBcIk5vcm1hbFwiLCBcIk5vdCBpbXBvcnRhbnRcIl0sIGZvcm1PYmplY3RpdmUsIFwiTm9ybWFsXCIpXG4gIGFwcGVuZENoaWxkcmVuKHByaW9yaXR5Q29udGFpbmVyLCBbcHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlJbnB1dF0pO1xuICByZXR1cm4gcHJpb3JpdHlDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU3RhdHVzQ29udGFpbmVyIChmb3JtT2JqZWN0aXZlKSB7XG4gIGxldCBzdGF0dXNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJkaXZcIiwgXCJzdGF0dXMtY29udGFpbmVyXCIsIFwiXCIpO1xuICBsZXQgc3RhdHVzTGFiZWwgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJsYWJlbFwiLCBcInN0YXR1c1wiLCBcIlN0YXR1czogXCIpO1xuICBzZXRBdHRyaWJ1dGVzKHN0YXR1c0xhYmVsLCB7XCJmb3JcIiA6IFwic3RhdHVzXCJ9KTtcbiAgbGV0IHN0YXR1c0lucHV0ID0gZ2VuZXJhdGVPcHRpb25FbGVtZW50cyhcInN0YXR1c1wiLCBbXCJOb3Qgc3RhcnRlZFwiLCBcIkRvaW5nXCIsIFwiRG9uZVwiXSwgZm9ybU9iamVjdGl2ZSwgXCJEb2luZ1wiKVxuICBhcHBlbmRDaGlsZHJlbihzdGF0dXNDb250YWluZXIsIFtzdGF0dXNMYWJlbCwgc3RhdHVzSW5wdXRdKTtcbiAgcmV0dXJuIHN0YXR1c0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0Q29udGFpbmVyIChmb3JtT2JqZWN0aXZlLCBwcm9qZWN0cykge1xuICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpdlwiLCBcInByb2plY3QtZm9ybS1jb250YWluZXJcIiwgXCJcIik7XG4gIGxldCBwcm9qZWN0TGFiZWwgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJsYWJlbFwiLCBcInByb2plY3RcIiwgXCJQcm9qZWN0OiBcIik7XG4gIHNldEF0dHJpYnV0ZXMocHJvamVjdExhYmVsLCB7XCJmb3JcIiA6IFwicHJvamVjdFwifSk7XG4gIHZhciBwcm9qZWN0TGlzdCA9IFtdO1xuICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdExpc3QucHVzaChwcm9qZWN0LnRpdGxlKSk7XG4gIGxldCBwcm9qZWN0SW5wdXQgPSBnZW5lcmF0ZU9wdGlvbkVsZW1lbnRzKFwicHJvamVjdFwiLCBwcm9qZWN0TGlzdCwgZm9ybU9iamVjdGl2ZSwgXCJHZW5lcmFsXCIpXG4gIGFwcGVuZENoaWxkcmVuKHByb2plY3RDb250YWluZXIsIFtwcm9qZWN0TGFiZWwsIHByb2plY3RJbnB1dF0pO1xuICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcbn1cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNsb3NlQnV0dG9uIChmb3JtT2JqZWN0aXZlKSB7XG4gIGxldCBidXR0b24gPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJidXR0b25cIiwgYGNsb3NlLSR7Zm9ybU9iamVjdGl2ZX0tbm90ZS1kaWFsb2dgLCBgJHtmb3JtT2JqZWN0aXZlfSBub3RlYClcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGBjbG9zZSR7Zm9ybU9iamVjdGl2ZX1Ob3RlRGlhbG9nYClcbiAgcmV0dXJuIGJ1dHRvblxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZU5ld1Byb2plY3RDb250YWluZXIgKCkge1xuICBsZXQgbmV3UHJvamVjdENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpdlwiLCBcIm5ldy1wcm9qZWN0LWZvcm0tY29udGFpbmVyXCIsIFwiXCIpO1xuICBsZXQgbmV3UHJvamVjdExhYmVsID0gY3JlYXRlRWxlbWVudENsYXNzKFwibGFiZWxcIiwgXCJuZXctcHJvamVjdC1mb3JtXCIsIFwiTmV3IFByb2plY3Q6IFwiKTtcbiAgc2V0QXR0cmlidXRlcyhuZXdQcm9qZWN0TGFiZWwsIHtcImZvclwiIDogXCJuZXctcHJvamVjdC1mb3JtXCJ9KTtcbiAgbGV0IG5ld1Byb2plY3RJbnB1dCA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImlucHV0XCIsIFwibmV3LXByb2plY3QtZm9ybVwiLCBcIlwiKTtcbiAgc2V0QXR0cmlidXRlcyhuZXdQcm9qZWN0SW5wdXQsIHtcImlkXCIgOiBcIm5ldy1wcm9qZWN0LWZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCIgOiBcIm5ldy1wcm9qZWN0LWZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCIgOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiIDogXCJTcG9ydFwifSk7XG4gIHZhciBidXR0b24gPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJidXR0b25cIiwgYGNsb3NlLW5ldy1wcm9qZWN0LWRpYWxvZ2AsIGBhZGQgbmV3IHByb2plY3RgKVxuICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGNsb3NlTmV3UHJvamVjdERpYWxvZ2ApXG4gIGFwcGVuZENoaWxkcmVuKG5ld1Byb2plY3RDb250YWluZXIsIFtuZXdQcm9qZWN0TGFiZWwsIG5ld1Byb2plY3RJbnB1dCwgYnV0dG9uXSk7XG4gIHJldHVybiBuZXdQcm9qZWN0Q29udGFpbmVyO1xufVxuXG5cbi8vIEZ1bmN0aW9ucyB0byBhdm9pZCByZWR1bmRhbnQgY29kZVxuZnVuY3Rpb24gZ2VuZXJhdGVPcHRpb25FbGVtZW50cyAoaW5wdXRDbGFzcywgb3B0aW9uVmFsdWVzLCBmb3JtT2JqZWN0aXZlKSB7XG4gIHZhciBpbnB1dEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJzZWxlY3RcIiwgaW5wdXRDbGFzcywgXCJcIik7XG4gIHNldEF0dHJpYnV0ZXMoaW5wdXRFbGVtZW50LCB7XCJpZFwiIDogYCR7aW5wdXRDbGFzc30tJHtmb3JtT2JqZWN0aXZlfWB9KTtcbiAgb3B0aW9uVmFsdWVzLmZvckVhY2goKG9wdGlvbikgPT4gaW5wdXRFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbkVsZW1lbnQob3B0aW9uKSkpO1xuICByZXR1cm4gaW5wdXRFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPcHRpb25FbGVtZW50KHZhbHVlKSB7XG4gIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdmFsdWUpO1xuICBvcHRpb24uaW5uZXJUZXh0ID0gdmFsdWU7XG4gIHJldHVybiBvcHRpb247XG59XG5cblxuLy8gSW5wdXQgdGhlIHZhbHVlcyBvZiBvcmlnaW5hbCBub3RlIHdoZW4gZWRpdCBpcyBzZWxlY3RlZFxuXG5jb25zdCBhZGFwdEVkaXRGb3JtVmFsdWVzID0gZnVuY3Rpb24gKGlkLCBub3RlcywgcHJvamVjdHMpIHtcbiAgY29uc3QgY29uZGl0aW9uID0gbm90ZSA9PiBub3RlW1wiaWRcIl0gPT09IGlkO1xuICB2YXIgbm90ZSA9IG5vdGVzLmZpbHRlcihjb25kaXRpb24pWzBdO1xuICBjb25zb2xlLmxvZyhub3RlKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlLWVkaXRcIikudmFsdWUgPSBub3RlW1widGl0bGVcIl07XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZS1lZGl0XCIpLnZhbHVlID0gbm90ZVtcImRhdGVcIl07XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhdHVzLWVkaXRcIikudmFsdWUgPSBub3RlW1wic3RhdHVzXCJdO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5LWVkaXRcIikudmFsdWUgPSBub3RlW1wicHJpb1wiXTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvbi1lZGl0XCIpLnZhbHVlID0gbm90ZVtcIm5vdGVzXCJdO1xuICBhZGFwdFByb2plY3RPcHRpb25zKFwiI3Byb2plY3QtZWRpdFwiLCBwcm9qZWN0cyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1lZGl0XCIpLnZhbHVlID0gbm90ZVtcInByb2plY3RcIl07XG59XG5cbi8vIFJlc2V0IHRoZSB2YWx1ZXMgd2hlbiBuZXcgbm90ZSBmb3JtIGlzIGdlbmVyYXRlZFxuXG5jb25zdCByZXNldE5ld05vdGVGb3JtVmFsdWVzID0gZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGUtbmV3XCIpLnZhbHVlID0gXCJcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlLW5ld1wiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhdHVzLW5ld1wiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHktbmV3XCIpLnZhbHVlID0gXCJcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvbi1uZXdcIikudmFsdWUgPSBcIlwiO1xuICBhZGFwdFByb2plY3RPcHRpb25zKFwiI3Byb2plY3QtbmV3XCIsIHByb2plY3RzKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmV3XCIpLnZhbHVlID0gXCJcIjtcbn1cblxuY29uc3QgcmVzZXROZXdQcm9qZWN0Rm9ybVZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC1mb3JtXCIpLnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gYWRhcHRQcm9qZWN0T3B0aW9ucyAocHJvamVjdENvbnRhaW5lcklELCBwcm9qZWN0cykge1xuICBsZXQgcHJvamVjdE9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2plY3RDb250YWluZXJJRCk7XG4gIHJlbW92ZUFsbENoaWxkcmVuKHByb2plY3RPcHRpb25zQ29udGFpbmVyKTtcbiAgdmFyIHByb2plY3RMaXN0ID0gW107XG4gIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QudGl0bGUpKTtcbiAgcHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4gcHJvamVjdE9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlT3B0aW9uRWxlbWVudChwcm9qZWN0KSkpO1xufVxuXG5leHBvcnQge2dlbmVyYXRlTmV3Tm90ZUZvcm0sIGdlbmVyYXRlRWRpdE5vdGVGb3JtLCBnZW5lcmF0ZU5ld1Byb2plY3RGb3JtLCBhZGFwdEVkaXRGb3JtVmFsdWVzLCByZXNldE5ld05vdGVGb3JtVmFsdWVzLCByZXNldE5ld1Byb2plY3RGb3JtVmFsdWVzfTtcbiIsImltcG9ydCB7c2V0QXR0cmlidXRlcywgYXBwZW5kQ2hpbGRyZW4sIGNyZWF0ZUVsZW1lbnRDbGFzc30gZnJvbSAnLi91dGlscydcbmltcG9ydCB7Z2VuZXJhdGVOZXdOb3RlRm9ybSwgZ2VuZXJhdGVFZGl0Tm90ZUZvcm0sIGdlbmVyYXRlTmV3UHJvamVjdEZvcm19IGZyb20gJy4vZm9ybSc7XG5cbmNvbnN0IGdlbmVyYXRlQmFzZUVsZW1lbnRzID0gZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gIHZhciBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpXG4gIHZhciBuZXdOb3RlRGlhbG9nID0gZ2VuZXJhdGVOZXdOb3RlRm9ybShwcm9qZWN0cyk7XG4gIHZhciBlZGl0Tm90ZURpYWxvZyA9IGdlbmVyYXRlRWRpdE5vdGVGb3JtKHByb2plY3RzKTtcbiAgdmFyIG5ld1Byb2plY3REaWFsb2cgPSBnZW5lcmF0ZU5ld1Byb2plY3RGb3JtKCk7XG4gIGdlbmVyYXRlQmFzZUludGVyZmFjZSgpO1xuICBhcHBlbmRDaGlsZHJlbihjb250ZW50LCBbbmV3Tm90ZURpYWxvZywgZWRpdE5vdGVEaWFsb2csIG5ld1Byb2plY3REaWFsb2ddKTtcbiAgLy8gZ25Qcm9qZWN0c0VsZW1lbnRzKHByb2plY3RzKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVCYXNlSW50ZXJmYWNlICgpIHtcbiAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgdmFyIGhlYWRlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpdlwiLCBcImhlYWRlclwiLCBcIlwiKTtcbiAgdmFyIHNpZGVCYXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJkaXZcIiwgXCJzaWRlLWJhclwiLCBcIlwiKTtcbiAgdmFyIHBhZ2VUaXRsZSA9IGduUGFnZVRpdGxlKCk7XG4gIHZhciBuZXdJdGVtQnV0dG9uID0gZ25OZXdJdGVtQnV0dG9uKCk7XG4gIHZhciBuZXdQcm9qZWN0QnV0dG9uID0gZ25OZXdQcm9qZWN0QnV0dG9uKCk7XG4gIHZhciBwcm9qZWN0c0NvbnRhaW5lciA9IGduUHJvamVjdHNDb250YWluZXIoKTtcbiAgdmFyIG5vdGVzQ29udGFpbmVyID0gZ25Ob3Rlc0NvbnRhaW5lcigpO1xuICBhcHBlbmRDaGlsZHJlbihoZWFkZXJDb250YWluZXIsIFtwYWdlVGl0bGUsIG5ld0l0ZW1CdXR0b25dKVxuICBhcHBlbmRDaGlsZHJlbihzaWRlQmFyQ29udGFpbmVyLCBbbmV3UHJvamVjdEJ1dHRvbiwgcHJvamVjdHNDb250YWluZXJdKVxuICBhcHBlbmRDaGlsZHJlbihjb250YWluZXIsIFtoZWFkZXJDb250YWluZXIsIHNpZGVCYXJDb250YWluZXIsIG5vdGVzQ29udGFpbmVyXSk7XG59XG5cbmZ1bmN0aW9uIGduSW50ZXJmYWNlQ29udGFpbmVyKCkge1xuICB2YXIgaW50ZXJmYWNlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGl2XCIsIFwiaW50ZXJmYWNlLWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgcmV0dXJuIGludGVyZmFjZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ25QYWdlVGl0bGUoKSB7XG4gIHZhciBwYWdlVGl0bGUgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJoMVwiLCBcInBhZ2UtdGl0bGVcIiwgXCJPZGluIHRvLWRvLWxpc3QgdG9vbFwiKTtcbiAgcmV0dXJuIHBhZ2VUaXRsZTtcbn1cblxuZnVuY3Rpb24gZ25OZXdJdGVtQnV0dG9uKCkge1xuICB2YXIgbmV3SXRlbUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImJ1dHRvblwiLCBcIm5ldy1pdGVtXCIsIFwiTmV3IEl0ZW1cIik7XG4gIHJldHVybiBuZXdJdGVtQnV0dG9uO1xufVxuXG5mdW5jdGlvbiBnbk5ld1Byb2plY3RCdXR0b24oKSB7XG4gIHZhciBuZXdJdGVtQnV0dG9uID0gY3JlYXRlRWxlbWVudENsYXNzKFwiYnV0dG9uXCIsIFwibmV3LXByb2plY3RcIiwgXCJOZXcgUHJvamVjdFwiKTtcbiAgcmV0dXJuIG5ld0l0ZW1CdXR0b247XG59XG5cbmZ1bmN0aW9uIGduUHJvamVjdHNDb250YWluZXIoKSB7XG4gIHZhciBwcm9qZWN0c0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpdlwiLCBcInByb2plY3RzLWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgcmV0dXJuIHByb2plY3RzQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBnbk5vdGVzQ29udGFpbmVyKCkge1xuICB2YXIgbm90ZXNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJkaXZcIiwgXCJub3Rlcy1jb250YWluZXJcIiwgXCJcIik7XG4gIHJldHVybiBub3Rlc0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ25Qcm9qZWN0c0VsZW1lbnRzKHByb2plY3RzKSB7XG4gIHZhciBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udGFpbmVyXCIpO1xuICB3aGlsZSAocHJvamVjdHNDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIHByb2plY3RzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RzQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9O1xuICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZ25Qcm9qZWN0RWxlbWVudChwcm9qZWN0KSkpO1xufVxuXG5mdW5jdGlvbiBnblByb2plY3RFbGVtZW50KHByb2plY3QpIHtcbiAgdmFyIHByb2plY3RDb250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJkaXZcIiwgXCJwcm9qZWN0LWNvbnRhaW5lclwiLCBcIlwiKTtcbiAgdmFyIHByb2plY3RUaXRsZSA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcInNwYW5cIiwgXCJwcm9qZWN0LXRpdGxlXCIsIHByb2plY3QpO1xuICB2YXIgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImJ1dHRvblwiLCBcImRlbGV0ZS1wcm9qZWN0LWJ1dHRvblwiLCBcIkRlbGV0ZSBwcm9qZWN0XCIpXG4gIGFwcGVuZENoaWxkcmVuKHByb2plY3RDb250YWluZXIsIFtwcm9qZWN0VGl0bGUsIGRlbGV0ZVByb2plY3RCdXR0b25dKTtcbiAgcmV0dXJuIHByb2plY3RDb250YWluZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVCYXNlRWxlbWVudHM7XG4iLCJpbXBvcnQge2FwcGVuZENoaWxkcmVuLCBjcmVhdGVFbGVtZW50Q2xhc3MsIHN0b3JlSXRlbSwgYWNjZXNzU3RvcmVkSXRlbSwgcmVtb3ZlQWxsQ2hpbGRyZW59IGZyb20gJy4vdXRpbHMnXG5cblxubGV0IG5vdGVDb3VudCA9IGFjY2Vzc1N0b3JlZEl0ZW0oXCJub3RlQ291bnRcIiwgXCJudW1iZXJcIikgPyBhY2Nlc3NTdG9yZWRJdGVtKFwibm90ZUNvdW50XCIsIFwibnVtYmVyXCIpIDogMDtcblxuLy9DbGFzcyBnZW5lcmF0b3JcbmNvbnN0IE5vdGUgPSBjbGFzcyBOb3RlIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRhdGUsIHN0YXR1cywgcHJpbywgcHJvamVjdCwgbm90ZXMsIGlkKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7dGl0bGUsIGRhdGUsIHN0YXR1cywgcHJpbywgcHJvamVjdCwgbm90ZXMsIGlkfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU5vdGUobm90ZSkge1xuICBub3RlW1widGl0bGVcIl0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlLWVkaXRcIikudmFsdWU7XG4gIG5vdGVbXCJkYXRlXCJdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlLWVkaXRcIikudmFsdWU7XG4gIG5vdGVbXCJzdGF0dXNcIl0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXR1cy1lZGl0XCIpLnZhbHVlO1xuICBub3RlW1wicHJpb1wiXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHktZWRpdFwiKS52YWx1ZTtcbiAgbm90ZVtcIm5vdGVzXCJdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvbi1lZGl0XCIpLnZhbHVlO1xuICBub3RlW1wicHJvamVjdFwiXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1lZGl0XCIpLnZhbHVlO1xuICByZXR1cm4gbm90ZTtcblxufVxuXG4vL0NyZWF0ZSBhIG5ldyBub3RlIG9iamVjdCBiYXNlZCBvbiB2YWx1ZXMgZ2l2ZW4gaW4gdGhlIG5ldyBub3RlIGZvcm1cbmNvbnN0IGdlbmVyYXRlTm90ZSA9IGZ1bmN0aW9uICgpIHtcbiAgbm90ZUNvdW50ICs9MTtcbiAgc3RvcmVJdGVtKG5vdGVDb3VudCwgXCJub3RlQ291bnRcIiwgXCJudW1iZXJcIik7XG4gIHJldHVybiBuZXcgTm90ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlLW5ld1wiKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZS1uZXdcIikudmFsdWUsXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXR1cy1uZXdcIikudmFsdWUsXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5LW5ld1wiKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uZXdcIikudmFsdWUsXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uLW5ld1wiKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIGBpZC0ke25vdGVDb3VudH1gKTtcbn1cblxuLy9EaXNwbGF5cyBhbGwgdGhlIG5vdGVzIG9iamVjdHMgaW4gdGhlIERPTSwgaW4gcHJvamVjdCBjb250YWluZXJzXG5jb25zdCBkaXNwbGF5Tm90ZXMgPSBmdW5jdGlvbiAobm90ZXMpIHtcbiAgcmVtb3ZlRGlzcGxheWVkTm90ZXMoKTtcbiAgc3RvcmVJdGVtKG5vdGVzLCBcIm5vdGVzXCIsIFwiYXJyYXlcIik7XG4gIHZhciBub3Rlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZXMtY29udGFpbmVyXCIpO1xuICB2YXIgdW5pcXVlUHJvamVjdHMgPSBbXTtcbiAgbm90ZXMuZm9yRWFjaCgobm90ZSkgPT4ge3VuaXF1ZVByb2plY3RzLmluY2x1ZGVzKG5vdGVbXCJwcm9qZWN0XCJdKSA/ICcnIDogdW5pcXVlUHJvamVjdHMucHVzaChub3RlW1wicHJvamVjdFwiXSl9KTtcbiAgdW5pcXVlUHJvamVjdHMuZm9yRWFjaChmdW5jdGlvbiAocHJvamVjdCkge1xuICAgIHZhciBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGl2XCIsIFwicHJvamVjdC1ncm91cC1jb250YWluZXJcIiwgXCJcIik7XG4gICAgcHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcHJvamVjdC0ke3Byb2plY3R9YCk7XG4gICAgbm90ZXMuZm9yRWFjaChmdW5jdGlvbiAobm90ZSkge1xuICAgICAgaWYgKG5vdGVbXCJwcm9qZWN0XCJdID09PSBwcm9qZWN0KSB7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTm90ZUNvbnRhaW5lcihub3RlKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIG5vdGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpXG4gIH0pXG59O1xuXG4vL0luZGl2aWR1YWxseSBjcmVhdGUgdGhlIGNvbnRhaW5lciB3aXRoIGFsbCB0aGUgRE9NIGVsZW1lbnRzIGZvciBhIG5vdGUgb2JqZWN0XG5mdW5jdGlvbiBjcmVhdGVOb3RlQ29udGFpbmVyIChub3RlKSB7XG4gIGxldCBub3RlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudENsYXNzKFwiZGl2XCIsIFwibm90ZS1jb250YWluZXJcIiwgXCJcIilcbiAgbm90ZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIG5vdGVbXCJpZFwiXSk7XG4gIGFwcGVuZENoaWxkcmVuKG5vdGVDb250YWluZXIsIFtjcmVhdGVFbGVtZW50Q2xhc3MoXCJzcGFuXCIsIGBwcm9qZWN0LXZhbHVlYCwgbm90ZVtcInByb2plY3RcIl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTm90ZVNlY3Rpb24oXCJ0aXRsZVwiLCBub3RlW1widGl0bGVcIl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTm90ZVNlY3Rpb24oXCJkYXRlXCIsIG5vdGVbXCJkYXRlXCJdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5vdGVCdXR0b25zKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50Q2xhc3MoXCJidXR0b25cIiwgXCJzaG93LW1vcmUtYnV0dG9uXCIsIFwiRGV0YWlsc1wiKV0pO1xuICByZXR1cm4gbm90ZUNvbnRhaW5lcjtcbn1cblxuY29uc3QgZGlzcGxheUZ1bGxOb3RlID0gZnVuY3Rpb24gKGlkLCBub3Rlcykge1xuICBjb25zdCBub3RlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtaWQ9XCIke2lkfVwiXWApO1xuICByZW1vdmVBbGxDaGlsZHJlbihub3RlQ29udGFpbmVyKTtcbiAgY29uc3Qgbm90ZSA9IHNlbGVjdEVsZW1lbnRCeUlkKGlkLCBub3RlcylcbiAgYXBwZW5kQ2hpbGRyZW4obm90ZUNvbnRhaW5lciwgW2NyZWF0ZUVsZW1lbnRDbGFzcyhcImJ1dHRvblwiLCBcInNob3ctbGVzcy1idXR0b25cIiwgXCJYXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudENsYXNzKFwic3BhblwiLCBgcHJvamVjdC12YWx1ZWAsIG5vdGVbXCJwcm9qZWN0XCJdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5vdGVTZWN0aW9uKFwidGl0bGVcIiwgbm90ZVtcInRpdGxlXCJdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5vdGVTZWN0aW9uKFwiZGF0ZVwiLCBub3RlW1wiZGF0ZVwiXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOb3RlU2VjdGlvbihcInN0YXR1c1wiLCBub3RlW1wic3RhdHVzXCJdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5vdGVTZWN0aW9uKFwicHJpb1wiLCBub3RlW1wicHJpb1wiXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOb3RlU2VjdGlvbihcImRlc2NyaXB0aW9uXCIsIG5vdGVbXCJub3Rlc1wiXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOb3RlQnV0dG9ucygpXSk7XG59XG5cblxuY29uc3QgZGlzcGxheVNtYWxsTm90ZSA9IGZ1bmN0aW9uIChpZCwgbm90ZXMpIHtcbiAgY29uc3Qgbm90ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLWlkPVwiJHtpZH1cIl1gKTtcbiAgcmVtb3ZlQWxsQ2hpbGRyZW4obm90ZUNvbnRhaW5lcik7XG4gIGNvbnN0IG5vdGUgPSBzZWxlY3RFbGVtZW50QnlJZChpZCwgbm90ZXMpXG4gIGFwcGVuZENoaWxkcmVuKG5vdGVDb250YWluZXIsIFtjcmVhdGVFbGVtZW50Q2xhc3MoXCJzcGFuXCIsIGBwcm9qZWN0LXZhbHVlYCwgbm90ZVtcInByb2plY3RcIl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTm90ZVNlY3Rpb24oXCJ0aXRsZVwiLCBub3RlW1widGl0bGVcIl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTm90ZVNlY3Rpb24oXCJkYXRlXCIsIG5vdGVbXCJkYXRlXCJdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5vdGVCdXR0b25zKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50Q2xhc3MoXCJidXR0b25cIiwgXCJzaG93LW1vcmUtYnV0dG9uXCIsIFwiRGV0YWlsc1wiKV0pO1xufTtcblxuXG5cbi8vQ3JlYXRlcyBvbmUgdGV4dCBzZWN0aW9uIG9mIHRoZSBET00gb2YgdGhlIG5vdGVcbmZ1bmN0aW9uIGNyZWF0ZU5vdGVTZWN0aW9uIChzZWN0aW9uTmFtZSwgdGV4dCkge1xuICB2YXIgZWxlbWVudENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpdlwiLCBgJHtzZWN0aW9uTmFtZX0tY29udGFpbmVyYCwgXCJcIik7XG4gIHZhciBjb250ZW50VGl0bGUgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJzcGFuXCIsIGAke3NlY3Rpb25OYW1lfS1oZWFkZXJgLCBgJHtzZWN0aW9uTmFtZX1gKTtcbiAgdmFyIGNvbnRlbnRWYWx1ZSA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcInNwYW5cIiwgYCR7c2VjdGlvbk5hbWV9LXZhbHVlYCwgdGV4dCk7XG4gIGFwcGVuZENoaWxkcmVuKGVsZW1lbnRDb250YWluZXIsIFtjb250ZW50VGl0bGUsIGNvbnRlbnRWYWx1ZV0pO1xuICByZXR1cm4gZWxlbWVudENvbnRhaW5lclxufVxuXG4vL0NyZWF0ZXMgdGhlIGJ1dHRvbnMgZm9yIHRoZSBET00gb2YgdGhlIG5vdGVcbmZ1bmN0aW9uIGNyZWF0ZU5vdGVCdXR0b25zICgpIHtcbiAgdmFyIGVsZW1lbnRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50Q2xhc3MoXCJkaXZcIiwgXCJidXR0b24tY29udGFpbmVyXCIsIFwiXCIpO1xuICB2YXIgZWRpdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImJ1dHRvblwiLCBcImVkaXQtYnV0dG9uXCIsIFwiRWRpdFwiKTtcbiAgdmFyIGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImJ1dHRvblwiLCBcImRlbGV0ZS1idXR0b25cIiwgXCJEZWxldGVcIik7XG4gIGFwcGVuZENoaWxkcmVuKGVsZW1lbnRDb250YWluZXIsIFtlZGl0QnV0dG9uLCBkZWxldGVCdXR0b25dKTtcbiAgcmV0dXJuIGVsZW1lbnRDb250YWluZXJcbn1cblxuLy9SZW1vdmVzIGFsbCB0aGUgbm90ZXMgY3VycmVudGx5IGRpc3BsYXllZCBpbiB0aGUgRE9NXG5mdW5jdGlvbiByZW1vdmVEaXNwbGF5ZWROb3RlcyAoKSB7XG4gIHZhciBub3Rlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZXMtY29udGFpbmVyXCIpO1xuICB3aGlsZSAobm90ZXNDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgbm90ZXNDb250YWluZXIucmVtb3ZlQ2hpbGQobm90ZXNDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfTtcbn1cblxuLy9SZW1vdmVzIHRoZSBkZWxldGVkIG5vdGUgb2JqZWN0IGZyb20gdGhlIGFycmF5XG5jb25zdCByZW1vdmVFbGVtZW50QnlJZCA9IGZ1bmN0aW9uIChpZCwgbm90ZXMpIHtcbiAgY29uc3QgY29uZGl0aW9uID0gbm90ZSA9PiBub3RlW1wiaWRcIl0gIT09IGlkO1xuICByZXR1cm4gbm90ZXMuZmlsdGVyKGNvbmRpdGlvbik7XG59XG5cbi8vVXBkYXRlcyB0aGUgdmFsdWVzIG9mIHRoZSBlZGl0ZWQgbm90ZSBvYmplY3QgYW5kIHJldHVybnMgdGhlIHVwZGF0ZWQgYXJyYXlcbmNvbnN0IGVkaXRFbGVtZW50QnlJZCA9IGZ1bmN0aW9uIChpZCwgbm90ZXMpIHtcbiAgdmFyIG5ld05vdGVzID0gW107XG4gIG5vdGVzLmZvckVhY2gobm90ZSA9PiB7bm90ZVtcImlkXCJdID09PSBpZCA/IG5ld05vdGVzLnB1c2godXBkYXRlTm90ZShub3RlKSkgOiBuZXdOb3Rlcy5wdXNoKG5vdGUpfSk7XG4gIHJldHVybiBuZXdOb3Rlcztcbn1cblxuY29uc3Qgc2VsZWN0RWxlbWVudEJ5SWQgPSBmdW5jdGlvbiAoaWQsIG5vdGVzKSB7XG4gIGxldCBuZXdOb3RlID0gXCJcIjtcbiAgbm90ZXMuZm9yRWFjaChmdW5jdGlvbiAobm90ZSkge1xuICAgIGlmIChub3RlW1wiaWRcIl0gPT09IGlkKSB7XG4gICAgICBuZXdOb3RlID0gbm90ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbmV3Tm90ZVxufTtcblxuY29uc3QgYWRhcHROb3Rlc0RlbGV0ZWRQcm9qZWN0cyA9IGZ1bmN0aW9uIChwcm9qZWN0cywgbm90ZXMpIHtcbiAgdmFyIHByb2plY3RMaXN0ID0gW107XG4gIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QudGl0bGUpKTtcbiAgY29uc29sZS5sb2cocHJvamVjdExpc3QpXG4gIHZhciBuZXdOb3RlcyA9IFtdO1xuICBub3Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub3RlKSB7XG4gICAgaWYgKHByb2plY3RMaXN0LmluY2x1ZGVzKG5vdGUucHJvamVjdCkpIHtcbiAgICAgIG5ld05vdGVzLnB1c2gobm90ZSk7XG4gICAgICBjb25zb2xlLmxvZyhub3RlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG5vdGUucHJvamVjdCA9IFwiXCI7XG4gICAgICBjb25zb2xlLmxvZyhub3RlKVxuICAgICAgbmV3Tm90ZXMucHVzaChub3RlKTtcbiAgICB9XG4gIH0pO1xuICBkaXNwbGF5Tm90ZXMobmV3Tm90ZXMpO1xufVxuXG5cbmV4cG9ydCB7Tm90ZSxcbiAgICAgICAgZ2VuZXJhdGVOb3RlLFxuICAgICAgICBkaXNwbGF5Tm90ZXMsXG4gICAgICAgIGFkYXB0Tm90ZXNEZWxldGVkUHJvamVjdHMsXG4gICAgICAgIHJlbW92ZUVsZW1lbnRCeUlkLFxuICAgICAgICBlZGl0RWxlbWVudEJ5SWQsXG4gICAgICAgIGRpc3BsYXlGdWxsTm90ZSxcbiAgICAgICAgZGlzcGxheVNtYWxsTm90ZX07XG4iLCJpbXBvcnQge2FwcGVuZENoaWxkcmVuLCBjcmVhdGVFbGVtZW50Q2xhc3MsIHN0b3JlSXRlbSwgYWNjZXNzU3RvcmVkSXRlbX0gZnJvbSAnLi91dGlscydcblxubGV0IHByb2plY3RDb3VudCA9IGFjY2Vzc1N0b3JlZEl0ZW0oXCJwcm9qZWN0Q291bnRcIiwgXCJudW1iZXJcIikgPyBhY2Nlc3NTdG9yZWRJdGVtKFwicHJvamVjdENvdW50XCIsIFwibnVtYmVyXCIpIDogMztcblxuY29uc3QgUHJvamVjdCA9IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgaWQpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHt0aXRsZSwgaWR9KTtcbiAgfTtcbn1cblxuY29uc3QgZ2VuZXJhdGVQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICBwcm9qZWN0Q291bnQgKz0gMVxuICBzdG9yZUl0ZW0ocHJvamVjdENvdW50LCBcInByb2plY3RDb3VudFwiLCBcIm51bWJlclwiKTtcbiAgcmV0dXJuIG5ldyBQcm9qZWN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3QtZm9ybVwiKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgIGBpZC0ke3Byb2plY3RDb3VudH1gKTtcbn1cblxuY29uc3QgZ2VuZXJhdGVQcm9qZWN0c0xpc3QgPSBmdW5jdGlvbiAocHJvamVjdHMpIHtcbiAgdmFyIHByb2plY3RMaXN0ID0gW107XG4gIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QudGl0bGUpKTtcbiAgcmV0dXJuIHByb2plY3RMaXN0O1xufVxuXG5jb25zdCBkaXNwbGF5UHJvamVjdHMgPSBmdW5jdGlvbiAocHJvamVjdHMpIHtcbiAgcmVtb3ZlRGlzcGxheWVkUHJvamVjdHMoKTtcbiAgc3RvcmVJdGVtKHByb2plY3RzLCBcInByb2plY3RzXCIsIFwiYXJyYXlcIik7XG4gIHZhciBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udGFpbmVyXCIpO1xuICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge3Byb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RTZWN0aW9uKHByb2plY3QpKX0pO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFNlY3Rpb24ocHJvamVjdCkge1xuICB2YXIgcHJvamVjdENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImRpdlwiLCBcInByb2plY3QtY29udGFpbmVyXCIsIFwiXCIpO1xuICBwcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgcHJvamVjdFtcImlkXCJdKTtcbiAgdmFyIHByb2plY3RUaXRsZSA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcInNwYW5cIiwgXCJwcm9qZWN0LXRpdGxlXCIsIHByb2plY3QudGl0bGUpO1xuICB2YXIgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRDbGFzcyhcImJ1dHRvblwiLCBcImRlbGV0ZS1wcm9qZWN0LWJ1dHRvblwiLCBcIlhcIilcbiAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pXG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3RUaXRsZSk7XG4gIHJldHVybiBwcm9qZWN0Q29udGFpbmVyXG59XG5cbmZ1bmN0aW9uIHJlbW92ZURpc3BsYXllZFByb2plY3RzICgpIHtcbiAgdmFyIHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1jb250YWluZXJcIik7XG4gIHdoaWxlIChwcm9qZWN0c0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0c0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9O1xufVxuXG5leHBvcnQge1Byb2plY3QsIGdlbmVyYXRlUHJvamVjdCwgZ2VuZXJhdGVQcm9qZWN0c0xpc3QsIGRpc3BsYXlQcm9qZWN0c31cbiIsIi8vRnVuY3Rpb25zIHVzZWQgdG8gcXVpY2tseSBjcmVhdGUgZWxlbWVudHMgaW4gSlMgYW5kIGFkZCBhdHRyaWJ1dGVzXG5jb25zdCBzZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKGVsZW1lbnRzLCBhdHRyaWJ1dGVzKSB7XG4gIGVsZW1lbnRzID0gQXJyYXkuaXNBcnJheShlbGVtZW50cykgPyBlbGVtZW50cyA6IFtlbGVtZW50c107XG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goYXR0ciA9PiB7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJpYnV0ZXNbYXR0cl0pO1xuICAgIH0pXG59KTtcbn1cblxuY29uc3QgYXBwZW5kQ2hpbGRyZW4gPSBmdW5jdGlvbiAoZWxlbWVudCwgY2hpbGRyZW4pIHtcbiAgY2hpbGRyZW4gPSBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXTtcbiAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgfSk7XG59XG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnRDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnRUeXBlLCBjbGFzc05hbWUsIGlubmVyVGV4dCkge1xuICB2YXIgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgbmV3RWxlbWVudC5pbm5lckhUTUwgPSBpbm5lclRleHQ7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5jb25zdCByZW1vdmVBbGxDaGlsZHJlbiA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfTtcbn1cblxuY29uc3Qgc3RvcmVJdGVtID0gZnVuY3Rpb24gKGl0ZW0sIHN0b3JlZEl0ZW1OYW1lLCB0eXBlKSB7XG4gIGlmICh0eXBlID09PSBcImFycmF5XCIpIHtcbiAgdmFyIHNlcmlhbGl6ZWRBcnJheSA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yZWRJdGVtTmFtZSwgc2VyaWFsaXplZEFycmF5KTtcbiAgfVxuICBpZiAodHlwZSA9PT0gXCJudW1iZXJcIikge1xuICBsZXQgdmFsdWVBc1N0cmluZyA9IGl0ZW0udG9TdHJpbmcoKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmVkSXRlbU5hbWUsIHZhbHVlQXNTdHJpbmcpO1xuICB9XG59XG5cbmNvbnN0IGFjY2Vzc1N0b3JlZEl0ZW0gPSBmdW5jdGlvbiAoc3RvcmVkSXRlbU5hbWUsIHR5cGUpIHtcbiAgaWYgKHR5cGUgPT09IFwiYXJyYXlcIikge1xuICAgIHZhciBzdG9yZWRBcnJheSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JlZEl0ZW1OYW1lKTtcbiAgICB2YXIgZGVzZXJpYWxpemVkT2JqZWN0ID0gSlNPTi5wYXJzZShzdG9yZWRBcnJheSk7XG4gICAgcmV0dXJuIGRlc2VyaWFsaXplZE9iamVjdDtcbiAgfVxuICBpZiAodHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgIGxldCBzdG9yZWRWYWx1ZUFzU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmVkSXRlbU5hbWUpO1xuICAgIGxldCByZXRyaWV2ZWRWYWx1ZSA9IHBhcnNlSW50KHN0b3JlZFZhbHVlQXNTdHJpbmcpO1xuICAgIHJldHVybiByZXRyaWV2ZWRWYWx1ZTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBzZXRBdHRyaWJ1dGVzLFxuICBhcHBlbmRDaGlsZHJlbixcbiAgY3JlYXRlRWxlbWVudENsYXNzLFxuICByZW1vdmVBbGxDaGlsZHJlbixcbiAgc3RvcmVJdGVtLFxuICBhY2Nlc3NTdG9yZWRJdGVtXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgZ2VuZXJhdGVCYXNlRWxlbWVudHMgZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHtOb3RlLCBnZW5lcmF0ZU5vdGUsIGRpc3BsYXlOb3RlcywgcmVtb3ZlRWxlbWVudEJ5SWQsIGVkaXRFbGVtZW50QnlJZCwgYWRhcHROb3Rlc0RlbGV0ZWRQcm9qZWN0cywgZGlzcGxheUZ1bGxOb3RlLCBkaXNwbGF5U21hbGxOb3RlfSBmcm9tICcuL25vdGUnO1xuLy8gaW1wb3J0IHtoYW5kbGVDcmVhdGVOb3RlT3BlcmF0aW9uLCBoYW5kbGVFZGl0Tm90ZU9wZXJhdGlvbiwgaGFuZGxlRGVsZXRlTm90ZU9wZXJhdGlvbiwgaGFuZGxlQ3JlYXRlUHJvamVjdE9wZXJhdGlvbiwgaGFuZGxlRGVsZXRlUHJvamVjdE9wZXJhdGlvbn0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgYWRhcHRFZGl0Rm9ybVZhbHVlcywgcmVzZXROZXdOb3RlRm9ybVZhbHVlcywgcmVzZXROZXdQcm9qZWN0Rm9ybVZhbHVlcyB9IGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgeyBnZW5lcmF0ZVByb2plY3QsIGRpc3BsYXlQcm9qZWN0cywgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyBhY2Nlc3NTdG9yZWRJdGVtIH0gZnJvbSAnLi91dGlscyc7XG5cblxubGV0IG5vdGVzID0gYWNjZXNzU3RvcmVkSXRlbShcIm5vdGVzXCIsIFwiYXJyYXlcIikgPyBhY2Nlc3NTdG9yZWRJdGVtKFwibm90ZXNcIiwgXCJhcnJheVwiKSA6IFtdO1xubGV0IHByb2plY3RzID0gYWNjZXNzU3RvcmVkSXRlbShcInByb2plY3RzXCIsIFwiYXJyYXlcIikgPyBhY2Nlc3NTdG9yZWRJdGVtKFwicHJvamVjdHNcIiwgXCJhcnJheVwiKSA6IFtuZXcgUHJvamVjdChcIkdlbmVyYWxcIiwgXCJpZC0xXCIpLCBuZXcgUHJvamVjdChcIlN0dWR5XCIsIFwiaWQtMlwiKSwgbmV3IFByb2plY3QoXCJDaG9yZXNcIiwgXCJpZC0zXCIpXTtcbmxldCBpZCA9IFwiXCI7XG5nZW5lcmF0ZUJhc2VFbGVtZW50cyhwcm9qZWN0cyk7XG5kaXNwbGF5Tm90ZXMobm90ZXMpXG5kaXNwbGF5UHJvamVjdHMocHJvamVjdHMpOyAvL0dlbmVyYXRlIGFsbCB0aGUgYmFzZSBlbGVtZW50cyBmb3IgdGhlIERPTVxuXG5cbi8vUHJvamVjdHMgbG9naWNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgLy9OZXcgcHJvamVjdCBjb2RlXG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmV3LXByb2plY3RcIikpIHtcbiAgICB2YXIgbmV3UHJvamVjdGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3UHJvamVjdERpYWxvZ1wiKVxuICAgIHJlc2V0TmV3UHJvamVjdEZvcm1WYWx1ZXMoKTtcbiAgICBuZXdQcm9qZWN0ZGlhbG9nLnNob3dNb2RhbCgpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2UtbmV3LXByb2plY3QtZGlhbG9nXCIpKSB7XG4gICAgaGFuZGxlQ3JlYXRlUHJvamVjdE9wZXJhdGlvbihldmVudClcbiAgfVxuXG4gIC8vRGVsZXRlIHByb2plY3QgY29kZVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZS1wcm9qZWN0LWJ1dHRvblwiKSkge1xuICAgIHByb2plY3RzID0gaGFuZGxlRGVsZXRlUHJvamVjdE9wZXJhdGlvbihldmVudCwgcHJvamVjdHMpO1xuICB9XG59KTtcblxuLy9Ob3RlcyBsb2dpY1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAvL05ldyBub3RlIHByb2plY3RcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJuZXctaXRlbVwiKSkge1xuICAgIHZhciBuZXdOb3RlZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdOb3RlRGlhbG9nXCIpXG4gICAgcmVzZXROZXdOb3RlRm9ybVZhbHVlcyhwcm9qZWN0cyk7XG4gICAgbmV3Tm90ZWRpYWxvZy5zaG93TW9kYWwoKTtcbiAgfTtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG9zZS1uZXctbm90ZS1kaWFsb2dcIikpIHtcbiAgICBoYW5kbGVDcmVhdGVOb3RlT3BlcmF0aW9uKGV2ZW50KTtcbiAgfTtcblxuICAvL0RlbGV0ZSBub3RlIGNvZGVcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtYnV0dG9uXCIpKSB7XG4gICAgaGFuZGxlRGVsZXRlTm90ZU9wZXJhdGlvbihldmVudClcbiAgfVxuXG4gIC8vRWRpdCBub3RlIGNvZGVcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJlZGl0LWJ1dHRvblwiKSkge1xuICAgIHZhciBlZGl0Tm90ZURpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdE5vdGVEaWFsb2dcIik7XG4gICAgaWQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaWQ7XG4gICAgY29uc29sZS5sb2coaWQpXG4gICAgZWRpdE5vdGVEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgYWRhcHRFZGl0Rm9ybVZhbHVlcyhpZCwgbm90ZXMsIHByb2plY3RzKVxuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2UtZWRpdC1ub3RlLWRpYWxvZ1wiKSkge1xuICAgIGhhbmRsZUVkaXROb3RlT3BlcmF0aW9uKGV2ZW50KTtcbiAgfVxufSk7XG5cbi8vU2hvdyBsZXNzL21vcmUgbm90ZSBlbGVtZW50cyBsb2dpY1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAvL1Nob3cgZnVsbCBub3RlXG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvdy1tb3JlLWJ1dHRvblwiKSkge1xuICAgIGlkID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pZDtcbiAgICBkaXNwbGF5RnVsbE5vdGUoaWQsIG5vdGVzKTtcbiAgfVxuICAvL1Nob3cgc21hbGwgbm90ZVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNob3ctbGVzcy1idXR0b25cIikpIHtcbiAgICBpZCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuaWQ7XG4gICAgZGlzcGxheVNtYWxsTm90ZShpZCwgbm90ZXMpO1xuICB9O1xufSk7XG5cblxuXG4vL05vdGVzIERPTSBmdW5jdGlvbnNcbmZ1bmN0aW9uIGhhbmRsZUNyZWF0ZU5vdGVPcGVyYXRpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgdmFyIG5ld05vdGVkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld05vdGVEaWFsb2dcIilcbiAgdmFyIG5vdGUgPSBnZW5lcmF0ZU5vdGUoKTtcbiAgbmV3Tm90ZWRpYWxvZy5jbG9zZSgpO1xuICBub3Rlcy5wdXNoKG5vdGUpO1xuICBkaXNwbGF5Tm90ZXMobm90ZXMpO1xufVxuZnVuY3Rpb24gaGFuZGxlRWRpdE5vdGVPcGVyYXRpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgdmFyIGVkaXROb3RlRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0Tm90ZURpYWxvZ1wiKTtcbiAgbm90ZXMgPSBlZGl0RWxlbWVudEJ5SWQoaWQsIG5vdGVzKVxuICBlZGl0Tm90ZURpYWxvZy5jbG9zZSgpO1xuICBkaXNwbGF5Tm90ZXMobm90ZXMpO1xufTtcbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZU5vdGVPcGVyYXRpb24gKGV2ZW50KSB7XG4gIHZhciBpZCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5pZDtcbiAgbm90ZXMgPSByZW1vdmVFbGVtZW50QnlJZChpZCwgbm90ZXMpO1xuICBkaXNwbGF5Tm90ZXMobm90ZXMpO1xufTtcblxuLy9Qcm9qZWN0IERPTSBmdW5jdGlvbnNcbmZ1bmN0aW9uIGhhbmRsZUNyZWF0ZVByb2plY3RPcGVyYXRpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgdmFyIHByb2plY3QgPSBnZW5lcmF0ZVByb2plY3QoKTtcbiAgdmFyIG5ld1Byb2plY3RkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1Byb2plY3REaWFsb2dcIilcbiAgbmV3UHJvamVjdGRpYWxvZy5jbG9zZSgpO1xuICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICBkaXNwbGF5UHJvamVjdHMocHJvamVjdHMpO1xufTtcbmZ1bmN0aW9uICBoYW5kbGVEZWxldGVQcm9qZWN0T3BlcmF0aW9uIChldmVudCkge1xuICB2YXIgaWQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaWQ7XG4gIHByb2plY3RzID0gcmVtb3ZlRWxlbWVudEJ5SWQoaWQsIHByb2plY3RzKTtcbiAgZGlzcGxheVByb2plY3RzKHByb2plY3RzKTtcbiAgYWRhcHROb3Rlc0RlbGV0ZWRQcm9qZWN0cyhwcm9qZWN0cywgbm90ZXMpO1xuICByZXR1cm4gcHJvamVjdHNcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=