import Modal from 'react-modal'
import { Container } from './styles'
import { format } from 'date-fns';
import api from '../../service/api';

import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { FormEvent, useEffect, useState } from 'react';
import ptBR from 'date-fns/locale/pt-BR';

interface AtualizarModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
    id: number;
}

export function AtualizarModal({ isOpen, onRequestClose, id }: AtualizarModalProps) {
    registerLocale('ptBR', ptBR)

    // States
    const [materia, setMateria] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [data, setData] = useState('');
    // Handle Functions

    async function updateProva(event: FormEvent) {

        const prova = {
            materia,
            conteudo,
            data: data.toString().split("-").reverse().join("/")
        }
        console.log(id)
        const response = await api.put(`/provas/${id}`, prova)
        
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
            <Container onSubmit={updateProva}>
                <h2>Atualizar Prova</h2>

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

                <button type="submit">Atualizar Prova</button>
            </Container>
        </Modal>
    )
}