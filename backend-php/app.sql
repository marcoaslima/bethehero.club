create database bethehero;
use bethehero;

create table ngos (
    id VARCHAR(11) NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(60) NOT NULL,
    whatsapp VARCHAR(20) NOT NULL,
    city VARCHAR(60) NOT NULL,
    uf VARCHAR(2) NOT NULL
);

create table incidents(
    id INTEGER(11) PRIMARY KEY AUTO_INCREMENT,
    ngo_id VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    value DECIMAL(20,2) NOT NULL,
    description VARCHAR(255) NOT NULL
);