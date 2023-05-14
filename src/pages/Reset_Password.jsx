import {useState, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Snackbar, Alert, Container, Typography} from '@mui/material'
import { Form, redirect, useActionData, NavLink, useLocation } from 'react-router-dom';
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


export default function Login(){
    const data = useActionData()

    // Toast
    const location = useLocation();
    const successMessage = location.state?.successMessage;
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (successMessage) {
            setOpen(true)
        }
    }, [successMessage]);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    // Toast
    

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
                Reset Password
            </Typography>
            <Form method='post'>
                <Box sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
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
                    </Grid>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                        Reset Password
                    </Button>
                    <Grid container justifyContent="flex-start">
                      <Grid item>
                          <NavLink to='/login'>
                              Back to Login
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

export const resetPasswordAction = async ({request}) => {
    const data = await request.formData()
    const submission = {
        email: data.get('email'),
    }
    // error handling
    try{
        const response = await AuthService.resetPassword(submission)
        console.log(response.data)
        return redirect('/login');
    }catch(e){
        throw e
    }

}