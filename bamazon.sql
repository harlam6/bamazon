DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(30) NULL,
  department_name VARCHAR(30) NULL,
  price decimal (10, 2) NULL,
  stock_quantity INTEGER(45) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Noodles", "food", "1.50", "9000");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("PS4", "electronics", "350", "4");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Basketball", "sports", "10", "15");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Banana", "food", "0.5", "200");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("PokemonCards", "toys", "6", "50");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Headphones", "electronics", "20", "19");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tents", "sports", "100", "3");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Beer", "food", "21", "9000");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BluRay", "electronics", "100", "30");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Girlfriend", "dream", "0.01", "0");

SELECT * FROM products;