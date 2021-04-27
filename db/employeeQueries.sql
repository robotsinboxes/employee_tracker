-- viewAllEmployees ----------------------------------------
-- SELECT e.id, e.first_name, e.last_name, r.title, r.salary FROM employee e
-- JOIN employeeRole r ON r.id;

-- SELECT e.id, e.first_name, e.last_name, r.title, d.dept_name, r.salary 
-- FROM employee e
-- INNER JOIN employeeRole r 
-- ON r.id = e.role_id 
-- INNER JOIN department d 
-- ON d.id = r.department_id;

-- SELECT e.id, e.first_name, e.last_name, r.title, d.dept_name, r.salary, CONCAT(e.first_name, ' ', e.last_name) AS "Manager"
-- FROM employee e
-- LEFT JOIN employeeRole r
-- ON r.id = e.role_id
-- LEFT JOIN department d
-- ON d.id = r.department_id
-- LEFT JOIN employee m 
-- ON m.id = e.manager_id
-- ORDER BY e.id;

-- --viewEmployeesByMgr------------------------------------------
-- SELECT e.id, CONCAT(e.first_name,' ',e.last_name) AS 'Employee', CONCAT(e.first_name, ' ', e.last_name) AS "Manager" 
-- FROM employee e
-- INNER JOIN employeeRole r 
-- ON r.id = e.role_id 
-- INNER JOIN department d 
-- ON d.id = r.department_id 
-- WHERE dept_name = 'Management';

-- SELECT CONCAT(e.first_name," ",e.last_name) 
-- AS 'Full Name', r.title, e.manager_id 
-- FROM employee e
-- INNER JOIN employeeRole r 
-- ON r.id = e.role_id 
-- WHERE e.manager_id >= 100; 

--viewEmployeesByRole----------------------------------------
-- SELECT e.first_name, e.last_name, r.title, d.dept_name  
-- FROM employee e
-- INNER JOIN employeeRole r 
-- ON r.id = e.role_id 
-- INNER JOIN department d 
-- ON d.id = r.department_id 
-- WHERE dept_name = 'Management';

-- SELECT CONCAT(e.first_name," ",e.last_name) 
-- AS 'Full Name', r.title, e.manager_id 
-- FROM employee e
-- INNER JOIN employeeRole r 
-- ON r.id = e.role_id 
-- WHERE e.manager_id >= 100; 

--addEmployee------------------------------------------------


--addDepartment----------------------------------------------


--addRole


--updateEmployeeRole
