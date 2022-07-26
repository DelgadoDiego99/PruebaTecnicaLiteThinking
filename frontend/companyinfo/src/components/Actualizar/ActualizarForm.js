import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { validarNumeroTelefono, validarNumeroNIT } from "../Validaciones";
import { obtenerUnaEmpresa } from "../Empresas/obtenerEmpresas";
import { API_URL } from "../url";
import PutEmpresa from "./putEmpresa";

import './ActualizarForm.css';

function ActualizarForm(){

    let id = window.location.href;
    id = id.replace("http://192.168.1.24:3000/empresas/",'');

    const [informacion, setInformacion] = useState(0);

    useEffect(() => {
        obtenerUnaEmpresa(API_URL + id).then(setInformacion)
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        let validated = true;

        if(!(validarNumeroNIT(event.target.elements.formNumeroNIT.value))){
            alert("Ingrese un número NIT válido");
            console.log(event.target.elements.formNumeroNIT.value);
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
                NIT: event.target.elements.formNumeroNIT.value,
                Telefono: event.target.elements.formTelefonoEmpresa.value,
            };
            PutEmpresa(data, id)
        }
    };

    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNombreEmpresa">
                    <Form.Label>Nombre de la empresa</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ingrese el nombre de la empresa" 
                        defaultValue={informacion.NombreEmpresa}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDireccionEmpresa">
                    <Form.Label>Direccion de la empresa</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ingrese la dirección de la empresa" 
                        defaultValue={informacion.Direccion}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNumeroNIT">
                    <Form.Label>NIT de la empresa</Form.Label>
                    <Form.Control 
                        type="text"     
                        minLength="10"
                        maxLength="10"
                        placeholder="Ingrese el número NIT de la empresa" 
                        defaultValue={informacion.NIT}
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
                        defaultValue={informacion.Telefono}
                        required
                    />
                    <Form.Text className="text-muted">
                        Ingrese el número telefónico sin puntos ni paréntesis.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Actualizar información
                </Button>
            </Form>
        </Container>
    )
}

export default ActualizarForm;