# Jornada GoStack Rocketseat

## Aulas nivel02 - Primeiro projeto com Node.JS

### Configurando estrutura

```shell
yarn init -y
yarn add express
yarn add -D typescript
yarn tsc --init
yarn add -D @types/express
yarn add -D ts-node-dev
yarn dev:server
```

```json
"outDir": "./dist",
"rootDir": "./src",
```

```json
"scripts": {
    "build": "tsc",
    "dev:server": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"
},
```

```js
import express from 'express';
const app = express();
app.get('/', (request, response) => {
    return response.json({ message: 'Hello GoStack' });
});
app.listen(3333, () => {
    console.log('Server started on port 3333!');
});
```

- Criado diretórios: /projects/aulas/nivel02/primeiro-projeto-node
- Aberto o VSCode no diretório primeiro-projeto-node
- Iniciado o projeto com o yarn
- Adicionado o express
- Adicionado o typescript como dependência de desenvolvimento
- Criado o arquivo tsconfig.json com o comando yarn tsc --init
- Criado diretório: ./src
- Criado arquivo: /src/server.ts
- Alterado o arquivo tsconfig.json descomentando a linha "outDir" com o parâmetro "./dist" e a linha "rootDir" com "./src"
- Adicionado a lib @types/express como dependência de desenvolvimento
- Importado o express no arquivo server.ts
- Criado no arquivo server.ts a variável app utilizando o express para inicar a aplicação na porta 3333 com uma mensagem de iniciado
- Criado no arquivo server.ts a rota raíz com uma mensagem em json
- Adicionado o pacote ts-node-dev como dependência de desenvolvimento
- Criado no arquivo package.json os scripts build e dev:server
- Executado yarn dev:server para iniciar a aplicação

### Debugando NodeJS

