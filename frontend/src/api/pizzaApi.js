import axios from 'axios';
import { getCookie } from '../helpers/cookies';

// liste des api pour administrateur

// add book api(axios.post)
export const addFood =async(values)=>{
    const token =  getCookie()
    const {data}= await axios.post("http://localhost:4000/food/create",{Headers:{Authorization:token}},values)
     return data 
}




// remove book api (axios.delete)
export const deletefood =async(values)=>{
    const token =  getCookie()
    const {data}= await axios.delete("http://localhost:4000/food/delete/",{Headers:{Authorization:token}},values)
     return data 
}


// get all user orders (axios.get)

export const getOrder =async(values)=>{
    const {data}= await axios.get("http://localhost:5000/order",values)
     return data 
}
