import { updateTaskIndexes, renderTaskList } from './index.js';

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Clearing completed
const clearCompletedTasks = () => {
  tasks = tasks.filter((task) => !task.completed);
  renderTaskList();
  updateTaskIndexes();
  saveTasks();
};

const clearCompleted = document.getElementById('clear');
clearCompleted.addEventListener('click', (event) => {
  event.preventDefault();
  clearCompletedTasks();
});