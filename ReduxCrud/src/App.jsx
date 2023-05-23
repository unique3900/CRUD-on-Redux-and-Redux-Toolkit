import React, { useEffect } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
const App = () => {

  const userList = useSelector((state) => state.users.value)


  
  return (
    <div>
      <h1>APp</h1>
      {
        userList.map((item) => {
          return (
            <h1>{item.name}</h1>
          )
        })
}

    </div>
  )
}

export default App
