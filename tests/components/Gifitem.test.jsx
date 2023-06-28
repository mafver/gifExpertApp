import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <Giftitem.jsx>', () => { 
    const url = "https://one-punch-man.com/saitama.com"
    const title = "one punch man"
    test('Debe de verificar el Snapshot', () => { 
        const { container }  = render( <GifItem url={ url } title={ title }/>);
        expect( container ).toMatchSnapshot();
    });

    test('should Debe de mostar la imagen con el URL y el ALT indicado', () => { 
        render( <GifItem title={ title } url={ url }/>);
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    test('should Debe de mostrar el título en el componente', () => { 
        render( <GifItem title={ title } url={ url }/>);
        expect( screen.getByText(title) ).toBeTruthy();
    })
});
        