INSERT INTO department (name)
VALUES
('Engineering'),
('Finance'),
('Project Management'),
('Human Resources'),
('Account Management'),
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
('Software Engineer', 120000, 1),
('Account Manager', 100000, 5),
('Lead Engineer', 90000, 1),
('Project Manager', 95000, 3),
('Accountant', 84000, 2),
('Human Resources Manager', 70000, 4),
('Receptionist', 55000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Marty', 'McFly', 2, 7),
('Michael', 'Jordan', 5, 2),
('Jack', 'Sparrow', 3, 7),
('Frodo', 'Baggins', 6, NULL),
('Jill', 'Taylor', 7, 6),
('Ronald', 'McDonald', 1, 3),
('Carlton', 'Whitfield', 4, NULL),
('Tyler', 'Durden', 2, 7);