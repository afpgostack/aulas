# Jornada GoStack Rocketseat

## Aulas nivel01

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
