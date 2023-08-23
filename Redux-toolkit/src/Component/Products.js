import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/CartSlice';
import { getProducts } from '../store/ProductSlice';

function Products() {
    const dispatch = useDispatch()
    // const [product,setProduct] = useState([])
    const {data: product, status} = useSelector(state => state.product) // to get the api data using useSelectore also to read the state we need useSelectore


    useEffect(() => {
        // dispatch an action to fetch api 
        dispatch(getProducts())

        // fetch('https://fakestoreapi.com/products').then(data => data.json()).then(result => setProduct(result))
    }, [])

    if(status === 'loading'){
        return <p>Loading....</p>

    } // this status is come from productslice 

    if(status === 'Error'){
        return <p>Something's Wrong! Try agin later :/</p>

    }

    const addToCart = (product) => {
        // dispatch add action
        dispatch(add(product))
    }

    
    return (
        <>
        <h1>this is product page</h1>
        <div className='container'>
            <div className='row mt-5'>   
            {/* {card} */}

            {product.map((items, index) => (
                <div className='col-4 mb-5' key={index.id}>
                    <div className="card text-center"  style={{ width: "18rem", height:"300px"}}>
                        <img src={items.image} className="card-img-top mt-3" alt="..." style={{ width: "100px", height: "130px", textAlign: 'center', margin: 'auto'}}/>
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontSize: '14px'}}>{items.title}</h5>
                            <p className="card-text">{items.price}</p>
                            <button href="#" className="btn btn-primary" onClick={() => addToCart(items)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
            
           
        </>
    );
}

export default Products;