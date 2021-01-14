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
