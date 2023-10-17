import React from 'react'
import Link from 'next/link'


const TextPromo = () => {
    return (
        <>

            <div className='text'>
                <h3>Enterate de nuestras<br />novedades <span>Heroe</span></h3>
                <p>Modelos temporales, nuevas telas y colores</p>
                <li>
                    <Link href="/tienda">Comprar Ahora</Link>
                </li>
            </div>


            <style jsx>{`
                .text{
                    height: 200px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin: 15px 5px 15px 5px;
                    text-shadow: 1px 1px 5px black;
                }

                h3{
                    font-size: 2rem;
                    margin: 25px 5px 15px 5px;
                    text-align: center;
                }

                span{
                    color: #F22E42;
                }

                p{
                    text-align: center;
                    padding: 0 5px 15px 5px;
                }

                li {
                    margin-bottom: 50px;
                    padding: 17px 40px;
                    border-radius: 50px;
                    border: 0;
                    background-color: #172556;
                    box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    font-size: 15px;
                    transition: all .3s ease;
                   }
                   
                   li:hover {
                    letter-spacing: 3px;
                    background-color: #F22E42;
                    color: hsl(0, 0%, 100%);
                    box-shadow: #F22E42 0px 7px 29px 0px;
                   }
                   
                   li:active {
                    letter-spacing: 3px;
                    background-color: hsl(261deg 80% 48%);
                    color: hsl(0, 0%, 100%);
                    box-shadow: #F22E42 0px 0px 0px 0px;
                    transform: translateY(10px);
                    transition: 100ms;
                   }

                @media screen and (min-width: 768px) {
                    h3{
                        font-size: 3rem;
                    
                    }

                @media screen and (min-width: 1200px) {
                    h3{
                        font-size: 5rem;
                    
                    }
                }        
              
                
            `}</style>
        </>
    )
}

export default TextPromo