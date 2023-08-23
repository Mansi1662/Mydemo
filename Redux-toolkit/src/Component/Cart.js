import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, reduceQt, remove } from '../store/CartSlice';

function Cart(props) {
    const productCart = useSelector(state => state.cart); //to get the state which gives you data 
    const dispatch = useDispatch()

    const removeCart = (id) => {
        //dispatch remove action
        dispatch(remove(id))
    }
    const addToCart = (id) => {
        // dispatch add action
        dispatch(add({id}))
    }
    const reduceQnt = (id) => {
        // dispatch reduce quantity action
        dispatch(reduceQt({id}))
    }  

    
    return (
        <>
            <h1>Cart</h1>
            {/* {JSON.stringify(productCart)} */}
            <div className='container'>
                <div className='row'>
                {productCart.map((items) => (
                    <div className='col-4 mb-5' key={items.id}>
                        <div className="card text-center"  style={{ width: "18rem", height:"350px"}}>
                            <img src={items.image} className="card-img-top mt-3" alt="..." style={{ width: "100px", height: "130px", textAlign: 'center', margin: 'auto'}}/>
                            <div className="card-body">
                                <h5 className="card-title" style={{ fontSize: '14px'}}>{items.title}</h5>
                                <p className="card-text">{items.price}</p>
                                <p className="card-text">
                                    <button className='btn btn-success' onClick={() => addToCart(items.id)} >+</button>&nbsp;&nbsp;
                                    Quantity: {items.quantity}&nbsp;&nbsp;&nbsp;
                                    <button className='btn btn-success' onClick={() => reduceQnt(items.id)}>-</button>
                                </p>
                                <button href="#" className="btn btn-danger" onClick={() => removeCart(items.id)} >Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </>
    );
}

export default Cart;