'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { auth } from '../config/firebase'
import { useRouter } from 'next/navigation'

const AuthContext = createContext<any>({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user)
      setIsAuthenticated(!!user) // Actualiza isAuthenticated al estado de autenticación
    })
    return () => unsubscribe()
  }, [])

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken || ''
        // Si necesitas hacer algo con el token, hazlo aquí
        // ...
        router.push('/dashboard')
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        console.error(error)
      })
  }

  const logout = () => {
    // Lógica de cierre de sesión
    setIsAuthenticated(false)
    router.push('/auth')
  }

  if (loading) {
    // Muestra un indicador de carga mientras se verifica la autenticación
    return <div>Loading...</div>
  }

  return <AuthContext.Provider value={{ isAuthenticated, signInWithGoogle, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
