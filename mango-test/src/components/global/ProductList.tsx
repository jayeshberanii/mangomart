import { ProductType } from "../../types/product"
import ProductCard from "./ProductCard"

const ProductList = ({products}: {products: ProductType[]}) => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
        {
            products.map((product, idx) => {
                return (
                    <ProductCard key={idx + 1} product={product} />
                )
            })
        }
    </div>
  )
}

export default ProductList