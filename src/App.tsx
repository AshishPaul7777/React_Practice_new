import { RouterProvider } from "react-router-dom"
import { router } from "./routes/router"
import { CartProvider } from "./context/CartContext"
import { AuthProvider } from "./context/AuthContext"
import { WishlistProvider } from "./context/WishlistContext"




function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <RouterProvider router={router} />
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
    
  )
}

export default App