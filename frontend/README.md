# Jornada GoStack Rocketseat

## Aulas nivel01 - Frontend

### Configurando Babel

```shell
yarn init -y
yarn add react react-dom
yarn add @babel/core @babel/cli @babel/preset-env @babel/preset-react webpack webpack-cli
yarn babel src/index.js --out-file public/bundle.js
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReactJS</title>
</head>
<body>
    <div id="app"></div>
    <script src="./bundle.js"></script>
</body>
</html>
```

```js
module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react'
    ],
};
```

```js
const soma = (a, b) => {
    return a + b;
}
console.log(soma(1, 3));
```

- Criado diretórios: projects/aulas/nivel01/frontend
- Aberto VSCode no diretório frontend
- Iniciado o projeto com o yarn
- Criado os diretórios: ./src e ./public
- Adicionado as dependêcias react e react-dom
- Criado o arquivo: public/index.html
- Código html no arquivo index.html
- Adicionado as dependências do babel e webpack
- Criado o arquivo: ./babel.config.js
- Exportados os módulos de preset no arquivo babel.config.js
- Criado o arquivo: src/index.js
- Criado uma função de soma no arquivo index.js que retorna o valor no console
- Convertido o index.js utilizando yarn babel para criar o arquivo public/bundle.js
- Adicionado o caminho do bundle.js para ser executado no index.html
- Aberto o arquivo index.html no navegador e inspecionado a página com o resultado da soma

> - Babel: Converter (transpilar) código do React para um código que o browser interprete
> - Webpack: Converter o código de cada tipo de arquivo (.js, .css, .png, ...) de uma maneira diferente
> - Loaders: babel-loader, css-loader, image-loader, file-loader, ...

### Configurando Webpack

```shell
yarn add babel-loader
yarn webpack --mode development
yarn add webpack-dev-server -D
yarn webpack serve --mode development
```

```js
const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
};
```

```js
export const soma = (a, b) => {
    return a + b;
}
```

```js
import { soma } from './soma';
console.log(soma(5, 3));
```

- Criado o arquivo: ./webpack.config.js
- Adicionado a dependências babel-loader
- Exportado os caminhos, arquivos e módulos para transpilação no arquivo webpack.config.js
- Executado yarn webpack em modo desenvolvimento para transpilar o código no arquivo bundle.js
- Criado o arquivo: src/soma.js
- Retirado a função soma do arquivo index.js e adicionado ao arquivo soma.js
- Importado a função soma no arquivo index.js de soma.js
- Executado novamente o yarn webpack em modo desenvolvimento
- Adicionado a dependência webpack-dev-server como desenvolvimento
- Adicionado o caminho do conteúdo de base no arquivo webpack.config.js
- Executado yarn webpack serve em modo desenvolvimento para disponibilizar a aplicação em localhost:8080 com live reloading das alterações no código

### Componentização

```js
import React from 'react';
import { render } from 'react-dom';
import App from './App';
render(<App />, document.getElementById('app'));
```

```js
import React from 'react';
import Header from './components/Header';
function App() {
    return (
        <>
            <Header />;
            <Header />;
        </>
    );
}
export default App;
```

```js
import React from 'react';
export default function Header() {
    return (
        <header>
            <h1>ReactJS</h1>
        </header>
    );
}
```

```json
"emmet.syntaxProfiles": { "javascript": "jsx" },
"emmet.includeLanguages": { "javascript": "javascriptreact" },
```

- Removido o arquivo: src/soma.js
- Renderizado os componentes do index.html através do index.js
- Criado o arquivo: src/App.js
- Criado a função App no arquivo App.js que retorna um html
- Criado o diretório: src/components/
- Criado o arquivo: src/components/Header.js
- Adicionado o plugin do emmet no arquivo de configuração do VSCode
- Criado a função Header no arquivo Header.js que retorna um html
- Importado o componente Header no arquivo App.js

> - JSX: HTML dentro do JavaScript (Javascript XML)

### Propriedades

```js
import React from 'react';
import Header from './components/Header';
function App() {
    return (
        <>
            <Header title="Homepage">
                <ul>
                    <li>Homepage</li>
                    <li>Projects</li>
                </ul>
            </Header>
            <Header title="Projects">
                <ul>
                    <li>Homepage</li>
                    <li>Projects</li>
                    <li>Login</li>
                </ul>
            </Header>
        </>
    );
}
export default App;
```

```js
import React from 'react';
export default function Header({ title, children }) {
    return (
        <header>
            <h1>{title}</h1>

            {children}
        </header>
    );
}
```

- Adicionado a propriedade title no arquivo App.js
- Acessado a propriedade title no arquivo Header.js
- Adicionado uma lista como conteúdo de componente no arquivo App.js
- Acessado o conteúdo do componente no arquivo Header.js

