import {ORDER_SAVE_FAIL,ORDER_SAVE_REQUEST,ORDER_LIST_SUCCESS,ORDER_SAVE_SUCCESS,ORDER_LIST_REQUEST,ORDER_LIST_FAIL} from '../constants/orderconstant'

function orderlistreducer(state={orders:[]},action){
    switch (action.type) {
        case ORDER_LIST_REQUEST:
            return({loading:true,orders:[]})
        case ORDER_LIST_SUCCESS:
            return({loading:false,orders:action.payload})
        case ORDER_LIST_FAIL:
            return({loading:false,error:action.payload})
    
        default:
            return state;
    }
}

function ordersavereducer(state={order:{}},action){
    switch (action.type) {
        case ORDER_SAVE_REQUEST:
            return({loading:true})
        case ORDER_SAVE_SUCCESS:
            return({loading:false,order:action.payload,success:true})
        case ORDER_SAVE_FAIL:
            return({loading:false,error:action.payload})    
    
        default:
            return state;
    }
}

export{orderlistreducer,ordersavereducer}