
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { detailsproducts } from '../actions/productsaction'



function ProductDisplay(props) {
  const productDetails = useSelector(state => state.productDetails)
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  const userSignin = useSelector(state => state.userSignin)
  const {userInfo} = userSignin;


  useEffect(() => {
    dispatch(detailsproducts(props.match.params.id))
    return () => {
      //
    };
  }, []);
  return loading ? <div><loading /></div> : error ? <div>{error}</div> :
    <div>
      <div className="back-to-result">
        <Link to="/">Back to Home</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="product" ></img>
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              Price: <b>Rs {product.price}/mo</b>
            </li>
            <li>
              Price without Hosting : <b>Rs {product.cost}</b>
            </li>
            <li>
              Description:
            <div>
                {product.desc}
              </div>
            </li>
            <li>
              <form action={product.link_to_web} target="_blank">
              <button class='btn-star btn-primary'>Preview</button>
              </form>
            </li>
          </ul>
        </div>
        <div className="details-action container-sm">
          <ul>
            <li className='centre'>
              Price with Hosting : <b>Rs {product.price}/mo</b>
            </li>
            <li className='centre'>
              Price without Hosting : <b>Rs {product.cost}</b>
            </li>
            {/* <li>
            Status: {product.status}
          </li>
          <li>
            Qty: <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </li> */}
          { !userInfo? <Link to='/register'>
            <li>
              <button className="btn btn-primary" >Get It Launched</button>
            </li>
          </Link>:
          <Link to='/createorder'>
          <li>
            <button className="btn btn-primary" >Get It Launched</button>
          </li>
        </Link>
          }
          </ul>
        </div>

      </div>

    </div>


}

export default ProductDisplay;