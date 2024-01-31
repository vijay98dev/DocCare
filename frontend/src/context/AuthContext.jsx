import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from "jwt-decode"; 
import { useNavigate } from 'react-router-dom';



const AuthContext =createContext()


export default AuthContext;


export const AuthProvider = ({children}) => {
    
    const [token, setToken] = useState(() =>localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null)
    const [user, setUser] = useState(() =>localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')) : null)
    const navigate =useNavigate()
    const [loading,setLoading] = useState(true)

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
            setToken(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('token',JSON.stringify(data))
            navigate('/')
        }else{
            alert('Something went wrong')
        }
    };
    
    const userLogout = () =>{
        setToken(null)
        setUser(null)
        localStorage.removeItem('token')
        navigate('/')
    }

    const tokenRefresh = async (e) => {
        console.log('token is refreshed')
        const res = await fetch(basUrl+'/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  // Corrected the header name
            },
            body: JSON.stringify({'refresh':token.refresh})
        });
        const result = await res.json()

        if (res.status === 200){
            setToken(result)
            setUser(jwtDecode(result.access))
            localStorage.setItem('token',JSON.stringify(result))
        }else{
            userLogout()
        }
    }

    const userData ={
        user:user,
        isAuthenticated:isAuthenticated,
        userLogout
    }


    useEffect(()=>{
        const interval=setInterval(() => {
            if (token){
                tokenRefresh()
            }
        },1000*60*4)
        return ()=> clearInterval(interval)
    },[token,loading])
    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    )
}