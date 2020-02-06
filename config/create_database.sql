-- COMANDO PARA CRIAR UM SCHEMA
CREATE SCHEMA `fantoapi` ;

-- SELECIONANDO A TABELA TESTES
SELECT * FROM fantoapi.testes;

-- Adicionando um teste
INSERT INTO `fantoapi`.`testes` (`id`, `tipo_calculo`, `valor`, `createdAt`, `updatedAt`) VALUES ('1', 'Multiplicação', '200', '2010-10-10 00:00:00', '2010-10-10 00:00:00');
