import Modal from 'react-modal'
import { Container } from './styles'
import { format } from 'date-fns';
import api from '../../service/api';

import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { FormEvent, useEffect, useState } from 'react';
import ptBR from 'date-fns/locale/pt-BR';

interface ProvaModalProps{
    isOpen: boolean;
    onRequestClose: () => void
}

export function ProvaModal({ isOpen, onRequestClose }: ProvaModalProps) {
    registerLocale('ptBR', ptBR)

    // States
    const [materia, setMateria] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [data, setData] = useState('');
    // Handle Functions

    async function createNewProva(event: FormEvent) {

        const prova = {
            materia,
            conteudo,
            data: data.toString().split("-").reverse().join("/")
        }

        const response = await api.post('/provas', prova)
        
        console.log(response)

        return
    }


    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container onSubmit={createNewProva}>
                <h2>Cadastrar Prova</h2>

                <input 
                    placeholder="Matéria"
                    value={materia}
                    onChange={event => setMateria(event.target.value)}
                />

                <input 
                    placeholder="Conteúdo"
                    value={conteudo}
                    onChange={event => setConteudo(event.target.value)} 
                />

                {/*<DatePicker
                    locale="ptBR"
                    selected={dateSelected} 
                    onChange={handleDataSelected} 
                    className="date-picker"
                />*/}

                <input 
                    type="date" 
                    value={data}
                    onChange={event => setData(event.target.value)}
                />

                <button type="submit">Cadastrar Prova</button>
            </Container>
        </Modal>
    )
}