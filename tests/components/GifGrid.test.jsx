import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../../src/hooks/useFetchGifs')

describe('Pruebas en el componente <GifGrid/>', () => { 
    const category = "One Punch Man"
    test('Debe de mostrar el loading inicialmente', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render( <GifGrid category={ category } />);
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText( category ));
        
    });

    
    test('Debe de mostrar items cuando se cargan las imágenes de useFetchGifs', () => { 
        // Mock del hook.
        const gifs = [{
            id: 'ABC',
            title: 'Saitama',
            url: 'https://localhost/saitama.com'
            },{
                id: 'XYZ',
                title: 'Goku',
                url: 'https://localhost/goku.com'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render( <GifGrid category={ category } />);
        expect( screen.getAllByRole( 'img' ).length ).toBe(2);
        
    });
   
 })