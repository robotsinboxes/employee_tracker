// require dependencies
const express = require('express');
const mysql = require('mysql');
const inquirer = require('inquirer');

const app = express();

// create a connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 8080,
    user: 'root',
    password: 'password666',
    database: 'employeeDB',
});

// catch any errors, if none run promptOptions function
connection.connect((err) => {
    if (err) throw err;
    promptOptions();
});

// prompt the user to choose from a list of options
const promptOptions = () => {
    inquirer
    .prompt ({
        name: 'optionList',
        type: 'rawlist',
        message: "What would you like to do? (Use arrow keys)",
        choices: [
            "View All Employees",
            "View Employees by Manager",
            "View Employees by Role",
            "Add Employee",
            "Add Department",
            "Add Role",
            "Update Employee Role",
        ],
    })
    // then take their answer and route it to corresponding function
    .then((answer) => {
        switch (answer.action) {
          case "View All Employees":
            viewAllEmployees();
            break;
  
          case "View Employees by Manager":
            viewEmployeesByMgr();
            break;
  
          case "View Employees by Role":
            viewEmployeesByRole();
            break;
  
          case "Add Employee":
            addEmployee();
            break;
  
          case "Add Department":
            addDepartment();
            break;
  
          case "Add Role":
            addRole();
            break;
          
          case "Update Employee Role":
            updateEmployeeRole();
            break;
          
          // catch any errors
          default:
            console.log(`Invalid action: ${answer.action}`);
            break;
        }
      });
  };

  // option 1 - view all employees
  const viewAllEmployees = () => {
      // query db for all employees
      const query = 
        employee.first_name, 
        employee.last_name, 
        ;
      // print to console each employees first and last name
      res.forEach(({ first_name, last_name }) => {
          console.table(
            `Name: ${first_name} ${last_name}`
          );
      });
      // after displaying employees, run promptOptions again
      promptOptions();
  };

