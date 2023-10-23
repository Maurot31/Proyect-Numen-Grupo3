import React        from "react";
import ImgPromo     from "./ImgPromo";
import TextPromo    from "./TextPromo";

const SectionPromo=()=> {
    return (
        <>
{/* *Contenido☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷Contenido* */}
            <div className="contain"> 
                <ImgPromo />
                <TextPromo />
            </div>

{/* *Estilos☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷Estilos* */}
            <style jsx>{`
                .contain
                {   height:                 70vh;}

                @media screen and 
                (min-width: 768px)
                {   .contain
                    {   height:             60vh;
                        display:            flex;
                        justify-content:    space-around;
                        align-items:        center;}}
            `}</style>
        </>
    )
}

export default SectionPromo;