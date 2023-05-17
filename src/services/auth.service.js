// Authentication service
import axios from "axios";
import dayjs from 'dayjs';
import jwt_decode from "jwt-decode";

const API_URL = "https://ibrahimdevs.pythonanywhere.com/auth/";

class AuthService {
  login(credentials) {
    return axios
      .post(API_URL + "jwt/create/", credentials)
      .then(response => {
        if (response.data.access) {
          localStorage.setItem("access_token", JSON.stringify(response.data.access));
          localStorage.setItem('refresh_token', JSON.stringify(response.data.refresh));
          localStorage.setItem('email', credentials.email);
        }

        return response.data;
      });
  }

  refresh() {
    let refresh_token = localStorage.getItem('refresh_token')
    const user = jwt_decode(refresh_token)
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1

    if (!refresh_token){
        this.logout()
    }
    else if (isExpired)
    {
      this.logout()
      return "You have been inactive on the site for too long, you need to log in again";
    }
    else{
        refresh_token = localStorage.getItem('refresh_token')
        return axios
        .post(API_URL + "jwt/refresh/", refresh_token)
        .then(response => {
            if (response.data.access) {
              localStorage.setItem("access_token", JSON.stringify(response.data.access));
              localStorage.setItem("refresh_token", JSON.stringify(response.data.access));
            }

            return response.data;
        });
    }
  }

  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('email');
  }

  register(credentials) {
    return axios.post(API_URL + "users/", credentials)
    .then(response => {
      if (response.status === 201) {
        localStorage.setItem('email', credentials.email);
      }

      return response.data
    });;
  }

  getCurrentUser() {
    return localStorage.getItem('access_token');
  }

  activationEmail(credentials){
    return axios.post(API_URL + "users/activation/", credentials)
  }

  resendEmail(){
    return axios.post(API_URL + "users/resend_activation/", {email: localStorage.getItem('email')});
  }

  resendActivationEmail(credentials){
    return axios.post(API_URL + "users/resend_activation/", credentials);
  }

  resetPassword(credentials){
    return axios.post(API_URL + "users/reset_password/", credentials);
  }

  resetPasswordConfirm(credentials){
    return axios.post(API_URL + "users/reset_password_confirm/", credentials);
  }

  googleAuthenticate(credentials){
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    const formBody = Object.keys(credentials).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(credentials[key])).join('&') // making it URL Friendly

    return axios.post(API_URL + 'o/google-oauth2/', formBody, config)
    .then(response => {
      if (response.data.access) {
        localStorage.setItem("access_token", JSON.stringify(response.data.access));
        localStorage.setItem('refresh_token', JSON.stringify(response.data.refresh));
      }

      return response.data;
    });
  }

  continueWithGoogle(){
    return axios.get(API_URL + 'o/google-oauth2/?redirect_uri=http://localhost:8000')
  }
}

export default new AuthService();