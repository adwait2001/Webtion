import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { signin } from '../actions/userAction'
import { Link } from 'react-router-dom'


function Login(props) {
    const [color, setColor] = useState("linear-gradient( white, red)");
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const userSignin = useSelector(state => state.userSignin)
    const { loading, userInfo, error } = userSignin;
    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo) {
            props.history.push("/")
        }
        return () => {

        };
    }, [userInfo]);

    setTimeout(() => {
        color === "linear-gradient(white, red)" ? setColor("linear-gradient(white, #3838b2)") :

            setColor("linear-gradient(white, red)")
    }, 2000);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password))
    }


    return (
        <div className="height-adjust about_section">
            <div style={{ backgroundImage: color }} className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Login</h1>
                    <p className="lead">Login to get your dream website</p>
                </div>
            </div>
            <div className="form">
                <form onSubmit={submitHandler}>

                    <ul className="list">
                        <li>
                            {loading && <div>Loading...</div>}
                            {error && <div>{error}</div>}
                        </li>
                        <li>
                        <Link to='/register'>DONT HAVE AN ACCOUNT REGISTER HERE</Link>
                        </li>
                        <li>
                            <label><h5>Email</h5></label>
                        </li>
                        <li className='need'>
                            <input className='container-fluid' id="email" type="email" name='email' placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)}></input>
                        </li>
                        <li>
                            <label><h5>Password</h5></label>
                        </li>
                        <li className='need'>
                            <input className='container-fluid' id="password" type="password" name='password' placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)}></input>
                        </li>
                        <li>
                            <button className=' login-btn btn btn-primary'>Submit</button>

                        </li>
                    </ul>

                </form>

            </div>
        </div>

    )
}

export default Login;
