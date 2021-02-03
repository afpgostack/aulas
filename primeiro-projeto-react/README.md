# Jornada GoStack Rocketseat

## Aulas nivel03 - Primeiro projeto com React

<p align="center">
  <a href="#criando-projeto">Criando projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#criando-rotas">Criando rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#utilizando-styled-components">Utilizando Styled Components</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#estilizando-dashboard">Estilizando dashboard</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#conectando-a-api">Conectando a API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#lidando-com-erros">Lidando com erros</a>
</p>

### Criando projeto

```shell
npx create-react-app primeiro-projeto-react --template=typescript
yarn add -D eslint
yarn eslint --init
yarn add -D eslint-plugin-react@^7.21.5 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint-plugin-import@^2.22.1 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-react-hooks@^4 @typescript-eslint/parser@latest
yarn add -D eslint-import-resolver-typescript
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
yarn start
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
```

```tsx
import React from 'react';
function App() {
  return <h1>Hello Worlds</h1>;
}
export default App;
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#3A3A3A" />
    <title>Github Explorer</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

- Criado diretórios: /projects/aulas/nivel03/primeiro-projeto-react/
- Criado o novo projeto react com o comando npx create-react-app
- Aberto o VSCode no diretório primeiro-projeto-react
- Instalado no VSCode a extensão EditorConfig for VS Code
- Gerado na raíz do projeto o arquivo .editorconfig
- Modificado as opções do arquivo .editorconfig
  - indent_size = 2
  - trim_trailing_whitespace = true
  - insert_final_newline = true
- Instalado no VSCode a extensão ESLint
- Pressionado Ctrl+Shift+P e aberto o aquivo JSON de configuração do VSCode para adicionar a opção de executar o ESLint ao salvar um arquivo
  `"editor.codeActionsOnSave": {
    `"source.fixAll.eslint": true
  `}
- Removido do arquivo package.json as linhas do eslintConfig
- Adicionado o eslint como dependencia de desenvolvimento
- Iniciado o eslint no projeto e respondido as questões para o projeto react
- Adicionado as dependencias do ESLint sugeridas em desenvolvimento
- Criado o arquivo .eslintignore na raíz do projeto
  `**/*.js
  `node_modules
  `build
  `/src/react-app-env.d.ts
  `/src/reportWebVitals.ts
- Adicionado a linha abaixo no arquivo .eslintrc.json em extends
  `"plugin:@typescript-eslint/recommended"
- Adicionado a linha abaixo no arquivo .eslintrc.json em plugins
  `"react-hooks"
- Adicionado as linhas abaixo no arquivo .eslintrc.json em rules
  `"react-hooks/rules-of-hooks": "error",
  `"react-hooks/exhaustive-deps": "warn",
  `"react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
  `"import/prefer-default-export": "off",
  `"camelcase": "off",
  `"@typescript-eslint/ban-types": "off",
  `"import/extensions": [
  `  "error",
  `  "ignorePackages",
  `  {
  `    "ts": "never",
  `    "tsx": "never"
  `  }
  `]
- Adicionado as linhas abaixo no arquivo .eslintrc.json após as rules
  `"settings": {
  `  "import/resolver": {
  `    "typescript": {}
  `  }
  `}
- Adicionado a dependencia eslint typescript em desenvolvimento
- Fechado o VSCode e aberto novamente no diretório do projeto
- Adicionado as depencencias do Prettier em desenvolvimento
- Adicionado as linhas abaixo no arquivo .eslintrc.json em extends
  `"prettier/@typescript-eslint",
  `"plugin:prettier/recommended"
- Adicionado a linha abaixo no arquivo .eslintrc.json em plugins
  `"prettier"
- Adicionado a linha abaixo no arquivo .eslintrc.json em rules
  `"prettier/prettier": "error"
