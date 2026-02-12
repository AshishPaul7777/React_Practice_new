import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "@/components/layout/Navbar"
import { useCart } from "../context/CartContext"

export default function Checkout() {
  const navigate = useNavigate()
  const { cart, totalAmount, clearCart } = useCart()

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const placeOrder = () => {
    const order = {
      id: Date.now(),
      items: cart,
      total: totalAmount,
      address: form,
      payment: "COD",
      date: new Date().toLocaleString()
    }

    const oldOrders = JSON.parse(localStorage.getItem("orders") || "[]")

    localStorage.setItem("orders", JSON.stringify([...oldOrders, order]))

    clearCart()

    navigate("/order-success", { state: order })
  }

  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto p-6 space-y-4">
        <h1 className="text-2xl font-bold">Checkout</h1>

        {Object.keys(form).map(key => (
          <input
            key={key}
            name={key}
            placeholder={key}
            className="border p-2 w-full rounded"
            onChange={handleChange}
          />
        ))}

        <div className="font-semibold">
          Payment Method: Cash on Delivery
        </div>

        <h2>Total: ₹{totalAmount}</h2>

        <button
          onClick={placeOrder}
          className="bg-black text-white p-3 rounded w-full"
        >
          Place Order
        </button>
      </div>
    </>
  )
}