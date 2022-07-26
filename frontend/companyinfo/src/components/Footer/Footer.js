import React from "react"

import './Footer.css';

function Footer(){

    return(
        <>
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>Acerca</h6>
                            <p class="text-justify">CompanyInfo <i>INFORMACION DE EMPRESAS</i> es una página web donde se pueden almacenar la información de muchas empresas para luego ser visualizadas</p>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p>
                            <span class="copyright-text">Copyright &copy; 2022 All Rights Reserved by </span>
                        <a href="/">Becas</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;