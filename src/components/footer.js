import React from "react";

const Footer = ()=>{
    return (
        <div className="contenedor-footer">
            <div className="contenedor-1">
                <div className="caja">
                    <figure className="figura-logo">
                        <img  src={require(`../imagenes/Logos/Logo.png`)} className='imagen-footer' alt='Logo de la Pagina' /> 
                    </figure>         
                </div>
                <div className="caja">
                    <h2>SOBRE NOSOTROS</h2>
                    <p>Somos una tienda online, creada en 2023, que se dedica a vender remeras de personajes de comics,series y anime. </p>
                </div>
                <div className="caja">
                    <h2>SIGUENOS</h2>
                    <div className="red-social">
                        <a href='#' >
                            <img className="logo-red-social" src={require(`../imagenes/Logos/Logo-facebook.png`)} alt="logo-facebook" /> 
                        </a>
                        <a href='#' > 
                            <img className="logo-red-social" src={require(`../imagenes/Logos/Logo-instagram.png`)} alt="logo-instagram" />
                        </a>
                        <a href='#'>
                            <img className="logo-red-social" src={require(`../imagenes/Logos/Logo-twitter.png`)} alt="logo-twitter" />
                        </a>
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
            color: #FFFF;
        }
        
        .contenedor-1{
            max-width: 1200px;
            margin: auto;
            display: grid;
            width: 70%;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 30px;
            padding: 35px 0px;
        }
        
        .figura-logo{
            width:100%;
            height:100%;
            display:flex;
            justify-center:center;
            align-items:center;
        }

        .imagen-footer{
            width:150px;
        }

        .caja<h2{
            margin-bootom:25px;
            font-size:20px;
        }

        .caja p{
            margin-bootom:10px; 
        }

        .red-social a{
            display:inline-block;
            text-decoration:none;
            width:45px;
            line-height:45px;
            margin-right:10px;
            text-align: center;   
        }

        .logo-red-social{
            width:40px; 
        }

        .contenedor-2{
            background-color:#424242;
            padding:15px 10px;
            text-align: center;
        }

        @media screen and (min-width:750px){
            .contenedor-1{
                width: 100%;
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 50px;
                padding: 45px 0px;
            }
        }

        @media screen and (max-width:360px){
            .contenedor-1{
                width: 40%;
                grid-template-columns: repeat(1, 1fr);
                grid-gap: 20px;
                padding: 20px 0px;
            }
        }

        `}</style>
        </div>
           
    );
}

export default Footer;