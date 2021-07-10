/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n\theight: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: flex-start;\r\n\tmargin: 0;\r\n\tfont-size: 1.6rem;\r\n\tfont-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n\tcolor: white;\r\n}\r\n\r\nbutton {\r\n\tpadding: 0.2rem;\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tborder-style: none;\r\n\tborder-radius: 5px;\r\n\tbackground-color: inherit;\r\n\tcolor: lightgray;\r\n}\r\n\r\nbutton:hover {\r\n\tbackground-color: #444;\r\n}\r\n\r\ninput {\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tborder-style: none;\r\n\toutline: none;\r\n\tborder-radius: 5px;\r\n\tbackground-color: inherit;\r\n\tcolor: inherit;\r\n}\r\n\r\ntextarea {\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tcolor: inherit;\r\n\tbackground-color: inherit;\r\n\tborder: none;\r\n\tresize: none;\r\n}\r\n\r\ni {\r\n\tcursor: pointer;\r\n}\r\n\r\n.selected {\r\n\tbackground-color: #444;\r\n}\r\n\r\n.selected.project-button {\r\n\tfont-weight: bold;\r\n}\r\n\r\n/* ! Sidebar */\r\n#sidebar {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: 300px;\r\n\theight: 100%;\r\n\toverflow-x: visible;\r\n\toverflow-y: auto;\r\n\tbackground-color: #333;\r\n}\r\n\r\n#expand-collapse-sidebar {\r\n\tvisibility: hidden;\r\n\tposition: fixed;\r\n\tbottom: 0;\r\n\twidth: 3rem;\r\n\theight: 3rem;\r\n\tborder-radius: 0px 5px 0px 0px;\r\n\tbackground-color: #444;\r\n}\r\n\r\n#expand-collapse-sidebar:hover {\r\n\tbackground-color: #555;\r\n}\r\n\r\n#title {\r\n\tfont-size: 2rem;\r\n\ttext-align: center;\r\n\tmargin: 1rem 0 1rem 0;\r\n}\r\n\r\n.project-button {\r\n\twidth: 100%;\r\n\ttext-align: left;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tcolor: white;\r\n}\r\n\r\n.project-button:hover, #new-project-button:hover {\r\n\tbackground-color: #444;\r\n}\r\n\r\n.project-button.active {\r\n\tfont-weight: bold;\r\n}\r\n\r\n#new-project-button {\r\n\tcolor: lightgray;\r\n\ttext-align: center;\r\n\tbackground-color: #111;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n#add-project-popup {\r\n\tpadding: 0.5rem 1rem 0;\r\n\ttext-align: center;\r\n\tdisplay: none;\r\n}\r\n\r\n#add-project-popup-input {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.5rem;\r\n\tbackground-color: #111;\r\n}\r\n\r\n#add-project-popup-input::placeholder {\r\n\tcolor: rgb(255, 65, 65);\r\n}\r\n\r\n#add-project-popup-buttons {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n}\r\n\r\n.add-project-popup-button {\r\n\twidth: 45%;\r\n\tfont-size: 0.9rem;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#add-project-popup-add {\r\n\tbackground-color: rgb(0, 140, 0);\r\n}\r\n\r\n#add-project-popup-add:hover {\r\n\tbackground-color: rgb(0, 100, 0);\r\n}\r\n\r\n#add-project-popup-cancel {\r\n\tbackground-color: rgb(140, 0, 0);\r\n}\r\n\r\n#add-project-popup-cancel:hover {\r\n\tbackground-color: rgb(100, 0, 0);\r\n}\r\n\r\n#sidebar-footer {\r\n\twidth: 100%;\r\n\tbackground-color: #111;\r\n\tfont-size: 1rem;\r\n\tmargin-top: auto;\r\n\ttext-align: center;\r\n}\r\n\r\n/* ! Main */\r\n.task-expand {\r\n\tdisplay: none;\t\r\n}\r\n\r\n#main {\r\n\tflex-grow: 1;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\tbackground-color: #222;\r\n}\r\n\r\n#selected-project {\r\n\tfont-size: 2rem;\r\n\tfont-weight: bold;\r\n\tmargin-left: 1rem;\r\n\tmargin-top: 1rem;\r\n\tpadding: 0;\r\n\twidth: 100%;\r\n\theight: 2.5rem;\r\n\tfont-size: 2rem;\r\n}\r\n\r\n#tasks-container {\r\n\twidth: 50%;\r\n\tmin-width: 15rem;\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.tasks-label {\r\n\tfont-weight: bold;\r\n\tmargin: 0;\r\n\tmargin-top: 1rem;\r\n}\r\n\r\n#task-button {\r\n\tdisplay: flex;\r\n}\r\n\r\n#task-button i {\r\n\tmargin-left: auto;\r\n\twidth: 100%;\r\n\talign-items: center;\r\n}\r\n\r\n#new-task-button {\r\n\tbackground-color: #111;\r\n\tborder-radius: 5px;\r\n\tmargin-top: 0.5rem;\r\n}\r\n\r\n#add-task-popup {\r\n\tpadding: 0.5rem 1rem 0;\r\n\twidth: 16rem;\r\n\ttext-align: center;\r\n\tdisplay: none;\r\n}\r\n\r\n#add-task-popup-input {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.5rem;\r\n\tbackground-color: #111;\r\n}\r\n\r\n#add-task-popup-input::placeholder {\r\n\tcolor: rgb(255, 65, 65);\r\n}\r\n\r\n#add-task-popup-buttons {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n}\r\n\r\n.add-task-popup-button {\r\n\twidth: 45%;\r\n\tfont-size: 0.9rem;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#add-task-popup-add {\r\n\tbackground-color: rgb(0, 140, 0);\r\n}\r\n\r\n#add-task-popup-add:hover {\r\n\tbackground-color: rgb(0, 100, 0);\r\n}\r\n\r\n#add-task-popup-cancel {\r\n\tbackground-color: rgb(140, 0, 0);\r\n}\r\n\r\n#add-task-popup-cancel:hover {\r\n\tbackground-color: rgb(100, 0, 0);\r\n}\r\n\r\n#completed button {\r\n\tcolor: gray;\r\n\tfont-style: italic; \r\n}\r\n\r\n.task-expand {\r\n\tflex-direction: column;\r\n\tbackground-color: #111;\r\n\tmargin: 0.2rem;\r\n\tpadding: 1rem;\r\n}\r\n\r\n.task-expand input {\r\n\tbackground-color: #222;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.task-name-edit {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.1rem;\r\n}\r\n\r\n.task-description-edit {\r\n\twidth: 100%;\r\n\tfont-size: 1.6rem;\r\n\tfont-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n\tcolor: white;\r\n\tresize: vertical;\r\n}\r\n\r\n/* ! Media Queries */\r\n\r\n@media (max-width: 768px) {\r\n\r\n\t#sidebar {\r\n\t\twidth: 80%;\r\n\t\tposition: fixed;\r\n\t}\r\n\r\n\t#sidebar.close {\r\n\t\tleft: -80%;\r\n\t\ttransition-duration: 0.25s;\r\n\t}\r\n\r\n\t#project-button, #new-project-button, #add-project-popup-input, .add-project-popup-button {\r\n\t\tpadding-top: 0.5rem;\r\n\t\tpadding-bottom: 0.5rem;\r\n\t}\r\n\r\n\t#expand-collapse-sidebar {\r\n\t\tvisibility: visible;\r\n\t}\r\n\t\r\n\t#main, textarea {\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t#selected-project {\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n\t#tasks-container {\r\n\t\tmargin-left: 0;\r\n\t\twidth: 100%;\r\n\t}\r\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n\theight: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: flex-start;\r\n\tmargin: 0;\r\n\tfont-size: 1.6rem;\r\n\tfont-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n\tcolor: white;\r\n}\r\n\r\nbutton {\r\n\tpadding: 0.2rem;\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tborder-style: none;\r\n\tborder-radius: 5px;\r\n\tbackground-color: inherit;\r\n\tcolor: lightgray;\r\n}\r\n\r\nbutton:hover {\r\n\tbackground-color: #444;\r\n}\r\n\r\ninput {\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tborder-style: none;\r\n\toutline: none;\r\n\tborder-radius: 5px;\r\n\tbackground-color: inherit;\r\n\tcolor: inherit;\r\n}\r\n\r\ntextarea {\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tcolor: inherit;\r\n\tbackground-color: inherit;\r\n\tborder: none;\r\n\tresize: none;\r\n}\r\n\r\ni {\r\n\tcursor: pointer;\r\n}\r\n\r\n.selected {\r\n\tbackground-color: #444;\r\n}\r\n\r\n.selected.project-button {\r\n\tfont-weight: bold;\r\n}\r\n\r\n/* ! Sidebar */\r\n#sidebar {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: 300px;\r\n\theight: 100%;\r\n\toverflow-x: visible;\r\n\toverflow-y: auto;\r\n\tbackground-color: #333;\r\n}\r\n\r\n#expand-collapse-sidebar {\r\n\tvisibility: hidden;\r\n\tposition: fixed;\r\n\tbottom: 0;\r\n\twidth: 3rem;\r\n\theight: 3rem;\r\n\tborder-radius: 0px 5px 0px 0px;\r\n\tbackground-color: #444;\r\n}\r\n\r\n#expand-collapse-sidebar:hover {\r\n\tbackground-color: #555;\r\n}\r\n\r\n#title {\r\n\tfont-size: 2rem;\r\n\ttext-align: center;\r\n\tmargin: 1rem 0 1rem 0;\r\n}\r\n\r\n.project-button {\r\n\twidth: 100%;\r\n\ttext-align: left;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tcolor: white;\r\n}\r\n\r\n.project-button:hover, #new-project-button:hover {\r\n\tbackground-color: #444;\r\n}\r\n\r\n.project-button.active {\r\n\tfont-weight: bold;\r\n}\r\n\r\n#new-project-button {\r\n\tcolor: lightgray;\r\n\ttext-align: center;\r\n\tbackground-color: #111;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n#add-project-popup {\r\n\tpadding: 0.5rem 1rem 0;\r\n\ttext-align: center;\r\n\tdisplay: none;\r\n}\r\n\r\n#add-project-popup-input {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.5rem;\r\n\tbackground-color: #111;\r\n}\r\n\r\n#add-project-popup-input::placeholder {\r\n\tcolor: rgb(255, 65, 65);\r\n}\r\n\r\n#add-project-popup-buttons {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n}\r\n\r\n.add-project-popup-button {\r\n\twidth: 45%;\r\n\tfont-size: 0.9rem;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#add-project-popup-add {\r\n\tbackground-color: rgb(0, 140, 0);\r\n}\r\n\r\n#add-project-popup-add:hover {\r\n\tbackground-color: rgb(0, 100, 0);\r\n}\r\n\r\n#add-project-popup-cancel {\r\n\tbackground-color: rgb(140, 0, 0);\r\n}\r\n\r\n#add-project-popup-cancel:hover {\r\n\tbackground-color: rgb(100, 0, 0);\r\n}\r\n\r\n#sidebar-footer {\r\n\twidth: 100%;\r\n\tbackground-color: #111;\r\n\tfont-size: 1rem;\r\n\tmargin-top: auto;\r\n\ttext-align: center;\r\n}\r\n\r\n/* ! Main */\r\n.task-expand {\r\n\tdisplay: none;\t\r\n}\r\n\r\n#main {\r\n\tflex-grow: 1;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\tbackground-color: #222;\r\n}\r\n\r\n#selected-project {\r\n\tfont-size: 2rem;\r\n\tfont-weight: bold;\r\n\tmargin-left: 1rem;\r\n\tmargin-top: 1rem;\r\n\tpadding: 0;\r\n\twidth: 100%;\r\n\theight: 2.5rem;\r\n\tfont-size: 2rem;\r\n}\r\n\r\n#tasks-container {\r\n\twidth: 50%;\r\n\tmin-width: 15rem;\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.tasks-label {\r\n\tfont-weight: bold;\r\n\tmargin: 0;\r\n\tmargin-top: 1rem;\r\n}\r\n\r\n#task-button {\r\n\tdisplay: flex;\r\n}\r\n\r\n#task-button i {\r\n\tmargin-left: auto;\r\n\twidth: 100%;\r\n\talign-items: center;\r\n}\r\n\r\n#new-task-button {\r\n\tbackground-color: #111;\r\n\tborder-radius: 5px;\r\n\tmargin-top: 0.5rem;\r\n}\r\n\r\n#add-task-popup {\r\n\tpadding: 0.5rem 1rem 0;\r\n\twidth: 16rem;\r\n\ttext-align: center;\r\n\tdisplay: none;\r\n}\r\n\r\n#add-task-popup-input {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.5rem;\r\n\tbackground-color: #111;\r\n}\r\n\r\n#add-task-popup-input::placeholder {\r\n\tcolor: rgb(255, 65, 65);\r\n}\r\n\r\n#add-task-popup-buttons {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n}\r\n\r\n.add-task-popup-button {\r\n\twidth: 45%;\r\n\tfont-size: 0.9rem;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#add-task-popup-add {\r\n\tbackground-color: rgb(0, 140, 0);\r\n}\r\n\r\n#add-task-popup-add:hover {\r\n\tbackground-color: rgb(0, 100, 0);\r\n}\r\n\r\n#add-task-popup-cancel {\r\n\tbackground-color: rgb(140, 0, 0);\r\n}\r\n\r\n#add-task-popup-cancel:hover {\r\n\tbackground-color: rgb(100, 0, 0);\r\n}\r\n\r\n#completed button {\r\n\tcolor: gray;\r\n\tfont-style: italic; \r\n}\r\n\r\n.task-expand {\r\n\tflex-direction: column;\r\n\tbackground-color: #111;\r\n\tmargin: 0.2rem;\r\n\tpadding: 1rem;\r\n}\r\n\r\n.task-expand input {\r\n\tbackground-color: #222;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.task-name-edit {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.1rem;\r\n}\r\n\r\n.task-description-edit {\r\n\twidth: 100%;\r\n\tfont-size: 1.6rem;\r\n\tfont-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n\tcolor: white;\r\n\tresize: vertical;\r\n}\r\n\r\n/* ! Media Queries */\r\n\r\n@media (max-width: 768px) {\r\n\r\n\t#sidebar {\r\n\t\twidth: 80%;\r\n\t\tposition: fixed;\r\n\t}\r\n\r\n\t#sidebar.close {\r\n\t\tleft: -80%;\r\n\t\ttransition-duration: 0.25s;\r\n\t}\r\n\r\n\t#project-button, #new-project-button, #add-project-popup-input, .add-project-popup-button {\r\n\t\tpadding-top: 0.5rem;\r\n\t\tpadding-bottom: 0.5rem;\r\n\t}\r\n\r\n\t#expand-collapse-sidebar {\r\n\t\tvisibility: visible;\r\n\t}\r\n\t\r\n\t#main, textarea {\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t#selected-project {\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n\t#tasks-container {\r\n\t\tmargin-left: 0;\r\n\t\twidth: 100%;\r\n\t}\r\n}"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
	constructor(name) {
		this.name = name;
		this.tasks = [];
	}
}

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
// TODO: Local Storage saving here
let projects = [];

