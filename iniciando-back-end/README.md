# Jornada GoStack Rocketseat

## Aulas nivel02 - Iniciando back-end do app

### Configurando TypeORM

```shell
yarn add typeorm pg
yarn dev:server
```

```json
{
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "docker",
    "password": "docker",
    "database": "gostack_gobarber"
}
```

```ts
import { createConnection } from 'typeorm';
createConnection();
```

```ts
import './database';
```

- Duplicado diretório: /projects/aulas/nivel02/primeiro-projeto-node/ em /projects/aulas/nivel02/iniciando-back-end/
- Aberto o VSCode no diretório iniciando-back-end
- Instalado o docker e o dbeaver
- Executado o docker com a ultima imagem do postgres na porta 5432
- Configurado o dbeaver para se conectar ao postgres do docker
- Adicionado o pacote do typeorm e o driver do postgres
- Criado arquivo: ./ormconfig.json
- Adicionado no arquivo ormconfig.json os parâmentros de conexão ao banco de dados
- Criado diretório: ./src/database/
- Criado arquivo: /src/database/index.ts
- Importado e criado no arquivo /src/database/index.ts a função createConnection do pacote typeorm
- Importado no arquivo ./server.ts o diretório ./database
- Criado através do dbeaver o banco de dados gostack_gobarber
- Selecionado o banco de dados gostack_gobarber, criado o usuário docker com a senha docker e dado as permissões de grant_all
- Iniciado o app
