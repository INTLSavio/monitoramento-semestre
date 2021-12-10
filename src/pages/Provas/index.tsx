import React, { useEffect, useState } from 'react'
import api from '../../service/api'
import InputMask from 'react-input-mask'
import Modal from 'react-modal'
import { Tooltip } from "@chakra-ui/react"
import { Container, TooltipBox, TooltipCard, TooltipText } from './styles'
import { ProvaModal } from '../../components/ProvaModal';
import { AtualizarModal } from '../../components/AtualizarModal'
import { BsInfoCircleFill } from 'react-icons/bs';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { IoAdd } from 'react-icons/io5'
import Sidebar from '../../components/Sidebar';

interface Prova {
    materia: string;
    conteudo: string;
    data: string;
    id: number;
}

export function Provas(){
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [id, setId] = useState(0);
    const [showSidebar, setShowSidebar] = useState(false)
    const [isProvaModalOpen, setIsProvaModalOpen] = useState(false);
    const [provas, setProvas] = useState<Prova[]>([])
    const [alterou, setAlterou] = useState(false)

    function openProvaModal() {
      setIsProvaModalOpen(true);
      setShowSidebar(true);
    }
  
    function closeProvaModal() {
      setIsProvaModalOpen(false)
    }

    function openUpdateModal(id: number) {
        setId(id)
        setIsUpdateModalOpen(true);
        setShowSidebar(true);
      }
    
      function closeUpdateModal() {
        setIsUpdateModalOpen(false)
      }

    async function handleDeleteProva(id: number) {
        const response = await api.delete(`/provas/${id}`)

        setAlterou(!alterou)
    }

    useEffect(() => {
        async function getProvas() {
            const { data } = await api.get('/provas')

            setProvas(data);
        }

        getProvas()
    },[])

    useEffect(() => {
        async function getProvas() {
            const { data } = await api.get('/provas')

            setProvas(data);
        }

        getProvas()
    },[alterou])

    return(
        <>
            <Sidebar showSidebar={showSidebar} />
            <section className="home-section">
                <div className="home-content">
                    <i className='bx bx-menu' onClick={() => setShowSidebar(!showSidebar)} ></i>
                    <span className="text">Provas</span>
                </div>
                

                <Container>
                    <div>
                        
                        <button 
                            type="button"
                            onClick={openProvaModal}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', background: 'green' }}
                        ><IoAdd style={{ color: 'white', marginRight: '0.5rem', fontWeight: 'bold' }}/> Adicionar Prova</button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                            <th>Matéria</th>
                            <th>Data</th>
                            <th>Info</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                            </tr>
                        </thead>

                        <tbody>
                            {provas.map((prova) => {
                                return(
                                    <tr key={prova.id}>
                                        <td>{prova.materia}</td>
                                        <td>{prova.data}</td>
                                        <td className="icon">
                                            <TooltipCard>
                                                <TooltipText>
                                                    <BsInfoCircleFill color="black" />
                                                </TooltipText>
                                                <TooltipBox>
                                                    {prova.conteudo}
                                                </TooltipBox>
                                            </TooltipCard>
                                        </td>
                                        <td><AiFillEdit color="black" cursor="pointer" onClick={() => openUpdateModal(prova.id)}/></td>
                                        <td><AiFillDelete color="black" cursor="pointer" onClick={() => handleDeleteProva(prova.id)}/></td>
                                    </tr>  
                                )
                            })}           
                        </tbody>
                    </table>
                </Container>
            </section>

            <ProvaModal 
                isOpen={isProvaModalOpen}
                onRequestClose={closeProvaModal}
            />

            <AtualizarModal 
                isOpen={isUpdateModalOpen}
                onRequestClose={closeUpdateModal}
                id={id}
            />
        </>
    );
}