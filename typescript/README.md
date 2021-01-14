# Jornada GoStack Rocketseat

## Aulas nivel01 - TypeScript

### Configurando o projeto

```shell
yarn init -y
yarn add typescript -D
yarn add express
yarn add -D @types/express
yarn tsc --init
yarn tsc
node dist/index.js
```

```ts
import express from 'express';
const app = express();
app.get('/', (request, response) => {
    return response.json({ message: 'Hello World' });
})
app.listen(3333);
```

- Criado diretório: projects/aulas/nivel01/typescript
- Iniciado o projeto dentro do diretório typescrip com o comando yarn e aberto no VSCode
- Adicionado o typescript ao projeto como dependência de desenvolvimento
- Criado diretório: ./src
- Criado arquivo: /src/index.ts
- Adicionado o express ao projeto
- Adicionado ao projeto o pacote @types/express como dependência de desenvolvimento
- Importado o express no arquivo /src/index.ts
- Criado o app e adicionado a rota raíz para exibir uma mensagem em json
- Criado o arquivo tsconfig.json com o comando yarn tsc --init
- Alterado o arquivo tsconfig.json descomentando a linha "outDir" com o caminho "./dist"
- Executado o comando yarn tsc para converter os arquivos .ts em .js no diretório ./dist
- Executado o comando node para iniciar a aplicação

> - No diretório ./dist é onde ficarão os arquivos .js após a compilação do typescript
