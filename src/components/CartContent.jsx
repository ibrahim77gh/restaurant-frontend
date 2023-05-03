import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import { burger, tikka, rice, juices, soda, shakes, cinnamon, cake, pudding } from '../assets';
import { Grid, Stack, Typography, Button } from '@mui/material';

const CartContent = ({cart}) => {

  function handleCheckout(){
    
  }

  if (typeof cartItems === "string"){
    return (
      <Stack width='100%' p={10} bgcolor='rgb(18,18,18)' alignItems='center'>
        <Typography variant='h2'>
          {cartItems}
        </Typography>
      </Stack>
      )
  }else {
    return (
      <>
      <Grid container justifyContent="space-evenly" alignItems="center" spacing={2} pt={5} pb={12} bgcolor='rgb(18,18,18)' rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {cart && cart.items.map(item => (
          <Grid item xs={12} sm={6} md={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <CartItem 
              id= {item.id}
              quantity={item.quantity}
              total_price={item.total_price}
              title={item.product.title}
              unit_price={item.product.unit_price}
              image={item.product.image}
            />
          </Grid>
        ))}
      </Grid>

      <Stack direction='column' bgcolor='warning.main' alignItems='center' width='100%' >
        <Stack margin={6} p={5} bgcolor='rgb(18,18,18)' spacing={5} borderRadius={10} alignItems='center' justifyContent='center' direction='column'>
          <Stack direction='row' width='100%' justifyContent="space-between">
              <Typography fontWeight='bold' variant='h6' sx={{ mr: 'auto' }}>Subtotal:</Typography>
              <Typography fontWeight='bold' variant='h6' sx={{ ml: 'auto' }}>Rs. {cart.total_price}</Typography>
          </Stack>
          <Stack direction='row' width='100%' justifyContent="space-between">
              <Typography fontWeight='bold' variant='h6' sx={{ mr: 'auto' }}>Discount:</Typography>
              <Typography fontWeight='bold' variant='h6' sx={{ ml: 'auto' }}>Rs. 10</Typography>
          </Stack>
          <Button width='100%' sx={{bgcolor:'warning.main', '&:hover': {bgcolor: 'warning.dark'}}} variant='filled'>Proceed to checkout</Button>
        </Stack>
      </Stack>
      </>
    )
  }
  
}

export default CartContent