import React, {useEffect, useState} from 'react'
import { Typography, Box, Card, CardActions, CardContent, CardMedia, Button, Snackbar, Alert } from '@mui/material'
// import constants from '../constants'
import UserService from '../services/user.service';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
function FoodItem(item){
  const [id, setId] = useState(null)
  const [open, setOpen] = useState(false)
  
  useEffect(() => {
    setId(item.id)
  }, [item])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  async function handleClick(){
    try{
      const response = await UserService.addToCart(id)
      setOpen(true);
      console.log(response.data)
    }catch(e){
        throw e
    }
  }

    return (
        <Card sx={{ bgcolor: 'warning.main', width:'300px', height:'450px', position:'relative'}} variant='outlined'>
          <CardMedia
            sx={{ height: 200}}
            image={item.image}
            title={item.title}
          />
          <CardContent alignItems='center' sx={{color:'white'}}>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {item.description}
            </Typography>
            <Typography variant='h5' >
                {item.unit_price}
            </Typography>
          </CardContent>
          <CardActions sx={{ position: 'absolute', bottom: 5 }} onClick={() => handleClick()}>
            <Button size="large" variant='contained' sx={{ color: 'warning.main', backgroundColor:'black', '&:hover': {bgcolor: 'black'} }}>Add to Cart</Button>
          </CardActions>
          <Snackbar 
            open={open} 
            autoHideDuration={1000} 
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
          >
              <Alert onClose={handleClose} variant='filled' severity="warning" sx={{ width: '100%' }}>
                  Item added to cart
              </Alert>
          </Snackbar>
        </Card>
      );
}

export {
    TabPanel, a11yProps, FoodItem
}