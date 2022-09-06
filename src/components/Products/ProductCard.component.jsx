import React from "react";
import { Card ,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProductList.css"

const ProductCardComponent = ({products,categories,titleid}) => {
  const weights = ['Kg','Litre','Piece']
  // console.log(titleid.kid,categories[titleid.kid])
  
  return (
    <div className="ProductList-main">
      
      {titleid.kid === undefined && 
      <h3 className="text-xl-center">All Products</h3>}
      {titleid.kid !== undefined && 
      <h3 className="text-xl-center">Filtered Products :  {categories.filter(cat => cat.id == titleid.kid).map(catObj => (
       <span key={catObj.Title}>
        {console.log(catObj.Title)}
         {catObj.Title}
       </span>
       
      ))}</h3>}
      
      <hr />
      <div className='row'>
      {products.map((product) => {
        return (
          <div className='col-md-3 my-3' key={product.id}>
            <Card style={{ width: "24rem" }} as={Link} to={`/products/${product.id}`}>
              <Card.Subtitle className="card-shop"><i>Sold by: </i>{product.Shop.Shop_Name}</Card.Subtitle>
              <Card.Img variant="middle" className="catImg" src='/assets/home/sample.jpg' />
              <Card.Body className="cardBody">
              <Card.Title className="text-xl-center cardTitle">{product.Title} </Card.Title>
               <Card.Subtitle > <label className="product-card-details" htmlFor="product-card-details">₹{product.Price}/{weights[product.Qty_Type]}</label>  <Button variant="light" className="card-cart-btn">add to cart</Button></Card.Subtitle>
               
              </Card.Body>
            </Card>
          </div>
        );
      })}
      </div>
      
    </div>
  );
};

export default ProductCardComponent;
