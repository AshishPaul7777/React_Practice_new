import { createContext, useContext, useState, useEffect } from "react"
import type { ReactNode } from "react"

type User = {
  email: string
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

type Props = {
  children: ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null)

  // ✅ Load from storage
  useEffect(() => {
    const stored = localStorage.getItem("user")
    if (stored) setUser(JSON.parse(stored))
  }, [])

  // ✅ Save user
  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user))
    else localStorage.removeItem("user")
  }, [user])

  // ✅ simple login (hardcoded)
  const login = (email: string, password: string) => {
    if (email === "admin@gmail.com" && password === "1234") {
      setUser({ email })
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be inside AuthProvider")
  return ctx
}