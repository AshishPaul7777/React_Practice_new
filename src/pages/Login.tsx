import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "@/components/layout/Navbar"
import { useAuth } from "../context/AuthContext"

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {
    const success = login(email, password)

    if (success) navigate("/")
    else setError("Invalid credentials")
  }

  return (
    <>
      <Navbar />

      <div className="max-w-sm mx-auto p-6 space-y-4">
        <h1 className="text-xl font-bold">Login</h1>

        <input
          placeholder="Email"
          className="border p-2 w-full"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full"
          onChange={e => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500">{error}</p>}

        <button
          onClick={handleLogin}
          className="bg-black text-white w-full p-2 rounded"
        >
          Login
        </button>
      </div>
    </>
  )
}