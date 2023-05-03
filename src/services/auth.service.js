// Authentication service
import axios from "axios";
import dayjs from 'dayjs';
import jwt_decode from "jwt-decode";

const API_URL = "http://127.0.0.1:8000/";

class AuthService {
  login(credentials) {
    return axios
      .post(API_URL + "auth/jwt/create/", credentials)
      .then(response => {
        if (response.data.access) {
          localStorage.setItem("access_token", response.data.access);
          localStorage.setItem('refresh_token', response.data.refresh);
          localStorage.setItem('username', credentials.username);
        }

        return response.data;
      });
  }

  refresh() {
    const refresh_token = localStorage.getItem('refresh_token')
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
        .post(API_URL + "auth/jwt/refresh/", refresh_token)
        .then(response => {
            if (response.data.access) {
              localStorage.setItem("access_token", response.data.access);
              localStorage.setItem("refresh_token", response.data.access);
            }

            return response.data;
        });
    }
  }

  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('username');
  }

  register(credentials) {
    return axios.post(API_URL + "auth/users/", credentials);
  }

  getCurrentUser() {
    return localStorage.getItem('access_token');
  }
}

export default new AuthService();