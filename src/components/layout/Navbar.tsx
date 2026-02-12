import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import { useAuth } from "../../context/AuthContext"
import { useWishlist } from "../../context/WishlistContext"

export default function Navbar() {
  const { cart } = useCart()
  const { user, logout } = useAuth()
  const { wishlist } = useWishlist()

  return (
    <div className="sticky top-0 bg-white shadow-md z-50">
      <div className="container flex justify-between items-center py-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MegaMart
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/products">Products</Link>

          <Link to="/cart" className="relative">
            🛒
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          <Link to="/wishlist" className="relative">
            ❤️
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
                {wishlist.length}
              </span>
            )}
          </Link>

          {user ? (
            <button
              onClick={logout}
              className="bg-black text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  )
}
