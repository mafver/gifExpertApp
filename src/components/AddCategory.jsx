import PropTypes from "prop-types";
import { useState } from "react"

export const AddCategory = ( { onNewCategory } ) => {
    
    const [inputValue, setinputValue] = useState('');

    const onInputChange = ( {target} ) =>{
        setinputValue( target.value );
    }

    const onSubmit = ( event ) =>{
        event.preventDefault();
        // Para evitar que se mande un carácter o espacio en blanco.
        if ( inputValue.trim().length <= 1) return;
        onNewCategory( inputValue.trim() );
        // Limpiar el texto del input
        setinputValue('');
    }

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ (event)=> onInputChange(event) }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}