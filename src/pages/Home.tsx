import Navbar from "@/components/layout/Navbar"
import ProductCard from "@/components/product/ProductCard"
import { products } from "@/data/products"

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>

    </>
  )
}