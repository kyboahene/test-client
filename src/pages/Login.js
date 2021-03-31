import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { AuthContext } from "../context/Auth";
import { useForm } from "../util/Hooks";

function Login(props) {
    const context = useContext(AuthContext);
    const [errors, setErrors] = useState({});
    // const [user, setUser] = useState({username: "", email: "", password: "", confirmPassword: ""});

    const { handleChange, handleSubmit, user } = useForm(registerUser, {
        email: "", 
        password: "",
    })

    const [addUser] = useMutation(LOGIN_USER, {
        update(_, { data: {login: userData} }){
            context.login(userData)
            props.history.push("/dashboard");

        }, 
        onError(err){ 
            setErrors(err&&err.graphQLErrors[0]?err.graphQLErrors[0].extensions.exception.errors:{});
        },
        variables: user
    });
    
    function registerUser(){
        addUser()
    }

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center" style={{marginTop: "15%"}}>
                <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <h3 className="text-center">Sign In</h3> 
                    {Object.keys(errors).length > 0 && (
                        <div className="alert alert-danger">
                        <ul className="list">
                            {Object.values(errors).map((value) => (
                            <li key={value}>{value}</li>
                            ))}
                        </ul>
                        </div>
                    )} 
                    <div className="form-outline mb-4">
                        <input type="email" id="form1Example1" className="form-control border" name="email" value={user.email} onChange={handleChange}/>
                        <label className="form-label" for="form1Example1">Email address</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="form1Example2" className="form-control border" name="password" value={user.password} onChange={handleChange}/>
                        <label className="form-label" for="form1Example2">Password</label>
                    </div>

                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="form1Example3"
                            checked
                            />
                            <label className="form-check-label" for="form1Example3"> Remember me </label>
                        </div>
                        </div>

                        <div className="col">
                        <a href="#!">Forgot password?</a>
                        </div>
                    </div>

                        <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                        <p className="text-center pt-3">Don't have an account. <Link to="/register">Sign Up</Link></p>
                     </form>
                </div>
            </div>
        </div>
    );
}

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;



export default Login;