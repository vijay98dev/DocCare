import { jwtDecode } from "jwt-decode";



const baseURL = 'http://127.0.0.1:8000';


const fetchAdmin= async () => {
    const token = localStorage.getItem('access');
    try{
        const res =await fetch(baseURL+'/user/details/',{
            headers:{
                'Authorization' : `Bearer ${token}`,
                'Accept': 'application/json',
                'Context-Type' : 'application/json'
            }
        });
        return res.data.is_admin;
    }
}