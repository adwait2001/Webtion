import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../actions/userAction'
import {Link} from 'react-router-dom'

function Register(props) {
    const [color, setColor] = useState("linear-gradient( white, red)");
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [contactno, setContactNo] = useState();
    const userRegister = useSelector(state => state.userRegister)
    const { loading, userInfo, error } = userRegister;
    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo) {
            props.history.push("/login")
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
        dispatch(register(name, email, password, contactno))
    }

    return (
        <div className="height-adjust about_section">
            <div style={{ backgroundImage: color }} className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Register</h1>
                    <p className="lead">Register to confirm your order</p>
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
                        <Link to='/login'>ALREADY HAVE AN ACCOUT LOGIN HERE</Link>
                        </li>
                        <li>
                            <label><h5>Name</h5></label>
                        </li>
                        <li className='need'>
                            <input className='container-fluid' id="name" type="name" name='name' placeholder="Enter your Name" onChange={(e) => setName(e.target.value)}></input>
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
                            <label><h5>Confirm Password</h5></label>
                        </li>
                        <li className='need'>
                            <input className='container-fluid' type="password" name='password' placeholder="Confirm Password"></input>
                        </li>
                        <li>
                            <label><h5>Contact No</h5></label>
                        </li>
                        <li className='need'>
                            <input className='container-fluid' id="contactno" type="contact" name='contact' placeholder="Enter Contact No" onChange={(e) => setContactNo(e.target.value)}></input>
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

export default Register;
