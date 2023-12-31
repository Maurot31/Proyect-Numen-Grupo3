import Image    from "next/image";
import React    from "react";
import Hulka    from "../../../public/img/imgPromo/Hulka_Linea.jpg";
import Samurai  from "../../../public/img/imgPromo/Samurai_linea.jpg";

const ImgPromo=()=> {
    return (
        <>
{/* *Contenido☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷Contenido* */}
            <div>
                <Image 
                    src     ={Hulka}
                    width   ={160}
                    height  ={250}
                    alt     ="hulka">
                </Image>
                <Image
                    src     ={Samurai}
                    width   ={160}
                    height  ={250}
                    alt     ="Samurai" >
                </Image>
            </div>

{/* *Estilos☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷Estilos* */}
            <style jsx>{`
                div
                {   height:             250px;
                    margin:             15px 15px 15px 15px;
                    display:            flex;
                    justify-content:    center;
                    gap:                15px;}
            `}</style>
        </>
    )
}

export default ImgPromo;