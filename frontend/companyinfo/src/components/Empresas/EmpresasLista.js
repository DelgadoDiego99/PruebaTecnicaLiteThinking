import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import obtenerEmpresas from './obtenerEmpresas';
import Empresa from './Empresa';

import './EmpresasLista.css';

function EmpresasLista(){

    const [empresas, setEmpresas] = useState([]);

    useEffect(() => {
        obtenerEmpresas().then(setEmpresas);
    }, []);

    let listaEmpresas = empresas.map(element => {
        return (<Empresa key= {element.url}
        nombre={element.NombreEmpresa} 
        telefono={element.Telefono}
        nit={element.NIT}
        direccion={element.Direccion}
        url={element.url}
        />);
    });

    return(
        <>
            <Container className="margins">
                <Row xs={1} md={4} className="g-4">
                    {listaEmpresas}
                </Row>
            </Container>
        </>
    );
}

export default EmpresasLista;