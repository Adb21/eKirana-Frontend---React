import React,{useState,useEffect} from 'react'
import { ButtonGroup, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function AddtoCartComponent({product}) {
  const navigate = useNavigate();

  const [qty,setQty] = useState(0);
  const handleInc = ()=>{
    setQty((state)=>state=state+1)
  }
  const handleDec = ()=>{
    setQty((state)=>state=state-1)
  }

  const addToCart = async () => {
    const body = {
      "Item" : product,
      "Quantity" : qty
    }
    let token = localStorage.getItem('token');
    console.log(token)
    const res = await axios.post('http://localhost/api/cart', body, {
    headers: {
      'Authorization': `Bearer ${token}`
    } 
    })

    console.log(res)
    navigate("/cart");

  }
  


  return (
    <>
    <div className='d-flex justify-content-left add-to-cart'>
         
              {/* <h5 variant="primary" className='mx-2'>QTY</h5>  */}
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={handleDec} disabled={qty<1}>-</Button>
                <Button disabled={true} variant="light">{qty}</Button>
                <Button variant="secondary" onClick={handleInc} disabled={qty>9}>+</Button>
              </ButtonGroup>
            </div>
            <div className='d-flex justify-content-left atc-txt'>
              <Button className='my-3' variant="warning" disabled={qty<1} onClick={addToCart}>Add to Cart</Button>
            </div>
    </>
  )
}

export default AddtoCartComponent