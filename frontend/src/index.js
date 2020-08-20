import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './components/homecomponent';
import { Switch, Route, Redirect, withRouter, BrowserRouter } from 'react-router-dom'
import ProductDisplay from './components/ProductDisplay'
import StickyFooter from './components/footerComponent'
import { Provider } from 'react-redux'
import store from './store';
import Register from './components/register';
import Login from './components/login';
import AddProd from './components/addproducts';
import Static from './components/static'
import OrderForm from './components/orderform';
import OrderDisplay from './components/orderdisplay';
import Contact from './components/Contactcomponent'
import About from './components/AboutComponent'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Switch>
          <Route path='/home' component={() => <Home />} />
          <Route path='/products/:id' component={ProductDisplay} />
          <Route path='/product' component={AddProd}/>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/createorder' component={OrderForm}/>
          <Route path='/displayorder' component={OrderDisplay}/>
          <Route path='/static' component={Static}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/about' component={About}/>
          <Redirect to="/home" />
        </Switch>
        <StickyFooter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
