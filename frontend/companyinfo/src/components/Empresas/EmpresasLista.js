import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import obtenerEmpresas from './obtenerEmpresas';
import Empresa from './Empresa';
import Cabecera from '../Navbar/Navbar';

import './EmpresasLista.css';

function EmpresasLista(){

    const [empresas, setEmpresas] = useState([]);

    useEffect(() => {
        obtenerEmpresas().then(setEmpresas);
    }, []);

    console.log(empresas)

    let listaEmpresas = empresas.slice(0,6).map(element => {
        return (<Empresa key= {element.url}
        nombre={element.NombreEmpresa} 
        telefono={element.Telefono}
        nit={element.NIT}
        direccion={element.Direccion}
        />);
    });

    return(
        
        <>
            <Cabecera/>
            <Container className="margins">
            <Row xs={1} md={2} className="g-4">
                {listaEmpresas}
            </Row>
            </Container>
        </>
    );
}

export default EmpresasLista;