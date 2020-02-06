## Exemplo de API criada do Inicio

## Passo 1

* Instale o NPM no seu computador:
    * `sudo apt install npm`
* Instale o Node usando o programa `n`:
    * `sudo npm install -g n`
    * `sudo n <versão do Node desejado>` (ex: `n 10.0.0`)
*  Depois inicie o npm dentro deste Diretório:
    * `npm init`
* Defina os Dados necessários para o arquivo **package.json**

## Passo 2

* Instale os primeiros programas necessários ao Programa
    * Baixe o **express** para telas Web
    * Baixe o **body-parser** para poder construir os .json que serão lidos
    * Baixe o **morgan** para gerenciar
    * `sudo npm install --save express body-parser morgan` (--save salva a versão no package.json)

* Crie o arquivo **app.js** no Diretório Principal


## Passo 3

* Chame os programas no arquivo **app.js**, da seguinte forma:

```javascript
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
```

* Inicie o Express no seu programa:

```javascript
const app = express();
```

* Agora iremos mexer no express, das seguintes formas:

```javascript

// Requests aparecendo no Console
app.use(logger('dev'));

// Definindo o Body-Parser no seu projeto

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));
```

* Agora iremos colocar uma mensagem para que apareça sempre que funcione o Projeto

```javascript
app.get('*', (requisition,response) => response.status(200).send({
    message: 'Deu Status 200 OK '
}));
```

* Iremos definir a Porta que irá sair as informações

```javascript
const port = process.env.PORT || 4000;
app.set('port', port);
```

* Agora criamos o servidor na porta **4000** definidos anteriormente

```javascript
const server = http.createServer(app);
server.listen(port);
```

* Depois definido iremos exportar todo o app externamente, para quando rodar rode esse arquivo:

```javascript
module.exports = app;
```

* Clique para iniciar o Projeto com:
    * `sudo npm start`
    
    
### Passo 4

* Agora iremos instalar o **Nodemon**, que inicia automatico a cada modificação na API
    * `sudo npm install nodemon`

* Toda vez que quiser iniciar o programa, inicie com `nodemon`

### Passo 5

* Agora temos que ter uma instalação do MYSQL, mas isso fica para outro momento
* tenha o MYSQL configurado com o nome `root` e a senha `senha` para facilitar

### Passo 6

* Agora iremos instalar o Sequelize, que serve para vincular o Banco de Dados sql com o Projeto

* Iremos instalar o Programa **sequelize-cli**, que nos da comando de terminal do sequelize
    * `sudo npm install --save-dev sequelize-cli`


* Depois iremos instalar o sequelize mesmo:
    * `sudo npm install --save sequelize`
    
* E o programa do MYSQL para usar no nosso projeto
    * `sudo npm install --save mysql2`
    

* Agora iremos iniciar o Sequelize, que irá nos dar um conjunto de Diretórios para nos Ajudar a se organizar
    * `sequelize init` (sem sudo)
    
* O programa Ficou mais ou menos assim

```text
API_javascript
|_app.js
|_.gitignore
|_package.json
|_package_lock.json
|_README.md
|
|--config
    |_config.json

|--migrations
|--models
    |_index.js

|--node_modules
|-seeders
```

### Passo 7

* Agora criamos um Modelo usando Sequelize com seus atributos, pelo terminal:
    * `sequelize model:create --name nomeModelo --atributes atributos:tipo`
    * `sequelize model:create --name Teste --attributes id:integer`
    
* Depois de rodar ele vai conseguir criar no Diretório `models/teste.ts`

```javascript
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teste = sequelize.define('Teste', {
    id: DataTypes.INTEGER
  }, {});
  Teste.associate = function(models) {
    // associations can be defined here
  };
  return Teste;
};
```