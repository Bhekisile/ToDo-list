/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/module/index.js":
/*!*****************************!*\
  !*** ./src/module/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTaskLists": () => (/* binding */ createTaskLists),
/* harmony export */   "renderTaskList": () => (/* binding */ renderTaskList),
/* harmony export */   "updateTaskIndexes": () => (/* binding */ updateTaskIndexes)
/* harmony export */ });
var taskList = document.getElementById('task-list');
var deleteTask;
var editTaskDescription;
var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
var saveTasks = function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
var markAsCompleted = function markAsCompleted(task) {
  task.completed = true;
};
var markAsIncomplete = function markAsIncomplete(task) {
  task.completed = false;
};

// Create checkbox element
var createCheckbox = function createCheckbox(completed) {
  var checkboxElement = document.createElement('input');
  checkboxElement.type = 'checkbox';
  checkboxElement.checked = completed;
  return checkboxElement;
};

// Create description element
var createDescription = function createDescription(description) {
  var descriptionElement = document.createElement('span');
  descriptionElement.textContent = description;
  descriptionElement.addEventListener('click', function (event) {
    event.preventDefault();
    editTaskDescription();
  });
  return descriptionElement;
};

// Create icon element
var createIcon = function createIcon() {
  var iconElement = document.createElement('i');
  iconElement.classList.add('uil', 'uil-ellipsis-v');
  iconElement.addEventListener('click', function (event) {
    event.preventDefault();
    editTaskDescription();
  });
  return iconElement;
};

// Create delete button element
var createDeleteButton = function createDeleteButton(index) {
  var deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="uil uil-trash"></i>';
  deleteButton.classList.add('delete-button');
  deleteButton.style.display = 'none';
  deleteButton.addEventListener('click', function (event) {
    event.preventDefault();
    deleteTask(index);
    saveTasks();
  });
  return deleteButton;
};

// Create task list item element
var createTaskListItem = function createTaskListItem(task) {
  var listItemElement = document.createElement('li');
  var checkboxElement = createCheckbox(task.completed);
  var descriptionElement = createDescription(task.description);
  var iconElement = createIcon();
  var deleteButton = createDeleteButton(task.index);
  checkboxElement.addEventListener('change', function (event) {
    event.preventDefault();
    if (checkboxElement.checked) {
      markAsCompleted(task);
    } else {
      markAsIncomplete(task);
    }
    saveTasks();

    // Check if the checkbox is now checked
    if (checkboxElement.checked) {
      deleteButton.style.display = 'block';
      iconElement.style.display = 'none';
      listItemElement.style.display = 'flex';
      listItemElement.style.justifyContent = 'flex-start';
      deleteButton.style.marginLeft = 'auto';
    } else {
      deleteButton.style.display = 'none';
      iconElement.style.display = 'block';
      descriptionElement.style.color = '#999';
    }
  });
  listItemElement.appendChild(checkboxElement);
  listItemElement.appendChild(descriptionElement);
  listItemElement.appendChild(iconElement);
  listItemElement.appendChild(deleteButton);
  return listItemElement;
};

// Main function
var createTaskLists = function createTaskLists(task) {
  return createTaskListItem(task);
};
var renderTaskList = function renderTaskList() {
  taskList.innerHTML = '';
  tasks.sort(function (task1, task2) {
    return task1.index - task2.index;
  }).forEach(function (task) {
    var listItemElement = createTaskLists(task);
    taskList.appendChild(listItemElement);
  });
};
var updateTaskIndexes = function updateTaskIndexes() {
  tasks.forEach(function (task, index) {
    task.index = index;
  });
};
deleteTask = function deleteTask(index) {
  tasks = tasks.filter(function (task) {
    return task.index !== index;
  });
  updateTaskIndexes();
  saveTasks();
  renderTaskList();
};
editTaskDescription = function editTaskDescription(task) {
  console.log('task', task);
  var inputElement = document.createElement('input');
  inputElement.type = 'text';
  inputElement.value = task.description;
  inputElement.classList.add('edit-input');
  inputElement.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      task.description = inputElement.value.trim();
      saveTasks();
      renderTaskList();
    } else if (event.key === 'Escape') {
      renderTaskList();
    }
  });
  var listItemElement = taskList.children[task.index];
  listItemElement.replaceChild(inputElement, listItemElement.children[1]);
  inputElement.select();
};


