import React, { useEffect, useState } from 'react';
import './Company.css';
import Employee from '../Employee/Employee';
import Selected from '../Selected/Selected';

const Company = () => {
    const [company, setCompany] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        fetch('./database.JSON')
            .then(res => res.json())
            .then(data => setCompany(data))
    }, [])

    const handleSelectedEmployee = (employee) => {
        const selection = [...selected, employee];
        setSelected(selection);
    }

    return (
        <div className='container company-container p-0 mb-3'>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    company.map(employee => <Employee
                        key={employee.job_id}
                        name={employee.name}
                        age={employee.age}
                        designation={employee.designation}
                        job_id={employee.job_id}
                        project_charge={employee.project_charge}
                        image={employee.image}
                        handleSelectedEmployee={handleSelectedEmployee}
                    ></Employee>)
                }
            </div>
            <div>
                <Selected selected={selected}></Selected>
            </div>


        </div>
    );
};

export default Company;