const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_SUCCESS, PRODUCT_DELETE_REQUEST, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAIL } = require("../constants/productsconstant");


function productlistreducer(state = {products:[]},action) {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true,products:[] }
        case PRODUCT_LIST_SUCCESS:
            return { loading: false,products:action.payload }
        case PRODUCT_LIST_FAIL:
            return { loading:false,error:action.payload }

        default:
            return state;
    }
}

function productdetailsreducer(state = {product:{}},action) {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true }
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false,product:action.payload }
        case PRODUCT_DETAILS_FAIL:
            return { loading:false,error:action.payload }

        default:
            return state;
    }
}

function productdeletereducer(state={product:{} },action){
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return {loading:true}  
        case PRODUCT_DETAILS_SUCCESS:
            return{loading:false,success:true,product:action.payload}  
        case PRODUCT_DETAILS_FAIL:
            return{loading:false,error:action.payload}
        default:
            return state;
    }
}

function productsavereducer(state={product:{} },action){
    switch (action.type) {
        case PRODUCT_SAVE_REQUEST:
            return {loading:true}  
        case PRODUCT_SAVE_SUCCESS:
            return{loading:false,success:true,product:action.payload}  
        case PRODUCT_SAVE_FAIL:
            return{loading:false,error:action.payload}
        default:
            return state;
    }
}



export{productlistreducer,productdetailsreducer,productsavereducer,productdeletereducer}