/***/ }),

/***/ "./src/module/script.js":
/*!******************************!*\
  !*** ./src/module/script.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/module/index.js");

var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
var saveTasks = function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Clearing completed
var clearCompletedTasks = function clearCompletedTasks() {
  tasks = tasks.filter(function (task) {
    return !task.completed;
  });
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.renderTaskList)();
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateTaskIndexes)();
  saveTasks();
};
var clearCompleted = document.getElementById('clear');
clearCompleted.addEventListener('click', function (event) {
  event.preventDefault();
  clearCompletedTasks();
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300;1,400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  outline: 0;\r\n  border: 0;\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\n\r\nbody {\r\n  font-family: 'Lato', sans-serif;\r\n  background: rgb(211, 211, 211);\r\n}\r\n\r\n.container {\r\n  width: 50%;\r\n  margin: 8rem auto 0;\r\n  padding: 2rem;\r\n  background: #f9f9f9;\r\n  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;\r\n}\r\n\r\nhr {\r\n  border-bottom: 1px solid #ddd;\r\n  width: 100%;\r\n  margin-top: 1rem;\r\n}\r\n\r\nh4 {\r\n  font-size: 1.3rem;\r\n  color: rgb(105, 105, 105);\r\n  font-weight: 400;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  margin: 20px;\r\n}\r\n\r\n#new-task {\r\n  border: none;\r\n}\r\n\r\n#task-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  color: rgb(105, 105, 105);\r\n  font-size: 1.1rem;\r\n  padding: 1rem 0;\r\n}\r\n\r\ni.uil-ellipsis-v {\r\n  margin-left: auto;\r\n}\r\n\r\ninput[type='text'] {\r\n  flex: 1;\r\n  padding: 10px;\r\n  background: transparent;\r\n  margin-left: -1.3rem;\r\n  color: rgb(105, 105, 105);\r\n  font-style: italic;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n#new-task::placeholder {\r\n  color: rgb(105, 105, 105);\r\n  font-style: italic;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.delete-button {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #c0392b;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-size: 1.2rem;\r\n  margin-left: 0.5rem;\r\n  padding: 0;\r\n}\r\n\r\nli:hover .delete-button {\r\n  display: block;\r\n}\r\n\r\ni {\r\n  font-size: 1.3rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.title i {\r\n  color: rgb(105, 105, 105);\r\n}\r\n\r\nbutton[type='submit'] {\r\n  border: none;\r\n  border-radius: 0 5px 5px 0;\r\n  background-color: #dbe1ec;\r\n  cursor: pointer;\r\n  outline: none;\r\n  margin-left: 0.5rem;\r\n  color: rgb(105, 105, 105);\r\n}\r\n\r\nspan {\r\n  margin-left: 10px;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  margin-right: 10px;\r\n}\r\n\r\ninput[type='checkbox']:checked + span {\r\n  text-decoration: line-through;\r\n}\r\n\r\na {\r\n  display: block;\r\n  text-align: center;\r\n  margin: 2rem auto 0;\r\n  font-size: 1.3rem;\r\n  font-weight: 400;\r\n  color: rgb(105, 105, 105);\r\n}\r\n\r\na:hover {\r\n  text-decoration: underline;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,UAAU;EACV,SAAS;EACT,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,+BAA+B;EAC/B,8BAA8B;AAChC;;AAEA;EACE,UAAU;EACV,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,iDAAiD;AACnD;;AAEA;EACE,6BAA6B;EAC7B,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;EACX,yBAAyB;EACzB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,uBAAuB;EACvB,oBAAoB;EACpB,yBAAyB;EACzB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,cAAc;EACd,eAAe;EACf,qBAAqB;EACrB,iBAAiB;EACjB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,0BAA0B;EAC1B,yBAAyB;EACzB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,0BAA0B;AAC5B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300;1,400&display=swap');\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  outline: 0;\r\n  border: 0;\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\n\r\nbody {\r\n  font-family: 'Lato', sans-serif;\r\n  background: rgb(211, 211, 211);\r\n}\r\n\r\n.container {\r\n  width: 50%;\r\n  margin: 8rem auto 0;\r\n  padding: 2rem;\r\n  background: #f9f9f9;\r\n  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;\r\n}\r\n\r\nhr {\r\n  border-bottom: 1px solid #ddd;\r\n  width: 100%;\r\n  margin-top: 1rem;\r\n}\r\n\r\nh4 {\r\n  font-size: 1.3rem;\r\n  color: rgb(105, 105, 105);\r\n  font-weight: 400;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  margin: 20px;\r\n}\r\n\r\n#new-task {\r\n  border: none;\r\n}\r\n\r\n#task-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  color: rgb(105, 105, 105);\r\n  font-size: 1.1rem;\r\n  padding: 1rem 0;\r\n}\r\n\r\ni.uil-ellipsis-v {\r\n  margin-left: auto;\r\n}\r\n\r\ninput[type='text'] {\r\n  flex: 1;\r\n  padding: 10px;\r\n  background: transparent;\r\n  margin-left: -1.3rem;\r\n  color: rgb(105, 105, 105);\r\n  font-style: italic;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n#new-task::placeholder {\r\n  color: rgb(105, 105, 105);\r\n  font-style: italic;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.delete-button {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #c0392b;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-size: 1.2rem;\r\n  margin-left: 0.5rem;\r\n  padding: 0;\r\n}\r\n\r\nli:hover .delete-button {\r\n  display: block;\r\n}\r\n\r\ni {\r\n  font-size: 1.3rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.title i {\r\n  color: rgb(105, 105, 105);\r\n}\r\n\r\nbutton[type='submit'] {\r\n  border: none;\r\n  border-radius: 0 5px 5px 0;\r\n  background-color: #dbe1ec;\r\n  cursor: pointer;\r\n  outline: none;\r\n  margin-left: 0.5rem;\r\n  color: rgb(105, 105, 105);\r\n}\r\n\r\nspan {\r\n  margin-left: 10px;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  margin-right: 10px;\r\n}\r\n\r\ninput[type='checkbox']:checked + span {\r\n  text-decoration: line-through;\r\n}\r\n\r\na {\r\n  display: block;\r\n  text-align: center;\r\n  margin: 2rem auto 0;\r\n  font-size: 1.3rem;\r\n  font-weight: 400;\r\n  color: rgb(105, 105, 105);\r\n}\r\n\r\na:hover {\r\n  text-decoration: underline;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/module/app.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/module/index.js");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script.js */ "./src/module/script.js");



