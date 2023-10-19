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
                    background-color: #252629;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23440044' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23555554'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
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