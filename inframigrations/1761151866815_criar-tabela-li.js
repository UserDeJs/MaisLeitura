/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
pgm.sql(`
CREATE TABLE livro(
  
  numrero_paginas INTEGER,
  autor VARCHAR(255),
  titulo VARCHAR(100) NOT NULL,
  genero VARCHAR(100) NOT NULL,
  isbm TEXT,
  resumo TEXT,
  imagem_capa TEXT,
  editora VARCHAR(250),
  disponibilidade BOOLEAN DEFAULT TRUE,
  tags TEXT,
  preco NUMERIC(10,2) DEFAULT 0.0

)
`)

};


/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
  pgm.sql(`
  DROP TABLE livro;
  `);
}

