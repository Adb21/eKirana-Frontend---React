import React from "react";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';


const CategoryCardComponent = ({categories}) => {
  
  return (
    <div className="Categories-main">
      <h3 className="text-xl-center">Shop by Categories</h3>
      <hr />
      <div className='row'>
      {categories.map((category) => {
        return (
          <div className='col-md-3 my-3' key={category.Title} >
            <Card style={{ width: "24rem" }} as={Link} to={`/products/Category=${category.id}`}>
              <Card.Img variant="top" className="catImg" src={category.URL} />
              <Card.Body className="cardBody">
                <Card.Title className="text-xl-center cardTitle">{category.Title} </Card.Title>
               
              </Card.Body>
            </Card>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default CategoryCardComponent;
