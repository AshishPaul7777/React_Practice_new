import Navbar from "@/components/layout/Navbar"
import { useWishlist } from "../context/WishlistContext"
import { useCart } from "../context/CartContext"

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()

  return (
    <>
      <Navbar />

      <div className="p-8 max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Wishlist</h1>

        {wishlist.length === 0 && <p>No items yet</p>}

        {wishlist.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-x1 shadow-md hover:shadow-lg transition flex items-center gap-6 p-5"
          >
            <img src={item.image} className="w-24" />

            <div className="flex-1">
              <h3>{item.title}</h3>
              <p>₹{item.price}</p>
            </div>

            <button
              className="bg-black text-white px-3 py-1 rounded"
              onClick={() => addToCart(item)}
            >
              Move to Cart
            </button>

            <button
              className="text-red-500"
              onClick={() => removeFromWishlist(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  )
}