class Storage {
	static saveProjects() {
		console.log("save");
		localStorage.setItem("projects", JSON.stringify(projects));
	}

	static getProjects() {
		//Convert data from local storage
		console.log("get");
		projects = JSON.parse(localStorage.getItem("projects"));

		if (projects === null) {
			projects = [];
		}

		//todoList.setProjects(todoList.getProjects().map((project) => Object.assign(new Project(), project)),);

		//todoList.getProjects().forEach((project) => project.setTasks(project.getTasks().map((task) => Object.assign(new Task(), task)),),);

		return projects;
	}

	static addProject(project) {
		projects.push(project);
		Storage.saveProjects();
	}

	static updateProject(projectName, newProjectVersion) {

		projects.splice(projects.indexOf(Storage.findProject(projectName)), 1, newProjectVersion);

		Storage.saveProjects();
	}

	static deleteProject(project) {
		projects.splice(projects.indexOf(project), 1);
		Storage.saveProjects();
	}

	static findProject(projectName) {
		return projects.find(project => project.name === projectName);
	}

	static addTask(project, task) {
		project.tasks.push(task);
		Storage.saveProjects();
	}

	static updateTask(project, taskName, newTaskVersion) {
		project.tasks.splice(project.tasks.indexOf(Storage.findTask(project, taskName)), 1, newTaskVersion);
		Storage.updateProject(project.name, project);
		Storage.saveProjects();
	}

	static deleteTask(project, task) {
		project.tasks.splice(project.tasks.indexOf(task), 1);
		Storage.saveProjects();
	}

	static findTask(project, taskName) {
		return project.tasks.find(task => task.name === taskName);
	}
}

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
	constructor(name, description = "") {
		this.name = name;
		this.description = description;
		this.completed = false;
	}
}

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");


class UI {
	//! Load content
	static loadPage() {
		UI.loadProjects();
		UI.loadTasks();
	}

	static loadProjects() {
		document.getElementById("projects").innerHTML = "";

		_storage__WEBPACK_IMPORTED_MODULE_0__.default.getProjects().forEach((project) => {
			UI.createProject(project);
		});
	}

	static loadTasks(project) {
		document.getElementById("tasks").innerHTML = "";
		document.getElementById("completed").innerHTML = "";
		document.querySelector("#add-task-popup").style.display = "none";
		document.querySelector("#add-project-popup").style.display = "none";

		if (typeof project === "undefined") {
			document.querySelector("#selected-project").style.visibility = "hidden";
			document.querySelector("#tasks-container").style.visibility = "hidden";
		} else {
			document.querySelector("#selected-project").value = project.name;
			document.querySelector("#tasks").innerHTML = "";
			document.querySelector("#completed").innerHTML = "";
			document.querySelector("#selected-project").style.visibility = "visible";
			document.querySelector("#tasks-container").style.visibility = "visible";

			let taskDivs = [];
			project.tasks.forEach(task => {
				const taskDiv = UI.createTask(task);
				taskDivs.push(taskDiv);
			});
			return taskDivs;
		}
	}


	//! Create content
	static createProject(project) {
		const projectContainer = document.querySelector("#projects");
		const newButton = document.createElement("button");
		newButton.classList.add("project-button");
		newButton.innerHTML = `
			<span>${project.name}</span>
			<i>&times;</i>
		`;
		projectContainer.appendChild(newButton);
		
		return newButton;
	}

