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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n\theight: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: flex-start;\r\n\tmargin: 0;\r\n\tfont-size: 1.6rem;\r\n\tfont-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n\tcolor: white;\r\n}\r\n\r\nbutton {\r\n\tpadding: 0.2rem;\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tborder-style: none;\r\n\tborder-radius: 5px;\r\n\tbackground-color: inherit;\r\n\tcolor: lightgray;\r\n}\r\n\r\nbutton:hover {\r\n\tbackground-color: #444;\r\n}\r\n\r\ninput {\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tborder-style: none;\r\n\toutline: none;\r\n\tborder-radius: 5px;\r\n\tbackground-color: inherit;\r\n\tcolor: inherit;\r\n}\r\n\r\ntextarea {\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tcolor: inherit;\r\n\tbackground-color: inherit;\r\n\tborder: none;\r\n\tresize: none;\r\n}\r\n\r\ni {\r\n\tcursor: pointer;\r\n}\r\n\r\n.selected {\r\n\tbackground-color: #444;\r\n}\r\n\r\n.selected.project-button {\r\n\tfont-weight: bold;\r\n}\r\n\r\n/* ! Sidebar */\r\n#sidebar {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: 300px;\r\n\theight: 100%;\r\n\toverflow-x: visible;\r\n\toverflow-y: auto;\r\n\tbackground-color: #333;\r\n}\r\n\r\n#expand-collapse-sidebar {\r\n\tvisibility: hidden;\r\n\tposition: fixed;\r\n\tbottom: 0;\r\n\twidth: 3rem;\r\n\theight: 3rem;\r\n\tborder-radius: 0px 5px 0px 0px;\r\n\tbackground-color: #444;\r\n}\r\n\r\n#expand-collapse-sidebar:hover {\r\n\tbackground-color: #555;\r\n}\r\n\r\n#title {\r\n\tfont-size: 2rem;\r\n\ttext-align: center;\r\n\tmargin: 1rem 0 1rem 0;\r\n}\r\n\r\n.project-button {\r\n\twidth: 100%;\r\n\ttext-align: left;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tcolor: white;\r\n}\r\n\r\n.project-button:hover, #new-project-button:hover {\r\n\tbackground-color: #444;\r\n}\r\n\r\n.project-button.active {\r\n\tfont-weight: bold;\r\n}\r\n\r\n#new-project-button {\r\n\tcolor: lightgray;\r\n\ttext-align: center;\r\n\tbackground-color: #111;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n#add-project-popup {\r\n\tpadding: 0.5rem 1rem 0;\r\n\ttext-align: center;\r\n\tdisplay: none;\r\n}\r\n\r\n#add-project-popup-input {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.5rem;\r\n\tbackground-color: #111;\r\n}\r\n\r\n#add-project-popup-input::placeholder {\r\n\tcolor: rgb(255, 65, 65);\r\n}\r\n\r\n#add-project-popup-buttons {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n}\r\n\r\n.add-project-popup-button {\r\n\twidth: 45%;\r\n\tfont-size: 0.9rem;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#add-project-popup-add {\r\n\tbackground-color: rgb(0, 140, 0);\r\n}\r\n\r\n#add-project-popup-add:hover {\r\n\tbackground-color: rgb(0, 100, 0);\r\n}\r\n\r\n#add-project-popup-cancel {\r\n\tbackground-color: rgb(140, 0, 0);\r\n}\r\n\r\n#add-project-popup-cancel:hover {\r\n\tbackground-color: rgb(100, 0, 0);\r\n}\r\n\r\n#sidebar-footer {\r\n\twidth: 100%;\r\n\tbackground-color: #111;\r\n\tfont-size: 1rem;\r\n\tmargin-top: auto;\r\n\ttext-align: center;\r\n}\r\n\r\n/* ! Main */\r\n.task-expand {\r\n\tdisplay: none;\t\r\n}\r\n\r\n#main {\r\n\tflex-grow: 1;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\tbackground-color: #222;\r\n}\r\n\r\n#selected-project {\r\n\tfont-size: 2rem;\r\n\tfont-weight: bold;\r\n\tmargin-left: 1rem;\r\n\tmargin-top: 1rem;\r\n\tpadding: 0;\r\n\twidth: 100%;\r\n\theight: 2.5rem;\r\n\tfont-size: 2rem;\r\n}\r\n\r\n#tasks-container {\r\n\twidth: 50%;\r\n\tmin-width: 15rem;\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.tasks-label {\r\n\tfont-weight: bold;\r\n\tmargin: 0;\r\n\tmargin-top: 1rem;\r\n}\r\n\r\n#task-button {\r\n\tdisplay: flex;\r\n}\r\n\r\n#task-button i {\r\n\tmargin-left: auto;\r\n\twidth: 100%;\r\n\talign-items: center;\r\n}\r\n\r\n#new-task-button {\r\n\tbackground-color: #111;\r\n\tborder-radius: 5px;\r\n\tmargin-top: 0.5rem;\r\n}\r\n\r\n#add-task-popup {\r\n\tpadding: 0.5rem 1rem 0;\r\n\twidth: 16rem;\r\n\ttext-align: center;\r\n\tdisplay: none;\r\n}\r\n\r\n#add-task-popup-input {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.5rem;\r\n\tbackground-color: #111;\r\n}\r\n\r\n#add-task-popup-input::placeholder {\r\n\tcolor: rgb(255, 65, 65);\r\n}\r\n\r\n#add-task-popup-buttons {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n}\r\n\r\n.add-task-popup-button {\r\n\twidth: 45%;\r\n\tfont-size: 0.9rem;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#add-task-popup-add {\r\n\tbackground-color: rgb(0, 140, 0);\r\n}\r\n\r\n#add-task-popup-add:hover {\r\n\tbackground-color: rgb(0, 100, 0);\r\n}\r\n\r\n#add-task-popup-cancel {\r\n\tbackground-color: rgb(140, 0, 0);\r\n}\r\n\r\n#add-task-popup-cancel:hover {\r\n\tbackground-color: rgb(100, 0, 0);\r\n}\r\n\r\n#completed button {\r\n\tcolor: gray;\r\n\tfont-style: italic; \r\n}\r\n\r\n.task-expand {\r\n\tflex-direction: column;\r\n\tbackground-color: #111;\r\n\tmargin: 0.2rem;\r\n\tpadding: 1rem;\r\n}\r\n\r\n.task-expand input {\r\n\tbackground-color: #222;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.task-name-edit {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.1rem;\r\n}\r\n\r\n.task-description-edit {\r\n\twidth: 100%;\r\n\tfont-size: 1.6rem;\r\n\tfont-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n\tcolor: white;\r\n\tresize: vertical;\r\n}\r\n\r\n/* ! Media Queries */\r\n\r\n@media (max-width: 768px) {\r\n\t#main {\r\n\t\tbackground-color: blue;\r\n\t}\r\n\r\n\t#sidebar {\r\n\t\twidth: 80%;\r\n\t\tposition: fixed;\r\n\t}\r\n\r\n\t#sidebar.close {\r\n\t\tleft: -80%;\r\n\t\ttransition-duration: 0.25s;\r\n\t}\r\n\r\n\t#project-button, #new-project-button, #add-project-popup-input, .add-project-popup-button {\r\n\t\tpadding-top: 0.5rem;\r\n\t\tpadding-bottom: 0.5rem;\r\n\t}\r\n\r\n\t#expand-collapse-sidebar {\r\n\t\tvisibility: visible;\r\n\t}\r\n\t\r\n\t#main, textarea {\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t#selected-project {\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n\t#tasks-container {\r\n\t\tmargin-left: 0;\r\n\t\twidth: 100%;\r\n\t}\r\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,aAAa;CACb,mBAAmB;CACnB,2BAA2B;CAC3B,SAAS;CACT,iBAAiB;CACjB,qGAAqG;CACrG,YAAY;AACb;;AAEA;CACC,eAAe;CACf,kBAAkB;CAClB,oBAAoB;CACpB,kBAAkB;CAClB,kBAAkB;CAClB,yBAAyB;CACzB,gBAAgB;AACjB;;AAEA;CACC,sBAAsB;AACvB;;AAEA;CACC,kBAAkB;CAClB,oBAAoB;CACpB,kBAAkB;CAClB,aAAa;CACb,kBAAkB;CAClB,yBAAyB;CACzB,cAAc;AACf;;AAEA;CACC,kBAAkB;CAClB,oBAAoB;CACpB,cAAc;CACd,yBAAyB;CACzB,YAAY;CACZ,YAAY;AACb;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,sBAAsB;AACvB;;AAEA;CACC,iBAAiB;AAClB;;AAEA,cAAc;AACd;CACC,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB,YAAY;CACZ,YAAY;CACZ,mBAAmB;CACnB,gBAAgB;CAChB,sBAAsB;AACvB;;AAEA;CACC,kBAAkB;CAClB,eAAe;CACf,SAAS;CACT,WAAW;CACX,YAAY;CACZ,8BAA8B;CAC9B,sBAAsB;AACvB;;AAEA;CACC,sBAAsB;AACvB;;AAEA;CACC,eAAe;CACf,kBAAkB;CAClB,qBAAqB;AACtB;;AAEA;CACC,WAAW;CACX,gBAAgB;CAChB,aAAa;CACb,8BAA8B;CAC9B,YAAY;AACb;;AAEA;CACC,sBAAsB;AACvB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,gBAAgB;CAChB,kBAAkB;CAClB,sBAAsB;CACtB,kBAAkB;AACnB;;AAEA;CACC,sBAAsB;CACtB,kBAAkB;CAClB,aAAa;AACd;;AAEA;CACC,WAAW;CACX,qBAAqB;CACrB,sBAAsB;AACvB;;AAEA;CACC,uBAAuB;AACxB;;AAEA;CACC,aAAa;CACb,6BAA6B;AAC9B;;AAEA;CACC,UAAU;CACV,iBAAiB;CACjB,iBAAiB;AAClB;;AAEA;CACC,gCAAgC;AACjC;;AAEA;CACC,gCAAgC;AACjC;;AAEA;CACC,gCAAgC;AACjC;;AAEA;CACC,gCAAgC;AACjC;;AAEA;CACC,WAAW;CACX,sBAAsB;CACtB,eAAe;CACf,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA,WAAW;AACX;CACC,aAAa;AACd;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,gBAAgB;CAChB,sBAAsB;AACvB;;AAEA;CACC,eAAe;CACf,iBAAiB;CACjB,iBAAiB;CACjB,gBAAgB;CAChB,UAAU;CACV,WAAW;CACX,cAAc;CACd,eAAe;AAChB;;AAEA;CACC,UAAU;CACV,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;CACjB,SAAS;CACT,gBAAgB;AACjB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,iBAAiB;CACjB,WAAW;CACX,mBAAmB;AACpB;;AAEA;CACC,sBAAsB;CACtB,kBAAkB;CAClB,kBAAkB;AACnB;;AAEA;CACC,sBAAsB;CACtB,YAAY;CACZ,kBAAkB;CAClB,aAAa;AACd;;AAEA;CACC,WAAW;CACX,qBAAqB;CACrB,sBAAsB;AACvB;;AAEA;CACC,uBAAuB;AACxB;;AAEA;CACC,aAAa;CACb,6BAA6B;AAC9B;;AAEA;CACC,UAAU;CACV,iBAAiB;CACjB,iBAAiB;AAClB;;AAEA;CACC,gCAAgC;AACjC;;AAEA;CACC,gCAAgC;AACjC;;AAEA;CACC,gCAAgC;AACjC;;AAEA;CACC,gCAAgC;AACjC;;AAEA;CACC,WAAW;CACX,kBAAkB;AACnB;;AAEA;CACC,sBAAsB;CACtB,sBAAsB;CACtB,cAAc;CACd,aAAa;AACd;;AAEA;CACC,sBAAsB;CACtB,kBAAkB;AACnB;;AAEA;CACC,WAAW;CACX,qBAAqB;AACtB;;AAEA;CACC,WAAW;CACX,iBAAiB;CACjB,qGAAqG;CACrG,YAAY;CACZ,gBAAgB;AACjB;;AAEA,oBAAoB;;AAEpB;CACC;EACC,sBAAsB;CACvB;;CAEA;EACC,UAAU;EACV,eAAe;CAChB;;CAEA;EACC,UAAU;EACV,0BAA0B;CAC3B;;CAEA;EACC,mBAAmB;EACnB,sBAAsB;CACvB;;CAEA;EACC,mBAAmB;CACpB;;CAEA;EACC,kBAAkB;CACnB;;CAEA;EACC,cAAc;CACf;;CAEA;EACC,cAAc;EACd,WAAW;CACZ;AACD","sourcesContent":["body {\r\n\theight: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: flex-start;\r\n\tmargin: 0;\r\n\tfont-size: 1.6rem;\r\n\tfont-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n\tcolor: white;\r\n}\r\n\r\nbutton {\r\n\tpadding: 0.2rem;\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tborder-style: none;\r\n\tborder-radius: 5px;\r\n\tbackground-color: inherit;\r\n\tcolor: lightgray;\r\n}\r\n\r\nbutton:hover {\r\n\tbackground-color: #444;\r\n}\r\n\r\ninput {\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tborder-style: none;\r\n\toutline: none;\r\n\tborder-radius: 5px;\r\n\tbackground-color: inherit;\r\n\tcolor: inherit;\r\n}\r\n\r\ntextarea {\r\n\tfont-size: inherit;\r\n\tfont-family: inherit;\r\n\tcolor: inherit;\r\n\tbackground-color: inherit;\r\n\tborder: none;\r\n\tresize: none;\r\n}\r\n\r\ni {\r\n\tcursor: pointer;\r\n}\r\n\r\n.selected {\r\n\tbackground-color: #444;\r\n}\r\n\r\n.selected.project-button {\r\n\tfont-weight: bold;\r\n}\r\n\r\n/* ! Sidebar */\r\n#sidebar {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: 300px;\r\n\theight: 100%;\r\n\toverflow-x: visible;\r\n\toverflow-y: auto;\r\n\tbackground-color: #333;\r\n}\r\n\r\n#expand-collapse-sidebar {\r\n\tvisibility: hidden;\r\n\tposition: fixed;\r\n\tbottom: 0;\r\n\twidth: 3rem;\r\n\theight: 3rem;\r\n\tborder-radius: 0px 5px 0px 0px;\r\n\tbackground-color: #444;\r\n}\r\n\r\n#expand-collapse-sidebar:hover {\r\n\tbackground-color: #555;\r\n}\r\n\r\n#title {\r\n\tfont-size: 2rem;\r\n\ttext-align: center;\r\n\tmargin: 1rem 0 1rem 0;\r\n}\r\n\r\n.project-button {\r\n\twidth: 100%;\r\n\ttext-align: left;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tcolor: white;\r\n}\r\n\r\n.project-button:hover, #new-project-button:hover {\r\n\tbackground-color: #444;\r\n}\r\n\r\n.project-button.active {\r\n\tfont-weight: bold;\r\n}\r\n\r\n#new-project-button {\r\n\tcolor: lightgray;\r\n\ttext-align: center;\r\n\tbackground-color: #111;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n#add-project-popup {\r\n\tpadding: 0.5rem 1rem 0;\r\n\ttext-align: center;\r\n\tdisplay: none;\r\n}\r\n\r\n#add-project-popup-input {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.5rem;\r\n\tbackground-color: #111;\r\n}\r\n\r\n#add-project-popup-input::placeholder {\r\n\tcolor: rgb(255, 65, 65);\r\n}\r\n\r\n#add-project-popup-buttons {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n}\r\n\r\n.add-project-popup-button {\r\n\twidth: 45%;\r\n\tfont-size: 0.9rem;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#add-project-popup-add {\r\n\tbackground-color: rgb(0, 140, 0);\r\n}\r\n\r\n#add-project-popup-add:hover {\r\n\tbackground-color: rgb(0, 100, 0);\r\n}\r\n\r\n#add-project-popup-cancel {\r\n\tbackground-color: rgb(140, 0, 0);\r\n}\r\n\r\n#add-project-popup-cancel:hover {\r\n\tbackground-color: rgb(100, 0, 0);\r\n}\r\n\r\n#sidebar-footer {\r\n\twidth: 100%;\r\n\tbackground-color: #111;\r\n\tfont-size: 1rem;\r\n\tmargin-top: auto;\r\n\ttext-align: center;\r\n}\r\n\r\n/* ! Main */\r\n.task-expand {\r\n\tdisplay: none;\t\r\n}\r\n\r\n#main {\r\n\tflex-grow: 1;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\tbackground-color: #222;\r\n}\r\n\r\n#selected-project {\r\n\tfont-size: 2rem;\r\n\tfont-weight: bold;\r\n\tmargin-left: 1rem;\r\n\tmargin-top: 1rem;\r\n\tpadding: 0;\r\n\twidth: 100%;\r\n\theight: 2.5rem;\r\n\tfont-size: 2rem;\r\n}\r\n\r\n#tasks-container {\r\n\twidth: 50%;\r\n\tmin-width: 15rem;\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.tasks-label {\r\n\tfont-weight: bold;\r\n\tmargin: 0;\r\n\tmargin-top: 1rem;\r\n}\r\n\r\n#task-button {\r\n\tdisplay: flex;\r\n}\r\n\r\n#task-button i {\r\n\tmargin-left: auto;\r\n\twidth: 100%;\r\n\talign-items: center;\r\n}\r\n\r\n#new-task-button {\r\n\tbackground-color: #111;\r\n\tborder-radius: 5px;\r\n\tmargin-top: 0.5rem;\r\n}\r\n\r\n#add-task-popup {\r\n\tpadding: 0.5rem 1rem 0;\r\n\twidth: 16rem;\r\n\ttext-align: center;\r\n\tdisplay: none;\r\n}\r\n\r\n#add-task-popup-input {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.5rem;\r\n\tbackground-color: #111;\r\n}\r\n\r\n#add-task-popup-input::placeholder {\r\n\tcolor: rgb(255, 65, 65);\r\n}\r\n\r\n#add-task-popup-buttons {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n}\r\n\r\n.add-task-popup-button {\r\n\twidth: 45%;\r\n\tfont-size: 0.9rem;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#add-task-popup-add {\r\n\tbackground-color: rgb(0, 140, 0);\r\n}\r\n\r\n#add-task-popup-add:hover {\r\n\tbackground-color: rgb(0, 100, 0);\r\n}\r\n\r\n#add-task-popup-cancel {\r\n\tbackground-color: rgb(140, 0, 0);\r\n}\r\n\r\n#add-task-popup-cancel:hover {\r\n\tbackground-color: rgb(100, 0, 0);\r\n}\r\n\r\n#completed button {\r\n\tcolor: gray;\r\n\tfont-style: italic; \r\n}\r\n\r\n.task-expand {\r\n\tflex-direction: column;\r\n\tbackground-color: #111;\r\n\tmargin: 0.2rem;\r\n\tpadding: 1rem;\r\n}\r\n\r\n.task-expand input {\r\n\tbackground-color: #222;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.task-name-edit {\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.1rem;\r\n}\r\n\r\n.task-description-edit {\r\n\twidth: 100%;\r\n\tfont-size: 1.6rem;\r\n\tfont-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n\tcolor: white;\r\n\tresize: vertical;\r\n}\r\n\r\n/* ! Media Queries */\r\n\r\n@media (max-width: 768px) {\r\n\t#main {\r\n\t\tbackground-color: blue;\r\n\t}\r\n\r\n\t#sidebar {\r\n\t\twidth: 80%;\r\n\t\tposition: fixed;\r\n\t}\r\n\r\n\t#sidebar.close {\r\n\t\tleft: -80%;\r\n\t\ttransition-duration: 0.25s;\r\n\t}\r\n\r\n\t#project-button, #new-project-button, #add-project-popup-input, .add-project-popup-button {\r\n\t\tpadding-top: 0.5rem;\r\n\t\tpadding-bottom: 0.5rem;\r\n\t}\r\n\r\n\t#expand-collapse-sidebar {\r\n\t\tvisibility: visible;\r\n\t}\r\n\t\r\n\t#main, textarea {\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t#selected-project {\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n\t#tasks-container {\r\n\t\tmargin-left: 0;\r\n\t\twidth: 100%;\r\n\t}\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7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dUIsb0JBQW9CLE9BQU8sS0FBSyxPQUFPLHVGQUF1RixVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FB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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLG9FQUFtQjs7QUFFM0M7QUFDQTtBQUNBLEVBQUUsVUFBVSxpRUFBZ0I7QUFDNUI7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQSw2QkFBNkIscURBQUk7QUFDakMscUJBQXFCLDhEQUFhO0FBQ2xDLEVBQUUsZ0VBQWU7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSw0REFBVztBQUNYLG9FQUFtQjtBQUNuQixrQkFBa0IsK0RBQWM7QUFDaEMsQ0FBQzs7QUFFRCxrRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMS42cmVtO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG5cXHRwYWRkaW5nOiAwLjJyZW07XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcblxcdGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRjb2xvcjogbGlnaHRncmF5O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuXFx0Ym9yZGVyLXN0eWxlOiBub25lO1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0cmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pIHtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkLnByb2plY3QtYnV0dG9uIHtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogISBTaWRlYmFyICovXFxyXFxuI3NpZGViYXIge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0d2lkdGg6IDMwMHB4O1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRvdmVyZmxvdy14OiB2aXNpYmxlO1xcclxcblxcdG92ZXJmbG93LXk6IGF1dG87XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuI2V4cGFuZC1jb2xsYXBzZS1zaWRlYmFyIHtcXHJcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuXFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdGJvdHRvbTogMDtcXHJcXG5cXHR3aWR0aDogM3JlbTtcXHJcXG5cXHRoZWlnaHQ6IDNyZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMHB4IDVweCAwcHggMHB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxyXFxufVxcclxcblxcclxcbiNleHBhbmQtY29sbGFwc2Utc2lkZWJhcjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlIHtcXHJcXG5cXHRmb250LXNpemU6IDJyZW07XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdG1hcmdpbjogMXJlbSAwIDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uOmhvdmVyLCAjbmV3LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b24uYWN0aXZlIHtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuXFx0Y29sb3I6IGxpZ2h0Z3JheTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzExMTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1wb3B1cCB7XFxyXFxuXFx0cGFkZGluZzogMC41cmVtIDFyZW0gMDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LXBvcHVwLWlucHV0IHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzExMTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LXBvcHVwLWlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuXFx0Y29sb3I6IHJnYigyNTUsIDY1LCA2NSk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1wb3B1cC1idXR0b25zIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QtcG9wdXAtYnV0dG9uIHtcXHJcXG5cXHR3aWR0aDogNDUlO1xcclxcblxcdGZvbnQtc2l6ZTogMC45cmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtcG9wdXAtYWRkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTQwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LXBvcHVwLWFkZDpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEwMCwgMCk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1wb3B1cC1jYW5jZWwge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxNDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtcG9wdXAtY2FuY2VsOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXItZm9vdGVyIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRtYXJnaW4tdG9wOiBhdXRvO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogISBNYWluICovXFxyXFxuLnRhc2stZXhwYW5kIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcdFxcclxcbn1cXHJcXG5cXHJcXG4jbWFpbiB7XFxyXFxuXFx0ZmxleC1ncm93OiAxO1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxyXFxufVxcclxcblxcclxcbiNzZWxlY3RlZC1wcm9qZWN0IHtcXHJcXG5cXHRmb250LXNpemU6IDJyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuXFx0bWFyZ2luLXRvcDogMXJlbTtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGhlaWdodDogMi41cmVtO1xcclxcblxcdGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzLWNvbnRhaW5lciB7XFxyXFxuXFx0d2lkdGg6IDUwJTtcXHJcXG5cXHRtaW4td2lkdGg6IDE1cmVtO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3MtbGFiZWwge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFzay1idXR0b24ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWJ1dHRvbiBpIHtcXHJcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2stYnV0dG9uIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay1wb3B1cCB7XFxyXFxuXFx0cGFkZGluZzogMC41cmVtIDFyZW0gMDtcXHJcXG5cXHR3aWR0aDogMTZyZW07XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay1wb3B1cC1pbnB1dCB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay1wb3B1cC1pbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcblxcdGNvbG9yOiByZ2IoMjU1LCA2NSwgNjUpO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2stcG9wdXAtYnV0dG9ucyB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrLXBvcHVwLWJ1dHRvbiB7XFxyXFxuXFx0d2lkdGg6IDQ1JTtcXHJcXG5cXHRmb250LXNpemU6IDAuOXJlbTtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLXBvcHVwLWFkZCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE0MCwgMCk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay1wb3B1cC1hZGQ6aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2stcG9wdXAtY2FuY2VsIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLXBvcHVwLWNhbmNlbDpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbiNjb21wbGV0ZWQgYnV0dG9uIHtcXHJcXG5cXHRjb2xvcjogZ3JheTtcXHJcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7IFxcclxcbn1cXHJcXG5cXHJcXG4udGFzay1leHBhbmQge1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzExMTtcXHJcXG5cXHRtYXJnaW46IDAuMnJlbTtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1leHBhbmQgaW5wdXQge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1uYW1lLWVkaXQge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZGVzY3JpcHRpb24tZWRpdCB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjZyZW07XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdHJlc2l6ZTogdmVydGljYWw7XFxyXFxufVxcclxcblxcclxcbi8qICEgTWVkaWEgUXVlcmllcyAqL1xcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcblxcdCNtYWluIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjc2lkZWJhciB7XFxyXFxuXFx0XFx0d2lkdGg6IDgwJTtcXHJcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCNzaWRlYmFyLmNsb3NlIHtcXHJcXG5cXHRcXHRsZWZ0OiAtODAlO1xcclxcblxcdFxcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjcHJvamVjdC1idXR0b24sICNuZXctcHJvamVjdC1idXR0b24sICNhZGQtcHJvamVjdC1wb3B1cC1pbnB1dCwgLmFkZC1wcm9qZWN0LXBvcHVwLWJ1dHRvbiB7XFxyXFxuXFx0XFx0cGFkZGluZy10b3A6IDAuNXJlbTtcXHJcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjZXhwYW5kLWNvbGxhcHNlLXNpZGViYXIge1xcclxcblxcdFxcdHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuXFx0fVxcclxcblxcdFxcclxcblxcdCNtYWluLCB0ZXh0YXJlYSB7XFxyXFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjc2VsZWN0ZWQtcHJvamVjdCB7XFxyXFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDA7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCN0YXNrcy1jb250YWluZXIge1xcclxcblxcdFxcdG1hcmdpbi1sZWZ0OiAwO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxhQUFhO0NBQ2IsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiwyQkFBMkI7Q0FDM0IsU0FBUztDQUNULGlCQUFpQjtDQUNqQixxR0FBcUc7Q0FDckcsWUFBWTtBQUNiOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsY0FBYztBQUNmOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQixjQUFjO0NBQ2QseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixZQUFZ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QUFxRztDQUNyRyxZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCOztBQUVBLG9CQUFvQjs7QUFFcEI7Q0FDQztFQUNDLHNCQUFzQjtDQUN2Qjs7Q0FFQTtFQUNDLFVBQVU7RUFDVixlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsVUFBVTtFQUNWLDBCQUEwQjtDQUMzQjs7Q0FFQTtFQUNDLG1CQUFtQjtFQUNuQixzQkFBc0I7Q0FDdkI7O0NBRUE7RUFDQyxtQkFBbUI7Q0FDcEI7O0NBRUE7RUFDQyxrQkFBa0I7Q0FDbkI7O0NBRUE7RUFDQyxjQUFjO0NBQ2Y7O0NBRUE7RUFDQyxjQUFjO0VBQ2QsV0FBVztDQUNaO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuXFx0aGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEuNnJlbTtcXHJcXG5cXHRmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuXFx0cGFkZGluZzogMC4ycmVtO1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0Y29sb3I6IGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcblxcdGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG5cXHRvdXRsaW5lOiBub25lO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcblxcdGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcblxcdGNvbG9yOiBpbmhlcml0O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaSB7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZC5wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi8qICEgU2lkZWJhciAqL1xcclxcbiNzaWRlYmFyIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdHdpZHRoOiAzMDBweDtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0b3ZlcmZsb3cteDogdmlzaWJsZTtcXHJcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbiNleHBhbmQtY29sbGFwc2Utc2lkZWJhciB7XFxyXFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcclxcblxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRib3R0b206IDA7XFxyXFxuXFx0d2lkdGg6IDNyZW07XFxyXFxuXFx0aGVpZ2h0OiAzcmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDBweCA1cHggMHB4IDBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcclxcbn1cXHJcXG5cXHJcXG4jZXhwYW5kLWNvbGxhcHNlLXNpZGViYXI6aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZSB7XFxyXFxuXFx0Zm9udC1zaXplOiAycmVtO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRtYXJnaW46IDFyZW0gMCAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbjpob3ZlciwgI25ldy1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uLmFjdGl2ZSB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdC1idXR0b24ge1xcclxcblxcdGNvbG9yOiBsaWdodGdyYXk7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtcG9wdXAge1xcclxcblxcdHBhZGRpbmc6IDAuNXJlbSAxcmVtIDA7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1wb3B1cC1pbnB1dCB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1wb3B1cC1pbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcblxcdGNvbG9yOiByZ2IoMjU1LCA2NSwgNjUpO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtcG9wdXAtYnV0dG9ucyB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LXBvcHVwLWJ1dHRvbiB7XFxyXFxuXFx0d2lkdGg6IDQ1JTtcXHJcXG5cXHRmb250LXNpemU6IDAuOXJlbTtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LXBvcHVwLWFkZCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE0MCwgMCk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1wb3B1cC1hZGQ6aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtcG9wdXAtY2FuY2VsIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LXBvcHVwLWNhbmNlbDpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLWZvb3RlciB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzExMTtcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0bWFyZ2luLXRvcDogYXV0bztcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qICEgTWFpbiAqL1xcclxcbi50YXNrLWV4cGFuZCB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHRcXHJcXG59XFxyXFxuXFxyXFxuI21haW4ge1xcclxcblxcdGZsZXgtZ3JvdzogMTtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VsZWN0ZWQtcHJvamVjdCB7XFxyXFxuXFx0Zm9udC1zaXplOiAycmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcblxcdG1hcmdpbi10b3A6IDFyZW07XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IDIuNXJlbTtcXHJcXG5cXHRmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiN0YXNrcy1jb250YWluZXIge1xcclxcblxcdHdpZHRoOiA1MCU7XFxyXFxuXFx0bWluLXdpZHRoOiAxNXJlbTtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWxhYmVsIHtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0bWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stYnV0dG9uIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFzay1idXR0b24gaSB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrLWJ1dHRvbiB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzExMTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0bWFyZ2luLXRvcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2stcG9wdXAge1xcclxcblxcdHBhZGRpbmc6IDAuNXJlbSAxcmVtIDA7XFxyXFxuXFx0d2lkdGg6IDE2cmVtO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2stcG9wdXAtaW5wdXQge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2stcG9wdXAtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG5cXHRjb2xvcjogcmdiKDI1NSwgNjUsIDY1KTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLXBvcHVwLWJ1dHRvbnMge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzay1wb3B1cC1idXR0b24ge1xcclxcblxcdHdpZHRoOiA0NSU7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjlyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay1wb3B1cC1hZGQge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2stcG9wdXAtYWRkOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLXBvcHVwLWNhbmNlbCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay1wb3B1cC1jYW5jZWw6aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tcGxldGVkIGJ1dHRvbiB7XFxyXFxuXFx0Y29sb3I6IGdyYXk7XFxyXFxuXFx0Zm9udC1zdHlsZTogaXRhbGljOyBcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZXhwYW5kIHtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxyXFxuXFx0bWFyZ2luOiAwLjJyZW07XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZXhwYW5kIGlucHV0IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbmFtZS1lZGl0IHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRlc2NyaXB0aW9uLWVkaXQge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGZvbnQtc2l6ZTogMS42cmVtO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRyZXNpemU6IHZlcnRpY2FsO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAhIE1lZGlhIFF1ZXJpZXMgKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHQjbWFpbiB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I3NpZGViYXIge1xcclxcblxcdFxcdHdpZHRoOiA4MCU7XFxyXFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjc2lkZWJhci5jbG9zZSB7XFxyXFxuXFx0XFx0bGVmdDogLTgwJTtcXHJcXG5cXHRcXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I3Byb2plY3QtYnV0dG9uLCAjbmV3LXByb2plY3QtYnV0dG9uLCAjYWRkLXByb2plY3QtcG9wdXAtaW5wdXQsIC5hZGQtcHJvamVjdC1wb3B1cC1idXR0b24ge1xcclxcblxcdFxcdHBhZGRpbmctdG9wOiAwLjVyZW07XFxyXFxuXFx0XFx0cGFkZGluZy1ib3R0b206IDAuNXJlbTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I2V4cGFuZC1jb2xsYXBzZS1zaWRlYmFyIHtcXHJcXG5cXHRcXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcblxcdH1cXHJcXG5cXHRcXHJcXG5cXHQjbWFpbiwgdGV4dGFyZWEge1xcclxcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I3NlbGVjdGVkLXByb2plY3Qge1xcclxcblxcdFxcdG1hcmdpbi1sZWZ0OiAwO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjdGFza3MtY29udGFpbmVyIHtcXHJcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHR9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuXHRjb25zdHJ1Y3RvcihuYW1lKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy50YXNrcyA9IFtdO1xyXG5cdH1cclxufSIsIi8vIFRPRE86IExvY2FsIFN0b3JhZ2Ugc2F2aW5nIGhlcmVcclxubGV0IHByb2plY3RzID0gW107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcclxuXHRzdGF0aWMgc2F2ZVByb2plY3RzKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJzYXZlXCIpO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldFByb2plY3RzKCkge1xyXG5cdFx0Ly9Db252ZXJ0IGRhdGEgZnJvbSBsb2NhbCBzdG9yYWdlXHJcblx0XHRjb25zb2xlLmxvZyhcImdldFwiKTtcclxuXHRcdHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcclxuXHJcblx0XHRpZiAocHJvamVjdHMgPT09IG51bGwpIHtcclxuXHRcdFx0cHJvamVjdHMgPSBbXTtcclxuXHRcdH1cclxuXHJcblx0XHQvL3RvZG9MaXN0LnNldFByb2plY3RzKHRvZG9MaXN0LmdldFByb2plY3RzKCkubWFwKChwcm9qZWN0KSA9PiBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3QpKSwpO1xyXG5cclxuXHRcdC8vdG9kb0xpc3QuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiBwcm9qZWN0LnNldFRhc2tzKHByb2plY3QuZ2V0VGFza3MoKS5tYXAoKHRhc2spID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzaykpLCksKTtcclxuXHJcblx0XHRyZXR1cm4gcHJvamVjdHM7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYWRkUHJvamVjdChwcm9qZWN0KSB7XHJcblx0XHRwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG5cdFx0U3RvcmFnZS5zYXZlUHJvamVjdHMoKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyB1cGRhdGVQcm9qZWN0KHByb2plY3ROYW1lLCBuZXdQcm9qZWN0VmVyc2lvbikge1xyXG5cclxuXHRcdHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKFN0b3JhZ2UuZmluZFByb2plY3QocHJvamVjdE5hbWUpKSwgMSwgbmV3UHJvamVjdFZlcnNpb24pO1xyXG5cclxuXHRcdFN0b3JhZ2Uuc2F2ZVByb2plY3RzKCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XHJcblx0XHRwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSwgMSk7XHJcblx0XHRTdG9yYWdlLnNhdmVQcm9qZWN0cygpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGZpbmRQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcblx0XHRyZXR1cm4gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWUpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGFkZFRhc2socHJvamVjdCwgdGFzaykge1xyXG5cdFx0cHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xyXG5cdFx0U3RvcmFnZS5zYXZlUHJvamVjdHMoKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyB1cGRhdGVUYXNrKHByb2plY3QsIHRhc2tOYW1lLCBuZXdUYXNrVmVyc2lvbikge1xyXG5cdFx0cHJvamVjdC50YXNrcy5zcGxpY2UocHJvamVjdC50YXNrcy5pbmRleE9mKFN0b3JhZ2UuZmluZFRhc2socHJvamVjdCwgdGFza05hbWUpKSwgMSwgbmV3VGFza1ZlcnNpb24pO1xyXG5cdFx0U3RvcmFnZS51cGRhdGVQcm9qZWN0KHByb2plY3QubmFtZSwgcHJvamVjdCk7XHJcblx0XHRTdG9yYWdlLnNhdmVQcm9qZWN0cygpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGRlbGV0ZVRhc2socHJvamVjdCwgdGFzaykge1xyXG5cdFx0cHJvamVjdC50YXNrcy5zcGxpY2UocHJvamVjdC50YXNrcy5pbmRleE9mKHRhc2spLCAxKTtcclxuXHRcdFN0b3JhZ2Uuc2F2ZVByb2plY3RzKCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZmluZFRhc2socHJvamVjdCwgdGFza05hbWUpIHtcclxuXHRcdHJldHVybiBwcm9qZWN0LnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLm5hbWUgPT09IHRhc2tOYW1lKTtcclxuXHR9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcclxuXHRjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiA9IFwiXCIpIHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcblx0XHR0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG5cdH1cclxufSIsImltcG9ydCBTdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcclxuXHQvLyEgTG9hZCBjb250ZW50XHJcblx0c3RhdGljIGxvYWRQYWdlKCkge1xyXG5cdFx0VUkubG9hZFByb2plY3RzKCk7XHJcblx0XHRVSS5sb2FkVGFza3MoKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBsb2FkUHJvamVjdHMoKSB7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG5cdFx0U3RvcmFnZS5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRcdFx0VUkuY3JlYXRlUHJvamVjdChwcm9qZWN0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGxvYWRUYXNrcyhwcm9qZWN0KSB7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBsZXRlZFwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1wb3B1cFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LXBvcHVwXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcblx0XHRpZiAodHlwZW9mIHByb2plY3QgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RlZC1wcm9qZWN0XCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLWNvbnRhaW5lclwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0ZWQtcHJvamVjdFwiKS52YWx1ZSA9IHByb2plY3QubmFtZTtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrc1wiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbXBsZXRlZFwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdGVkLXByb2plY3RcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLWNvbnRhaW5lclwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcblxyXG5cdFx0XHRsZXQgdGFza0RpdnMgPSBbXTtcclxuXHRcdFx0cHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHRhc2tEaXYgPSBVSS5jcmVhdGVUYXNrKHRhc2spO1xyXG5cdFx0XHRcdHRhc2tEaXZzLnB1c2godGFza0Rpdik7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gdGFza0RpdnM7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0Ly8hIENyZWF0ZSBjb250ZW50XHJcblx0c3RhdGljIGNyZWF0ZVByb2plY3QocHJvamVjdCkge1xyXG5cdFx0Y29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XHJcblx0XHRjb25zdCBuZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cdFx0bmV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ1dHRvblwiKTtcclxuXHRcdG5ld0J1dHRvbi5pbm5lckhUTUwgPSBgXHJcblx0XHRcdDxzcGFuPiR7cHJvamVjdC5uYW1lfTwvc3Bhbj5cclxuXHRcdFx0PGk+JnRpbWVzOzwvaT5cclxuXHRcdGA7XHJcblx0XHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0J1dHRvbik7XHJcblx0XHRcclxuXHRcdHJldHVybiBuZXdCdXR0b247XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY3JlYXRlVGFzayh0YXNrKSB7XHJcblx0XHRsZXQgdGFza0NvbnRhaW5lcjtcclxuXHRcdGlmICh0YXNrLmNvbXBsZXRlZCA9PT0gZmFsc2UpIHtcclxuXHRcdFx0dGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3NcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wbGV0ZWRcIik7XHJcblx0XHR9XHJcblx0XHRjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XHJcblx0XHR0YXNrRGl2LmlubmVySFRNTCA9IGBcclxuXHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwidGFzay1jaGVja2JveFwiPlxyXG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwidGFzay1idXR0b25cIj5cclxuXHRcdFx0XHQ8c3Bhbj4ke3Rhc2submFtZX08L3NwYW4+XHJcblx0XHRcdFx0PGk+JnRpbWVzOzwvaT5cclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ0YXNrLWV4cGFuZFwiPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwidGFzay1uYW1lLWVkaXRcIiBuYW1lPVwiTmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIHZhbHVlPVwiJHt0YXNrLm5hbWV9XCI+XHJcblx0XHRcdFx0PHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ0YXNrLWRlc2NyaXB0aW9uLWVkaXRcIiBuYW1lPVwiRGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCI+JHt0YXNrLmRlc2NyaXB0aW9ufTwvdGV4dGFyZWE+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0YDtcclxuXHRcdGlmICh0YXNrLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG5cdFx0XHR0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rpdik7XHJcblx0XHRyZXR1cm4gdGFza0RpdjtcclxuXHR9XHJcblxyXG5cdC8vISBFeHBhbmQgb3IgY29sbGFwc2UgY29udGVudFxyXG5cdHN0YXRpYyBleHBhbmRDb2xsYXBzZVNpZGViYXIoKSB7XHJcblx0XHRjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyXCIpO1xyXG5cdFx0Y29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNleHBhbmQtY29sbGFwc2Utc2lkZWJhclwiKTtcclxuXHJcblx0XHRpZiAoYnV0dG9uLnRleHRDb250ZW50ID09PSBcIuKXgFwiKSB7XHJcblx0XHRcdHNpZGViYXIuY2xhc3NMaXN0LmFkZChcImNsb3NlXCIpO1xyXG5cdFx0XHRidXR0b24udGV4dENvbnRlbnQgPSBcIuKWtlwiO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwiY2xvc2VcIik7XHJcblx0XHRcdGJ1dHRvbi50ZXh0Q29udGVudCA9IFwi4peAXCI7XHJcblx0XHR9XHJcblx0fVxyXG5cdHN0YXRpYyBleHBhbmRDb2xsYXBzZVRhc2sodGFza0J1dHRvbiwgdGFzaykge1xyXG5cdFx0Y29uc3QgdGFza0V4cGFuZCA9IHRhc2tCdXR0b24ucXVlcnlTZWxlY3RvcihcIi50YXNrLWV4cGFuZFwiKTtcclxuXHJcblx0XHR0YXNrRXhwYW5kLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1uYW1lLWVkaXRcIikudmFsdWUgPSB0YXNrLm5hbWU7XHJcblx0XHR0YXNrRXhwYW5kLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXNjcmlwdGlvbi1lZGl0XCIpLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcclxuXHRcdHRhc2tFeHBhbmQuc3R5bGUuZGlzcGxheSA9ICh0YXNrRXhwYW5kLnN0eWxlLmRpc3BsYXkgPT09IFwiZmxleFwiID8gXCJub25lXCIgOiBcImZsZXhcIik7XHJcblx0fVxyXG5cclxuXHJcblx0Ly8hIEZpbmQgY29udGVudFxyXG5cdHN0YXRpYyBmaW5kUHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG5cdFx0bGV0IHByb2plY3RGb3VuZDtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1idXR0b25cIikuZm9yRWFjaCgocHJvamVjdEJ1dHRvbikgPT4ge1xyXG5cdFx0XHRpZiAocHJvamVjdEJ1dHRvbi5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS50ZXh0Q29udGVudCA9PT0gcHJvamVjdE5hbWUpIHtcclxuXHRcdFx0XHRwcm9qZWN0Rm91bmQgPSBwcm9qZWN0QnV0dG9uO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBwcm9qZWN0Rm91bmQ7XHJcblx0fVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi9tb2R1bGVzL3Rhc2suanNcIjtcclxuaW1wb3J0IFVJIGZyb20gXCIuL21vZHVsZXMvdWkuanNcIjtcclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vbW9kdWxlcy9zdG9yYWdlLmpzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xyXG5cclxuLy8gISBQcm9qZWN0XHJcbmxldCBzZWxlY3RlZFByb2plY3Q7XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0U2VsZWN0KGJ1dHRvbikge1xyXG5cdGNvbnN0IHByb2plY3QgPSBTdG9yYWdlLmZpbmRQcm9qZWN0KGJ1dHRvbi5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS50ZXh0Q29udGVudCk7XHJcblxyXG5cdGlmIChzZWxlY3RlZFByb2plY3QgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0c2VsZWN0ZWRQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcclxuXHR9XHJcblx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuXHRzZWxlY3RlZFByb2plY3QgPSBidXR0b247XHJcblxyXG5cdGNvbnN0IHRhc2tzID0gVUkubG9hZFRhc2tzKHByb2plY3QpO1xyXG5cdHRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcblx0XHRhZGRUYXNrRXZlbnRzKHRhc2spO1xyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0RGVsZXRlKGV2ZW50LCBidXR0b24pIHtcclxuXHRjb25zdCBwcm9qZWN0ID0gU3RvcmFnZS5maW5kUHJvamVjdChidXR0b24ucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQpO1xyXG5cclxuXHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRTdG9yYWdlLmRlbGV0ZVByb2plY3QocHJvamVjdCk7XHJcblx0VUkuZmluZFByb2plY3QocHJvamVjdC5uYW1lKS5yZW1vdmUoKTtcclxuXHJcblx0Y29uc3QgbmV4dFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtYnV0dG9uXCIpO1xyXG5cdGlmIChuZXh0UHJvamVjdCAhPT0gbnVsbCkge1xyXG5cdFx0bmV4dFByb2plY3QuY2xpY2soKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0VUkubG9hZFRhc2tzKCk7XHJcblx0fVxyXG59XHJcblxyXG4vL0FkZCBwcm9qZWN0IGV2ZW50cyBmb3IgbmV3IGJ1dHRvbnMgYmVpbmcgYWRkZWRcclxuZnVuY3Rpb24gYWRkUHJvamVjdEV2ZW50cyhidXR0b24pIHtcclxuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHByb2plY3RTZWxlY3QoYnV0dG9uKSk7XHJcblx0YnV0dG9uLnF1ZXJ5U2VsZWN0b3IoXCJpXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHByb2plY3REZWxldGUoZXZlbnQsIGJ1dHRvbikpO1xyXG59XHJcblxyXG5cclxuLy8gISBBZGRpbmcgbmV3IHByb2plY3RzXHJcbmNvbnN0IGFkZFByb2plY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtcG9wdXBcIik7XHJcbmNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1wb3B1cC1pbnB1dFwiKTtcclxuXHJcbmZ1bmN0aW9uIG5ld1Byb2plY3RDbGljaygpIHtcclxuXHRuZXdQcm9qZWN0TmFtZS52YWx1ZSA9IFwiXCI7XHJcblx0bmV3UHJvamVjdE5hbWUucGxhY2Vob2xkZXIgPSBcIlwiO1xyXG5cdGFkZFByb2plY3RQb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdG5ld1Byb2plY3ROYW1lLmZvY3VzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld1Byb2plY3RDYW5jZWwoKSB7XHJcblx0YWRkUHJvamVjdFBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV3UHJvamVjdEFkZCgpIHtcclxuXHRpZiAobmV3UHJvamVjdE5hbWUudmFsdWUgPT09IFwiXCIpIHtcclxuXHRcdG5ld1Byb2plY3ROYW1lLnBsYWNlaG9sZGVyID0gXCJOYW1lIGNhbid0IGJlIGJsYW5rXCI7XHJcblx0fSBlbHNlIGlmIChTdG9yYWdlLmZpbmRQcm9qZWN0KG5ld1Byb2plY3ROYW1lLnZhbHVlKSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRuZXdQcm9qZWN0TmFtZS52YWx1ZSA9IFwiXCI7XHJcblx0XHRuZXdQcm9qZWN0TmFtZS5wbGFjZWhvbGRlciA9IFwiTmFtZSBpcyBhbHJlYWR5IHVzZWRcIjtcclxuXHR9IGVsc2Uge1xyXG5cdFx0bmV3UHJvamVjdENhbmNlbCgpO1xyXG5cclxuXHRcdGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuZXdQcm9qZWN0TmFtZS52YWx1ZSk7XHJcblx0XHRjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gVUkuY3JlYXRlUHJvamVjdChuZXdQcm9qZWN0KTtcclxuXHRcdFN0b3JhZ2UuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcclxuXHJcblx0XHRhZGRQcm9qZWN0RXZlbnRzKG5ld1Byb2plY3RCdXR0b24pO1xyXG5cdH1cclxufVxyXG5cclxuLy9BZGQgcHJvamVjdCBpZiB0aGUgRW50ZXIga2V5IGlzIHByZXNzZWQgaW4gdGhlIGlucHV0IGJveFxyXG5mdW5jdGlvbiBuZXdQcm9qZWN0SW5wdXRLZXl1cChldmVudCkge1xyXG5cdGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1wb3B1cC1hZGRcIikuY2xpY2soKTtcclxuXHR9XHJcbn1cclxuXHJcbi8vQ2xlYXIgdGhlIHBsYWNlaG9sZGVyIChjYW4ndCBiZSBibGFuayBtZXNzYWdlKSBvbiBpbnB1dCBmb2N1c1xyXG5mdW5jdGlvbiBuZXdQcm9qZWN0SW5wdXRGb2N1cygpIHtcclxuXHRuZXdQcm9qZWN0TmFtZS5wbGFjZWhvbGRlciA9IFwiXCI7XHJcbn1cclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3QtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdQcm9qZWN0Q2xpY2spO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LXBvcHVwLWNhbmNlbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3UHJvamVjdENhbmNlbCk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtcG9wdXAtYWRkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdQcm9qZWN0QWRkKTtcclxubmV3UHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIG5ld1Byb2plY3RJbnB1dEZvY3VzKTtcclxubmV3UHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIG5ld1Byb2plY3RJbnB1dEtleXVwKTtcclxuXHJcbi8vISBTaWRlYmFyIE9wZW4vQ2xvc2UgQnV0dG9uXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V4cGFuZC1jb2xsYXBzZS1zaWRlYmFyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS5leHBhbmRDb2xsYXBzZVNpZGViYXIpO1xyXG5cclxuXHJcbi8vICEgUmVuYW1pbmcgcHJvamVjdFxyXG5jb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0ZWQtcHJvamVjdFwiKTtcclxuXHJcbmZ1bmN0aW9uIHByb2plY3ROYW1lSW5wdXQoKSB7XHJcblx0aWYgKHByb2plY3ROYW1lLnZhbHVlICE9PSBzZWxlY3RlZFByb2plY3QubmFtZSkge1xyXG5cdFx0cHJvamVjdE5hbWUuc3R5bGUuY29sb3IgPSBcImdyYXlcIjtcclxuXHRcdHByb2plY3ROYW1lLnN0eWxlLmZvbnRTdHlsZSA9IFwiaXRhbGljXCI7XHJcblx0fSBlbHNlIHtcclxuXHRcdHByb2plY3ROYW1lLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG5cdFx0cHJvamVjdE5hbWUuc3R5bGUuZm9udFN0eWxlID0gXCJub3JtYWxcIjtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2plY3ROYW1lRGVmb2N1cygpIHtcclxuXHRjb25zdCBjdXJyZW50UHJvamVjdCA9IFN0b3JhZ2UuZmluZFByb2plY3Qoc2VsZWN0ZWRQcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnRleHRDb250ZW50KTtcclxuXHJcblx0aWYgKHByb2plY3ROYW1lLnZhbHVlICE9PSBcIlwiKSB7XHJcblx0XHRjb25zdCBuZXdQcm9qZWN0VmVyc2lvbiA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlLCBjdXJyZW50UHJvamVjdC50YXNrcyk7XHJcblx0XHRTdG9yYWdlLnVwZGF0ZVByb2plY3QoY3VycmVudFByb2plY3QubmFtZSwgbmV3UHJvamVjdFZlcnNpb24pO1xyXG5cdFx0c2VsZWN0ZWRQcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWUudmFsdWU7XHJcblx0fSBlbHNlIHtcclxuXHRcdHByb2plY3ROYW1lLnZhbHVlID0gY3VycmVudFByb2plY3Q7XHJcblx0fVxyXG5cdHByb2plY3ROYW1lLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG5cdHByb2plY3ROYW1lLnN0eWxlLmZvbnRTdHlsZSA9IFwibm9ybWFsXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2plY3ROYW1lS2V5ZG93bihldmVudCkge1xyXG5cdGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy9QcmV2ZW50IGNyZWF0aW5nIGEgbmV3IGxpbmVcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2plY3ROYW1lS2V5dXAoZXZlbnQpIHtcclxuXHRpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuXHRcdHByb2plY3ROYW1lLmJsdXIoKTtcclxuXHR9XHJcbn1cclxuXHJcbnByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBwcm9qZWN0TmFtZUlucHV0KTtcclxucHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgcHJvamVjdE5hbWVEZWZvY3VzKTtcclxucHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgcHJvamVjdE5hbWVLZXlkb3duKTtcclxucHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHByb2plY3ROYW1lS2V5dXApO1xyXG5cclxuXHJcbi8vICEgVGFza3NcclxuZnVuY3Rpb24gdGFza0NvbXBsZXRlKGV2ZW50LCB0YXNrRGl2LCBpbnB1dCkge1xyXG5cdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gU3RvcmFnZS5maW5kUHJvamVjdChzZWxlY3RlZFByb2plY3QucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQpO1xyXG5cdGNvbnN0IGN1cnJlbnRUYXNrID0gU3RvcmFnZS5maW5kVGFzayhjdXJyZW50UHJvamVjdCwgdGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS50ZXh0Q29udGVudCk7XHJcblx0bGV0IG5ld1Rhc2tWZXJzaW9uID0gbmV3IFRhc2soY3VycmVudFRhc2submFtZSwgY3VycmVudFRhc2suZGVzY3JpcHRpb24pO1xyXG5cclxuXHRpZiAoaW5wdXQuY2hlY2tlZCA9PSBmYWxzZSkge1xyXG5cdFx0bmV3VGFza1ZlcnNpb24uY29tcGxldGVkID0gZmFsc2U7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzXCIpLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRuZXdUYXNrVmVyc2lvbi5jb21wbGV0ZWQgPSB0cnVlO1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wbGV0ZWRcIikuYXBwZW5kQ2hpbGQodGFza0Rpdik7XHJcblx0fVxyXG5cdFN0b3JhZ2UudXBkYXRlVGFzayhjdXJyZW50UHJvamVjdCwgY3VycmVudFRhc2submFtZSwgbmV3VGFza1ZlcnNpb24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0YXNrQ2xpY2sodGFza0Rpdikge1xyXG5cclxuXHRjb25zdCBjdXJyZW50UHJvamVjdCA9IFN0b3JhZ2UuZmluZFByb2plY3Qoc2VsZWN0ZWRQcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnRleHRDb250ZW50KTtcclxuXHRjb25zdCBjdXJyZW50VGFzayA9IFN0b3JhZ2UuZmluZFRhc2soY3VycmVudFByb2plY3QsIHRhc2tEaXYucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQpO1xyXG5cclxuXHRpZiAodGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZXhwYW5kXCIpLnN0eWxlLmRpc3BsYXkgIT09IFwibm9uZVwiKSB7XHJcblx0XHRsZXQgbmV3VGFza1ZlcnNpb24gPSBuZXcgVGFzayhjdXJyZW50VGFzay5uYW1lLCBjdXJyZW50VGFzay5kZXNjcmlwdGlvbik7XHJcblxyXG5cdFx0Y29uc3Qgb2xkVGFza05hbWUgPSBjdXJyZW50VGFzay5uYW1lO1xyXG5cdFx0Y29uc3QgbmFtZUlucHV0ID0gdGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbmFtZS1lZGl0XCIpO1xyXG5cdFx0Y29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IHRhc2tEaXYucXVlcnlTZWxlY3RvcihcIi50YXNrLWRlc2NyaXB0aW9uLWVkaXRcIik7XHJcblx0XHRcclxuXHRcdGlmIChuYW1lSW5wdXQudmFsdWUgIT09IFwiXCIpIHtcclxuXHRcdFx0bmV3VGFza1ZlcnNpb24ubmFtZSA9IG5hbWVJbnB1dC52YWx1ZTtcclxuXHRcdFx0dGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS50ZXh0Q29udGVudCA9IG5ld1Rhc2tWZXJzaW9uLm5hbWU7XHJcblx0XHR9XHJcblx0XHRuZXdUYXNrVmVyc2lvbi5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcblx0XHRuZXdUYXNrVmVyc2lvbi5jb21wbGV0ZWQgPSB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jaGVja2JveFwiKS5jaGVja2VkO1xyXG5cdFx0U3RvcmFnZS51cGRhdGVUYXNrKGN1cnJlbnRQcm9qZWN0LCBvbGRUYXNrTmFtZSwgbmV3VGFza1ZlcnNpb24pO1xyXG5cdH1cclxuXHJcblx0VUkuZXhwYW5kQ29sbGFwc2VUYXNrKHRhc2tEaXYsIGN1cnJlbnRUYXNrKTtcclxufVxyXG5cclxuLy9FZGl0IHRhc2sgaWYgdGhlIEVudGVyIGtleSBpcyBwcmVzc2VkIGluIGFuIGlucHV0IGJveFxyXG5mdW5jdGlvbiB0YXNrSW5wdXRLZXl1cChldmVudCwgdGFza0Rpdikge1xyXG5cdGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG5cdFx0dGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpLmNsaWNrKCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB0YXNrRGVsZXRlKGV2ZW50LCB0YXNrRGl2KSB7XHJcblx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0Y29uc3QgY3VycmVudFByb2plY3QgPSBTdG9yYWdlLmZpbmRQcm9qZWN0KHNlbGVjdGVkUHJvamVjdC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS50ZXh0Q29udGVudCk7XHJcblx0Y29uc3QgY3VycmVudFRhc2sgPSBTdG9yYWdlLmZpbmRUYXNrKGN1cnJlbnRQcm9qZWN0LCB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnRleHRDb250ZW50KTtcclxuXHJcblx0U3RvcmFnZS5kZWxldGVUYXNrKGN1cnJlbnRQcm9qZWN0LCBjdXJyZW50VGFzayk7XHJcblx0dGFza0Rpdi5yZW1vdmUoKTtcclxufVxyXG5cclxuLy9BZGQgdGFzayBldmVudHMgZm9yIG5ldyBkaXZzIGJlaW5nIGFkZGVkXHJcbmZ1bmN0aW9uIGFkZFRhc2tFdmVudHModGFza0Rpdikge1xyXG5cdHRhc2tEaXYucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHRhc2tDb21wbGV0ZShldmVudCwgdGFza0RpdiwgdGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikpKTtcclxuXHR0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRhc2tDbGljayh0YXNrRGl2KSk7XHJcblx0dGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbmFtZS1lZGl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHRhc2tJbnB1dEtleXVwKGV2ZW50LCB0YXNrRGl2KSk7XHJcblx0dGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiaVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB0YXNrRGVsZXRlKGV2ZW50LCB0YXNrRGl2KSk7XHJcbn1cclxuXHJcblxyXG4vLyAhIEFkZGluZyBuZXcgdGFza3NcclxuY29uc3QgYWRkVGFza1BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1wb3B1cFwiKTtcclxuY29uc3QgbmV3VGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLXBvcHVwLWlucHV0XCIpO1xyXG5cclxuZnVuY3Rpb24gbmV3VGFza0NsaWNrKCkge1xyXG5cdG5ld1Rhc2tOYW1lLnZhbHVlID0gXCJcIjtcclxuXHRuZXdUYXNrTmFtZS5wbGFjZWhvbGRlciA9IFwiXCI7XHJcblx0YWRkVGFza1BvcHVwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0bmV3VGFza05hbWUuZm9jdXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV3VGFza0NhbmNlbCgpIHtcclxuXHRhZGRUYXNrUG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdUYXNrQWRkKCkge1xyXG5cdGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gU3RvcmFnZS5maW5kUHJvamVjdChzZWxlY3RlZFByb2plY3QucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQpO1xyXG5cclxuXHRpZiAobmV3VGFza05hbWUudmFsdWUgPT09IFwiXCIpIHtcclxuXHRcdG5ld1Rhc2tOYW1lLnBsYWNlaG9sZGVyID0gXCJOYW1lIGNhbid0IGJlIGJsYW5rXCI7XHJcblx0fSBlbHNlIGlmIChTdG9yYWdlLmZpbmRUYXNrKGN1cnJlbnRQcm9qZWN0LCBuZXdUYXNrTmFtZS52YWx1ZSkgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0bmV3VGFza05hbWUudmFsdWUgPSBcIlwiO1xyXG5cdFx0bmV3VGFza05hbWUucGxhY2Vob2xkZXIgPSBcIk5hbWUgaXMgYWxyZWFkeSB1c2VkXCI7XHJcblx0fSBlbHNlIHtcclxuXHRcdG5ld1Rhc2tDYW5jZWwoKTtcclxuXHJcblx0XHRjb25zdCBuZXdUYXNrVmVyc2lvbiA9IG5ldyBUYXNrKG5ld1Rhc2tOYW1lLnZhbHVlKTtcclxuXHRcdGNvbnN0IG5ld1Rhc2tEaXYgPSBVSS5jcmVhdGVUYXNrKG5ld1Rhc2tWZXJzaW9uKTtcclxuXHRcdFN0b3JhZ2UuYWRkVGFzayhjdXJyZW50UHJvamVjdCwgbmV3VGFza1ZlcnNpb24pO1xyXG5cclxuXHRcdGFkZFRhc2tFdmVudHMobmV3VGFza0Rpdik7XHJcblx0fVxyXG59XHJcblxyXG4vL0NsZWFyIHRoZSBwbGFjZWhvbGRlciAoY2FuJ3QgYmUgYmxhbmsgbWVzc2FnZSkgb24gaW5wdXQgZm9jdXNcclxuZnVuY3Rpb24gbmV3VGFza0lucHV0Rm9jdXMoKSB7XHJcblx0bmV3VGFza05hbWUucGxhY2Vob2xkZXIgPSBcIlwiO1xyXG59XHJcblxyXG4vL0FkZCB0YXNrIGlmIHRoZSBFbnRlciBrZXkgaXMgcHJlc3NlZCBpbiB0aGUgaW5wdXQgYm94XHJcbmZ1bmN0aW9uIG5ld1Rhc2tJbnB1dEtleXVwKGV2ZW50KSB7XHJcblx0aWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLXBvcHVwLWFkZFwiKS5jbGljaygpO1xyXG5cdH1cclxufVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdGFzay1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Rhc2tDbGljayk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stcG9wdXAtY2FuY2VsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdUYXNrQ2FuY2VsKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1wb3B1cC1hZGRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Rhc2tBZGQpO1xyXG5uZXdUYXNrTmFtZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgbmV3VGFza0lucHV0Rm9jdXMpO1xyXG5uZXdUYXNrTmFtZS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgbmV3VGFza0lucHV0S2V5dXApO1xyXG5cclxuXHJcbi8vISBJbml0aWFsaXplIHBhZ2VcclxuVUkubG9hZFBhZ2UoKTtcclxuU3RvcmFnZS5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRhZGRQcm9qZWN0RXZlbnRzKFVJLmZpbmRQcm9qZWN0KHByb2plY3QubmFtZSkpO1xyXG59KTtcclxuXHJcbi8vdG9kbzogZmlndXJlIG91dCB3aHkgdXBkYXRpbmcgdGFza3MgZG9lc24ndCBzYXZlIl0sInNvdXJjZVJvb3QiOiIifQ==