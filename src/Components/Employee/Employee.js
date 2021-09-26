import React from 'react';
import './Employee.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faPortrait } from '@fortawesome/free-solid-svg-icons'



const Employee = (props) => {
    const { name, age, designation, image, job_id, project_charge } = props;
    const select_element = <FontAwesomeIcon icon={faUserPlus} />
    const userPortrait = <FontAwesomeIcon icon={faPortrait} />
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text"> Designation: {designation}</p>
                        <p className="card-text"> Age: {age}</p>
                        <p className="card-text"> Employee ID: {job_id}</p>
                        <h5 className="card-title">Project Charge: <span className="text-secondary">$</span>{project_charge}</h5>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <button onClick={() => props.handleSelectedEmployee(props)} className="btn btn-warning">{select_element} Select</button>
                        <button className="btn btn-outline-dark">{userPortrait} Profile</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Employee;