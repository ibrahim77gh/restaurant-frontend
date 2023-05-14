import { Stack, Typography, Button } from '@mui/material'
import React from 'react'
import AuthService from '../services/auth.service';
import { redirect, useParams } from 'react-router-dom';

const Activate_Email = () => {
  const { uid, token } = useParams();

  async function handleClick(){
    try{
      const response = await AuthService.activationEmail({uid:uid, token:token})
      console.log(response)
      redirect('/login')
    }catch(e){
      throw e
    }
  }

  return (
    <>
      <Stack height={200}></Stack>
      <Stack width='100vw' spacing={5} height={100} justifyContent='center' alignItems='center'>
        <Typography variant='h3'>
          Activate Your Account
        </Typography>
        <Button variant="contained" sx={{color:'black', backgroundColor:'warning.main'}} onClick={handleClick}>Click Here</Button>
      </Stack>
    </>
  )
}

export default Activate_Email