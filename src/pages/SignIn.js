import React from 'react'
import Nav from '../components/Nav';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
  const navigate = useNavigate()
  const status = true
  const signInUser=()=>{
    // if all instructions execute successfully
    if(status){
      navigate("/dashboard")

    }else{
      navigate("/")
    }
    

  }
  return (
    <>
    <Nav/>
    <div className="App">
        <div className="App-header">
            <h1>Sign In Page</h1>


            <button onClick={signInUser}>  Sign In</button>
        </div>
    </div>
    </>
  );
}

export default SignIn