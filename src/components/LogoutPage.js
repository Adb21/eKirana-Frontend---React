import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/userAuth';

function LogoutPage() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(logout())
    },[dispatch])

  return (
    <div>

    <div>LogoutPage</div>
    <h2>Logout Successfull</h2>
    </div>
  )
}

export default LogoutPage