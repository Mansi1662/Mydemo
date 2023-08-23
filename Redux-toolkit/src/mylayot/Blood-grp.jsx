import React, { useState } from 'react';
import Navbar from './Navbar';
import{
    Link,
}from 'react-router-dom';




function Bloodgrp(props) {
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
                window.location.href = '/dataApi';
                
            }
        };

        return (
            <>
                <Navbar />
                <div className="container-fluid blood-grp">
                    <div className="blood-content">
                        <div className="row">
                            <p>Select your blood-group</p>
                            <select 
                                value={selectedOption}
                                onChange={(e) => setSelectedOption(e.target.value)}                                        >
                                <option className='activ' value="">Choose one</option>
                                <option value="option1">Ahmedabad</option>
                                <option value="option2">Gandhinagar</option>
                                <option value="option3">Surat</option>
                            </select>
                            {error && <span style={{ color: 'white' }} className='mt-4'>{error}</span>}
                        
                            
                            <div className="col text-end mt-4">
                                <button className='btn'><Link  className='Link' to={"/city"} >Back</Link></button>
                                <button className='btn next' type='submit' onClick={validateDropdown}>Next</button> 
                                {/* <Link  className='Link' to={"/bloodgrp"} >Next</Link> */}
                               
                            </div>
                        </div>
                    </div>
                </div> 
                
                
            </>
        );
    // return (
    //     <>
    //         <Navbar />
    //         <div className="container-fluid blood-grp">
    //         <div className="blood-content">
    //                 <div className="row">
    //                     <p>Select your blood-group</p>
    //                     <select class="form-select" required aria-label="Default select example">
    //                         <option value=''>Choose one</option>
    //                         <option value="1">O+</option>
    //                         <option value="2">0-</option>
    //                         <option value="3">A+</option>
    //                         <option value="3">A+</option>
    //                         <option value="3">B+</option>
    //                         <option value="3">B+</option>
    //                     </select>
                        
    //                     <div className="col text-end mt-4">
    //                         <button className='btn'><Link  className='Link' to={"/city"} >Back</Link></button>
    //                         <button className='btn next'><Link className='Link'  to={"/data"} >Next</Link></button>
    //                         {/* <button className='btn next'>Next</button> */}
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // );
}

export default Bloodgrp;