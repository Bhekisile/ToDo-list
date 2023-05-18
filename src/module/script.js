import { updateTaskIndexes, renderTaskList, saveTasks } from './index.js';

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Clearing completed
const clearCompletedTasks = () => {
  tasks = tasks.filter((task) => !task.completed);
  updateTaskIndexes();
  saveTasks();
  renderTaskList();
};

const clearCompleted = document.getElementById('clear');
clearCompleted.addEventListener('click', (event) => {
  event.preventDefault();
  clearCompletedTasks();
});