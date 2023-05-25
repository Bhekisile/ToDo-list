/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./module/createTask.js":
/*!******************************!*\
  !*** ./module/createTask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTask)
/* harmony export */ });
function createTask(
  task,
  markAsCompleted,
  markAsIncomplete,
  saveTasks,
  deleteTask,
  editTasks,
) {
  const deleteButton = document.createElement('button');
  const listItemElement = document.createElement('li');
  const iconElement = document.createElement('i');
  const descriptionElement = document.createElement('span');

  const checkboxElement = document.createElement('input');
  checkboxElement.type = 'checkbox';
  checkboxElement.checked = task.completed;

  checkboxElement.addEventListener('change', () => {
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

  descriptionElement.textContent = task.description;

  descriptionElement.addEventListener('click', () => {
    editTasks(task);
  });

  listItemElement.appendChild(checkboxElement);
  listItemElement.appendChild(descriptionElement);

  iconElement.classList.add('uil', 'uil-ellipsis-v');
  iconElement.addEventListener('click', () => {
    editTasks(task);
  });
  listItemElement.appendChild(iconElement);

  deleteButton.innerHTML = '<i class="uil uil-trash"></i>';
  deleteButton.classList.add('delete-button');
  deleteButton.style.display = 'none';

  deleteButton.addEventListener('click', () => {
    deleteTask(task.index);
  });

  listItemElement.appendChild(deleteButton);

  return listItemElement;
}

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _module_createTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../module/createTask.js */ "./module/createTask.js");
/* module decorator */ module = __webpack_require__.hmd(module);
// import './style.css';


const taskList = document.getElementById('task-list');
const newTask = document.getElementById('new-task');
const clearCompleted = document.querySelector('#clear-all');
const form = document.querySelector('form');

let deleteTask;
let editTasks;

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function markAsCompleted(task) {
  task.completed = true;
}

function markAsIncomplete(task) {
  task.completed = false;
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateIndexes() {
  tasks.forEach((task, index) => {
    task.index = index;
  });
}

function renderTasks() {
  if (taskList !== null) {
    taskList.innerHTML = '';

    tasks
      .sort((task1, task2) => task1.index - task2.index)
      .forEach((task) => {
        const listItemElement = (0,_module_createTask_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
          task,
          markAsCompleted,
          markAsIncomplete,
          saveTasks,
          deleteTask,
          editTasks,
        );
        taskList.appendChild(listItemElement);
      });
  }
}

deleteTask = (index) => {
  tasks.splice(index, 1);
  tasks.forEach((task, i) => {
    task.index = i;
  });
  updateIndexes();
  saveTasks();
  renderTasks();
};

function addNewTask(description) {
  const taskIndex = tasks.length;
  const task = { description, completed: false, index: taskIndex };
  tasks.push(task);
  saveTasks();

  if (taskList) {
    const listItemElement = (0,_module_createTask_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
      task,
      markAsCompleted,
      markAsIncomplete,
      saveTasks,
      deleteTask,
      editTasks,
    );
    taskList.appendChild(listItemElement);
  }
}

function clearCompletedTasks() {
  const completedIndexes = [];

  tasks.forEach((task, index) => {
    if (task.completed) {
      completedIndexes.push(index);
    }
  });

  completedIndexes.reverse().forEach((index) => {
    tasks.splice(index, 1);
  });

  updateIndexes();
  saveTasks();
  renderTasks();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTasks = (task) => {
  const inputElement = document.createElement('input');
  inputElement.type = 'text';
  inputElement.value = task.description;
  inputElement.classList.add('edit-input');

  inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      task.description = inputElement.value.trim();
      saveTasks();
      renderTasks();
    } else if (event.key === 'Escape') {
      renderTasks();
    }
  });

  const listItemElement = taskList.children[task.index];
  listItemElement.replaceChild(inputElement, listItemElement.children[1]);
  inputElement.select();
});

function handleClearCompletedClick(event) {
  event.preventDefault();
  clearCompletedTasks();
}

function handleFormSubmit(event) {
  event.preventDefault();

  const taskDescription = newTask.value;
  if (taskDescription.trim() === '') {
    return;
  }

  addNewTask(taskDescription);
  newTask.value = '';
}

if (clearCompleted) {
  clearCompleted.addEventListener('click', handleClearCompletedClick);
}

if (form) {
  form.addEventListener('submit', handleFormSubmit);
}

renderTasks();
window.addEventListener('load', renderTasks);