	static createTask(task) {
		let taskContainer;
		if (task.completed === false) {
			taskContainer = document.querySelector("#tasks");
		} else {
			taskContainer = document.querySelector("#completed");
		}
		const taskDiv = document.createElement("div");
		taskDiv.classList.add("task");
		taskDiv.innerHTML = `
			<input type="checkbox" class="task-checkbox">
			<button class="task-button">
				<span>${task.name}</span>
				<i>&times;</i>
			</button>
			<div class="task-expand">
				<input type="text" class="task-name-edit" name="Name" placeholder="Name" value="${task.name}">
				<textarea type="text" class="task-description-edit" name="Description" placeholder="Description">${task.description}</textarea>
			</div>
		`;
		if (task.completed === true) {
			taskDiv.querySelector("input").checked = true;
		}
		taskContainer.appendChild(taskDiv);
		return taskDiv;
	}

	//! Expand or collapse content
	static expandCollapseSidebar() {
		const sidebar = document.querySelector("#sidebar");
		const button = document.querySelector("#expand-collapse-sidebar");

		if (button.textContent === "◀") {
			sidebar.classList.add("close");
			button.textContent = "▶";
		} else {
			sidebar.classList.remove("close");
			button.textContent = "◀";
		}
	}
	static expandCollapseTask(taskButton, task) {
		const taskExpand = taskButton.querySelector(".task-expand");

		taskExpand.querySelector(".task-name-edit").value = task.name;
		taskExpand.querySelector(".task-description-edit").value = task.description;
		taskExpand.style.display = (taskExpand.style.display === "flex" ? "none" : "flex");
	}


	//! Find content
	static findProject(projectName) {
		let projectFound;
		document.querySelectorAll(".project-button").forEach((projectButton) => {
			if (projectButton.querySelector("span").textContent === projectName) {
				projectFound = projectButton;
			}
		});
		return projectFound;
	}
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/project.js */ "./src/modules/project.js");
/* harmony import */ var _modules_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task.js */ "./src/modules/task.js");
/* harmony import */ var _modules_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ui.js */ "./src/modules/ui.js");
/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/storage.js */ "./src/modules/storage.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");






// ! Project
let selectedProject;

function projectSelect(button) {
	const project = _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__.default.findProject(button.querySelector("span").textContent);

	if (selectedProject !== undefined) {
		selectedProject.classList.remove("selected");
	}
	button.classList.add("selected");
	selectedProject = button;

	const tasks = _modules_ui_js__WEBPACK_IMPORTED_MODULE_2__.default.loadTasks(project);
	tasks.forEach(task => {
		addTaskEvents(task);
	});
}

function projectDelete(event, button) {
	const project = _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__.default.findProject(button.querySelector("span").textContent);

	event.stopPropagation();
	_modules_storage_js__WEBPACK_IMPORTED_MODULE_3__.default.deleteProject(project);
	_modules_ui_js__WEBPACK_IMPORTED_MODULE_2__.default.findProject(project.name).remove();

	const nextProject = document.querySelector(".project-button");
	if (nextProject !== null) {
		nextProject.click();
	} else {
		_modules_ui_js__WEBPACK_IMPORTED_MODULE_2__.default.loadTasks();
	}
}

//Add project events for new buttons being added
function addProjectEvents(button) {
	button.addEventListener("click", () => projectSelect(button));
	button.querySelector("i").addEventListener("click", (event) => projectDelete(event, button));
}


// ! Adding new projects
const addProjectPopup = document.querySelector("#add-project-popup");
const newProjectName = document.querySelector("#add-project-popup-input");

function newProjectClick() {
	newProjectName.value = "";
	newProjectName.placeholder = "";
	addProjectPopup.style.display = "block";
	newProjectName.focus();
}

function newProjectCancel() {
	addProjectPopup.style.display = "none";
}

function newProjectAdd() {
	if (newProjectName.value === "") {
		newProjectName.placeholder = "Name can't be blank";
	} else if (_modules_storage_js__WEBPACK_IMPORTED_MODULE_3__.default.findProject(newProjectName.value) !== undefined) {
		newProjectName.value = "";
		newProjectName.placeholder = "Name is already used";
	} else {
		newProjectCancel();

		const newProject = new _modules_project_js__WEBPACK_IMPORTED_MODULE_0__.default(newProjectName.value);
		const newProjectButton = _modules_ui_js__WEBPACK_IMPORTED_MODULE_2__.default.createProject(newProject);
		_modules_storage_js__WEBPACK_IMPORTED_MODULE_3__.default.addProject(newProject);

		addProjectEvents(newProjectButton);
	}
}

//Add project if the Enter key is pressed in the input box
function newProjectInputKeyup(event) {
	if (event.keyCode === 13) {
		document.querySelector("#add-project-popup-add").click();
	}
}

//Clear the placeholder (can't be blank message) on input focus
function newProjectInputFocus() {
	newProjectName.placeholder = "";
}

document.querySelector("#new-project-button").addEventListener("click", newProjectClick);
document.querySelector("#add-project-popup-cancel").addEventListener("click", newProjectCancel);
document.querySelector("#add-project-popup-add").addEventListener("click", newProjectAdd);
newProjectName.addEventListener("focus", newProjectInputFocus);
newProjectName.addEventListener("keyup", newProjectInputKeyup);

//! Sidebar Open/Close Button

document.querySelector("#expand-collapse-sidebar").addEventListener("click", _modules_ui_js__WEBPACK_IMPORTED_MODULE_2__.default.expandCollapseSidebar);


// ! Renaming project
const projectName = document.querySelector("#selected-project");

function projectNameInput() {
	if (projectName.value !== selectedProject.name) {
		projectName.style.color = "gray";
		projectName.style.fontStyle = "italic";
	} else {
		projectName.style.color = "white";
		projectName.style.fontStyle = "normal";
	}
}

function projectNameDefocus() {
	const currentProject = _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__.default.findProject(selectedProject.querySelector("span").textContent);

	if (projectName.value !== "") {
		const newProjectVersion = new _modules_project_js__WEBPACK_IMPORTED_MODULE_0__.default(projectName.value, currentProject.tasks);
		_modules_storage_js__WEBPACK_IMPORTED_MODULE_3__.default.updateProject(currentProject.name, newProjectVersion);
		selectedProject.querySelector("span").textContent = projectName.value;
	} else {
		projectName.value = currentProject;
	}
	projectName.style.color = "white";
	projectName.style.fontStyle = "normal";
}

function projectNameKeydown(event) {
	if (event.keyCode === 13) {
		event.preventDefault(); //Prevent creating a new line
	}
}

function projectNameKeyup(event) {
	if (event.keyCode === 13) {
		projectName.blur();
	}
}

projectName.addEventListener("input", projectNameInput);
projectName.addEventListener("blur", projectNameDefocus);
projectName.addEventListener("keydown", projectNameKeydown);
projectName.addEventListener("keyup", projectNameKeyup);


// ! Tasks
function taskComplete(event, taskDiv, input) {
	event.stopPropagation();
	const currentProject = _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__.default.findProject(selectedProject.querySelector("span").textContent);
	const currentTask = _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__.default.findTask(currentProject, taskDiv.querySelector("span").textContent);
	let newTaskVersion = new _modules_task_js__WEBPACK_IMPORTED_MODULE_1__.default(currentTask.name, currentTask.description);

	if (input.checked == false) {
		newTaskVersion.completed = false;
		document.querySelector("#tasks").appendChild(taskDiv);
	} else {
		newTaskVersion.completed = true;
		document.querySelector("#completed").appendChild(taskDiv);
	}
	_modules_storage_js__WEBPACK_IMPORTED_MODULE_3__.default.updateTask(currentProject, currentTask.name, newTaskVersion);
}

function taskClick(taskDiv) {

	const currentProject = _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__.default.findProject(selectedProject.querySelector("span").textContent);
	const currentTask = _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__.default.findTask(currentProject, taskDiv.querySelector("span").textContent);

	if (taskDiv.querySelector(".task-expand").style.display !== "none") {
		let newTaskVersion = new _modules_task_js__WEBPACK_IMPORTED_MODULE_1__.default(currentTask.name, currentTask.description);

		const oldTaskName = currentTask.name;
		const nameInput = taskDiv.querySelector(".task-name-edit");
		const descriptionInput = taskDiv.querySelector(".task-description-edit");
		
		if (nameInput.value !== "") {
			newTaskVersion.name = nameInput.value;
			taskDiv.querySelector("span").textContent = newTaskVersion.name;
		}
		newTaskVersion.description = descriptionInput.value;
		newTaskVersion.completed = taskDiv.querySelector(".task-checkbox").checked;
		_modules_storage_js__WEBPACK_IMPORTED_MODULE_3__.default.updateTask(currentProject, oldTaskName, newTaskVersion);
	}

	_modules_ui_js__WEBPACK_IMPORTED_MODULE_2__.default.expandCollapseTask(taskDiv, currentTask);
}

//Edit task if the Enter key is pressed in an input box
function taskInputKeyup(event, taskDiv) {
	if (event.keyCode === 13) {
		taskDiv.querySelector("button").click();
	}
}

function taskDelete(event, taskDiv) {
	event.stopPropagation();
	const currentProject = _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__.default.findProject(selectedProject.querySelector("span").textContent);
	const currentTask = _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__.default.findTask(currentProject, taskDiv.querySelector("span").textContent);

	_modules_storage_js__WEBPACK_IMPORTED_MODULE_3__.default.deleteTask(currentProject, currentTask);
	taskDiv.remove();
}

//Add task events for new divs being added
function addTaskEvents(taskDiv) {
	taskDiv.querySelector("input").addEventListener("input", (event) => taskComplete(event, taskDiv, taskDiv.querySelector("input")));
	taskDiv.querySelector("button").addEventListener("click", () => taskClick(taskDiv));
	taskDiv.querySelector(".task-name-edit").addEventListener("keyup", (event) => taskInputKeyup(event, taskDiv));
	taskDiv.querySelector("i").addEventListener("click", (event) => taskDelete(event, taskDiv));
}


