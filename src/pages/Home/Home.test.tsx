import { render, screen } from '@testing-library/react';
import { Home } from '.';

describe('Home Page', () => {
    test('Render Page', () => {
        render(<Home />);
        
        const PageTilte = screen.getByText("Monitoramento de Semestre");

        expect(PageTilte).toBeInTheDocument();


    })

    test('Group Style', () => {
        render(<Home />);

        const group = screen.getByText("Grupo:");
       
        expect(group).toHaveClass("group");
        


    })

    
})