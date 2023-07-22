CREATE DATABASE german_food

create table usuario (
    id serial primary key,
    nome varchar NOT NULL,
    email varchar NOT NULL,
    senha varchar NOT NULL
);

create table food (
    id serial primary key,
    produto varchar NOT NULL, 
    preco int NOT NULL
);