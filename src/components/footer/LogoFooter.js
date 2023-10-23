import React    from "react";
import Image    from "next/image";
import Logo     from "../../../public/img/Logos/Logo.png";

const LogoFooter=()=> {
  return (
    <>
{/* *Contenido☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷Contenido* */}
        <div>
          <Image  
                src     ={Logo} 
                width   ={100} 
                height  ={105} 
                alt     ="Logo" >
          </Image>
        </div>
    </>
  )
}

export default LogoFooter;