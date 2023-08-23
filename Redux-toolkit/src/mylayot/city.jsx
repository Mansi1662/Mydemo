import React, { useState } from 'react';
import Navbar from './Navbar';
// import {
//     Link,
// }from "react-router-dom";




function City(props) {
    
        const [selectedOption, setSelectedOption] = useState('');
        const [error, setError] = useState('');
        
        const validateDropdown = (e) => {
            e.preventDefault();
            if (selectedOption === '') {                
                setError('Please select a valid option.');
            } 
            else 
            {
                setError('');
                // Proceed with further actions
                window.location.href = '/bloodgrp';
                
            }
        };

        return (
            <>
                <Navbar />
                <div className="container-fluid c-bg">
                    <div className="content">
                        <div className="row">
                            <p>Select your city</p>
                            <select className='select'
                                value={selectedOption}
                                onChange={(e) => setSelectedOption(e.target.value)}                                        >
                                <option value="">Choose one</option>
                                <option value="option1">Ahmedabad</option>
                                <option value="option2">Gandhinagar</option>
                                <option value="option3">Surat</option>
                            </select>
                            {error && <span style={{ color: 'white' }} className='mt-4'>{error}</span>}
                        
                            
                            <div className="col text-end mt-4"> 
                                <button className='btn' type='submit' onClick={validateDropdown}>Next</button> 
                                {/* <Link  className='Link' to={"/bloodgrp"} >Next</Link> */}
                               
                            </div>
                        </div>
                    </div>
                </div> 
                
                
            </>
        );
    }

export default City;