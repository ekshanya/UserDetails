import React, {useState} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function CreateUsers() {
    let [Name,setName] = useState()
    let [Email,setEmail] = useState()
    let [Number,setNumber] = useState()
    let [id,setid] = useState()
    const navigate = useNavigate()
    const submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/createUsers',{Name,Email,Number,id})
        .then(
            (res) => {
                console.log(res)
                navigate('/')

    })
        .catch(err => console.log(err))
    }
    return (
        <div className="d-flex vh-100 justify-content-center align-items-center bg-secondary">
            <div className="w-150 rounded bg-white p-3">
                <form onSubmit={submit}>
                    <h2>Add user</h2>
                    <div className="mb-2">
                        <label htmlFor="" >Name</label>
                        <input className="form-control" type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="" >Email</label>
                        <input className="form-control" type="text" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="" >Number</label>
                        <input className="form-control" type="tel" placeholder="Enter your number" onChange={(e) => setNumber(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="" >Id</label>
                        <input className="form-control" type="number" placeholder="Enter your id" onChange={(e) => setid(e.target.value)}/>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
     );
}

export default CreateUsers;