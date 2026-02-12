import { createContext, useContext, useState, useEffect } from "react"
import type { ReactNode } from "react"
import type { Product } from "../data/products"

type WishlistContextType = {
  wishlist: Product[]
  toggleWishlist: (product: Product) => void
  removeFromWishlist: (id: number) => void
  isWishlisted: (id: number) => boolean
}

const WishlistContext = createContext<WishlistContextType | null>(null)

type Props = {
  children: ReactNode
}

export const WishlistProvider = ({ children }: Props) => {
  const [wishlist, setWishlist] = useState<Product[]>([])

  // load
  useEffect(() => {
    const stored = localStorage.getItem("wishlist")
    if (stored) setWishlist(JSON.parse(stored))
  }, [])

  // save
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [wishlist])

  const toggleWishlist = (product: Product) => {
    setWishlist(prev => {
      const exists = prev.find(p => p.id === product.id)

      if (exists) {
        return prev.filter(p => p.id !== product.id)
      }

      return [...prev, product]
    })
  }

  const removeFromWishlist = (id: number) => {
    setWishlist(prev => prev.filter(p => p.id !== id))
  }

  const isWishlisted = (id: number) =>
    wishlist.some(p => p.id === id)

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist, removeFromWishlist, isWishlisted }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => {
  const ctx = useContext(WishlistContext)
  if (!ctx) throw new Error("useWishlist must be inside WishlistProvider")
  return ctx
}