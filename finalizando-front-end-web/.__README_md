# Jornada GoStack Rocketseat

## Aulas nivel03 - Iniciando front-end web

<p align="center">
  <a href="#configurando-estrutura">Configurando estrutura</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#estilos-globais">Estilos globais</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#página-de-login">Página de login</a>
</p>

### Configurando estrutura

```shell
npx create-react-app iniciando-front-end-web --template=typescript
code iniciando-front-end-web
yarn add -D eslint
yarn eslint --init
yarn add -D eslint-plugin-react@^7.21.5 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint-plugin-import@^2.22.1 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-react-hooks@^4 @typescript-eslint/parser@latest
yarn add -D eslint-import-resolver-typescript
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
yarn start
```

```json
{
  "name": "primeiro-projeto-react",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "@types/jest": "^26.0.15",
    "@types/node": "^12.0.0",
    "@types/react": "^16.9.53",
    "@types/react-dom": "^16.9.8",
    "axios": "^0.21.1",
    "polished": "^4.1.0",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-icons": "^4.1.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.1",
    "styled-components": "^5.2.1",
    "typescript": "^4.0.3",
    "web-vitals": "^0.2.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@types/react-router-dom": "^5.1.7",
    "@types/styled-components": "^5.1.7",
    "@typescript-eslint/eslint-plugin": "4.0.1",
    "@typescript-eslint/parser": "4.0.1",
    "eslint": "^7.18.0",
    "eslint-config-airbnb": "^18.2.1",
    "eslint-config-prettier": "^7.2.0",
    "eslint-import-resolver-typescript": "^2.3.0",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-jsx-a11y": "^6.4.1",
    "eslint-plugin-prettier": "^3.3.1",
    "eslint-plugin-react": "^7.21.5",
    "eslint-plugin-react-hooks": "^4",
    "prettier": "^2.2.1"
  }
}
```
```
root = true
[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf
```

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}
```

```tsx
import React from 'react';
const App: React.FC = () => <h1>Hello World!</h1>;
export default App;
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

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#ff9900" />
    <title>GoBarber</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

- Criado o projeto com o comando npx create-react-app
- Aberto o diretório do projeto no vscode
- Configurardo o Eslint, Prettier e Editor Config
- Deletado os arquivos ./src/{App.css,App.test,index.css,logo.svg,serviceWorker.ts} e ./public/{favicon.ico,logo192.png,logo512.png,manifest.json}
- ./src/App.tsx
  - Removido as importações dos arquivos deletados
  - Transformado o componente App em formato de função
- ./src/index.tsx
  - Removido as importações dos arquivos deletados e os comentários
- ./public/index.html
  - Removido as importações dos arquivos deletados e os comentários

### Estilos globais

```shell
yarn add styled-components
yarn add -D @types/styled-components
mkdir -p ./src/styles
touch ./src/styles/global.ts
```

```ts
import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #312e38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button{
    cursor: pointer;
  }
`;
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#ff9900" />
    <title>GoBarber</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500&display=swap" rel="stylesheet" />
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

```tsx
import React from 'react';
import GlobalStyle from './styles/global';
const App: React.FC = () => (
  <>
    <h1>Hello World!</h1>
    <GlobalStyle />
  </>
);
export default App;
```

- Adicionado a biblioteca styled-components e sua tipagem como dependência de desenvolvimento
- Criado diretório: ./src/styles
- Criado arquivo: ./src/styles/global.ts
  - Importado a função createGlobalStyle da biblioteca styled-components
  - Exportado a configuração de css realizada no createGlobalStyle
- ./public/index.html
  - Gerado o link para a fonte Roboto Slab
  - Adicionado o link da fonte como último item do head
- ./src/App.tsx
  - Importado o arquivo global.ts
  - Adicionado na função de componentes App a configuração de css do GlobalStyle

### Página de login

```shell
yarn add react-icons polished
mkdir -p ./src/{assets,pages/SignIn}
touch ./src/pages/SignIn/{index.tsx,styles.ts}
```

```tsx
import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Faça seu logon</h1>
        <input placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);
export default SignIn;
```

```ts
import styled from 'styled-components';
import { shade } from 'polished';
import signInBackgroundImg from '../../assets/sign-in-background.png';
export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
    }
    input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;
      color: #f4ede8;
      &::placeholder {
        color: #666360;
      }
      & + input {
        margin-top: 8px;
      }
    }
    button {
      background: #ff9000;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #312e38;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;
      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    svg {
      margin-right: 16px;
    }
    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
```

```tsx
import React from 'react';
import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';
const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);
export default App;
```

- Adicionado as bibliotecas react-icons e polished
- Criado diretório: ./src/assets
  - Baixado o arquivo sign-in-background.png
  - Baixado o arquivo logo.svg
- Criado diretórios: ./src/pages/SignIn
- Criado arquivo: ./src/pages/SignIn/index.tsx
  - Importado a biblioteca react, os styles, o arquivo logo.svg e o ícone FiLogIn
  - Criado a função de componente SignIn
    - Criado a tag Container
      - Criado a tag Content
        - Criado a tag img com a imagem logo.svg
        - Criado a tag form com as tags h1, input, button e a
        - Criado a tag a
      - Criado a tag Background
- Criado arquivo: ./src/pages/SignIn/styles.ts
  - Importado a função styled da biblioteca styled-components, a função shade da biblioteca polished e a imagem sign-in-background.png
  - Criado a configuração css Container, Content e Background como uma div
- ./src/App.tsx
  - Importado o diretório SignIn e utilizado na função de componente App
