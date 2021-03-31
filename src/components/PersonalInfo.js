import React, { useContext } from 'react';
import { AuthContext } from '../context/Auth';


const PersonalInfo = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="container">
            <div className="row d-flex justify-content-center" style={{marginTop: "15%"}}>
            <div className="col-md-6">
            <div className="contact-form card">
                <div className="contact-image">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"/>
                </div>
            <form method="post">
                <h5 className="text-center">Enter your personal information</h5>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form3Example1" placeholder="First Name" className="form-control border" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form3Example2" placeholder="Last Number" className="form-control border" />
                        </div>
                    </div>
                </div>
                <div className="form-outline mb-4">
                    <input type="email" id="form3Example3" placeholder="Email Address" className="form-control border" />
                </div>
                <div className="form-outline mb-4">
                    <input type="tel" id="form3Example4" className="form-control border"placeholder=""  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
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

