# Jornada GoStack Rocketseat

## Aulas nivel01 - Backend

### Criando projeto Node

```shell
yarn init -y
yarn add express
node src/index.js
```

```js
const express = require('express');
const app = express();
app.get('/', (request, response) => {
    return response.json({ message: 'Hello World!' });
});
app.listen(3333);
```

- Criado diretórios: projects/nivel01/backend
- Aberto VSCode no diretório backend
- Iniciado o projeto com o yarn
- Criado o diretório: ./src
- Criado o arquivo: src/index.js
- Adicionado a dependecia express
- Código javascript no arquivo index.js
- Executado a aplicação com o node
- Criado os arquivos README.md e .gitignore

### Configurando Nodemon

```shell
yarn add nodemon -D
yarn dev
```

```scripts
"main": "src/index.js",
"scripts": {
    "dev": "nodemon"
},
```

```js
app.get('/', (request, response) => {
    return response.json({ message: 'Hello GoStack!' });
});
app.listen(3333, () => {
    console.log('Back-end started!');
});
```

- Adicionado a dependencia de desenvolvimento nodemon
- Alterado a linha main do arquivo package.json
- Criado o script dev no arquivo package.json
- Executado a aplicação utilizando o comando yarn dev
- Alterado a mensagem json
- Adicionado mensagem no console log ao iniciar a aplicação

### Médodos HTTP

```js
app.get('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});
app.post('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ]);
});
app.put('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3',
    ]);
});
app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 3',
    ]);
});
```

- Adicionado no index.js os métodos HTTP: GET, POST, PUT e DELETE