// ! Adding new tasks
const addTaskPopup = document.querySelector("#add-task-popup");
const newTaskName = document.querySelector("#add-task-popup-input");

function newTaskClick() {
	newTaskName.value = "";
	newTaskName.placeholder = "";
	addTaskPopup.style.display = "block";
	newTaskName.focus();
}

function newTaskCancel() {
	addTaskPopup.style.display = "none";
}

function newTaskAdd() {
	const currentProject = _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__.default.findProject(selectedProject.querySelector("span").textContent);

	if (newTaskName.value === "") {
		newTaskName.placeholder = "Name can't be blank";
	} else if (_modules_storage_js__WEBPACK_IMPORTED_MODULE_3__.default.findTask(currentProject, newTaskName.value) !== undefined) {
		newTaskName.value = "";
		newTaskName.placeholder = "Name is already used";
	} else {
		newTaskCancel();

		const newTaskVersion = new _modules_task_js__WEBPACK_IMPORTED_MODULE_1__.default(newTaskName.value);
		const newTaskDiv = _modules_ui_js__WEBPACK_IMPORTED_MODULE_2__.default.createTask(newTaskVersion);
		_modules_storage_js__WEBPACK_IMPORTED_MODULE_3__.default.addTask(currentProject, newTaskVersion);

		addTaskEvents(newTaskDiv);
	}
}

//Clear the placeholder (can't be blank message) on input focus
function newTaskInputFocus() {
	newTaskName.placeholder = "";
}

//Add task if the Enter key is pressed in the input box
function newTaskInputKeyup(event) {
	if (event.keyCode === 13) {
		document.querySelector("#add-task-popup-add").click();
	}
}

document.querySelector("#new-task-button").addEventListener("click", newTaskClick);
document.querySelector("#add-task-popup-cancel").addEventListener("click", newTaskCancel);
document.querySelector("#add-task-popup-add").addEventListener("click", newTaskAdd);
newTaskName.addEventListener("focus", newTaskInputFocus);
newTaskName.addEventListener("keyup", newTaskInputKeyup);


//! Initialize page
_modules_ui_js__WEBPACK_IMPORTED_MODULE_2__.default.loadPage();
_modules_storage_js__WEBPACK_IMPORTED_MODULE_3__.default.getProjects().forEach((project) => {
	addProjectEvents(_modules_ui_js__WEBPACK_IMPORTED_MODULE_2__.default.findProject(project.name));
});

