import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="flex justify-between p-4 shadow-md">
      <Link to="/" className="text-xl font-bold">MegaMart</Link>
      <Link to="/products">Products</Link>
    </div>
  )
}