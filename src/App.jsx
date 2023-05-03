import { Stack, Box } from '@mui/material'
import React from 'react'
import {Home, Menu, Services, Cart_Page, cartLoader, SignUp, Login, Error, Checkout} from './pages/'
import { Route, NavLink, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { ResponsiveAppBar } from './components'
import { signupAction } from './pages/Signup'
import { loginAction } from './pages/Login'
import { MenuLoader } from './pages/Menu'
import { checkoutAction } from './pages/Checkout'

const router = createBrowserRouter(
  createRoutesFromElements(
    // Tree of Routes
    <Route path='/' errorElement={<Error/>} element={<ResponsiveAppBar/>}>
      <Route index element={<Home/>} errorElement={<Error/>}/>
      <Route path='menu' loader={MenuLoader} element={<Menu/>}></Route>
      <Route path='services' element={<Services/>}></Route>
      <Route path='cart' element={<Cart_Page/>} loader={cartLoader}></Route>
      <Route path='signup' element={<SignUp/>} action={signupAction}></Route>
      <Route path='login' element={<Login/>} action={loginAction}></Route> 
      <Route path='checkout' element={<Checkout/>} action={checkoutAction}></Route> 
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
