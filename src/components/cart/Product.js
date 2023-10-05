////////////////////////////////////////////////////////////////
////////  CODIGO A REVISAR - USAR DE BASE /////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


const Product = ({product, addToCart}) =>{

    const{id, name, price} = product;
    
    return (
    
                <div className="product">
    
                <h4>{name}</h4>
                <h5>$ {price}</h5>
                <button onClick={()=>addToCart(id)}>Add to Cart</button>
                </div>
    
    )
    }
    export default Product