import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import './Navbar.css';

function Cabecera(){

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/populares">CompanyInfo</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="/empresas">Empresas</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Cabecera;