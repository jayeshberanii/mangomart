import React from 'react'
import ProductsPage from './ProductsPage'

const Products = () => {
  return (
        <div style={{ paddingTop: "150px", paddingBottom: "150px", backgroundColor: "#FFF9EC", }}>
        <h3 style={{ textAlign: "center", color: "#573B1A" as "center" }}>
          Try Our Other Products
        </h3>
        <ProductsPage />
        </div>
  )
}

export default Products