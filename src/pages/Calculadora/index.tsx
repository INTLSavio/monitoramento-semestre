import React, { useState } from 'react'

import Sidebar from '../../components/Sidebar';

import { Container, InputGroup, Resultado } from './styles'


export function Calculadora(){
    const [showSidebar, setShowSidebar] = useState(false)
    const [laboratorio, setLaboratorio] = useState(false)
    const [nota1, setNota1] = useState(0)
    const [nota2, setNota2] = useState(0)
    const [notaLab, setNotaLab] = useState(0)
    const [situacao, setSituacao] = useState('')
    const [situacaoFinal, setSituacaoFinal] = useState('')

    function handleCheckBox() {
        setLaboratorio(!laboratorio)
        setNotaLab(0)
    }

    function handleButton() {
        if(laboratorio) {
            const mediaTeoria = (nota1 + nota2)/2
            const mediaLab = notaLab

            if(mediaTeoria >= 60 && mediaLab >= 60){
                //passou
                setSituacao('Parabéns, você foi aprovado!!!')
                setSituacaoFinal('aprovado')
            }else if(mediaTeoria >=30 && mediaTeoria < 60 && mediaLab >= 60) {
                //np3
                setSituacao('Você não foi aprovado, mas terá a NP3 para conseguir!!!')
                setSituacaoFinal('np3')
            }else if(mediaTeoria >=60 && mediaLab >= 30 && mediaLab < 60) {
                //np3
                setSituacao('Você não foi aprovado, mas terá a NP3 para conseguir!!!')
                setSituacaoFinal('np3')
            }else if(mediaTeoria < 60 && mediaTeoria >= 30 && mediaLab >= 30 && mediaLab < 60){
                //np3
                setSituacao('Você não foi aprovado, mas terá a NP3 para conseguir!!!')
                setSituacaoFinal('np3')
            }else if(mediaLab < 30 || mediaTeoria < 30){
                //dp
                setSituacao('Infelizmente você foi reprovado!!!')
                setSituacaoFinal('reprovado')
            }
        }else {
            const mediaTeoria = (nota1 + nota2)/2

            if(mediaTeoria >= 60){
                //passou
                setSituacao('Parabéns, você foi aprovado!!!')
                setSituacaoFinal('aprovado')
            }else if(mediaTeoria >= 30 && mediaTeoria < 60){
                //np3
                setSituacao('Você não foi aprovado, mas terá a NP3 para conseguir!!!')
                setSituacaoFinal('np3')
            }else {
                //dp
                setSituacao('Infelizmente você foi reprovado!!!')
                setSituacaoFinal('reprovado')
            }
        }
    }

    return(
        <>
            <Sidebar showSidebar={showSidebar} />
            <section className="home-section">
                <div className="home-content">
                    <i className='bx bx-menu' onClick={() => setShowSidebar(!showSidebar)} ></i>
                    <span className="text">Calculadora</span>
                </div>

                <Container>
                    <InputGroup>
                        <p>Nota 1 Teórica:</p>
                        <input type="number" name="nota1" id="nota1" placeholder='Nota 1' onChange={(event) => setNota1(Number(event.target.value))}/>
                    </InputGroup>
                    <InputGroup>
                        <p>Nota 2 Teórica:</p>
                        <input type="number" name="nota2" id="nota2" placeholder='Nota 2'onChange={(event) => setNota2(Number(event.target.value))}/>
                    </InputGroup>
                    <InputGroup>
                        <p>A matéria possui laboratório?</p>
                        <input className="check-box" type="checkbox" name="lab" id="lab" checked={laboratorio} onChange={handleCheckBox} />
                    </InputGroup>
                    <InputGroup>
                        <p>Nota Laboratório:</p>
                        <input type="number" name="nota-lab" id="nota-lab" placeholder='Nota LAB' onChange={(event) => setNotaLab(Number(event.target.value))} disabled={!laboratorio} />
                    </InputGroup>
                    <button type='button' onClick={handleButton}>Calcular</button>
                </Container>
                <Resultado>
                    <h1>Resultado: </h1>
                    <h1 className={situacaoFinal}>{situacao}</h1>
                </Resultado>
            </section>
        </>
    );
}