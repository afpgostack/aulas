# Jornada GoStack Rocketseat

## Aulas nivel04 - Arquitetura e testes no Node.js

<p align="center">
  <a href="#arquitetura-e-ddd">Arquitetura e DDD</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#separando-em-módulos">Separando em módulos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#camada-de-infra">Camada de Infra</a>
</p>

### Arquitetura e DDD

```shell
mkdir ~/projects/aulas/nivel04
cp -Rf ~/projects/aulas/nivel02/iniciando-back-end ~/projects/aulas/nivel04/arquitetura-testes-nodejs
code ~/projects/aulas/nivel04/arquitetura-testes-nodejs
```

- Criado o diretório de aula nivel04
- Copiado o projeto de backend para o diretório nivel04 com o nome de arquitetura-testes-nodejs
- Aberto o VSCode no diretório arquitetura-testes-nodejs

```vscode
Generate .editorconfig
  root = true
  [*]
  indent_style = space
  indent_size = 2
  end_of_line = lf
  charset = utf-8
  trim_trailing_whitespace = true
  insert_final_newline = true
```

- Gerado na raíz do projeto o arquivo .editorconfig e definido os padrões do editor

```shell
yarn add -D eslint
yarn eslint --init
>To check syntax, find problems, and enforce code style
>JavaScript modules (import/export)
>None of these
>Yes
>Node
>Use a popular style guide
>Airbnb: https://github.com/airbnb/javascript
>JSON
>No
yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.22.1 @typescript-eslint/parser@latest eslint-import-resolver-typescript
touch ./.eslintignore
  /*.js
  node_modules
  dist
```

- Adicionado o eslint como dependência de desenvolvimento
- Iniciado a configuração do eslint e seguido as opções para node.js
- Adicionado as dependências sugeridas como dependência de desenvolvimento
- Criado o arquivo .eslingignore e definido o que será ignorado pelo eslint

```shell
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
touch ./prettier.config.js
```

```JSON
{
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": [
        "airbnb-base",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": [
	      "error"
      ],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "ts": "never"
        }
      ]
    },
    "settings": {
      "import/resolver": {
        "typescript": {}
      }
    }
}
```

```js
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
	arrowParens: 'avoid',
}
```

- Adicionado as dependências do prettier como desenvolvimento
- Adicionado as extensões, regras e configurações no arquivo .eslintrc.json
- Criado na raíz do projeto o arquivo prettier.config.js
- Adicionado as configurações do prettier no arquivo prettier.config.js
- Fechado o VSCode e aberto novamente

```shell
cd .. ; git init ; cd -
git checkout -b nivel04
git remote add origin https://github.com/afpgostack/aulas.git
git add .
git commit -m "Nivel04 - Backend: Arquitetura e DDD"
git push -u origin nivel04
```

- Voltado para o diretório nivel04, iniciado o versionamento git, retornado ao diretório do projeto
- Criado e alterado para a branch nivel04
- Configurado o endereço remoto para o github
- Adicionado os arquivos no staging area do git
- Realizado o commit
- Enviado os arquivos para o github na branch nivel04

### Separando em módulos

```json
"material-icon-theme.folders.associations": {
  "infra": "app",
  "entities": "class",
  "schemas": "class",
  "typeorm": "database",
  "repositories": "mappings",
  "http": "container",
  "migrations": "tools",
  "modules": "components",
  "implementations": "core",
  "dtos": "typescript",
  "fakes": "mock",
  "users": "client",
  "appointments": "temp"
},
"material-icon-theme.files.associations": {
  "ormconfig.json": "database",
  "tsconfig.json": "tune"
},
```

- Adicionado às configurações do VSCode, os ícones relacionados aos diretórios e arquivos do projeto

```shell
mkdir -p ./src/{shared,modules/{appointments/{services,repositories,entities},users/{services,entities}}}
mv ./src/services/*Appointment* ./src/modules/appointments/services/
mv ./src/services/*User* ./src/modules/users/services/
mv ./src/repositories/*Appointment* ./src/modules/appointments/repositories/
mv ./src/{database,errors,middlewares,routes} ./src/shared/
mv ./src/models/*Appointment* ./src/modules/appointments/entities/
mv ./src/models/*User* ./src/modules/users/entities/
rm -rf ./src/{services,repositories,models}
```

- Criado os diretórios:
  - ./src/modules/
    - ./src/modules/appointments/
      - ./src/modules/appointments/entities/
        - Movido o arquivo Appointment.ts
      - ./src/modules/appointments/repositories/
        - Movido o arquivo AppointmentsRepository.ts
      - ./src/modules/appointments/services/
        - Movido o arquivo CreateAppointmentService.ts
    - ./src/modules/users/
      - ./src/modules/users/entities/
        - Movido o arquivo User.ts
      - ./src/modules/users/services/
        - Movido os arquivos AuthenticateUserService.ts, CreateUserService.ts e UpdateUserAvatarService.ts
  - ./src/shared/
    - Movido os diretórios ./src/database/, ./src/errors/, ./src/middlewares/ e ./src/routes/

### Camada de Infra

```shell
mkdir -p ./src/{shared/infra/http,modules/{appointments/infra/typeorm,users/infra/typeorm}}
mv ./src/shared/database/ ./src/shared/infra/typeorm/
mv ./src/{server.ts,shared/{middlewares,routes}} ./src/shared/infra/http
mv ./src/modules/appointments/entities/ ./src/modules/appointments/infra/typeorm/
mv ./src/modules/users/entities/ ./src/modules/users/infra/typeorm/
```

- Criado os diretórios:
  - ./src/shared/infra
    - Movido o diretório database e renomeado para typeorm
  - ./src/shared/infra/http
    - Movido o arquivo server.ts e os diretórios middlewares e routes
  - ./src/modules/appointments/infra/typeorm
    - Movido o diretório entities
  - ./src/modules/users/infra/typeorm
    - Movido o diretório entities
