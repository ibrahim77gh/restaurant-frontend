import React from 'react'
import { Navigate } from 'react-router-dom'

const Unauthorized = ({children}) => {
    const user = localStorage.getItem("access_token")

  return !user ? children : <Navigate to={"/"} replace></Navigate>
}

export default Unauthorized