import { useMutation } from '@apollo/react-hooks';
import React, {  useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from '../util/Hooks';
import { ADD_PROSPECT } from '../util/Queries';


const PersonalInfo = (props) => {
    const [errors, setErrors] = useState({});
    const { username } = useParams();

    const { handleChange, handleSubmit, user } = useForm(addAprospect, {
        username: "", 
        fname: "",
        Lname: "",
        email: "",
        phone: "",
    }) 

    const [addProspect] = useMutation(ADD_PROSPECT, {
        update(_, { data }){
            console.log(data);
            props.history.push({
                pathname: `/driver-info/${username}`,
                state: { ID: data._id }
            });
        }, 
        onError(err){ 
            setErrors(err&&err.graphQLErrors[0]?err.graphQLErrors[0].extensions.exception.errors:{});
        },
        variables: user
    });

    function addAprospect(){
        addProspect();
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center" style={{marginTop: "15%"}}>
            <div className="col-md-6">
            <div className="contact-form card">
                <div className="contact-image">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" alt="contact"/>
                </div>
            <form onSubmit={handleSubmit}>
                <h5 className="text-center">Enter your personal information</h5>
                {Object.keys(errors).length > 0 && (
                        <div className="alert alert-danger">
                        <ul className="list">
                            {Object.values(errors).map((value) => (
                            <li key={value}>{value}</li>
                            ))}
                        </ul>
                        </div>
                    )}
                <div className="row mb-4">
                    <div className="col">
                    <input type="hidden" name="username" value={username} onChange={handleChange}/>
                        <div className="form-outline">
                            <input type="text" id="form3Example1" placeholder="First Name" name="fname" className="form-control border" value={user.fname}  onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form3Example2" placeholder="Last Number" name="Lname" className="form-control border" value={user.Lname} onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <div className="form-outline mb-4">
                    <input type="email" id="form3Example3" placeholder="Email Address"  name="email" className="form-control border" value={user.email} onChange={handleChange}/>
                </div>
                <div className="form-outline mb-4">
                    <input type="tel" id="form3Example4" className="form-control border" name="phone" placeholder="" value={user.phone}  onChange={handleChange}/>
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

