INSERT INTO departments (dept_name)
VALUES
("Sales"),
("Engineering"),
("Finance"),
("Legal");

INSERT INTO positions (job_title, is_mgr, salary, dept_id)
VALUES
("Sales Lead", TRUE, 100000, 1),
("Sales Person", FALSE, 80000, 1),
("Lead Engineer", TRUE, 150000, 2),
("Software Engineer", FALSE, 120000, 2),
("Accountant", FALSE, 125000, 3),
("Legal Team Lead", TRUE, 250000, 4),
("Lawyer", FALSE, 190000, 4),
("Punk Rock Warlord", TRUE, 500000, 3);

INSERT INTO employees (first_name, last_name, position_id)
VALUES
("Tim", "Armstrong", 1),
("Lars", "Frederiksen", 2),
("Matt", "Freeman", 3),
("Brett", "Reed", 4),
("Jesse", "Michaels", 5),
("Dave", "Mello", 6),
("Branden", "Steineckert", 7),
("Scott", "Sturgeon", 4),
("Alex", "Baillie", 2),
("Brad", "Logan", 7),
("Joe", "Strummer", 8);