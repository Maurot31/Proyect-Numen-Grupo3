import React            from "react";
import Image            from "next/image";
import LogoFacebook     from "../../../public/img/Logos/Logo-facebook.png";
import LogoInstagram    from "../../../public/img/Logos/Logo-instagram.png";
import LogoTwitter      from "../../../public/img/Logos/Logo-twitter.png";

const RedesFooter=()=> {
  return (
    <>
{/* *Contenido☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷Contenido* */}
        <div className="contenedor">
            <h2>SIGUENOS</h2>
            <div className="redes">
                <Image  
                    src     ={LogoFacebook} 
                    width   ={50} 
                    height  ={50} 
                    alt     ="Logo Facebook" >
                </Image>
                <Image  
                    src     ={LogoInstagram} 
                    width   ={50} 
                    height  ={50} 
                    alt     ="Logo Instagram" >
                </Image>
                <Image  
                    src     ={LogoTwitter} 
                    width   ={50} 
                    height  ={50} 
                    alt     ="Logo Twitter" >
                </Image>
            </div>
        </div>

{/* *Estilos☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷Estilos* */}
        <style jsx>{`
            .contenedor
            {   display:            flex;
                flex-direction:     column;
                align-items:        center;}

            h2 
            {   margin-bottom:      20px;}
    
            .redes
            {   display:            flex;
                justify-content:    space-between;}

            .redes > :global(img)
            {   margin-right:       20px;}
        `}</style>
    </>
  )
}

export default RedesFooter;