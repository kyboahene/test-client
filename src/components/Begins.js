import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Begins = (props) => {
    const { username } = useParams();
    return (
        <div className="col-md-6">
            <div className="contact-form card">
                <div className="contact-image">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" alt="contact"/>
                </div>
            <form method="post">
                <h3>Please proceed</h3>
                <div className="row">
                    <Link to={`/personal-info/${ username}`}>
                        <button className="btn btn-primary btn-block">Continue</button>
                    </Link> 
                </div>
            </form>
            </div>
    </div>
    );
};

export default Begins;