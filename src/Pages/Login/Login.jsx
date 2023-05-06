import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const [user,setUser] = useState(null)
    const [error,setError] = useState('')
    const [success,setSuccess] = useState('')
    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    const from = location.state?.from.pathname || '/categories/0';
    const navigate = useNavigate()
    const handleLogin = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value ;
        const password = form.password.value ;
        console.log(email,password)
        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            setUser(loggedUser)
            form.reset()
            setSuccess('User Created Successfully ')
            navigate(from)
        }).catch(error=>{
            setError(error.message)
        })
    }
  return (
    <>

      
      <div className="d-flex justify-content-center">
      <Form className="w-25 " onSubmit={handleLogin} >
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
        {/* <input type="email" name="email" placeholder="Enter your email" /> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password"placeholder="Password" />
      </Form.Group>
      {
        user ? <p className="text-success">{success}</p> : <p>{error}</p>
      }
      <Button className="mx-auto" type="submit">Log In</Button>
      <h6 className="mt-2 text-center ">Don't Have An Account ? <Link to="/register" className="text-decoration-none">Register</Link></h6>
      </Form>
      </div>


    </>
  );
};

export default Login;
