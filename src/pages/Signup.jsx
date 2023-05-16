import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import {Button, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, MenuItem} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Stack } from '@mui/material';
import { Form, redirect, useActionData, NavLink, useNavigate } from 'react-router-dom';
import AuthService from "../services/auth.service";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function Signup(){
    const data = useActionData()
    
  return (
    <Box width='100vw' height='100vh' alignItems='center' justifyContent='center' my={10} bgcolor='rgba(18,18,18,0)'>
        <Container component="main" alignItems='center' justifyContent='center' maxWidth="xs" bgcolor='black' sx={{backgroundColor:'warning.light' ,padding:'30px', borderColor:'black', borderRadius:'10px'}}>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign up
            </Typography>
            <Form method='post' >
                <Box sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        id="first-name"
                        label="First Name"
                        name="first-name"
                        autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        id="last-name"
                        label="Last Name"
                        name="last-name"
                        autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        name="re_password"
                        label="Confirm Password"
                        type="password"
                        id="re_password"
                        autoComplete="new-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        select
                        fullWidth
                        name="location"
                        label="Location"
                        type="location"
                        id="location"
                        defaultValue='Airport'
                        >
                            <MenuItem key='Airport' value='Airport'>Airport</MenuItem>
                            <MenuItem key='Baldia Town' value='Baldia Town'>Baldia Town</MenuItem>
                            <MenuItem key='Malir Cantt' value='Malir Cantt'>Malir Cantt</MenuItem>
                        </TextField>
                    </Grid>
                    </Grid>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, bgcolor:'warning.dark' }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                    <Grid item>
                        <NavLink to='/login'>
                            Already have an account? Log in
                        </NavLink>
                    </Grid>
                    </Grid>
                    {data && data.error && <p>{data.error}</p>}
                </Box>
            </Form>
            </Box>
            <Copyright sx={{ mt: 5 }} />
        </Container>
    </Box>
  );
}

export const signupAction = async ({request}) => {
    const data = await request.formData()
    const submission = {
        first_name: data.get('first-name'),
        last_name: data.get('last-name'),
        email: data.get('email'),
        password: data.get('password'),
        re_password: data.get('re_password'),
    }
    console.log(submission);
    
    // error handling
    try{
        const response = await AuthService.register(submission)
        console.log(response.data)
        return redirect('/resend-email');
    }catch(e){
        throw e
    }
    

}