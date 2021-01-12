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

> Babel: Converter (transpilar) código do React para um código que o browser interprete
> Webpack: Converter o código de cada tipo de arquivo (.js, .css, .png, ...) de uma maneira diferente
> Loaders: babel-loader, css-loader, image-loader, file-loader, ...

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
