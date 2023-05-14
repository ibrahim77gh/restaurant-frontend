import { Stack, Box } from '@mui/material'
import React from 'react'
import {Home, Menu, Services, Cart_Page, cartLoader, SignUp, Login, Error, Payment, Activate_Email, Reset_Password, Reset_Password_Confirm} from './pages/'
import { Route, NavLink, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { ResponsiveAppBar } from './components'
import { signupAction } from './pages/Signup'
import { loginAction } from './pages/Login'
import { MenuLoader } from './pages/Menu'
import { paymentAction } from './pages/Payment'
import { resetPasswordAction } from './pages/Reset_Password'
import { resetPasswordConfirmAction } from './pages/Reset_Password_Confirm'

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
      <Route path='payment' element={<Payment/>} action={paymentAction}></Route> 
      <Route path='activate/:uid/:token' element={<Activate_Email/>}></Route> 
      <Route path='reset-password' element={<Reset_Password/>} action={resetPasswordAction}></Route> 
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
