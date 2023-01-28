import React, { useEffect, useState } from 'react'
import MyBar from './MyBar'
import MyCard from './MyCard'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://https://www.melivecode.com/api/attractions')
    .then(res => res.json())
    .then((result) => {

    setData(result)
    })
  }, [])

  return (
    <div>
    <MyBar name="Me App" />
    <MyCard />
    <h1>Hello DIT, RSU</h1>
    {data.map(item => (
        <MyCard 
          key={item.id} 
          name={item.name} 
          coverimage={item.coverimage}
          detail={item.detail}
        />
      ))}
    </div>
  )
}

export default App