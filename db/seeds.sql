INSERT INTO departments (dept_name)
VALUES
("Sales"),
("Engineering"),
("Finance"),
("Legal");

INSERT INTO positions (job_title, is_mgr, salary, dept_id, reports_to)
VALUES
("Punk Rock Warlord", TRUE, 500000, 3, NULL),
("Sales Lead", TRUE, 100000, 1, 1),
("Lead Engineer", TRUE, 150000, 2, 1),
("Legal Team Lead", TRUE, 250000, 4, 1),
("Sales Person", FALSE, 80000, 1, 2),
("Software Engineer", FALSE, 120000, 2, 3),
("Lawyer", FALSE, 190000, 4, 4),
("Accountant", FALSE, 125000, 3, 1);

INSERT INTO employees (first_name, last_name, position_id)
VALUES
("Joe", "Strummer", 1),
("Tim", "Armstrong", 2),
("Lars", "Frederiksen", 3),
("Matt", "Freeman", 4),
("Brett", "Reed", 5),
("Jesse", "Michaels", 6),
("Dave", "Mello", 7),
("Branden", "Steineckert", 8),
("Scott", "Sturgeon", 5),
("Alex", "Baillie", 6),
("Brad", "Logan", 7);