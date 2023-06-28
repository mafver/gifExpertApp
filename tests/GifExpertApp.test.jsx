import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp/>', () => { 
    test('Debe coincidir con el snapshoot', () => {
        const { container } = render( <GifExpertApp/>);
        expect( container ).toMatchSnapshot();
    });

    test('Debe de obtener el cargando antes de cargar las imágenes.', () => {
        render( <GifExpertApp />) 
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        expect( screen.getByText("Cargando...")).toBeTruthy();
    });

    test('Debe de mostar el nombre del valor de inputValue, luego de un evento', () => {
        const inputValue = 'Naruto';
        
        render( <GifExpertApp />) 
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        // realizar un evento.
        fireEvent.input( input, { target:{ value: inputValue } });
        fireEvent.submit( form );
        expect( screen.getByText( inputValue )).toBeTruthy();

    });

    test('Debe de mostrar una lista de imágenes cuando se ingresa un valor', async() => {
        const inputValue = 'Naruto';
        
        render( <GifExpertApp />) 
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        // realizar un evento.
        fireEvent.input( input, { target:{ value: inputValue } });
        fireEvent.submit( form );
        await waitFor(
            () => expect( screen.getAllByRole( 'img' ).length ).toBeGreaterThan(0)
        )

        expect( screen.getAllByRole( 'img' ).length ).toBeGreaterThan(0);

    });
});
    
    