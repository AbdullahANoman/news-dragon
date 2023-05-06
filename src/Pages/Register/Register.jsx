import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
    const [user,setUser] = useState(null)
    const [accepted,setAccepted] = useState(false)
    const [error,setError] = useState('')
    const [success,setSuccess] = useState('')
    const {signUp} = useContext(AuthContext)
    console.log(accepted)
    const handleRegister = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value ;
        const photoUrl = form.photo.value;
        const email = form.email.value ;
        const password = form.password.value ;
        console.log(name,email,password,photoUrl)
        signUp(email,password)
        .then(result=>{
            const loggedUser = result.user;
            setUser(loggedUser)
            setSuccess('User Created Successfully ')
        }).catch(error=>{
            setError(error.message)
        })
    }
  return (
    <>
      <div className="d-flex justify-content-center">
        <Form className="w-25 " onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="fw-bold">Your Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Your Name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="fw-bold">Photo Url</Form.Label>
            <Form.Control type="text" name="photo" placeholder="Photo Url" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="fw-bold">Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter your email address" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label className="fw-bold">Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Enter your password" required />
          </Form.Group>
          {
            user ? <p>{success}</p> : <p>{error}</p>
          }
          <Form.Check
              type="checkbox"
              label={<>Accept <Link to="/terms">TurmsAndCondition</Link></>}
              name="accept"
              id="formHorizontalRadios2"
              onClick={()=>setAccepted(!accepted)}

            />
          <Button className="mx-auto" type="submit" disabled={!accepted}> 
            Register
          </Button>
          <h6 className="mt-2 text-center ">
            Already  Have An Account ?{" "}
            <Link to="/login" className="text-decoration-none">
              Login
            </Link>
          </h6>
        </Form>
      </div>
    </>
  );
};

export default Register;
