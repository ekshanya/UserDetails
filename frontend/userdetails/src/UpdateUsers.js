import React from 'react';
import {useState} from 'react'
import {useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
function UpdateUsers() {
    const {id} = useParams()
     let [Name,setName] = useState()
    let [Email,setEmail] = useState()
    let [Number,setNumber] = useState()
    let [id1,setid] = useState()
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:3000/getUser/"+id)
        .then((res) => {
        console.log(res.data)
        setName(res.data.Name)
        setEmail(res.data.Email)
        setNumber(res.data.Number)
        setid(res.data.id)
        })
        .catch(err => console.log(err)
        )
    },[])
    const submit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3000/updateUsers/'+id,{Name,Email,Number,id1})
        .then(
            (res) => {
                console.log(res)
                navigate('/')

    })
        .catch(err => console.log(err))
    }
    return ( 
        <div className="d-flex vh-150 justify-content-center align-items-center bg-secondary">
            <div className="w-150 rounded bg-white p-3">
                <form onSubmit={submit}>
                    <h2>Update user</h2>
                    <div className="mb-2">
                        <label htmlFor="" >Name</label>
                        <input className="form-control" type="text" placeholder="Enter your name" value={Name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="" >Email</label>
                        <input className="form-control" type="text" placeholder="Enter your email" value={Email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="" >Number</label>
                        <input className="form-control" type="tel" placeholder="Enter your number" value={Number} onChange={(e) => setNumber(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="" >Id</label>
                        <input className="form-control" type="number" placeholder="Enter your id" value={id1} onChange={(e) => setid(e.target.value)}/>
                    </div>
                    <button className="btn btn-primary">Update</button>
                </form>
            </div>

        </div>
    );
}

export default UpdateUsers;