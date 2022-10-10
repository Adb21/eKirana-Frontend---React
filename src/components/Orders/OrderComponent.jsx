import React,{useState,useEffect} from 'react'
import {  useParams } from 'react-router-dom'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


function OrderComponent() {
  const {id} = useParams();
  const [items,setItems] = useState([])
  const [rfid,setrfid] = useState('')
  const navigate = useNavigate();

  const os = {0:'Processing',1:'Accepeted',2:'Completed'}

  const handleNavOrder = () =>{
    navigate("/orders");
  }

  const getOrderItems = async () =>{
    let link = 'http://localhost/api/orders/'+id;
    console.log(link);
    let token = localStorage.getItem('token');
    console.log(token)
    const res = await axios.get(link, {
    headers: {
      'Authorization': `Bearer ${token}`
    } 
    })
    let cartData = await res.data;
    console.log(cartData)
    setItems(Object.values(cartData)[2]);
    setrfid(Object.values(cartData)[1]);
  }

  useEffect(()=>{
    getOrderItems()

},[id])
  return (
    <div className='container my-4'>
        <div className='row'>
          <div className='col-md-8'>
          <h2>Order Details for #{rfid}</h2>
          </div>
          <div className='col-md-2'>
          <Button variant='secondary' onClick={handleNavOrder}>Go back to Orders</Button>
          </div>
       
        </div>
        
        <hr />
        <table>
            <tbody>
            <tr>
                <th></th>
                <th>Product</th>
                <th>Item Refrence ID</th>
                <th>Seller</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Status</th>
            </tr>
      {items.map((item,index) => (
       
       <tr key={index}>
           <td>{index+1}</td>
           <td>{item.ItemName}</td>
           <td>{item.ItemRefID}</td>
           <td>{item.SellerName}</td>
           <td>{item.Price}</td>
           <td>x{item.Quantity}</td>
           <td>{item.Total}</td>
           <td>{os[item.status]}</td>
       </tr>
   ))}

            </tbody>
            </table>
    </div>
  )
}

export default OrderComponent