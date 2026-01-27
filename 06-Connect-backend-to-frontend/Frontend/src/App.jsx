import React from 'react'

const App = () => {
  const api = async() =>{
    let res =await  fetch ("http://localhost:8000/")
    const data = await res.json()
    console.log(data)
  }
  return (
    <div>
      <button onClick={api}>Send</button>
    </div>
  )
}

export default App
