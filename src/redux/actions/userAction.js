import {server} from '../store.js';
import axios  from 'axios';


export const login =(email,password)=>async(dishpatch)=>{
try {
    dishpatch({type:"loginRequest"});
    const {data} = await axios.post(`${server}/login`,{email,password},{
        headers:{
            "Content-type":"application/json",
        },
        withCredentials:true

    });
    console.log(data);
    dishpatch({type:"loginSuccess",payload:data});
    
} catch (error) {
    dishpatch({type:"loginFail",payload:error.response.data.message});
    
}

}

export const getMyProfile =()=>async(dishpatch)=>{
    try {
        dishpatch({type:"loadUserRequest"});
        const {data} = await axios.get(`${server}/me`,{
           
            withCredentials:true
    
        });
        console.log(data);
        dishpatch({type:"loadUserSuccess",payload:data.user});
        
    } catch (error) {
        dishpatch({type:"loadUserFail",payload:error.response.data.message});
        
    }
    
    }