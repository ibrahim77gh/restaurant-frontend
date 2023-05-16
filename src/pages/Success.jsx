import { Stack, Typography, Button } from '@mui/material'
import React, { useEffect } from 'react'
import { redirect, useParams } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import UserService from '../services/user.service';


const Success = () => {
  useEffect(() => {
    try{
      const response = UserService.makeOrder()
      localStorage.removeItem('cart')
      console.log(response)
    }catch(error){
      throw error
    }
  }, [])

  return (
    <>
      <Stack height={200}></Stack>
      <Stack width='100vw' spacing={10} height={100} justifyContent='center' alignItems='center'>
        <Typography variant='h4' textAlign='center'>
          Your order has been made successfully
        </Typography>
        <CheckCircleOutlineIcon sx={{color:'green', transform: `scale(5)`}}/>
      </Stack>
    </>
  )
}

export default Success