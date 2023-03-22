import { Stack, Box } from '@mui/material'
import React from 'react'
import {Home, Menu, Services, Cart_Page, SignUp, Login} from './pages/'
import { Route, NavLink, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { ResponsiveAppBar } from './components'
import { signupAction } from './pages/Signup'

const router = createBrowserRouter(
  createRoutesFromElements(
    // Tree of Routes
    <Route path='/' element={<ResponsiveAppBar/>} action={signupAction}>
      <Route index element={<Home/>}/>
      <Route path='menu' element={<Menu/>}></Route>
      <Route path='services' element={<Services/>}></Route>
      <Route path='cart' element={<Cart_Page/>}></Route>
      <Route path='signup' element={<SignUp/>}></Route>
    </Route>
  ), {
    basename: "/restaurant-frontend"
  }
)

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
