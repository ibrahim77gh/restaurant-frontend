import { Stack, Box } from '@mui/material'
import React from 'react'
import {Home, Menu, Services, Cart_Page} from './pages/'
import { Route, NavLink, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { ResponsiveAppBar } from './components'

const router = createBrowserRouter(
  createRoutesFromElements(
    // Tree of Routes
    <Route path='/' element={<ResponsiveAppBar/>}>
      <Route index element={<Home/>}/>
      <Route path='menu' element={<Menu/>}></Route>
      <Route path='services' element={<Services/>}></Route>
      <Route path='cart' element={<Cart_Page/>}></Route>
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
