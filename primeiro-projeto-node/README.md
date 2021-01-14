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
