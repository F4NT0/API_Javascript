## Exemplo de API

* Estou tentando criar uma API REST com Typescript.

### Construcao do Projeto:

* A API foi construida no Padrao de Arquitetura MVC
* **Model-View-Controller** tambem conhecido como **MVC** e um Modelo com a seguinte construcao:
    * Manipulacao dos Dados (**Model**)
    * Interacao com o Usuario (**View**)
    * Camada de Controle (**Controller**)
    * Rotas do Projeto (**Routes**)
 * **Model** = Acesso e Manipulacao de Dados vindo do Banco de Dados
 * **View** = E a Apresentacao para o usuario dos dados pegos no Model, por exemplo, os Arquivos HTML/CSS
 * **Controller** = Responsavel para conectar o Model no View e Vice-Versa, Recebe os requerimentos dos Usuarios, vai
 no Model pegar os dados e renderizar nas Views as Vizualizacoes para o Usuario.
 * **Router** = Onde e criado as rotas dos enderecos que o usuario pode acessar ou ate conexao com os metodos de um 
 Controller
 
 * O projeto esta construido da seguinte forma:
 
 ```text
API_Javascript
|
|-> config
|-> controllers
|-> DAO
|-> helpers
|-> models
|-> routes
```

### Programas instalados:

Programa|Para que serve|
|---|---|
`sudo apt-get install npm`| Serve para instalar NPM no projeto
`sudo npm install n`| Serve para poder instalar o instalador do node
`sudo n 10.0.0`| Vai instalar o Node 10.0.0 no projeto
`sudo npm install sequelize`| Vai instalar o Sequelize no projeto
`sudo npm install nodemon`| Vai instalar o nodemon, que serve para atualizar automatico o projeto