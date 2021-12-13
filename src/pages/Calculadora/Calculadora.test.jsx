import { render, screen, fireEvent } from '@testing-library/react';
import { Calculadora } from '.';

describe('Calculadora Page', () => {

    test('Render Page', () => {
        render(<Calculadora />);
        const input1 = screen.getByTestId("nota1")
        const input2 = screen.getByTestId("nota2")
        const input3 = screen.getByTestId("nota-lab")
        expect(input1).toBeInTheDocument()
        expect(input2).toBeInTheDocument()
        expect(input3).toBeInTheDocument()

    })

    test('Teste input nota 1', () => {
        render(<Calculadora />);
        const input = screen.getByTestId("nota1")
        fireEvent.change(input, { target: { value: '60' } })
        expect(input.value).toBe('60')

    })

    test('Teste input nota 2', () => {
        render(<Calculadora />);
        const input = screen.getByTestId("nota2")
        fireEvent.change(input, { target: { value: '50' } })
        expect(input.value).toBe('50')

    })

    test('Teste input nota Lab', () => {
        render(<Calculadora />);
        const input = screen.getByTestId("nota-lab")
        fireEvent.change(input, { target: { value: '80' } })
        expect(input.value).toBe('80')

    })

    
})