import React, {useState} from 'react';
import { Button } from "react-bootstrap";
import './signin.css';
import axios from 'axios';

const RegisterComponent = () => {
    const [userForm,setuserForm] = useState({   
        username:"",
        password:"",
        email:"",
        first_name:"",
        last_name:"",
        Mobile:0,
        User_Type: 0,
        Locality: "",
        State:"",
        City: "",
        Pincode:0
    })

    const [errorMsg,seterrorMsg] = useState()
    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        if (name==="Mobile" && e.target.value.length===11){
            window.alert("Mobile shouldn't exceed 10 characters")
            e.target.value = "";
        }
        if (name==="Pincode" && e.target.value.length===7){
            window.alert("Pincode shouldn't exceed 6 characters")
            e.target.value = "";
        }
        setuserForm({...userForm,[name]:value})
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        console.log({username:userForm.username,password:userForm.password,email:userForm.email,first_name:userForm.first_name,last_name:userForm.last_name,profile:{
            Mobile:userForm.Mobile,User_Type:0,Locality:userForm.Locality,State:userForm.State,City:userForm.City,Pincode:userForm.Pincode
        }})
        sendPostRequest();
        e.target.reset();
    }

    const sendPostRequest = async () => {
        try {
            const formDetails = {username:userForm.username,password:userForm.password,email:userForm.email,first_name:userForm.first_name,last_name:userForm.last_name,profile:{
                Mobile:userForm.Mobile,User_Type:0,Locality:userForm.Locality,State:userForm.State,City:userForm.City,Pincode:userForm.Pincode
            }};
            const resp = await axios.post('http://localhost/user/api/register', formDetails);
            console.log(resp.data);
        } catch (err) {
            // Handle Error Here
            seterrorMsg(err.response.data.Error);
            console.error(err.response.data.Error);

        }
    };
    

    return (
        <div>
            <div className='container'>
            <h1 className='d-flex justify-content-center my-4'>Customer Sign-up</h1>
            <br />
            <div className='login-block'>
                <form method='POST' onSubmit={onSubmit}>
                <div className='username'>
                    <label htmlFor="username"><b>Set your Username</b></label><br />
                    <input type="text" name="username" id="username" onChange={handleInput} required/>
                </div>
                <div className='email'>
                    <label htmlFor="email"><b>Set your Email</b></label><br />
                    <input type="text" name="email" id="email" onChange={handleInput} required/>
                </div>
                <div className='first_name'>
                    <label htmlFor="first-name"><b>Set your First Name</b></label><br />
                    <input type="text" name="first_name" id="first-name" onChange={handleInput} required/>
                </div>
                <div className='last_name'>
                    <label htmlFor="last-name"><b>Set your Last Name</b></label><br />
                    <input type="text" name="last_name" id="last_name" onChange={handleInput} required/>
                </div>
                <div className='Mobile'>
                    <label htmlFor="Mobile"><b>Set your Mobile</b></label><br />
                    <input type="number" name="Mobile" id="Mobile" onChange={handleInput} required/>
                </div>
                <div className='Locality'>
                    <label htmlFor="Locality"><b>Set your Locality</b></label><br />
                    <input type="text" name="Locality" id="Locality" onChange={handleInput} required/>
                </div>
                <div className='City'>
                    <label htmlFor="City"><b>Set your City</b></label><br />
                    <input type="text" name="City" id="City" onChange={handleInput} required/>
                </div>
                <div className='State'>
                    <label htmlFor="State"><b>Set your State</b></label><br />
                    <input type="text" name="State" id="State" onChange={handleInput} required/>
                </div>
                <div className='Pincode'>
                    <label htmlFor="Pincode"><b>Set your Pincode</b></label><br />
                    <input type="text" name="Pincode" id="Pincode" onChange={handleInput} required/>
                </div>
                <div className='password1'>
                    <label htmlFor="password1"><b>Set your Password</b></label><br />
                    <input type="password" name="password" id="password" onChange={handleInput} required/>
                </div>
                <div className='password2'>
                    <label htmlFor="password"><b>Confirm your Password</b></label><br />
                    <input type="password" name="password2" id="password2" onChange={handleInput} required/>
                </div>
                <div className='login-btn'>
                    <Button type="submit" variant='warning' onSubmit={onSubmit}>Login</Button>
                </div>
                </form>
            </div>
        </div>
        </div>
    );
}

export default RegisterComponent;
