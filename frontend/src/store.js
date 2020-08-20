import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
import { productlistreducer,productdetailsreducer, productsavereducer, productdeletereducer } from './reducers/productreducers';
import { usersiginreducer, userregisterreducer } from './reducers/userreducers';
import Cookie from 'js-cookie'
import { orderlistreducer, ordersavereducer } from './reducers/orderreducers';

const userInfo = Cookie.getJSON("userInfo") || null;


const initalstate={userSignin:{userInfo}};
const reducer=combineReducers({
    productList:productlistreducer,
    productDetails:productdetailsreducer,
    userSignin:usersiginreducer,
    userRegister:userregisterreducer,
    productSave:productsavereducer,
    productDelete:productdeletereducer,
    orderList:orderlistreducer,
    orderSave:ordersavereducer
})

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,initalstate,composeEnhancer(applyMiddleware(thunk)));

export default store;