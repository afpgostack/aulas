# Jornada GoStack Rocketseat

## Aulas nivel02 - Primeiro projeto com Node.JS

### Configurando estrutura

```shell
yarn init -y
yarn add express
yarn add -D typescript
yarn tsc --init
yarn add -D @types/express
yarn add -D ts-node-dev
yarn dev:server
```

```json
"outDir": "./dist",
"rootDir": "./src",
```

```json
"scripts": {
    "build": "tsc",
    "dev:server": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"
},
```

```js
import express from 'express';
const app = express();
app.get('/', (request, response) => {
    return response.json({ message: 'Hello GoStack' });
});
app.listen(3333, () => {
    console.log('Server started on port 3333!');
});
```

- Criado diretórios: /projects/aulas/nivel02/primeiro-projeto-node
- Aberto o VSCode no diretório primeiro-projeto-node
- Iniciado o projeto com o yarn
- Adicionado o express
- Adicionado o typescript como dependência de desenvolvimento
- Criado o arquivo tsconfig.json com o comando yarn tsc --init
- Criado diretório: ./src
- Criado arquivo: /src/server.ts
- Alterado o arquivo tsconfig.json descomentando a linha "outDir" com o parâmetro "./dist" e a linha "rootDir" com "./src"
- Adicionado a lib @types/express como dependência de desenvolvimento
- Importado o express no arquivo server.ts
- Criado no arquivo server.ts a variável app utilizando o express para inicar a aplicação na porta 3333 com uma mensagem de iniciado
- Criado no arquivo server.ts a rota raíz com uma mensagem em json
- Adicionado o pacote ts-node-dev como dependência de desenvolvimento
- Criado no arquivo package.json os scripts build e dev:server
- Executado yarn dev:server para iniciar a aplicação

### Debugando NodeJS

```shell
yarn dev:server
```

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "attach",
            "protocol": "inspector",
            "restart": true,
            "name": "Debug",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "outFiles": [
                "${workspaceFolder}/**/*.js"
            ]
        }
    ]
}
```

```json
"dev:server": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts"
```

```js
import { Router } from 'express';
const routes = Router();
routes.get('/', (request, response) => {
    return response.json({ message: 'Hello GoStack' });
});
routes.post('/users', (request, response) => {
    const { name, email } = request.body;
    const user = {
        name,
        email,
    };
    return response.json(user);
});
export default routes;
```

```js
import express from 'express';
import routes from './routes';
const app = express();
app.use(express.json());
app.use(routes);
app.listen(3333, () => {
    console.log('Server started on port 3333!');
});
```

- Aberto a sessão de debug do VSCode
- Criado um novo arquivo json
- Adicionado a flag --inspect no script dev:server do arquivo package.json
- Iniciado a aplicação com yarn dev:server
- Clicado no play do debug
- Criado diretório: ./src/routes
- Criado arquivo: /src/routes/index.ts
- Removido a rota raíz do arquivo server.ts, deixando a criação do app em express
- Adicionado a rota raíz no arquivo index.ts
- Criado no arquivo server.ts a rota /users com o método post para debugar a requisição vinda do body do insomnia
- Criado as expressões request.body e request.query na sessão de debug do VSCode
- Adicionado no arquivo index.ts, o breakpoint na linha request.body
- Enviado o método post pelo insomnia
