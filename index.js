const fs = require("fs");

// libary color console.log
const chalk = require("chalk");

// yargs
const yargs = require("yargs");
const { string } = require("yargs");

// import function task.js
const taskFunc = require("./task");

// add task
// define yargs command
yargs.command({
  command: "add", //command
  //add data & information
  builder: {
    title: {
      type: "string",
      demandOption: true, // must have
    },
    description: {
      type: "string",
      demandOption: true,
    },
  },
  //   function will excuted when use command
  handler: function (args) {
    console.log("add", args); //parameter args for data passed
    taskFunc.addTask(args.title, args.description);
  },
});

// remove task
yargs.command({
  command: "remove",
  builder: {
    title: {
      type: "string",
      demandOption: true,
    },
  },
  handler: function (args) {
    console.log("remove", args);
    taskFunc.removeTask(args.title);
  },
});

//update task
yargs.command({
  command: "update",
  builder: {
    title: {
      type: "string",
      demandOption: true,
    },
    description: {
      type: "string",
      demandOption: true,
    },
  },
  handler: function (args) {
    console.log("update", args);
  },
});

//list all task
yargs.command({
  command: "list",
  builder: {},
  handler: function (args) {
    taskFunc.listAllTasks();
  },
});

//list task detail
yargs.command({
  command: "detail",
  builder: {
    title: {
      type: "string",
      demandOption: true,
    },
  },
  handler: function (args) {
    console.log("detail", args);
  },
});

yargs.parse(); //must to have for running

// file system ======================================
// fs.writeFileSync("task.txt", "learn node-js");

// console.log(chalk.blue("hello"));
