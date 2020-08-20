import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { saveorder } from '../actions/orderaction'



function OrderForm(props) {
    const [color, setColor] = useState("linear-gradient( white, red)");
    const [user_name, setUser_name] = useState('');
    const [user_contact, setUser_contact] = useState(0);
    const[hosting_prefernce,setHosting_prefernce]=useState(true);
    const orderSave = useSelector(state => state.orderSave)
    const { loading, order, error,success } = orderSave;
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (order) {
    //         props.history.push("/")
    //     }
    //     return () => {

    //     };
    // }, [order]);

    setTimeout(() => {
        color === "linear-gradient(white, red)" ? setColor("linear-gradient(white, #3838b2)") :

            setColor("linear-gradient(white, red)")
    }, 2000);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveorder({user_name,user_contact,hosting_prefernce}))
        props.history.push("/static")
    }


    return (
        <div className="height-adjust about_section">
            <div style={{ backgroundImage: color }} className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">ORDER</h1>
                    <p className="lead">Fill this Form to get your dream website</p>
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
                            <label><h5>your Name</h5></label>
                        </li>
                        <li className='need'>
                            <input className='container-fluid' value={user_name} id="user_name" type="text" name='user_name' placeholder="Enter your Name" onChange={(e) => setUser_name(e.target.value)}></input>
                        </li>
                        <li>
                            <label><h5>Your Contact No</h5></label>
                        </li>
                        <li className='need'>
                            <input className='container-fluid' value={user_contact} id="user_contact" type="text" name='user_contact' placeholder="Enter your Contact_no" onChange={(e) => setUser_contact(e.target.value)}></input>
                        </li>
                        {/* <li className='need'>
                            <input className='container-fluid' value={hosting_prefernce} type='checkbox' id='hosting_prefernce' name='hosting_prefernce' placeholder="select your hosting prefernce" onchange={(e)=>setHosting_prefernce(e.target.value)}></input>
                        </li> */}
                        <li>
                            <button className=' login-btn btn btn-primary'>Submit</button>
                        </li>
                    </ul>
                </form>
            </div>

        </div>

    )
}

export default OrderForm;
