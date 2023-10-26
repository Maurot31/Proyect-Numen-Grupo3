import AddButton from './AddButton'
import Image from 'next/image';


const Product = ({ product, addToCart }) => {

  const { id, name, price, imageUrl } = product

  return (
    <>

      <div className="product">
        <Image src={imageUrl} width={200} height={200} alt={name}></Image>
        <h3>{name}</h3>
        <p>${price}</p>
        <AddButton id={id} addToCart={addToCart} />
      </div>


      <style jsx>{`
            
                
                .product {
                  margin: 20px;
                  max-width: 200px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                }
                
                .product img {
                  max-width: 100%;
                  height: auto;
                  border: 1px solid #ccc;
                  border-radius: 8px;
                }
                
                h3{
                  margin: 10px 0;
                  color:#FFFFFF;
                  font-size: 18px;
                }
            
                
                p {
                  font-size: 16px;
                  font-weight: bold;
                  color: #007bff;
                  margin: 0;
                  margin-bottom: 10px;
                }
            `}</style>
    </>
  )
}

export default Product