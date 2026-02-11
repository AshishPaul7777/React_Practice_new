import { Link } from "react-router-dom"
import type { Product } from "../../data/products"

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="border rounded-xl p-4 hover:shadow-lg">
        <img src={product.image} alt={product.title} />

        <h3 className="font-semibold">{product.title}</h3>

        <p>₹{product.price}</p>
      </div>
    </Link>
  )
}