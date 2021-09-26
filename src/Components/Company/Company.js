import './Company.css';
import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import Selected from '../Selected/Selected';

const Company = () => {
    const [company, setCompany] = useState([]);
    // const [employee, setEmployee] = useState([]);

    useEffect(() => {
        fetch('./database.JSON')
            .then(res => res.json())
            .then(data => setCompany(data))
    }, [])
    // console.log(company);
    // const { name, age, designation, image, job_id, project_charge } = company;
    // console.log(employee);
    // const handleSelectedEmployees = () => {
    //     // const selectedEmployees = [...company, employee];
    //     // setEmployee(selectedEmployees);
    // }
    return (
        <div className='container company-container p-0'>
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
                    ></Employee>)
                }
            </div>
            <div>
                <Selected></Selected>
            </div>


        </div>
    );
};

export default Company;