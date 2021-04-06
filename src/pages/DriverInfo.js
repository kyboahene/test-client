import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import {  useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { ADD_DRIVER_LICENSE } from '../util/Queries';
import { Link } from 'react-router-dom';

const DriverInfo = (props) => {
    const history = useHistory();

    const [errors, setErrors] = useState("");
    const { username } = useParams();
    const ID = history.location.state.ID;
    const [prospect, setProspect] = useState({
        ProspectId: "ID", 
        DofBirth: "",
        Number: "",
        State: "",
    });
    
    const handleChange = (event) => {
        setProspect({ ...prospect, [event.target.name]: event.target.value });
      };
      
    
      const [addDriverLincense] = useMutation(ADD_DRIVER_LICENSE,
        {   
            update(_, { data }){
                console.log(data);
                // props.history.push({
                //     pathname: `/driver-info/${username}`,
                //     state: { ID: data._id }
                // });
            },  
            onError(err){ 
                setErrors(err&&err.graphQLErrors[0]?err.graphQLErrors[0].extensions.exception.errors:{});
            },
            variables: prospect  
         });
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(ID);
        addDriverLincense();
      };

    return (
        <div className="container">
            <div className="row d-flex justify-content-center" style={{marginTop: "15%"}}>
            <div className="col-md-6">
            <div className="contact-form card">
                <div className="contact-image">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" alt="contact"/>
                </div>
            <form onSubmit={handleSubmit}>
                <h5 className="text-center">Enter your driver license</h5>
                {
                errors ? 
                Object.keys(errors).length > 0 && (
                    <div className="alert alert-danger">
                    <ul className="list">
                        {Object.values(errors).map((value) => (
                        <li key={value}>{value}</li>
                        ))}
                    </ul>
                    </div>
                ) : ""} 
                <div className="form-outline mb-4">
                <input type="date" id="form3Example1" placeholder="Date of Birth" name="DofBirth" className="form-control border" value={prospect.DofBirth}  onChange={handleChange}/>    
                </div>
                <div className="form-outline mb-4">
                    <input type="type" id="form3Example4" className="form-control border" name="Number" placeholder="Number" value={prospect.Number}  onChange={handleChange}/>
                    <label className="form-label" for="form3Example4">Number</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="type" id="form3Example4" className="form-control border" name="State" placeholder="Number" value={prospect.State}  onChange={handleChange}/>
                    <label className="form-label" for="form3Example4">State</label>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4">Next</button> 
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <Link to={`/brand-select/${username}`} className="d-flex align-self-center"> Skip </Link>
                    </div>
                </div> 
            </form>
            </div>
    </div>
    </div>
        </div>
    );
};

export default DriverInfo;