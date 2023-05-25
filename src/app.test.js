const {
  tasks,
  addNewTask,
  deleteTask,
} = require('./app.js');

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

beforeEach(() => {
  jest.clearAllMocks();
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    configurable: true,
  });
});

describe('deleteTask', () => {
  it('deletes a task from the list', () => {
    const initialTasksLength = tasks.length;
    const taskIndex = 0;
    deleteTask(taskIndex);
    expect(tasks.length).toBe(initialTasksLength - 1);
    expect(tasks.every((task, index) => task.index === index)).toBe(true);
  });
});