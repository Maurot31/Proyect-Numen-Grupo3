import React from 'react'
import { AiOutlineClose } from "react-icons/ai";

/***********************************Falta la programacion del boton de si y agregar al carrito */

const Modal = ({ showmodal, setshowModal, addToCart, productId }) => {

    const handleAddToCart = () => {
        addToCart(productId);
        setshowModal(false);
      };
    
    return (
        <>
            {showmodal &&
                <div className="overlay">
                    <div className="container">
                        <div className="encabezado">
                            <button  className="cerrar">
                              <AiOutlineClose size={'3rem'} 
                                              onClick={() => setshowModal(false)} />
                            </button>
                        </div>
                        <div className="text">
                            <h4>Queres agregar el producto al carrito?</h4>
                            <button onClick={handleAddToCart} className='aceptar'>si</button>
                        </div>
                    </div>
                </div>
            }
            
            <style jsx>{`
                .overlay{
                    width: 100%;
                    height: 100vh;
                    position: fixed;
                    top: 0;
                    left: 0;
                    background: rgba(0, 0 , 0, .5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .container{
                    width: 500px;
                    min-height: 200px;
                    background: #424242;
                    position: relative;
                    border-radius: 15px;
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                    
                }

                .encabezado{
                    border-top-right-radius: 15px;
                    border-top-left-radius: 15px;
                    height: 35px;
                    background: #252629;
                    display: flex;
                    justify-content: flex-end;
                    margin-bottom: 30px;
                }

                .cerrar{
                    display: flex;
                    align-items: center;
                    margin-right: 15px;
                    width: 30px;
                    height: 30px;
                    border: none;
                    background: none;
                    cursor: pointer;
                    border-radius: 55px;
                    color: #F22E42;
                    transition: .3s;
                }

                .cerrar:hover{
                    background:#424242;
                }

                .text > h4{
                    font-size: 1.4rem;
                    text-align: center;
                    text-shadow: 1px 1px 5px black;
                    margin-bottom: 55px;
                }

                .aceptar{
                    
                    background-color: #172556;
                    color:white;
                    border:none;
                    border-radius: .3rem;
                    padding: 5px 10px;
                    text-transform: uppercase;
                    box-shadow: 0px 2px 2px -1px black;
                    transition: 0.3s;
                    width: 95%;
                    
                }

                button:hover {
                    box-shadow: 0px 2px 2px 0.1px black;
                    
                }

            `}</style>
        </>
    )
}

export default Modal