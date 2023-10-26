import { useReducer } from "react"
import { shoppingReducer } from "../reducer/shoppingReducer"
import { shoppingInitialState } from "../reducer/shoppingInitialState"
import Product from "./Product"
import Carrito from "./Carrito"
import CartWidget from "./CartWidget"

const ShoppingCart = () => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

    const { products, cart } = state

    const addToCart = (id) => dispatch({ type: "ADD_TO_CART", payload: id })

    const deleteFromCart = (id, all = false) => {

        if (all) {
            dispatch({ type: "REMOVE_ALL_PRODUCTS", payload: id })
        } else {
            dispatch({ type: "REMOVE_ONE_PRODUCT", payload: id })
        }
    }

    const clearCart = () => dispatch({ type: "CLEAR_CART" })

    return (
        <>
            <div className="title">
                <h2>Tienda</h2>
                <div></div>
                <CartWidget />
            </div>
            <div className='box grid-responsive'>
                {
                    products.map((product) => <Product key={product.id} product={product} addToCart={addToCart} />)
                }

            </div>

            <Carrito cart={cart} deleteFromCart={deleteFromCart} clearCart={clearCart} />


            <style jsx>{`
                .title{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    height: 70px;
                    border-bottom: 2px solid whitesmoke;
                }
                h2{
                    font-size: 2rem;
                    letter-spacing: 2px;
                }
                .grid-responsive{
                    display: grid;
                    justify-items: center;
                    gap: 1rem;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                }
            `}</style>
        </>
    )
}

export default ShoppingCart