module.exports = {
  tasks,
  addNewTask,
  deleteTask,
  clearCompletedTasks,
  markAsCompleted,
  markAsIncomplete,
};

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLjMzNTczZWI0MTExM2NkYWEzOGFiLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUNpRDs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpRUFBVTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLGlFQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQzFKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBOzs7OztXQ1ZBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL21vZHVsZS9jcmVhdGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXJtb255IG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRhc2soXG4gIHRhc2ssXG4gIG1hcmtBc0NvbXBsZXRlZCxcbiAgbWFya0FzSW5jb21wbGV0ZSxcbiAgc2F2ZVRhc2tzLFxuICBkZWxldGVUYXNrLFxuICBlZGl0VGFza3MsXG4pIHtcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGxpc3RJdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGljb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgY29uc3QgY2hlY2tib3hFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY2hlY2tib3hFbGVtZW50LnR5cGUgPSAnY2hlY2tib3gnO1xuICBjaGVja2JveEVsZW1lbnQuY2hlY2tlZCA9IHRhc2suY29tcGxldGVkO1xuXG4gIGNoZWNrYm94RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKGNoZWNrYm94RWxlbWVudC5jaGVja2VkKSB7XG4gICAgICBtYXJrQXNDb21wbGV0ZWQodGFzayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcmtBc0luY29tcGxldGUodGFzayk7XG4gICAgfVxuICAgIHNhdmVUYXNrcygpO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGNoZWNrYm94IGlzIG5vdyBjaGVja2VkXG4gICAgaWYgKGNoZWNrYm94RWxlbWVudC5jaGVja2VkKSB7XG4gICAgICBkZWxldGVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBpY29uRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgbGlzdEl0ZW1FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICBsaXN0SXRlbUVsZW1lbnQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnZmxleC1zdGFydCc7XG4gICAgICBkZWxldGVCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9ICdhdXRvJztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBpY29uRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5zdHlsZS5jb2xvciA9ICcjOTk5JztcbiAgICB9XG4gIH0pO1xuXG4gIGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgZGVzY3JpcHRpb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGVkaXRUYXNrcyh0YXNrKTtcbiAgfSk7XG5cbiAgbGlzdEl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGNoZWNrYm94RWxlbWVudCk7XG4gIGxpc3RJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnQpO1xuXG4gIGljb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3VpbCcsICd1aWwtZWxsaXBzaXMtdicpO1xuICBpY29uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBlZGl0VGFza3ModGFzayk7XG4gIH0pO1xuICBsaXN0SXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoaWNvbkVsZW1lbnQpO1xuXG4gIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJ1aWwgdWlsLXRyYXNoXCI+PC9pPic7XG4gIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnV0dG9uJyk7XG4gIGRlbGV0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkZWxldGVUYXNrKHRhc2suaW5kZXgpO1xuICB9KTtcblxuICBsaXN0SXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICByZXR1cm4gbGlzdEl0ZW1FbGVtZW50O1xufSIsIi8vIGltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSAnLi4vbW9kdWxlL2NyZWF0ZVRhc2suanMnO1xuXG5jb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWxpc3QnKTtcbmNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2snKTtcbmNvbnN0IGNsZWFyQ29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NsZWFyLWFsbCcpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcblxubGV0IGRlbGV0ZVRhc2s7XG5sZXQgZWRpdFRhc2tzO1xuXG5jb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFtdO1xuXG5mdW5jdGlvbiBtYXJrQXNDb21wbGV0ZWQodGFzaykge1xuICB0YXNrLmNvbXBsZXRlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIG1hcmtBc0luY29tcGxldGUodGFzaykge1xuICB0YXNrLmNvbXBsZXRlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzYXZlVGFza3MoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUluZGV4ZXMoKSB7XG4gIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgdGFzay5pbmRleCA9IGluZGV4O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza3MoKSB7XG4gIGlmICh0YXNrTGlzdCAhPT0gbnVsbCkge1xuICAgIHRhc2tMaXN0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgdGFza3NcbiAgICAgIC5zb3J0KCh0YXNrMSwgdGFzazIpID0+IHRhc2sxLmluZGV4IC0gdGFzazIuaW5kZXgpXG4gICAgICAuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBjb25zdCBsaXN0SXRlbUVsZW1lbnQgPSBjcmVhdGVUYXNrKFxuICAgICAgICAgIHRhc2ssXG4gICAgICAgICAgbWFya0FzQ29tcGxldGVkLFxuICAgICAgICAgIG1hcmtBc0luY29tcGxldGUsXG4gICAgICAgICAgc2F2ZVRhc2tzLFxuICAgICAgICAgIGRlbGV0ZVRhc2ssXG4gICAgICAgICAgZWRpdFRhc2tzLFxuICAgICAgICApO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbUVsZW1lbnQpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuZGVsZXRlVGFzayA9IChpbmRleCkgPT4ge1xuICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XG4gICAgdGFzay5pbmRleCA9IGk7XG4gIH0pO1xuICB1cGRhdGVJbmRleGVzKCk7XG4gIHNhdmVUYXNrcygpO1xuICByZW5kZXJUYXNrcygpO1xufTtcblxuZnVuY3Rpb24gYWRkTmV3VGFzayhkZXNjcmlwdGlvbikge1xuICBjb25zdCB0YXNrSW5kZXggPSB0YXNrcy5sZW5ndGg7XG4gIGNvbnN0IHRhc2sgPSB7IGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQ6IGZhbHNlLCBpbmRleDogdGFza0luZGV4IH07XG4gIHRhc2tzLnB1c2godGFzayk7XG4gIHNhdmVUYXNrcygpO1xuXG4gIGlmICh0YXNrTGlzdCkge1xuICAgIGNvbnN0IGxpc3RJdGVtRWxlbWVudCA9IGNyZWF0ZVRhc2soXG4gICAgICB0YXNrLFxuICAgICAgbWFya0FzQ29tcGxldGVkLFxuICAgICAgbWFya0FzSW5jb21wbGV0ZSxcbiAgICAgIHNhdmVUYXNrcyxcbiAgICAgIGRlbGV0ZVRhc2ssXG4gICAgICBlZGl0VGFza3MsXG4gICAgKTtcbiAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbUVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29tcGxldGVkVGFza3MoKSB7XG4gIGNvbnN0IGNvbXBsZXRlZEluZGV4ZXMgPSBbXTtcblxuICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgIGlmICh0YXNrLmNvbXBsZXRlZCkge1xuICAgICAgY29tcGxldGVkSW5kZXhlcy5wdXNoKGluZGV4KTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbXBsZXRlZEluZGV4ZXMucmV2ZXJzZSgpLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgdGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgfSk7XG5cbiAgdXBkYXRlSW5kZXhlcygpO1xuICBzYXZlVGFza3MoKTtcbiAgcmVuZGVyVGFza3MoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZWRpdFRhc2tzID0gKHRhc2spID0+IHtcbiAgY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXRFbGVtZW50LnR5cGUgPSAndGV4dCc7XG4gIGlucHV0RWxlbWVudC52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlZGl0LWlucHV0Jyk7XG5cbiAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICB0YXNrLmRlc2NyaXB0aW9uID0gaW5wdXRFbGVtZW50LnZhbHVlLnRyaW0oKTtcbiAgICAgIHNhdmVUYXNrcygpO1xuICAgICAgcmVuZGVyVGFza3MoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHJlbmRlclRhc2tzKCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBsaXN0SXRlbUVsZW1lbnQgPSB0YXNrTGlzdC5jaGlsZHJlblt0YXNrLmluZGV4XTtcbiAgbGlzdEl0ZW1FbGVtZW50LnJlcGxhY2VDaGlsZChpbnB1dEVsZW1lbnQsIGxpc3RJdGVtRWxlbWVudC5jaGlsZHJlblsxXSk7XG4gIGlucHV0RWxlbWVudC5zZWxlY3QoKTtcbn07XG5cbmZ1bmN0aW9uIGhhbmRsZUNsZWFyQ29tcGxldGVkQ2xpY2soZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY2xlYXJDb21wbGV0ZWRUYXNrcygpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVGb3JtU3VibWl0KGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gbmV3VGFzay52YWx1ZTtcbiAgaWYgKHRhc2tEZXNjcmlwdGlvbi50cmltKCkgPT09ICcnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYWRkTmV3VGFzayh0YXNrRGVzY3JpcHRpb24pO1xuICBuZXdUYXNrLnZhbHVlID0gJyc7XG59XG5cbmlmIChjbGVhckNvbXBsZXRlZCkge1xuICBjbGVhckNvbXBsZXRlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsZWFyQ29tcGxldGVkQ2xpY2spO1xufVxuXG5pZiAoZm9ybSkge1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZUZvcm1TdWJtaXQpO1xufVxuXG5yZW5kZXJUYXNrcygpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZW5kZXJUYXNrcyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0YXNrcyxcbiAgYWRkTmV3VGFzayxcbiAgZGVsZXRlVGFzayxcbiAgY2xlYXJDb21wbGV0ZWRUYXNrcyxcbiAgbWFya0FzQ29tcGxldGVkLFxuICBtYXJrQXNJbmNvbXBsZXRlLFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlID0gT2JqZWN0LmNyZWF0ZShtb2R1bGUpO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsICdleHBvcnRzJywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0c2V0OiAoKSA9PiB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VTIE1vZHVsZXMgbWF5IG5vdCBhc3NpZ24gbW9kdWxlLmV4cG9ydHMgb3IgZXhwb3J0cy4qLCBVc2UgRVNNIGV4cG9ydCBzeW50YXgsIGluc3RlYWQ6ICcgKyBtb2R1bGUuaWQpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=