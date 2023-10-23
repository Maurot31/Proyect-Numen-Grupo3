import React from "react";

const TextFooter=()=> {
    return (
        <>
{/* ☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷Contenido* */}
            <div className='text'>
                <h2>            SOBRE NOSOTROS                  </h2>
                <p>Somos una tienda online, creada en 2023, 
                que se dedica a vender remeras de personajes 
                de comics,series y anime.</p>
            </div>

{/* ☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷Estilos* */}
            <style jsx>{`
                .text
                {   height:             200px;
                    display:            flex;
                    flex-direction:     column;
                    justify-content:    center;
                    align-items:        center;
                    margin:             15px 5px 15px 5px;
                    text-shadow:        1px 1px 5px black;}

                h2
                {   font-size:          1.5rem;
                    margin:             25px 5px 15px 5px;
                    text-align:         center;}

                p
                {  text-align:          center;
                    padding:            0 5px 15px 5px;}

                @media screen and 
                (min-width: 768px)
                {   h2{ font-size:      2.2rem;}}

                @media screen and 
                (min-width: 1200px)
                {   h2{ font-size:      3rem;}}     
            `}</style>
        </>
    )
}

export default TextFooter;