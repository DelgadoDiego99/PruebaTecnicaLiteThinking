import React from "react";
import Formulario from "../Formulario/Formulario";
import { Container } from "react-bootstrap";

import './Inicio.css';

function Inicio(){

    return(
        <>
            <Container className="margins">
                <Formulario/>
            </Container>
        </>
    )
}
export default Inicio;