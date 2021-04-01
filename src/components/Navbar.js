import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { AuthContext } from "../context/Auth";

const Navbar = (props) => {
    const { user, logout } = useContext(AuthContext);
    const history = useHistory();

    const handleClick = () => {
        logout();
        history.push("/");
    }

    return (
        <div className="container-fluid">
            <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" style={{color: "blue"}}>{ user ? user.username : " "}</Link>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <i className="fas fa-bars"></i>
                    </button>

                    <div class="navbar-nav ms-auto mb-2 mb-lg-0" id="navbarRightAlignExample">
                    <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                        class="rounded-circle"
                        height="50"
                        alt=""
                        loading="lazy"
                    /> <p className="logout mt-2 mx-3" style={{color: "blue"}} onClick={handleClick}>logout</p>
                    </div>
                </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;