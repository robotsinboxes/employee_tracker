DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;
USE employeeDB;

CREATE TABLE department (
    id INT NOT NULL,
    dept_name VARCHAR(30) NULL,
    PRIMARY KEY(department_id)
);

CREATE TABLE employeeRole (
    id INT PRIMARY KEY,
    title VARCHAR(30) NULL,
    salary VARCHAR(30) NULL,
    department_id INT NULL,
    FOREIGN KEY (department_id) REFERENCES department(department_id)
);

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT NULL,
    manager_id INT NULL,
    FOREIGN KEY (role_id) REFERENCES employeeRold(role_id)
);


