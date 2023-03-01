import {Stack} from '@mui/material'
import {React} from 'react'
import { ResponsiveAppBar, Hero_Menu, CartContent, Footer, Total } from '../components'

const Cart_Page = () => {
  return (
    <Stack>
        <Hero_Menu t='CART' b='CART'/>
        <CartContent/>
        <Footer/>
        <Total/>
    </Stack>
  )
}

export default Cart_Page