INSERT INTO departments (name)
VALUES
("Sales"),
("Engineering"),
("Finance"),
("Legal");

INSERT INTO positions (title, salary, department_id)
VALUES
("Sales Lead", 100000, 1),
("Sales Person", 80000, 1),
("Lead Engineer", 150000, 2),
("Software Engineer", 120000, 2),
("Accountant", 125000, 3),
("Legal Team Lead", 250000, 4),
("Lawyer", 190000, 4),
("Punk Rock Warlord", 500000, 5);

INSERT INTO employees (first_name, last_name, position_id, manager_id)
VALUES
("Tim", "Armstrong", "Sales Lead", !!! ),
("Lars", "Frederiksen", "Sales Person", !!!),
("Matt", "Freeman", "Lead Engineer", !!!),
("Brett", "Reed", "Software Engineer", !!!)
("Jesse", "Michaels", "Accountant", !!!),
("Dave", "Mello", "Legal Team Lead", !!!),
("Branden", "Steineckert", "Lawyer", !!!),
("Scott", "Sturgeon", "Software Engineer", !!!),
("Alex", "Baillie", "Sales Person", !!!),
("Brad", "Logan", "Lawyer", !!!),
("Joe", "Strummer", "Punk Rock Warlord", NULL);

INSERT INTO managers (first_name, last_name, department)
VALUES
("Tim", "Armstrong", "Sales"),
("Matt", "Freeman", "Engineering"),
("Dave", "Mello", "Legal"),
("Joe", "Strummer", "Finance");
