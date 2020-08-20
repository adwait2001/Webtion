import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { listorder } from '../actions/orderaction'

function OrderDisplay(props) {
    const orderList = useSelector(state => state.orderList)
    const { loading, orders, error } = orderList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listorder())
        return () => {
            //
        };
    }, []);


    return (
        loading ? <div><loading /></div> : error ? <div>{error}</div> :
            <div className="product-list">

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>contact</th>
                            <th>Hosting prefernce</th>

                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (<tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.user_name}</td>
                            <td>{order.user_contact}</td>

                        </tr>))}
                    </tbody>
                </table>

            </div>
    )

}


export default OrderDisplay;