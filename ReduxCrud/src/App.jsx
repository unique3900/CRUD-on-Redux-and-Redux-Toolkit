import React, { useEffect, useState } from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { insertUser,deleteUser } from './Features/Users';
const App = () => {

  const userList = useSelector((state) => state.users.value);
  const dispatcher = useDispatch();
  const [name, setName] = useState("");
  const [uname, setUname] = useState("");


  const handleSubmit = () => {
    dispatcher(insertUser({ id: userList[userList.length-1].id +1, name, username: uname }));
  }
  
  return (
    <div className='main'>
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
            <div key={item.id} className='card'>
              <h1>{item.id}. {item.name}</h1>
              <h4>{item.username}</h4>

              <input type="text"  />
              <button>Update</button>
              <button onClick={() => {
                dispatcher(deleteUser({id:item.id}))
              }}>Delete</button>
            </div>
      
          )
        })
}

    </div>
  )
}

export default App
