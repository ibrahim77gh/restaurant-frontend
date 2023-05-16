import { Stack, Box } from '@mui/material'
import React from 'react'
import {Home, Menu, Services, Cart_Page, cartLoader, SignUp, Login, Error, Activate_Email, Reset_Password, Reset_Password_Confirm, Success, Resend_Email} from './pages/'
import { Route, NavLink, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { ResponsiveAppBar } from './components'

// Loaders
import { MenuLoader } from './pages/Menu'

// Actions
import { resetPasswordAction } from './pages/Reset_Password'
import { resetPasswordConfirmAction } from './pages/Reset_Password_Confirm'
import { signupAction } from './pages/Signup'
import { loginAction } from './pages/Login'

import Unauthorized from './components/Unauthorized'

const router = createBrowserRouter(
  createRoutesFromElements(
    // Tree of Routes
    <Route path='/' errorElement={<Error/>} element={<ResponsiveAppBar/>}>
      <Route index element={<Home/>} loader={MenuLoader} errorElement={<Error/>}/>
      <Route path='menu' loader={MenuLoader} element={<Menu/>}></Route>
      <Route path='services' element={<Services/>}></Route>
      <Route path='cart' element={<Cart_Page/>} loader={cartLoader}></Route>
      <Route path='signup' element={<SignUp/>} action={signupAction}></Route>
      <Route path='login' element={<Login/>} action={loginAction}></Route> 
      <Route path='success' element={<Success/>}></Route> 
      <Route path='activate/:uid/:token' element={<Activate_Email/>}></Route> 
      <Route path='reset-password' element={<Reset_Password/>} action={resetPasswordAction}></Route>
      <Route path='resend-email' element={<Resend_Email/>}></Route> 
      <Route path='password/reset/confirm/:uid/:token' element={<Reset_Password_Confirm/>} action={resetPasswordConfirmAction}></Route> 
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
