INSERT INTO department (name)
VALUES
('Engineering'),
('Finance'),
('Legal'),
('Human Resources'),
('Management'),
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
('Software Engineer', 120000, 1),
('Account Manager', 100000, 2),
('Lead Engineer', 90000, 3),
('Project Manager', 95000, 4),
('Accountant', 84000, 5),
('Human Resources Manager', 70000, 6),
('Receptionist', 55000, 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Marty', 'McFly', 2, 4),
('Michael', 'Jordan', 5, NULL),
('Jack', 'Sparrow', 3, 4),
('Frodo', 'Baggins', 6, NULL),
('Jill', 'Taylor', 7, 4),
('Ronald', 'McDonald', 1, NULL),
('Carlton', 'Whitfield', 4, NULL),
('Tyler', 'Durden', 2, 4);