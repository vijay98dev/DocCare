import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AdminDocList = () => {
  const baseURL = "http://127.0.0.1:8000";
  const [users,setUsers]= useState([]);

  // const fetchUser = (url) => {
  //   axios.get(url).then((response) => {
  //     setUser(response.data.result);
  //     console.log(response);
  //   }).catch((error) => {
  //     console.error("Error fetching user:",error);
  //   });
  // };


  useEffect (() => {
    axios.get(baseURL+'/adm/doctor/').then((response) =>{
      console.log(response)
      setUsers(response.data)
    }).catch((error) =>{
      console.error("Error fetching user:",error)
    })
    // fetchUser(baseURL+'adm/user');
  },[]);
  
  return (
    <div className="flex justify-center items-center h-full w-full">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Doctors</div>
    <div className='table-fixed w-full'>
      
      <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DOJ</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {users == "" && <tr><td>No User found</td></tr>}
        {users.map((user) =>(
          <tr key={user.id}>
            <td className="px-6 py-4 whitespace-nowrap">{user.first_name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.phone_number}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.date_joined}</td>
          </tr>
        ))}
          
       
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </div>
  )
}



export default AdminDocList