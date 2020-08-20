import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listproducts } from '../actions/productsaction';
import loading from './loadingComponent'







function Product(props) {
  var styles = {
    width: '18 px'
  };
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listproducts())
    return () => {
      //
    };
  }, []);



  return loading ? <div><loading /></div> : error ? <div>{error}</div> :
    <div className='container prod'>
      <div id="display" className='row'>


        {
          products.map((product) =>
            <div className="margin">
              <div className="card" style={{ styles }}>
                <Link to={'/products/' + product._id} >
                  <img className="card-img-top" src={product.image} alt="Card image cap" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.desc}</p>
                  <div className="flex">
                    <form action={product.link_to_web}>
                      <button class='btn-1 btn btn-primary'>Preview</button>
                    </form>
                    <Link to={'/products/' + product._id} >
                      <a href="#" className=" btn btn-primary">Get it Customized</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        }

      </div>
    </div>
}

export default Product;