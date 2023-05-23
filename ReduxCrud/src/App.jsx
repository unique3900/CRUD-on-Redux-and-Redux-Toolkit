import React, { useEffect, useState } from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { insertUser } from './Features/Users';
const App = () => {

  const userList = useSelector((state) => state.users.value);
  const dispatcher = useDispatch();
  const [name, setName] = useState("");
  const [uname, setUname] = useState("");

  const handleSubmit = () => {
    dispatcher(insertUser({ id: 88, name, username: uname }));
  }
  
  return (
    <div>
      <h1>APp</h1>
      
        <input type="text" placeholder='Enter Name' value={name} onChange={(e) => {
          setName(e.target.value)
        }} name="" id="" required />
        <input type="text" placeholder='Enter user Name' value={uname} onChange={(e) => {
          setUname(e.target.value)
        }} required />
        <button type="submit" onClick={handleSubmit}>Add User</button>
      
      {
        userList.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.name}</h1>
              <h4>{item.username}</h4>
            </div>
      
          )
        })
}

    </div>
  )
}

export default App
