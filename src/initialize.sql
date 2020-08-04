-- CREATE database if not exists skate_data;

-- USE skate_data;

DROP TABLE IF EXISTS spots, social, users;

CREATE TABLE users (
  User_ID INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(50) NOT NULL,
  user_password VARCHAR(100) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  city VARCHAR(50) NOT NULL,
  state VARCHAR(2) NOT NULL,
  PRIMARY KEY (User_ID)
);

CREATE TABLE spots (
  spot_id INT NOT NULL AUTO_INCREMENT,
  spot_name VARCHAR(45) NOT NULL,
  spot_address VARCHAR(60) NOT NULL,
  photo_1 VARCHAR(200) NOT NULL, 
  PRIMARY KEY (spot_id)
);

CREATE TABLE social (
  id INT NOT NULL AUTO_INCREMENT,
  User_id INT NOT NULL,
  comments VARCHAR(50),
  PRIMARY KEY (id),
  FOREIGN KEY (User_id)
  REFERENCES users (User_ID)
    ON DELETE CASCADE
);

INSERT INTO users
  (user_name, user_password, first_name, last_name, email, city, state)
VALUES
  ("skateguy123", "skatehard", "John", "Doe", "help@gmail.com", "Austin", "TX");

INSERT INTO spots
  (spot_name, spot_address, photo_1)
VALUES
  ('Red Rail', "301 W 2nd St, Austin, TX 78701", 'https://www.skatedeluxe.com/blog/wp-content/uploads/2018/09/obsctacle-guide-handrail.jpg')