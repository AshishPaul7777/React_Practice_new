import { createContext, useContext, useState, useEffect } from "react"
import type { ReactNode } from "react"
import type { Product } from "../data/products"

type CartItem = Product & { quantity: number }

type CartContextType = {
  cart: CartItem[]

  addToCart: (product: Product) => void
  increaseQty: (id: number) => void
  decreaseQty: (id: number) => void
  removeFromCart: (id: number) => void
  clearCart: () => void

  totalAmount: number
}

const CartContext = createContext<CartContextType | null>(null)

type Props = {
  children: ReactNode
}

export const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<CartItem[]>([])

  // =========================
  // ✅ 1. LOAD FROM LOCALSTORAGE (ON START)
  // =========================
  useEffect(() => {
    const stored = localStorage.getItem("cart")
    if (stored) {
      setCart(JSON.parse(stored))
    }
  }, [])

  // =========================
  // ✅ 2. SAVE TO LOCALSTORAGE (WHEN CART CHANGES)
  // =========================
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  // =========================
  // ✅ 3. ADD TO CART (MERGE DUPLICATES)
  // =========================
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id)

      if (existing) {
        return prev.map(p =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )
      }

      return [...prev, { ...product, quantity: 1 }]
    })
  }

  // =========================
  // ✅ 4. INCREASE QTY
  // =========================
  const increaseQty = (id: number) => {
    setCart(prev =>
      prev.map(p =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    )
  }

  // =========================
  // ✅ 5. DECREASE QTY
  // =========================
  const decreaseQty = (id: number) => {
    setCart(prev =>
      prev
        .map(p =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter(p => p.quantity > 0)
    )
  }

  // =========================
  // ✅ 6. REMOVE ITEM
  // =========================
  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(p => p.id !== id))
  }

  // =========================
  // ✅ 7. CLEAR CART
  // =========================
  const clearCart = () => {
    setCart([])
  }

  // =========================
  // ✅ 8. TOTAL CALCULATION
  // =========================
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        totalAmount
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// =========================
// ✅ CUSTOM HOOK
// =========================
export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used inside CartProvider")
  return ctx
}