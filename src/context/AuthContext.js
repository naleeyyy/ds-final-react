import { createContext, useState } from "react";

const AuthContext = createContext([])

export default AuthContext

export const AuthProvider = ({ children }) => {
    
    const [authenticated, setAuthenticated] = useState(localStorage.getItem('authenticated') === 'true')
    
    return (
        <AuthContext.Provider value={{authenticated: authenticated, setAuthenticated: setAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}
