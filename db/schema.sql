DROP TABLE IF EXISTS positions;
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS employees;

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE positions (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(30) NOT NULL,
    is_mgr BOOLEAN,
    salary DECIMAL(8,2),
    dept_id INTEGER,
    reports_to INTEGER,
    FOREIGN KEY (dept_id) REFERENCES departments(id) ON DELETE SET NULL,
    CONSTRAINT sr_fk_emp_man FOREIGN KEY (reports_to) REFERENCES positions(id) ON DELETE SET NULL
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    position_id INTEGER NOT NULL
);