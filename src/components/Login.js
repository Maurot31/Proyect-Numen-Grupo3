import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <>
            <div>
                <h3>Querés formar parte de nuestra comunidad?</h3>
                <p>No dejes pasar la oportunidad, sumate a la comunidad! Recibí todos los beneficios, descuentos y novedades</p>
                <li>
                    <Link href="/usuarios">Suscribete</Link>
                </li>
            </div>

            <style jsx>{`
                div{
                    height: 350px;
                    background-color: var(--first-color);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-shadow: 1px 1px 5px black ;
                }
                
                h3{
                    color: whitesmoke;
                    text-align: center;
                    font-size: 3rem;
                    margin: 15px 5px 15px 5px;
                }

                p{
                    margin: 15px 5px 25px 5px;
                    text-align: center;
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
                    margin-bottom: 15px;
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

            `}</style>
        </>
    )
}

export default Login