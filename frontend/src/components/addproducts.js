import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { signin } from '../actions/userAction'
import { listproducts, saveproducts, deleteproduct } from '../actions/productsaction';



function AddProd(props) {
    const [color, setColor] = useState("linear-gradient( white, red)");
    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('')
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');
    const [cost, setCost] = useState('');
    const [category, setCategory] = useState('');
    const [link_to_web, setLink] = useState('');
    const productList = useSelector(state => state.productList);
    const { loading, products, error } = productList

    const productSave = useSelector(state => state.productSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = productList

    const productDelete = useSelector(state => state.productDelete);
    const { loading: loadingDelete, success: successDelete, error: errorDelete } = productList

    const dispatch = useDispatch();

    setTimeout(() => {
        color === "linear-gradient(white, red)" ? setColor("linear-gradient(white, #3838b2)") :

            setColor("linear-gradient(white, red)")
    }, 2000);

    useEffect(() => {
        if (successSave) {
            setModalVisible(false);

        }
        dispatch(listproducts())
        return () => {
            //
        };
    }, [successSave, successDelete]);

    const openModal = (product) => {
        setModalVisible(true);
        setId(product._id)
        setName(product.name)
        setDesc(product.desc)
        setImage(product.image)
        setCategory(product.category)
        setCost(product.cost)
        setLink(product.link_to_web)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveproducts({ _id: id, name, cost, desc, image, category, link_to_web }))

    }

    const deleteHandler = (product) => {
        dispatch(deleteproduct(product._id))
    }


    return (
        <div className="height-adjust about_section">
            <div style={{ backgroundImage: color }} className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Dashboard</h1>
                    <p className="lead">Its Time To Sell Your Wonderful Website</p>
                </div>
            </div>
            <div className="product-header">
                <h3>Products</h3>
                <button className="button primary" onClick={() => openModal({})}>Create Product</button>
            </div>
            {modalVisible &&
                <div className="form">
                    <form onSubmit={submitHandler}>
                        <ul className="list">
                            <li>
                                {loadingSave && <div>Loading...</div>}
                                {errorSave && <div>{errorSave}</div>}
                            </li>


                            <li>
                                <label><h5>Product Name</h5></label>
                            </li>
                            <li className='need'>
                                <input className='container-fluid' value={name} id="name" type="text" name='name' placeholder="Enter your Product Name" onChange={(e) => setName(e.target.value)}></input>
                            </li>
                            <li>
                                <label><h5>Product Description</h5></label>
                            </li>
                            <li className='need'>
                                <textarea className='container-fluid' value={desc} id="desc" name='desc' placeholder="Enter Product Description" onChange={(e) => setDesc(e.target.value)}></textarea>
                            </li>
                            <li>
                                <label><h5>Product Image</h5></label>
                            </li>
                            <li className='need'>
                                <input className='container-fluid' value={image} id="image" type="text" name='image' placeholder="Upload Product Image" onChange={(e) => setImage(e.target.value)}></input>
                            </li>
                            <li>
                                <label><h5>Product Cost</h5></label>
                            </li>
                            <li className='need'>
                                <input className='container-fluid' value={cost} id="cost" type="text" name='cost' placeholder="Enter Product Cost" onChange={(e) => setCost(e.target.value)}></input>
                            </li>
                            <li>
                                <label><h5>Product Category</h5></label>
                            </li>
                            <li className='need'>
                                <input className='container-fluid' value={category} id="category" type="text" name='category' placeholder="Enter Product Category" onChange={(e) => setCategory(e.target.value)}></input>
                            </li>
                            <li>
                                <label><h5>Product Link</h5></label>
                            </li>
                            <li className='need'>
                                <input className='container-fluid' value={link_to_web} id="link_to_web" type="text" name='link_to_web' placeholder="enter link redirecting to website" onChange={(e) => setLink(e.target.value)}></input>
                            </li>
                            <li>
                                <button type="submit" className="button btn-primary">{id ? "Update" : "Create"}</button>
                            </li>
                            <li>
                                <button type="button" onClick={() => setModalVisible(false)} className=" button btn-primary secondary">Back</button>
                            </li>
                        </ul>
                    </form>
                </div>}


            <div className="product-list">

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>link_to_web</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (<tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.cost}</td>
                            <td>{product.category}</td>
                            <td>{product.link_to_web}</td>
                            <td>
                                <button className="button btn-primary" onClick={() => openModal(product)} >Edit</button>
                                {' '}
                                <button className="button btn-primary" onClick={() => deleteHandler(product)} >Delete</button>
                            </td>
                        </tr>))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default AddProd;
