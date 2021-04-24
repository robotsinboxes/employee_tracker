INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (32, 'Michael', 'Scott', 100, 200),
(23, 'Dwight', 'Schrute', 50, 100),
(19, 'Jim', 'Halpert', 60, 100),
(22, 'Angela', 'Martin', 40, 100),
(20, 'Pam', 'Beesly', 30, 100);

INSERT INTO employeeRole (title, salary, department_id)
VALUES ('Regional Manager', '$42,000', 900),
('Asst To The Regional Manager', '$50,000', 600),
('Accountant', '$48,000', 700),
('Secretary', '$42,500', 400),
('Sales', '$49,000', 600);

INSERT INTO department (department_id, dept_name)
VALUES (900, 'Management'),
(700, 'Accounting'),
(600, 'Sales'),
(400, 'Clerical');