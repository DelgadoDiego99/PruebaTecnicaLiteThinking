import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { validarNumeroTelefono, validarNumeroNIT } from "../Validaciones";
import PostEmpresa from "./postEmpresa";

import './Formulario.css';

function Formulario(){

    const [informacion, setInformacion] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        let validated = true;

        if(!(validarNumeroNIT(event.target.elements.formNumeroNIT.value))){
            alert("Ingrese un número NIT válido");
            validated = false;
        }
        if(!(validarNumeroTelefono(event.target.elements.formTelefonoEmpresa.value))){
            alert("Ingrese un número telefónico válido");
            validated = false;
        }
        if(validated){
            let data = {
                NombreEmpresa: event.target.elements.formNombreEmpresa.value,
                Direccion: event.target.elements.formDireccionEmpresa.value,
                NIT: parseInt(event.target.elements.formNumeroNIT.value),
                Telefono: parseInt(event.target.elements.formTelefonoEmpresa.value)
            }
            setInformacion(data);
            PostEmpresa(informacion);
        }
    };

    return(
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNombreEmpresa">
                    <Form.Label>Nombre de la empresa</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ingrese el nombre de la empresa" 
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDireccionEmpresa">
                    <Form.Label>Direccion de la empresa</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ingrese la dirección de la empresa" 
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNumeroNIT">
                    <Form.Label>NIT de la empresa</Form.Label>
                    <Form.Control 
                        type="text" 
                        minLength="12"
                        maxLength="12"
                        placeholder="Ingrese el número NIT de la empresa" 
                        required
                    />
                    <Form.Text className="text-muted">
                        Ingrese el número del NIT sin puntos.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTelefonoEmpresa">
                    <Form.Label>Teléfono de la empresa</Form.Label>
                    <Form.Control 
                        type="text" 
                        minLength="10"
                        maxLength="10" 
                        placeholder="Ingrese el número telefónico de la empresa" 
                        required
                    />
                    <Form.Text className="text-muted">
                        Ingrese el número telefónico sin puntos ni paréntesis.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registrar empresa
                </Button>
            </Form>
        </>
    )
}

export default Formulario;

