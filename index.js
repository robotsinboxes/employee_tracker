// require dependencies
const util = require('util');
const mysql = require('mysql');
const inquirer = require('inquirer');

// create a connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password666',
  database: 'employeeDB',
});

// catch any errors, if none run promptOptions function
connection.connect((err) => {
  if (err) throw err;
  promptOptions();
});

connection.query = util.promisify(connection.query);

// prompt the user to choose from a list of options
const promptOptions = () => {
  inquirer
    .prompt({
      name: 'optionList',
      type: 'rawlist',
      message: "What would you like to do? (Use arrow keys)",
      choices: [
        "View All Employees",
        "View Managers",
        "View Roles",
        "Add Employee",
        "Add Department",
        "Add Role",
        "Update Employee Role",
      ],
    })
    // TODO: SOMETHING IN THIS PROMISE IS BROKEN or THE FUNCTIONS BELOW ARE
    // then take their answer and route it to corresponding function
    .then((answer) => {
      switch (answer.optionList) {
        case "View All Employees":
          viewEmployees();
          console.log('got to case')
          break;

        case "View Managers":
          viewManagers();
          break;

        case "View Roles":
          viewRoles();
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

// option 1 - VIEW EMPLOYEES, collect table data and pass into view function
const getEmployeesDb = () => {
  const query =
    `SELECT e.id AS "Emp ID", CONCAT(e.first_name," ", e.last_name) AS "Employee" FROM employee e`
  return connection.query(query);
}
const viewEmployees = async() => {
  // run getAllEmployeesDb to get table data
  let employees = await getEmployeesDb();
  // if (err) throw err;
  // employees = results;
  console.log('\n\n');
  console.table(employees);
  console.log('\n\n');
  // after displaying employees, take back to main menu by running promptOptions again
  promptOptions();
}

// option 2 - VIEW MANAGERS
const getManagersDb = () => {
  const query =
    `SELECT e.id, CONCAT(e.first_name, ' ', e.last_name) AS "Managers" 
    FROM employee e
    WHERE e.id = 1 OR e.id = 6`
    return connection.query(query);
}
const viewManagers = async () => {
  // run getManagersDb to get table data
  let managers = await getManagersDb();
  // if (err) throw err;
  console.log('\n\n');
  console.table(managers);
  console.log('\n\n');
  // after displaying managers, take back to main menu by running promptOptions again
  promptOptions();
}

// option 3 - VIEW ROLES
// query db for all roles
const getRolesDb = () => {
  `SELECT r.id, r.title, r.salary
  FROM employeeRole r`
  return connection.query(query);
}
const viewRoles = async () => {
  // run getManagersDb to get table data
  let roles = await getRolesDb();
  // if (err) throw err;
  // print to console using console.table
  console.log('\n\n');
  console.table(roles);
  console.log('\n\n');
  // after displaying managers, take back to main menu by running promptOptions again
  promptOptions();
}

// option 4 - ADD EMPLOYEE
const addEmployeeDB = (employee) => {
  const query = `INSERT INTO employee SET ?`;
  return connection.query(query, employee);
}
const addEmployee = async () => {
  inquirer
    .prompt({
        type: 'input',
        name: 'empId',
        message: "Enter employee ID: "
      },
      {
        type: 'input',
        name: 'firstName',
        message: "Enter first name: "
      },
      {
        type: 'input',
        name: 'lastName',
        message: "Enter last name: "
      }
    )
  const newEmployee = await addEmployeeDB(employee);
}
// prompt user for input for all employee table cols

// print to console "employee added"

// take back to main menu


// option 5 - Add department

// prompt user for input for all dept table cols

// print to console "department added"

// take back to main menu


// option 6 - Add role

// prompt user for input for all role table cols

// print to console "role added"

// take back to main menu


// option 7 - Update employee role

// prompt user for the name of the employee they want to update

// prompt user for the new role

// print to console "role updated"

// take back to main menu