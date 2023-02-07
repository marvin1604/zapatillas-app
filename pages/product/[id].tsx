import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar/Navbar'
import { log } from 'console'

const ProductItem = () => {
    const router = useRouter()
    const id = router.query.id

    const [product, setProduct] = useState<TProduct>()
    useEffect(()=>{
      id && window
      .fetch(`/api/shoes/${id}`)
      .then((response) => response.json())
      .then((item) =>{
        setProduct(item)
        console.log(item)
      })
      .catch(err=> console.log(err))
    }, [id])
return (
  <section>
    <img src={product?.image} alt="" />
    <h1>Página producto: {product?.name}</h1>
    <p></p>
  </section>
  )
}

export default ProductItem