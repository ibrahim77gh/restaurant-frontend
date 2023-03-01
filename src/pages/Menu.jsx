import React from 'react'
import { Stack } from '@mui/material'
import { Hero_Menu, Contact, Products_Menu, Qualities, ResponsiveAppBar, Footer } from '../components'

const Menu = () => {
  return (
    <Stack>
        <Hero_Menu t='OUR MENU' b='MENU'/>
        <Contact/>
        <Qualities/>
        <Products_Menu/>
        <Footer/>
    </Stack>
  )
}

export default Menu