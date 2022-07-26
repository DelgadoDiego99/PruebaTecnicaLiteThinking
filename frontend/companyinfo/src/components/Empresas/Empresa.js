import React from 'react';
import { Col, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import './Empresa.css';

function eliminarEmpresa(url){
    let requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json',
        }
    };
    
    var opcion = window.confirm("¿Está seguro que desea eliminar la información de esta empresa?");

    if(opcion == true) {
        fetch(url, requestOptions)
        .then(response => {
            if(response.ok){
                window.location.reload();
            }else{
                alert("Error en la eliminación");
            }
        });
    }
}

function Empresa(props){

    let url = props.url;
    url = url.replace("https://companyinfodb.herokuapp.com/empresa/", "");

    return(
        <Col>
            <Card border="dark" className="space">
                <Card.Body>
                    <Card.Title>{props.nombre}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><b>Dirección: </b>{props.direccion}</ListGroupItem>
                    <ListGroupItem><b>NIT: </b>{props.nit}</ListGroupItem>
                    <ListGroupItem><b>Telefono: </b>{props.telefono}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button variant="primary" href={"empresas/" + url}>Actualizar</Button>
                    <Button variant="danger" onClick={() => { eliminarEmpresa(props.url) }}>Eliminar</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Empresa;