//todo: figure out why updating tasks doesn't save
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7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QUssT0FBTyx1RkFBdUYsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEs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b0VBQW1COztBQUUzQztBQUNBO0FBQ0EsRUFBRSxVQUFVLGlFQUFnQjtBQUM1QjtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBLDZCQUE2QixxREFBSTtBQUNqQyxxQkFBcUIsOERBQWE7QUFDbEMsRUFBRSxnRUFBZTs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLDREQUFXO0FBQ1gsb0VBQW1CO0FBQ25CLGtCQUFrQiwrREFBYztBQUNoQyxDQUFDOztBQUVELGtEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjZyZW07XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcblxcdHBhZGRpbmc6IDAuMnJlbTtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuXFx0Ym9yZGVyLXN0eWxlOiBub25lO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcblxcdGNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRyZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmkge1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQucHJvamVjdC1idXR0b24ge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAhIFNpZGViYXIgKi9cXHJcXG4jc2lkZWJhciB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHR3aWR0aDogMzAwcHg7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdG92ZXJmbG93LXg6IHZpc2libGU7XFxyXFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4jZXhwYW5kLWNvbGxhcHNlLXNpZGViYXIge1xcclxcblxcdHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0Ym90dG9tOiAwO1xcclxcblxcdHdpZHRoOiAzcmVtO1xcclxcblxcdGhlaWdodDogM3JlbTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwcHggNXB4IDBweCAwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXHJcXG59XFxyXFxuXFxyXFxuI2V4cGFuZC1jb2xsYXBzZS1zaWRlYmFyOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGUge1xcclxcblxcdGZvbnQtc2l6ZTogMnJlbTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0bWFyZ2luOiAxcmVtIDAgMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b24ge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b246aG92ZXIsICNuZXctcHJvamVjdC1idXR0b246aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbi5hY3RpdmUge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtYnV0dG9uIHtcXHJcXG5cXHRjb2xvcjogbGlnaHRncmF5O1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LXBvcHVwIHtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMXJlbSAwO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtcG9wdXAtaW5wdXQge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtcG9wdXAtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG5cXHRjb2xvcjogcmdiKDI1NSwgNjUsIDY1KTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LXBvcHVwLWJ1dHRvbnMge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC1wb3B1cC1idXR0b24ge1xcclxcblxcdHdpZHRoOiA0NSU7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjlyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1wb3B1cC1hZGQge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtcG9wdXAtYWRkOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LXBvcHVwLWNhbmNlbCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1wb3B1cC1jYW5jZWw6aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci1mb290ZXIge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdG1hcmdpbi10b3A6IGF1dG87XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAhIE1haW4gKi9cXHJcXG4udGFzay1leHBhbmQge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFx0XFxyXFxufVxcclxcblxcclxcbiNtYWluIHtcXHJcXG5cXHRmbGV4LWdyb3c6IDE7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXHJcXG59XFxyXFxuXFxyXFxuI3NlbGVjdGVkLXByb2plY3Qge1xcclxcblxcdGZvbnQtc2l6ZTogMnJlbTtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxcmVtO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiAyLjVyZW07XFxyXFxuXFx0Zm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3MtY29udGFpbmVyIHtcXHJcXG5cXHR3aWR0aDogNTAlO1xcclxcblxcdG1pbi13aWR0aDogMTVyZW07XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1sYWJlbCB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWJ1dHRvbiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stYnV0dG9uIGkge1xcclxcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzay1idXR0b24ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLXBvcHVwIHtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMXJlbSAwO1xcclxcblxcdHdpZHRoOiAxNnJlbTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLXBvcHVwLWlucHV0IHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzExMTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLXBvcHVwLWlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuXFx0Y29sb3I6IHJnYigyNTUsIDY1LCA2NSk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay1wb3B1cC1idXR0b25zIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2stcG9wdXAtYnV0dG9uIHtcXHJcXG5cXHR3aWR0aDogNDUlO1xcclxcblxcdGZvbnQtc2l6ZTogMC45cmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2stcG9wdXAtYWRkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTQwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLXBvcHVwLWFkZDpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEwMCwgMCk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay1wb3B1cC1jYW5jZWwge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxNDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2stcG9wdXAtY2FuY2VsOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbXBsZXRlZCBidXR0b24ge1xcclxcblxcdGNvbG9yOiBncmF5O1xcclxcblxcdGZvbnQtc3R5bGU6IGl0YWxpYzsgXFxyXFxufVxcclxcblxcclxcbi50YXNrLWV4cGFuZCB7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcblxcdG1hcmdpbjogMC4ycmVtO1xcclxcblxcdHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWV4cGFuZCBpbnB1dCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLW5hbWUtZWRpdCB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMC4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kZXNjcmlwdGlvbi1lZGl0IHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRmb250LXNpemU6IDEuNnJlbTtcXHJcXG5cXHRmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0cmVzaXplOiB2ZXJ0aWNhbDtcXHJcXG59XFxyXFxuXFxyXFxuLyogISBNZWRpYSBRdWVyaWVzICovXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuXFxyXFxuXFx0I3NpZGViYXIge1xcclxcblxcdFxcdHdpZHRoOiA4MCU7XFxyXFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjc2lkZWJhci5jbG9zZSB7XFxyXFxuXFx0XFx0bGVmdDogLTgwJTtcXHJcXG5cXHRcXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I3Byb2plY3QtYnV0dG9uLCAjbmV3LXByb2plY3QtYnV0dG9uLCAjYWRkLXByb2plY3QtcG9wdXAtaW5wdXQsIC5hZGQtcHJvamVjdC1wb3B1cC1idXR0b24ge1xcclxcblxcdFxcdHBhZGRpbmctdG9wOiAwLjVyZW07XFxyXFxuXFx0XFx0cGFkZGluZy1ib3R0b206IDAuNXJlbTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I2V4cGFuZC1jb2xsYXBzZS1zaWRlYmFyIHtcXHJcXG5cXHRcXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcblxcdH1cXHJcXG5cXHRcXHJcXG5cXHQjbWFpbiwgdGV4dGFyZWEge1xcclxcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I3NlbGVjdGVkLXByb2plY3Qge1xcclxcblxcdFxcdG1hcmdpbi1sZWZ0OiAwO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjdGFza3MtY29udGFpbmVyIHtcXHJcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHR9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsYUFBYTtDQUNiLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsMkJBQTJCO0NBQzNCLFNBQVM7Q0FDVCxpQkFBaUI7Q0FDakIscUdBQXFHO0NBQ3JHLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsY0FBYztDQUNkLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osWUFBWTtBQUNiOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQSxjQUFjO0FBQ2Q7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixZQUFZO0NBQ1osWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixTQUFTO0NBQ1QsV0FBVztDQUNYLFlBQVk7Q0FDWiw4QkFBOEI7Q0FDOUIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0Msc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsWUFBWTtBQUNiOztBQUVBO0NBQ0Msc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsaUJBQWlCO0NBQ2pCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGdDQUFnQztBQUNqQzs7QUFFQTtDQUNDLGdDQUFnQztBQUNqQzs7QUFFQTtDQUNDLGdDQUFnQztBQUNqQzs7QUFFQTtDQUNDLGdDQUFnQztBQUNqQzs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxzQkFBc0I7Q0FDdEIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUEsV0FBVztBQUNYO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLFVBQVU7Q0FDVixXQUFXO0NBQ1gsY0FBYztDQUNkLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixTQUFTO0NBQ1QsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLFdBQVc7Q0FDWCxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGFBQWE7QUFDZDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0MsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0MsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0MsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixzQkFBc0I7Q0FDdEIsY0FBYztDQUNkLGFBQWE7QUFDZDs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixxR0FBcUc7Q0FDckcsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7QUFFQSxvQkFBb0I7O0FBRXBCOztDQUVDO0VBQ0MsVUFBVTtFQUNWLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxVQUFVO0VBQ1YsMEJBQTBCO0NBQzNCOztDQUVBO0VBQ0MsbUJBQW1CO0VBQ25CLHNCQUFzQjtDQUN2Qjs7Q0FFQTtFQUNDLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLGNBQWM7Q0FDZjs7Q0FFQTtFQUNDLGNBQWM7RUFDZCxXQUFXO0NBQ1o7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMS42cmVtO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG5cXHRwYWRkaW5nOiAwLjJyZW07XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcblxcdGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRjb2xvcjogbGlnaHRncmF5O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuXFx0Ym9yZGVyLXN0eWxlOiBub25lO1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0cmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pIHtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkLnByb2plY3QtYnV0dG9uIHtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogISBTaWRlYmFyICovXFxyXFxuI3NpZGViYXIge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0d2lkdGg6IDMwMHB4O1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRvdmVyZmxvdy14OiB2aXNpYmxlO1xcclxcblxcdG92ZXJmbG93LXk6IGF1dG87XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuI2V4cGFuZC1jb2xsYXBzZS1zaWRlYmFyIHtcXHJcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuXFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdGJvdHRvbTogMDtcXHJcXG5cXHR3aWR0aDogM3JlbTtcXHJcXG5cXHRoZWlnaHQ6IDNyZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMHB4IDVweCAwcHggMHB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxyXFxufVxcclxcblxcclxcbiNleHBhbmQtY29sbGFwc2Utc2lkZWJhcjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlIHtcXHJcXG5cXHRmb250LXNpemU6IDJyZW07XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdG1hcmdpbjogMXJlbSAwIDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uOmhvdmVyLCAjbmV3LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b24uYWN0aXZlIHtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuXFx0Y29sb3I6IGxpZ2h0Z3JheTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzExMTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1wb3B1cCB7XFxyXFxuXFx0cGFkZGluZzogMC41cmVtIDFyZW0gMDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LXBvcHVwLWlucHV0IHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzExMTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LXBvcHVwLWlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuXFx0Y29sb3I6IHJnYigyNTUsIDY1LCA2NSk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1wb3B1cC1idXR0b25zIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QtcG9wdXAtYnV0dG9uIHtcXHJcXG5cXHR3aWR0aDogNDUlO1xcclxcblxcdGZvbnQtc2l6ZTogMC45cmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtcG9wdXAtYWRkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTQwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LXBvcHVwLWFkZDpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEwMCwgMCk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1wb3B1cC1jYW5jZWwge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxNDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtcG9wdXAtY2FuY2VsOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXItZm9vdGVyIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRtYXJnaW4tdG9wOiBhdXRvO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogISBNYWluICovXFxyXFxuLnRhc2stZXhwYW5kIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcdFxcclxcbn1cXHJcXG5cXHJcXG4jbWFpbiB7XFxyXFxuXFx0ZmxleC1ncm93OiAxO1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxyXFxufVxcclxcblxcclxcbiNzZWxlY3RlZC1wcm9qZWN0IHtcXHJcXG5cXHRmb250LXNpemU6IDJyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuXFx0bWFyZ2luLXRvcDogMXJlbTtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGhlaWdodDogMi41cmVtO1xcclxcblxcdGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzLWNvbnRhaW5lciB7XFxyXFxuXFx0d2lkdGg6IDUwJTtcXHJcXG5cXHRtaW4td2lkdGg6IDE1cmVtO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3MtbGFiZWwge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFzay1idXR0b24ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWJ1dHRvbiBpIHtcXHJcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2stYnV0dG9uIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay1wb3B1cCB7XFxyXFxuXFx0cGFkZGluZzogMC41cmVtIDFyZW0gMDtcXHJcXG5cXHR3aWR0aDogMTZyZW07XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay1wb3B1cC1pbnB1dCB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay1wb3B1cC1pbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcblxcdGNvbG9yOiByZ2IoMjU1LCA2NSwgNjUpO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2stcG9wdXAtYnV0dG9ucyB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrLXBvcHVwLWJ1dHRvbiB7XFxyXFxuXFx0d2lkdGg6IDQ1JTtcXHJcXG5cXHRmb250LXNpemU6IDAuOXJlbTtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLXBvcHVwLWFkZCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE0MCwgMCk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay1wb3B1cC1hZGQ6aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2stcG9wdXAtY2FuY2VsIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLXBvcHVwLWNhbmNlbDpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbiNjb21wbGV0ZWQgYnV0dG9uIHtcXHJcXG5cXHRjb2xvcjogZ3JheTtcXHJcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7IFxcclxcbn1cXHJcXG5cXHJcXG4udGFzay1leHBhbmQge1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzExMTtcXHJcXG5cXHRtYXJnaW46IDAuMnJlbTtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1leHBhbmQgaW5wdXQge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1uYW1lLWVkaXQge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZGVzY3JpcHRpb24tZWRpdCB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjZyZW07XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdHJlc2l6ZTogdmVydGljYWw7XFxyXFxufVxcclxcblxcclxcbi8qICEgTWVkaWEgUXVlcmllcyAqL1xcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcblxcclxcblxcdCNzaWRlYmFyIHtcXHJcXG5cXHRcXHR3aWR0aDogODAlO1xcclxcblxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I3NpZGViYXIuY2xvc2Uge1xcclxcblxcdFxcdGxlZnQ6IC04MCU7XFxyXFxuXFx0XFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCNwcm9qZWN0LWJ1dHRvbiwgI25ldy1wcm9qZWN0LWJ1dHRvbiwgI2FkZC1wcm9qZWN0LXBvcHVwLWlucHV0LCAuYWRkLXByb2plY3QtcG9wdXAtYnV0dG9uIHtcXHJcXG5cXHRcXHRwYWRkaW5nLXRvcDogMC41cmVtO1xcclxcblxcdFxcdHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCNleHBhbmQtY29sbGFwc2Utc2lkZWJhciB7XFxyXFxuXFx0XFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0I21haW4sIHRleHRhcmVhIHtcXHJcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCNzZWxlY3RlZC1wcm9qZWN0IHtcXHJcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I3Rhc2tzLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDA7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0fVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcblx0Y29uc3RydWN0b3IobmFtZSkge1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMudGFza3MgPSBbXTtcclxuXHR9XHJcbn0iLCIvLyBUT0RPOiBMb2NhbCBTdG9yYWdlIHNhdmluZyBoZXJlXHJcbmxldCBwcm9qZWN0cyA9IFtdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XHJcblx0c3RhdGljIHNhdmVQcm9qZWN0cygpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwic2F2ZVwiKTtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRQcm9qZWN0cygpIHtcclxuXHRcdC8vQ29udmVydCBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZVxyXG5cdFx0Y29uc29sZS5sb2coXCJnZXRcIik7XHJcblx0XHRwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XHJcblxyXG5cdFx0aWYgKHByb2plY3RzID09PSBudWxsKSB7XHJcblx0XHRcdHByb2plY3RzID0gW107XHJcblx0XHR9XHJcblxyXG5cdFx0Ly90b2RvTGlzdC5zZXRQcm9qZWN0cyh0b2RvTGlzdC5nZXRQcm9qZWN0cygpLm1hcCgocHJvamVjdCkgPT4gT2JqZWN0LmFzc2lnbihuZXcgUHJvamVjdCgpLCBwcm9qZWN0KSksKTtcclxuXHJcblx0XHQvL3RvZG9MaXN0LmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4gcHJvamVjdC5zZXRUYXNrcyhwcm9qZWN0LmdldFRhc2tzKCkubWFwKCh0YXNrKSA9PiBPYmplY3QuYXNzaWduKG5ldyBUYXNrKCksIHRhc2spKSwpLCk7XHJcblxyXG5cdFx0cmV0dXJuIHByb2plY3RzO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGFkZFByb2plY3QocHJvamVjdCkge1xyXG5cdFx0cHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuXHRcdFN0b3JhZ2Uuc2F2ZVByb2plY3RzKCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgdXBkYXRlUHJvamVjdChwcm9qZWN0TmFtZSwgbmV3UHJvamVjdFZlcnNpb24pIHtcclxuXHJcblx0XHRwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuaW5kZXhPZihTdG9yYWdlLmZpbmRQcm9qZWN0KHByb2plY3ROYW1lKSksIDEsIG5ld1Byb2plY3RWZXJzaW9uKTtcclxuXHJcblx0XHRTdG9yYWdlLnNhdmVQcm9qZWN0cygpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xyXG5cdFx0cHJvamVjdHMuc3BsaWNlKHByb2plY3RzLmluZGV4T2YocHJvamVjdCksIDEpO1xyXG5cdFx0U3RvcmFnZS5zYXZlUHJvamVjdHMoKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBmaW5kUHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG5cdFx0cmV0dXJuIHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhZGRUYXNrKHByb2plY3QsIHRhc2spIHtcclxuXHRcdHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcclxuXHRcdFN0b3JhZ2Uuc2F2ZVByb2plY3RzKCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgdXBkYXRlVGFzayhwcm9qZWN0LCB0YXNrTmFtZSwgbmV3VGFza1ZlcnNpb24pIHtcclxuXHRcdHByb2plY3QudGFza3Muc3BsaWNlKHByb2plY3QudGFza3MuaW5kZXhPZihTdG9yYWdlLmZpbmRUYXNrKHByb2plY3QsIHRhc2tOYW1lKSksIDEsIG5ld1Rhc2tWZXJzaW9uKTtcclxuXHRcdFN0b3JhZ2UudXBkYXRlUHJvamVjdChwcm9qZWN0Lm5hbWUsIHByb2plY3QpO1xyXG5cdFx0U3RvcmFnZS5zYXZlUHJvamVjdHMoKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBkZWxldGVUYXNrKHByb2plY3QsIHRhc2spIHtcclxuXHRcdHByb2plY3QudGFza3Muc3BsaWNlKHByb2plY3QudGFza3MuaW5kZXhPZih0YXNrKSwgMSk7XHJcblx0XHRTdG9yYWdlLnNhdmVQcm9qZWN0cygpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGZpbmRUYXNrKHByb2plY3QsIHRhc2tOYW1lKSB7XHJcblx0XHRyZXR1cm4gcHJvamVjdC50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5uYW1lID09PSB0YXNrTmFtZSk7XHJcblx0fVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XHJcblx0Y29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24gPSBcIlwiKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG5cdFx0dGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XHJcblx0Ly8hIExvYWQgY29udGVudFxyXG5cdHN0YXRpYyBsb2FkUGFnZSgpIHtcclxuXHRcdFVJLmxvYWRQcm9qZWN0cygpO1xyXG5cdFx0VUkubG9hZFRhc2tzKCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgbG9hZFByb2plY3RzKCkge1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuXHRcdFN0b3JhZ2UuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcblx0XHRcdFVJLmNyZWF0ZVByb2plY3QocHJvamVjdCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBsb2FkVGFza3MocHJvamVjdCkge1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrc1wiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wbGV0ZWRcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stcG9wdXBcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1wb3B1cFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG5cdFx0aWYgKHR5cGVvZiBwcm9qZWN0ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0ZWQtcHJvamVjdFwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrcy1jb250YWluZXJcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdGVkLXByb2plY3RcIikudmFsdWUgPSBwcm9qZWN0Lm5hbWU7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3NcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wbGV0ZWRcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RlZC1wcm9qZWN0XCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrcy1jb250YWluZXJcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG5cclxuXHRcdFx0bGV0IHRhc2tEaXZzID0gW107XHJcblx0XHRcdHByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuXHRcdFx0XHRjb25zdCB0YXNrRGl2ID0gVUkuY3JlYXRlVGFzayh0YXNrKTtcclxuXHRcdFx0XHR0YXNrRGl2cy5wdXNoKHRhc2tEaXYpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIHRhc2tEaXZzO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdC8vISBDcmVhdGUgY29udGVudFxyXG5cdHN0YXRpYyBjcmVhdGVQcm9qZWN0KHByb2plY3QpIHtcclxuXHRcdGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xyXG5cdFx0Y29uc3QgbmV3QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHRcdG5ld0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b25cIik7XHJcblx0XHRuZXdCdXR0b24uaW5uZXJIVE1MID0gYFxyXG5cdFx0XHQ8c3Bhbj4ke3Byb2plY3QubmFtZX08L3NwYW4+XHJcblx0XHRcdDxpPiZ0aW1lczs8L2k+XHJcblx0XHRgO1xyXG5cdFx0cHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdCdXR0b24pO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gbmV3QnV0dG9uO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGNyZWF0ZVRhc2sodGFzaykge1xyXG5cdFx0bGV0IHRhc2tDb250YWluZXI7XHJcblx0XHRpZiAodGFzay5jb21wbGV0ZWQgPT09IGZhbHNlKSB7XHJcblx0XHRcdHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzXCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tcGxldGVkXCIpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHR0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xyXG5cdFx0dGFza0Rpdi5pbm5lckhUTUwgPSBgXHJcblx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInRhc2stY2hlY2tib3hcIj5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cInRhc2stYnV0dG9uXCI+XHJcblx0XHRcdFx0PHNwYW4+JHt0YXNrLm5hbWV9PC9zcGFuPlxyXG5cdFx0XHRcdDxpPiZ0aW1lczs8L2k+XHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidGFzay1leHBhbmRcIj5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInRhc2stbmFtZS1lZGl0XCIgbmFtZT1cIk5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiB2YWx1ZT1cIiR7dGFzay5uYW1lfVwiPlxyXG5cdFx0XHRcdDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIGNsYXNzPVwidGFzay1kZXNjcmlwdGlvbi1lZGl0XCIgbmFtZT1cIkRlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiPiR7dGFzay5kZXNjcmlwdGlvbn08L3RleHRhcmVhPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdGA7XHJcblx0XHRpZiAodGFzay5jb21wbGV0ZWQgPT09IHRydWUpIHtcclxuXHRcdFx0dGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuY2hlY2tlZCA9IHRydWU7XHJcblx0XHR9XHJcblx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xyXG5cdFx0cmV0dXJuIHRhc2tEaXY7XHJcblx0fVxyXG5cclxuXHQvLyEgRXhwYW5kIG9yIGNvbGxhcHNlIGNvbnRlbnRcclxuXHRzdGF0aWMgZXhwYW5kQ29sbGFwc2VTaWRlYmFyKCkge1xyXG5cdFx0Y29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhclwiKTtcclxuXHRcdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXhwYW5kLWNvbGxhcHNlLXNpZGViYXJcIik7XHJcblxyXG5cdFx0aWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gXCLil4BcIikge1xyXG5cdFx0XHRzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJjbG9zZVwiKTtcclxuXHRcdFx0YnV0dG9uLnRleHRDb250ZW50ID0gXCLilrZcIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcImNsb3NlXCIpO1xyXG5cdFx0XHRidXR0b24udGV4dENvbnRlbnQgPSBcIuKXgFwiO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRzdGF0aWMgZXhwYW5kQ29sbGFwc2VUYXNrKHRhc2tCdXR0b24sIHRhc2spIHtcclxuXHRcdGNvbnN0IHRhc2tFeHBhbmQgPSB0YXNrQnV0dG9uLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1leHBhbmRcIik7XHJcblxyXG5cdFx0dGFza0V4cGFuZC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbmFtZS1lZGl0XCIpLnZhbHVlID0gdGFzay5uYW1lO1xyXG5cdFx0dGFza0V4cGFuZC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGVzY3JpcHRpb24tZWRpdFwiKS52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XHJcblx0XHR0YXNrRXhwYW5kLnN0eWxlLmRpc3BsYXkgPSAodGFza0V4cGFuZC5zdHlsZS5kaXNwbGF5ID09PSBcImZsZXhcIiA/IFwibm9uZVwiIDogXCJmbGV4XCIpO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vISBGaW5kIGNvbnRlbnRcclxuXHRzdGF0aWMgZmluZFByb2plY3QocHJvamVjdE5hbWUpIHtcclxuXHRcdGxldCBwcm9qZWN0Rm91bmQ7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtYnV0dG9uXCIpLmZvckVhY2goKHByb2plY3RCdXR0b24pID0+IHtcclxuXHRcdFx0aWYgKHByb2plY3RCdXR0b24ucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQgPT09IHByb2plY3ROYW1lKSB7XHJcblx0XHRcdFx0cHJvamVjdEZvdW5kID0gcHJvamVjdEJ1dHRvbjtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gcHJvamVjdEZvdW5kO1xyXG5cdH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vbW9kdWxlcy90YXNrLmpzXCI7XHJcbmltcG9ydCBVSSBmcm9tIFwiLi9tb2R1bGVzL3VpLmpzXCI7XHJcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL21vZHVsZXMvc3RvcmFnZS5qc1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcclxuXHJcbi8vICEgUHJvamVjdFxyXG5sZXQgc2VsZWN0ZWRQcm9qZWN0O1xyXG5cclxuZnVuY3Rpb24gcHJvamVjdFNlbGVjdChidXR0b24pIHtcclxuXHRjb25zdCBwcm9qZWN0ID0gU3RvcmFnZS5maW5kUHJvamVjdChidXR0b24ucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQpO1xyXG5cclxuXHRpZiAoc2VsZWN0ZWRQcm9qZWN0ICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdHNlbGVjdGVkUHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcblx0fVxyXG5cdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcblx0c2VsZWN0ZWRQcm9qZWN0ID0gYnV0dG9uO1xyXG5cclxuXHRjb25zdCB0YXNrcyA9IFVJLmxvYWRUYXNrcyhwcm9qZWN0KTtcclxuXHR0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG5cdFx0YWRkVGFza0V2ZW50cyh0YXNrKTtcclxuXHR9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvamVjdERlbGV0ZShldmVudCwgYnV0dG9uKSB7XHJcblx0Y29uc3QgcHJvamVjdCA9IFN0b3JhZ2UuZmluZFByb2plY3QoYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnRleHRDb250ZW50KTtcclxuXHJcblx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0U3RvcmFnZS5kZWxldGVQcm9qZWN0KHByb2plY3QpO1xyXG5cdFVJLmZpbmRQcm9qZWN0KHByb2plY3QubmFtZSkucmVtb3ZlKCk7XHJcblxyXG5cdGNvbnN0IG5leHRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWJ1dHRvblwiKTtcclxuXHRpZiAobmV4dFByb2plY3QgIT09IG51bGwpIHtcclxuXHRcdG5leHRQcm9qZWN0LmNsaWNrKCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdFVJLmxvYWRUYXNrcygpO1xyXG5cdH1cclxufVxyXG5cclxuLy9BZGQgcHJvamVjdCBldmVudHMgZm9yIG5ldyBidXR0b25zIGJlaW5nIGFkZGVkXHJcbmZ1bmN0aW9uIGFkZFByb2plY3RFdmVudHMoYnV0dG9uKSB7XHJcblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBwcm9qZWN0U2VsZWN0KGJ1dHRvbikpO1xyXG5cdGJ1dHRvbi5xdWVyeVNlbGVjdG9yKFwiaVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiBwcm9qZWN0RGVsZXRlKGV2ZW50LCBidXR0b24pKTtcclxufVxyXG5cclxuXHJcbi8vICEgQWRkaW5nIG5ldyBwcm9qZWN0c1xyXG5jb25zdCBhZGRQcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LXBvcHVwXCIpO1xyXG5jb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtcG9wdXAtaW5wdXRcIik7XHJcblxyXG5mdW5jdGlvbiBuZXdQcm9qZWN0Q2xpY2soKSB7XHJcblx0bmV3UHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xyXG5cdG5ld1Byb2plY3ROYW1lLnBsYWNlaG9sZGVyID0gXCJcIjtcclxuXHRhZGRQcm9qZWN0UG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRuZXdQcm9qZWN0TmFtZS5mb2N1cygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdQcm9qZWN0Q2FuY2VsKCkge1xyXG5cdGFkZFByb2plY3RQb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld1Byb2plY3RBZGQoKSB7XHJcblx0aWYgKG5ld1Byb2plY3ROYW1lLnZhbHVlID09PSBcIlwiKSB7XHJcblx0XHRuZXdQcm9qZWN0TmFtZS5wbGFjZWhvbGRlciA9IFwiTmFtZSBjYW4ndCBiZSBibGFua1wiO1xyXG5cdH0gZWxzZSBpZiAoU3RvcmFnZS5maW5kUHJvamVjdChuZXdQcm9qZWN0TmFtZS52YWx1ZSkgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0bmV3UHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xyXG5cdFx0bmV3UHJvamVjdE5hbWUucGxhY2Vob2xkZXIgPSBcIk5hbWUgaXMgYWxyZWFkeSB1c2VkXCI7XHJcblx0fSBlbHNlIHtcclxuXHRcdG5ld1Byb2plY3RDYW5jZWwoKTtcclxuXHJcblx0XHRjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QobmV3UHJvamVjdE5hbWUudmFsdWUpO1xyXG5cdFx0Y29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IFVJLmNyZWF0ZVByb2plY3QobmV3UHJvamVjdCk7XHJcblx0XHRTdG9yYWdlLmFkZFByb2plY3QobmV3UHJvamVjdCk7XHJcblxyXG5cdFx0YWRkUHJvamVjdEV2ZW50cyhuZXdQcm9qZWN0QnV0dG9uKTtcclxuXHR9XHJcbn1cclxuXHJcbi8vQWRkIHByb2plY3QgaWYgdGhlIEVudGVyIGtleSBpcyBwcmVzc2VkIGluIHRoZSBpbnB1dCBib3hcclxuZnVuY3Rpb24gbmV3UHJvamVjdElucHV0S2V5dXAoZXZlbnQpIHtcclxuXHRpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtcG9wdXAtYWRkXCIpLmNsaWNrKCk7XHJcblx0fVxyXG59XHJcblxyXG4vL0NsZWFyIHRoZSBwbGFjZWhvbGRlciAoY2FuJ3QgYmUgYmxhbmsgbWVzc2FnZSkgb24gaW5wdXQgZm9jdXNcclxuZnVuY3Rpb24gbmV3UHJvamVjdElucHV0Rm9jdXMoKSB7XHJcblx0bmV3UHJvamVjdE5hbWUucGxhY2Vob2xkZXIgPSBcIlwiO1xyXG59XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1wcm9qZWN0LWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3UHJvamVjdENsaWNrKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1wb3B1cC1jYW5jZWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Byb2plY3RDYW5jZWwpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LXBvcHVwLWFkZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3UHJvamVjdEFkZCk7XHJcbm5ld1Byb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBuZXdQcm9qZWN0SW5wdXRGb2N1cyk7XHJcbm5ld1Byb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBuZXdQcm9qZWN0SW5wdXRLZXl1cCk7XHJcblxyXG4vLyEgU2lkZWJhciBPcGVuL0Nsb3NlIEJ1dHRvblxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNleHBhbmQtY29sbGFwc2Utc2lkZWJhclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkuZXhwYW5kQ29sbGFwc2VTaWRlYmFyKTtcclxuXHJcblxyXG4vLyAhIFJlbmFtaW5nIHByb2plY3RcclxuY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdGVkLXByb2plY3RcIik7XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0TmFtZUlucHV0KCkge1xyXG5cdGlmIChwcm9qZWN0TmFtZS52YWx1ZSAhPT0gc2VsZWN0ZWRQcm9qZWN0Lm5hbWUpIHtcclxuXHRcdHByb2plY3ROYW1lLnN0eWxlLmNvbG9yID0gXCJncmF5XCI7XHJcblx0XHRwcm9qZWN0TmFtZS5zdHlsZS5mb250U3R5bGUgPSBcIml0YWxpY1wiO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRwcm9qZWN0TmFtZS5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcclxuXHRcdHByb2plY3ROYW1lLnN0eWxlLmZvbnRTdHlsZSA9IFwibm9ybWFsXCI7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0TmFtZURlZm9jdXMoKSB7XHJcblx0Y29uc3QgY3VycmVudFByb2plY3QgPSBTdG9yYWdlLmZpbmRQcm9qZWN0KHNlbGVjdGVkUHJvamVjdC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS50ZXh0Q29udGVudCk7XHJcblxyXG5cdGlmIChwcm9qZWN0TmFtZS52YWx1ZSAhPT0gXCJcIikge1xyXG5cdFx0Y29uc3QgbmV3UHJvamVjdFZlcnNpb24gPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSwgY3VycmVudFByb2plY3QudGFza3MpO1xyXG5cdFx0U3RvcmFnZS51cGRhdGVQcm9qZWN0KGN1cnJlbnRQcm9qZWN0Lm5hbWUsIG5ld1Byb2plY3RWZXJzaW9uKTtcclxuXHRcdHNlbGVjdGVkUHJvamVjdC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lLnZhbHVlO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRwcm9qZWN0TmFtZS52YWx1ZSA9IGN1cnJlbnRQcm9qZWN0O1xyXG5cdH1cclxuXHRwcm9qZWN0TmFtZS5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcclxuXHRwcm9qZWN0TmFtZS5zdHlsZS5mb250U3R5bGUgPSBcIm5vcm1hbFwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0TmFtZUtleWRvd24oZXZlbnQpIHtcclxuXHRpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vUHJldmVudCBjcmVhdGluZyBhIG5ldyBsaW5lXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0TmFtZUtleXVwKGV2ZW50KSB7XHJcblx0aWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcblx0XHRwcm9qZWN0TmFtZS5ibHVyKCk7XHJcblx0fVxyXG59XHJcblxyXG5wcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgcHJvamVjdE5hbWVJbnB1dCk7XHJcbnByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHByb2plY3ROYW1lRGVmb2N1cyk7XHJcbnByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHByb2plY3ROYW1lS2V5ZG93bik7XHJcbnByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBwcm9qZWN0TmFtZUtleXVwKTtcclxuXHJcblxyXG4vLyAhIFRhc2tzXHJcbmZ1bmN0aW9uIHRhc2tDb21wbGV0ZShldmVudCwgdGFza0RpdiwgaW5wdXQpIHtcclxuXHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRjb25zdCBjdXJyZW50UHJvamVjdCA9IFN0b3JhZ2UuZmluZFByb2plY3Qoc2VsZWN0ZWRQcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnRleHRDb250ZW50KTtcclxuXHRjb25zdCBjdXJyZW50VGFzayA9IFN0b3JhZ2UuZmluZFRhc2soY3VycmVudFByb2plY3QsIHRhc2tEaXYucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQpO1xyXG5cdGxldCBuZXdUYXNrVmVyc2lvbiA9IG5ldyBUYXNrKGN1cnJlbnRUYXNrLm5hbWUsIGN1cnJlbnRUYXNrLmRlc2NyaXB0aW9uKTtcclxuXHJcblx0aWYgKGlucHV0LmNoZWNrZWQgPT0gZmFsc2UpIHtcclxuXHRcdG5ld1Rhc2tWZXJzaW9uLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrc1wiKS5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0bmV3VGFza1ZlcnNpb24uY29tcGxldGVkID0gdHJ1ZTtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tcGxldGVkXCIpLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xyXG5cdH1cclxuXHRTdG9yYWdlLnVwZGF0ZVRhc2soY3VycmVudFByb2plY3QsIGN1cnJlbnRUYXNrLm5hbWUsIG5ld1Rhc2tWZXJzaW9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdGFza0NsaWNrKHRhc2tEaXYpIHtcclxuXHJcblx0Y29uc3QgY3VycmVudFByb2plY3QgPSBTdG9yYWdlLmZpbmRQcm9qZWN0KHNlbGVjdGVkUHJvamVjdC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS50ZXh0Q29udGVudCk7XHJcblx0Y29uc3QgY3VycmVudFRhc2sgPSBTdG9yYWdlLmZpbmRUYXNrKGN1cnJlbnRQcm9qZWN0LCB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnRleHRDb250ZW50KTtcclxuXHJcblx0aWYgKHRhc2tEaXYucXVlcnlTZWxlY3RvcihcIi50YXNrLWV4cGFuZFwiKS5zdHlsZS5kaXNwbGF5ICE9PSBcIm5vbmVcIikge1xyXG5cdFx0bGV0IG5ld1Rhc2tWZXJzaW9uID0gbmV3IFRhc2soY3VycmVudFRhc2submFtZSwgY3VycmVudFRhc2suZGVzY3JpcHRpb24pO1xyXG5cclxuXHRcdGNvbnN0IG9sZFRhc2tOYW1lID0gY3VycmVudFRhc2submFtZTtcclxuXHRcdGNvbnN0IG5hbWVJbnB1dCA9IHRhc2tEaXYucXVlcnlTZWxlY3RvcihcIi50YXNrLW5hbWUtZWRpdFwiKTtcclxuXHRcdGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXNjcmlwdGlvbi1lZGl0XCIpO1xyXG5cdFx0XHJcblx0XHRpZiAobmFtZUlucHV0LnZhbHVlICE9PSBcIlwiKSB7XHJcblx0XHRcdG5ld1Rhc2tWZXJzaW9uLm5hbWUgPSBuYW1lSW5wdXQudmFsdWU7XHJcblx0XHRcdHRhc2tEaXYucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQgPSBuZXdUYXNrVmVyc2lvbi5uYW1lO1xyXG5cdFx0fVxyXG5cdFx0bmV3VGFza1ZlcnNpb24uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xyXG5cdFx0bmV3VGFza1ZlcnNpb24uY29tcGxldGVkID0gdGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY2hlY2tib3hcIikuY2hlY2tlZDtcclxuXHRcdFN0b3JhZ2UudXBkYXRlVGFzayhjdXJyZW50UHJvamVjdCwgb2xkVGFza05hbWUsIG5ld1Rhc2tWZXJzaW9uKTtcclxuXHR9XHJcblxyXG5cdFVJLmV4cGFuZENvbGxhcHNlVGFzayh0YXNrRGl2LCBjdXJyZW50VGFzayk7XHJcbn1cclxuXHJcbi8vRWRpdCB0YXNrIGlmIHRoZSBFbnRlciBrZXkgaXMgcHJlc3NlZCBpbiBhbiBpbnB1dCBib3hcclxuZnVuY3Rpb24gdGFza0lucHV0S2V5dXAoZXZlbnQsIHRhc2tEaXYpIHtcclxuXHRpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuXHRcdHRhc2tEaXYucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKS5jbGljaygpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdGFza0RlbGV0ZShldmVudCwgdGFza0Rpdikge1xyXG5cdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gU3RvcmFnZS5maW5kUHJvamVjdChzZWxlY3RlZFByb2plY3QucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQpO1xyXG5cdGNvbnN0IGN1cnJlbnRUYXNrID0gU3RvcmFnZS5maW5kVGFzayhjdXJyZW50UHJvamVjdCwgdGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS50ZXh0Q29udGVudCk7XHJcblxyXG5cdFN0b3JhZ2UuZGVsZXRlVGFzayhjdXJyZW50UHJvamVjdCwgY3VycmVudFRhc2spO1xyXG5cdHRhc2tEaXYucmVtb3ZlKCk7XHJcbn1cclxuXHJcbi8vQWRkIHRhc2sgZXZlbnRzIGZvciBuZXcgZGl2cyBiZWluZyBhZGRlZFxyXG5mdW5jdGlvbiBhZGRUYXNrRXZlbnRzKHRhc2tEaXYpIHtcclxuXHR0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB0YXNrQ29tcGxldGUoZXZlbnQsIHRhc2tEaXYsIHRhc2tEaXYucXVlcnlTZWxlY3RvcihcImlucHV0XCIpKSk7XHJcblx0dGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0YXNrQ2xpY2sodGFza0RpdikpO1xyXG5cdHRhc2tEaXYucXVlcnlTZWxlY3RvcihcIi50YXNrLW5hbWUtZWRpdFwiKS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGV2ZW50KSA9PiB0YXNrSW5wdXRLZXl1cChldmVudCwgdGFza0RpdikpO1xyXG5cdHRhc2tEaXYucXVlcnlTZWxlY3RvcihcImlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4gdGFza0RlbGV0ZShldmVudCwgdGFza0RpdikpO1xyXG59XHJcblxyXG5cclxuLy8gISBBZGRpbmcgbmV3IHRhc2tzXHJcbmNvbnN0IGFkZFRhc2tQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stcG9wdXBcIik7XHJcbmNvbnN0IG5ld1Rhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1wb3B1cC1pbnB1dFwiKTtcclxuXHJcbmZ1bmN0aW9uIG5ld1Rhc2tDbGljaygpIHtcclxuXHRuZXdUYXNrTmFtZS52YWx1ZSA9IFwiXCI7XHJcblx0bmV3VGFza05hbWUucGxhY2Vob2xkZXIgPSBcIlwiO1xyXG5cdGFkZFRhc2tQb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdG5ld1Rhc2tOYW1lLmZvY3VzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld1Rhc2tDYW5jZWwoKSB7XHJcblx0YWRkVGFza1BvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV3VGFza0FkZCgpIHtcclxuXHRjb25zdCBjdXJyZW50UHJvamVjdCA9IFN0b3JhZ2UuZmluZFByb2plY3Qoc2VsZWN0ZWRQcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnRleHRDb250ZW50KTtcclxuXHJcblx0aWYgKG5ld1Rhc2tOYW1lLnZhbHVlID09PSBcIlwiKSB7XHJcblx0XHRuZXdUYXNrTmFtZS5wbGFjZWhvbGRlciA9IFwiTmFtZSBjYW4ndCBiZSBibGFua1wiO1xyXG5cdH0gZWxzZSBpZiAoU3RvcmFnZS5maW5kVGFzayhjdXJyZW50UHJvamVjdCwgbmV3VGFza05hbWUudmFsdWUpICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdG5ld1Rhc2tOYW1lLnZhbHVlID0gXCJcIjtcclxuXHRcdG5ld1Rhc2tOYW1lLnBsYWNlaG9sZGVyID0gXCJOYW1lIGlzIGFscmVhZHkgdXNlZFwiO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRuZXdUYXNrQ2FuY2VsKCk7XHJcblxyXG5cdFx0Y29uc3QgbmV3VGFza1ZlcnNpb24gPSBuZXcgVGFzayhuZXdUYXNrTmFtZS52YWx1ZSk7XHJcblx0XHRjb25zdCBuZXdUYXNrRGl2ID0gVUkuY3JlYXRlVGFzayhuZXdUYXNrVmVyc2lvbik7XHJcblx0XHRTdG9yYWdlLmFkZFRhc2soY3VycmVudFByb2plY3QsIG5ld1Rhc2tWZXJzaW9uKTtcclxuXHJcblx0XHRhZGRUYXNrRXZlbnRzKG5ld1Rhc2tEaXYpO1xyXG5cdH1cclxufVxyXG5cclxuLy9DbGVhciB0aGUgcGxhY2Vob2xkZXIgKGNhbid0IGJlIGJsYW5rIG1lc3NhZ2UpIG9uIGlucHV0IGZvY3VzXHJcbmZ1bmN0aW9uIG5ld1Rhc2tJbnB1dEZvY3VzKCkge1xyXG5cdG5ld1Rhc2tOYW1lLnBsYWNlaG9sZGVyID0gXCJcIjtcclxufVxyXG5cclxuLy9BZGQgdGFzayBpZiB0aGUgRW50ZXIga2V5IGlzIHByZXNzZWQgaW4gdGhlIGlucHV0IGJveFxyXG5mdW5jdGlvbiBuZXdUYXNrSW5wdXRLZXl1cChldmVudCkge1xyXG5cdGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1wb3B1cC1hZGRcIikuY2xpY2soKTtcclxuXHR9XHJcbn1cclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdUYXNrQ2xpY2spO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLXBvcHVwLWNhbmNlbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3VGFza0NhbmNlbCk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stcG9wdXAtYWRkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdUYXNrQWRkKTtcclxubmV3VGFza05hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIG5ld1Rhc2tJbnB1dEZvY3VzKTtcclxubmV3VGFza05hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIG5ld1Rhc2tJbnB1dEtleXVwKTtcclxuXHJcblxyXG4vLyEgSW5pdGlhbGl6ZSBwYWdlXHJcblVJLmxvYWRQYWdlKCk7XHJcblN0b3JhZ2UuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcblx0YWRkUHJvamVjdEV2ZW50cyhVSS5maW5kUHJvamVjdChwcm9qZWN0Lm5hbWUpKTtcclxufSk7XHJcblxyXG4vL3RvZG86IGZpZ3VyZSBvdXQgd2h5IHVwZGF0aW5nIHRhc2tzIGRvZXNuJ3Qgc2F2ZSJdLCJzb3VyY2VSb290IjoiIn0=