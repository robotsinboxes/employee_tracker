DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;
USE employeeDB;

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT NULL,
    manager_id INT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employeeRole (
    role_id INT NOT NULL,
    title VARCHAR(30) NULL,
    salary VARCHAR(30)) NULL,
    department_id INT NULL,
    PRIMARY KEY(role_id)
);

CREATE TABLE department (
    department_id INT NOT NULL,
    dept_name VARCHAR(30) NULL,
    PRIMARY KEY(department_id)
);

