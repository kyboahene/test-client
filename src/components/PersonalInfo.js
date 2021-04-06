import { useMutation } from '@apollo/react-hooks';
import React, {  useState } from 'react';
import { useParams } from 'react-router';
import { ADD_PROSPECT } from '../util/Queries';


const PersonalInfo = (props) => {
    const [errors, setErrors] = useState("");
    const { username } = useParams();
    const [prospect, setProspect] = useState({
        username: username, 
        fname: "",
        Lname: "",
        email: "",
        phone: "",
    });
    
    const handleChange = (event) => {
        setProspect({ ...prospect, [event.target.name]: event.target.value });
      };
      

      const [addProspect] = useMutation(ADD_PROSPECT,
        {   
            update(_, { data }){
                console.log(data.addProspect.id);
                props.history.push({
                    pathname: `/driver-info/${username}`,
                    state: { ID: data.addProspect.id }
                });
            },  
            onError(err){ 
                setErrors(err&&err.graphQLErrors[0]?err.graphQLErrors[0].extensions.exception.errors:{});
            },
            variables: prospect  
         });
    
      const handleSubmit = (event) => {
        event.preventDefault();

        addProspect();
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
                <input type="hidden" name="username" value={username} onChange={handleChange}/>
                <h5 className="text-center">Enter your personal information</h5>
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
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form3Example1" placeholder="First Name" name="fname" className="form-control border" value={prospect.fname}  onChange={handleChange}/>
                            <label className="form-label" for="form3Example4">First Name</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form3Example2" placeholder="Last Number" name="Lname" className="form-control border" value={prospect.Lname} onChange={handleChange}/>
                            <label className="form-label" for="form3Example4">Last Name</label>
                        </div>
                    </div>
                </div>
                <div className="form-outline mb-4">
                    <input type="email" id="form3Example3" placeholder="Email Address"  name="email" className="form-control border" value={prospect.email} onChange={handleChange}/>
                    <label className="form-label" for="form3Example4">Email Address</label>        
                </div>
                <div className="form-outline mb-4">
                    <input type="tel" id="form3Example4" className="form-control border" name="phone" placeholder="" value={prospect.phone}  onChange={handleChange}/>
                    <label className="form-label" for="form3Example4">Phone Number</label>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4">Next</button> 
            </form>
            </div>
    </div>
    </div>
        </div>
    );
};

export default PersonalInfo;

