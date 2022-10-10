import React,{useEffect,useState, useReducer} from 'react'
import axios from 'axios';
import UpdateCart from './UpdateCart.component';
import { Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function CartPage() {
    const [total,setTotal] = useState(0)
    const [cartitems,setCart] = useState([])
    // const [update, forceUpdate] = useReducer(x=>x+1,0)

    // function handleUpdate(){
    //   forceUpdate();
    // }

    const getCart = async () => {
        
        let token = localStorage.getItem('token');
        console.log(token)
        const res = await axios.get('http://localhost/api/cart', {
        headers: {
          'Authorization': `Bearer ${token}`
        } 
        })
        let cartData = await res.data;
        console.log(cartData)
        setCart(Object.values(cartData)[1])
        setTotal(Object.values(cartData)[0])

      }

      const handleClearCart = async () =>{
        
        let token = localStorage.getItem('token');
        console.log(token)
        const res = await axios.delete('http://localhost/api/cart', {
        headers: {
          'Authorization': `Bearer ${token}`
        } 
        })
        let cartData = await res.data;
        // handleUpdate()
        console.log(cartData)
      }

    
    useEffect(() => {
        
        getCart();
        // if (total>0){
        //   setEmptyCart(false)
        // }
        document.title = "eKirana-Cart";

      },[total]);
    
  return (
    <div className='container my-2'>

        <h3 className='my-4'>Cart</h3>
        <hr />
        {total === 0 && (
        <Alert variant='dark'>
          Cart is Empty! Please add products to cart
        </Alert>
        )}
        {total>0 && (
          
        <>
        
        <table>
            <tbody>
            <tr>
                <th></th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
            {cartitems.map((item,index) => (
       
            <tr key={index}>
                <td>{index+1}</td>
                <td>{item.ItemName}</td>
                <td><UpdateCart cartitem={item.Item} qty={item.Quantity} getCart={getCart}/> </td>
                {/* <td>x{item.Quantity}</td> */}
                <td>{item.Price}</td>
            </tr>
        ))}
           
            <tr>
                <th colspan="3">Total</th>
                {/* <td></td> */}
                {/* <td></td> */}
                <td><b>₹ {total}</b></td>
            </tr>
            </tbody>
            </table>

              <div className='my-4'>
              <Button variant="danger" className='mx-2' onClick={handleClearCart}>Clear Cart</Button>
              <Button variant="success" className='mx-2' as={Link} to={'/review-cart'}>Procced to Buy</Button>
              </div>
              </>)}
              
    </div>
  )
}

export default CartPage