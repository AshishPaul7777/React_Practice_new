import { useLocation, Link } from "react-router-dom"
import Navbar from "@/components/layout/Navbar"

export default function OrderSuccess() {
  const { state } = useLocation()

  if (!state) return <div>No order found</div>

  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto p-6 space-y-4">
        <h1 className="text-2xl font-bold text-green-600">
          Order Placed Successfully 🎉
        </h1>

        <p>Order ID: {state.id}</p>
        <p>Total: ₹{state.total}</p>
        <p>Payment: COD</p>

        <Link to="/" className="text-blue-600 underline">
          Continue Shopping
        </Link>
      </div>
    </>
  )
}