import React from 'react'
import { Navbar,Nav,Form,NavDropdown,Container,FormControl,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import cart from './../../media/cartY.png';

export default function NavbarHeader() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container fluid>
            <Navbar.Brand as={Link} to={'/'}> eKirana</Navbar.Brand>
           
            
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                // position= "relative"
                // width= "200"
              />
              <Button variant="warning">Search</Button>
            </Form>
            <Nav
                className="ms-auto my-1 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
              
                <Nav.Link className="me-2 text-light" as={Link} to={'/products'}>Products</Nav.Link>
                <Nav.Link  className="me-2 text-light">Shops</Nav.Link>
                {/* <Nav.Link href="#action1" className="me-2 text-light">Account</Nav.Link> */}
                
                <Nav.Link className="me-2 text-light">
                <img
              src={cart}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Nav.Link>
            <NavDropdown title="Account" id="dropdown-menu-align-end" align="end" className="me-3 text-white">
                  <NavDropdown.Item as={Link} to={'/signin'}>Sign in</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={'/signup-cust'}>New Customer ? Register here</NavDropdown.Item>  
                </NavDropdown>
            
           
                {/* <NavDropdown title="Account" id="basic-nav-dropdown" className="me-2 text-white">
                  <NavDropdown.Item href="#action/3.2">Orders</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                </NavDropdown> */}
                
            </Nav>
                {/* nav controls  */}
            
            
           
            
        </Container>
        </Navbar>
    </div>
  )
}

