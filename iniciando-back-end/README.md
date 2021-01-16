# Jornada GoStack Rocketseat

## Aulas nivel02 - Iniciando back-end do app
<p align="center">
  <a href="#configurando-typeorm">Configurando TypeORM</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#criando-tabela-de-agendamentos">Criando tabela de agendamentos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#criando-model-de-agendamentos">Criando model de agendamentos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#repositório-do-typeorm">Repositório do TypeORM</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#model-e-migration-de-usuários">Model e migration de usuários</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#relacionamento-nos-models">Relacionamento nos models</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#criação-de-registros">Criação de registros</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#criptografia-de-senha">Criptografia de senha</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#validando-credenciais">Validando credenciais</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gerando-token-jwt">Gerando token JWT</a>
</p>

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
- Adicionado a extensão uuid-ossp ao banco de dados gostack_gobarber
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
                        default: 'uuid_generate_v4()',
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

### Repositório do TypeORM

```shell
yarn add reflect-metadata
```

```json
"entities": [
    "./src/models/*.ts"
],
```

```ts
import 'reflect-metadata';
```

```ts
import { EntityRepository, Repository } from 'typeorm';
import Appointment from '../models/Appointment';
@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
    public async findByDate(date: Date): Promise<Appointment | null> {
        const findAppointment = await this.findOne({
            where: { date },
        });
        return findAppointment || null;
    }
}
export default AppointmentsRepository;
```

```ts
import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
interface Request {
    provider: string;
    date: Date;
}
class CreateAppointmentService {
    public async execute({ provider, date }: Request): Promise<Appointment> {
        const appointmentsRepository = getCustomRepository(AppointmentsRepository);
        const appointmentDate = startOfHour(date);
        const findAppointmentInSameDate = await appointmentsRepository.findByDate(appointmentDate);
        if (findAppointmentInSameDate) {
            throw Error('This appointment is alredy booked.');
        }   
        const appointment = appointmentsRepository.create({
            provider,
            date: appointmentDate,
        });
        await appointmentsRepository.save(appointment);
        return appointment;
    }
}
export default CreateAppointmentService;
```

```ts
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';
const appointmentsRouter = Router();
appointmentsRouter.get('/', async (request, response) => {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointments = await appointmentsRepository.find();
    return response.json(appointments);
});
appointmentsRouter.post('/', async (request, response) => {
    try {
        const { provider, date } = request.body;
        const parsedDate = parseISO(date);
        const createAppointment = new CreateAppointmentService();
        const appointment = await createAppointment.execute({ provider, date: parsedDate });
        return response.json(appointment);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});
export default appointmentsRouter;
```

- Importado no arquivo /src/server.ts o pacote reflect-metadata
- Adicionado o pacote reflect-metadata
- Adicionado no arquivo ormconfig.json o caminho das entidades apontando os arquivos .ts do diretório models
- Removido do arquivo AppointmentsRepository.ts a interface, o array, o constructor, os métodos all e create
- Importado no arquivo AppointmentsRepository.ts o EntityRepository e o Repository do pacote typeorm
- Adicionado no arquivo AppointmentsRepository.ts o decorator EntityRepository passando o model Appointment
- Alterado no arquivo AppointmentsRepository.ts a classe AppointmentsRepository como extends da classe Repository com o model Appointment como parâmetro
- Alterado no arquivo AppointmentsRepository.ts a função findByDate transformando em função asincrona e retornando uma promise do tipo Appointment ou nulo
- Alterado no arquivo AppointmentsRepository.ts dentro da função findByDate, a variável findAppointment utilizando em await o método findOne já existendo do pacote typeorm
- Removido do arquivo AppointmentsRepository.ts a importação do pacote date-fns
- Importado no arquivo CreateAppointmentService.ts a função getCustomRepository do pacote typeorm
- Removido do arquivo CreateAppointmentService.ts de dentro da classe CreateAppointmentService, a variável privada appointmentsRepository e o constructor
- Adicionado no arquivo CreateAppointmentService.ts dentro da classe CreateAppointmentService e do método execute, a variável appointmentsRepository chamando a função getCustomRepository passando como parâmetro a importação AppointmentsRepository
- Removido do arquivo CreateAppointmentService.ts dentro da classe CreateAppointmentService e método execute, os this. pois não existe mais a variável privada
- Alterado no arquivo CreateAppointmentService.ts dentro da classe CreateAppointmentService, a função findByDate como await
- Adicionado no arquivo CreateAppointmentService.ts dentro da classe CreateAppointmentService e método execute, o await com o método save
- Transformado no arquivo CreateAppointmentService.ts dentro da classe CreateAppointmentService, o método execute como asíncrono retornando uma promise do tipo Appointment
- Removido do arquivo appointments.routes.ts a variável appointmentsRepository
- Importado no arquivo appointments.routes.ts a função getCustomRepository do pacote typeorm
- Transformado no arquivo appointments.routes.ts a rota get em asíncrona
- Adicionado no arquivo appointments.routes.ts na rota get, a variável appointmentsRepository chamando a função getCustomRepository passando como parâmetro o AppointmentsRepository
- Alterado no arquivo appointments.routes.ts na rota get, o método all por find como await
- Retirado do arquivo appointments.routes.ts na rota post, o parâmetro appointmentsRepository do método CreateAppointmentService
- Transformado no arquivo appointments.routes.ts a rota post em asíncrona
- Adicionado no arquivo appointments.routes.ts na rota post, o await para o método execute

