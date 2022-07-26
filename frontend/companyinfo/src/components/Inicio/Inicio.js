import React from "react";
import Cabecera from "../Navbar/Navbar";
import Formulario from "../Formulario/Formulario";
import { Container } from "react-bootstrap";

import './Inicio.css';

function Inicio(){

    return(
        <>
            <Cabecera/>
            <Container className="margins">
                <Formulario/>
            </Container>
        </>
    )
}
export default Inicio;