# Backend

É um projeto desenvolvido com o intuito de conseguir filtrar usuários em sua plataforma, utilizando autenticações, e CRUD, com integração do banco de dados mongo.
O administrador do sistema será capaz de editar qualquer usuário, desativar ou ativar o usuário da plataforma.
O usuário é capaz de alterar suas informações e visualizar a mesma.
## Começando

Para executar o projeto é necessario ter todas as dependencias

### Requisitos

 - Node

 
### Iniciando 
```
$ git clone https://github.com/junior-apostolo/mind-backend.git
```
```
$ cd mind-backend
```
```
$ npm install
```
```
$ nodemon /src/index.js 
```


##Exemplos de testes

### Rotas

 - http://localhost:3000/projects/users [GET]
 
 - http://localhost:3000/auth/autenticated (Utilizada para se autenticação no sistema)[POST]
 
 - http://localhost:3000//auth/register (Utilizada para criar um novo usuário no sistema)[POST]
 
 - http://localhost:3000/projects/users/:id (Utilizada para atualização de usuário) [PUT]
 
 



## Autores

* **Sergio Apostolo**

## Licença
 
 -Nenhuma

## Agradecimentos

* Mind Consulting
