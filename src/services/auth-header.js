// Data Service
export default function authHeader() {
    let access_token = JSON.parse(localStorage.getItem('access_token'));
  
    if (access_token) {
      return { Authorization: 'Bearer ' + access_token };
    } else {
      return {};
    }
  }
  