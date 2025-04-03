import React, { useState } from "react";
import OrderMangoesForm from "./components/OrderMangoesForm";

type ProductType = { img: string; title: string; }

const ProductsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType>();
  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: "#FFFDF5",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center" as "center", // Explicitly specify the type
    width: "220px",
    display: "flex",
    flexDirection: "column",
    gap: "6px"
  };

  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "180px",
    borderRadius: "8px",
    objectFit: "cover",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#C9A04F",
    color: "white",
    border: "none",
    padding: "10px",
    width: "100%",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  };

  const products = [
    {
      img: "assets/img/products/01.webp", // Replace with actual image URL
      title: "Organic Kutch Kesar Mango",
      price: 1200
    },
    {
      img: "assets/img/products/02.webp", // Replace with actual image URL
      title: "Premium Kesar Mangoes",
      price: 1300
    },
    {
      img: "assets/img/products/03.webp", // Replace with actual image URL
      title: "Organic Ratnagiri Kesar Mango",
      price: 1250
    },
    {
      img: "assets/img/products/04.webp", // Replace with actual image URL
      title: "Organic Jumbo Kesar Mango (>500 gms)",
      price: 1400
    },
  ];

  return (
    <>
      <div style={{ paddingTop: "150px", paddingBottom: "150px", backgroundColor: "#FFF9EC", }}>
        <h3 style={{ textAlign: "center", color: "#573B1A" as "center" }}>
          Try Our Other Products
        </h3>
        <div style={containerStyle}>
          {products.map((product, index) => (
            <div key={index} style={cardStyle}>
              <img src={product.img} alt={product.title} style={imageStyle} />
              <div style={{flex: 1, display: "flex", flexDirection: "column"}}>
              <h4 style={{ color: "#573B1A", marginTop: "auto" }}>{product.title}</h4>
              <h4 style={{ color: "#573B1A", marginTop: "auto" }}>₹{product.price}</h4>

              </div>
              <button onClick={() => {
                setSelectedProduct(product);
                setIsModalOpen(true)
              }} style={buttonStyle}>Buy Now</button>
            </div>
          ))}
        </div>
      </div>
      {/* Product Modal */}
      <OrderMangoesForm product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ProductsPage;
