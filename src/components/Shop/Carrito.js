import CartItem from './CartItem'
import React from 'react'

const Carrito = ({ cart, deleteFromCart, clearCart }) => {

    return (
        <>
            <div className="carrito">
                <h3>Tu Carrito</h3>
                <div className="box">
                    {
                        cart.map((item, i) => <CartItem key={i} item={item} deleteFromCart={deleteFromCart} />)
                    }
                </div>
                <div className="boton">
                    <button onClick={clearCart}>Vaciar carrito</button>
                </div>
            </div>

            <style jsx>{`
                .carrito{
                    display: flex;
                    align-items: space-between;
                    flex-direction: column;
                    width: 400px;
                    background-color: var(--first-color);
                    border-radius: 8px;
                }
                .carrito > h3{
                    text-align: center;
                    font-size: 1.8rem;
                    text-shadow: 1px 1px 5px black;
                    letter-spacing: 2px;
                    margin-top: 15px;
                }
                .box{
                    padding: 0.5rem;
                    margin: 1rem;
                    background-color: var(--third-color);
                    border-radius: 8px;
                }
                .boton{
                    display: flex;
                    justify-content: center;
                }
                 
                button{
                    background-color: #172556;
                    color:white;
                    border:none;
                    border-radius: .3rem;
                    padding: 5px 10px;
                    text-transform: uppercase;
                    box-shadow: 0px 2px 2px -1px black;
                    transition: 0.3s;
                    width: 95%;
                    margin-bottom: 5px;
                    
                }
                button:hover {
                    box-shadow: 0px 2px 2px 0.1px black;
                    
                }    
                    
            `}</style>
        </>
    )
}

export default Carrito