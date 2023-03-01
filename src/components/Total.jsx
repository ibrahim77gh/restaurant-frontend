import React from 'react'
import {Stack, Typography, Paper} from '@mui/material'

const Total = () => {
  return (
    <Stack position="fixed" bottom={0} width="100%" p={2} bgcolor="warning.main" color="primary.contrastText" zIndex={10} spacing={2} py={2}>
        <Stack direction='row' justifyContent="space-between" pr={4}>
            <Typography fontWeight='bold' variant='h6' sx={{ mr: 'auto' }}>Discount:</Typography>
            <Typography fontWeight='bold' variant='h6' sx={{ ml: 'auto' }}>$10.00</Typography>
        </Stack>
        <Stack direction='row' justifyContent="space-between" pr={4}>
            <Typography fontWeight='bold' variant='h6' sx={{ mr: 'auto' }}>Total:</Typography>
            <Typography fontWeight='bold' variant='h6' sx={{ ml: 'auto' }}>$50.00</Typography>
        </Stack>
    </Stack>
  )
}

export default Total