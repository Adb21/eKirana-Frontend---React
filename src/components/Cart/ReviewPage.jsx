import React, { useEffect, useState } from "react";
import axios from "axios";
import { Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ReviewPage() {
  const [total, setTotal] = useState(0);
  const [cartitems, setCart] = useState([]);
  const navigate = useNavigate();


  const getCart = async () => {
    let token = localStorage.getItem("token");
    console.log(token);
    const res = await axios.get("http://localhost/api/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    let cartData = await res.data;
    console.log(cartData);
    setCart(Object.values(cartData)[1]);
    setTotal(Object.values(cartData)[0]);
  };

  const handleBuyNow = async () => {
    let token = localStorage.getItem("token");
    console.log(token);
    const res = await axios.get("http://localhost/api/cart/buynow", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    let cartData = await res.data;
    console.log(cartData);
    navigate("/orderplaced");

  }
  useEffect(() => {
    getCart();
    document.title = "eKirana-Review Cart";
  }, []);

  return (
    <div className="container my-2">
      <h3 className="my-4">Review Cart</h3>
      <hr />
      <div className="row">
        <div className="col">
          <div>
            <h4>Address and Contact Info</h4>
            <div>
              <h5>Deliver to :</h5>
              <h6>Aditya Bhosle</h6>
              <h5>Address :</h5>
              <p>
                420 Hotel Exotica, Shaitan Gali, Andheri West, Rajkot,Gujarat -
                390001
              </p>
              <h5>Contact :</h5>
              <p>9999999999</p>
            </div>
          </div>
        </div>
        <div className="col">
          <h4>Delivery Details</h4>
          <p>
            Delivery by 24-48 Hours
          </p>
        </div>
      </div>
      <hr />
      <h3 className="my-4">Review Items</h3>
      {total === 0 && (
        <Alert variant="dark">Cart is Empty! Please add products to cart</Alert>
      )}
      {total > 0 && (
        <>
          <table>
            <tbody>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
              {cartitems.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.ItemName}</td>
                  <td>x {item.Quantity}</td>
                  {/* <td>x{item.Quantity}</td> */}
                  <td>{item.Price}</td>
                </tr>
              ))}

              <tr>
                <th colspan="3">Total</th>
                {/* <td></td> */}
                {/* <td></td> */}
                <td>
                  <b>₹ {total}</b>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="my-4">
            <Button variant="success" disabled={true} className="mx-2">
              Proceed To Payment
            </Button>
            <Button variant="success" onClick={handleBuyNow} className="mx-2">
              Buy Now
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default ReviewPage;
