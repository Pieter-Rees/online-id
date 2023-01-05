import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate replace to='/' />
  }
  return children
}
export default Protected
