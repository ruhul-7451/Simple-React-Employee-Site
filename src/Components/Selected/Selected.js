import React from 'react';
import './Selected.css';

const Selected = (props) => {
    console.log(props.selected);
    const { selected } = props;
    let totalCharges = 0;
    let names = [];
    for (const person of selected) {
        totalCharges = totalCharges + person.project_charge;
        names.push(person.name + ' | ');
    }

    return (
        <div className="p-3 shadow bg-light h-100 ms-2">
            <h5 className="text-center text-primary">Employees Selected</h5> <hr className="mx-auto" />
            <p className="fw-bold">Employees Assigned: {props.selected.length}</p>
            <p> <span className="fw-bold">Employee Names:</span> {names}</p>
            <p className="fw-bold fs-5 text-danger">Total Payable: {totalCharges}$</p>
        </div>
    );
};

export default Selected;