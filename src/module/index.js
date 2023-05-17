const taskList = document.getElementById('task-list');
let deleteTask;
let editTaskDescription;

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const markAsCompleted = (task) => {
  task.completed = true;
};

const markAsIncomplete = (task) => {
  task.completed = false;
};

// Create checkbox element
const createCheckbox = (completed) => {
  const checkboxElement = document.createElement('input');
  checkboxElement.type = 'checkbox';
  checkboxElement.checked = completed;
  return checkboxElement;
};

// Create description element
const createDescription = (description) => {
  const descriptionElement = document.createElement('span');
  descriptionElement.textContent = description;
  descriptionElement.addEventListener('click', (event) => {
    event.preventDefault();
    editTaskDescription();
  });
  return descriptionElement;
};

// Create icon element
const createIcon = () => {
  const iconElement = document.createElement('i');
  iconElement.classList.add('uil', 'uil-ellipsis-v');
  iconElement.addEventListener('click', (event) => {
    event.preventDefault();
    editTaskDescription();
  });
  return iconElement;
};

// Create delete button element
const createDeleteButton = (index) => {
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="uil uil-trash"></i>';
  deleteButton.classList.add('delete-button');
  deleteButton.style.display = 'none';
  deleteButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(index);
    deleteTask(index);
    saveTasks();
  });
  return deleteButton;
};

// Create task list item element
const createTaskListItem = (task) => {
  const listItemElement = document.createElement('li');
  const checkboxElement = createCheckbox(task.completed);
  const descriptionElement = createDescription(task.description);
  const iconElement = createIcon();
  const deleteButton = createDeleteButton(task.index);
  checkboxElement.addEventListener('change', (event) => {
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
const createTaskLists = (task) => createTaskListItem(task);

const renderTaskList = () => {
  taskList.innerHTML = '';

  tasks
    .sort((task1, task2) => task1.index - task2.index)
    .forEach((task) => {
      const listItemElement = createTaskLists(task);
      taskList.appendChild(listItemElement);
    });
};

const updateTaskIndexes = () => {
  tasks.forEach((task, index) => {
    task.index = index;
  });
};

deleteTask = (index) => {
  tasks = tasks.filter((task) => task.index !== index);
  updateTaskIndexes();
  saveTasks();
  renderTaskList();
};

editTaskDescription = (task) => {
  const inputElement = document.createElement('input');
  inputElement.type = 'text';
  inputElement.value = task.description;
  inputElement.classList.add('edit-input');

  inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      task.description = inputElement.value.trim();
      saveTasks();
      renderTaskList();
    } else if (event.key === 'Escape') {
      renderTaskList();
    }
  });

  const listItemElement = taskList.children[task.index];
  listItemElement.replaceChild(inputElement, listItemElement.children[1]);
  inputElement.select();
};
export { updateTaskIndexes, renderTaskList, createTaskLists };