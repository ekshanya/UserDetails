import React from 'react';
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
function Users() {
    const [users,setUsers] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000")
        .then((res) => {
        setUsers(res.data)
        })
        .catch(err => console.log(err)
        )
    },[])
    const handleClick = (id) => {
        axios.delete('http://localhost:3000/deleteUser/'+id).then(res=> {console.log(res.data)
        window.location.reload()}).catch((err) => console.log(err)
        )
    }
    return ( 
        <div className="bg-secondary d-flex vh-100 justify-content-center align-items-center">
            <div className="w-150 bg-white p-3 rounded">
                <div className='d-flex flex-row'>
                <h1>User Details</h1>
                <Link to='/create' className='btn btn-primary m-auto'>Add</Link>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Id</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => {
                            return (
                                <tr>
                                    <td>{user.Name}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.Number}</td>
                                    <td>{user.id}</td>
                                    <td>
                                        <Link to={`/update/${user._id}`} className='btn btn-info'>Update</Link>
                                        <button className='btn btn-danger m-3' onClick={(e) => handleClick(user._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>
            
        </div>
     );
}

export default Users;