import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomerListItem from '../components/CustomerListItem';

export default function CustomerListPage() {
    const [customerList, setCustomerList] = useState([]);

    useEffect(() => {
        getCustomerList()
    }, [])


    function getCustomerList() {
        const url = "https://frebi.willandskill.eu/api/v1/customers/";
        const token = localStorage.getItem("token");
        fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setCustomerList(data.results))
    }

    return (
        <div>
            <Link className="btn btn-secondary mt-5 mb-5" to="/home/create">Create Customer</Link>

            {customerList.map(item => {
                return <CustomerListItem key={item.id} customerData={item} />
            })}
        </div>    
    )
}