### Model e migration de usuários

```shell
yarn typeorm migration:create -n CreateUsers
yarn typeorm migration:revert
yarn typeorm migration:run
```

```ts
import {MigrationInterface, QueryRunner, Table } from "typeorm";
export default class CreateUsers1610798889353 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
```

```ts
{
    name: 'created_at',
    type: 'timestamp',
    default: 'now()',
},
{
    name: 'updated_at',
    type: 'timestamp',
    default: 'now()',
},
```

```ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
@Entity('users')
class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
}
export default Users;
```

```ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
//...
@CreateDateColumn()
created_at: Date;
@UpdateDateColumn()
updated_at: Date;
//...
```

- Executado o comando yarn typeorm para criar no diretório migrations o arquivo de configuração para a criação da tabela users
- Adicionado no arquivo $id-CreateUsers.ts do diretório migrations, as propriedades para a criação da tabela users
- Adicionado no arquivo $id-CreateAppointments.ts do diretório migrations, as propriedades de created_at e updated_at da tabela appointments
- Criado arquivo: /src/models/Users.ts
- Adicionado no arquivo /src/models/Users.ts os decorators e a classe User para a criação da tabela users 
- Adicionado no arquivo /src/models/Appointments.ts os decorators CreateDateColumn e UpdateDateColumn na classe Appointment para a tabela appointments
- Executado o migration:revert para desfazer a tabela appointments
- Executado o migration:run para criar no banco de dados a tabela users e appointments

### Relacionamento nos models

```shell
yarn typeorm migration:create -n AlterProviderFieldToProviderId
yarn typeorm migration:revert
yarn typeorm migration:run
```

```ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import User from './User'
//...
@Column()
provider_id: string;
@ManyToOne(() => User)
@JoinColumn({ name: 'provider_id' })
provider: User;
//...
```

```ts
import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";
export default class AlterProviderFieldToProviderId1610803222685 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('appointments', 'provider');
        await queryRunner.addColumn('appointments',
            new TableColumn({
                name: 'provider_id',
                type: 'uuid',
                isNullable: true,
            }),
        );
        await queryRunner.createForeignKey('appointments',
            new TableForeignKey({
                name: 'AppointmentProvider',
                columnNames: ['provider_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('appointments', 'AppointmentProvider');
        await queryRunner.dropColumn('appointment', 'provider_id'),
        await queryRunner.addColumn('appointment',
            new TableColumn({
                name: 'provider',
                type: 'varchar',
            }),
        );
    }
}
```

