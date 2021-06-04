DROP TABLE IF EXISTS votes;
DROP TABLE IF EXISTS candidates;
DROP TABLE IF EXISTS parties;




CREATE TABLE department (
    id NOT NULL INT AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30) NOT NULL,
);

CREATE TABLE position (
    id NOT NULL INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary NOT NULL DECIMAL(),
    dept_id NOT NULL INT,
    FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE employee (
    id NOT NULL INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES position(id) ON DELETE SET NULL,
    is_mgr BOOLEAN,
    IF is_mgr = true THEN 
        statements;
    END IF;
    manager_id INT
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