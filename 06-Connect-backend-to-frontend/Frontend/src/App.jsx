import React, { useState } from 'react'
import Axios from "axios"

import React from 'react'
import Axios from "axios"
import { useState } from 'react'
const App = () => {

  //Fetch method

  // const api = async() =>{
  //   let res =await  fetch ("http://localhost:8000/")
  //   const data = await res.json()
  //  .then((e)=>{
  //   console.log(e)
  //  })
  //  .catch((e)=>{
  //   console.log(e)
  //  })
  // }

  // Axios Method  

  // const Api = async ()=>{
  //   const res = await Axios ("http://localhost:8000/")
  //   console.log(res.data)

  // const Api = async ()=>{
  //   await Axios ("http://localhost:8000/")
  //    .then ((e)=>{
  //     console.log(e.data)
  //    })
  //       .catch ((e)=>{
  //     console.log(e)
  //    })/


  //  Form data show on frontend  to Backend server

  const [username, setusername] = useState("")
  const [age, setage] = useState("")
  const [city, setcity] = useState("")

  const Api = () => {
    Axios.post("http://localhost:8000/", {
      username,
      age,
      city
    })
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>

      <input 
        type="text" 
        placeholder="ENTER YOUR NAME" 
        onChange={(e) => setusername(e.target.value)} 
      />

      <input 
        type="text" 
        placeholder="ENTER YOUR AGE" 
        onChange={(e) => setage(e.target.value)} 
      />

      <input 
        type="text" 
        placeholder="ENTER YOUR CITY" 
        onChange={(e) => setcity(e.target.value)} 
      />

      <button onClick={Api}>Send</button>

    </div>
  )
}

export default App
