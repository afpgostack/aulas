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

### Criando tabela de agendamentos

```shell
yarn typeorm migration:create -n CreateAppointments
yarn typeorm migration:run
```

```json
"migrations": [
    "./src/database/migrations/*.ts"
],
"cli": {
    "migrationsDir": "./src/database/migrations"
}
```

```json
"start": "ts-node src/index.ts",
"typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"
```

```ts
import { MigrationInterface, QueryRunner, Table } from "typeorm";
export default class CreateAppointments1610757202516 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'appointments',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'provider',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'date',
                        type: 'timestamp with time zone',
                        isNullable: false,
                    },
                ],
            }),
        );
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('appointments');
    }
}
```

- Criado diretório: ./src/database/migrations/
- Criado no arquivo ./ormconfig.jsson o array migrations com o diretório migrations e a propriedade cli
- Criado no arquivo ./package.json os scripts start e typeorm
- Executado o comando yarn typeorm para criar no diretório migrations o arquivo de configuração para a criação da tabela appointments
- Adicionado no arquivo $id-CreateAppointmens.ts do diretório migrations, as propriedades para a criação da tabela appointments
- Executado o comando yarn typeorm para aplicar os parâmetros do arquivo $id-CreateAppointmens.ts no banco de dados

> - Para não gerar erros de alterações na estrutura do banco de dados, os arquivos de migrations somente poderão ser editados se ainda não foram enviado para o controle de versão, como por exemplo o git. Caso já tenha um push do arquivo migration no controle de versão, será necessário criar um novo arquivo com o comando "yarn typeorm migration:create -n 'nome_do_arquivo'", contendo as alterações na estrutura do banco de dados.
> - yarn typeorm migration:revert
>   - Comando para desfazer o que foi aplicado no banco de dados pelo arquivo migration
> - yarn typeorm migration:show
>   - Comando para exibir as ações executadas

### Criando model de agendamentos

```json
"experimentalDecorators": true,
"emitDecoratorMetadata": true,
```

```ts
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
@Entity('appointments')
class Appointment {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    provider: string;
    @Column('timestamp with time zone')
    date: Date;
}
export default Appointment;
```

- Alterado o arquivo ./tsconfig.json descomentando as linhas experimentalDecorators e emitDecoratorMetadata como true, e descomentado a linha strictPropertyInitialization como false
- Importado no arquivo /src/models/Appointment.ts o model Entity, Column e PrimaryGeneratedColumn do pacote typeorm
- Removido do arquivo /src/models/Appointment.ts o constructor da classe Appointment e a importação do uuidv4
- Adicionado no arquivo /src/models/Appointment.ts dentro da classe Appointment os métodos para registro dos dados na tabela
