import React from "react";
import Logo from "../../public/img/Logos/Logo.png";
import LogoFacebook from "../../public/img/Logos/Logo-facebook.png";
import LogoInstagram from "../../public/img/Logos/Logo-instagram.png";
import LogoTwitter from "../../public/img/Logos/Logo-twitter.png";

//Codigo estructura footer
const Footer = ()=>{
    return (
        <div className="contenedor-footer">
            <div className="contenedor-1">
                <div className="caja">
                    <figure className="figura-logo">
                        <div className='imagen-footer' style={{ logoImage: `url(${Logo})`,
                                                                width:'150px' }}>
                        </div> 
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
                            <div className="logo-red-social" style={{ facebookImage: `url(${LogoFacebook})`,
                                                                width:'40px;' }}></div> 
                        </a>
                        <a href='#' > 
                        <div className="logo-red-social" style={{ instagramImage: `url(${LogoInstagram})`,
                                                                width:'40px;' }}></div>
                        </a>
                        <a href='#'>
                        <div className="logo-red-social" style={{ twitterImage: `url(${LogoTwitter})`,
                                                                width:'40px;' }}></div>
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