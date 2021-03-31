import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import { AuthContext } from "../context/Auth";
import { useForm } from "../util/Hooks";

function Login(props) {
    const context = useContext(AuthContext);
    const [errors, setErrors] = useState({});
    // const [user, setUser] = useState({username: "", email: "", password: "", confirmPassword: ""});

    const { handleChange, handleSubmit, user } = useForm(registerUser, {
        username: "", 
        email: "", 
        password: "",
         confirmPassword: ""
    })

    const [addUser] = useMutation(REGISTER_USER, {
        update(_, { data: { register: userData } }){
            context.login(userData)
            props.history.push("/dashboard");

        }, 
        onError(err){ 
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables: user
    });
    
    function registerUser(){
        addUser();
    }



    // const handleChange = (e) => {
    //     setUser({...user, [e.target.name]: e.target.value});
    // }


    // const handleSubmit = (e)=> {
    //     e.preventDefault();

    //     addUser();
    // }


    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center" style={{marginTop: "10%"}}>
                <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <h3 className="text-center">Sign Up</h3>  
                    {Object.keys(errors).length > 0 && (
                        <div className="alert alert-danger alert-dismissible">
                        <ul className="list">
                            {Object.values(errors).map((value) => (
                            <li key={value}>{value}</li>
                            ))}
                        </ul>
                        </div>
                    )}
                    <div className="form-outline mb-4">
                        <input type="text"  className="form-control border" name="username" value={user.username} onChange={handleChange}/>
                        <label className="form-label" for="form1Example1">Username</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="email"  className="form-control border" name="email" value={user.email} onChange={handleChange}/>
                        <label className="form-label" for="form1Example1">Email address</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="password" className="form-control border" name="password" value={user.password} onChange={handleChange}/>
                        <label className="form-label" for="form1Example2">Password</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="password"  className="form-control border" name="confirmPassword" value={user.confirmPassword} onChange={handleChange}/>
                        <label className="form-label" for="form1Example2">Confirm Password</label>
                    </div>
                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="form1Example3"
                            />
                            <label className="form-check-label" for="form1Example3"> Remember me </label>
                        </div>
                        </div>
                    </div>

                        <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                        <p className="text-center pt-3">Already have an account. <Link to="/">Login</Link></p>
                     </form>
                </div>
            </div>
        </div>
    );
}

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Login;