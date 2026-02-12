import { Navigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function ProtectedRoute({ children }: Props) {
  const { user } = useAuth()

  // not logged in → go to login
  if (!user) {
    return <Navigate to="/login" replace />
  }

  // logged in → allow access
  return <>{children}</>
}