-- SQLite
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS products;

CREATE TABLE IF NOT EXISTS users (
    email varchar(50) NOT NULL UNIQUE,
    firstname varchar(50) NOT NULL,
    lastname varchar(50) NOT NULL,
    password varchar(128) NOT NULL,
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL);

CREATE TABLE IF NOT EXISTS products (
    name varchar(128) NOT NULL,
    description varchar(50) NOT NULL,
    price varchar(5) NOT NULL,
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL);

INSERT INTO users (email, firstname, lastname, password) VALUES
    ('h18donme@du.se', 'Donika','Mehmeti', 'abc123'),
    ('h18hanka@du.se', 'Hanna','Karlsson', 'oik987');

INSERT INTO products (name, description, price) VALUES
    ('hoodie', 'a ordinary hoodie','200kr'),
    ('tshirt', 'just a tshirt','300kr');