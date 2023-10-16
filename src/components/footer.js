import React from "react";

const Footer = ()=>{
    return (
        <div className="contenedor-footer">
            <div className="contenedor-1">
                <div className="caja">          
                    <img  src='../img/Logo.png' className='imagen-footer' 
                                                alt='Logo de la Pagina'  
                                                style={{ width: `100px`    }}/>
                                                                        
                                                                                                     
                </div>
                <div className="caja">
                    <h2>SOBRE NOSOTROS</h2>
                    <p>Somos una tienda online que se dedica a vender remeras de diferentes personajes de comics y demas estilos </p>
                </div>
                <div className="caja">
                    <h2>SIGUENOS</h2>
                    <div className="red-social">
                        <a href='#' className="icono-facebook"> </a>
                        <a href='#' className="icono-instagram"> </a>
                        <a href='#' className="icono-twitter"> </a>
                    </div>
                </div>
            </div>
            <div className="contenedor-2">
                <small>&copy; 2023 <b>Heroe Wear</b> - Todos los Derechos son Reservados </small>
            </div>
        <style jsx>{`
        .contenedor-footer{
            width: 100%;
            background-color: #252629;
        }
        
        .contenedor-1{
            width: 100%;
            max-width: 1200px;
            margin: auto;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 50px;
            padding: 45px 0px;
        }
        `}</style>
        </div>
        
        
    );
}

export default Footer;