import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Stack } from '@mui/material';
import { Form, redirect, useActionData } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';

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

const theme = createTheme();

export default function Signup(){
    const data = useActionData()

  return (
    <ThemeProvider theme={theme}>
        <Box width='100vw' alignItems='center' justifyContent='center' my={10}>
            <Container component="main" alignItems='center' justifyContent='center' maxWidth="xs" sx={{padding:'30px', borderColor:'black', borderRadius:'10px'}}>
                <CssBaseline />
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
                <Form method='post' action='/'>
                    <Box sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="username"
                            label="Name"
                            name="name"
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
                        <Grid item xs={12}>
                            <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                        </Grid>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                            Already have an account? Sign in
                            </Link>
                        </Grid>
                        </Grid>
                        {data && data.error && <p>{data.error}</p>}
                    </Box>
                </Form>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
      </Box>
    </ThemeProvider>
  );
}

export const signupAction = async ({request}) => {
    const data = await request.formData()
    const submission = {
        'username': data.get('name'),
        'email': data.get('email'),
        'password': data.get('password'),
        'location': data.get('location')
    }
    // error handling
    try {
        const response = await axios.post('/user/', submission);
        console.log(response.data);
        return redirect('/');
      } catch (error) {
        return error;
      }

}