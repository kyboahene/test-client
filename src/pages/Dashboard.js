import React, { useContext } from 'react';
import { AuthContext } from "../context/Auth";

import Navbar from '../components/Navbar';


const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
        <Navbar/>
        <div className="container mt-4">
            <div className="row border-bottom mx-2">
                <div md="2" className="col-md-2 pb-1" style={{borderBottom: "3px blue solid"}}>
                    <h3>Dashboard</h3>
                </div>
            </div>
                <div className="row">
                <div className="col-md-4">
                    <div className="card border p-4 mt-4">
                        <p className="mb-0 pb-3" style={{borderBottom: "3px blue solid"}}>Policies <br/> <span className="">5</span> </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border p-4 mt-4">
                        <p className="mb-0 pb-3" style={{borderBottom: "3px blue solid"}}>Total Premium <br/> <span>5</span></p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border p-4 mt-4">
                        <p className="mb-0">Copy Link to Policy Tool</p>
                        <p className="mt-2 mb-0 p-1 px-2 border">localhost://{user ? user.username : ""}  <i className="fas fa-copy"></i> </p>
                    </div>
                </div>
            </div>
            <div className="row card border mx-0 mt-4">
                <div className="col-md-4 p-4">
                    <div className="input-group rounded">
                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                            aria-describedby="search-addon" />
                        <span className="input-group-text border-0" id="search-addon">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div className="row card border mt-4 mx-0">
                <div className="col-md-12">
                   <div className="row py-2 px-0">
                        <div className="col-md-2">
                        <h5>Prospect lists  | </h5> 
                        </div>
                        <div className="text-left col-md-2">
                            <p className="text-muted">6 prospects</p>
                        </div>
                   </div>
                   <div className="row border-top">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">Date</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Provider</th>
                                <th scope="col">Status</th>
                                <th scope="col">Drives License(s)</th>
                                <th scope="col">Declaration Pages(s)</th>
                                </tr>
                            </thead>
                        </table>
                   </div>
                </div> 
            </div>
        </div>
        </>
    );
};


export default Dashboard;