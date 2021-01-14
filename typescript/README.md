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

### Quando adicionar tipos

```ts
import { Request, Response } from 'express';
export function helloWorld(request: Request, response: Response) {
    return response.json({ message: 'Hello World' });
}
```

```ts
import express from 'express';
import { helloWorld } from './routes'
const app = express();
app.get('/', helloWorld)
app.listen(3333);
```

- Criado arquivo: /src/routes.ts
- Criado e exportado a função helloWorld no arquivo routes.ts com a mensagem
- Importado no index.ts a função helloWorld do routes.ts e utilizado a função helloWorld no lugar da mensagem
- Importado no routes.ts os tipos Request e Response do pacote express
- Adicionado na função helloWorld do arquito routes.ts, os tipos Request e Response

> - No typescript sempre que for necessário adicionar tipo, o VSCode irá avisar passando o mouse em cima do parâmetro

### Tipando objetos e vetores

```ts
interface TechObject {
    title: string;
    experience: number;
}
interface CreateUserData {
    name?: string;
    email: string;
    password: string;
    techs: Array<string | TechObject>;
}
export default function createUser({ name, email, password }: CreateUserData) {
    const user = {
        name,
        email,
        password,
    }
    return user;
}
```

```ts
import { Request, Response } from 'express';
import createUser from './services/CreateUser';
export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'email@dominio.com',
        password: '123abc',
        techs: [
            'Node.js',
            'ReactJS',
            'React Native',
        ],
    });
    return response.json({ message: 'Hello World' });
}
```

- Criado diretório: ./src/services
- Criado arquivo: /src/services/CreateUser.ts
- Criado a função createUser no arquivo CreateUser.ts
- Criado no arquivo CreateUser.ts a interface CreateUserData para definir os tipos de dados das variáveis da função createUser
- Criado no arquivo CreateUser.ts a interface TechObject para definir os tipos de dados do array techs
- Importado no arquivo routes.ts a função createUser
- Criado no arquivo routes.ts a variável user chamando a função createUser, passando os dados das variáveis da função
