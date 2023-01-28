import React, { useEffect, useState } from 'react'
import MyBar from './MyBar'
import MyCard from './MyCard'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://https://www.melivecode.com/api/attractions')
      .then(res.json())
      
    setData([
    ])
  }, [])


  return (
    <div>
    <MyBar name="Me App" />
    <MyCard />
    <h1>Hello DIT, RSU</h1>
    {data.map(item => (
        <MyCard key={item.id} name={item.name} />
      ))}
    </div>
  )
}

export default App