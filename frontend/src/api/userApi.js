import axios from 'axios';
import { getCookie } from '../helpers/cookies';
// liste des api pour un utilisateur 

// get all books(get) 
export const getUserOrder = async()=>{
    const {data} = await axios.get('http://localhost:4000/')
     return data
}

// rate book(put)
export const ratefood =async(values)=>{
    const token =  getCookie()
    const {data}= await axios.delete("http://localhost:4000/",{Headers:{Authorization:token}},values)
     return data 
}
export const getfood = async()=>{
    const {data} = await axios.get('http://localhost:4000/')
     return data
}

// wishlist api (put and get ) 

// create shopping card(post)

// finish order(post)



//register w login (nafess el api lel user w admin)

