import { Stack, Typography, Button, Snackbar, Alert } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AuthService from '../services/auth.service';


const Resend_Email = () => {
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [open, setOpen] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

  async function handleClick(){
    try{
        const response = await AuthService.resendEmail()
        console.log(response)
        setOpen(true);
        setButtonDisabled(true);
        setTimeout(() => {
            setButtonDisabled(false); // Enable the button after 30 seconds
          }, 30000);
    }catch(e){
        throw e
    }
  }

  return (
    <>
      <Stack height={200}></Stack>
      <Stack width='100vw' spacing={5} height={100} justifyContent='center' alignItems='center'>
        <Typography variant='h5' textAlign='center'>
          Activation Email has been sent to your account!
        </Typography>
        <Button variant="contained" disabled={isButtonDisabled} sx={{color:'black', backgroundColor:'warning.main'}} onClick={handleClick}>Resend Email</Button>
        
        <Snackbar 
            open={open} 
            autoHideDuration={5000} 
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
        >
            <Alert onClose={handleClose} variant='filled' severity="success" sx={{ width: '100%' }}>
                Activation Email Sent, wait 30 seconds to resend again
            </Alert>
        </Snackbar>
      </Stack>
    </>
  )
}

export default Resend_Email