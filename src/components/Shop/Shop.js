import React      from "react";
import AddButton  from "./AddButton";
import Image      from "next/image";

const Shop = () => {

  const products = [
    { id:       1,
      name:     "Producto Destacado 1",
      price:    "$100",
      imageUrl: "/img/Products/batman/prod-batman-00003.png",},

    { id:       2,
      name:     "Producto Destacado 2",
      price:    "$120",
      imageUrl: "/img/Products/dragon-ball/prod-dragonball-00002.png",},

    { id:       3,
      name:     "Producto Destacado 3",
      price:    "$150",
      imageUrl: "/img/Products/macross/prod-macross-00002.png",},

    { id:       4,
      name:     "Producto Destacado 4",
      price:    "$1550",
      imageUrl: "/img/Products/dc/prod-dc-00001.png",},

    { id:       5,
      name:     "Producto Destacado 5",
      price:    "$100",
      imageUrl: "/img/Products/batman/prod-batman-00002.png",},

      { id:       6,
        name:     "Producto Destacado 1",
        price:    "$100",
        imageUrl: "/img/Products/batman/prod-batman-00003.png",},
  
      { id:       7,
        name:     "Producto Destacado 2",
        price:    "$120",
        imageUrl: "/img/Products/dragon-ball/prod-dragonball-00002.png",},
  
      { id:       8,
        name:     "Producto Destacado 3",
        price:    "$150",
        imageUrl: "/img/Products/macross/prod-macross-00002.png",},
  
      { id:       9,
        name:     "Producto Destacado 4",
        price:    "$1550",
        imageUrl: "/img/Products/dc/prod-dc-00001.png",},
  
      { id:       10,
        name:     "Producto Destacado 5",
        price:    "$100",
        imageUrl: "/img/Products/batman/prod-batman-00002.png",},

        { id:       11,
            name:     "Producto Destacado 1",
            price:    "$100",
            imageUrl: "/img/Products/batman/prod-batman-00003.png",},
      
          { id:       12,
            name:     "Producto Destacado 2",
            price:    "$120",
            imageUrl: "/img/Products/dragon-ball/prod-dragonball-00002.png",},
      
          { id:       13,
            name:     "Producto Destacado 3",
            price:    "$150",
            imageUrl: "/img/Products/macross/prod-macross-00002.png",},
      
          { id:       14,
            name:     "Producto Destacado 4",
            price:    "$1550",
            imageUrl: "/img/Products/dc/prod-dc-00001.png",},
      
          { id:       15,
            name:     "Producto Destacado 5",
            price:    "$100",
            imageUrl: "/img/Products/batman/prod-batman-00002.png",},

            { id:       16,
                name:     "Producto Destacado 5",
                price:    "$100",
                imageUrl: "/img/Products/batman/prod-batman-00002.png",},
  ];

  return (
    <>

        <div className="shop">
            <h2>Tienda</h2>
            <div className="product-list">
                {products.map(product => (
                    <div className="product" key={product.id}>
                        <Image
                            src     ={product.imageUrl}
                            width   ={200}  
                            height  ={200}
                            alt     ={product.name}>
                        </Image>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <AddButton />
                    </div>
                ))}
            </div>
        </div>

/* /* *Estilos☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷Estilos* */ */
      <style jsx>{`
        .shop
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
export default Shop;