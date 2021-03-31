import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from "../context/Auth";

const Begins = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="col-md-6">
            <div className="contact-form card">
                <div className="contact-image">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"/>
                </div>
            <form method="post">
                <h3>Please proceed</h3>
                <div className="row">
                    <Link to={`/${user.username}/personal-info`}>
                        <button className="btn btn-primary btn-block">Continue</button>
                    </Link> 
                </div>
            </form>
            </div>
    </div>
    );
};

export default Begins;