- Alterado no arquivo /src/models/Appointments.ts a coluna provider para provider_id
- Importado no arquivo /src/models/Appointments.ts o model User
- Adicionado no arquivo /src/models/Appointments.ts na classe Appoitment, a propriedade de relacionamento da tabela appointments com a tabela users
- Executado o comando migration:create para criar o arquivo migration AlterProviderFieldToProviderId
- Adicionado no arquivo $id-AlterProviderFieldToProviderId.ts as propriedades para alterar na tabela appointments, a coluna provider para provider_id realizando o relacionamento com a tabela users
- Executado o comando migration:revert para desfazer toda a criação das tabelas do banco de dados
- Executado o comando migration:run para criar as tabelas appointments e users com os relacionamentos

### Criação de registros

```ts
import { getRepository } from 'typeorm';
import User from '../models/User';
interface Request {
    name: string,
    email: string,
    password: string
}
class CreateUserService {
    public async execute({ name, email, password }: Request): Promise<User> {
        const usersRepository = getRepository(User);
        const checkUserExists = await usersRepository.findOne({
            where: { email },
        });
        if (checkUserExists) {
            throw new Error('Email address already used.');
        }
        const user = usersRepository.create({
            name,
            email,
            password,
        });
        await usersRepository.save(user);
        return user;
    }
}
export default CreateUserService;
```

```ts
import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';
const userRouter = Router();
userRouter.post('/', async (request, response) => {
    try {
        const { name, email, password } = request.body;
        const createUser = new CreateUserService();
        const user = await createUser.execute({
            name,
            email,
            password,
        });
        return response.json(user);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});
export default userRouter;
```

```ts
//...
import userRouter from './users.routes';
//..
routes.use('/users', userRouter);
//...
```

```ts
//...
const { provider_id, date } = request.body;
//...
const appointment = await createAppointment.execute({ provider_id, date: parsedDate });
//...
```

```ts
//...
interface Request {
    provider_id: string;
    date: Date;
}
//...
public async execute({ provider_id, date }: Request): Promise<Appointment> {
//...
const appointment = appointmentsRepository.create({
            provider_id,
            date: appointmentDate,
});
//...
```

- Criado arquivo: ./src/services/CreateUserService.ts
    - Importado a função getRepository do pacote typeorm e importado o model User
    - Criado a interface Request com a tipagem do usuário
    - Criado a classe CreateUserService com o método execute
        - Checado se o email existe no banco de dados, se sim, retorna mensagem de erro, se não, segue para chamar o método salvar
- Criado arquivo: ./src/routes/user.routes.ts
    - Importado a função Router do pacote express e importado o service CreateUserService
    - Criado a rota raiz com o método post com função asíncrona
        - Inserido entre try catch para acessar a mensagem de erro
        - Criado as variável em desestruturação para receber os dados do body
        - Criado a variável createUser para instanciar os métodos do service CreateUserService
        - Criado a variável user como await chamando o método execute e passando as variáveis desestruturadas
        - Retornado a variável user
- Criado no arquivo ./src/routes/index.ts a rota /users para o arquivo user.routes.ts
- Alterado no arquivo appointments.routes.ts a variável provider para provider_id
- Alterado no arquivo CreateAppointmentService a variável provider para provider_id
- Criado um usuário pelo insomnia, utilizado o id gerado para criar também um agendamento passando o id como provide_id

### Criptografia de senha

```shell
yarn add bcryptjs
yarn add -D @types/bcryptjs
```

```ts
//...
import { hash } from 'bcryptjs';
//...
const hashedPassword = await hash(password, 8);
const user = usersRepository.create({
    name,
    email,
    password: hashedPassword,
});
//...
```

```ts
//...
const userWithoutPassword = {
    id: user.id,
    name: user.name,
    email: user.email,
    created_at: user.created_at,
    updated_at: user.updated_at,
};
return response.json(userWithoutPassword);
//...
```

- Adicionado o pacote bcryptjs e a declaração de tipos @types/bcryptjs como dependência de desenvolvimento
- Importado no arquivo CreateUserService.ts a função hash do pacote bcryptjs
    - Criado a variável hashedPassword utilizando a função hash para criptografar a senha
- Criado no arquivo user.routes.ts a variável userWithoutPassword para que o retorno do response não exiba a senha criptografada

### Validando credenciais

