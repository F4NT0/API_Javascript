/*
* Módulo que pega os Dados do Banco de Dados
*
*/
module.exports = (sequelize,DataType) => {
    let teste = sequelize.define("testes", { // no define criamos o nome da tabela
        id:{
            type: DataType.INTEGER, //tipo da coluna
            primaryKey: true, // usamos essa função para definirmos essa coluna como chave primária
            autoIncrement: true //toda vez que for criado dados novos ele cria o numero sozinho
        },
        tipo_calculo: {
            type: DataType.STRING,
        },
        valor: {
            type: DataType.INTEGER
        }
    });
    return teste;
};