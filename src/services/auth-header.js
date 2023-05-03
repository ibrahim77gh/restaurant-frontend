// Data Service
export default function authHeader() {
    const access_token = localStorage.getItem('access_token');
  
    if (access_token) {
      return { Authorization: 'Bearer ' + accessToken };
    } else {
      return {};
    }
  }
  