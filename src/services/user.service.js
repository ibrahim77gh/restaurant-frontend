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
  getProductsFromCollection(integer){
    return axios.get(API_URL + `collections/${integer}/`);
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

  makeOrder(){
    const cart_id = localStorage.getItem("cart")
    let access_token = localStorage.getItem('access_token')

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
          throw new Error('User inactive for too long');
        }else{
          console.log('Token Refresh Successful')
          req.headers.Authorization = authHeader();
          return req
        }
      }
    })

    return axios_instance.post('', {cart_id})
  }

  checkout(){
    const cart_id = localStorage.getItem("cart")
    let access_token = localStorage.getItem('access_token')

    const axios_instance = axios.create({
      baseURL: API_URL + 'create-checkout-session',
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
          throw new Error('User inactive for too long');
        }else{
          console.log('Token Refresh Successful')
          req.headers.Authorization = authHeader();
          return req
        }
      }
    })

    return axios_instance.post('', {cart_id})
  }
}

export default new UserService();
