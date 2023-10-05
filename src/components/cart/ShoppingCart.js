////////////////////////////////////////////////////////////////
////////  CODIGO A REVISAR - USAR DE BASE /////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

import { useReducer } from "react"
import { shoppingInitialState } from "../reducer/shoppingInitialState"
import { shoppingReducer } from "../reducer/shoppingReducer"
import { TYPES } from "../actions/actions"


const ShoppingCart = () => {

    const [state, dispach] = useReducer(shoppingReducer, shoppingInitialState)

    const { products, cart } = state;


    

    const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id })

    const deleteFromCart = (id, all = false) => {
        if (all) {
            dispach({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id })
        } else {
            dispach({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id })
        }
    }

    const clearCart = () => dispach({ type: TYPES.CLEAR_CART })

    return (
        <>

            <h2>Carrito de compras</h2>
            <h3>Productos</h3>
            <div className="box grid-responsive">
                {products.map((product) =>
                    <Product key={product.id} product={product} addToCart={addToCart} />
                )}
            </div>

            <h3>Carrito</h3>
            <div className="box">
                {cart.map((item, i) =>
                    <CartItem key={i} item={item} deleteFromCart={deleteFromCart} />
                )}
            </div>
            <button onClick={clearCart}>Limpiar Carrito</button>

        </>
    )
}

export default ShoppingCart