```shell
yarn dev:server
```

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "attach",
            "protocol": "inspector",
            "restart": true,
            "name": "Debug",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "outFiles": [
                "${workspaceFolder}/**/*.js"
            ]
        }
    ]
}
```

```json
"dev:server": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts"
```

```js
import { Router } from 'express';
const routes = Router();
routes.get('/', (request, response) => {
    return response.json({ message: 'Hello GoStack' });
});
routes.post('/users', (request, response) => {
    const { name, email } = request.body;
    const user = {
        name,
        email,
    };
    return response.json(user);
});
export default routes;
```

```js
import express from 'express';
import routes from './routes';
const app = express();
app.use(express.json());
app.use(routes);
app.listen(3333, () => {
    console.log('Server started on port 3333!');
});
```

- Aberto a sessão de debug do VSCode
- Criado um novo arquivo json
- Adicionado a flag --inspect no script dev:server do arquivo package.json
- Iniciado a aplicação com yarn dev:server
- Clicado no play do debug
- Criado diretório: ./src/routes
- Criado arquivo: /src/routes/index.ts
- Removido a rota raíz do arquivo server.ts, deixando a criação do app em express
- Adicionado a rota raíz no arquivo index.ts
- Criado no arquivo server.ts a rota /users com o método post para debugar a requisição vinda do body do insomnia
- Criado as expressões request.body e request.query na sessão de debug do VSCode
- Adicionado no arquivo index.ts, o breakpoint na linha request.body
- Enviado o método post pelo insomnia

### Cadastro de Agendamentos

```shell
yarn add uuidv4
```

```js
import { Router } from 'express';
import { uuid } from 'uuidv4';
const appointmentsRouter = Router();
const appointments = [];
appointmentsRouter.post('/', (request, response) => {
    const { provider, date } = request.body;
    const appointment = {
        id: uuid(),
        provider,
        date,
    }
    appointments.push(appointment);
    return response.json(appointment);
});
export default appointmentsRouter;
```

```js
import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
const routes = Router();
routes.use('/appointments', appointmentsRouter);
export default routes;
```

- Criado arquivo: /src/routes/appointments.routes.ts
- Criado no arquivo appointments.routes.ts a variável appointmentsRouter com a função Router, criando a rota raiz com o método post retornando uma mensagem em json
- Importado no arquivo index.ts a rota appointmentsRouter, criando a rota /appointments
- Criado no arquivo appointments.routes.ts o array apointments
- Adicionado a lib uuidv4
- Importado no arquivo appointments.routes.ts a função uuidv4
- Criado no arquivo appointments.routes.ts a desistruturação das variáveis para receber os dados do body e a variável appointment para criar o objeto com os dados informados no insomnia

### Validando a data

```shell
yarn add date-fns
```

```js
import { Router } from 'express';
import { uuid } from 'uuidv4';
import { startOfHour, parseISO, isEqual } from 'date-fns';
const appointmentsRouter = Router();
interface Appointment {
    id: string;
    provider: string;
    date: Date;
}
const appointments: Appointment[] = [];
appointmentsRouter.post('/', (request, response) => {
    const { provider, date } = request.body;
    const parsedDate = startOfHour(parseISO(date));
    const findAppointmentInSameDate = appointments.find(appointment =>
        isEqual(parsedDate, appointment.date),
    );
    if (findAppointmentInSameDate) {
        return response
            .status(400)
            .json({ message: 'This appointment is alredy booked.' });
    }
    const appointment = {
        id: uuid(),
        provider,
        date: parsedDate,
    };
    appointments.push(appointment);
    return response.json(appointment);
});
export default appointmentsRouter;
```

- Adicionado a biblioteca date-fns
- Importado no arquivo appointments.routes.ts as funções startOfHour, parseISO e isEqual da biblioteca date-fns
- Criado no arquivo appointments.routes.ts a variável parsedDate para executar a função startOfHour
- Criado no arquivo appointments.routes.ts a variável findAppointmentInSameDate para percorrer o array appointments e encontrar uma data e horário já existente
- Criado no arquivo appointments.routes.ts uma verificação se caso encontre uma data e horário já existente no array, retorna uma mensagem
- Criado no arquivo appointments.routes.ts a interface Appointments para definir o tipo de cada variável do objeto que será armazenado no array

### Model de Agendamento

```js
import { uuid } from 'uuidv4';
class Appointment { 
    id: string;
    provider: string;
    date: Date;
    constructor(provider: string, date: Date) {
        this.id = uuid();
        this.provider = provider;
        this.date = date;
    }
}
export default Appointment;
```

```js
import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointment from '../models/Appointment';
const appointmentsRouter = Router();
const appointments: Appointment[] = [];
appointmentsRouter.post('/', (request, response) => {
    const { provider, date } = request.body;
    const parsedDate = startOfHour(parseISO(date));
    const findAppointmentInSameDate = appointments.find(appointment =>
        isEqual(parsedDate, appointment.date),
    );
    if (findAppointmentInSameDate) {
        return response
            .status(400)
            .json({ message: 'This appointment is alredy booked.' });
    }
    const appointment = new Appointment(provider, parsedDate);
    appointments.push(appointment);
    return response.json(appointment);
});
export default appointmentsRouter;
```

- Criado diretório: ./src/models/
- Criado arquivo: /src/models/Appointment.ts
- Criado no arquivo Appointment.ts a classe Appointment definindo o tipo das variáveis e o constructor o objeto
- Removido do arquivo appointments.routes.ts a interface Appointment, importado a classe Appointment do arquivo Appointment.ts, usando o constructor como objeto da variável appointment para ser inserido no array appointments e removido a importação do uuid

### Criando repositórios

```js
import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';
class AppointmentsRepository {
    private appointments: Appointment[];
    constructor() {
        this.appointments = [];
    }
    public findByDate(date: Date): Appointment | null {
        const findAppointment = this.appointments.find(appointment =>
            isEqual(date, appointment.date),
        );
        return findAppointment || null;
    }
    public create(provider: string, date: Date): Appointment {
        const appointment = new Appointment(provider, date);
        this.appointments.push(appointment);
        return appointment;
    }
}
export default AppointmentsRepository;
```

```js
import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();
appointmentsRouter.post('/', (request, response) => {
    const { provider, date } = request.body;
    const parsedDate = startOfHour(parseISO(date));
    const findAppointmentInSameDate = appointmentsRepository.findByDate(parsedDate);
    if (findAppointmentInSameDate) {
        return response
            .status(400)
            .json({ message: 'This appointment is alredy booked.' });
    }
    const appointment = appointmentsRepository.create(provider, parsedDate);
    return response.json(appointment);
});
export default appointmentsRouter;
```

- Criado diretório: ./src/repositories/
- Criado arquivo: /src/repositories/AppointmentsRepository.ts
- Importado no arquivo AppointmentsRepository.ts o model Appointment
- Criado a classe AppointmentsRepository
- Criado a variável privada appointments dentro da classe AppointmentsRepository que utiliza o tipo do model Appointment em array
- Criado o constructor dentro da classe AppointmentsRepository para inicializar o array como vazio
- Criado a variável publica com o método create, que cria um novo objeto appointment do tipo Appoitment e realiza o push para o array com os dados do objeto appointment
- Removido do arquivo appointments.routes.ts a variável appointment que cria um novo objeto do tipo Appointment
- Removido do arquivo appointments.routes.ts o array appointments do tipo Appointment
- Importado no arquivo appointments.routes.ts a classe AppointmentsRepository
- Criado no arquivo appointments.routes.ts a variável appointmentsRepository instanciando a classe AppointmentsRepository
- Removido do arquivo appointments.routes.ts o método push
- Criado no arquivo appointments.routes.ts a variável appointment chamando o metodo create do appointmentsRepository
- Criado no arquivo AppointmentsRepository.ts a variável publica findByDate com o tipo Appointment ou nulo
- Movido a lógica da variável findAppointmentInSameDate do arquivo appointments.routes.ts para dentro do findByDate do arquivo AppointmentsRepository.ts
- Importado no arquivo AppointmentsRepository.ts o método isEqual da biblioteca date-fns
- Utilizado no arquivo appointments.routes.ts a variável findAppointmentInSameDate para chamar findByDate do arquivo AppointmentsRepository.ts
- Removido do arquivo appointments.routes.ts as importações do model Appointment e o método isEqual da biblioteca date-fns

> Persistência <--> Repositório <--> Rota
> - Repositório (Responsável por fazer as operações no banco de dados)
>   - find
>   - create
>   - list
>   - read
>   - delete
>   - update...

### Listando Agendamentos

```js
public all(): Appointment[] {
    return this.appointments;
}
```

```js
appointmentsRouter.get('/', (request, response) => {
    const appointments = appointmentsRepository.all();
    return response.json(appointments);
});
```

- Criado no arquivo AppointmentsRepository.ts a variável publica all retornando o array appointments
- Criado no arquivo appointments.routes.ts a rota raíz com o método get, criando a variável appointments que recebe os dados do array appointmentsRepository, retornando a variável appointments

> No arquivo de rota, aos poucos está sendo aplicado o SoC
>   - SoC: Separation of Concerns (Separação de preocupações)
> O objetivo é refaturar os códigos, fazendo a abstração para saber onde melhor se encaixam

### Trabalhando com dados

```js
interface CreateAppontimentDTO {
    provider: string;
    date: Date;
}
//...
public create({ provider, date }: CreateAppontimentDTO): Appointment {
    const appointment = new Appointment({ provider, date });
    this.appointments.push(appointment);
    return appointment;
}
```

```js
const appointment = appointmentsRepository.create({
    provider,
    date: parsedDate,
});
```

```js
constructor({ provider, date }: Omit<Appointment, 'id'>) {
    this.id = uuid();
    this.provider = provider;
    this.date = date;
}
```

- Criado no arquivo AppointmentsRepository.ts a interface CreateAppointmentDTO
- Alterado no arquivo AppointmentsRepository.ts os parâmetros do método create com a tipagem do CreateAppointmentDTO
- Alterado no arquivo appointments.routes.ts a chamada appointmentsRepository.create enviando os objetos ao invés de argumentos
- Alterado no arquivo Appointments.ts o constructor desestruturando os argumentos como objetos

> - DTO: Data Transfer Object
>   - Transmitir dados de um arquivo para outro

### Services e SOLID

```js
import { startOfHour } from 'date-fns';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
interface Request {
    provider: string;
    date: Date;
}
class CreateAppointmentService {
    private appointmentsRepository: AppointmentsRepository;
    constructor(appointmentsRepository: AppointmentsRepository) {
        this.appointmentsRepository = appointmentsRepository;
    }
    public execute({ provider, date }: Request): Appointment {
        const appointmentDate = startOfHour(date);
        const findAppointmentInSameDate = this.appointmentsRepository.findByDate(appointmentDate);
        if (findAppointmentInSameDate) {
            throw Error('This appointment is alredy booked.');
        }   
        const appointment = this.appointmentsRepository.create({
            provider,
            date: appointmentDate,
        });
        return appointment;
    }
}
export default CreateAppointmentService;
```

```js
import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';
const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();
appointmentsRouter.get('/', (request, response) => {
    const appointments = appointmentsRepository.all();
    return response.json(appointments);
});
appointmentsRouter.post('/', (request, response) => {
    try {
        const { provider, date } = request.body;
        const parsedDate = parseISO(date);
        const createAppointment = new CreateAppointmentService(appointmentsRepository);
        const appointment = createAppointment.execute({ provider, date: parsedDate });
        return response.json(appointment);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});
export default appointmentsRouter;
```

- Criado diretório: ./src/services
- Criado arquivo: /src/services/CreateAppointmentService.ts
- Importado no arquivo CreateAppointmentService.ts o model Appointment
- Criado no arquivo CreateAppointmentService.ts a classe CreateAppointmentService com o método execute do tipo Appointment
- Movido do arquivo appointments.routes.ts a lógica que encontra a data dentro do array, faz a verificação de data existente e que chama o método create do repositório, para o arquivo CreateAppointmentService.ts
- Criado no arquivo CreateAppointmentService.ts a interface Request para ser utilizado como tipo na desestruturação do método execute
- Alterado no arquivo CreateAppointmentService.ts o retorno da mensagem de erro através do throw
- Importado no arquivo CreateAppointmentService.ts o repositório AppointmentsRepository
- Criado no arquivo CreateAppointmentService.ts a variável privada appointmentsRepository do tipo AppointmentsRepository
- Criado no arquivo CreateAppointmentService.ts um constructor do tipo AppointmentsRepository
- Importado no arquivo CreateAppointmentService.ts a função startOfHour da biblioteca date-fns
- Importado no arquivo appointments.routes.ts o service CreateAppointmentService
- Removido do arquivo appointmensts.routes.ts a importação da função startOfHour
- Criado no arquivo appointmensts.routes.ts dentro do método post, a variável createAppointment construindo um novo objeto CreateAppointmentService passando como parâmetro o appointmentsRepository
- Criado no arquivo appointmensts.routes.ts a variável appointment chamando o método execute do createAppointment passando os parâmetros provider e date
- Adicionado no arquivo appointmensts.routes.ts dentro do método post, o try catch envolvendo todo o código, para retornar a mensagem de erro, caso ocorra

> - models
>   - Representação de como um dado é salvo dentro da aplicação, como é a composição desse dado.
> - repositories
>   - Manipulação do dado no seu armazenamento, responsável pelas operações de criar, listar, alterar, deletar, filtrar, procurar, ...
> - routes
>   - Responsável pelo request e response, ou seja, pelas requisições que são feitas à aplicação e as respostas à essas requisições. A rota recebe uma requisição, chama outro arquivo para tratar a requisição e devolve uma resposta. Também é responsável pela transformação dos dados de uma forma em outra.
> - services
>   - Possui as regras de negócio da aplicação. Cada serviço é responsável por apenas uma única e exclusiva funcionalidade. Cada arquivo de serviço vai possuir apenas um método. Os services não possuem acesso direto aos dados da requisição e aos dados da resposta.
> - Dependency Inversion (SOLID)
>   - Sempre quando há uma dependência externa, ao invés de instanciar a classe de repositório dentro do service, é criado um constructor para que possa receber a classe como parâmetro, para que independente da quantidade de services que forem criados, eles utilizem o mesmo repositório.
> - DRY: Don't repeat Yourself (Não repita regra de negócio dentro da aplicação)
> - SOLID aplicados
>   - Single Responsability Principle
>   - Dependency Invertion Principle
