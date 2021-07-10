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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n\theight: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: flex-start;\r\n\tmargin: 0;\r\n\tfont-size: 1.6rem;\r\n\tfont-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n\tcolor: white;\r\n}\r\n\r\nbutton {\r\n\tpadding: 0.2rem;\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tborder-style: none;\r\n\tborder-radius: 5px;\r\n\tbackground-color: inherit;\r\n\tcolor: lightgray;\r\n}\r\n\r\nbutton:hover {\r\n\tbackground-color: #444;\r\n}\r\n\r\ninput {\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tborder-style: none;\r\n\toutline: none;\r\n\tborder-radius: 5px;\r\n\tbackground-color: inherit;\r\n\tcolor: inherit;\r\n}\r\n\r\ntextarea {\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tcolor: inherit;\r\n\tbackground-color: inherit;\r\n\tborder: none;\r\n\tresize: none;\r\n}\r\n\r\ni {\r\n\tcursor: pointer;\r\n}\r\n\r\n.selected {\r\n\tbackground-color: #444;\r\n}\r\n\r\n.selected.project-button {\r\n\tfont-weight: bold;\r\n}\r\n\r\n/* ! Sidebar */\r\n#sidebar {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: 300px;\r\n\theight: 100%;\r\n\toverflow-x: visible;\r\n\toverflow-y: auto;\r\n\tbackground-color: #333;\r\n}\r\n\r\n#expand-collapse-sidebar {\r\n\tvisibility: hidden;\r\n\tposition: fixed;\r\n\tbottom: 0;\r\n\twidth: 3rem;\r\n\theight: 3rem;\r\n\tborder-radius: 0px 5px 0px 0px;\r\n\tbackground-color: #444;\r\n}\r\n\r\n#expand-collapse-sidebar:hover {\r\n\tbackground-color: #555;\r\n}\r\n\r\n#title {\r\n\tfont-size: 2rem;\r\n\ttext-align: center;\r\n\tmargin: 1rem 0 1rem 0;\r\n}\r\n\r\n.project-button {\r\n\twidth: 100%;\r\n\ttext-align: left;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tcolor: white;\r\n}\r\n\r\n.project-button:hover, #new-project-button:hover {\r\n\tbackground-color: #444;\r\n}\r\n\r\n.project-button.active {\r\n\tfont-weight: bold;\r\n}\r\n\r\n#new-project-button {\r\n\tcolor: lightgray;\r\n\ttext-align: center;\r\n\tbackground-color: #111;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n#add-project-popup {\r\n\tpadding: 0.5rem 1rem 0;\r\n\ttext-align: center;\r\n\tdisplay: none;\r\n}\r\n\r\n#add-project-popup-input {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.5rem;\r\n\tbackground-color: #111;\r\n}\r\n\r\n#add-project-popup-input::placeholder {\r\n\tcolor: rgb(255, 65, 65);\r\n}\r\n\r\n#add-project-popup-buttons {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n}\r\n\r\n.add-project-popup-button {\r\n\twidth: 45%;\r\n\tfont-size: 0.9rem;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#add-project-popup-add {\r\n\tbackground-color: rgb(0, 140, 0);\r\n}\r\n\r\n#add-project-popup-add:hover {\r\n\tbackground-color: rgb(0, 100, 0);\r\n}\r\n\r\n#add-project-popup-cancel {\r\n\tbackground-color: rgb(140, 0, 0);\r\n}\r\n\r\n#add-project-popup-cancel:hover {\r\n\tbackground-color: rgb(100, 0, 0);\r\n}\r\n\r\n#sidebar-footer {\r\n\twidth: 100%;\r\n\tbackground-color: #111;\r\n\tfont-size: 1rem;\r\n\tmargin-top: auto;\r\n\ttext-align: center;\r\n}\r\n\r\n/* ! Main */\r\n.task-expand {\r\n\tdisplay: none;\t\r\n}\r\n\r\n#main {\r\n\tflex-grow: 1;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\tbackground-color: #222;\r\n}\r\n\r\n#selected-project {\r\n\tfont-size: 2rem;\r\n\tfont-weight: bold;\r\n\tmargin-left: 1rem;\r\n\tmargin-top: 1rem;\r\n\tpadding: 0;\r\n\twidth: 100%;\r\n\theight: 2.5rem;\r\n\tfont-size: 2rem;\r\n}\r\n\r\n#tasks-container {\r\n\twidth: 50%;\r\n\tmin-width: 15rem;\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.tasks-label {\r\n\tfont-weight: bold;\r\n\tmargin: 0;\r\n\tmargin-top: 1rem;\r\n}\r\n\r\n#task-button {\r\n\tdisplay: flex;\r\n}\r\n\r\n#task-button i {\r\n\tmargin-left: auto;\r\n\twidth: 100%;\r\n\talign-items: center;\r\n}\r\n\r\n#new-task-button {\r\n\tbackground-color: #111;\r\n\tborder-radius: 5px;\r\n\tmargin-top: 0.5rem;\r\n}\r\n\r\n#add-task-popup {\r\n\tpadding: 0.5rem 1rem 0;\r\n\twidth: 16rem;\r\n\ttext-align: center;\r\n\tdisplay: none;\r\n}\r\n\r\n#add-task-popup-input {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.5rem;\r\n\tbackground-color: #111;\r\n}\r\n\r\n#add-task-popup-input::placeholder {\r\n\tcolor: rgb(255, 65, 65);\r\n}\r\n\r\n#add-task-popup-buttons {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n}\r\n\r\n.add-task-popup-button {\r\n\twidth: 45%;\r\n\tfont-size: 0.9rem;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#add-task-popup-add {\r\n\tbackground-color: rgb(0, 140, 0);\r\n}\r\n\r\n#add-task-popup-add:hover {\r\n\tbackground-color: rgb(0, 100, 0);\r\n}\r\n\r\n#add-task-popup-cancel {\r\n\tbackground-color: rgb(140, 0, 0);\r\n}\r\n\r\n#add-task-popup-cancel:hover {\r\n\tbackground-color: rgb(100, 0, 0);\r\n}\r\n\r\n#completed button {\r\n\tcolor: gray;\r\n\tfont-style: italic; \r\n}\r\n\r\n.task-expand {\r\n\tflex-direction: column;\r\n\tbackground-color: #111;\r\n\tmargin: 0.2rem;\r\n\tpadding: 1rem;\r\n}\r\n\r\n.task-expand input {\r\n\tbackground-color: #222;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.task-name-edit {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.1rem;\r\n}\r\n\r\n.task-description-edit {\r\n\twidth: 100%;\r\n\tfont-size: 1.6rem;\r\n\tfont-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n\tcolor: white;\r\n\tresize: vertical;\r\n}\r\n\r\n/* ! Media Queries */\r\n\r\n@media (max-width: 768px) {\r\n\r\n\t#sidebar {\r\n\t\twidth: 80%;\r\n\t\tposition: fixed;\r\n\t}\r\n\r\n\t#sidebar.close {\r\n\t\tleft: -80%;\r\n\t\ttransition-duration: 0.25s;\r\n\t}\r\n\r\n\t#project-button, #new-project-button, #add-project-popup-input, .add-project-popup-button, .add-task-popup-button {\r\n\t\tpadding-top: 0.5rem;\r\n\t\tpadding-bottom: 0.5rem;\r\n\t}\r\n\r\n\t#expand-collapse-sidebar {\r\n\t\tvisibility: visible;\r\n\t}\r\n\t\r\n\t#main, textarea {\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t#selected-project {\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n\t#tasks-container {\r\n\t\tmargin-left: 0;\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t#add-task-popup {\r\n\t\tmargin: auto;\r\n\t}\r\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n\theight: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: flex-start;\r\n\tmargin: 0;\r\n\tfont-size: 1.6rem;\r\n\tfont-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n\tcolor: white;\r\n}\r\n\r\nbutton {\r\n\tpadding: 0.2rem;\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tborder-style: none;\r\n\tborder-radius: 5px;\r\n\tbackground-color: inherit;\r\n\tcolor: lightgray;\r\n}\r\n\r\nbutton:hover {\r\n\tbackground-color: #444;\r\n}\r\n\r\ninput {\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tborder-style: none;\r\n\toutline: none;\r\n\tborder-radius: 5px;\r\n\tbackground-color: inherit;\r\n\tcolor: inherit;\r\n}\r\n\r\ntextarea {\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tcolor: inherit;\r\n\tbackground-color: inherit;\r\n\tborder: none;\r\n\tresize: none;\r\n}\r\n\r\ni {\r\n\tcursor: pointer;\r\n}\r\n\r\n.selected {\r\n\tbackground-color: #444;\r\n}\r\n\r\n.selected.project-button {\r\n\tfont-weight: bold;\r\n}\r\n\r\n/* ! Sidebar */\r\n#sidebar {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: 300px;\r\n\theight: 100%;\r\n\toverflow-x: visible;\r\n\toverflow-y: auto;\r\n\tbackground-color: #333;\r\n}\r\n\r\n#expand-collapse-sidebar {\r\n\tvisibility: hidden;\r\n\tposition: fixed;\r\n\tbottom: 0;\r\n\twidth: 3rem;\r\n\theight: 3rem;\r\n\tborder-radius: 0px 5px 0px 0px;\r\n\tbackground-color: #444;\r\n}\r\n\r\n#expand-collapse-sidebar:hover {\r\n\tbackground-color: #555;\r\n}\r\n\r\n#title {\r\n\tfont-size: 2rem;\r\n\ttext-align: center;\r\n\tmargin: 1rem 0 1rem 0;\r\n}\r\n\r\n.project-button {\r\n\twidth: 100%;\r\n\ttext-align: left;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tcolor: white;\r\n}\r\n\r\n.project-button:hover, #new-project-button:hover {\r\n\tbackground-color: #444;\r\n}\r\n\r\n.project-button.active {\r\n\tfont-weight: bold;\r\n}\r\n\r\n#new-project-button {\r\n\tcolor: lightgray;\r\n\ttext-align: center;\r\n\tbackground-color: #111;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n#add-project-popup {\r\n\tpadding: 0.5rem 1rem 0;\r\n\ttext-align: center;\r\n\tdisplay: none;\r\n}\r\n\r\n#add-project-popup-input {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.5rem;\r\n\tbackground-color: #111;\r\n}\r\n\r\n#add-project-popup-input::placeholder {\r\n\tcolor: rgb(255, 65, 65);\r\n}\r\n\r\n#add-project-popup-buttons {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n}\r\n\r\n.add-project-popup-button {\r\n\twidth: 45%;\r\n\tfont-size: 0.9rem;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#add-project-popup-add {\r\n\tbackground-color: rgb(0, 140, 0);\r\n}\r\n\r\n#add-project-popup-add:hover {\r\n\tbackground-color: rgb(0, 100, 0);\r\n}\r\n\r\n#add-project-popup-cancel {\r\n\tbackground-color: rgb(140, 0, 0);\r\n}\r\n\r\n#add-project-popup-cancel:hover {\r\n\tbackground-color: rgb(100, 0, 0);\r\n}\r\n\r\n#sidebar-footer {\r\n\twidth: 100%;\r\n\tbackground-color: #111;\r\n\tfont-size: 1rem;\r\n\tmargin-top: auto;\r\n\ttext-align: center;\r\n}\r\n\r\n/* ! Main */\r\n.task-expand {\r\n\tdisplay: none;\t\r\n}\r\n\r\n#main {\r\n\tflex-grow: 1;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\tbackground-color: #222;\r\n}\r\n\r\n#selected-project {\r\n\tfont-size: 2rem;\r\n\tfont-weight: bold;\r\n\tmargin-left: 1rem;\r\n\tmargin-top: 1rem;\r\n\tpadding: 0;\r\n\twidth: 100%;\r\n\theight: 2.5rem;\r\n\tfont-size: 2rem;\r\n}\r\n\r\n#tasks-container {\r\n\twidth: 50%;\r\n\tmin-width: 15rem;\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.tasks-label {\r\n\tfont-weight: bold;\r\n\tmargin: 0;\r\n\tmargin-top: 1rem;\r\n}\r\n\r\n#task-button {\r\n\tdisplay: flex;\r\n}\r\n\r\n#task-button i {\r\n\tmargin-left: auto;\r\n\twidth: 100%;\r\n\talign-items: center;\r\n}\r\n\r\n#new-task-button {\r\n\tbackground-color: #111;\r\n\tborder-radius: 5px;\r\n\tmargin-top: 0.5rem;\r\n}\r\n\r\n#add-task-popup {\r\n\tpadding: 0.5rem 1rem 0;\r\n\twidth: 16rem;\r\n\ttext-align: center;\r\n\tdisplay: none;\r\n}\r\n\r\n#add-task-popup-input {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.5rem;\r\n\tbackground-color: #111;\r\n}\r\n\r\n#add-task-popup-input::placeholder {\r\n\tcolor: rgb(255, 65, 65);\r\n}\r\n\r\n#add-task-popup-buttons {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n}\r\n\r\n.add-task-popup-button {\r\n\twidth: 45%;\r\n\tfont-size: 0.9rem;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#add-task-popup-add {\r\n\tbackground-color: rgb(0, 140, 0);\r\n}\r\n\r\n#add-task-popup-add:hover {\r\n\tbackground-color: rgb(0, 100, 0);\r\n}\r\n\r\n#add-task-popup-cancel {\r\n\tbackground-color: rgb(140, 0, 0);\r\n}\r\n\r\n#add-task-popup-cancel:hover {\r\n\tbackground-color: rgb(100, 0, 0);\r\n}\r\n\r\n#completed button {\r\n\tcolor: gray;\r\n\tfont-style: italic; \r\n}\r\n\r\n.task-expand {\r\n\tflex-direction: column;\r\n\tbackground-color: #111;\r\n\tmargin: 0.2rem;\r\n\tpadding: 1rem;\r\n}\r\n\r\n.task-expand input {\r\n\tbackground-color: #222;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.task-name-edit {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.1rem;\r\n}\r\n\r\n.task-description-edit {\r\n\twidth: 100%;\r\n\tfont-size: 1.6rem;\r\n\tfont-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n\tcolor: white;\r\n\tresize: vertical;\r\n}\r\n\r\n/* ! Media Queries */\r\n\r\n@media (max-width: 768px) {\r\n\r\n\t#sidebar {\r\n\t\twidth: 80%;\r\n\t\tposition: fixed;\r\n\t}\r\n\r\n\t#sidebar.close {\r\n\t\tleft: -80%;\r\n\t\ttransition-duration: 0.25s;\r\n\t}\r\n\r\n\t#project-button, #new-project-button, #add-project-popup-input, .add-project-popup-button, .add-task-popup-button {\r\n\t\tpadding-top: 0.5rem;\r\n\t\tpadding-bottom: 0.5rem;\r\n\t}\r\n\r\n\t#expand-collapse-sidebar {\r\n\t\tvisibility: visible;\r\n\t}\r\n\t\r\n\t#main, textarea {\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t#selected-project {\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n\t#tasks-container {\r\n\t\tmargin-left: 0;\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t#add-task-popup {\r\n\t\tmargin: auto;\r\n\t}\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7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QUEyQixxQkFBcUIsT0FBTyxLQUFLLE9BQU8sdUZBQXVGLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxL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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixvRUFBbUI7O0FBRTNDO0FBQ0E7QUFDQSxFQUFFLFVBQVUsaUVBQWdCO0FBQzVCO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUEsNkJBQTZCLHFEQUFJO0FBQ2pDLHFCQUFxQiw4REFBYTtBQUNsQyxFQUFFLGdFQUFlOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsNERBQVc7QUFDWCxvRUFBbUI7QUFDbkIsa0JBQWtCLCtEQUFjO0FBQ2hDLENBQUM7O0FBRUQsa0QiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuXFx0aGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEuNnJlbTtcXHJcXG5cXHRmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuXFx0cGFkZGluZzogMC4ycmVtO1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0Y29sb3I6IGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcblxcdGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG5cXHRvdXRsaW5lOiBub25lO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcblxcdGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcblxcdGNvbG9yOiBpbmhlcml0O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaSB7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZC5wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi8qICEgU2lkZWJhciAqL1xcclxcbiNzaWRlYmFyIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdHdpZHRoOiAzMDBweDtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0b3ZlcmZsb3cteDogdmlzaWJsZTtcXHJcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbiNleHBhbmQtY29sbGFwc2Utc2lkZWJhciB7XFxyXFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcclxcblxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRib3R0b206IDA7XFxyXFxuXFx0d2lkdGg6IDNyZW07XFxyXFxuXFx0aGVpZ2h0OiAzcmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDBweCA1cHggMHB4IDBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcclxcbn1cXHJcXG5cXHJcXG4jZXhwYW5kLWNvbGxhcHNlLXNpZGViYXI6aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZSB7XFxyXFxuXFx0Zm9udC1zaXplOiAycmVtO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRtYXJnaW46IDFyZW0gMCAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbjpob3ZlciwgI25ldy1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uLmFjdGl2ZSB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdC1idXR0b24ge1xcclxcblxcdGNvbG9yOiBsaWdodGdyYXk7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtcG9wdXAge1xcclxcblxcdHBhZGRpbmc6IDAuNXJlbSAxcmVtIDA7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1wb3B1cC1pbnB1dCB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1wb3B1cC1pbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcblxcdGNvbG9yOiByZ2IoMjU1LCA2NSwgNjUpO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtcG9wdXAtYnV0dG9ucyB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LXBvcHVwLWJ1dHRvbiB7XFxyXFxuXFx0d2lkdGg6IDQ1JTtcXHJcXG5cXHRmb250LXNpemU6IDAuOXJlbTtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LXBvcHVwLWFkZCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE0MCwgMCk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1wb3B1cC1hZGQ6aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtcG9wdXAtY2FuY2VsIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LXBvcHVwLWNhbmNlbDpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLWZvb3RlciB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzExMTtcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0bWFyZ2luLXRvcDogYXV0bztcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qICEgTWFpbiAqL1xcclxcbi50YXNrLWV4cGFuZCB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHRcXHJcXG59XFxyXFxuXFxyXFxuI21haW4ge1xcclxcblxcdGZsZXgtZ3JvdzogMTtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VsZWN0ZWQtcHJvamVjdCB7XFxyXFxuXFx0Zm9udC1zaXplOiAycmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcblxcdG1hcmdpbi10b3A6IDFyZW07XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IDIuNXJlbTtcXHJcXG5cXHRmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiN0YXNrcy1jb250YWluZXIge1xcclxcblxcdHdpZHRoOiA1MCU7XFxyXFxuXFx0bWluLXdpZHRoOiAxNXJlbTtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWxhYmVsIHtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0bWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stYnV0dG9uIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFzay1idXR0b24gaSB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrLWJ1dHRvbiB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzExMTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0bWFyZ2luLXRvcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2stcG9wdXAge1xcclxcblxcdHBhZGRpbmc6IDAuNXJlbSAxcmVtIDA7XFxyXFxuXFx0d2lkdGg6IDE2cmVtO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2stcG9wdXAtaW5wdXQge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2stcG9wdXAtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG5cXHRjb2xvcjogcmdiKDI1NSwgNjUsIDY1KTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLXBvcHVwLWJ1dHRvbnMge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzay1wb3B1cC1idXR0b24ge1xcclxcblxcdHdpZHRoOiA0NSU7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjlyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay1wb3B1cC1hZGQge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2stcG9wdXAtYWRkOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLXBvcHVwLWNhbmNlbCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay1wb3B1cC1jYW5jZWw6aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tcGxldGVkIGJ1dHRvbiB7XFxyXFxuXFx0Y29sb3I6IGdyYXk7XFxyXFxuXFx0Zm9udC1zdHlsZTogaXRhbGljOyBcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZXhwYW5kIHtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxyXFxuXFx0bWFyZ2luOiAwLjJyZW07XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZXhwYW5kIGlucHV0IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbmFtZS1lZGl0IHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRlc2NyaXB0aW9uLWVkaXQge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGZvbnQtc2l6ZTogMS42cmVtO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRyZXNpemU6IHZlcnRpY2FsO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAhIE1lZGlhIFF1ZXJpZXMgKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHJcXG5cXHQjc2lkZWJhciB7XFxyXFxuXFx0XFx0d2lkdGg6IDgwJTtcXHJcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCNzaWRlYmFyLmNsb3NlIHtcXHJcXG5cXHRcXHRsZWZ0OiAtODAlO1xcclxcblxcdFxcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjcHJvamVjdC1idXR0b24sICNuZXctcHJvamVjdC1idXR0b24sICNhZGQtcHJvamVjdC1wb3B1cC1pbnB1dCwgLmFkZC1wcm9qZWN0LXBvcHVwLWJ1dHRvbiwgLmFkZC10YXNrLXBvcHVwLWJ1dHRvbiB7XFxyXFxuXFx0XFx0cGFkZGluZy10b3A6IDAuNXJlbTtcXHJcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjZXhwYW5kLWNvbGxhcHNlLXNpZGViYXIge1xcclxcblxcdFxcdHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuXFx0fVxcclxcblxcdFxcclxcblxcdCNtYWluLCB0ZXh0YXJlYSB7XFxyXFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjc2VsZWN0ZWQtcHJvamVjdCB7XFxyXFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDA7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCN0YXNrcy1jb250YWluZXIge1xcclxcblxcdFxcdG1hcmdpbi1sZWZ0OiAwO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjYWRkLXRhc2stcG9wdXAge1xcclxcblxcdFxcdG1hcmdpbjogYXV0bztcXHJcXG5cXHR9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsYUFBYTtDQUNiLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsMkJBQTJCO0NBQzNCLFNBQVM7Q0FDVCxpQkFBaUI7Q0FDakIscUdBQXFHO0NBQ3JHLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsY0FB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QUVBO0NBQ0MsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixxR0FBcUc7Q0FDckcsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7QUFFQSxvQkFBb0I7O0FBRXBCOztDQUVDO0VBQ0MsVUFBVTtFQUNWLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxVQUFVO0VBQ1YsMEJBQTBCO0NBQzNCOztDQUVBO0VBQ0MsbUJBQW1CO0VBQ25CLHNCQUFzQjtDQUN2Qjs7Q0FFQTtFQUNDLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLGNBQWM7Q0FDZjs7Q0FFQTtFQUNDLGNBQWM7RUFDZCxXQUFXO0NBQ1o7O0NBRUE7RUFDQyxZQUFZO0NBQ2I7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMS42cmVtO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG5cXHRwYWRkaW5nOiAwLjJyZW07XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcblxcdGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRjb2xvcjogbGlnaHRncmF5O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuXFx0Ym9yZGVyLXN0eWxlOiBub25lO1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0cmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pIHtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkLnByb2plY3QtYnV0dG9uIHtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogISBTaWRlYmFyICovXFxyXFxuI3NpZGViYXIge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0d2lkdGg6IDMwMHB4O1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRvdmVyZmxvdy14OiB2aXNpYmxlO1xcclxcblxcdG92ZXJmbG93LXk6IGF1dG87XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuI2V4cGFuZC1jb2xsYXBzZS1zaWRlYmFyIHtcXHJcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuXFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdGJvdHRvbTogMDtcXHJcXG5cXHR3aWR0aDogM3JlbTtcXHJcXG5cXHRoZWlnaHQ6IDNyZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMHB4IDVweCAwcHggMHB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxyXFxufVxcclxcblxcclxcbiNleHBhbmQtY29sbGFwc2Utc2lkZWJhcjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlIHtcXHJcXG5cXHRmb250LXNpemU6IDJyZW07XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdG1hcmdpbjogMXJlbSAwIDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uOmhvdmVyLCAjbmV3LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b24uYWN0aXZlIHtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuXFx0Y29sb3I6IGxpZ2h0Z3JheTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzExMTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1wb3B1cCB7XFxyXFxuXFx0cGFkZGluZzogMC41cmVtIDFyZW0gMDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LXBvcHVwLWlucHV0IHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzExMTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LXBvcHVwLWlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuXFx0Y29sb3I6IHJnYigyNTUsIDY1LCA2NSk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1wb3B1cC1idXR0b25zIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QtcG9wdXAtYnV0dG9uIHtcXHJcXG5cXHR3aWR0aDogNDUlO1xcclxcblxcdGZvbnQtc2l6ZTogMC45cmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtcG9wdXAtYWRkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTQwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LXBvcHVwLWFkZDpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEwMCwgMCk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1wb3B1cC1jYW5jZWwge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxNDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtcG9wdXAtY2FuY2VsOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXItZm9vdGVyIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRtYXJnaW4tdG9wOiBhdXRvO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogISBNYWluICovXFxyXFxuLnRhc2stZXhwYW5kIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcdFxcclxcbn1cXHJcXG5cXHJcXG4jbWFpbiB7XFxyXFxuXFx0ZmxleC1ncm93OiAxO1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxyXFxufVxcclxcblxcclxcbiNzZWxlY3RlZC1wcm9qZWN0IHtcXHJcXG5cXHRmb250LXNpemU6IDJyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuXFx0bWFyZ2luLXRvcDogMXJlbTtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGhlaWdodDogMi41cmVtO1xcclxcblxcdGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzLWNvbnRhaW5lciB7XFxyXFxuXFx0d2lkdGg6IDUwJTtcXHJcXG5cXHRtaW4td2lkdGg6IDE1cmVtO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3MtbGFiZWwge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFzay1idXR0b24ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWJ1dHRvbiBpIHtcXHJcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2stYnV0dG9uIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay1wb3B1cCB7XFxyXFxuXFx0cGFkZGluZzogMC41cmVtIDFyZW0gMDtcXHJcXG5cXHR3aWR0aDogMTZyZW07XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay1wb3B1cC1pbnB1dCB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay1wb3B1cC1pbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcblxcdGNvbG9yOiByZ2IoMjU1LCA2NSwgNjUpO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2stcG9wdXAtYnV0dG9ucyB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrLXBvcHVwLWJ1dHRvbiB7XFxyXFxuXFx0d2lkdGg6IDQ1JTtcXHJcXG5cXHRmb250LXNpemU6IDAuOXJlbTtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLXBvcHVwLWFkZCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE0MCwgMCk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay1wb3B1cC1hZGQ6aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2stcG9wdXAtY2FuY2VsIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLXBvcHVwLWNhbmNlbDpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbiNjb21wbGV0ZWQgYnV0dG9uIHtcXHJcXG5cXHRjb2xvcjogZ3JheTtcXHJcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7IFxcclxcbn1cXHJcXG5cXHJcXG4udGFzay1leHBhbmQge1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzExMTtcXHJcXG5cXHRtYXJnaW46IDAuMnJlbTtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1leHBhbmQgaW5wdXQge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1uYW1lLWVkaXQge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZGVzY3JpcHRpb24tZWRpdCB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjZyZW07XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdHJlc2l6ZTogdmVydGljYWw7XFxyXFxufVxcclxcblxcclxcbi8qICEgTWVkaWEgUXVlcmllcyAqL1xcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcblxcclxcblxcdCNzaWRlYmFyIHtcXHJcXG5cXHRcXHR3aWR0aDogODAlO1xcclxcblxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I3NpZGViYXIuY2xvc2Uge1xcclxcblxcdFxcdGxlZnQ6IC04MCU7XFxyXFxuXFx0XFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCNwcm9qZWN0LWJ1dHRvbiwgI25ldy1wcm9qZWN0LWJ1dHRvbiwgI2FkZC1wcm9qZWN0LXBvcHVwLWlucHV0LCAuYWRkLXByb2plY3QtcG9wdXAtYnV0dG9uLCAuYWRkLXRhc2stcG9wdXAtYnV0dG9uIHtcXHJcXG5cXHRcXHRwYWRkaW5nLXRvcDogMC41cmVtO1xcclxcblxcdFxcdHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCNleHBhbmQtY29sbGFwc2Utc2lkZWJhciB7XFxyXFxuXFx0XFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0I21haW4sIHRleHRhcmVhIHtcXHJcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCNzZWxlY3RlZC1wcm9qZWN0IHtcXHJcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I3Rhc2tzLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDA7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCNhZGQtdGFzay1wb3B1cCB7XFxyXFxuXFx0XFx0bWFyZ2luOiBhdXRvO1xcclxcblxcdH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG5cdGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLnRhc2tzID0gW107XHJcblx0fVxyXG59IiwiLy8gVE9ETzogTG9jYWwgU3RvcmFnZSBzYXZpbmcgaGVyZVxyXG5sZXQgcHJvamVjdHMgPSBbXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xyXG5cdHN0YXRpYyBzYXZlUHJvamVjdHMoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcInNhdmVcIik7XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0UHJvamVjdHMoKSB7XHJcblx0XHQvL0NvbnZlcnQgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuXHRcdGNvbnNvbGUubG9nKFwiZ2V0XCIpO1xyXG5cdFx0cHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xyXG5cclxuXHRcdGlmIChwcm9qZWN0cyA9PT0gbnVsbCkge1xyXG5cdFx0XHRwcm9qZWN0cyA9IFtdO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vdG9kb0xpc3Quc2V0UHJvamVjdHModG9kb0xpc3QuZ2V0UHJvamVjdHMoKS5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdCkpLCk7XHJcblxyXG5cdFx0Ly90b2RvTGlzdC5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHByb2plY3Quc2V0VGFza3MocHJvamVjdC5nZXRUYXNrcygpLm1hcCgodGFzaykgPT4gT2JqZWN0LmFzc2lnbihuZXcgVGFzaygpLCB0YXNrKSksKSwpO1xyXG5cclxuXHRcdHJldHVybiBwcm9qZWN0cztcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuXHRcdHByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcblx0XHRTdG9yYWdlLnNhdmVQcm9qZWN0cygpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHVwZGF0ZVByb2plY3QocHJvamVjdE5hbWUsIG5ld1Byb2plY3RWZXJzaW9uKSB7XHJcblxyXG5cdFx0cHJvamVjdHMuc3BsaWNlKHByb2plY3RzLmluZGV4T2YoU3RvcmFnZS5maW5kUHJvamVjdChwcm9qZWN0TmFtZSkpLCAxLCBuZXdQcm9qZWN0VmVyc2lvbik7XHJcblxyXG5cdFx0U3RvcmFnZS5zYXZlUHJvamVjdHMoKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcclxuXHRcdHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpLCAxKTtcclxuXHRcdFN0b3JhZ2Uuc2F2ZVByb2plY3RzKCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZmluZFByb2plY3QocHJvamVjdE5hbWUpIHtcclxuXHRcdHJldHVybiBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBwcm9qZWN0TmFtZSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYWRkVGFzayhwcm9qZWN0LCB0YXNrKSB7XHJcblx0XHRwcm9qZWN0LnRhc2tzLnB1c2godGFzayk7XHJcblx0XHRTdG9yYWdlLnNhdmVQcm9qZWN0cygpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHVwZGF0ZVRhc2socHJvamVjdCwgdGFza05hbWUsIG5ld1Rhc2tWZXJzaW9uKSB7XHJcblx0XHRwcm9qZWN0LnRhc2tzLnNwbGljZShwcm9qZWN0LnRhc2tzLmluZGV4T2YoU3RvcmFnZS5maW5kVGFzayhwcm9qZWN0LCB0YXNrTmFtZSkpLCAxLCBuZXdUYXNrVmVyc2lvbik7XHJcblx0XHRTdG9yYWdlLnVwZGF0ZVByb2plY3QocHJvamVjdC5uYW1lLCBwcm9qZWN0KTtcclxuXHRcdFN0b3JhZ2Uuc2F2ZVByb2plY3RzKCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZGVsZXRlVGFzayhwcm9qZWN0LCB0YXNrKSB7XHJcblx0XHRwcm9qZWN0LnRhc2tzLnNwbGljZShwcm9qZWN0LnRhc2tzLmluZGV4T2YodGFzayksIDEpO1xyXG5cdFx0U3RvcmFnZS5zYXZlUHJvamVjdHMoKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBmaW5kVGFzayhwcm9qZWN0LCB0YXNrTmFtZSkge1xyXG5cdFx0cmV0dXJuIHByb2plY3QudGFza3MuZmluZCh0YXNrID0+IHRhc2submFtZSA9PT0gdGFza05hbWUpO1xyXG5cdH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG5cdGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uID0gXCJcIikge1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuXHRcdHRoaXMuY29tcGxldGVkID0gZmFsc2U7XHJcblx0fVxyXG59IiwiaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xyXG5cdC8vISBMb2FkIGNvbnRlbnRcclxuXHRzdGF0aWMgbG9hZFBhZ2UoKSB7XHJcblx0XHRVSS5sb2FkUHJvamVjdHMoKTtcclxuXHRcdFVJLmxvYWRUYXNrcygpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGxvYWRQcm9qZWN0cygpIHtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcblx0XHRTdG9yYWdlLmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG5cdFx0XHRVSS5jcmVhdGVQcm9qZWN0KHByb2plY3QpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgbG9hZFRhc2tzKHByb2plY3QpIHtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3NcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGxldGVkXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLXBvcHVwXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtcG9wdXBcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuXHRcdGlmICh0eXBlb2YgcHJvamVjdCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdGVkLXByb2plY3RcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3MtY29udGFpbmVyXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RlZC1wcm9qZWN0XCIpLnZhbHVlID0gcHJvamVjdC5uYW1lO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tcGxldGVkXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0ZWQtcHJvamVjdFwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3MtY29udGFpbmVyXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuXHJcblx0XHRcdGxldCB0YXNrRGl2cyA9IFtdO1xyXG5cdFx0XHRwcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcblx0XHRcdFx0Y29uc3QgdGFza0RpdiA9IFVJLmNyZWF0ZVRhc2sodGFzayk7XHJcblx0XHRcdFx0dGFza0RpdnMucHVzaCh0YXNrRGl2KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiB0YXNrRGl2cztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHQvLyEgQ3JlYXRlIGNvbnRlbnRcclxuXHRzdGF0aWMgY3JlYXRlUHJvamVjdChwcm9qZWN0KSB7XHJcblx0XHRjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKTtcclxuXHRcdGNvbnN0IG5ld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblx0XHRuZXdCdXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtYnV0dG9uXCIpO1xyXG5cdFx0bmV3QnV0dG9uLmlubmVySFRNTCA9IGBcclxuXHRcdFx0PHNwYW4+JHtwcm9qZWN0Lm5hbWV9PC9zcGFuPlxyXG5cdFx0XHQ8aT4mdGltZXM7PC9pPlxyXG5cdFx0YDtcclxuXHRcdHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3QnV0dG9uKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIG5ld0J1dHRvbjtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjcmVhdGVUYXNrKHRhc2spIHtcclxuXHRcdGxldCB0YXNrQ29udGFpbmVyO1xyXG5cdFx0aWYgKHRhc2suY29tcGxldGVkID09PSBmYWxzZSkge1xyXG5cdFx0XHR0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrc1wiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbXBsZXRlZFwiKTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0dGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcclxuXHRcdHRhc2tEaXYuaW5uZXJIVE1MID0gYFxyXG5cdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJ0YXNrLWNoZWNrYm94XCI+XHJcblx0XHRcdDxidXR0b24gY2xhc3M9XCJ0YXNrLWJ1dHRvblwiPlxyXG5cdFx0XHRcdDxzcGFuPiR7dGFzay5uYW1lfTwvc3Bhbj5cclxuXHRcdFx0XHQ8aT4mdGltZXM7PC9pPlxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInRhc2stZXhwYW5kXCI+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ0YXNrLW5hbWUtZWRpdFwiIG5hbWU9XCJOYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdmFsdWU9XCIke3Rhc2submFtZX1cIj5cclxuXHRcdFx0XHQ8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBjbGFzcz1cInRhc2stZGVzY3JpcHRpb24tZWRpdFwiIG5hbWU9XCJEZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIj4ke3Rhc2suZGVzY3JpcHRpb259PC90ZXh0YXJlYT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRgO1xyXG5cdFx0aWYgKHRhc2suY29tcGxldGVkID09PSB0cnVlKSB7XHJcblx0XHRcdHRhc2tEaXYucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0dGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcclxuXHRcdHJldHVybiB0YXNrRGl2O1xyXG5cdH1cclxuXHJcblx0Ly8hIEV4cGFuZCBvciBjb2xsYXBzZSBjb250ZW50XHJcblx0c3RhdGljIGV4cGFuZENvbGxhcHNlU2lkZWJhcigpIHtcclxuXHRcdGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXJcIik7XHJcblx0XHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V4cGFuZC1jb2xsYXBzZS1zaWRlYmFyXCIpO1xyXG5cclxuXHRcdGlmIChidXR0b24udGV4dENvbnRlbnQgPT09IFwi4peAXCIpIHtcclxuXHRcdFx0c2lkZWJhci5jbGFzc0xpc3QuYWRkKFwiY2xvc2VcIik7XHJcblx0XHRcdGJ1dHRvbi50ZXh0Q29udGVudCA9IFwi4pa2XCI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJjbG9zZVwiKTtcclxuXHRcdFx0YnV0dG9uLnRleHRDb250ZW50ID0gXCLil4BcIjtcclxuXHRcdH1cclxuXHR9XHJcblx0c3RhdGljIGV4cGFuZENvbGxhcHNlVGFzayh0YXNrQnV0dG9uLCB0YXNrKSB7XHJcblx0XHRjb25zdCB0YXNrRXhwYW5kID0gdGFza0J1dHRvbi5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZXhwYW5kXCIpO1xyXG5cclxuXHRcdHRhc2tFeHBhbmQucXVlcnlTZWxlY3RvcihcIi50YXNrLW5hbWUtZWRpdFwiKS52YWx1ZSA9IHRhc2submFtZTtcclxuXHRcdHRhc2tFeHBhbmQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRlc2NyaXB0aW9uLWVkaXRcIikudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG5cdFx0dGFza0V4cGFuZC5zdHlsZS5kaXNwbGF5ID0gKHRhc2tFeHBhbmQuc3R5bGUuZGlzcGxheSA9PT0gXCJmbGV4XCIgPyBcIm5vbmVcIiA6IFwiZmxleFwiKTtcclxuXHR9XHJcblxyXG5cclxuXHQvLyEgRmluZCBjb250ZW50XHJcblx0c3RhdGljIGZpbmRQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcblx0XHRsZXQgcHJvamVjdEZvdW5kO1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWJ1dHRvblwiKS5mb3JFYWNoKChwcm9qZWN0QnV0dG9uKSA9PiB7XHJcblx0XHRcdGlmIChwcm9qZWN0QnV0dG9uLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnRleHRDb250ZW50ID09PSBwcm9qZWN0TmFtZSkge1xyXG5cdFx0XHRcdHByb2plY3RGb3VuZCA9IHByb2plY3RCdXR0b247XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHByb2plY3RGb3VuZDtcclxuXHR9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL21vZHVsZXMvdGFzay5qc1wiO1xyXG5pbXBvcnQgVUkgZnJvbSBcIi4vbW9kdWxlcy91aS5qc1wiO1xyXG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9tb2R1bGVzL3N0b3JhZ2UuanNcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XHJcblxyXG4vLyAhIFByb2plY3RcclxubGV0IHNlbGVjdGVkUHJvamVjdDtcclxuXHJcbmZ1bmN0aW9uIHByb2plY3RTZWxlY3QoYnV0dG9uKSB7XHJcblx0Y29uc3QgcHJvamVjdCA9IFN0b3JhZ2UuZmluZFByb2plY3QoYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnRleHRDb250ZW50KTtcclxuXHJcblx0aWYgKHNlbGVjdGVkUHJvamVjdCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRzZWxlY3RlZFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xyXG5cdH1cclxuXHRidXR0b24uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG5cdHNlbGVjdGVkUHJvamVjdCA9IGJ1dHRvbjtcclxuXHJcblx0Y29uc3QgdGFza3MgPSBVSS5sb2FkVGFza3MocHJvamVjdCk7XHJcblx0dGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuXHRcdGFkZFRhc2tFdmVudHModGFzayk7XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2plY3REZWxldGUoZXZlbnQsIGJ1dHRvbikge1xyXG5cdGNvbnN0IHByb2plY3QgPSBTdG9yYWdlLmZpbmRQcm9qZWN0KGJ1dHRvbi5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS50ZXh0Q29udGVudCk7XHJcblxyXG5cdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFN0b3JhZ2UuZGVsZXRlUHJvamVjdChwcm9qZWN0KTtcclxuXHRVSS5maW5kUHJvamVjdChwcm9qZWN0Lm5hbWUpLnJlbW92ZSgpO1xyXG5cclxuXHRjb25zdCBuZXh0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1idXR0b25cIik7XHJcblx0aWYgKG5leHRQcm9qZWN0ICE9PSBudWxsKSB7XHJcblx0XHRuZXh0UHJvamVjdC5jbGljaygpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRVSS5sb2FkVGFza3MoKTtcclxuXHR9XHJcbn1cclxuXHJcbi8vQWRkIHByb2plY3QgZXZlbnRzIGZvciBuZXcgYnV0dG9ucyBiZWluZyBhZGRlZFxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0RXZlbnRzKGJ1dHRvbikge1xyXG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcHJvamVjdFNlbGVjdChidXR0b24pKTtcclxuXHRidXR0b24ucXVlcnlTZWxlY3RvcihcImlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4gcHJvamVjdERlbGV0ZShldmVudCwgYnV0dG9uKSk7XHJcbn1cclxuXHJcblxyXG4vLyAhIEFkZGluZyBuZXcgcHJvamVjdHNcclxuY29uc3QgYWRkUHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1wb3B1cFwiKTtcclxuY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LXBvcHVwLWlucHV0XCIpO1xyXG5cclxuZnVuY3Rpb24gbmV3UHJvamVjdENsaWNrKCkge1xyXG5cdG5ld1Byb2plY3ROYW1lLnZhbHVlID0gXCJcIjtcclxuXHRuZXdQcm9qZWN0TmFtZS5wbGFjZWhvbGRlciA9IFwiXCI7XHJcblx0YWRkUHJvamVjdFBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0bmV3UHJvamVjdE5hbWUuZm9jdXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV3UHJvamVjdENhbmNlbCgpIHtcclxuXHRhZGRQcm9qZWN0UG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdQcm9qZWN0QWRkKCkge1xyXG5cdGlmIChuZXdQcm9qZWN0TmFtZS52YWx1ZSA9PT0gXCJcIikge1xyXG5cdFx0bmV3UHJvamVjdE5hbWUucGxhY2Vob2xkZXIgPSBcIk5hbWUgY2FuJ3QgYmUgYmxhbmtcIjtcclxuXHR9IGVsc2UgaWYgKFN0b3JhZ2UuZmluZFByb2plY3QobmV3UHJvamVjdE5hbWUudmFsdWUpICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdG5ld1Byb2plY3ROYW1lLnZhbHVlID0gXCJcIjtcclxuXHRcdG5ld1Byb2plY3ROYW1lLnBsYWNlaG9sZGVyID0gXCJOYW1lIGlzIGFscmVhZHkgdXNlZFwiO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRuZXdQcm9qZWN0Q2FuY2VsKCk7XHJcblxyXG5cdFx0Y29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5ld1Byb2plY3ROYW1lLnZhbHVlKTtcclxuXHRcdGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBVSS5jcmVhdGVQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG5cdFx0U3RvcmFnZS5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG5cclxuXHRcdGFkZFByb2plY3RFdmVudHMobmV3UHJvamVjdEJ1dHRvbik7XHJcblx0fVxyXG59XHJcblxyXG4vL0FkZCBwcm9qZWN0IGlmIHRoZSBFbnRlciBrZXkgaXMgcHJlc3NlZCBpbiB0aGUgaW5wdXQgYm94XHJcbmZ1bmN0aW9uIG5ld1Byb2plY3RJbnB1dEtleXVwKGV2ZW50KSB7XHJcblx0aWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LXBvcHVwLWFkZFwiKS5jbGljaygpO1xyXG5cdH1cclxufVxyXG5cclxuLy9DbGVhciB0aGUgcGxhY2Vob2xkZXIgKGNhbid0IGJlIGJsYW5rIG1lc3NhZ2UpIG9uIGlucHV0IGZvY3VzXHJcbmZ1bmN0aW9uIG5ld1Byb2plY3RJbnB1dEZvY3VzKCkge1xyXG5cdG5ld1Byb2plY3ROYW1lLnBsYWNlaG9sZGVyID0gXCJcIjtcclxufVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Byb2plY3RDbGljayk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtcG9wdXAtY2FuY2VsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdQcm9qZWN0Q2FuY2VsKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1wb3B1cC1hZGRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Byb2plY3RBZGQpO1xyXG5uZXdQcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgbmV3UHJvamVjdElucHV0Rm9jdXMpO1xyXG5uZXdQcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgbmV3UHJvamVjdElucHV0S2V5dXApO1xyXG5cclxuLy8hIFNpZGViYXIgT3Blbi9DbG9zZSBCdXR0b25cclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXhwYW5kLWNvbGxhcHNlLXNpZGViYXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLmV4cGFuZENvbGxhcHNlU2lkZWJhcik7XHJcblxyXG5cclxuLy8gISBSZW5hbWluZyBwcm9qZWN0XHJcbmNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RlZC1wcm9qZWN0XCIpO1xyXG5cclxuZnVuY3Rpb24gcHJvamVjdE5hbWVJbnB1dCgpIHtcclxuXHRpZiAocHJvamVjdE5hbWUudmFsdWUgIT09IHNlbGVjdGVkUHJvamVjdC5uYW1lKSB7XHJcblx0XHRwcm9qZWN0TmFtZS5zdHlsZS5jb2xvciA9IFwiZ3JheVwiO1xyXG5cdFx0cHJvamVjdE5hbWUuc3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cHJvamVjdE5hbWUuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XHJcblx0XHRwcm9qZWN0TmFtZS5zdHlsZS5mb250U3R5bGUgPSBcIm5vcm1hbFwiO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcHJvamVjdE5hbWVEZWZvY3VzKCkge1xyXG5cdGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gU3RvcmFnZS5maW5kUHJvamVjdChzZWxlY3RlZFByb2plY3QucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQpO1xyXG5cclxuXHRpZiAocHJvamVjdE5hbWUudmFsdWUgIT09IFwiXCIpIHtcclxuXHRcdGNvbnN0IG5ld1Byb2plY3RWZXJzaW9uID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUudmFsdWUsIGN1cnJlbnRQcm9qZWN0LnRhc2tzKTtcclxuXHRcdFN0b3JhZ2UudXBkYXRlUHJvamVjdChjdXJyZW50UHJvamVjdC5uYW1lLCBuZXdQcm9qZWN0VmVyc2lvbik7XHJcblx0XHRzZWxlY3RlZFByb2plY3QucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZS52YWx1ZTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cHJvamVjdE5hbWUudmFsdWUgPSBjdXJyZW50UHJvamVjdDtcclxuXHR9XHJcblx0cHJvamVjdE5hbWUuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XHJcblx0cHJvamVjdE5hbWUuc3R5bGUuZm9udFN0eWxlID0gXCJub3JtYWxcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvamVjdE5hbWVLZXlkb3duKGV2ZW50KSB7XHJcblx0aWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvL1ByZXZlbnQgY3JlYXRpbmcgYSBuZXcgbGluZVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcHJvamVjdE5hbWVLZXl1cChldmVudCkge1xyXG5cdGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG5cdFx0cHJvamVjdE5hbWUuYmx1cigpO1xyXG5cdH1cclxufVxyXG5cclxucHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHByb2plY3ROYW1lSW5wdXQpO1xyXG5wcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBwcm9qZWN0TmFtZURlZm9jdXMpO1xyXG5wcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBwcm9qZWN0TmFtZUtleWRvd24pO1xyXG5wcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgcHJvamVjdE5hbWVLZXl1cCk7XHJcblxyXG5cclxuLy8gISBUYXNrc1xyXG5mdW5jdGlvbiB0YXNrQ29tcGxldGUoZXZlbnQsIHRhc2tEaXYsIGlucHV0KSB7XHJcblx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0Y29uc3QgY3VycmVudFByb2plY3QgPSBTdG9yYWdlLmZpbmRQcm9qZWN0KHNlbGVjdGVkUHJvamVjdC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS50ZXh0Q29udGVudCk7XHJcblx0Y29uc3QgY3VycmVudFRhc2sgPSBTdG9yYWdlLmZpbmRUYXNrKGN1cnJlbnRQcm9qZWN0LCB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnRleHRDb250ZW50KTtcclxuXHRsZXQgbmV3VGFza1ZlcnNpb24gPSBuZXcgVGFzayhjdXJyZW50VGFzay5uYW1lLCBjdXJyZW50VGFzay5kZXNjcmlwdGlvbik7XHJcblxyXG5cdGlmIChpbnB1dC5jaGVja2VkID09IGZhbHNlKSB7XHJcblx0XHRuZXdUYXNrVmVyc2lvbi5jb21wbGV0ZWQgPSBmYWxzZTtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3NcIikuYXBwZW5kQ2hpbGQodGFza0Rpdik7XHJcblx0fSBlbHNlIHtcclxuXHRcdG5ld1Rhc2tWZXJzaW9uLmNvbXBsZXRlZCA9IHRydWU7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbXBsZXRlZFwiKS5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcclxuXHR9XHJcblx0U3RvcmFnZS51cGRhdGVUYXNrKGN1cnJlbnRQcm9qZWN0LCBjdXJyZW50VGFzay5uYW1lLCBuZXdUYXNrVmVyc2lvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhc2tDbGljayh0YXNrRGl2KSB7XHJcblxyXG5cdGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gU3RvcmFnZS5maW5kUHJvamVjdChzZWxlY3RlZFByb2plY3QucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQpO1xyXG5cdGNvbnN0IGN1cnJlbnRUYXNrID0gU3RvcmFnZS5maW5kVGFzayhjdXJyZW50UHJvamVjdCwgdGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS50ZXh0Q29udGVudCk7XHJcblxyXG5cdGlmICh0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1leHBhbmRcIikuc3R5bGUuZGlzcGxheSAhPT0gXCJub25lXCIpIHtcclxuXHRcdGxldCBuZXdUYXNrVmVyc2lvbiA9IG5ldyBUYXNrKGN1cnJlbnRUYXNrLm5hbWUsIGN1cnJlbnRUYXNrLmRlc2NyaXB0aW9uKTtcclxuXHJcblx0XHRjb25zdCBvbGRUYXNrTmFtZSA9IGN1cnJlbnRUYXNrLm5hbWU7XHJcblx0XHRjb25zdCBuYW1lSW5wdXQgPSB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1uYW1lLWVkaXRcIik7XHJcblx0XHRjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gdGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGVzY3JpcHRpb24tZWRpdFwiKTtcclxuXHRcdFxyXG5cdFx0aWYgKG5hbWVJbnB1dC52YWx1ZSAhPT0gXCJcIikge1xyXG5cdFx0XHRuZXdUYXNrVmVyc2lvbi5uYW1lID0gbmFtZUlucHV0LnZhbHVlO1xyXG5cdFx0XHR0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnRleHRDb250ZW50ID0gbmV3VGFza1ZlcnNpb24ubmFtZTtcclxuXHRcdH1cclxuXHRcdG5ld1Rhc2tWZXJzaW9uLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcclxuXHRcdG5ld1Rhc2tWZXJzaW9uLmNvbXBsZXRlZCA9IHRhc2tEaXYucXVlcnlTZWxlY3RvcihcIi50YXNrLWNoZWNrYm94XCIpLmNoZWNrZWQ7XHJcblx0XHRTdG9yYWdlLnVwZGF0ZVRhc2soY3VycmVudFByb2plY3QsIG9sZFRhc2tOYW1lLCBuZXdUYXNrVmVyc2lvbik7XHJcblx0fVxyXG5cclxuXHRVSS5leHBhbmRDb2xsYXBzZVRhc2sodGFza0RpdiwgY3VycmVudFRhc2spO1xyXG59XHJcblxyXG4vL0VkaXQgdGFzayBpZiB0aGUgRW50ZXIga2V5IGlzIHByZXNzZWQgaW4gYW4gaW5wdXQgYm94XHJcbmZ1bmN0aW9uIHRhc2tJbnB1dEtleXVwKGV2ZW50LCB0YXNrRGl2KSB7XHJcblx0aWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcblx0XHR0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIikuY2xpY2soKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhc2tEZWxldGUoZXZlbnQsIHRhc2tEaXYpIHtcclxuXHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRjb25zdCBjdXJyZW50UHJvamVjdCA9IFN0b3JhZ2UuZmluZFByb2plY3Qoc2VsZWN0ZWRQcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnRleHRDb250ZW50KTtcclxuXHRjb25zdCBjdXJyZW50VGFzayA9IFN0b3JhZ2UuZmluZFRhc2soY3VycmVudFByb2plY3QsIHRhc2tEaXYucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQpO1xyXG5cclxuXHRTdG9yYWdlLmRlbGV0ZVRhc2soY3VycmVudFByb2plY3QsIGN1cnJlbnRUYXNrKTtcclxuXHR0YXNrRGl2LnJlbW92ZSgpO1xyXG59XHJcblxyXG4vL0FkZCB0YXNrIGV2ZW50cyBmb3IgbmV3IGRpdnMgYmVpbmcgYWRkZWRcclxuZnVuY3Rpb24gYWRkVGFza0V2ZW50cyh0YXNrRGl2KSB7XHJcblx0dGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4gdGFza0NvbXBsZXRlKGV2ZW50LCB0YXNrRGl2LCB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKSkpO1xyXG5cdHRhc2tEaXYucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGFza0NsaWNrKHRhc2tEaXYpKTtcclxuXHR0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1uYW1lLWVkaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4gdGFza0lucHV0S2V5dXAoZXZlbnQsIHRhc2tEaXYpKTtcclxuXHR0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCJpXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHRhc2tEZWxldGUoZXZlbnQsIHRhc2tEaXYpKTtcclxufVxyXG5cclxuXHJcbi8vICEgQWRkaW5nIG5ldyB0YXNrc1xyXG5jb25zdCBhZGRUYXNrUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLXBvcHVwXCIpO1xyXG5jb25zdCBuZXdUYXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stcG9wdXAtaW5wdXRcIik7XHJcblxyXG5mdW5jdGlvbiBuZXdUYXNrQ2xpY2soKSB7XHJcblx0bmV3VGFza05hbWUudmFsdWUgPSBcIlwiO1xyXG5cdG5ld1Rhc2tOYW1lLnBsYWNlaG9sZGVyID0gXCJcIjtcclxuXHRhZGRUYXNrUG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRuZXdUYXNrTmFtZS5mb2N1cygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdUYXNrQ2FuY2VsKCkge1xyXG5cdGFkZFRhc2tQb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld1Rhc2tBZGQoKSB7XHJcblx0Y29uc3QgY3VycmVudFByb2plY3QgPSBTdG9yYWdlLmZpbmRQcm9qZWN0KHNlbGVjdGVkUHJvamVjdC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS50ZXh0Q29udGVudCk7XHJcblxyXG5cdGlmIChuZXdUYXNrTmFtZS52YWx1ZSA9PT0gXCJcIikge1xyXG5cdFx0bmV3VGFza05hbWUucGxhY2Vob2xkZXIgPSBcIk5hbWUgY2FuJ3QgYmUgYmxhbmtcIjtcclxuXHR9IGVsc2UgaWYgKFN0b3JhZ2UuZmluZFRhc2soY3VycmVudFByb2plY3QsIG5ld1Rhc2tOYW1lLnZhbHVlKSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRuZXdUYXNrTmFtZS52YWx1ZSA9IFwiXCI7XHJcblx0XHRuZXdUYXNrTmFtZS5wbGFjZWhvbGRlciA9IFwiTmFtZSBpcyBhbHJlYWR5IHVzZWRcIjtcclxuXHR9IGVsc2Uge1xyXG5cdFx0bmV3VGFza0NhbmNlbCgpO1xyXG5cclxuXHRcdGNvbnN0IG5ld1Rhc2tWZXJzaW9uID0gbmV3IFRhc2sobmV3VGFza05hbWUudmFsdWUpO1xyXG5cdFx0Y29uc3QgbmV3VGFza0RpdiA9IFVJLmNyZWF0ZVRhc2sobmV3VGFza1ZlcnNpb24pO1xyXG5cdFx0U3RvcmFnZS5hZGRUYXNrKGN1cnJlbnRQcm9qZWN0LCBuZXdUYXNrVmVyc2lvbik7XHJcblxyXG5cdFx0YWRkVGFza0V2ZW50cyhuZXdUYXNrRGl2KTtcclxuXHR9XHJcbn1cclxuXHJcbi8vQ2xlYXIgdGhlIHBsYWNlaG9sZGVyIChjYW4ndCBiZSBibGFuayBtZXNzYWdlKSBvbiBpbnB1dCBmb2N1c1xyXG5mdW5jdGlvbiBuZXdUYXNrSW5wdXRGb2N1cygpIHtcclxuXHRuZXdUYXNrTmFtZS5wbGFjZWhvbGRlciA9IFwiXCI7XHJcbn1cclxuXHJcbi8vQWRkIHRhc2sgaWYgdGhlIEVudGVyIGtleSBpcyBwcmVzc2VkIGluIHRoZSBpbnB1dCBib3hcclxuZnVuY3Rpb24gbmV3VGFza0lucHV0S2V5dXAoZXZlbnQpIHtcclxuXHRpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stcG9wdXAtYWRkXCIpLmNsaWNrKCk7XHJcblx0fVxyXG59XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3VGFza0NsaWNrKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1wb3B1cC1jYW5jZWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Rhc2tDYW5jZWwpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLXBvcHVwLWFkZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3VGFza0FkZCk7XHJcbm5ld1Rhc2tOYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBuZXdUYXNrSW5wdXRGb2N1cyk7XHJcbm5ld1Rhc2tOYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBuZXdUYXNrSW5wdXRLZXl1cCk7XHJcblxyXG5cclxuLy8hIEluaXRpYWxpemUgcGFnZVxyXG5VSS5sb2FkUGFnZSgpO1xyXG5TdG9yYWdlLmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG5cdGFkZFByb2plY3RFdmVudHMoVUkuZmluZFByb2plY3QocHJvamVjdC5uYW1lKSk7XHJcbn0pO1xyXG5cclxuLy90b2RvOiBmaWd1cmUgb3V0IHdoeSB1cGRhdGluZyB0YXNrcyBkb2Vzbid0IHNhdmUiXSwic291cmNlUm9vdCI6IiJ9