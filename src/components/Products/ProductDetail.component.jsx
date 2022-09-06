import React, {useState,useEffect} from 'react';
import { Image, ButtonGroup, Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useParams } from 'react-router-dom'
import sample from 'C:/Users/bhosl/Desktop/Aditya_SSD/react/ekirana-frontend/src/media/sample.jpg'
import "./ProductDetail.css" 


const ProductDetailComponent = () => {
    const weights = ['Kg','Litre','Piece']
    const {id} = useParams();
    const [product,setProduct] = useState({loading:false})
    const cat = ['Grains','Masala','nan','Oils','Flour','Eateries','Soap & Detergents','Cosmetics','Others']

    useEffect(()=>{
        let link = 'http://localhost/api/product/'+id;
        console.log(link);
        
        fetch('http://localhost/api/product/'+id)
        .then((response)=>{return response.json()})
        .then((data)=>{
            console.log(data)
            setProduct({...data,loading:true});
        })
        .catch(e=>{
            console.log(e)
        })
        // setShopname(product.Shop.Shop_Name)
        
    },[id])

    return (
        <div className='container-fluid productdetail-main'>
        {!product.loading && <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}
        {product.loading && 
        <div className='row'>
          <div className='col'>
            <div className='d-flex justify-content-start my-4'>
              <Image src={sample} height="250px" />
            </div>
          </div>
          <div className='col' >
            <div className='d-flex justify-content-start title'>
              <h3>{product.Title}</h3>
            </div>
            <div>
            <table>
            <tbody>
            <tr>
                <th>Description</th>
                <td>{product.Description}</td>
            </tr>
            <tr>
                <th>Category</th>
                <td>{cat[product.Category]}</td>
            </tr>
            <tr>
                <th>Seller</th>
                <td>{product.Shop.Shop_Name}</td>
            </tr>
            <tr>
                <th>Price</th>
                <td>₹ {product.Price}/ {weights[product.Qty_Type]}</td>
            </tr>
            <tr>
                <th>Availability</th>
                <td><h5 className="text-success">
                <span variant="outline-success">In stock</span>
              </h5></td>
            </tr>
            </tbody>
            </table>
            </div>
           
          </div>
          <div className='col'>
            
            <div className='d-flex justify-content-left add-to-cart'>
         
              {/* <h5 variant="primary" className='mx-2'>QTY</h5>  */}
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">-</Button>
                <Button disabled={true} variant="light">0</Button>
                <Button variant="secondary">+</Button>
              </ButtonGroup>
            </div>
            <div className='d-flex justify-content-left atc-txt'>
              <Button className='my-3' variant="warning">Add to Cart</Button>
            </div>
           
          </div>
        </div>
}
                <hr />
        <div className='row'>
        <span className="rounded-bottom"></span>
          <div className='col'>
          <div className='d-flex justify-content-start' >
              <h5><i>Bank Offers :</i></h5>
            </div>

            <div >
             
              <h6 className='d-flex justify-content-start' ><p><b>Bank Offers </b>: 10% Instant Discount up to INR 1250 on ICICI Bank Credit Card EMI trxns (excluding Amazon Pay ICICI Credit Card) Min purchase value INR 5000</p></h6>
              <h6 className='d-flex justify-content-start' ><p><b>AllCashback  </b>: 15% back with Amazon Pay ICICI Bank credit card for Prime members. 3% back for others as Amazon Pay balance on purchase of this product only through prepaid payment method</p></h6>
             
              </div>
              <hr />
            <div className='d-flex justify-content-start' >
              <h3>Reviews :</h3>
            </div>

            <div >
              <h5 className='d-flex justify-content-start' >User 1</h5>
              <h6 className='d-flex justify-content-start' ><p>
                Reviewing after using it for last 3 days, bought from an offline store:

                1. Display is superb with 120hz and 60hz refresh rate option.
                2. Sound quality is good and loud from dual front speakers.
                3. Camera is having upto 30x zoom and other pro features. It could have been bit better for wide angle but night mode is sufficiently good.
                4. Comes with a 15W charger, but supports upto 25W fast and wireless charging.

              </p></h6>

              <h5 className='d-flex justify-content-start' >User 2</h5>
              <h6 className='d-flex justify-content-start' ><p>
                Reviewing after using it for last 3 days, bought from an offline store:

                1. Display is superb with 120hz and 60hz refresh rate option.
                2. Sound quality is good and loud from dual front speakers.
                3. Camera is having upto 30x zoom and other pro features. It could have been bit better for wide angle but night mode is sufficiently good.
                4. Comes with a 15W charger, but supports upto 25W fast and wireless charging.

              </p></h6>

              <h5 className='d-flex justify-content-start' >User3</h5>
              <h6 className='d-flex justify-content-start'><p>
                i used one mask today within one hour the elastic band for the ear is of poor quality n it is just stuck. it is not stitched.
                please dont cheat on things like this at this time of pandemic wer such things are essential.
                Sadly i cant return it which is understandable but its a waste of money for me.

              </p></h6>
            </div>
          </div>
          <div className='col-md-4'>
            <h5>Write a Review</h5>
            <textarea placeholder="Enter a short synopsis" rows={8} cols={60}/>
            <br/>
            <Button> Post </Button>
          </div>
         
        </div>
      </div>

    );
}

export default ProductDetailComponent;
