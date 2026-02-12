import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import { useWishlist } from "../../context/WishlistContext"
import type { Product } from "../../data/products"

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart()
  const { toggleWishlist, isWishlisted } = useWishlist()

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition p-4 flex flex-col">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          className="h-48 w-full object-cover rounded-lg"
        />

        <h3 className="mt-3 font-semibold">{product.title}</h3>
        <p className="text-lg font-bold text-blue-600">
          ₹{product.price}
        </p>
      </Link>

      <div className="flex gap-2 mt-auto pt-4">
        <button
          onClick={() => addToCart(product)}
          className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-800"
        >
          Add to Cart
        </button>

        <button
          onClick={() => toggleWishlist(product)}
          className="px-3 text-xl"
        >
          {isWishlisted(product.id) ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  )
}
