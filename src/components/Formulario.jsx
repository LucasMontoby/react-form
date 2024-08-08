import React, {useState} from 'react';

function Formulario (){
    const [inputValue, setInputValue] = useState('');
    const[valorEnviado, setValorEnviado] = useState('');
    
    const manejarCambios = (e) =>{
        setInputValue(e.target.value);
    };

    const manejarEnvio = (e) =>{
        e.preventDefault();
        setValorEnviado(inputValue);
        setInputValue('');
    }

    return(
        <div>
            <form onSubmit={manejarEnvio}>
                <label>
                    Ingresa un texto:
                    <input type="text" value={inputValue} onChange={manejarCambios}/>
                </label>
                <button type="submit">Enviar</button>
            </form>
            
            <p>Valor enviado: {valorEnviado}</p>

        </div>
    )
}

export default Formulario;