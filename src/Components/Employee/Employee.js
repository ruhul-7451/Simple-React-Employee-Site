import React from 'react';
import './Employee.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const select_element = <FontAwesomeIcon icon={faUserPlus} />

const Employee = (props) => {
    const { name, age, designation, image, job_id, project_charge } = props;

    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{designation}</p>
                        <p className="card-text"> Age: {age}</p>
                        <p className="card-text"> Employee ID: {job_id}</p>
                        <h5 className="card-title">Project Charge: {project_charge}<span className="text-secondary">$</span></h5>
                    </div>
                    <div className="card-footer">
                        <button onClick={() => props.handleSelectedEmployee(props)} className="btn btn-warning">{select_element} Selected</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Employee;