import React, {useState} from 'react';
import { Button } from "react-bootstrap";
import './signin.css';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux'
import { login } from '../../redux/userAuth';
import { Navigate } from "react-router-dom";


const SigninComponent = () => {
    const loggedin = useSelector((state) => state.auth.loggedin)

    const dispatch = useDispatch()

    const [userCreds,setuserCreds] = useState({
        username:'',
        password:''
    })
    const [errorMsg,seterrorMsg] = useState('')


    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setuserCreds({...userCreds,[name]:value})
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        console.log(userCreds)
        sendPostRequest();
        
        e.target.reset();
    }

    const sendPostRequest = async () => {
        try {
            const resp = await axios.post('http://localhost/user/api/login', userCreds);

            // const res = await axios.get('http://localhost/api/cart', {
            // headers: {
            // 'Authorization': `Bearer ${resp.data.tokens}`
            // } 
            // })
            // let cartData = await res.data;
            // let count = Object.values(cartData)[1]
            // console.log(resp.data);
            console.log(resp.data.Username);
            console.log(resp.data.tokens);

            dispatch(login({username:resp.data.Username,token:resp.data.tokens}))
            // dispatch(cart(count.length))
        } catch (err) {
            // Handle Error Here
            seterrorMsg(err.response.data.Error);
            console.error(err.response.data.Error);
        }
    };
    
    return (
        <div className='container'>
            {loggedin && (
          <Navigate to="/products" replace={true} />
        )}
            <h1 className='d-flex justify-content-center my-4'>Login</h1>
            <hr />

            <br />
            <div className='login-block'>
                <form method='POST' onSubmit={onSubmit}>
                <div className='username'>
                    <label htmlFor="username"><b>Enter your username</b></label><br />
                    <input type="text" name="username" id="username" onChange={handleInput}/>
                </div>
                <div className='password'>
                    <label htmlFor="password"><b>Enter your password</b></label><br />
                    <input type="password" name="password" id="password" onChange={handleInput}/>
                </div>
                <div className='login-btn'>
                    <Button type="submit" variant='warning' onSubmit={onSubmit}>Login</Button>
                </div>
                </form>
            </div>
        </div>
    );
}

export default SigninComponent;
