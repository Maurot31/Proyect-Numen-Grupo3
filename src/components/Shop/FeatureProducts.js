import AddButton from "./AddButton";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Producto Destacado 1',
      price: '$100',
      imageUrl: './media/Products/batman/prod-batman-00002.png',
    },
    {
      id: 2,
      name: 'Producto Destacado 2',
      price: '$120',
      imageUrl: './media/Products/dc/prod-dc-00001.png',
    },
    {
      id: 3,
      name: 'Producto Destacado 3',
      price: '$150',
      imageUrl: './media/Products/dc/prod-dc-00001.png',
    },
    {
      id: 4,
      name: 'Producto Destacado 4',
      price: '$1550',
      imageUrl: './media/Products/dc/prod-dc-00001.png',
    },
    {
      id: 5,
      name: 'Producto Destacado 5',
      price: '$100',
      imageUrl: './media/Products/batman/prod-batman-00002.png',
    },

  ];

  return (
    <>
    <div className="featured-products">
      <h2>Productos Destacados</h2>
      <div className="product-list">
        {products.map(product => (
          <div className="product" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <AddButton />
          </div>
        ))}
      </div>
    </div>
    
<style jsx>{`
                .featured-products {
                  min-width: 200px;
                  min-height: 275px;
                  
                  margin: 0 auto;
                  text-align: center;
                  position: relative;
                  top: 80px;
                }
                
                .product-list {
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: center;

                }
                
                .product {
                  margin: 20px;
                  max-width: 200px;
                }
                
                .product img {
                  max-width: 100%;
                  height: auto;
                  border: 1px solid #ccc;
                  border-radius: 8px;
                }
                
                .product h3,h2 {
                  margin: 10px 0;
                  color:#091835;
                }
                .product h2 {
                  font-size: 20x;
                }
                .product h3 {
                  font-size: 18px;
                }
                
                .product p {
                  font-size: 16px;
                  font-weight: bold;
                  color: #007bff;
                  margin: 0;
                }
                
                `}</style>

              </>



  );
};

export default FeaturedProducts;
