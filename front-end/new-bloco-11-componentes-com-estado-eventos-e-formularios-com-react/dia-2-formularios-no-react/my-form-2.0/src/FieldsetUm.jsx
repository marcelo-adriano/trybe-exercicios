import React from "react";
import './Fieldset.css'

class FieldsetUm extends React.Component {
    render() {
        return(
            <fieldset>
                <label>Nome: <input></input></label>
                <label>Email: <input></input></label>
                <label>CPF: <input></input></label>
                <label>Endereço: <input></input></label>
                <label>Cidade: <input></input></label>
                <label>Estado: <input></input></label>
                <label>Tipo: <input></input></label>
            </fieldset>
        );
    }
}

export default FieldsetUm;
