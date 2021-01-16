import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

export default function CustomerDetailPage(props) {
    const customerId = props.match.params.id;
    const [customerItem, setCustomerItem] = useState(null);
    const history = useHistory(); 

    useEffect(() => {
        getCustomerItem();
    }, [])

    function getCustomerItem() {
        const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
        const token = localStorage.getItem("token");
        fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setCustomerItem(data))
    }

    function deleteCustomer() {
        const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
        const token = localStorage.getItem("token");
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(() => history.push('/home'))
    }

    return (
        <div> 
            <h1 className="mt-5 mb-5 text-center">Customer Detail Page</h1>
            {console.log(customerItem)}
            {!customerItem
                ?
                (
                    <span>Laddar data...</span>
                )
                :
                (
                    <div>
                        <table className="table table-bordered">
                            <tbody className="table-hover">
                                <tr>
                                    <th>Name</th>
                                    <td>{customerItem.name}</td>
                                </tr>
                                <tr>
                                    <th>Organisation Number</th>
                                    <td>{customerItem.organisationNr}</td>
                                </tr>
                                <tr>
                                    <th>VAT Number</th>
                                    <td>{customerItem.vatNr}</td>
                                </tr>
                                <tr>
                                    <th>Reference</th>
                                    <td>{customerItem.reference}</td>
                                </tr>
                                <tr>
                                    <th>Payment Term</th>
                                    <th>{customerItem.paymentTerm}</th>
                                </tr>
                                <tr>
                                    <th>Website</th>
                                    <td>
                                        <a href={customerItem.website} target="_blank">
                                            {customerItem.website}
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>
                                        <a href={`mailto:${customerItem.email}`}>
                                            {customerItem.email}
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Phone Number</th>
                                    <td>{customerItem.phoneNumber}</td>
                                </tr>    
                            </tbody>
                        </table>
                        <button className="btn btn-secondary mt-3" onClick={deleteCustomer}>Delete Customer</button>
                        <Link className="btn btn-secondary ml-3 mt-3" to={`/home/${customerId}/edit`}>Edit Customer</Link>
                    </div>
                )
            } 
        </div>
    )
}