- Criado o arquivo prettier.config.js na raíz do projeto
- Criado o arquivo .eslintignore na raíz do projeto
- Adicionado a linha abaixo no arquivo .eslintignore
  `/*.js
- Fechado o VSCode e aberto novamente no diretório do projeto
- Removido do diretório ./src os arquivos App.css, App.test.tsx, index.css, logo.svg, reportWebVitals.ts
- Removido no arquivo index.tsx os comentários e as importações dos arquivos removidos
- Removido no arquivo App.tsx todo o conteúdo da div App e as importações dos arquivos removido, e adicionado um Hello World
- Removido do diretório ./public os arquivos favicon.ico, logo192.png, logo512.png e manifest.json
- Removido no arquivo index.html os comentários e as importações dos arquivos removidos
- Executado yarn start para iniciar a aplicação

### Criando rotas

```shell
yarn add react-router-dom
yarn add -D @types/react-router-dom
```

```tsx
import React from 'react';
const Dashboard: React.FC = () => {
  return <h1>Dashboard</h1>;
};
export default Dashboard;
```

```tsx
import React from 'react';
const Repository: React.FC = () => {
  return <h1>Repository</h1>;
};
export default Repository;
```

```tsx
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository" component={Repository} />
  </Switch>
);
export default Routes;
```

```tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
export default App;
```

- Adicionado a biblioteca para criação de rotas
- Adicionado os tipos da biblioteca de rotas
- Criado diretórios: ./src/pages/Dashboard/
- Criado arquivo: /src/page/Dashboard/index.tsx
  - Importado a biblioteca do react
  - Criado a função de componente Dashboard que retorna um título
- Criado diretório: ./src/pages/Repository/
- Criado arquivo: /src/pages/Repository/index.tsx
  - Importado a biblioteca do react
  - Criado a função de componente Repository que retorna um título
- Criado diretório: ./src/routes/
- Criado arquivo:: /src/routes/index.tsx
  - Importado a biblioteca do react e as funções Switch e Route da biblioteca de rotas
  - Importado os diretórios Dashboard e Repository
  - Criado a função de componente Routes utilizando as funções Switch e Route para as rotas / e /repository
- Importado no arquivo App.tsx a função BrowserRouter da biblioteca de rotas e o diretório routes
  - Alterado a função App para função de componente retornando as rotas dentro do componente BrowserRouter

### Utilizando Styled Components

```shell
yarn add styled-components
yarn add -D @types/styled-components
```

```ts
import styled from 'styled-components';
export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;
```

```tsx
import React from 'react';
import { Title } from './styles';
const Dashboard: React.FC = () => {
  return <Title>Explore repositórios no Github</Title>;
};
export default Dashboard;
```

```ts
import { createGlobalStyle } from 'styled-components';
import githubBackground from '../assets/github-background.svg';
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #f0f0f5 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 16px Roboto, sans-serif;
  }
  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
  button {
    cursor: pointer;
  }
`;
```

```tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';
const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);
export default App;
```

- Adicionado a biblioteca Styled Components e a sua tipagem como dependêcia de desenvolvimento
- Instalado o VSCode a extensão vscode-styled-components
- Criado arquivo: /src/pages/Dashboard/styles.ts
  - Importado a biblioteca Styled Components
  - Criado a variável Title e configurado o css para h1
- Importado no arquivo index.tsx do Dashboard, a variável Title do arquivo styles.ts
- Importado no arquivo index.html a fonte Roboto
- Criado diretório: ./src/assets/
  - Baixado o arquivo github-backgroud.svg no diretório assets
- Criado diretório: ./src/styles/
- Criado arquivo: /src/styles/global.ts
  - Importado o componente createGlobalStyle da biblioteca Styled Components e a imagem github-background.svg
  - Exportado o css do createGlobalStyle
- Importado no arquivo App.tsx o arquivo global.ts
  - Adicionado o css do global.ts na função App

### Estilizando dashboard

```shell
yarn add polished react-icons
```

```ts
import styled from 'styled-components';
import { shade } from 'polished';
export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;
export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;
export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    & + a {
      margin-top: 16px;
    }
    &:hover {
      transform: translateX(10px);
    }
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    div {
      margin-left: 16px;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
```

```tsx
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';
const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/49215447?s=460&u=78e7059548bb7614039927ee0a5c7ffc5b7e4b9f&v=4"
            alt="Alisson Fernandes"
          />
          <div>
            <strong>É o repositório.</strong>
            <p>É a descrição.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/49215447?s=460&u=78e7059548bb7614039927ee0a5c7ffc5b7e4b9f&v=4"
            alt="Alisson Fernandes"
          />
          <div>
            <strong>É o repositório.</strong>
            <p>É a descrição.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};
export default Dashboard;
```