var taskList = document.getElementById('task-list');
var newTask = document.getElementById('new-task');
var form = document.querySelector('form');
var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
function addNewTask(description) {
  var taskIndex = tasks.length;
  var task = {
    description: description,
    completed: false,
    index: taskIndex
  };
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  var listItemElement = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.createTaskLists)(task);
  taskList.appendChild(listItemElement);
}
form.addEventListener('submit', function (event) {
  event.preventDefault();
  var taskDescription = newTask.value;
  if (taskDescription.trim() === '') {
    return;
  }
  addNewTask(taskDescription);
  newTask.value = '';
});
(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.renderTaskList)();
window.addEventListener('load', _index_js__WEBPACK_IMPORTED_MODULE_1__.renderTaskList);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxFQUFFTCxJQUFJLENBQUNNLFNBQVMsQ0FBQ1AsS0FBSyxDQUFDLENBQUM7RUFDcEQsSUFBTW1DLGVBQWUsR0FBR0ssMERBQWUsQ0FBQy9CLElBQUksQ0FBQztFQUM3Q2QsUUFBUSxDQUFDNEMsV0FBVyxDQUFDSixlQUFlLENBQUM7QUFDdkM7QUFFQXlCLElBQUksQ0FBQ3ZDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDQyxLQUFLLEVBQUs7RUFDekNBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFDdEIsSUFBTTJDLGVBQWUsR0FBR1AsT0FBTyxDQUFDUixLQUFLO0VBQ3JDLElBQUllLGVBQWUsQ0FBQ2IsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDakM7RUFDRjtFQUNBUyxVQUFVLENBQUNJLGVBQWUsQ0FBQztFQUMzQlAsT0FBTyxDQUFDUixLQUFLLEdBQUcsRUFBRTtBQUNwQixDQUFDLENBQUM7QUFFRlYseURBQWMsQ0FBQyxDQUFDO0FBQ2hCMEIsTUFBTSxDQUFDOUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFb0IscURBQWMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9tb2R1bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9tb2R1bGUvc2NyaXB0LmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9tb2R1bGUvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdCcpO1xubGV0IGRlbGV0ZVRhc2s7XG5sZXQgZWRpdFRhc2tEZXNjcmlwdGlvbjtcblxubGV0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW107XG5cbmNvbnN0IHNhdmVUYXNrcyA9ICgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbn07XG5cbmNvbnN0IG1hcmtBc0NvbXBsZXRlZCA9ICh0YXNrKSA9PiB7XG4gIHRhc2suY29tcGxldGVkID0gdHJ1ZTtcbn07XG5cbmNvbnN0IG1hcmtBc0luY29tcGxldGUgPSAodGFzaykgPT4ge1xuICB0YXNrLmNvbXBsZXRlZCA9IGZhbHNlO1xufTtcblxuLy8gQ3JlYXRlIGNoZWNrYm94IGVsZW1lbnRcbmNvbnN0IGNyZWF0ZUNoZWNrYm94ID0gKGNvbXBsZXRlZCkgPT4ge1xuICBjb25zdCBjaGVja2JveEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjaGVja2JveEVsZW1lbnQudHlwZSA9ICdjaGVja2JveCc7XG4gIGNoZWNrYm94RWxlbWVudC5jaGVja2VkID0gY29tcGxldGVkO1xuICByZXR1cm4gY2hlY2tib3hFbGVtZW50O1xufTtcblxuLy8gQ3JlYXRlIGRlc2NyaXB0aW9uIGVsZW1lbnRcbmNvbnN0IGNyZWF0ZURlc2NyaXB0aW9uID0gKGRlc2NyaXB0aW9uKSA9PiB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gIGRlc2NyaXB0aW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZWRpdFRhc2tEZXNjcmlwdGlvbigpO1xuICB9KTtcbiAgcmV0dXJuIGRlc2NyaXB0aW9uRWxlbWVudDtcbn07XG5cbi8vIENyZWF0ZSBpY29uIGVsZW1lbnRcbmNvbnN0IGNyZWF0ZUljb24gPSAoKSA9PiB7XG4gIGNvbnN0IGljb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBpY29uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd1aWwnLCAndWlsLWVsbGlwc2lzLXYnKTtcbiAgaWNvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGVkaXRUYXNrRGVzY3JpcHRpb24oKTtcbiAgfSk7XG4gIHJldHVybiBpY29uRWxlbWVudDtcbn07XG5cbi8vIENyZWF0ZSBkZWxldGUgYnV0dG9uIGVsZW1lbnRcbmNvbnN0IGNyZWF0ZURlbGV0ZUJ1dHRvbiA9IChpbmRleCkgPT4ge1xuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cInVpbCB1aWwtdHJhc2hcIj48L2k+JztcbiAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24nKTtcbiAgZGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZGVsZXRlVGFzayhpbmRleCk7XG4gICAgc2F2ZVRhc2tzKCk7XG4gIH0pO1xuICByZXR1cm4gZGVsZXRlQnV0dG9uO1xufTtcblxuLy8gQ3JlYXRlIHRhc2sgbGlzdCBpdGVtIGVsZW1lbnRcbmNvbnN0IGNyZWF0ZVRhc2tMaXN0SXRlbSA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IGxpc3RJdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGNoZWNrYm94RWxlbWVudCA9IGNyZWF0ZUNoZWNrYm94KHRhc2suY29tcGxldGVkKTtcbiAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gY3JlYXRlRGVzY3JpcHRpb24odGFzay5kZXNjcmlwdGlvbik7XG4gIGNvbnN0IGljb25FbGVtZW50ID0gY3JlYXRlSWNvbigpO1xuICBjb25zdCBkZWxldGVCdXR0b24gPSBjcmVhdGVEZWxldGVCdXR0b24odGFzay5pbmRleCk7XG4gIGNoZWNrYm94RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChjaGVja2JveEVsZW1lbnQuY2hlY2tlZCkge1xuICAgICAgbWFya0FzQ29tcGxldGVkKHRhc2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXJrQXNJbmNvbXBsZXRlKHRhc2spO1xuICAgIH1cbiAgICBzYXZlVGFza3MoKTtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBjaGVja2JveCBpcyBub3cgY2hlY2tlZFxuICAgIGlmIChjaGVja2JveEVsZW1lbnQuY2hlY2tlZCkge1xuICAgICAgZGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgaWNvbkVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGxpc3RJdGVtRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgbGlzdEl0ZW1FbGVtZW50LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgZGVsZXRlQnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSAnYXV0byc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgaWNvbkVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuc3R5bGUuY29sb3IgPSAnIzk5OSc7XG4gICAgfVxuICB9KTtcblxuICBsaXN0SXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hlY2tib3hFbGVtZW50KTtcbiAgbGlzdEl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudCk7XG4gIGxpc3RJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChpY29uRWxlbWVudCk7XG4gIGxpc3RJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gIHJldHVybiBsaXN0SXRlbUVsZW1lbnQ7XG59O1xuXG4vLyBNYWluIGZ1bmN0aW9uXG5jb25zdCBjcmVhdGVUYXNrTGlzdHMgPSAodGFzaykgPT4gY3JlYXRlVGFza0xpc3RJdGVtKHRhc2spO1xuXG5jb25zdCByZW5kZXJUYXNrTGlzdCA9ICgpID0+IHtcbiAgdGFza0xpc3QuaW5uZXJIVE1MID0gJyc7XG5cbiAgdGFza3NcbiAgICAuc29ydCgodGFzazEsIHRhc2syKSA9PiB0YXNrMS5pbmRleCAtIHRhc2syLmluZGV4KVxuICAgIC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBsaXN0SXRlbUVsZW1lbnQgPSBjcmVhdGVUYXNrTGlzdHModGFzayk7XG4gICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbUVsZW1lbnQpO1xuICAgIH0pO1xufTtcblxuY29uc3QgdXBkYXRlVGFza0luZGV4ZXMgPSAoKSA9PiB7XG4gIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgdGFzay5pbmRleCA9IGluZGV4O1xuICB9KTtcbn07XG5cbmRlbGV0ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgdGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaW5kZXggIT09IGluZGV4KTtcbiAgdXBkYXRlVGFza0luZGV4ZXMoKTtcbiAgc2F2ZVRhc2tzKCk7XG4gIHJlbmRlclRhc2tMaXN0KCk7XG59O1xuXG5lZGl0VGFza0Rlc2NyaXB0aW9uID0gKHRhc2spID0+IHtcbiAgY29uc29sZS5sb2coJ3Rhc2snLCB0YXNrKTtcbiAgY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXRFbGVtZW50LnR5cGUgPSAndGV4dCc7XG4gIGlucHV0RWxlbWVudC52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlZGl0LWlucHV0Jyk7XG5cbiAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICB0YXNrLmRlc2NyaXB0aW9uID0gaW5wdXRFbGVtZW50LnZhbHVlLnRyaW0oKTtcbiAgICAgIHNhdmVUYXNrcygpO1xuICAgICAgcmVuZGVyVGFza0xpc3QoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHJlbmRlclRhc2tMaXN0KCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBsaXN0SXRlbUVsZW1lbnQgPSB0YXNrTGlzdC5jaGlsZHJlblt0YXNrLmluZGV4XTtcbiAgbGlzdEl0ZW1FbGVtZW50LnJlcGxhY2VDaGlsZChpbnB1dEVsZW1lbnQsIGxpc3RJdGVtRWxlbWVudC5jaGlsZHJlblsxXSk7XG4gIGlucHV0RWxlbWVudC5zZWxlY3QoKTtcbn07XG5leHBvcnQgeyB1cGRhdGVUYXNrSW5kZXhlcywgcmVuZGVyVGFza0xpc3QsIGNyZWF0ZVRhc2tMaXN0cyB9OyIsImltcG9ydCB7IHVwZGF0ZVRhc2tJbmRleGVzLCByZW5kZXJUYXNrTGlzdCB9IGZyb20gJy4vaW5kZXguanMnO1xuXG5sZXQgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXTtcblxuY29uc3Qgc2F2ZVRhc2tzID0gKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xufTtcblxuLy8gQ2xlYXJpbmcgY29tcGxldGVkXG5jb25zdCBjbGVhckNvbXBsZXRlZFRhc2tzID0gKCkgPT4ge1xuICB0YXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGVkKTtcbiAgcmVuZGVyVGFza0xpc3QoKTtcbiAgdXBkYXRlVGFza0luZGV4ZXMoKTtcbiAgc2F2ZVRhc2tzKCk7XG59O1xuXG5jb25zdCBjbGVhckNvbXBsZXRlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhcicpO1xuY2xlYXJDb21wbGV0ZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY2xlYXJDb21wbGV0ZWRUYXNrcygpO1xufSk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOml0YWwsd2dodEAwLDQwMDsxLDMwMDsxLDQwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyMTEsIDIxMSwgMjExKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgbWFyZ2luOiA4cmVtIGF1dG8gMDtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDAgN3B4IDI5cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuaHIge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmg0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgY29sb3I6IHJnYigxMDUsIDEwNSwgMTA1KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogcmdiKDEwNSwgMTA1LCAxMDUpO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbmkudWlsLWVsbGlwc2lzLXYge1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J3RleHQnXSB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0xLjNyZW07XFxyXFxuICBjb2xvcjogcmdiKDEwNSwgMTA1LCAxMDUpO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzazo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6IHJnYigxMDUsIDEwNSwgMTA1KTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjYzAzOTJiO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxubGk6aG92ZXIgLmRlbGV0ZS1idXR0b24ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmkge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgaSB7XFxyXFxuICBjb2xvcjogcmdiKDEwNSwgMTA1LCAxMDUpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b25bdHlwZT0nc3VibWl0J10ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJlMWVjO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxyXFxuICBjb2xvcjogcmdiKDEwNSwgMTA1LCAxMDUpO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkICsgc3BhbiB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMnJlbSBhdXRvIDA7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBjb2xvcjogcmdiKDEwNSwgMTA1LCAxMDUpO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsVUFBVTtFQUNWLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOml0YWwsd2dodEAwLDQwMDsxLDMwMDsxLDQwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyMTEsIDIxMSwgMjExKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgbWFyZ2luOiA4cmVtIGF1dG8gMDtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDAgN3B4IDI5cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuaHIge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmg0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgY29sb3I6IHJnYigxMDUsIDEwNSwgMTA1KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogcmdiKDEwNSwgMTA1LCAxMDUpO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbmkudWlsLWVsbGlwc2lzLXYge1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J3RleHQnXSB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0xLjNyZW07XFxyXFxuICBjb2xvcjogcmdiKDEwNSwgMTA1LCAxMDUpO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzazo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6IHJnYigxMDUsIDEwNSwgMTA1KTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjYzAzOTJiO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxubGk6aG92ZXIgLmRlbGV0ZS1idXR0b24ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmkge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgaSB7XFxyXFxuICBjb2xvcjogcmdiKDEwNSwgMTA1LCAxMDUpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b25bdHlwZT0nc3VibWl0J10ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJlMWVjO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxyXFxuICBjb2xvcjogcmdiKDEwNSwgMTA1LCAxMDUpO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkICsgc3BhbiB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMnJlbSBhdXRvIDA7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBjb2xvcjogcmdiKDEwNSwgMTA1LCAxMDUpO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcmVuZGVyVGFza0xpc3QsIGNyZWF0ZVRhc2tMaXN0cyB9IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0ICcuL3NjcmlwdC5qcyc7XG5cbmNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdCcpO1xuY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzaycpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbmNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW107XG5cbmZ1bmN0aW9uIGFkZE5ld1Rhc2soZGVzY3JpcHRpb24pIHtcbiAgY29uc3QgdGFza0luZGV4ID0gdGFza3MubGVuZ3RoO1xuXG4gIGNvbnN0IHRhc2sgPSB7IGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQ6IGZhbHNlLCBpbmRleDogdGFza0luZGV4IH07XG4gIHRhc2tzLnB1c2godGFzayk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gIGNvbnN0IGxpc3RJdGVtRWxlbWVudCA9IGNyZWF0ZVRhc2tMaXN0cyh0YXNrKTtcbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW1FbGVtZW50KTtcbn1cblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gbmV3VGFzay52YWx1ZTtcbiAgaWYgKHRhc2tEZXNjcmlwdGlvbi50cmltKCkgPT09ICcnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGFkZE5ld1Rhc2sodGFza0Rlc2NyaXB0aW9uKTtcbiAgbmV3VGFzay52YWx1ZSA9ICcnO1xufSk7XG5cbnJlbmRlclRhc2tMaXN0KCk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlbmRlclRhc2tMaXN0KTsiXSwibmFtZXMiOlsidGFza0xpc3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGVsZXRlVGFzayIsImVkaXRUYXNrRGVzY3JpcHRpb24iLCJ0YXNrcyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzYXZlVGFza3MiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwibWFya0FzQ29tcGxldGVkIiwidGFzayIsImNvbXBsZXRlZCIsIm1hcmtBc0luY29tcGxldGUiLCJjcmVhdGVDaGVja2JveCIsImNoZWNrYm94RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiY2hlY2tlZCIsImNyZWF0ZURlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbkVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlSWNvbiIsImljb25FbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiY3JlYXRlRGVsZXRlQnV0dG9uIiwiaW5kZXgiLCJkZWxldGVCdXR0b24iLCJpbm5lckhUTUwiLCJzdHlsZSIsImRpc3BsYXkiLCJjcmVhdGVUYXNrTGlzdEl0ZW0iLCJsaXN0SXRlbUVsZW1lbnQiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbkxlZnQiLCJjb2xvciIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGFza0xpc3RzIiwicmVuZGVyVGFza0xpc3QiLCJzb3J0IiwidGFzazEiLCJ0YXNrMiIsImZvckVhY2giLCJ1cGRhdGVUYXNrSW5kZXhlcyIsImZpbHRlciIsImNvbnNvbGUiLCJsb2ciLCJpbnB1dEVsZW1lbnQiLCJ2YWx1ZSIsImtleSIsInRyaW0iLCJjaGlsZHJlbiIsInJlcGxhY2VDaGlsZCIsInNlbGVjdCIsImNsZWFyQ29tcGxldGVkVGFza3MiLCJjbGVhckNvbXBsZXRlZCIsIm5ld1Rhc2siLCJmb3JtIiwicXVlcnlTZWxlY3RvciIsImFkZE5ld1Rhc2siLCJ0YXNrSW5kZXgiLCJsZW5ndGgiLCJwdXNoIiwidGFza0Rlc2NyaXB0aW9uIiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==