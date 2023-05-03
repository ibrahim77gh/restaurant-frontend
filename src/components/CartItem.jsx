import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Tooltip, Stack, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import UserService from "../services/user.service";
import { useNavigate, useLocation } from "react-router-dom";

function CartItem(item){
  const [quantity, setQuantity] = useState(item.quantity);
  const [id, setId] = useState(item.id);

  const navigate = useNavigate();
  const location = useLocation();

  function refreshRoute() {
    navigate(`${location.pathname}?key=${Math.random()}`);
  }

  useEffect(() => {
    if (location.search.includes('key')) {
      const newUrl = location.pathname + location.search.replace(/\?.*$/, '');
      navigate(newUrl, { replace: true });
    }
  }, [location.search, navigate, location.pathname]);

  async function updateQuantity(quantity){
    try{
      const response = UserService.updateQuantity(quantity, id)
    }catch(error){
      throw error
    }
  }

  async function deleteCartItem(){
    try{
      const response = UserService.deleteCartItem(id)
      console.log(response)
      refreshRoute()
    }catch(error){
      throw error
    }
  }

    return (
        <Card sx={{ maxWidth: 300, bgcolor: 'black'}} variant='outlined' >
          <CardMedia
            sx={{ height: 200}}
            image={item.image}
            title={item.title}
          />
          <CardContent alignItems='center' sx={{color:'white'}}>
            <Stack direction='row' justifyContent='space-between' spacing={6}>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant='h5' >
                {item.unit_price}
              </Typography>
            </Stack>
            <Stack direction='row' justifyContent='space-between' spacing={6}>
              <TextField
                id="filled-number"
                label="Quantity"
                type="number"
                value={quantity}
                onChange={(event) => {
                  let newQuantity = event.target.value.replace(/\D/g, '');
                  newQuantity = newQuantity === '' ? 1 : Math.max(1, parseInt(newQuantity));
                  setQuantity(newQuantity);
                  updateQuantity(newQuantity);
                  refreshRoute()
                }}
                InputLabelProps={{
                  shrink: true,
                  style: { color: 'white' }
                }}
                variant="filled"
                color="warning"
                InputProps={{
                  style: {
                    color: 'white',
                    borderColor: 'white',
                    borderWidth: '2px',
                    borderStyle: 'solid',
                  },
                  min: 1
                }}
                sx={{width:'8rem'}}
              />
              <Typography variant='h6' >
                  Total: <br /> {item.total_price}
              </Typography>
            </Stack>
          </CardContent>
          <Stack direction='row' justifyContent='space-between'>
            <CardActions>
              <Tooltip title="Delete">
                <IconButton onClick={deleteCartItem}>
                  <DeleteIcon sx={{color:'warning.main'}}/>
                </IconButton>
              </Tooltip>
            </CardActions>
          </Stack>
        </Card>
      );
}

export default CartItem;