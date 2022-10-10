import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderComponent from "./OrderComponent";
import { Link } from 'react-router-dom';

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const os = {0:'Processing',1:'Accepeted',2:'Completed'}

  const handleDateTime = (dt) => {
    const arr = dt.split('T')
        return arr[0] + '  ' + arr[1].slice(0,8)
  }
  const getOrders = async () => {
    let token = localStorage.getItem("token");
    console.log(token);
    const res = await axios.get("http://localhost/api/orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    let orderData = await res.data;
    console.log(orderData);
    setOrders(orderData.orders);
  };

  useEffect(() => {
    getOrders();
    document.title = "eKirana-Orders";
  }, []);

  return (
    <div className="container my-2">
      <h2>Order History</h2>
      <hr />
      <table>
        <tbody>
          <tr>
            <th>Refrence Id</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Order Placed</th>
          </tr>
          {orders.map((order) => (
          
             <tr key={order.id}>
                <td><Link to={`/orders/${order.id}`}>{order.RefrenceID}</Link></td>
                <td>{order.Total}</td>
                <td>{os[order.status]}</td>
                <td>{handleDateTime(order.created_at)}</td>
             </tr>
           
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersPage;
