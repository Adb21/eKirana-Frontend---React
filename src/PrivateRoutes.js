import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


const PrivateRoutes = () => {
const logginStatus = useSelector((state) => state.auth.loggedin)

const ls_token = localStorage.getItem('token');
console.log(logginStatus)
console.log(ls_token)
return (

  logginStatus ? <Outlet/> : <Navigate to='/signin'/>
  )
}

export default PrivateRoutes
