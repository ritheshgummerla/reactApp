import axios from "axios";

const findUsers=()=>{
  return axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        return res.data;
      })
}

export default{findUsers}