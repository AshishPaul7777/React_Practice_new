import Navbar from "@/components/layout/Navbar"
import { useCart } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

export default function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalAmount
  } = useCart()
  const navigate = useNavigate()

  return (
    <>
      <Navbar />
      

      <div className="container py-10 space-y-6">
        <h1 className="text-2xl font-bold">Your Cart</h1>

        {cart.length === 0 && (
          <p className="text-gray-500">Cart is empty</p>
        )}

        {cart.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-x1 shadow-md hover:shadow-lg transition flex items-center gap-6 p-5"
          >
            {/* Image */}
            <img
              src={item.image}
              className="w-24 h-24 object-cover rounded"
            />

            {/* Info */}
            <div className="flex-1">
              <h3 className="font-semibold">{item.title}</h3>
              <p>₹{item.price}</p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3">
              <button
                className="px-3 py-1 bg-gray-200 rounded"
                onClick={() => decreaseQty(item.id)}
              >
                −
              </button>

              <span className="font-semibold">
                {item.quantity}
              </span>

              <button
                className="px-3 py-1 bg-gray-200 rounded"
                onClick={() => increaseQty(item.id)}
              >
                +
              </button>
            </div>

            {/* Subtotal */}
            <p className="w-24 text-right font-semibold">
              ₹{item.price * item.quantity}
            </p>

            {/* Remove */}
            <button
              className="text-red-500"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}

        {/* Total Section */}
        {cart.length > 0 && (
          <div className="flex justify-between items-center border-t pt-6">
            <h2 className="text-xl font-bold">
              Total: ₹{totalAmount}
            </h2>

            <button
  onClick={() => navigate("/checkout")}
  className="bg-black text-white px-6 py-3 rounded"
>
  Checkout
</button>
          </div>
        )}
      </div>
    </>
  )
}