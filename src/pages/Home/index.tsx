import React, { useState } from 'react'

import Sidebar from '../../components/Sidebar';
import { Container, Title } from './styles';

export function Home(){
    const [showSidebar, setShowSidebar] = useState(false)

    return(
        <>
            <Sidebar showSidebar={showSidebar} />
            <section className="home-section">
                <div className="home-content">
                    <i className='bx bx-menu' onClick={() => setShowSidebar(!showSidebar)} ></i>
                    <span className="text">Página Inicial</span>
                </div>
                <Container>
                    <Title>Monitoramento de Semestre</Title>
                    <p>Nosso projeto foi feito pensando na organização do aluno
                        sendo possível o mesmo adicionar suas datas de provas e também possui uma 
                        calculadora para que a partir da entrada das suas notas ele consiga saber o seu resultado final de aprovação.
                    </p>
                    <p className='group'>Grupo:</p>
                    <ul className='list'>
                        <li>Gabriel Moreira Peixoto Diniz</li>
                        <li>Rafaela Monteiro Terra</li>
                        <li>Sávio Gomes Leite</li>
                    </ul>
                </Container>
            </section>
        </>
    );
}