```ts
import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import User from '../models/User';
interface Request {
    email: string;
    password: string;
}
interface Response {
    user: User
}
class AuthenticateUserService {
    public async execute({ email, password }: Request): Promise<Response> {
        const usersRepository = getRepository(User);
        const user = await usersRepository.findOne({ where: { email } });
        if (!user) {
            throw new Error('Incorrect email/password combination.');
        }
        const passwordMatched = await compare(password, user.password);
        if (!passwordMatched) {
            throw new Error('Incorrect email/password combination.');
        }
        return { user };
    }
}
export default AuthenticateUserService;
```

```ts
import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';
const sessionsRouter = Router();
sessionsRouter.post('/', async (request, response) => {
    try {
        const { email, password } = request.body;
        const authenticateUser = new AuthenticateUserService();
        const { user } = await authenticateUser.execute({
            email,
            password,
        });
        const userWithoutPassword = {
            id: user.id,
            name: user.name,
            email: user.email,
            created_at: user.created_at,
            updated_at: user.updated_at,
        };
        return response.json(userWithoutPassword);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});
export default sessionsRouter;
```

```ts
//...
import sessionsRouter from './sessions.routes';
//...
routes.use('/sessions', sessionsRouter);
//...
```

- Criado arquivo: ./src/services/AuthenticateUserService.ts
    - Importado a função getRepository do pacote typeorm, importado a função compare do pacote bcryptjs e importado o model User
    - Criado a interface Request tipando as variáveis email e password e a interface Response tipando a variável user com o model User
    - Criado a classe AuthenticateUserService com o método execute assíncrono
        - Criado o método execute assíncrono com as variáveis email e password do tipo Request
        - Criado a variável usersRepository para instanciar a função getRepository passando o model User
        - Criado a variável user recebendo o função findOne como await para encontrar o dado da variável email no banco de dados
        - Verificado se o dado da variável user não foi encontrado no banco de dados, retorna uma mensagem de erro
        - Criado a variável passwordMatched recebendo a função compare como await passando a senha recebida do body e a senha armazenada no banco de dados
        - Verificado se as senhas não forem as mesmas, retorna uma mensagem de erro
        - Retornado a variável user
- Criado arquivo: ./src/routes/sessions.routes.ts
    - Importado a função Router do expres e a classe AuthenticateUserService
    - Criado a rota raíz com o método post assíncrono
        - Entre o try catch para receber as mensagens
        - Criado as variáveis email e password desestruturadas para receber os dados do body
        - Criado a variável authenticateUser para instanciar os métodos do serviço AuthenticateUserService
        - Criado a variável user desestruturada que recebe o método execute como await do service AuthenticateUserService, passando as variáveis email e password
        - Criado a variável userWithoutPassword para que o retorno do response não exiba a senha
        - Retornado a variável userWithoutPassword
- Criado no arquivo ./src/routes/index.ts a rota /sessions para o arquivo sessions.routes.ts

### Gerando token JWT

```shell
yarn add jsonwebtoken
yarn add -D @types/jsonwebtoken
```

```ts
//...
import { sign } from 'jsonwebtoken';
//...
const token = sign({}, 'b57ef66e95392145b9035532d49ea220', {
    subject: user.id,
    expiresIn: '1d',
});
return {
    user,
    token,
};
//...
```

```ts
//...
const { user, token } = await authenticateUser.execute({
    email,
    password,
});
//...
return response.json({ userWithoutPassword, token });
//...
```

- Adicionado o pacote jsonwebtoken e a declaração de tipos @types/jsonwebtoken como dependência de desenvolvimento
- Gerado um hash md5 no site md5.cz para ser usado no método sign
- Importado no arquivo ./src/services/AuthenticateUserService.ts a função sign do pacote jsonwebtoken
    - Adicionado na interface Response o tipo da variável token
    - Criado a variável token que executa o método sign passando as configurações de header, payload e signature
    - Adicionado ao return a variável token
- Adicionado no arquivo sessions.routes.ts a variável token na desestruturação da chamada do método execute do serviço AuthenticateUserService
    - Adicionado ao return a variável token
- Verificado no site jwt.io o token gerado na requisição feita pelo insomnia
