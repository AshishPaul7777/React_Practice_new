import { createBrowserRouter } from "react-router-dom"
import Home from "@/pages/Home"
import PLP from "@/pages/PLP"
import PDP from "@/pages/PDP"

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <PLP /> },
  { path: "/products/:id", element: <PDP /> },
])