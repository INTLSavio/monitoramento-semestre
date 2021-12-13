import { render, screen, fireEvent } from '@testing-library/react';
import { Provas } from '.';

describe('Calculadora Page', () => {

    test('Render Page', async () => {
        render(<Provas />)
        const tabela = screen.getByText("Matéria")
        
        expect(tabela).toBeInTheDocument()

    })

    test('Render Button', async () => {
        render(<Provas />)
        const input = screen.getByText("Adicionar Prova")
        
        expect(input).toBeInTheDocument()

    })

    

    
})