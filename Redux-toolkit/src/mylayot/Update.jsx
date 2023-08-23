import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function Update(props) {

    const {id} = useParams();
    const navigate = useNavigate();
    // const [user, setUser] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8008/api/read/'+id).then(res =>{
            console.log("Get data",res);
            setValues({...values, Name: res.data[0].Name, mb:res.data[0].mb, dob:res.data[0].dob, address:res.data[0].address })
           
        }).catch(err => console.log("error in geting data ",err))
    },[])
    const [values, setValues] = useState({
        Name: '',
        mb: '',
        dob: '',
        address: ''
    })

    const handleUpdate = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:8008/api/update/'+id, values).then(res => {
            console.log("edited data",res);
            navigate('/dataApi')
        }).catch(err => console.log('Error in edit data',err));
    }

    return (
        <>
            <div className="de-flex vh-100  justif-content-center align-items-center update">
                <div className="w-50 bg-white rounded p-3 update-info">
                    <form onSubmit={handleUpdate}>
                        <h2>Edit </h2>
                        <div className="mb-2">
                            <label htmlFor="">Name:</label>
                            <input type="text" placeholder='Enter Name' className='form-control' value={values.Name} onChange={e => setValues({...values, Name: e.target.value})} />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="">Mobile No:</label>
                            <input type="text" placeholder='Enter Mobile Number' className='form-control' value={values.mb} onChange={e => setValues({...values, mb: e.target.value})} />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="">DOB:</label>
                            <input type="text" className='form-control' placeholder='Enter Date of Birth' value={values.dob} onChange={e => setValues({...values, dob: e.target.value})} />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="">Address:</label>
                            <input type="text" placeholder='Enter Name' value={values.address} className='form-control' onChange={e => setValues({...values, address: e.target.value})} />
                        </div>

                        <button className='btn btn-primary'> Submit</button>


                    </form>
                </div>
            </div>
        
        </>
    );
}

export default Update;