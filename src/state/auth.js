import { useState, createContext, useContext } from "react"

const AuthContext = createContext({})


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    email: '',
  })

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export default useAuth