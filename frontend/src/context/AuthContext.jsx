import { createContext, useState, useEffect } from 'react'

const AuthContext =createContext()


export default AuthContext;


export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)

    const basUrl = 'http://127.0.0.1:8000'

    const isAuthenticated = async (e) => {
        e.preventDefault();
        const response = await fetch(basUrl+'/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  // Corrected the header name
            },
            body: JSON.stringify({'email': e.target.email.value, 'password': e.target.password.value})
        });
    
        const data = await response.json();
        console.log('data:', data);
        console.log('response:', response);
        if (response.status === 200){

        }else{
            alert('Something went wrong')
        }
    };
    
    const userData ={
        isAuthenticated:isAuthenticated
    }
    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    )
}