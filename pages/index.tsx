import { log } from 'console'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
  const [shoesList, setShoesList] = useState<TProduct[]>([])

  useEffect(() => {
    window
    .fetch('/api/shoes')
    .then((response) => response.json())
    .then(({data, length}) => {
      setShoesList(data)
    })
}, [])

return (
  <div>
    <h1>Hello World :)</h1>
    {shoesList.map((item)=>(
      <>
        <h1>{item.name}</h1>
        <img src={item.image} alt={item.name} />
      </>
      
    ))}
    <h3>gracias</h3>
  </div>
)
}

export default Home

