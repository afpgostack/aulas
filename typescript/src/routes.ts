import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'email@dominio.com',
        password: '123abc',
        techs: [
            'Node.js',
            'ReactJS',
            'React Native',
        ],
    });
    
    return response.json({ message: 'Hello World' });
}