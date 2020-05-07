import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer"></img>
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório"></input>
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars3.githubusercontent.com/u/20051707?s=460&u=9f27e51ed4e3fe7c995fd07118a06ae587b58427&v=4"
                        alt="Marcelo Cortes"
                    ></img>
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <FiChevronRight size={20}></FiChevronRight>
                </a>

                <a href="teste">
                    <img
                        src="https://avatars3.githubusercontent.com/u/20051707?s=460&u=9f27e51ed4e3fe7c995fd07118a06ae587b58427&v=4"
                        alt="Marcelo Cortes"
                    ></img>
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <FiChevronRight size={20}></FiChevronRight>
                </a>

                <a href="teste">
                    <img
                        src="https://avatars3.githubusercontent.com/u/20051707?s=460&u=9f27e51ed4e3fe7c995fd07118a06ae587b58427&v=4"
                        alt="Marcelo Cortes"
                    ></img>
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <FiChevronRight size={20}></FiChevronRight>
                </a>
            </Repositories>
        </>
    );
}

export default Dashboard;