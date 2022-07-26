import React from "react";
import Cabecera from "../Navbar/Navbar";

import './Inicio.css';

function Inicio(){

    return(
        <>
            <Cabecera/>
            <div fluid border="dark" className="border border-dark div">
                <h1>Bienvenido a Becas.com</h1>
                <h4>Ingrese los datos para ingresar</h4>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}
export default Inicio;