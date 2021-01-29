import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/49215447?s=460&u=78e7059548bb7614039927ee0a5c7ffc5b7e4b9f&v=4"
            alt="Alisson Fernandes"
          />
          <div>
            <strong>É o repositório.</strong>
            <p>É a descrição.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/49215447?s=460&u=78e7059548bb7614039927ee0a5c7ffc5b7e4b9f&v=4"
            alt="Alisson Fernandes"
          />
          <div>
            <strong>É o repositório.</strong>
            <p>É a descrição.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
