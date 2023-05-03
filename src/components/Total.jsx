import React from 'react'
import { Stack, Button, Typography } from '@mui/material'

const Total = () => {
  return (
    <Stack direction='column' bgcolor='warning.main' alignItems='center' width='100%'>
        <Stack margin={6} p={5} bgcolor='rgb(18,18,18)' spacing={5} borderRadius={10} alignItems='center' justifyContent='center' direction='column'>
          <Stack direction='row' width='100%' justifyContent="space-between">
              <Typography fontWeight='bold' variant='h6' sx={{ mr: 'auto' }}>Subtotal:</Typography>
              <Typography fontWeight='bold' variant='h6' sx={{ ml: 'auto' }}>$50.00</Typography>
          </Stack>
          <Stack direction='row' width='100%' justifyContent="space-between">
              <Typography fontWeight='bold' variant='h6' sx={{ mr: 'auto' }}>Discount:</Typography>
              <Typography fontWeight='bold' variant='h6' sx={{ ml: 'auto' }}>Rs. 10.00</Typography>
          </Stack>
          <Button width='100%' sx={{bgcolor:'warning.main', '&:hover': {bgcolor: 'warning.dark'}}} variant='filled'>Proceed to checkout</Button>
        </Stack>
    </Stack>
  )
}

export default Total