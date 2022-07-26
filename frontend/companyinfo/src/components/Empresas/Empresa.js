import React from 'react';
import { Col, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import './Empresa.css';

function Empresa(props){
    let id = props.id;

    return(
        <Col>
            <Card border="dark" className="space">
                <Card.Body>
                    <Card.Title>{props.nombre}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><b>Dirección: </b>{props.direccion}</ListGroupItem>
                    <ListGroupItem><b>NIT: </b>{props.nit}%</ListGroupItem>
                    <ListGroupItem><b>Telefono: </b>{props.telefono}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button variant="primary" href={id}>Modificar</Button>
                    <Button variant="danger" /*onClick=eliminarEmpresa()*/>Eliminar</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Empresa;