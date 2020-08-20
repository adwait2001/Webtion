import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'
import Signin from '../src/components/login'
import { useSelector } from 'react-redux'
import Register from '../src/components/register'


function App() {

  const userSignin = useSelector(state => state.userSignin)
  const { userInfo } = userSignin;

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light background">
        <Link to="/"><a className="navbar-brand pad logo" ><img src='/img/wix.jpg' height='60px' width='100px' /></a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <Link to="/">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            </Link>
            <Link to="/about">
            <li className="nav-item">
                <a className="nav-link" href="#">About us</a>
            </li>
            </Link>
            <Link to="/contact">
              <li className="nav-item">
                <a className="nav-link" href="#">Contact us</a>
              </li>
            </Link>

          </ul>

          <div className="header-links">
            {
              userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                <Link to="/login">Sign In</Link>
            }
          </div>

        </div>
      </nav>

    </div>

  );
}

export default App;
