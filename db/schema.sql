DROP DATABASE IF EXISTS iBid;

CREATE DATABASE iBid;

USE iBid;

CREATE TABLE bid_items (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(200),
  min_cost FLOAT(20,2),
  curr_bid FLOAT(20,2),
  ends_in INT,
  image_url VARCHAR(255),
  PRIMARY KEY(id)
);
