import React, { useState, useEffect } from 'react';
import CustomerListItem from '../components/CustomerListItem';
import LoggedInUser from '../components/LoggedInUser';

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
            <LoggedInUser/>
            {customerList.map(item => {
                return <CustomerListItem key={item.id} customerData={item} />
            })}
        </div>    
    )
}
