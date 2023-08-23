// import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'
// import axios from 'axios';





function Data(props) {
    // const [post,setPost]=useState(null);

    // const baseURL = "http://localhost:3000/details";
    // console.log("based url",baseURL);

    // useEffect(()=>{
    //     axios.get(baseURL).then((res)=>{
    //         setPost(res.data);
    //         console.log("fetched data",res);
    //     });
    // },[]);

    // if (!post) return null;
    
    return (
        <>
         <Navbar />
            <div className="container-fluid data">
               
                
                <div className="data-tb table-responsive ">
                    <table className='table mytable'>
                        <th >Information</th>
                        <tr>
                            <td>Sr. No.</td>
                            <td>Name</td>
                            <td>Mobile No.</td>
                            <td>DOB</td>
                            <td>Address</td>
                        </tr>
                        <tr>
                            {/* <td>{post.id}</td>
                            <td>{post.title}</td> */}
                            <td>1</td>
                            <td>Krunal sanghavi</td>
                            <td>9327537809</td>
                            <td>16/07/1885</td>
                            <td>C/3, Dhaval Flat, Near the jain tempal, shahpur</td>
                           
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Sejal Mukeshbhai Sheth</td>
                            <td>9429415003</td>
                            <td>27/07/1974</td>
                            <td>5, Shree Appt. , Sadhav Collony, Udhyan Marg, Law Garden</td>                            
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Rashesh Navinbhai Doshi</td>
                            <td>8000846689</td>
                            <td></td>
                            <td>3/H, Swetal Appt, Shahpur</td>                            
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Malav Nileshbhai Shah</td>
                            <td>8160272271</td>
                            <td></td>
                            <td>13, Navkar Appt, Sabarmati</td>                            
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Saishav Manishbhai Adani</td>
                            <td>9426215903</td>
                            <td></td>
                            <td>Mithakhali</td>                            
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Vipul Rashikal Sanghavi</td>
                            <td>9979932822</td>
                            <td></td>
                            <td>3/B, Kartvya Recedancy, New Bhramstriya Society, Pritamnagar, paldi</td>                            
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Mokshi Parin Sanghvi</td>
                            <td>9833814643</td>
                            <td>11/04/1995</td>
                            <td>402, Saprem Flat, Near Lemon Tree Hotel, Mithakhali</td>                            
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Priya parin Shah</td>
                            <td>9327537809</td>
                            <td>29/06/1989</td>
                            <td>D/202, Dev Archan Flats, Paldi</td>                            
                        </tr>
                    </table>
                </div>
                {/* <h1>titles:{post.title}</h1>
                <p>Body:{post.body}</p> */}

            </div>
        </>
    );
}

export default Data;