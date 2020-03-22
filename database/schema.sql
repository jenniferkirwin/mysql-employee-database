### Schema

DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department
(
	department_id int NOT NULL AUTO_INCREMENT,
	name varchar(30) NOT NULL,
	PRIMARY KEY (department_id)
);

CREATE TABLE role
(
	role_id int NOT NULL AUTO_INCREMENT,
	title varchar(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id int NOT NULL,
	PRIMARY KEY (role_id),
    FOREIGN KEY (department_id) REFERENCES department(department_id)
);

CREATE TABLE employee
(
    employee_id int NOT NULL AUTO_INCREMENT,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    role_id int NOT NULL,
    manager_id int DEFAULT NULL,
    PRIMARY KEY (employee_id),
    FOREIGN KEY (role_id) REFERENCES role(role_id),
    FOREIGN KEY (manager_id) REFERENCES employee(employee_id)
);