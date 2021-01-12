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
- Criado os arquivos: public/index.html e public/script.js
- Código html no arquivo index.html
- Adicionado as dependências do babel e webpack
- Criado o arquivo: ./babel.config.js
- Exportados os módulos de preset no arquivo babel.config.js
- Criado o arquivo: src/index.js
- Criado uma função de soma no arquivo index.js que retorna o valor no console
- Convertido o index.js utilizando yarn babel para criar o arquivo public/bundle.js
- Adicionado o caminho do bundle.js para ser executado no index.html
- Aberto o arquivo index.html no navegador e inspecionado a página com o resultado da soma

* Babel: Converter (transpilar) código do React para um código que o browser interprete
* Webpack: Converter o código de cada tipo de arquivo (.js, .css, .png, ...) de uma maneira diferente
* Loaders: babel-loader, css-loader, image-loader, file-loader, ...
