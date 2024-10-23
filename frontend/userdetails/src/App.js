import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Users from './Users';
import CreateUsers from './CreateUsers';
import UpdateUsers from './UpdateUsers';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Users/>}>Users</Route>
      <Route path='/create' element={<CreateUsers/>}>Create Users</Route>
      <Route path='/update/:id' element={<UpdateUsers/>}> Update Users</Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
