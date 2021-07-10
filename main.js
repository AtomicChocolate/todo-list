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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n\theight: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: flex-start;\r\n\tmargin: 0;\r\n\tfont-size: 1.6rem;\r\n\tfont-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n\tcolor: white;\r\n}\r\n\r\nbutton {\r\n\tpadding: 0.2rem;\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tborder-style: none;\r\n\tborder-radius: 5px;\r\n\tbackground-color: inherit;\r\n\tcolor: lightgray;\r\n}\r\n\r\nbutton:hover {\r\n\tbackground-color: #444;\r\n}\r\n\r\ninput {\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tborder-style: none;\r\n\toutline: none;\r\n\tborder-radius: 5px;\r\n\tbackground-color: inherit;\r\n\tcolor: inherit;\r\n}\r\n\r\ntextarea {\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tcolor: inherit;\r\n\tbackground-color: inherit;\r\n\tborder: none;\r\n\tresize: none;\r\n}\r\n\r\ni {\r\n\tcursor: pointer;\r\n}\r\n\r\n.selected {\r\n\tbackground-color: #444;\r\n}\r\n\r\n.selected.project-button {\r\n\tfont-weight: bold;\r\n}\r\n\r\n/* ! Sidebar */\r\n#sidebar {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: 300px;\r\n\theight: 100%;\r\n\toverflow-x: visible;\r\n\toverflow-y: auto;\r\n\tbackground-color: #333;\r\n}\r\n\r\n#expand-collapse-sidebar {\r\n\tvisibility: hidden;\r\n\tposition: fixed;\r\n\tbottom: 0;\r\n\twidth: 3rem;\r\n\theight: 3rem;\r\n\tborder-radius: 0px 5px 0px 0px;\r\n\tbackground-color: #444;\r\n}\r\n\r\n#expand-collapse-sidebar:hover {\r\n\tbackground-color: #555;\r\n}\r\n\r\n#title {\r\n\tfont-size: 2rem;\r\n\ttext-align: center;\r\n\tmargin: 1rem 0 1rem 0;\r\n}\r\n\r\n.project-button {\r\n\twidth: 100%;\r\n\ttext-align: left;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tcolor: white;\r\n}\r\n\r\n.project-button:hover, #new-project-button:hover {\r\n\tbackground-color: #444;\r\n}\r\n\r\n.project-button.active {\r\n\tfont-weight: bold;\r\n}\r\n\r\n#new-project-button {\r\n\tcolor: lightgray;\r\n\ttext-align: center;\r\n\tbackground-color: #111;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n#add-project-popup {\r\n\tpadding: 0.5rem 1rem 0;\r\n\ttext-align: center;\r\n\tdisplay: none;\r\n}\r\n\r\n#add-project-popup-input {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.5rem;\r\n\tbackground-color: #111;\r\n}\r\n\r\n#add-project-popup-input::placeholder {\r\n\tcolor: rgb(255, 65, 65);\r\n}\r\n\r\n#add-project-popup-buttons {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n}\r\n\r\n.add-project-popup-button {\r\n\twidth: 45%;\r\n\tfont-size: 0.9rem;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#add-project-popup-add {\r\n\tbackground-color: rgb(0, 140, 0);\r\n}\r\n\r\n#add-project-popup-add:hover {\r\n\tbackground-color: rgb(0, 100, 0);\r\n}\r\n\r\n#add-project-popup-cancel {\r\n\tbackground-color: rgb(140, 0, 0);\r\n}\r\n\r\n#add-project-popup-cancel:hover {\r\n\tbackground-color: rgb(100, 0, 0);\r\n}\r\n\r\n#sidebar-footer {\r\n\twidth: 100%;\r\n\tbackground-color: #111;\r\n\tfont-size: 1rem;\r\n\tmargin-top: auto;\r\n\ttext-align: center;\r\n}\r\n\r\n/* ! Main */\r\n.task-expand {\r\n\tdisplay: none;\t\r\n}\r\n\r\n#main {\r\n\tflex-grow: 1;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\tbackground-color: #222;\r\n}\r\n\r\n#selected-project {\r\n\tfont-size: 2rem;\r\n\tfont-weight: bold;\r\n\tmargin-left: 1rem;\r\n\tmargin-top: 1rem;\r\n\tpadding: 0;\r\n\twidth: 100%;\r\n\theight: 2.5rem;\r\n\tfont-size: 2rem;\r\n}\r\n\r\n#tasks-container {\r\n\twidth: 50%;\r\n\tmin-width: 15rem;\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.tasks-label {\r\n\tfont-weight: bold;\r\n\tmargin: 0;\r\n\tmargin-top: 1rem;\r\n}\r\n\r\n#task-button {\r\n\tdisplay: flex;\r\n}\r\n\r\n#task-button i {\r\n\tmargin-left: auto;\r\n\twidth: 100%;\r\n\talign-items: center;\r\n}\r\n\r\n#new-task-button {\r\n\tbackground-color: #111;\r\n\tborder-radius: 5px;\r\n\tmargin-top: 0.5rem;\r\n}\r\n\r\n#add-task-popup {\r\n\tpadding: 0.5rem 1rem 0;\r\n\twidth: 16rem;\r\n\ttext-align: center;\r\n\tdisplay: none;\r\n}\r\n\r\n#add-task-popup-input {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.5rem;\r\n\tbackground-color: #111;\r\n}\r\n\r\n#add-task-popup-input::placeholder {\r\n\tcolor: rgb(255, 65, 65);\r\n}\r\n\r\n#add-task-popup-buttons {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n}\r\n\r\n.add-task-popup-button {\r\n\twidth: 45%;\r\n\tfont-size: 0.9rem;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#add-task-popup-add {\r\n\tbackground-color: rgb(0, 140, 0);\r\n}\r\n\r\n#add-task-popup-add:hover {\r\n\tbackground-color: rgb(0, 100, 0);\r\n}\r\n\r\n#add-task-popup-cancel {\r\n\tbackground-color: rgb(140, 0, 0);\r\n}\r\n\r\n#add-task-popup-cancel:hover {\r\n\tbackground-color: rgb(100, 0, 0);\r\n}\r\n\r\n#completed button {\r\n\tcolor: gray;\r\n\tfont-style: italic; \r\n}\r\n\r\n.task-expand {\r\n\tflex-direction: column;\r\n\tbackground-color: #111;\r\n\tmargin: 0.2rem;\r\n\tpadding: 1rem;\r\n}\r\n\r\n.task-expand input {\r\n\tbackground-color: #222;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.task-name-edit {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.1rem;\r\n}\r\n\r\n.task-description-edit {\r\n\twidth: 100%;\r\n\tfont-size: 1.6rem;\r\n\tfont-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n\tcolor: white;\r\n\tresize: vertical;\r\n}\r\n\r\n/* ! Media Queries */\r\n\r\n@media (max-width: 700px) {\r\n\t#sidebar {\r\n\t\twidth: 80%;\r\n\t\tposition: fixed;\r\n\t}\r\n\r\n\t#sidebar.close {\r\n\t\tleft: -80%;\r\n\t\ttransition-duration: 0.25s;\r\n\t}\r\n\r\n\t#project-button, #new-project-button, #add-project-popup-input, .add-project-popup-button {\r\n\t\tpadding-top: 0.5rem;\r\n\t\tpadding-bottom: 0.5rem;\r\n\t}\r\n\r\n\t#expand-collapse-sidebar {\r\n\t\tvisibility: visible;\r\n\t}\r\n\t\r\n\t#main, textarea {\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t#selected-project {\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n\t#tasks-container {\r\n\t\tmargin-left: 0;\r\n\t\twidth: 100%;\r\n\t}\r\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n\theight: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: flex-start;\r\n\tmargin: 0;\r\n\tfont-size: 1.6rem;\r\n\tfont-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n\tcolor: white;\r\n}\r\n\r\nbutton {\r\n\tpadding: 0.2rem;\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tborder-style: none;\r\n\tborder-radius: 5px;\r\n\tbackground-color: inherit;\r\n\tcolor: lightgray;\r\n}\r\n\r\nbutton:hover {\r\n\tbackground-color: #444;\r\n}\r\n\r\ninput {\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tborder-style: none;\r\n\toutline: none;\r\n\tborder-radius: 5px;\r\n\tbackground-color: inherit;\r\n\tcolor: inherit;\r\n}\r\n\r\ntextarea {\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tcolor: inherit;\r\n\tbackground-color: inherit;\r\n\tborder: none;\r\n\tresize: none;\r\n}\r\n\r\ni {\r\n\tcursor: pointer;\r\n}\r\n\r\n.selected {\r\n\tbackground-color: #444;\r\n}\r\n\r\n.selected.project-button {\r\n\tfont-weight: bold;\r\n}\r\n\r\n/* ! Sidebar */\r\n#sidebar {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: 300px;\r\n\theight: 100%;\r\n\toverflow-x: visible;\r\n\toverflow-y: auto;\r\n\tbackground-color: #333;\r\n}\r\n\r\n#expand-collapse-sidebar {\r\n\tvisibility: hidden;\r\n\tposition: fixed;\r\n\tbottom: 0;\r\n\twidth: 3rem;\r\n\theight: 3rem;\r\n\tborder-radius: 0px 5px 0px 0px;\r\n\tbackground-color: #444;\r\n}\r\n\r\n#expand-collapse-sidebar:hover {\r\n\tbackground-color: #555;\r\n}\r\n\r\n#title {\r\n\tfont-size: 2rem;\r\n\ttext-align: center;\r\n\tmargin: 1rem 0 1rem 0;\r\n}\r\n\r\n.project-button {\r\n\twidth: 100%;\r\n\ttext-align: left;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tcolor: white;\r\n}\r\n\r\n.project-button:hover, #new-project-button:hover {\r\n\tbackground-color: #444;\r\n}\r\n\r\n.project-button.active {\r\n\tfont-weight: bold;\r\n}\r\n\r\n#new-project-button {\r\n\tcolor: lightgray;\r\n\ttext-align: center;\r\n\tbackground-color: #111;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n#add-project-popup {\r\n\tpadding: 0.5rem 1rem 0;\r\n\ttext-align: center;\r\n\tdisplay: none;\r\n}\r\n\r\n#add-project-popup-input {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.5rem;\r\n\tbackground-color: #111;\r\n}\r\n\r\n#add-project-popup-input::placeholder {\r\n\tcolor: rgb(255, 65, 65);\r\n}\r\n\r\n#add-project-popup-buttons {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n}\r\n\r\n.add-project-popup-button {\r\n\twidth: 45%;\r\n\tfont-size: 0.9rem;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#add-project-popup-add {\r\n\tbackground-color: rgb(0, 140, 0);\r\n}\r\n\r\n#add-project-popup-add:hover {\r\n\tbackground-color: rgb(0, 100, 0);\r\n}\r\n\r\n#add-project-popup-cancel {\r\n\tbackground-color: rgb(140, 0, 0);\r\n}\r\n\r\n#add-project-popup-cancel:hover {\r\n\tbackground-color: rgb(100, 0, 0);\r\n}\r\n\r\n#sidebar-footer {\r\n\twidth: 100%;\r\n\tbackground-color: #111;\r\n\tfont-size: 1rem;\r\n\tmargin-top: auto;\r\n\ttext-align: center;\r\n}\r\n\r\n/* ! Main */\r\n.task-expand {\r\n\tdisplay: none;\t\r\n}\r\n\r\n#main {\r\n\tflex-grow: 1;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\tbackground-color: #222;\r\n}\r\n\r\n#selected-project {\r\n\tfont-size: 2rem;\r\n\tfont-weight: bold;\r\n\tmargin-left: 1rem;\r\n\tmargin-top: 1rem;\r\n\tpadding: 0;\r\n\twidth: 100%;\r\n\theight: 2.5rem;\r\n\tfont-size: 2rem;\r\n}\r\n\r\n#tasks-container {\r\n\twidth: 50%;\r\n\tmin-width: 15rem;\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.tasks-label {\r\n\tfont-weight: bold;\r\n\tmargin: 0;\r\n\tmargin-top: 1rem;\r\n}\r\n\r\n#task-button {\r\n\tdisplay: flex;\r\n}\r\n\r\n#task-button i {\r\n\tmargin-left: auto;\r\n\twidth: 100%;\r\n\talign-items: center;\r\n}\r\n\r\n#new-task-button {\r\n\tbackground-color: #111;\r\n\tborder-radius: 5px;\r\n\tmargin-top: 0.5rem;\r\n}\r\n\r\n#add-task-popup {\r\n\tpadding: 0.5rem 1rem 0;\r\n\twidth: 16rem;\r\n\ttext-align: center;\r\n\tdisplay: none;\r\n}\r\n\r\n#add-task-popup-input {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.5rem;\r\n\tbackground-color: #111;\r\n}\r\n\r\n#add-task-popup-input::placeholder {\r\n\tcolor: rgb(255, 65, 65);\r\n}\r\n\r\n#add-task-popup-buttons {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n}\r\n\r\n.add-task-popup-button {\r\n\twidth: 45%;\r\n\tfont-size: 0.9rem;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#add-task-popup-add {\r\n\tbackground-color: rgb(0, 140, 0);\r\n}\r\n\r\n#add-task-popup-add:hover {\r\n\tbackground-color: rgb(0, 100, 0);\r\n}\r\n\r\n#add-task-popup-cancel {\r\n\tbackground-color: rgb(140, 0, 0);\r\n}\r\n\r\n#add-task-popup-cancel:hover {\r\n\tbackground-color: rgb(100, 0, 0);\r\n}\r\n\r\n#completed button {\r\n\tcolor: gray;\r\n\tfont-style: italic; \r\n}\r\n\r\n.task-expand {\r\n\tflex-direction: column;\r\n\tbackground-color: #111;\r\n\tmargin: 0.2rem;\r\n\tpadding: 1rem;\r\n}\r\n\r\n.task-expand input {\r\n\tbackground-color: #222;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.task-name-edit {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.1rem;\r\n}\r\n\r\n.task-description-edit {\r\n\twidth: 100%;\r\n\tfont-size: 1.6rem;\r\n\tfont-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n\tcolor: white;\r\n\tresize: vertical;\r\n}\r\n\r\n/* ! Media Queries */\r\n\r\n@media (max-width: 700px) {\r\n\t#sidebar {\r\n\t\twidth: 80%;\r\n\t\tposition: fixed;\r\n\t}\r\n\r\n\t#sidebar.close {\r\n\t\tleft: -80%;\r\n\t\ttransition-duration: 0.25s;\r\n\t}\r\n\r\n\t#project-button, #new-project-button, #add-project-popup-input, .add-project-popup-button {\r\n\t\tpadding-top: 0.5rem;\r\n\t\tpadding-bottom: 0.5rem;\r\n\t}\r\n\r\n\t#expand-collapse-sidebar {\r\n\t\tvisibility: visible;\r\n\t}\r\n\t\r\n\t#main, textarea {\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t#selected-project {\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n\t#tasks-container {\r\n\t\tmargin-left: 0;\r\n\t\twidth: 100%;\r\n\t}\r\n}"],"sourceRoot":""}]);
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
		console.log("save")
		localStorage.setItem('projects', JSON.stringify(projects));
	}

	static getProjects() {
		//Convert data from local storage
		console.log("get")
		projects = JSON.parse(localStorage.getItem('projects'));

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
		})
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
		newButton.classList.add("project-button")
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
	})
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
	button.addEventListener("click", (event) => projectSelect(button));
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
newProjectName.addEventListener("keyup", newProjectInputKeyup)

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
	taskDiv.querySelector("button").addEventListener("click", (event) => taskClick(taskDiv));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7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QUssT0FBTyx1RkFBdUYsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEs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b0VBQW1COztBQUUzQztBQUNBO0FBQ0EsRUFBRSxVQUFVLGlFQUFnQjtBQUM1QjtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBLDZCQUE2QixxREFBSTtBQUNqQyxxQkFBcUIsOERBQWE7QUFDbEMsRUFBRSxnRUFBZTs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLDREQUFXO0FBQ1gsb0VBQW1CO0FBQ25CLGtCQUFrQiwrREFBYztBQUNoQyxDQUFDOztBQUVELGtEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjZyZW07XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcblxcdHBhZGRpbmc6IDAuMnJlbTtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuXFx0Ym9yZGVyLXN0eWxlOiBub25lO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcblxcdGNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRyZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmkge1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQucHJvamVjdC1idXR0b24ge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAhIFNpZGViYXIgKi9cXHJcXG4jc2lkZWJhciB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHR3aWR0aDogMzAwcHg7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdG92ZXJmbG93LXg6IHZpc2libGU7XFxyXFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4jZXhwYW5kLWNvbGxhcHNlLXNpZGViYXIge1xcclxcblxcdHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0Ym90dG9tOiAwO1xcclxcblxcdHdpZHRoOiAzcmVtO1xcclxcblxcdGhlaWdodDogM3JlbTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwcHggNXB4IDBweCAwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXHJcXG59XFxyXFxuXFxyXFxuI2V4cGFuZC1jb2xsYXBzZS1zaWRlYmFyOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGUge1xcclxcblxcdGZvbnQtc2l6ZTogMnJlbTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0bWFyZ2luOiAxcmVtIDAgMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b24ge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b246aG92ZXIsICNuZXctcHJvamVjdC1idXR0b246aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbi5hY3RpdmUge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtYnV0dG9uIHtcXHJcXG5cXHRjb2xvcjogbGlnaHRncmF5O1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LXBvcHVwIHtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMXJlbSAwO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtcG9wdXAtaW5wdXQge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtcG9wdXAtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG5cXHRjb2xvcjogcmdiKDI1NSwgNjUsIDY1KTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LXBvcHVwLWJ1dHRvbnMge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC1wb3B1cC1idXR0b24ge1xcclxcblxcdHdpZHRoOiA0NSU7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjlyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1wb3B1cC1hZGQge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtcG9wdXAtYWRkOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LXBvcHVwLWNhbmNlbCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1wb3B1cC1jYW5jZWw6aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci1mb290ZXIge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdG1hcmdpbi10b3A6IGF1dG87XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAhIE1haW4gKi9cXHJcXG4udGFzay1leHBhbmQge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFx0XFxyXFxufVxcclxcblxcclxcbiNtYWluIHtcXHJcXG5cXHRmbGV4LWdyb3c6IDE7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXHJcXG59XFxyXFxuXFxyXFxuI3NlbGVjdGVkLXByb2plY3Qge1xcclxcblxcdGZvbnQtc2l6ZTogMnJlbTtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxcmVtO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiAyLjVyZW07XFxyXFxuXFx0Zm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3MtY29udGFpbmVyIHtcXHJcXG5cXHR3aWR0aDogNTAlO1xcclxcblxcdG1pbi13aWR0aDogMTVyZW07XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1sYWJlbCB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWJ1dHRvbiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stYnV0dG9uIGkge1xcclxcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzay1idXR0b24ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLXBvcHVwIHtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMXJlbSAwO1xcclxcblxcdHdpZHRoOiAxNnJlbTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLXBvcHVwLWlucHV0IHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzExMTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLXBvcHVwLWlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuXFx0Y29sb3I6IHJnYigyNTUsIDY1LCA2NSk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay1wb3B1cC1idXR0b25zIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2stcG9wdXAtYnV0dG9uIHtcXHJcXG5cXHR3aWR0aDogNDUlO1xcclxcblxcdGZvbnQtc2l6ZTogMC45cmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2stcG9wdXAtYWRkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTQwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLXBvcHVwLWFkZDpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEwMCwgMCk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay1wb3B1cC1jYW5jZWwge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxNDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2stcG9wdXAtY2FuY2VsOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbXBsZXRlZCBidXR0b24ge1xcclxcblxcdGNvbG9yOiBncmF5O1xcclxcblxcdGZvbnQtc3R5bGU6IGl0YWxpYzsgXFxyXFxufVxcclxcblxcclxcbi50YXNrLWV4cGFuZCB7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcblxcdG1hcmdpbjogMC4ycmVtO1xcclxcblxcdHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWV4cGFuZCBpbnB1dCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLW5hbWUtZWRpdCB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMC4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kZXNjcmlwdGlvbi1lZGl0IHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRmb250LXNpemU6IDEuNnJlbTtcXHJcXG5cXHRmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0cmVzaXplOiB2ZXJ0aWNhbDtcXHJcXG59XFxyXFxuXFxyXFxuLyogISBNZWRpYSBRdWVyaWVzICovXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxyXFxuXFx0I3NpZGViYXIge1xcclxcblxcdFxcdHdpZHRoOiA4MCU7XFxyXFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjc2lkZWJhci5jbG9zZSB7XFxyXFxuXFx0XFx0bGVmdDogLTgwJTtcXHJcXG5cXHRcXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I3Byb2plY3QtYnV0dG9uLCAjbmV3LXByb2plY3QtYnV0dG9uLCAjYWRkLXByb2plY3QtcG9wdXAtaW5wdXQsIC5hZGQtcHJvamVjdC1wb3B1cC1idXR0b24ge1xcclxcblxcdFxcdHBhZGRpbmctdG9wOiAwLjVyZW07XFxyXFxuXFx0XFx0cGFkZGluZy1ib3R0b206IDAuNXJlbTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I2V4cGFuZC1jb2xsYXBzZS1zaWRlYmFyIHtcXHJcXG5cXHRcXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcblxcdH1cXHJcXG5cXHRcXHJcXG5cXHQjbWFpbiwgdGV4dGFyZWEge1xcclxcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I3NlbGVjdGVkLXByb2plY3Qge1xcclxcblxcdFxcdG1hcmdpbi1sZWZ0OiAwO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjdGFza3MtY29udGFpbmVyIHtcXHJcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHR9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsYUFBYTtDQUNiLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsMkJBQTJCO0NBQzNCLFNBQVM7Q0FDVCxpQkFBaUI7Q0FDakIscUdBQXFHO0NBQ3JHLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsY0FBYztDQUNkLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osWUFBWTtBQUNiOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQSxjQUFjO0FBQ2Q7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtD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M0I7O0NBRUE7RUFDQyxtQkFBbUI7RUFDbkIsc0JBQXNCO0NBQ3ZCOztDQUVBO0VBQ0MsbUJBQW1CO0NBQ3BCOztDQUVBO0VBQ0Msa0JBQWtCO0NBQ25COztDQUVBO0VBQ0MsY0FBYztDQUNmOztDQUVBO0VBQ0MsY0FBYztFQUNkLFdBQVc7Q0FDWjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjZyZW07XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcblxcdHBhZGRpbmc6IDAuMnJlbTtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuXFx0Ym9yZGVyLXN0eWxlOiBub25lO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcblxcdGNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRyZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmkge1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQucHJvamVjdC1idXR0b24ge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAhIFNpZGViYXIgKi9cXHJcXG4jc2lkZWJhciB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHR3aWR0aDogMzAwcHg7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdG92ZXJmbG93LXg6IHZpc2libGU7XFxyXFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4jZXhwYW5kLWNvbGxhcHNlLXNpZGViYXIge1xcclxcblxcdHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0Ym90dG9tOiAwO1xcclxcblxcdHdpZHRoOiAzcmVtO1xcclxcblxcdGhlaWdodDogM3JlbTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwcHggNXB4IDBweCAwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXHJcXG59XFxyXFxuXFxyXFxuI2V4cGFuZC1jb2xsYXBzZS1zaWRlYmFyOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGUge1xcclxcblxcdGZvbnQtc2l6ZTogMnJlbTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0bWFyZ2luOiAxcmVtIDAgMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b24ge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b246aG92ZXIsICNuZXctcHJvamVjdC1idXR0b246aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbi5hY3RpdmUge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtYnV0dG9uIHtcXHJcXG5cXHRjb2xvcjogbGlnaHRncmF5O1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LXBvcHVwIHtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMXJlbSAwO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtcG9wdXAtaW5wdXQge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtcG9wdXAtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG5cXHRjb2xvcjogcmdiKDI1NSwgNjUsIDY1KTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LXBvcHVwLWJ1dHRvbnMge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC1wb3B1cC1idXR0b24ge1xcclxcblxcdHdpZHRoOiA0NSU7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjlyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1wb3B1cC1hZGQge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtcG9wdXAtYWRkOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LXBvcHVwLWNhbmNlbCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1wb3B1cC1jYW5jZWw6aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci1mb290ZXIge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdG1hcmdpbi10b3A6IGF1dG87XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAhIE1haW4gKi9cXHJcXG4udGFzay1leHBhbmQge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFx0XFxyXFxufVxcclxcblxcclxcbiNtYWluIHtcXHJcXG5cXHRmbGV4LWdyb3c6IDE7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXHJcXG59XFxyXFxuXFxyXFxuI3NlbGVjdGVkLXByb2plY3Qge1xcclxcblxcdGZvbnQtc2l6ZTogMnJlbTtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxcmVtO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiAyLjVyZW07XFxyXFxuXFx0Zm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3MtY29udGFpbmVyIHtcXHJcXG5cXHR3aWR0aDogNTAlO1xcclxcblxcdG1pbi13aWR0aDogMTVyZW07XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1sYWJlbCB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWJ1dHRvbiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stYnV0dG9uIGkge1xcclxcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzay1idXR0b24ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLXBvcHVwIHtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMXJlbSAwO1xcclxcblxcdHdpZHRoOiAxNnJlbTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLXBvcHVwLWlucHV0IHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzExMTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLXBvcHVwLWlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuXFx0Y29sb3I6IHJnYigyNTUsIDY1LCA2NSk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay1wb3B1cC1idXR0b25zIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2stcG9wdXAtYnV0dG9uIHtcXHJcXG5cXHR3aWR0aDogNDUlO1xcclxcblxcdGZvbnQtc2l6ZTogMC45cmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2stcG9wdXAtYWRkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTQwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLXBvcHVwLWFkZDpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEwMCwgMCk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay1wb3B1cC1jYW5jZWwge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxNDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2stcG9wdXAtY2FuY2VsOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbXBsZXRlZCBidXR0b24ge1xcclxcblxcdGNvbG9yOiBncmF5O1xcclxcblxcdGZvbnQtc3R5bGU6IGl0YWxpYzsgXFxyXFxufVxcclxcblxcclxcbi50YXNrLWV4cGFuZCB7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcblxcdG1hcmdpbjogMC4ycmVtO1xcclxcblxcdHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWV4cGFuZCBpbnB1dCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLW5hbWUtZWRpdCB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMC4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kZXNjcmlwdGlvbi1lZGl0IHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRmb250LXNpemU6IDEuNnJlbTtcXHJcXG5cXHRmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0cmVzaXplOiB2ZXJ0aWNhbDtcXHJcXG59XFxyXFxuXFxyXFxuLyogISBNZWRpYSBRdWVyaWVzICovXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxyXFxuXFx0I3NpZGViYXIge1xcclxcblxcdFxcdHdpZHRoOiA4MCU7XFxyXFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjc2lkZWJhci5jbG9zZSB7XFxyXFxuXFx0XFx0bGVmdDogLTgwJTtcXHJcXG5cXHRcXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I3Byb2plY3QtYnV0dG9uLCAjbmV3LXByb2plY3QtYnV0dG9uLCAjYWRkLXByb2plY3QtcG9wdXAtaW5wdXQsIC5hZGQtcHJvamVjdC1wb3B1cC1idXR0b24ge1xcclxcblxcdFxcdHBhZGRpbmctdG9wOiAwLjVyZW07XFxyXFxuXFx0XFx0cGFkZGluZy1ib3R0b206IDAuNXJlbTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I2V4cGFuZC1jb2xsYXBzZS1zaWRlYmFyIHtcXHJcXG5cXHRcXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcblxcdH1cXHJcXG5cXHRcXHJcXG5cXHQjbWFpbiwgdGV4dGFyZWEge1xcclxcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I3NlbGVjdGVkLXByb2plY3Qge1xcclxcblxcdFxcdG1hcmdpbi1sZWZ0OiAwO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjdGFza3MtY29udGFpbmVyIHtcXHJcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHR9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuXHRjb25zdHJ1Y3RvcihuYW1lKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy50YXNrcyA9IFtdO1xyXG5cdH1cclxufSIsIi8vIFRPRE86IExvY2FsIFN0b3JhZ2Ugc2F2aW5nIGhlcmVcclxubGV0IHByb2plY3RzID0gW107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcclxuXHRzdGF0aWMgc2F2ZVByb2plY3RzKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJzYXZlXCIpXHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldFByb2plY3RzKCkge1xyXG5cdFx0Ly9Db252ZXJ0IGRhdGEgZnJvbSBsb2NhbCBzdG9yYWdlXHJcblx0XHRjb25zb2xlLmxvZyhcImdldFwiKVxyXG5cdFx0cHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcclxuXHJcblx0XHRpZiAocHJvamVjdHMgPT09IG51bGwpIHtcclxuXHRcdFx0cHJvamVjdHMgPSBbXTtcclxuXHRcdH1cclxuXHJcblx0XHQvL3RvZG9MaXN0LnNldFByb2plY3RzKHRvZG9MaXN0LmdldFByb2plY3RzKCkubWFwKChwcm9qZWN0KSA9PiBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3QpKSwpO1xyXG5cclxuXHRcdC8vdG9kb0xpc3QuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiBwcm9qZWN0LnNldFRhc2tzKHByb2plY3QuZ2V0VGFza3MoKS5tYXAoKHRhc2spID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzaykpLCksKTtcclxuXHJcblx0XHRyZXR1cm4gcHJvamVjdHM7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYWRkUHJvamVjdChwcm9qZWN0KSB7XHJcblx0XHRwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG5cdFx0U3RvcmFnZS5zYXZlUHJvamVjdHMoKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyB1cGRhdGVQcm9qZWN0KHByb2plY3ROYW1lLCBuZXdQcm9qZWN0VmVyc2lvbikge1xyXG5cclxuXHRcdHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKFN0b3JhZ2UuZmluZFByb2plY3QocHJvamVjdE5hbWUpKSwgMSwgbmV3UHJvamVjdFZlcnNpb24pO1xyXG5cclxuXHRcdFN0b3JhZ2Uuc2F2ZVByb2plY3RzKCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XHJcblx0XHRwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSwgMSk7XHJcblx0XHRTdG9yYWdlLnNhdmVQcm9qZWN0cygpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGZpbmRQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcblx0XHRyZXR1cm4gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWUpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGFkZFRhc2socHJvamVjdCwgdGFzaykge1xyXG5cdFx0cHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xyXG5cdFx0U3RvcmFnZS5zYXZlUHJvamVjdHMoKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyB1cGRhdGVUYXNrKHByb2plY3QsIHRhc2tOYW1lLCBuZXdUYXNrVmVyc2lvbikge1xyXG5cdFx0cHJvamVjdC50YXNrcy5zcGxpY2UocHJvamVjdC50YXNrcy5pbmRleE9mKFN0b3JhZ2UuZmluZFRhc2socHJvamVjdCwgdGFza05hbWUpKSwgMSwgbmV3VGFza1ZlcnNpb24pO1xyXG5cdFx0U3RvcmFnZS51cGRhdGVQcm9qZWN0KHByb2plY3QubmFtZSwgcHJvamVjdCk7XHJcblx0XHRTdG9yYWdlLnNhdmVQcm9qZWN0cygpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGRlbGV0ZVRhc2socHJvamVjdCwgdGFzaykge1xyXG5cdFx0cHJvamVjdC50YXNrcy5zcGxpY2UocHJvamVjdC50YXNrcy5pbmRleE9mKHRhc2spLCAxKTtcclxuXHRcdFN0b3JhZ2Uuc2F2ZVByb2plY3RzKCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZmluZFRhc2socHJvamVjdCwgdGFza05hbWUpIHtcclxuXHRcdHJldHVybiBwcm9qZWN0LnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLm5hbWUgPT09IHRhc2tOYW1lKTtcclxuXHR9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcclxuXHRjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiA9IFwiXCIpIHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcblx0XHR0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG5cdH1cclxufSIsImltcG9ydCBTdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcclxuXHQvLyEgTG9hZCBjb250ZW50XHJcblx0c3RhdGljIGxvYWRQYWdlKCkge1xyXG5cdFx0VUkubG9hZFByb2plY3RzKCk7XHJcblx0XHRVSS5sb2FkVGFza3MoKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBsb2FkUHJvamVjdHMoKSB7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG5cdFx0U3RvcmFnZS5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRcdFx0VUkuY3JlYXRlUHJvamVjdChwcm9qZWN0KTtcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgbG9hZFRhc2tzKHByb2plY3QpIHtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3NcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGxldGVkXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLXBvcHVwXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtcG9wdXBcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuXHRcdGlmICh0eXBlb2YgcHJvamVjdCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdGVkLXByb2plY3RcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3MtY29udGFpbmVyXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RlZC1wcm9qZWN0XCIpLnZhbHVlID0gcHJvamVjdC5uYW1lO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tcGxldGVkXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0ZWQtcHJvamVjdFwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3MtY29udGFpbmVyXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuXHJcblx0XHRcdGxldCB0YXNrRGl2cyA9IFtdO1xyXG5cdFx0XHRwcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcblx0XHRcdFx0Y29uc3QgdGFza0RpdiA9IFVJLmNyZWF0ZVRhc2sodGFzayk7XHJcblx0XHRcdFx0dGFza0RpdnMucHVzaCh0YXNrRGl2KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiB0YXNrRGl2cztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHQvLyEgQ3JlYXRlIGNvbnRlbnRcclxuXHRzdGF0aWMgY3JlYXRlUHJvamVjdChwcm9qZWN0KSB7XHJcblx0XHRjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKTtcclxuXHRcdGNvbnN0IG5ld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblx0XHRuZXdCdXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtYnV0dG9uXCIpXHJcblx0XHRuZXdCdXR0b24uaW5uZXJIVE1MID0gYFxyXG5cdFx0XHQ8c3Bhbj4ke3Byb2plY3QubmFtZX08L3NwYW4+XHJcblx0XHRcdDxpPiZ0aW1lczs8L2k+XHJcblx0XHRgO1xyXG5cdFx0cHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdCdXR0b24pO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gbmV3QnV0dG9uO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGNyZWF0ZVRhc2sodGFzaykge1xyXG5cdFx0bGV0IHRhc2tDb250YWluZXI7XHJcblx0XHRpZiAodGFzay5jb21wbGV0ZWQgPT09IGZhbHNlKSB7XHJcblx0XHRcdHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzXCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tcGxldGVkXCIpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHR0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xyXG5cdFx0dGFza0Rpdi5pbm5lckhUTUwgPSBgXHJcblx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInRhc2stY2hlY2tib3hcIj5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cInRhc2stYnV0dG9uXCI+XHJcblx0XHRcdFx0PHNwYW4+JHt0YXNrLm5hbWV9PC9zcGFuPlxyXG5cdFx0XHRcdDxpPiZ0aW1lczs8L2k+XHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidGFzay1leHBhbmRcIj5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInRhc2stbmFtZS1lZGl0XCIgbmFtZT1cIk5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiB2YWx1ZT1cIiR7dGFzay5uYW1lfVwiPlxyXG5cdFx0XHRcdDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIGNsYXNzPVwidGFzay1kZXNjcmlwdGlvbi1lZGl0XCIgbmFtZT1cIkRlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiPiR7dGFzay5kZXNjcmlwdGlvbn08L3RleHRhcmVhPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdGA7XHJcblx0XHRpZiAodGFzay5jb21wbGV0ZWQgPT09IHRydWUpIHtcclxuXHRcdFx0dGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuY2hlY2tlZCA9IHRydWU7XHJcblx0XHR9XHJcblx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xyXG5cdFx0cmV0dXJuIHRhc2tEaXY7XHJcblx0fVxyXG5cclxuXHQvLyEgRXhwYW5kIG9yIGNvbGxhcHNlIGNvbnRlbnRcclxuXHRzdGF0aWMgZXhwYW5kQ29sbGFwc2VTaWRlYmFyKCkge1xyXG5cdFx0Y29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhclwiKTtcclxuXHRcdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXhwYW5kLWNvbGxhcHNlLXNpZGViYXJcIik7XHJcblxyXG5cdFx0aWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gXCLil4BcIikge1xyXG5cdFx0XHRzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJjbG9zZVwiKTtcclxuXHRcdFx0YnV0dG9uLnRleHRDb250ZW50ID0gXCLilrZcIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcImNsb3NlXCIpO1xyXG5cdFx0XHRidXR0b24udGV4dENvbnRlbnQgPSBcIuKXgFwiO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRzdGF0aWMgZXhwYW5kQ29sbGFwc2VUYXNrKHRhc2tCdXR0b24sIHRhc2spIHtcclxuXHRcdGNvbnN0IHRhc2tFeHBhbmQgPSB0YXNrQnV0dG9uLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1leHBhbmRcIik7XHJcblxyXG5cdFx0dGFza0V4cGFuZC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbmFtZS1lZGl0XCIpLnZhbHVlID0gdGFzay5uYW1lO1xyXG5cdFx0dGFza0V4cGFuZC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGVzY3JpcHRpb24tZWRpdFwiKS52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XHJcblx0XHR0YXNrRXhwYW5kLnN0eWxlLmRpc3BsYXkgPSAodGFza0V4cGFuZC5zdHlsZS5kaXNwbGF5ID09PSBcImZsZXhcIiA/IFwibm9uZVwiIDogXCJmbGV4XCIpO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vISBGaW5kIGNvbnRlbnRcclxuXHRzdGF0aWMgZmluZFByb2plY3QocHJvamVjdE5hbWUpIHtcclxuXHRcdGxldCBwcm9qZWN0Rm91bmQ7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtYnV0dG9uXCIpLmZvckVhY2goKHByb2plY3RCdXR0b24pID0+IHtcclxuXHRcdFx0aWYgKHByb2plY3RCdXR0b24ucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQgPT09IHByb2plY3ROYW1lKSB7XHJcblx0XHRcdFx0cHJvamVjdEZvdW5kID0gcHJvamVjdEJ1dHRvbjtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gcHJvamVjdEZvdW5kO1xyXG5cdH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vbW9kdWxlcy90YXNrLmpzXCI7XHJcbmltcG9ydCBVSSBmcm9tIFwiLi9tb2R1bGVzL3VpLmpzXCI7XHJcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL21vZHVsZXMvc3RvcmFnZS5qc1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcclxuXHJcbi8vICEgUHJvamVjdFxyXG5sZXQgc2VsZWN0ZWRQcm9qZWN0O1xyXG5cclxuZnVuY3Rpb24gcHJvamVjdFNlbGVjdChidXR0b24pIHtcclxuXHRjb25zdCBwcm9qZWN0ID0gU3RvcmFnZS5maW5kUHJvamVjdChidXR0b24ucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQpO1xyXG5cclxuXHRpZiAoc2VsZWN0ZWRQcm9qZWN0ICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdHNlbGVjdGVkUHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcblx0fVxyXG5cdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcblx0c2VsZWN0ZWRQcm9qZWN0ID0gYnV0dG9uO1xyXG5cclxuXHRjb25zdCB0YXNrcyA9IFVJLmxvYWRUYXNrcyhwcm9qZWN0KTtcclxuXHR0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG5cdFx0YWRkVGFza0V2ZW50cyh0YXNrKTtcclxuXHR9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0RGVsZXRlKGV2ZW50LCBidXR0b24pIHtcclxuXHRjb25zdCBwcm9qZWN0ID0gU3RvcmFnZS5maW5kUHJvamVjdChidXR0b24ucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQpO1xyXG5cclxuXHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRTdG9yYWdlLmRlbGV0ZVByb2plY3QocHJvamVjdCk7XHJcblx0VUkuZmluZFByb2plY3QocHJvamVjdC5uYW1lKS5yZW1vdmUoKTtcclxuXHJcblx0Y29uc3QgbmV4dFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtYnV0dG9uXCIpO1xyXG5cdGlmIChuZXh0UHJvamVjdCAhPT0gbnVsbCkge1xyXG5cdFx0bmV4dFByb2plY3QuY2xpY2soKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0VUkubG9hZFRhc2tzKCk7XHJcblx0fVxyXG59XHJcblxyXG4vL0FkZCBwcm9qZWN0IGV2ZW50cyBmb3IgbmV3IGJ1dHRvbnMgYmVpbmcgYWRkZWRcclxuZnVuY3Rpb24gYWRkUHJvamVjdEV2ZW50cyhidXR0b24pIHtcclxuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4gcHJvamVjdFNlbGVjdChidXR0b24pKTtcclxuXHRidXR0b24ucXVlcnlTZWxlY3RvcihcImlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4gcHJvamVjdERlbGV0ZShldmVudCwgYnV0dG9uKSk7XHJcbn1cclxuXHJcblxyXG4vLyAhIEFkZGluZyBuZXcgcHJvamVjdHNcclxuY29uc3QgYWRkUHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1wb3B1cFwiKTtcclxuY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LXBvcHVwLWlucHV0XCIpO1xyXG5cclxuZnVuY3Rpb24gbmV3UHJvamVjdENsaWNrKCkge1xyXG5cdG5ld1Byb2plY3ROYW1lLnZhbHVlID0gXCJcIjtcclxuXHRuZXdQcm9qZWN0TmFtZS5wbGFjZWhvbGRlciA9IFwiXCI7XHJcblx0YWRkUHJvamVjdFBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0bmV3UHJvamVjdE5hbWUuZm9jdXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV3UHJvamVjdENhbmNlbCgpIHtcclxuXHRhZGRQcm9qZWN0UG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdQcm9qZWN0QWRkKCkge1xyXG5cdGlmIChuZXdQcm9qZWN0TmFtZS52YWx1ZSA9PT0gXCJcIikge1xyXG5cdFx0bmV3UHJvamVjdE5hbWUucGxhY2Vob2xkZXIgPSBcIk5hbWUgY2FuJ3QgYmUgYmxhbmtcIjtcclxuXHR9IGVsc2UgaWYgKFN0b3JhZ2UuZmluZFByb2plY3QobmV3UHJvamVjdE5hbWUudmFsdWUpICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdG5ld1Byb2plY3ROYW1lLnZhbHVlID0gXCJcIjtcclxuXHRcdG5ld1Byb2plY3ROYW1lLnBsYWNlaG9sZGVyID0gXCJOYW1lIGlzIGFscmVhZHkgdXNlZFwiO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRuZXdQcm9qZWN0Q2FuY2VsKCk7XHJcblxyXG5cdFx0Y29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5ld1Byb2plY3ROYW1lLnZhbHVlKTtcclxuXHRcdGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBVSS5jcmVhdGVQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG5cdFx0U3RvcmFnZS5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG5cclxuXHRcdGFkZFByb2plY3RFdmVudHMobmV3UHJvamVjdEJ1dHRvbik7XHJcblx0fVxyXG59XHJcblxyXG4vL0FkZCBwcm9qZWN0IGlmIHRoZSBFbnRlciBrZXkgaXMgcHJlc3NlZCBpbiB0aGUgaW5wdXQgYm94XHJcbmZ1bmN0aW9uIG5ld1Byb2plY3RJbnB1dEtleXVwKGV2ZW50KSB7XHJcblx0aWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LXBvcHVwLWFkZFwiKS5jbGljaygpO1xyXG5cdH1cclxufVxyXG5cclxuLy9DbGVhciB0aGUgcGxhY2Vob2xkZXIgKGNhbid0IGJlIGJsYW5rIG1lc3NhZ2UpIG9uIGlucHV0IGZvY3VzXHJcbmZ1bmN0aW9uIG5ld1Byb2plY3RJbnB1dEZvY3VzKCkge1xyXG5cdG5ld1Byb2plY3ROYW1lLnBsYWNlaG9sZGVyID0gXCJcIjtcclxufVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Byb2plY3RDbGljayk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtcG9wdXAtY2FuY2VsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdQcm9qZWN0Q2FuY2VsKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1wb3B1cC1hZGRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Byb2plY3RBZGQpO1xyXG5uZXdQcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgbmV3UHJvamVjdElucHV0Rm9jdXMpO1xyXG5uZXdQcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgbmV3UHJvamVjdElucHV0S2V5dXApXHJcblxyXG4vLyEgU2lkZWJhciBPcGVuL0Nsb3NlIEJ1dHRvblxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNleHBhbmQtY29sbGFwc2Utc2lkZWJhclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkuZXhwYW5kQ29sbGFwc2VTaWRlYmFyKTtcclxuXHJcblxyXG4vLyAhIFJlbmFtaW5nIHByb2plY3RcclxuY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdGVkLXByb2plY3RcIik7XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0TmFtZUlucHV0KCkge1xyXG5cdGlmIChwcm9qZWN0TmFtZS52YWx1ZSAhPT0gc2VsZWN0ZWRQcm9qZWN0Lm5hbWUpIHtcclxuXHRcdHByb2plY3ROYW1lLnN0eWxlLmNvbG9yID0gXCJncmF5XCI7XHJcblx0XHRwcm9qZWN0TmFtZS5zdHlsZS5mb250U3R5bGUgPSBcIml0YWxpY1wiO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRwcm9qZWN0TmFtZS5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcclxuXHRcdHByb2plY3ROYW1lLnN0eWxlLmZvbnRTdHlsZSA9IFwibm9ybWFsXCI7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0TmFtZURlZm9jdXMoKSB7XHJcblx0Y29uc3QgY3VycmVudFByb2plY3QgPSBTdG9yYWdlLmZpbmRQcm9qZWN0KHNlbGVjdGVkUHJvamVjdC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS50ZXh0Q29udGVudCk7XHJcblxyXG5cdGlmIChwcm9qZWN0TmFtZS52YWx1ZSAhPT0gXCJcIikge1xyXG5cdFx0Y29uc3QgbmV3UHJvamVjdFZlcnNpb24gPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSwgY3VycmVudFByb2plY3QudGFza3MpO1xyXG5cdFx0U3RvcmFnZS51cGRhdGVQcm9qZWN0KGN1cnJlbnRQcm9qZWN0Lm5hbWUsIG5ld1Byb2plY3RWZXJzaW9uKTtcclxuXHRcdHNlbGVjdGVkUHJvamVjdC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lLnZhbHVlO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRwcm9qZWN0TmFtZS52YWx1ZSA9IGN1cnJlbnRQcm9qZWN0O1xyXG5cdH1cclxuXHRwcm9qZWN0TmFtZS5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcclxuXHRwcm9qZWN0TmFtZS5zdHlsZS5mb250U3R5bGUgPSBcIm5vcm1hbFwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0TmFtZUtleWRvd24oZXZlbnQpIHtcclxuXHRpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vUHJldmVudCBjcmVhdGluZyBhIG5ldyBsaW5lXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0TmFtZUtleXVwKGV2ZW50KSB7XHJcblx0aWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcblx0XHRwcm9qZWN0TmFtZS5ibHVyKCk7XHJcblx0fVxyXG59XHJcblxyXG5wcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgcHJvamVjdE5hbWVJbnB1dCk7XHJcbnByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHByb2plY3ROYW1lRGVmb2N1cyk7XHJcbnByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHByb2plY3ROYW1lS2V5ZG93bik7XHJcbnByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBwcm9qZWN0TmFtZUtleXVwKTtcclxuXHJcblxyXG4vLyAhIFRhc2tzXHJcbmZ1bmN0aW9uIHRhc2tDb21wbGV0ZShldmVudCwgdGFza0RpdiwgaW5wdXQpIHtcclxuXHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRjb25zdCBjdXJyZW50UHJvamVjdCA9IFN0b3JhZ2UuZmluZFByb2plY3Qoc2VsZWN0ZWRQcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnRleHRDb250ZW50KTtcclxuXHRjb25zdCBjdXJyZW50VGFzayA9IFN0b3JhZ2UuZmluZFRhc2soY3VycmVudFByb2plY3QsIHRhc2tEaXYucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQpO1xyXG5cdGxldCBuZXdUYXNrVmVyc2lvbiA9IG5ldyBUYXNrKGN1cnJlbnRUYXNrLm5hbWUsIGN1cnJlbnRUYXNrLmRlc2NyaXB0aW9uKTtcclxuXHJcblx0aWYgKGlucHV0LmNoZWNrZWQgPT0gZmFsc2UpIHtcclxuXHRcdG5ld1Rhc2tWZXJzaW9uLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrc1wiKS5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0bmV3VGFza1ZlcnNpb24uY29tcGxldGVkID0gdHJ1ZTtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tcGxldGVkXCIpLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xyXG5cdH1cclxuXHRTdG9yYWdlLnVwZGF0ZVRhc2soY3VycmVudFByb2plY3QsIGN1cnJlbnRUYXNrLm5hbWUsIG5ld1Rhc2tWZXJzaW9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdGFza0NsaWNrKHRhc2tEaXYpIHtcclxuXHJcblx0Y29uc3QgY3VycmVudFByb2plY3QgPSBTdG9yYWdlLmZpbmRQcm9qZWN0KHNlbGVjdGVkUHJvamVjdC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS50ZXh0Q29udGVudCk7XHJcblx0Y29uc3QgY3VycmVudFRhc2sgPSBTdG9yYWdlLmZpbmRUYXNrKGN1cnJlbnRQcm9qZWN0LCB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnRleHRDb250ZW50KTtcclxuXHJcblx0aWYgKHRhc2tEaXYucXVlcnlTZWxlY3RvcihcIi50YXNrLWV4cGFuZFwiKS5zdHlsZS5kaXNwbGF5ICE9PSBcIm5vbmVcIikge1xyXG5cdFx0bGV0IG5ld1Rhc2tWZXJzaW9uID0gbmV3IFRhc2soY3VycmVudFRhc2submFtZSwgY3VycmVudFRhc2suZGVzY3JpcHRpb24pO1xyXG5cclxuXHRcdGNvbnN0IG9sZFRhc2tOYW1lID0gY3VycmVudFRhc2submFtZTtcclxuXHRcdGNvbnN0IG5hbWVJbnB1dCA9IHRhc2tEaXYucXVlcnlTZWxlY3RvcihcIi50YXNrLW5hbWUtZWRpdFwiKTtcclxuXHRcdGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXNjcmlwdGlvbi1lZGl0XCIpO1xyXG5cdFx0XHJcblx0XHRpZiAobmFtZUlucHV0LnZhbHVlICE9PSBcIlwiKSB7XHJcblx0XHRcdG5ld1Rhc2tWZXJzaW9uLm5hbWUgPSBuYW1lSW5wdXQudmFsdWU7XHJcblx0XHRcdHRhc2tEaXYucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQgPSBuZXdUYXNrVmVyc2lvbi5uYW1lO1xyXG5cdFx0fVxyXG5cdFx0bmV3VGFza1ZlcnNpb24uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xyXG5cdFx0bmV3VGFza1ZlcnNpb24uY29tcGxldGVkID0gdGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY2hlY2tib3hcIikuY2hlY2tlZDtcclxuXHRcdFN0b3JhZ2UudXBkYXRlVGFzayhjdXJyZW50UHJvamVjdCwgb2xkVGFza05hbWUsIG5ld1Rhc2tWZXJzaW9uKTtcclxuXHR9XHJcblxyXG5cdFVJLmV4cGFuZENvbGxhcHNlVGFzayh0YXNrRGl2LCBjdXJyZW50VGFzayk7XHJcbn1cclxuXHJcbi8vRWRpdCB0YXNrIGlmIHRoZSBFbnRlciBrZXkgaXMgcHJlc3NlZCBpbiBhbiBpbnB1dCBib3hcclxuZnVuY3Rpb24gdGFza0lucHV0S2V5dXAoZXZlbnQsIHRhc2tEaXYpIHtcclxuXHRpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuXHRcdHRhc2tEaXYucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKS5jbGljaygpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdGFza0RlbGV0ZShldmVudCwgdGFza0Rpdikge1xyXG5cdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gU3RvcmFnZS5maW5kUHJvamVjdChzZWxlY3RlZFByb2plY3QucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQpO1xyXG5cdGNvbnN0IGN1cnJlbnRUYXNrID0gU3RvcmFnZS5maW5kVGFzayhjdXJyZW50UHJvamVjdCwgdGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS50ZXh0Q29udGVudCk7XHJcblxyXG5cdFN0b3JhZ2UuZGVsZXRlVGFzayhjdXJyZW50UHJvamVjdCwgY3VycmVudFRhc2spO1xyXG5cdHRhc2tEaXYucmVtb3ZlKCk7XHJcbn1cclxuXHJcbi8vQWRkIHRhc2sgZXZlbnRzIGZvciBuZXcgZGl2cyBiZWluZyBhZGRlZFxyXG5mdW5jdGlvbiBhZGRUYXNrRXZlbnRzKHRhc2tEaXYpIHtcclxuXHR0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB0YXNrQ29tcGxldGUoZXZlbnQsIHRhc2tEaXYsIHRhc2tEaXYucXVlcnlTZWxlY3RvcihcImlucHV0XCIpKSk7XHJcblx0dGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHRhc2tDbGljayh0YXNrRGl2KSk7XHJcblx0dGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbmFtZS1lZGl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHRhc2tJbnB1dEtleXVwKGV2ZW50LCB0YXNrRGl2KSk7XHJcblx0dGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiaVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB0YXNrRGVsZXRlKGV2ZW50LCB0YXNrRGl2KSk7XHJcbn1cclxuXHJcblxyXG4vLyAhIEFkZGluZyBuZXcgdGFza3NcclxuY29uc3QgYWRkVGFza1BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1wb3B1cFwiKTtcclxuY29uc3QgbmV3VGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLXBvcHVwLWlucHV0XCIpO1xyXG5cclxuZnVuY3Rpb24gbmV3VGFza0NsaWNrKCkge1xyXG5cdG5ld1Rhc2tOYW1lLnZhbHVlID0gXCJcIjtcclxuXHRuZXdUYXNrTmFtZS5wbGFjZWhvbGRlciA9IFwiXCI7XHJcblx0YWRkVGFza1BvcHVwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0bmV3VGFza05hbWUuZm9jdXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV3VGFza0NhbmNlbCgpIHtcclxuXHRhZGRUYXNrUG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdUYXNrQWRkKCkge1xyXG5cdGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gU3RvcmFnZS5maW5kUHJvamVjdChzZWxlY3RlZFByb2plY3QucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQpO1xyXG5cclxuXHRpZiAobmV3VGFza05hbWUudmFsdWUgPT09IFwiXCIpIHtcclxuXHRcdG5ld1Rhc2tOYW1lLnBsYWNlaG9sZGVyID0gXCJOYW1lIGNhbid0IGJlIGJsYW5rXCI7XHJcblx0fSBlbHNlIGlmIChTdG9yYWdlLmZpbmRUYXNrKGN1cnJlbnRQcm9qZWN0LCBuZXdUYXNrTmFtZS52YWx1ZSkgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0bmV3VGFza05hbWUudmFsdWUgPSBcIlwiO1xyXG5cdFx0bmV3VGFza05hbWUucGxhY2Vob2xkZXIgPSBcIk5hbWUgaXMgYWxyZWFkeSB1c2VkXCI7XHJcblx0fSBlbHNlIHtcclxuXHRcdG5ld1Rhc2tDYW5jZWwoKTtcclxuXHJcblx0XHRjb25zdCBuZXdUYXNrVmVyc2lvbiA9IG5ldyBUYXNrKG5ld1Rhc2tOYW1lLnZhbHVlKTtcclxuXHRcdGNvbnN0IG5ld1Rhc2tEaXYgPSBVSS5jcmVhdGVUYXNrKG5ld1Rhc2tWZXJzaW9uKTtcclxuXHRcdFN0b3JhZ2UuYWRkVGFzayhjdXJyZW50UHJvamVjdCwgbmV3VGFza1ZlcnNpb24pO1xyXG5cclxuXHRcdGFkZFRhc2tFdmVudHMobmV3VGFza0Rpdik7XHJcblx0fVxyXG59XHJcblxyXG4vL0NsZWFyIHRoZSBwbGFjZWhvbGRlciAoY2FuJ3QgYmUgYmxhbmsgbWVzc2FnZSkgb24gaW5wdXQgZm9jdXNcclxuZnVuY3Rpb24gbmV3VGFza0lucHV0Rm9jdXMoKSB7XHJcblx0bmV3VGFza05hbWUucGxhY2Vob2xkZXIgPSBcIlwiO1xyXG59XHJcblxyXG4vL0FkZCB0YXNrIGlmIHRoZSBFbnRlciBrZXkgaXMgcHJlc3NlZCBpbiB0aGUgaW5wdXQgYm94XHJcbmZ1bmN0aW9uIG5ld1Rhc2tJbnB1dEtleXVwKGV2ZW50KSB7XHJcblx0aWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLXBvcHVwLWFkZFwiKS5jbGljaygpO1xyXG5cdH1cclxufVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdGFzay1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Rhc2tDbGljayk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stcG9wdXAtY2FuY2VsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdUYXNrQ2FuY2VsKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1wb3B1cC1hZGRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Rhc2tBZGQpO1xyXG5uZXdUYXNrTmFtZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgbmV3VGFza0lucHV0Rm9jdXMpO1xyXG5uZXdUYXNrTmFtZS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgbmV3VGFza0lucHV0S2V5dXApO1xyXG5cclxuXHJcbi8vISBJbml0aWFsaXplIHBhZ2VcclxuVUkubG9hZFBhZ2UoKTtcclxuU3RvcmFnZS5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRhZGRQcm9qZWN0RXZlbnRzKFVJLmZpbmRQcm9qZWN0KHByb2plY3QubmFtZSkpO1xyXG59KTtcclxuXHJcbi8vdG9kbzogZmlndXJlIG91dCB3aHkgdXBkYXRpbmcgdGFza3MgZG9lc24ndCBzYXZlIl0sInNvdXJjZVJvb3QiOiIifQ==