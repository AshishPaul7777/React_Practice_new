import Navbar from "@/components/layout/Navbar"
import ProductCard from "@/components/product/ProductCard"
import { products } from "@/data/products"

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="p-8 grid grid-cols-4 gap-4">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  )
}