### Estado e Imutabilidade

```js
function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);
    function handleAddProject() {
        setProjects([...projects, `Novo projeto ${Date.now()}`]);
    }
    return (
        <>
            <Header title="Projects" />
            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>
            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}
```

```js
export default function Header({ title }) {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
}
```

- Criado a variável projects no arquivo App.js como um array
- Retirado o conteúdo de componente no arquivo App.js e deixado apenas um componente Header
- Retirado o acesso ao conteúdo do componente no arquivo Header.js
- Adicionado a função map no App.js para exibir os objetos da variável projects em lista
- Criado um botão para adicionar um novo objeto no array projects através da função handleAppProject
- Criado a função handleAppProject para adicinar um novo objeto no array projects exibindo no console o array
- Importado a função useState no arquivo App.js
- Transformado a variável projects em um array de estado (Estado)
- Desestruturado a variável projects para receber os valores e a função
- Criado a função setProjects dentro da função handleAddProject (Imutabilidade)
- Retirado o console.log da função handleAddProject

> - useState retorna um array com 2 posições:
>   - 1ª: Variável com o seu valor inicial
>   - 2ª: Função para atualizar o valor

### Importando CSS e imagens

```shell
yarn add style-loader css-loader file-loader
yarn dev
```

```js
{
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
    ]
},
{
    test: /.*\.(gif|png|jpe?g)$/i,
    use: {
        loader: 'file-loader',
    }
}
```

```css
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
body {
    background: #f5f5f5;
    font: 14px sans-serif;
    color: #333;
}
```

```json
"scripts": {
  "dev": "webpack serve --mode development",
  "build": "webpack --mode production"
},
```

```js
import React, { useState } from 'react';
import './App.css';
import backgroundImage from './assets/background.jpg';
import Header from './components/Header';
function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);
    function handleAddProject() {
        setProjects([...projects, `Novo projeto ${Date.now()}`]);
    }
    return (
        <>
            <Header title="Projects" />
            <img width={300} src={backgroundImage} />
            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>
            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}
export default App;
```

- Adicionado os pacotes style-loader, css-loader e file-loader
- Criado no arquivo webpack.config.js as regras para carregar os estilos css e arquivos
- Criado o arquivo: src/App.css
- Adicionado o estilo CSS no arquivo App.css
- Importado o estilo do App.css no arquivo App.js
- Criado os scripts dev e build no arquivo package.json
- Executado yarn dev para iniciar a aplicação
- Criado o diretório: src/assets/
- Feito o download de uma imagem do unsplash para o diretório assets com o nome de background.jpg
- Importado a imagem background.jpg no arquivo App.js e exibida no JSX

### Listando Projetos da API

```shell
yarn add axios
```

```js
import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:3333'
});
export default api;
```

```js
import React, { useEffect, useState } from 'react';
import api from './services/api';
import './App.css';
import Header from './components/Header';
function App() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);
    function handleAddProject() {
        setProjects([...projects, `Novo projeto ${Date.now()}`]);
    }
    return (
        <>
            <Header title="Projects" />
            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>
            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}
export default App;
```

- Iniciado o backend
- Adicionado o pacote do axios ao frontend
- Criado o diretório: src/services/
- Criado o arquivo: src/services/api.js
- Importado o axios no arquivo api.js e criado uma instância para se conectar ao backend
- Importado no App.js o arquivo api.js
- Removido a importação da imagem no arquivo App.js
- Removido o diretório: /src/assets/
- Adicionado a função useEffect no App.js para se conectar ao backend pela api retornando os dados
- Iniciado o array projects com o estado vazio
- Alterado a função map para exibir a lista com o títilo do projeto

> - useEffect recebe dois parâmetros:
>   - 1º: Qual função irá disparar
>   - 2º: Quando disparar a função

### Cadastrando Projetos

```shell
yarn add @babel/plugin-transform-runtime -D
```

```js
plugins: [
    '@babel/plugin-transform-runtime'
]
```

```js
async function handleAddProject() {
const response = await api.post('projects', {
    title: `Novo projeto ${Date.now()}`,
    owner: "Alisson Fernandes"
});
const project = response.data;
setProjects([...projects, project]);
}
```

- Enviado uma requisição do tipo POST pela api na função handleAddProject
- Transformado a função handleAddProject em async
- Criado a variável response para transformar a requisição POST pela api em await
- Criado a variável project para criar o objeto com os dados da variável response
- Utilizado a função setProjects para adicionar os dados da variável project no array projects para ser exibidos em tela ao adicionar um novo projeto, utilizando os mesmos dados do POST sem precisar de realizar uma nova requisição GET para exibir todos os projetos
- Adicionado o plugin do babel transform runtime como dependência de desenvolvimento
- Configurado no arquivo babel.config.js o plugin do babel transform runtime
