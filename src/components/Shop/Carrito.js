import CartItem from "./CartItem";
import { AiOutlineClose } from "react-icons/ai";

const Carrito = ({
  cart,
  deleteFromCart,
  clearCart,
  showCarrito,
  setShowCarrito,
}) => {
  return (
    <>
      {showCarrito && (
        <div className="carrito">
          <div className="encabezado">
            <h3>Tu Carrito</h3>
            <button className="cerrar">
              <AiOutlineClose
                size={"2rem"}
                onClick={() => setShowCarrito(false)}
              />
            </button>
          </div>
          <div className="box">
            {cart.length === 0 ? (
              <h5>Tu carrito se encuetra vacío</h5>
            ) : (
              cart.map((item, i) => (
                <CartItem key={i} item={item} deleteFromCart={deleteFromCart} />
              ))
            )}
          </div>

          {cart.length === 0 ? (
            <div></div>
          ) : (
            <div className="boton">
              <button className="vaciar_carrito" onClick={clearCart}>
                Vaciar carrito
              </button>
              <button className="vaciar_carrito">Pagar</button>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        .carrito {
          position: absolute;
          z-index: 2;
          top: 400px;
          right: 0;
          display: flex;
          align-items: space-between;
          flex-direction: column;
          width: 400px;
          background-color: var(--first-color);
          border-radius: 8px;
        }

        .encabezado {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-left: 1.1rem;
          padding-right: 1.1rem;
        }

        h3 {
          text-align: center;
          font-size: 1.8rem;
          text-shadow: 1px 1px 5px black;
          letter-spacing: 2px;
          margin-top: 15px;
        }

        .cerrar {
          display: flex;
          align-items: center;
          margin-right: 15px;
          width: 30px;
          height: 30px;
          border: none;
          background: none;
          cursor: pointer;
          border-radius: 55px;
          color: #f22e42;
          transition: 0.3s;
        }

        .box {
          text-align: center;
          padding: 0.5rem;
          margin: 1rem;
          background-color: var(--third-color);
          border-radius: 8px;
        }

        h5 {
          color: whitesmoke;
          font-size: 0.9rem;
        }

        .boton {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .vaciar_carrito {
          background-color: #172556;
          color: white;
          border: none;
          border-radius: 0.3rem;
          padding: 5px 10px;
          text-transform: uppercase;
          box-shadow: 0px 2px 2px -1px black;
          transition: 0.3s;
          width: 95%;
          margin-bottom: 5px;
        }
        .vaciar_carrito:hover {
          box-shadow: 0px 2px 2px 0.1px black;
        }

        @media screen and (max-width: 768px) {
          .carrito {
            top: 195px;
            width: 300px;
          }
        }
      `}</style>
    </>
  );
};

export default Carrito;
