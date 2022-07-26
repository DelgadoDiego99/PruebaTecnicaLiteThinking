import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ActualizarForm from "./ActualizarForm";

import './ActualizarPagina.css';

function ActualizarPagina(props){

    console.log(props.id);

    return(
        <>
            <Container className="margins">
                <ActualizarForm />
            </Container>
        </>
    )
}

export default ActualizarPagina;