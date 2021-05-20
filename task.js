const fs = require("fs");

// add task
const addTask = function (title, description) {
  //1. get old tasks
  const tasks = getOldTasks();
  //2. check exist task
  const foundedTask = tasks.find((item) => {
    return item.title === title;
  });

  if (foundedTask) return;

  //3. add task
  const task = { title, description };

  tasks.push(task);

  //4. write file

  saveTask(tasks);
};

// remove task
const removeTask = function (title) {
  // 1. get task in json
  const tasks = getOldTasks();
  // 2. find index for task will removed
  const index = tasks.findIndex((item) => {
    return item.title === title;
  });
  // 3. check exist
  if (index !== -1) {
    tasks.splice(index, 1);
  }
  //4. write file
  saveTask(tasks);
};

// list all task
const listAllTasks = function () {
  // 1. get old task
  const tasks = getOldTasks();
  // 2.
  tasks.forEach((item) => {
    console.log("title: ", item.title);
    console.log("description: ", item.description);
    console.log("==============================");
  });
};

const getOldTasks = function () {
  try {
    // get json
    const taskBuffer = fs.readFileSync("tasks.json");
    //   convert json to string
    const taskJSON = taskBuffer.toString();

    return JSON.parse(taskJSON);
  } catch (e) {
    return [];
  }
};

const saveTask = function (tasks) {
  const tasksJSON = JSON.stringify(tasks);
  // write file
  fs.writeFileSync("tasks.json", tasksJSON);
};

module.exports = {
  addTask,
  removeTask,
  listAllTasks
};
