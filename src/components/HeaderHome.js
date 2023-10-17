import React from "react";
import background from "../../public/img/background-home.jpg";


const HeaderHome = () => {
    return (
        <>
            <div className="home" style={{ backgroundImage: `url(${background})`,
                                            width: '100%',
                                            height: '91vh',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: '65% 0%',
                                            backgroundColor: 'rgb(90, 90, 105)',
                                            backgroundBlendMode:'soft-light' }}>
                <h1>Heroe Wear</h1>
                <h2>Artículos de diseño</h2>
                <p>Remeras de comics, anime y películas</p>
            </div>
            


            <style jsx>{`
                .home{
                    height: 91vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                h1{
                    font-size: 5rem;
                    margin-top: 8rem;
                    text-shadow: 1px 1px 5px black;
                }

                h2{
                    margin-top: 15px;
                    text-shadow: 1px 1px 3px black;
                }

                p{
                    margin-top: 8px;
                    text-shadow: 1px 1px 1px black;
                }
                
                @media screen and (min-width: 768px) {
                    .home h1 {
                        font-size: 9rem;
                        margin-right: 20px;
                        margin-top: 5px;
                    }

                    h2{
                        margin-right: 20px;
                    }

                    p{
                        margin-right: 20px;
                    }

                    @media screen and (min-width: 1400px) {
                        .home h1 {
                            font-size: 9rem;
                            margin-right: 780px;
                            
                        }
    
                        h2{
                            margin-right: 850px;
                        }
    
                        p{
                            margin-right: 850px;
                            margin-bottom: 145px;
                        }
                }
            
                
                `}</style>
        </>
    )
}

export default HeaderHome