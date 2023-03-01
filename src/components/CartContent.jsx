import React from 'react'
import CartItem from './CartItem'
import { burger, tikka, rice, juices, soda, shakes, cinnamon, cake, pudding } from '../assets';
import { Grid } from '@mui/material';

const CartContent = () => {
  return (

    <Grid container justifyContent="space-evenly" alignItems="center" spacing={2} py={5} bgcolor='rgb(18,18,18)' rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} sm={6} md={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <CartItem image={burger} title='Burger'/>
      </Grid>
      <Grid item xs={12} sm={6} md={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <CartItem image={tikka} title='Tikka'/>
      </Grid>
      <Grid item xs={12} sm={6} md={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <CartItem image={rice} title='Fried Rice'/>
      </Grid>
      <Grid item xs={12} sm={6} md={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <CartItem image={shakes} title='Shakes'/>
      </Grid>
    </Grid>
  )
}

export default CartContent