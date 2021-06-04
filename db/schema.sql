DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS positions;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS managers;




CREATE TABLE departments (
    id NOT NULL INT AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE positions (
    id NOT NULL INT AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(30) NOT NULL,
    -- I think I need `DEFAULT: false` here and how to validate if `is_mgr` === true, creating an id
    is_mgr BOOLEAN,
    salary NOT NULL DECIMAL(),
    dept_id NOT NULL INT,
    FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE employees (
    id NOT NULL INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    position_id INT NOT NULL,
    FOREIGN KEY (position_id) REFERENCES position(id) ON DELETE SET NULL,
    manager_id INT
);

CREATE TABLE managers (
    id NOT NULL INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
);

-- CREATE TABLE votes (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     voter_id INT NOT NULL,
--     candidate_id INT NOT NULL,
--     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
--     CONSTRAINT uc_voter UNIQUE (voter_id),
--     CONSTRAINT fk_voter FOREIGN KEY (voter_id) REFERENCES voters(id) ON DELETE CASCADE,
--     CONSTRAINT fk_candidate FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON DELETE CASCADE
-- );

-- 6/3, 10:13PM. current idea is in `employee` table just declare a boolean for `is_mgr`. Connect that table to a manager id table 