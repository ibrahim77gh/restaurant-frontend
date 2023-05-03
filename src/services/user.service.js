import axios from 'axios';
import authHeader from './auth-header';
import dayjs from 'dayjs';
import jwt_decode from "jwt-decode";
import AuthService from './auth.service';

const API_URL = 'http://127.0.0.1:8000/store/';

class UserService {
  getProducts() {
    return axios.get(API_URL + 'products/');
  }
  // Copy paste similarly more functions if needed
  addToCart(product_id){
    if (!localStorage.getItem('cart')){
      return axios
      .post(API_URL + "carts/")
      .then(response => {
        if (response.data.id) {
          localStorage.setItem("cart", response.data.id);
          response = axios.post(API_URL + "carts/" + response.data.id + "/items/", {"product_id": product_id, "quantity": 1})
          console.log(response.data)
        }

        return response.data;
      });
    }

    else{
      const cart_id = localStorage.getItem("cart")
      console.log(product_id)
      return axios.post(API_URL + "carts/" + cart_id + "/items/", {"product_id": product_id, "quantity": 1})
    }
  }

  getCart(){
    if (!localStorage.getItem('cart')){
      return "You haven`t added any items in your cart yet"
    }
    else {
      const cart_id = localStorage.getItem('cart')
      return axios.get(API_URL + 'carts/' + cart_id + '/');
    }
  }

  updateQuantity(quantity, itemId){
    const cart_id = localStorage.getItem("cart")
    return axios.patch(API_URL + 'carts/' + cart_id + '/items/' + itemId + '/', {"quantity":quantity})
  }

  deleteCartItem(itemId){
    const cart_id = localStorage.getItem("cart")
    return axios.delete(API_URL + 'carts/' + cart_id + '/items/' + itemId + '/')
  }

  checkout(){
    const access_token = localStorage.getItem('access_token')
    const cart_id = localStorage.getItem("cart")

    const axios_instance = axios.create({
      baseURL: API_URL + 'orders/',
      headers: authHeader(),
    });

    axios_instance.interceptors.request.use(async req => {
      const user = jwt_decode(access_token)
      const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1

      if (!isExpired){return req}
      else {
        const response = await AuthService.refresh()
        if (typeof response === 'string'){
          console.log('User Inactive for too long')
          return req
        }else{
          console.log('Token Refresh Successful')
          req.headers.Authorization = authHeader()
          return req
        }
      }
    })

    return axios_instance.post('', {cart_id})
  }
}

export default new UserService();