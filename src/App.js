import logo from "./logo.svg";
import "./App.css";
import NavbarHeader from "./components/header-footer/NavbarHeader.component";
import Footer from "./components/header-footer/Footer.component";
import Home from "./components/Home/Home.component";
import ProductsComponent from "./components/Products/Products.component";
import { Routes, Route } from "react-router-dom";
import ProductDetailComponent from "./components/Products/ProductDetail.component";
import SigninComponent from "./components/Home/Signin.component";
import RegisterComponent from "./components/Home/Register.component";

function App() {
  const categories = [
    {Title:"Grains",URL:"/assets/home/grains.jpg",id:0},
    {Title:"Masala",URL:'/assets/home/masala.jpg',id:1},
    {Title:"Oils",URL:'/assets/home/oils.jpg',id:3},
    {Title:"Flour",URL:'/assets/home/flour.jpg',id:4},
    {Title:"Eateries",URL:'/assets/home/eateries.jpg',id:5},
    {Title:"Soap & Detergents",URL:'/assets/home/soaps.jpeg',id:6},
    {Title:"Cosmetics",URL:'/assets/home/cosmetics.jpg',id:7},
    {Title:"Others",URL:'/assets/home/sample.jpg',id:8}
  ];

  return (
    <div className="App">
      <NavbarHeader></NavbarHeader>
        <Routes>
          <Route path="/" element={<Home categories={categories} />} />
          <Route path="/signin" element={<SigninComponent/>} />
          <Route path="/signup-cust" element={<RegisterComponent/>} />
          <Route path="/products" >
          <Route index element={<ProductsComponent categories={categories} pageLink={'http://localhost/api/product/'}/>} />
          <Route path=":id" element={<ProductDetailComponent/>}/> 
          <Route path="Category=:id" element={<ProductsComponent categories={categories} pageLink={'http://localhost/api/product/?Category='}/>} /> 
          </Route>
          
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
