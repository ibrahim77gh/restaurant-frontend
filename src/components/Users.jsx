import {useState} from "react"
import axios from "axios";

// auth/users
// To login with an existing user we use the endpoint: auth/jwt/create 
const Users = () => {
    const [users, setUsers] = useState();

  return (
    <div>Users</div>
  )
}

export default Users