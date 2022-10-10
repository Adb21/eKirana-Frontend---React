import React from "react";
import "./headerFooter.css"


const Footer = () => 
<div>

<footer className="page-footer font-small blue pt-4 text-white-50 bg-dark">
    <div className="container-fluid text-center text-md-left ">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">eKirana Support</h5>
                <p>Types of support : Customer Support and Seller Support <br/>
                email support : ekiranateam@outlook.com <br/>
                <b><i>Developed by : Aditya Bhosle</i></b>
                </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase" >Connect with Us</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" className="text-white-50">Linkedin</a></li>
                    <li><a href="#!" className="text-white-50">Facebook</a></li>
                    <li><a href="#!" className="text-white-50">Twitter</a></li>
                   
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Get to Know Us</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" className="text-white-50">About Us</a></li>
                    <li><a href="#!" className="text-white-50">Careers</a></li>
                    <li><a href="#!" className="text-white-50">FAQs</a></li>
                   
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="#" className="text-white"> eKirana</a>
    </div>

</footer>
</div>

export default Footer
