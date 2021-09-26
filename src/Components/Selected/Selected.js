import React from 'react';
import './Selected.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCog, faUserEdit } from '@fortawesome/free-solid-svg-icons'
const build_team = <FontAwesomeIcon icon={faUserCog} />
const rebuild_team = <FontAwesomeIcon icon={faUserEdit} />

const Selected = (props) => {
    const { selected } = props;
    let totalCharges = 0;
    let names = [];
    for (const person of selected) {
        totalCharges = totalCharges + person.project_charge;
        names.push(person.name + ' | ');
    }

    return (
        <div className="p-3 shadow bg-light h-100 ms-2">
            <h2 className="text-center text-primary">Employees Selected</h2> <hr className="mx-auto" />
            <p className="fw-bold fs-5">Employees Assigned: {props.selected.length}</p>
            <p> <span className="fw-bold fs-5">Employee Names:</span> {names}</p>
            <p className="fw-bold fs-5 text-danger text-center border">Total Payable: ${totalCharges}</p>
            <div className='d-flex justify-content-between'>
                <button className="btn btn-success">{build_team} Build Team</button>
                <button className="btn btn-dark" onClick={() => window.location.reload(false)}>{rebuild_team} Re-Submit</button>
            </div>
        </div>
    );
};

export default Selected;