# Jornada GoStack Rocketseat

## Aulas nivel03 - Primeiro projeto com React

<p align="center">
  <a href="#criando-projeto">Criando projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#criando-rotas">Criando rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#utilizando-styled-components">Utilizando Styled Components</a>
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
  - Criado a variável Title e configuraco o css para h1
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
