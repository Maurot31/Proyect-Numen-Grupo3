import React from "react";
import { products } from "./Shop";
import AddButton from "./AddButton";

const FeaturedProducts = () => {
  if (!products) return null;

  // aplico filtro para productos destacados. Colocar ID que quiero filtrar.
  const featuredProducts = products.filter((product) => [1, 2,3,4, 5, 6, 7, 8].includes(product.id));

  return (
    <>
      <div className="featured-products">
        <h2>Productos Destacados</h2>
        <div className="product-list">
          {featuredProducts.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.imageUrl} alt={product.name} width={200} height={200} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <AddButton />
            </div>
          ))}
        </div>
      </div>


      <style jsx>{`
        .featured-products
        {   min-width:          200px;
            min-height:         275px;
            margin:             0 auto;
            text-align:         center;
            position:           relative;
            top:                80px;
            margin-bottom:      80px;}
        
        .product-list
        {   display:            flex;
            flex-wrap:          wrap;
            justify-content:    center;}
        
        .product
        {   margin:             20px;
            max-width:          200px;}
        
        .product img
        {   max-width:          100%;
            height:             auto;
            border:             1px solid #ccc;
            border-radius:      8px;}
        
        .product h3,h2
        {   margin:             10px 0;
            color:              #FFFFFF;}

        .product h2
        {   font-size:          20x;}

        .product h3
        {   font-size:          18px;}
        
        .product p
        {   font-size:          16px;
            font-weight:        bold;
            color:              #007bff;
            margin:             0;
            margin-bottom:      10px;}
      `}</style>
    </>
  );
};

export default FeaturedProducts;
