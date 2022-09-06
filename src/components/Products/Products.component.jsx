import React from "react";
import { useState, useEffect } from "react";
import ProductCardComponent from "./ProductCard.component";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductsComponent = ({categories,pageLink}) => {
  const [products, setProducts] = useState([]);
  const [nextPage,setNextPage] = useState('');
  const [prevPage,setprevPage] = useState('');
  const [pageCount,setPageCount] = useState(0);
  const {id} = useParams();
  const [pageurl,setPageurl] = useState(()=>{
    if( id !== undefined){
      console.log("insidde IF")
      let url = pageLink+id
      console.log(url)
      return url
    }
    else{
      return "http://localhost/api/product/"
    }
  });
  
  useEffect(() => {
    
    fetch(pageurl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data.results);
        setNextPage(data.next);
        setprevPage(data.previous);
        setPageCount(data.count);
      })      
      
    document.title = "eKirana-Products";
  },[pageurl]);

  const handleNext = async () =>{
    await fetch(nextPage)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data.results);
        setNextPage(data.next);
        setprevPage(data.previous);
      })      
  }

  const handlePrev = async () =>{
    await fetch(prevPage)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data.results);
        setNextPage(data.next);
        setprevPage(data.previous);
      })      
  }

  const handleFirst = async () =>{
    await fetch('http://localhost/api/product/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data.results);
        setNextPage(data.next);
        setprevPage(data.previous);
      })      
  }

  const handlelast = async () =>{
    let last = Math.ceil(pageCount / products.length)
    let url = "http://localhost/api/product/?page=" + last;
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data.results);
        setNextPage(data.next);
        setprevPage(data.previous);
      })      
  }

  const titleid={
    kid:id
    
  }
  

  return (
    
    <div className="Products-main">
      {console.log(`passed id is ${id}`)}
      {console.log(`passed id is ${pageLink}`)}
      <ProductCardComponent products={products} categories={categories} titleid={titleid}></ProductCardComponent>
      <div className="d-flex justify-content-center my-2">
        <Button variant="warning" className="mx-auto" onClick={handleFirst}>
          &laquo; First
        </Button>
        <Button disabled={prevPage == null}  variant="warning" className="mx-1" onClick={handlePrev}>
          &larr; Prev
        </Button>
        <Button disabled={nextPage == null} variant="warning" className="mx-1" onClick={handleNext}>
          Next &rarr;
        </Button>
        <Button variant="warning" className="mx-auto" onClick={handlelast}>
          Last &raquo;
        </Button>
      </div>
    </div>
  );
};

export default ProductsComponent;
