USE company_db;

-- Adding Departments

INSERT INTO department (name) VALUES ('Executive Team');
INSERT INTO department (name) VALUES ('Marketing');
INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Customer Service');

-- Adding Roles

INSERT INTO role (title, salary, department_id) VALUES ('CEO', 250000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Marketing Manager', 100000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Marketing Associate', 50000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Sales Manager', 100000, 3);
INSERT INTO role (title, salary, department_id) VALUES ('Sales Associate', 50000, 3);
INSERT INTO role (title, salary, department_id) VALUES ('Customer Service Manager', 100000, 4);
INSERT INTO role (title, salary, department_id) VALUES ('Customer Service Associate', 50000, 4);

-- Adding Employees

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jon', 'Smith', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Mary', 'Johnson', 2, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Fred', 'Scott', 4, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jane', 'Doe', 6, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Henry', 'Jackson', 3, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Alice', 'Johnson', 3, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Janet', 'Lincoln', 5, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Doe', 5, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jane', 'Scott', 7, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Henry', 'Smith', 7, NULL);