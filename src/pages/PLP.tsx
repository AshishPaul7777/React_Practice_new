import Navbar from "@/components/layout/Navbar"
import ProductCard from "@/components/product/ProductCard"
import { products } from "@/data/products"

export default function PLP() {
  return (
    <>
      <Navbar />
      <h1 className="p-4 text-2xl font-bold">All Products</h1>

      <div className="grid grid-cols-4 gap-4 p-4">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  )
}