// Constantes do Projeto

let enviroment = process.env.NODE_ENV || 'development';

class Constants{

    // CÓDIGOS DE RETORNO DA API
    static get succesCode()         { return 0 }
    static get errorCodeSequelize() { return 1 }
    static get errorCodeAC()        { return 2 }
    static get errorCodeOther()     { return 3 }

    // DESCRIÇÃO DOS CÓDIGOS
    static get successDesc()          { return 'Success'                     }
    static get valueNotFound()        { return 'Registro não encontrado.'    }
    static get fileExists()           { return 'Arquivo já existente'        }

    // AÇÕES DE RESPOSTA
    static get create() { return 'create' }
    static get read()   { return 'read'   }
    static get update() { return 'update' }
    static get delete() { return 'delete' }
}

// Exportar o Módulo
module.exports = Constants;