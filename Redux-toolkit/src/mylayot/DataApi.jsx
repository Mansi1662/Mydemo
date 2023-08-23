import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from './Navbar';
// import { useNavigate } from 'react-router-dom';
import{
    Link,
}from 'react-router-dom';




function DataApi(props) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    // const history = useHistory();
    // const navigate = useNavigate();
    


    useEffect(() => {
        
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8008/api/user');
      setData(response.data);
      console.log("My data:",data);
      // navigate ('/');

    } catch (error) {
      setError(error);

    } finally {
      setIsLoading(false);
    }
  };



  const handleDelete = async (id) => {
    // Make the API request to delete the item
    try {
      const response = await axios.delete(`http://localhost:8008/api/delete/${id}`);
      console.log(response.data.message);

      fetchData();

    } catch (error) {
      console.error(error);
    }
  };



  if (isLoading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
        <Navbar />  
      {/* {data && <p>{data.add}</p>} */}
      <div className="container-fluid data">
               
                
                <div className="data-tb table-responsive ">
                    <table className='table mytable'>
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Name</th>
                            <th>Mobile No.</th>
                            <th>DOB</th>
                            <th>Address</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        { data.map((user,index) => (
                            <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.Name}</td>
                            <td>{user.mb}</td>
                            <td>{user.dob}</td>
                            <td>{user.address}</td>
                            <td>
                                <Link to={`/update/${user.id}`} className='btn btn-primary'>Edit</Link>&nbsp;&nbsp;
                                <button className='btn btn-danger' onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
        </div>
    </div>
  );
}

export default DataApi;