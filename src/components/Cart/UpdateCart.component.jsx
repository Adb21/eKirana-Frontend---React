import React,{useState,useEffect} from 'react'
import { ButtonGroup, Button } from 'react-bootstrap';
import axios from 'axios';

function UpdateCart({cartitem,qty,getCart}) {
  const [quantity,setQty] = useState(qty)
  const handleDec = () => {
    setQty((state)=>state=state-1)
    updateCart("dec")
  }
  const handleInc = () => {
    setQty((state)=>state=state+1)
    updateCart("inc")
  }
 
  const updateCart = async (qtype) => {
    let body = {
      "Item" : cartitem,
      "Quantity" : 0
    }
    if (qtype==="inc"){
      body = {
        "Item" : cartitem,
        "Quantity" : 1
      }
    }
    else{
      body = {
        "Item" : cartitem,
        "Quantity" : -1
      }
    }
    
    console.log(body)

    let token = localStorage.getItem('token');
    //console.log(token)
    const res = await axios.post('http://localhost/api/cart', body, {
    headers: {
      'Authorization': `Bearer ${token}`
    } 
    })
    getCart()
    console.log(res)
    
  }
  
  return (
    <>
   
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={handleDec} disabled={quantity<1}>-</Button>
                <Button disabled={true} variant="light">{quantity}</Button>
                <Button variant="secondary" onClick={handleInc} disabled={quantity>9}>+</Button>
              </ButtonGroup>
    </>
  )
}

export default UpdateCart