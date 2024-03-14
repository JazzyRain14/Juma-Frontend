import React, { useEffect } from 'react'
import { Link , useNavigate} from 'react-router-dom';
const AdminHomePg = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      alert("yo it the admin");
    }, 2000);
  },[])

  const logout = () =>{
    localStorage.clear();
    navigate("/signin");
  }
  
  return (
    <><p></p>
    <Link to="/signin" onClick={logout}></Link>
    </>
  )
}

export default AdminHomePg