import { useParams } from "react-router-dom"
import Navbar from "@/components/layout/Navbar"
import { products } from "@/data/products"

export default function PDP() {
  const { id } = useParams()

  const product = products.find(p => p.id === Number(id))

  return (
    <>
      <Navbar />

      <div className="p-8 flex gap-8">
        <img src={product?.image} className="w-80" />
        <div>
          <h1 className="text-2xl font-bold">{product?.title}</h1>
          <p>₹{product?.price}</p>
          <p>{product?.description}</p>
        </div>
      </div>
    </>
  )
}