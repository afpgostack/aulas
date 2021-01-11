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

### Tipos de parâmetros

```js
app.use(express.json());
app.get('/projects', (request, response) => {
    const { tittle, owner } = request.query;
    console.log(tittle);
    console.log(owner);
});
app.post('/projects', (request, response) => {
    const { tittle, owner } = request.body;
    console.log(tittle);
    console.log(owner);
});
app.put('/projects/:id', (request, response) => {
    const { id } = request.params;
    console.log(id);
});
app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;
    console.log(id);
});
```

- Adicionado a função para o express interpretar JSON
- Query Params: Filtros e paginação (Utilizado no método GET)
- Route Params: Identificar recursos (Utilizado nos métodos PUT e DELETE)
- Request Body: Conteúdo ao criar ou editar um recurso (Utilizado no método POST)

### Aplicação Funcional

```shell
yarn add uuidv4
```

```js
const { uuid } = require('uuidv4');
const projects = [];
app.get('/projects', (request, response) => {
    const { title } = request.query;
    const results = title
        ? projects.filter(project => project.title.includes(title))
        : projects;
    return response.json(results);
});
app.post('/projects', (request, response) => {
    const { title, owner } = request.body;
    const project = { id: uuid(), title, owner };
    projects.push(project);
    return response.json(project);
});
app.put('/projects/:id', (request, response) => {
    const { id } = request.params;
    const { title, owner } = request.body;
    const projectIndex = projects.findIndex(project => project.id === id);
    if (projectIndex < 0) {
        return response.status(400).json({ error: 'Project not found.'});
    }
    const project = {
        id,
        title,
        owner,
    };
    projects[projectIndex] = project;
    return response.json(project);
});
app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;
    const projectIndex = projects.findIndex(project => project.id === id);
    if (projectIndex < 0) {
        return response.status(400).json({ error: 'Project not found.'});
    }
    projects.splice(projectIndex, 1);
    return response.status(204).send();
});
```

- Adicionado a biblioteca uuidv4
- Importado a função uuid da biblioteca uuidv4
- Criado o array projects
- No método GET:
    - Alterado o return para retornar o array projects
- No método POST:
    - Criado a variável project, que recebe um uuid e as informações de title e owner do body
    - Armazenado as informações do objeto project no array projects
    - Retornado o project recem armazenado
- No método PUT:
    - Criado a variável projectIndex para percorrer o array projects e encontrar a posição do objeto com uuid requisitado na url
    - Criado uma validação retornando uma mensagem de erro caso a posição do objeto não for encontrada
    - Criado a requisição do body
    - Criado a variável project, que recebe o uuid requisitado na url, e o title e o owner do body
    - Criado método para subistituir os valores do objeto cuja posição foi encontrada dentro do array projects, pelas informações da variável project
    - Retornado o project recem alterado
- No médodo DELETE:
    - Criado a variável projectIndex para percorrer o array project e encontrar a posição do objeto com uuid requisitado na url
    - Criado uma validação retornando uma mensagem de erro caso a posição do objeto não for encontrada
    - Criado método que retira de dentro do array projects, o objeto encontrado pela sua posição
    - Retornado o status de ok
- No método GET:
    - Criado a variável para receber o title do body
    - Criado a variável results que recebe o title caso ele esteja incluído no array projects e retorna os objetos do array cujo title filtrado
    - Retornado a variável results
