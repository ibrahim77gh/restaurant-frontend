import {useState, useRef, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import {Button, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, MenuItem} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Stack } from '@mui/material';
import { Form, redirect, useActionData, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
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


export default function Payment(){
    const navigate = useNavigate()
    function handleSubmit(event){
        const successMessage = "Order Placed!";
        navigate('/login', { state: { successMessage } });
    }

    const [date, setDate] = useState('');
    const dateInputRef = useRef(null);

    const handleChange = (e) => {
        setDate(e.target.value);
    };
    const formData = useActionData()
    
    
  return (
    <Box width='100vw' height='100vh' alignItems='center' justifyContent='center' my={10} bgcolor='rgba(18,18,18,0)'>
        <Container component="main" alignItems='center' justifyContent='center' maxWidth="xs" bgcolor='black' sx={{backgroundColor:'warning.light' ,padding:'30px', borderColor:'black', borderRadius:'10px'}}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Checkout
          </Typography>
          <Form method='post' onSubmit={handleSubmit}>
            <Box sx={{ mt: 1 }}>
                <TextField
                    required
                    fullWidth
                    id="name"
                    label="Your Name"
                    name="name"
                    autoComplete="family-name"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="card_number"
                    label="Card Number"
                    id="card_number"
                    helperText='Must be numeric and 16 digits long'
                    error={formData && (formData.error == 'cd')}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="cvv"
                    label="CVV"
                    id="cvv"
                    helperText='Must have 3 Numeric Digits'
                    error={formData && (formData.error == 'cvv')}
                />
                <div>
                    <Typography color='black' mt={3}>Expiry Date:</Typography>  
                <input
                  type="date"
                  onChange={handleChange}
                  ref={dateInputRef}
                  label='Expiry Date'
                  name='expiry_date'
                  style={{width:'100%', fontSize:'24px', backgroundColor:'rgba(0,0,0,0)', color:'black', marginBottom:'20px'}}
                />
              </div>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Checkout
              </Button>
            </Box>
          </Form>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    </Box>
  );
}

export const paymentAction = async ({request}) => {
    const data = await request.formData()
    const submission = {
        name: data.get('name'),
        cvv: data.get('cvv'),
        expiry_date: data.get('expiry_date'),
    }
    console.log(submission);
    
    // error handling
    if (isNaN(submission.cvv)){
        return {error: 'cvv'}
      }
    else if(submission.cvv.toString().length != 3){
        return {error: 'cvv'}
      }
    else if (isNaN(submission.card_number)){
        return {error: 'cd'}
      }
    else if(submission.card_number.toString().length < 16){
        return {error: 'cd'}
      }
    else{
        try{
            const response = await AuthService.register(submission)
            console.log(response.data)
            return redirect('/login');
        }catch(error){
            return {answer: error}
        }
    }
        

}