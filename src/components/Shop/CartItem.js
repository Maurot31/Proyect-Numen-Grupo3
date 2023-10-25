import { FcDeleteRow, FcDeleteDatabase } from "react-icons/fc";



const CartItem = ({ item, deleteFromCart }) => {
    // Verificar si la propiedad 'id' está definida en el objeto 'item'
    if (!item || !item.id) {
        return null; // O mostrar un mensaje de error, por ejemplo
    }

    const { id, name, price, quantity } = item;

    return (
        <>
            <div className="cart_item">
                <div className="cantidad">{quantity}</div>
                <h4>{name}</h4>
                <h5>$  {price * quantity}</h5>
                <div className="botones">
                    <FcDeleteRow size={'30px'} onClick={() => deleteFromCart(id)} />
                    <FcDeleteDatabase size={'30px'} onClick={() => deleteFromCart(id, true)} />
                </div>
            </div>
            <style jsx>{`
            
                .cart_item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem;
                    background-color: var(--first-color);
                    color: whitesmoke;
                    border-bottom: 1px solid gray;
                    border-radius: 8px;
                }

                .cantidad{
                    font-size: 1rem;
                    margin: 0.5rem;
                }

                h4{
                    font-size: 1.2rem;
                    text-shadow: 1px 1px 5px black;
                    margin: 1rem;
                    text-align: center;
                    margin: 0.5rem;
                }

                h5{
                    font-size: 1rem;
                    margin: 0.5rem;

                }

                .botones{
                    display: flex;
                    flex-direction: column;
                }
                
            

            `}</style>
        </>
    );
};

export default CartItem;