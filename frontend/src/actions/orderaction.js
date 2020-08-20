import axios from 'axios';
import {ORDER_SAVE_FAIL,ORDER_SAVE_REQUEST,ORDER_LIST_SUCCESS,ORDER_SAVE_SUCCESS,ORDER_LIST_REQUEST,ORDER_LIST_FAIL} from '../constants/orderconstant'
import Axios from 'axios';
 

const saveorder=(order)=>async(dispatch,getState)=>{
    try {
        dispatch({type:ORDER_SAVE_REQUEST,payload:order})
        const { userSignin: { userInfo } } = getState();
        const {data}=await Axios.post('/api/orders/',order,{
            headers:{
                'Authorization':'Bearer '+userInfo.token
            }
        });
        dispatch({type:ORDER_LIST_SUCCESS,payload:data})

    } catch (error) {
        dispatch({type:ORDER_LIST_FAIL,payload:error.message});
    }
}   

const listorder=()=>async(dispatch,getState)=>{
    try {
        dispatch({type:ORDER_LIST_REQUEST})
        const { userSignin: { userInfo } } = getState();

        const {data}=await Axios.get('/api/orders/',{
            headers:{
                "Authorization":'Bearer '+userInfo.token
            }
        });
        dispatch({type:ORDER_LIST_SUCCESS,payload:data})
        
    } catch (error) {
        dispatch({type:ORDER_LIST_FAIL,payload:error.message})
    }
}

export{listorder,saveorder}