- Adicionado as bibliotecas polished e react-icons
- Baixado o arquivo logo.svg no diretório assets
- Ajustado no arquivo styles.ts do Dashboard o css do h1
  - Criado a variável Form e configurado o css para form, input, button
  - Importado a função shade da biblioteca polished e utilizado no houver do botão
  - Criado a variável Repositories e configurado o css para div, a, img,
- Importado no arquivo index.tsx do Dashboard a imagem logo.svg e adicionada na função de componente Dashboard
  - Importado o css Form e Repositories do arquivo styles.ts e adicionado os componentes Form e Repositories na função de componente Dashboard
  - Importado a função FiChevronRight da biblioteca react-icon/fi e utilizado no componente Repositories

### Conectando a API

```shell
yarn add axios
```

```ts
import axios from 'axios';
const api = axios.create({
  baseURL: 'http://api.github.com/',
});
export default api;
```

```tsx
import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';
interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}
const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);
  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const response = await api.get<Repository>(`repos/${newRepo}`);
    const repository = response.data;
    setRepositories([...repositories, repository]);
    setNewRepo('');
  }
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};
export default Dashboard;
```

```ts
//...
div {
  margin: 0 16px;
  flex: 1;
//...
```

- Adicionado a biblioteca axios
- Criado diretório: ./src/services/
- Criado arquivo: /src/services/api.ts
- Importado no arquivo api.ts a biblioteca axios
  - Criado a variável api utilizando o método create do axios passando a url da api do github
- Importado no arquivo index.tsx do dashboard o arquivo api.ts e as funções useState e FormEvent da biblioteca react
  - Criado o array com a variável newRepo e a função setNewRepo utilizando a função useState com o valor inicial vazio
  - Utilizado no input do formulário a variável newRepo para armazenar os dados que foram digitado, e a variável setNewRepo para alterar o valor do estado com o valor do evento
  - Criado a interface Repository configurando a tipagem para full_name, description, login e avatar_url
  - Criado o array com a variável repositories e a função setRepositories utilizando a função useState do tipo Repository para armazenar o estado dos dados
  - Criado a função assíncrona handleAddRepository recebendo os valores do evento através da função FormEvent, e utilizada no Form como onSubmit
    - Criado o evento para não exibir os dados em tela
    - Criado a variável response que faz a chamada à api em await com o método get tipado como Repository, recebendo os dados retornados pela busca referente ao valor da variável newRepo
    - Criado a variável repository que recebe os dados da variável response
    - Chamado a função setRepositories para atualizar o estado do array repositories, com os dados já existentes no array adicionando os novos dados
    - Chamado a função setNewRepo passando o valor vazio para limpar o que foi digitado no formulário
  - Adicionado no componente Repositories a função map do array repositories para exibir em tela os dados que estão no  array
- Alterado no arquivo styles.ts do dashboard o css da div do componente Repository para exibir melhor a descrição

### Lidando com erros

```tsx
//...
import { Title, Form, Repositories, Error } from './styles';
//...
const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);
  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }
    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    }
  }
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
//...
```

```ts
import styled, { css } from 'styled-components';

import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}
//...
export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}
...`
export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
//...
```

- Criado no arquivo index.tsx do dashboard o estado com a variável inputError e a função setInputError
  - Criado na função handleAddRepository a verificação se a variável newRepo está vazia, se sim, executa a função setInputError com uma mensagem
  - Adicionado try com as variáveis response e repository, e as funções setRepositories, setNewRepocatch e setInputError vazio, e o catch executanto a função setInputError com uma mensagem
  - Importado o estilo Error
  - Adicionado no return o componente inputError carregando o estilo Error
  - Adicionado no Form a propriedade hasError verificando se a variável inputError está truthy ou falsy
- Criado no arquivo styles.ts do dashboard o css Error
  - Criado a interface FormProps passando o tipo boolean para hasError, passando o FormProps no estilo do Form
  - Importado a função css da biblioteca styled-components
  - Adicionado no estilo do input o css para o hasError
