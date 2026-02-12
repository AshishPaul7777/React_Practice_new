import { createBrowserRouter } from "react-router-dom"
import Home from "@/pages/Home"
import PLP from "@/pages/PLP"
import PDP from "@/pages/PDP"
import Cart from "@/pages/Cart"
import Checkout from "@/pages/Checkout"
import OrderSuccess from "@/pages/OrderSuccess"
import Login from "@/pages/Login"
import ProtectedRoute from "@/components/layout/ProtectedRoute"
import Wishlist from "@/pages/Wishlist"

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <PLP /> },
  { path: "/products/:id", element: <PDP /> },
  { path: "/cart", element: <Cart /> },
  {
    path: "/checkout",
    element: (
      <ProtectedRoute>
        <Checkout />
      </ProtectedRoute>
    )
  },
  {
    path: "/wishlist",
    element: (
      <ProtectedRoute>
        <Wishlist />
      </ProtectedRoute>
    )
  },
{ path: "/order-success", element: <OrderSuccess /> },
{ path: "/login", element: <Login /> },
])